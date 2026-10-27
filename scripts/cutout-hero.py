"""Turn a white-background stock illustration into a transparent WebP for the hero.

Usage:  python3 scripts/cutout-hero.py path/to/licensed-image.jpg public/hero/ai-agents-hero.webp

Only the white that touches the image border is removed (flood fill), so white parts INSIDE the
artwork (the robot's head, screens) stay solid. Edges are feathered so they sit cleanly on blue.
Needs: pip install pillow numpy scipy
"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
a = np.asarray(im).astype(np.int16)

# 1) true background: pure-white regions (all channels >= 250) that are big. This also catches white
#    "holes" enclosed by the artwork (between connector lines), while small highlights inside the
#    art (robot head, screens) are too small or not white enough to qualify.
pure = (a >= 250).all(axis=2)
lab, n = ndi.label(pure)
sizes = ndi.sum(pure, lab, range(1, n + 1))
big = np.isin(lab, [i + 1 for i, sz in enumerate(sizes) if sz > 600])
# 2) grow that region a few pixels into "almost white" JPEG fringe so no speckled halo remains
loose = (a >= 222).all(axis=2)
bg = big.copy()
for _ in range(4):
    bg = ndi.binary_dilation(bg) & (loose | bg)

# feather: soften the alpha edge by ~1px so anti-aliased outlines don't leave a white halo
alpha = (~bg).astype(np.float32)
alpha = ndi.gaussian_filter(alpha, 0.8)
alpha = np.clip((alpha - 0.35) / 0.4, 0, 1)

# pull the matte colour out of edge pixels (de-fringe white)
rgb = np.asarray(im).astype(np.float32)
a_safe = np.maximum(alpha[..., None], 0.05)
rgb = np.clip((rgb - 255 * (1 - alpha[..., None])) / a_safe, 0, 255)

out = np.dstack([rgb, alpha * 255]).astype(np.uint8)
Image.fromarray(out, "RGBA").save(dst, "WEBP", quality=92, method=6)
print("saved", dst, Image.open(dst).size)
