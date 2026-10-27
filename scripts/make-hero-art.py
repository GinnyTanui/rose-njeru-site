"""Generates the isometric hero artwork for the service pages (original artwork, no licence needed).
Run:  python3 scripts/make-hero-art.py     -> writes public/hero/{audit,integration,workflow,leads,aiagent,about,pricing,contact}.svg
Colours are tuned for the electric-blue #2F5BFF hero: pale tops, mid-blue sides, mint linework.
"""
import math, os

U = 54            # isometric unit in px
CX, CY = 600, 470 # screen position of world origin
TOP, LEFT, RIGHT = '#F2F6FF', '#B9CCFF', '#86A5FF'
DEEP, DEEP_L, DEEP_R = '#E1EAFF', '#7F9DFF', '#5F82FF'
MINT, MINT_L, MINT_R = '#C9EBD6', '#8CC8A4', '#6FB38C'
NAVY, NAVY_L, NAVY_R = '#2147D6', '#1A39B0', '#142D8C'
WHITE, PINK = '#FFFFFF', '#FF3D8B'

def P(x, y, z=0):
    return (CX + (x - y) * 0.866 * U, CY + (x + y) * 0.5 * U - z * U)

def poly(pts, fill, extra=''):
    return '<polygon points="%s" fill="%s" %s/>' % (' '.join('%.1f,%.1f' % p for p in pts), fill, extra)

def box(x, y, z, w, d, h, c=(TOP, LEFT, RIGHT)):
    t, l, r = c
    top = [P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)]
    left = [P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)]
    right = [P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)]
    return poly(left, l) + poly(right, r) + poly(top, t)

def line(a, b, w=3, col=MINT, dash='', op=1):
    return '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="%s" stroke-linecap="round" %s opacity="%s"/>' % (a[0], a[1], b[0], b[1], col, w, ('stroke-dasharray="%s"' % dash) if dash else '', op)

def path(pts, w=3, col=MINT, dash='', op=1):
    d = 'M' + ' L'.join('%.1f,%.1f' % p for p in pts)
    return '<path d="%s" fill="none" stroke="%s" stroke-width="%s" stroke-linecap="round" stroke-linejoin="round" %s opacity="%s"/>' % (d, col, w, ('stroke-dasharray="%s"' % dash) if dash else '', op)

def node(p, r=9, col=MINT, ring=True):
    s = '<circle cx="%.1f" cy="%.1f" r="%s" fill="%s"/>' % (p[0], p[1], r, col)
    if ring: s += '<circle cx="%.1f" cy="%.1f" r="%s" fill="none" stroke="%s" stroke-width="2" opacity=".5"/>' % (p[0], p[1], r + 8, col)
    return s

def ring_poly(cx, cy, rad, n=48, z=0):
    return [P(cx + rad * math.cos(2 * math.pi * i / n), cy + rad * math.sin(2 * math.pi * i / n), z) for i in range(n)]

def gear(cx, cy, z, r_out, r_in, teeth, h, c=(TOP, LEFT, RIGHT), rot=0.0, hole=0.0):
    pts = []
    for i in range(teeth * 4):
        a = rot + 2 * math.pi * i / (teeth * 4)
        r = r_out if i % 4 in (0, 1) else r_in
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    t, l, rr = c
    out = ''
    steps = max(6, int(h * 14))
    for s in range(steps):
        zz = z + h * s / steps
        shade = l if s < steps * 0.5 else rr  # two-tone side
        out += poly([P(x, y, zz) for x, y in pts], shade)
    out += poly([P(x, y, z + h) for x, y in pts], t)
    if hole:
        out += poly(ring_poly(cx, cy, hole, 36, z + h), NAVY)
        out += poly(ring_poly(cx, cy, hole * 0.55, 36, z + h), '#6F8DFF')
    return out

def platform(x, y, w, d, h=0.5, z=0, c=(DEEP, DEEP_L, DEEP_R)):
    return box(x, y, z, w, d, h, c)

def svg(body, vb=None):
    # fit the viewBox to the artwork so every scene is centred and nothing is clipped
    import re
    xs, ys = [], []
    for m in re.finditer(r'points="([^"]+)"|d="M([^"]+)"', body):
        for pair in re.findall(r'(-?[\d.]+),(-?[\d.]+)', m.group(1) or m.group(2)):
            xs.append(float(pair[0])); ys.append(float(pair[1]))
    for m in re.finditer(r'(?:x1|x2|cx)="(-?[\d.]+)"', body): xs.append(float(m.group(1)))
    for m in re.finditer(r'(?:y1|y2|cy)="(-?[\d.]+)"', body): ys.append(float(m.group(1)))
    for m in re.finditer(r'translate\((-?[\d.]+) (-?[\d.]+)\)', body):
        xs += [float(m.group(1)) - 80, float(m.group(1)) + 110]; ys += [float(m.group(2)) - 80, float(m.group(2)) + 110]
    pad = 40
    x0, x1, y0, y1 = min(xs) - pad, max(xs) + pad, min(ys) - pad, max(ys) + pad
    vb = vb or '%.0f %.0f %.0f %.0f' % (x0, y0, x1 - x0, y1 - y0)
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" role="img" aria-hidden="true">%s</svg>' % (vb, body)

def blueprint_floor(x0, y0, x1, y1, z=0, step=1, op=.35):
    s = ''
    for i in range(int(x0), int(x1) + 1, step):
        s += line(P(i, y0, z), P(i, y1, z), 1.5, MINT, op=op)
    for j in range(int(y0), int(y1) + 1, step):
        s += line(P(x0, j, z), P(x1, j, z), 1.5, MINT, op=op)
    return s

def make_audit():
    b = blueprint_floor(-3, -3, 7, 7, 0, 1, .22)
    b += platform(-2, -2, 9, 5, .4)
    # the process path: boxes of different heights joined by a mint line
    steps = [(-1, -1, .9), (1.3, -1, 1.3), (3.6, -1, .7), (5.4, -.2, 1.9), (3.4, 1.4, 1.1), (1, 1.6, .8)]
    pts = []
    for (x, y, h) in steps:
        pts.append(P(x + .6, y + .6, .4 + h + .05))
    b += path(pts, 4, MINT, '2 11')
    for k, (x, y, h) in enumerate(steps):
        c = (MINT, MINT_L, MINT_R) if k == 3 else (TOP, LEFT, RIGHT)
        b += box(x, y, .4, 1.2, 1.2, h, c)
    for (x, y, h) in steps:
        b += node(P(x + .6, y + .6, .4 + h + .05), 7, NAVY, False)
    # findings: three bars
    for i, hh in enumerate((1.2, 2.1, 1.6)):
        b += box(5.6 + i * .8, 2.3, .4, .55, .55, hh, (WHITE, LEFT, RIGHT))
    # magnifier over the highlighted step
    mx, my = P(3.6, -1.2, 3.6)
    b += '<g transform="translate(%.1f %.1f)">' % (mx, my)
    b += '<circle r="62" fill="#fff" fill-opacity=".14" stroke="#fff" stroke-width="12"/>'
    b += line((44, 44), (96, 96), 16, '#fff')
    b += '<circle r="62" fill="none" stroke="%s" stroke-width="3" opacity=".7" transform="scale(.82)"/>' % MINT
    b += '</g>'
    b += node(P(-1.2, 2.6, 1.3), 6, PINK, False)
    return svg(b)

def make_integration():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2.2, -2.2, 9.4, 8.2, .4)
    # three meshing gears
    b += gear(1.6, 1.4, .4, 2.0, 1.55, 10, .55, (TOP, LEFT, RIGHT), 0.0, .55)
    b += gear(5.3, 2.4, .4, 1.55, 1.2, 8, .55, (MINT, MINT_L, MINT_R), 0.2, .42)
    b += gear(3.3, 5.0, .4, 1.15, .9, 6, .55, (DEEP, DEEP_L, DEEP_R), 0.1, .32)
    # tool cubes at the edge, joined to the gears by data lines
    tools = [((-1.6, -1.6), TOP), ((7.0, 0.2), MINT), ((7.0, 5.0), TOP), ((-1.6, 5.4), WHITE)]
    for (x, y), col in tools:
        cc = (MINT, MINT_L, MINT_R) if col == MINT else (TOP, LEFT, RIGHT)
        b += box(x, y, .4, 1.1, 1.1, 1.1, cc)
    links = [((-1.05, -1.05), (1.0, 0.9)), ((7.05, .75), (6.2, 2.1)), ((7.0, 5.55), (4.2, 5.1)), ((-1.05, 5.95), (2.6, 5.3))]
    for a, c in links:
        b += path([P(a[0], a[1], 1.7), P(c[0], c[1], 1.7)], 3.5, MINT, '2 10')
        b += node(P(c[0], c[1], 1.7), 6, '#fff', False)
    # data packets above the gears
    for (x, y, z) in [(1.6, 1.4, 2.6), (5.3, 2.4, 2.4), (3.3, 5.0, 2.1)]:
        b += box(x - .3, y - .3, z, .6, .6, .6, (WHITE, LEFT, RIGHT))
        b += line(P(x, y, z), P(x, y, .95), 2, MINT, '2 8', .8)
    return svg(b)

def make_workflow():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    # stair of tiles rising from front-left to back-right, each with a step node
    n = 5
    pts = []
    for i in range(n):
        x, y, z = -2 + i * 1.9, 4.6 - i * 1.5, 0
        h = .55 + i * .55
        b += box(x, y, z, 1.7, 1.7, h, (TOP, LEFT, RIGHT) if i < n - 1 else (MINT, MINT_L, MINT_R))
        pts.append(P(x + .85, y + .85, h + .05))
    b += path(pts, 4, MINT, '2 11')
    for i, p in enumerate(pts):
        b += node(p, 9 if i < n - 1 else 11, NAVY if i < n - 1 else '#fff', i == n - 1)
    # a branching side lane (automation) with small tiles
    side = [(2.2, 6.2), (3.6, 5.6), (5.0, 5.0)]
    for (x, y) in side:
        b += box(x, y, 0, 1.0, 1.0, .35, (DEEP, DEEP_L, DEEP_R))
    b += path([P(x + .5, y + .5, .4) for (x, y) in side] + [P(7.3, 4.2, .4)], 3, MINT, '2 9', .9)
    b += box(6.6, 3.6, 0, 1.3, 1.3, .9, (WHITE, LEFT, RIGHT))
    # a person-checkpoint (kept human): a pink diamond marker
    px, py = P(4.2, 1.6, 3.9)
    b += '<g transform="translate(%.1f %.1f)"><polygon points="0,-15 15,0 0,15 -15,0" fill="%s"/><polygon points="0,-6 6,0 0,6 -6,0" fill="#fff"/></g>' % (px, py, PINK)
    # floating packets travelling the path
    for t in (0.18, 0.5, 0.82):
        k = int(t * (len(pts) - 1)); f = t * (len(pts) - 1) - k
        a, c = pts[k], pts[min(k + 1, len(pts) - 1)]
        b += '<rect x="%.1f" y="%.1f" width="16" height="16" rx="4" fill="#fff" transform="rotate(45 %.1f %.1f)"/>' % (a[0] + (c[0] - a[0]) * f - 8, a[1] + (c[1] - a[1]) * f - 8 - 22, a[0] + (c[0] - a[0]) * f, a[1] + (c[1] - a[1]) * f - 22)
    return svg(b)

def make_leads():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -2, 9, 8, .4)
    # funnel: three shrinking discs
    for (r, z, c) in [(2.6, .4, (TOP, LEFT, RIGHT)), (1.9, 1.15, (DEEP, DEEP_L, DEEP_R)), (1.2, 1.9, (MINT, MINT_L, MINT_R))]:
        b += gear(2.4, 2.4, z, r, r, 12, .6, c, 0, 0)
    b += poly(ring_poly(2.4, 2.4, .7, 36, 2.5), NAVY)
    # incoming leads (small cubes falling in)
    for (x, y, z) in [(0.2, -.4, 5.4), (3.6, -.2, 4.6), (-.6, 2.4, 4.0), (2.4, 2.4, 6.4), (4.8, 1.0, 3.4)]:
        b += box(x, y, z, .55, .55, .55, (WHITE, LEFT, RIGHT))
        b += line(P(x + .27, y + .27, z), P(x + .27, y + .27, z - 1.4), 2, MINT, '2 8', .8)
    # exit lane to a calendar tile
    b += path([P(2.4, 2.4, .95), P(4.6, 4.6, .95), P(6.0, 4.6, .95)], 4, MINT, '2 11')
    b += box(5.2, 3.6, .4, 2.6, 2.6, .25, (TOP, LEFT, RIGHT))
    for i in range(4):
        for j in range(4):
            col = MINT if (i, j) in ((1, 2), (2, 1), (3, 3)) else DEEP_L
            b += poly([P(5.45 + i * .6, 3.85 + j * .6, .65), P(5.9 + i * .6, 3.85 + j * .6, .65), P(5.9 + i * .6, 4.3 + j * .6, .65), P(5.45 + i * .6, 4.3 + j * .6, .65)], col)
    cx, cy = P(7.2, 3.0, 1.8)
    b += '<g transform="translate(%.1f %.1f)"><circle r="22" fill="#fff"/><path d="M-9 1 L-2 9 L11 -8" fill="none" stroke="%s" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>' % (cx, cy, '#2F5BFF')
    return svg(b)


def make_about():
    # one trusted core (the build around your business) linked to the tools around it
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -2, 9, 9, .4)
    ring = [(0.2, 0.2), (5.4, 0.2), (5.4, 5.4), (0.2, 5.4)]
    core = (2.2, 2.2)
    for (x, y) in ring:
        b += path([P(x + .5, y + .5, 1.2), P(core[0] + 1, core[1] + 1, 1.2)], 3.5, MINT, '2 10')
    for i, (x, y) in enumerate(ring):
        b += box(x, y, .4, 1.0, 1.0, .8 + (i % 2) * .5, (TOP, LEFT, RIGHT))
        b += node(P(x + .5, y + .5, 1.3 + (i % 2) * .5), 6, NAVY, False)
    b += box(core[0], core[1], .4, 2.0, 2.0, 1.4, (MINT, MINT_L, MINT_R))
    b += box(core[0] + .5, core[1] + .5, 1.8, 1.0, 1.0, .9, (WHITE, LEFT, RIGHT))
    cx, cy = P(core[0] + 1, core[1] + 1, 3.3)
    b += '<g transform="translate(%.1f %.1f)"><circle r="20" fill="#fff"/><path d="M-8 1 L-2 8 L10 -7" fill="none" stroke="#2F5BFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>' % (cx, cy)
    b += node(P(6.8, 3.0, 1.4), 6, PINK, False)
    return svg(b)

def make_pricing():
    # three package tiers rising left to right, each topped with a plain coin (no figures shown)
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -1, 10, 6, .4)
    tiers = [(-1.2, .8, (TOP, LEFT, RIGHT)), (2.2, 1.6, (DEEP, DEEP_L, DEEP_R)), (5.6, 2.6, (MINT, MINT_L, MINT_R))]
    pts = []
    for (x, h, c) in tiers:
        b += box(x, .6, .4, 2.4, 2.4, h, c)
        pts.append((x + 1.2, 1.8, .4 + h))
    for (x, y, z) in pts:
        b += gear(x, y, z, 0.8, 0.8, 12, .22, (WHITE, LEFT, RIGHT), 0, 0)
        b += poly(ring_poly(x, y, .4, 24, z + .22), '#BFD0FF')
    b += path([P(x, y, z + .9) for (x, y, z) in pts], 3.5, MINT, '2 10')
    for (x, y, z) in pts:
        b += node(P(x, y, z + .9), 6, NAVY, False)
    b += node(P(7.8, 4.2, 1.2), 6, PINK, False)
    return svg(b)

def make_contact():
    # an envelope with two chat cards floating above it, linked by a dashed line
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -2, 9, 8, .4)
    b += box(0.4, 1.8, .4, 4.2, 3.0, .35, (TOP, LEFT, RIGHT))
    top = [P(0.4, 1.8, .75), P(4.6, 1.8, .75), P(2.5, 3.3, .75)]
    b += poly(top, DEEP)
    b += line(P(0.4, 4.8, .75), P(2.5, 3.3, .75), 2.5, MINT_L)
    b += line(P(4.6, 4.8, .75), P(2.5, 3.3, .75), 2.5, MINT_L)
    for (x, y, z, w, c) in [(0.2, 0.0, 3.0, 2.8, (WHITE, LEFT, RIGHT)), (3.6, 0.8, 3.9, 2.4, (MINT, MINT_L, MINT_R))]:
        b += box(x, y, z, w, 1.6, .35, c)
        for k in range(3):
            b += node(P(x + .6 + k * .55, y + .8, z + .4), 5, NAVY if c[0] == WHITE else '#fff', False)
    b += path([P(2.5, 3.3, 1.0), P(1.4, 1.0, 3.0)], 3, MINT, '2 10')
    b += path([P(2.5, 3.3, 1.0), P(4.8, 1.6, 3.9)], 3, MINT, '2 10')
    b += node(P(6.2, 3.8, 1.2), 6, PINK, False)
    return svg(b)

def rface(x, y, z, w, d, h, u0, v0, u1, v1):
    """Rectangle drawn on the RIGHT-hand face (x+w) of a box. u runs along depth (0..1), v from the top down (0..1)."""
    X = x + w
    return [P(X, y + u0 * d, z + h - v0 * h), P(X, y + u1 * d, z + h - v0 * h), P(X, y + u1 * d, z + h - v1 * h), P(X, y + u0 * d, z + h - v1 * h)]

def bubble(cx, cy, w=150, h=84, dots=3, fill='#FFFFFF', op=1, tail='left'):
    t = '<g transform="translate(%.1f %.1f)" opacity="%s"><rect x="%s" y="%s" width="%s" height="%s" rx="22" fill="%s"/>' % (cx, cy, op, -w / 2, -h / 2, w, h, fill)
    tx = -w / 2 + 28 if tail == 'left' else w / 2 - 28
    t += '<polygon points="%s,%s %s,%s %s,%s" fill="%s"/>' % (tx - 12, h / 2 - 2, tx + 14, h / 2 - 2, tx + (-8 if tail == 'left' else 8), h / 2 + 22, fill)
    for i in range(dots):
        t += '<circle cx="%s" cy="0" r="7" fill="#2F5BFF"/>' % ((i - (dots - 1) / 2) * 26)
    return t + '</g>'

def make_aiagent():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-1.6, -1.6, 7.4, 7.4, .4)
    # tool cubes (calendar / inbox / CRM / phone) wired to the agent
    tools = [((-1.2, -1.2), (TOP, LEFT, RIGHT)), ((4.6, -1.2), (MINT, MINT_L, MINT_R)), ((4.6, 4.6), (TOP, LEFT, RIGHT)), ((-1.2, 4.6), (WHITE, LEFT, RIGHT))]
    for (x, y), c in tools:
        b += box(x, y, .4, 1.0, 1.0, .8, c)
    for (x, y), _ in tools:
        b += path([P(x + .5, y + .5, 1.3), P(2.1, 2.1, 1.3)], 3.5, MINT, '2 10')
        b += node(P(x + .5, y + .5, 1.3), 6, '#fff', False)
    # the agent: torso, big head with a screen face, antenna
    hx0, hw, hz, hh = 0.9, 2.4, 2.0, 2.2
    b += box(1.3, 1.3, .4, 1.6, 1.6, 1.6, (DEEP, DEEP_L, DEEP_R))
    b += box(hx0, hx0, hz, hw, hw, hh, (TOP, LEFT, RIGHT))
    b += poly(rface(hx0, hx0, hz, hw, hw, hh, .12, .2, .88, .82), NAVY)
    b += poly(rface(hx0, hx0, hz, hw, hw, hh, .25, .32, .42, .52), MINT)
    b += poly(rface(hx0, hx0, hz, hw, hw, hh, .58, .32, .75, .52), MINT)
    b += poly(rface(hx0, hx0, hz, hw, hw, hh, .35, .64, .65, .7), MINT)
    b += box(hx0 - .16, hx0 + .5, hz + .6, .16, 1.4, .9, (MINT, MINT_L, MINT_R))
    b += line(P(hx0 + hw / 2, hx0 + hw / 2, hz + hh), P(hx0 + hw / 2, hx0 + hw / 2, hz + hh + 1.0), 4, '#fff')
    b += node(P(hx0 + hw / 2, hx0 + hw / 2, hz + hh + 1.1), 10, PINK, True)
    ax, ay = P(hx0 + hw / 2, hx0 + hw / 2, hz + hh + 1.1)
    b += bubble(ax - 250, ay + 70, 170, 92, 3, '#FFFFFF', 1, 'left')
    b += bubble(ax + 250, ay + 110, 150, 84, 3, '#DCE7FF', 1, 'right')
    b += bubble(ax + 40, ay - 90, 120, 70, 2, '#FFFFFF', .95, 'left')
    return svg(b)

def make_about():
    # one trusted core (the build around your business) linked to the tools around it
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -2, 9, 9, .4)
    ring = [(0.2, 0.2), (5.4, 0.2), (5.4, 5.4), (0.2, 5.4)]
    core = (2.2, 2.2)
    for (x, y) in ring:
        b += path([P(x + .5, y + .5, 1.2), P(core[0] + 1, core[1] + 1, 1.2)], 3.5, MINT, '2 10')
    for i, (x, y) in enumerate(ring):
        b += box(x, y, .4, 1.0, 1.0, .8 + (i % 2) * .5, (TOP, LEFT, RIGHT))
        b += node(P(x + .5, y + .5, 1.3 + (i % 2) * .5), 6, NAVY, False)
    b += box(core[0], core[1], .4, 2.0, 2.0, 1.4, (MINT, MINT_L, MINT_R))
    b += box(core[0] + .5, core[1] + .5, 1.8, 1.0, 1.0, .9, (WHITE, LEFT, RIGHT))
    cx, cy = P(core[0] + 1, core[1] + 1, 3.3)
    b += '<g transform="translate(%.1f %.1f)"><circle r="20" fill="#fff"/><path d="M-8 1 L-2 8 L10 -7" fill="none" stroke="#2F5BFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>' % (cx, cy)
    b += node(P(6.8, 3.0, 1.4), 6, PINK, False)
    return svg(b)

def make_pricing():
    # three package tiers rising left to right, each topped with a plain coin (no figures shown)
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -1, 10, 6, .4)
    tiers = [(-1.2, .8, (TOP, LEFT, RIGHT)), (2.2, 1.6, (DEEP, DEEP_L, DEEP_R)), (5.6, 2.6, (MINT, MINT_L, MINT_R))]
    pts = []
    for (x, h, c) in tiers:
        b += box(x, .6, .4, 2.4, 2.4, h, c)
        pts.append((x + 1.2, 1.8, .4 + h))
    for (x, y, z) in pts:
        b += gear(x, y, z, 0.8, 0.8, 12, .22, (WHITE, LEFT, RIGHT), 0, 0)
        b += poly(ring_poly(x, y, .4, 24, z + .22), '#BFD0FF')
    b += path([P(x, y, z + .9) for (x, y, z) in pts], 3.5, MINT, '2 10')
    for (x, y, z) in pts:
        b += node(P(x, y, z + .9), 6, NAVY, False)
    b += node(P(7.8, 4.2, 1.2), 6, PINK, False)
    return svg(b)

def make_contact():
    # an envelope with two chat cards floating above it, linked by a dashed line
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2, -2, 9, 8, .4)
    b += box(0.4, 1.8, .4, 4.2, 3.0, .35, (TOP, LEFT, RIGHT))
    top = [P(0.4, 1.8, .75), P(4.6, 1.8, .75), P(2.5, 3.3, .75)]
    b += poly(top, DEEP)
    b += line(P(0.4, 4.8, .75), P(2.5, 3.3, .75), 2.5, MINT_L)
    b += line(P(4.6, 4.8, .75), P(2.5, 3.3, .75), 2.5, MINT_L)
    for (x, y, z, w, c) in [(0.2, 0.0, 3.0, 2.8, (WHITE, LEFT, RIGHT)), (3.6, 0.8, 3.9, 2.4, (MINT, MINT_L, MINT_R))]:
        b += box(x, y, z, w, 1.6, .35, c)
        for k in range(3):
            b += node(P(x + .6 + k * .55, y + .8, z + .4), 5, NAVY if c[0] == WHITE else '#fff', False)
    b += path([P(2.5, 3.3, 1.0), P(1.4, 1.0, 3.0)], 3, MINT, '2 10')
    b += path([P(2.5, 3.3, 1.0), P(4.8, 1.6, 3.9)], 3, MINT, '2 10')
    b += node(P(6.2, 3.8, 1.2), 6, PINK, False)
    return svg(b)

def rface(x, y, z, w, d, h, u0, v0, u1, v1):
    """Rectangle drawn on the RIGHT-hand face (x+w) of a box. u runs along depth (0..1), v from the top down (0..1)."""
    X = x + w
    return [P(X, y + u0 * d, z + h - v0 * h), P(X, y + u1 * d, z + h - v0 * h), P(X, y + u1 * d, z + h - v1 * h), P(X, y + u0 * d, z + h - v1 * h)]

def bubble(cx, cy, w=150, h=84, dots=3, fill='#FFFFFF', op=1, tail='left'):
    t = '<g transform="translate(%.1f %.1f)" opacity="%s"><rect x="%s" y="%s" width="%s" height="%s" rx="22" fill="%s"/>' % (cx, cy, op, -w / 2, -h / 2, w, h, fill)
    tx = -w / 2 + 28 if tail == 'left' else w / 2 - 28
    t += '<polygon points="%s,%s %s,%s %s,%s" fill="%s"/>' % (tx - 12, h / 2 - 2, tx + 14, h / 2 - 2, tx + (-8 if tail == 'left' else 8), h / 2 + 22, fill)
    for i in range(dots):
        t += '<circle cx="%s" cy="0" r="7" fill="#2F5BFF"/>' % ((i - (dots - 1) / 2) * 26)
    return t + '</g>'

def make_aiagent():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2.2, -2.2, 9.4, 8.2, .4)
    # tool cubes (calendar / inbox / CRM) wired to the agent
    tools = [((-1.5, -1.5), (TOP, LEFT, RIGHT)), ((6.2, -1.2), (MINT, MINT_L, MINT_R)), ((6.4, 4.8), (TOP, LEFT, RIGHT)), ((-1.5, 5.0), (WHITE, LEFT, RIGHT))]
    for (x, y), c in tools:
        b += box(x, y, .4, 1.1, 1.1, .9, c)
    for (x, y), _ in tools:
        b += path([P(x + .55, y + .55, 1.45), P(2.6, 2.6, 1.45)], 3.5, MINT, '2 10')
        b += node(P(x + .55, y + .55, 1.45), 6, '#fff', False)
    # the agent: a torso, a head with a screen face, an antenna
    b += box(1.9, 1.9, .4, 1.5, 1.5, 1.3, (DEEP, DEEP_L, DEEP_R))
    b += box(1.7, 1.7, 1.7, 1.9, 1.9, 1.7, (TOP, LEFT, RIGHT))
    face = rface(1.7, 1.7, 1.7, 1.9, 1.9, 1.7, .14, .2, .86, .8)
    b += poly(face, NAVY)
    b += poly(rface(1.7, 1.7, 1.7, 1.9, 1.9, 1.7, .26, .3, .42, .5), MINT)
    b += poly(rface(1.7, 1.7, 1.7, 1.9, 1.9, 1.7, .58, .3, .74, .5), MINT)
    b += path([P(3.6, 1.7 + .38 * 1.9, 1.7 + 1.7 * .3), P(3.6, 1.7 + .5 * 1.9, 1.7 + 1.7 * .24), P(3.6, 1.7 + .62 * 1.9, 1.7 + 1.7 * .3)], 3, MINT) if False else ''
    b += line(P(2.65, 2.65, 3.4), P(2.65, 2.65, 4.4), 4, '#fff')
    b += node(P(2.65, 2.65, 4.5), 9, PINK, True)
    # ear panels
    b += box(1.55, 2.2, 2.2, .15, 1.0, .7, (MINT, MINT_L, MINT_R))
    # floating chat bubbles
    ax, ay = P(2.65, 2.65, 4.5)
    b += bubble(ax - 260, ay - 10, 170, 92, 3, '#FFFFFF', 1, 'left')
    b += bubble(ax + 250, ay + 60, 150, 84, 3, '#DCE7FF', 1, 'right')
    b += bubble(ax + 70, ay - 130, 120, 70, 2, '#FFFFFF', .95, 'left')
    return svg(b)

def make_about():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-1.8, -2.0, 8.6, 7.6, .4)
    # a person: cylinder body, round head, speech bubble
    b += gear(2.8, 2.8, .4, .95, .95, 14, 1.7, (TOP, LEFT, RIGHT), 0, 0)
    hx, hy = P(2.8, 2.8, 2.75)
    b += '<circle cx="%.1f" cy="%.1f" r="38" fill="#F2F6FF"/><circle cx="%.1f" cy="%.1f" r="38" fill="none" stroke="#86A5FF" stroke-width="4"/>' % (hx, hy, hx, hy)
    b += '<path d="M%.1f %.1f A38 38 0 0 1 %.1f %.1f Z" fill="#2147D6"/>' % (hx - 38, hy, hx + 38, hy)
    # steps of a journey rising behind her, and a chart
    for i, hh in enumerate((.7, 1.2, 1.7, 2.3)):
        b += box(5.0 + i * .0, -1.6 + i * 1.0, .4, 1.2, .8, hh, (TOP, LEFT, RIGHT) if i < 3 else (MINT, MINT_L, MINT_R))
    for i, hh in enumerate((.8, 1.5, 1.1)):
        b += box(-1.4 + i * .75, 4.4, .4, .5, .5, hh, (WHITE, LEFT, RIGHT))
    b += path([P(2.8, 2.8, 2.4), P(5.6, -1.2, 2.6)], 3.5, MINT, '2 10')
    b += path([P(2.8, 2.8, 2.4), P(-.9, 4.6, 1.9)], 3.5, MINT, '2 10')
    b += node(P(5.6, -1.2, 2.6), 7, '#fff', False)
    b += node(P(-.9, 4.6, 1.9), 7, '#fff', False)
    b += bubble(hx + 190, hy - 40, 150, 84, 3, '#FFFFFF', 1, 'left')
    b += node(P(-1.2, -1.0, 1.0), 6, PINK, False)
    return svg(b)

def make_pricing():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2.2, -2.2, 9.4, 8.2, .4)
    # three packages of rising size, a check on each lid
    pk = [(-1.3, 3.0, 1.1, (TOP, LEFT, RIGHT)), (1.4, 1.7, 1.9, (TOP, LEFT, RIGHT)), (4.1, 0.1, 2.9, (MINT, MINT_L, MINT_R))]
    for (x, y, h, c) in pk:
        b += box(x, y, .4, 2.1, 2.1, h, c)
        b += box(x - .08, y - .08, .4 + h, 2.26, 2.26, .22, (WHITE, LEFT, RIGHT))
        cx, cy = P(x + 1.05, y + 1.05, .4 + h + .26)
        b += '<g transform="translate(%.1f %.1f)"><circle r="21" fill="#2F5BFF"/><path d="M-9 1 L-2 9 L11 -8" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>' % (cx, cy)
    # coin stacks
    for (cx, cy, n) in [(6.4, 4.3, 5), (7.6, 3.6, 3), (-1.6, -.6, 4)]:
        for k in range(n):
            b += gear(cx, cy, .4 + k * .22, .75, .75, 12, .2, (MINT, MINT_L, MINT_R) if k % 2 else (TOP, LEFT, RIGHT), 0, 0)
    b += path([P(.9, 4.0, 1.9), P(3.6, 2.8, 2.9), P(6.6, 1.1, 4.3)], 3.5, MINT, '2 10')
    b += node(P(6.6, 1.1, 4.3), 8, PINK, True)
    return svg(b)

def make_contact():
    b = blueprint_floor(-3, -3, 8, 8, 0, 1, .2)
    b += platform(-2.2, -2.2, 9.4, 8.2, .4)
    # an envelope: flat box with a V flap drawn on the lid
    b += box(.4, .6, .4, 4.2, 3.0, .5, (TOP, LEFT, RIGHT))
    z = .9
    c1, c2, c3, c4 = P(.4, .6, z), P(4.6, .6, z), P(4.6, 3.6, z), P(.4, 3.6, z)
    mid = P(2.5, 2.1, z)
    b += path([c1, mid, c2], 4, MINT) + path([c4, mid, c3], 3, MINT, '', .6)
    # a map pin and a phone card
    px, py = P(5.9, 4.7, 2.3)
    b += '<g transform="translate(%.1f %.1f)"><path d="M0 62 C-34 18 -38 -6 -38 -22 a38 38 0 0 1 76 0 C38 -6 34 18 0 62Z" fill="#fff"/><circle cy="-22" r="14" fill="#2F5BFF"/></g>' % (px, py)
    b += box(-1.5, 4.0, .4, 1.1, 1.1, .5, (MINT, MINT_L, MINT_R))
    b += path([P(2.5, 2.1, .95), P(5.9, 4.7, .95)], 3, MINT, '2 10', .8)
    ex, ey = P(2.5, 2.1, 2.9)
    b += bubble(ex - 230, ey - 90, 170, 92, 3, '#FFFFFF', 1, 'left')
    b += bubble(ex + 220, ey - 30, 150, 84, 3, '#DCE7FF', 1, 'right')
    b += node(P(-1.0, -1.2, 1.1), 6, PINK, False)
    return svg(b)

def make_home():
    """Wide homepage scene: messy steps on the left become a clean process, an AI core in the middle, an agent and tools on the right."""
    b = ''
    b += platform(-1.2, -1.2, 14.4, 7.6, .45)
    # LEFT: a process rising step by step
    pts = []
    for i in range(4):
        x, y, h = -0.3 + i * 1.55, 4.3, .5 + i * .45
        b += box(x, y, .45, 1.35, 1.35, h, (MINT, MINT_L, MINT_R) if i == 3 else (TOP, LEFT, RIGHT))
        pts.append(P(x + .67, y + .67, .45 + h + .05))
    b += path(pts, 4, MINT, '2 11')
    for p_ in pts: b += node(p_, 7, NAVY, False)
    # an inbox cube and a calendar tile far left
    b += box(-0.9, 0.2, .45, 1.1, 1.1, .8, (WHITE, LEFT, RIGHT))
    b += box(1.1, 0.7, .45, 1.5, 1.5, .22, (TOP, LEFT, RIGHT))
    for i in range(3):
        for j in range(3):
            c = MINT if (i, j) in ((1, 1), (2, 0)) else DEEP_L
            b += poly([P(1.3 + i * .45, .9 + j * .45, .7), P(1.65 + i * .45, .9 + j * .45, .7), P(1.65 + i * .45, 1.25 + j * .45, .7), P(1.3 + i * .45, 1.25 + j * .45, .7)], c)
    # CENTRE: the AI core on a stepped pedestal, beams up to a tree of small cubes
    cx, cy = 6.0, 2.3
    for (r, z, c) in [(2.3, .45, (DEEP, DEEP_L, DEEP_R)), (1.75, .75, (TOP, LEFT, RIGHT)), (1.25, 1.05, (MINT, MINT_L, MINT_R))]:
        b += gear(cx, cy, z, r, r, 14, .3, c, 0, 0)
    b += box(cx - .8, cy - .8, 1.35, 1.6, 1.6, 1.5, (WHITE, LEFT, RIGHT))
    b += poly(rface(cx - .8, cy - .8, 1.35, 1.6, 1.6, 1.5, .14, .16, .86, .84), NAVY)
    # a spark on the core face
    sx, sy = P(cx + .8, cy, 1.35 + 1.5 * .5)
    b += '<g transform="translate(%.1f %.1f)"><polygon points="0,-24 6,-6 24,0 6,6 0,24 -6,6 -24,0 -6,-6" fill="#A8D8B9"/></g>' % (sx, sy)
    for dx, dy, zz in [(-1.9, -1.0, 4.6), (-0.6, -1.6, 5.6), (1.0, -1.3, 4.9), (1.8, 0.2, 5.8), (-1.5, 0.9, 5.2)]:
        qx, qy = cx + dx, cy + dy
        b += box(qx - .3, qy - .3, zz, .6, .6, .6, (WHITE, LEFT, RIGHT) if (dx + dy) > 0 else (TOP, LEFT, RIGHT))
        b += line(P(cx, cy, 3.0), P(qx, qy, zz), 2.5, MINT, '2 9', .85)
    b += line(P(cx, cy, 2.85), P(cx, cy, 4.3), 3, '#fff', '', .9)
    b += node(P(cx, cy, 4.35), 8, PINK, True)
    # RIGHT: an agent, a pair of gears, tools
    rx, ry = 9.6, 0.5
    b += box(rx + .35, ry + .35, .45, 1.2, 1.2, 1.2, (DEEP, DEEP_L, DEEP_R))
    b += box(rx, ry, 1.75, 1.9, 1.9, 1.6, (TOP, LEFT, RIGHT))
    b += poly(rface(rx, ry, 1.75, 1.9, 1.9, 1.6, .12, .2, .88, .82), NAVY)
    b += poly(rface(rx, ry, 1.75, 1.9, 1.9, 1.6, .25, .32, .42, .52), MINT)
    b += poly(rface(rx, ry, 1.75, 1.9, 1.9, 1.6, .58, .32, .75, .52), MINT)
    b += line(P(rx + .95, ry + .95, 3.35), P(rx + .95, ry + .95, 4.2), 4, '#fff')
    b += node(P(rx + .95, ry + .95, 4.3), 9, MINT, True)
    b += gear(8.3, 4.2, .45, 1.1, .85, 8, .4, (TOP, LEFT, RIGHT), 0.1, .3)
    b += gear(10.2, 3.5, .45, .8, .6, 6, .4, (MINT, MINT_L, MINT_R), 0.3, .22)
    b += box(11.4, 1.9, .45, 1.0, 1.0, .8, (TOP, LEFT, RIGHT))
    # data lines between the three zones
    b += path([P(3.9, 4.9, 1.9), P(5.2, 3.4, 1.4)], 3.5, MINT, '2 10')
    b += path([P(6.9, 2.4, 1.4), P(9.9, 1.4, 1.4)], 3.5, MINT, '2 10')
    b += path([P(6.5, 3.3, .6), P(8.2, 4.2, .9)], 3, MINT, '2 10', .8)
    # chat bubbles in the sky
    ax, ay = P(rx + .95, ry + .95, 4.3)
    b += bubble(ax - 150, ay - 60, 150, 84, 3, '#FFFFFF', 1, 'left')
    b += bubble(ax + 190, ay + 20, 130, 74, 2, '#DCE7FF', 1, 'right')
    lx, ly = P(1.0, 3.6, 3.4)
    b += bubble(lx, ly, 150, 84, 3, '#FFFFFF', 1, 'left')
    b += node(P(-0.6, 3.0, 1.2), 6, PINK, False)
    vb = '200 235 1130 790'  # frames the scene itself (found by rendering it), not the faint floor grid
    return svg(blueprint_floor(-3, -3, 14, 9, 0, 1, .18) + b, vb)

out = os.path.join(os.path.dirname(__file__), '..', 'public', 'hero')
os.makedirs(out, exist_ok=True)
for name, fn in [('home', make_home), ('audit', make_audit), ('integration', make_integration), ('workflow', make_workflow), ('leads', make_leads), ('aiagent', make_aiagent), ('about', make_about), ('pricing', make_pricing), ('contact', make_contact)]:
    open(os.path.join(out, name + '.svg'), 'w').write(fn())
    print('wrote', name)