import { useEffect, useRef } from 'react';

/* ---------- hero background: live node network (drifting nodes, links, data pulses, mouse-reactive) ---------- */
export function HeroBackground({ density = 1 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LINK = 140;
    const mouse = { x: -999, y: -999 };
    let w, h, nodes = [], pulses = [], raf, frame = 0, visible = true;

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.round((w * h) / 16000 * density), 90);
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: 1.3 + Math.random() * 1.8, hot: Math.random() < 0.12,
      }));
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      frame++;
      ctx.clearRect(0, 0, w, h);
      for (const p of nodes) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 150 && d > 0) { p.x += (dx / d) * 0.9; p.y += (dy / d) * 0.9; }
        }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const near = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) < 160;
            ctx.strokeStyle = near ? `rgba(214,206,194,${(1 - d / LINK) * 0.6})` : `rgba(248,250,252,${(1 - d / LINK) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      // data pulses travelling along links
      if (!reduce && frame % 35 === 0 && pulses.length < 10) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes.find((n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < LINK);
        if (a && b) pulses.push({ a, b, t: 0 });
      }
      pulses = pulses.filter((p) => (p.t += 0.018) < 1);
      for (const p of pulses) {
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = 'rgba(214,206,194,.18)'; ctx.beginPath(); ctx.arc(x, y, 6, 0, 7); ctx.fill();
        ctx.fillStyle = '#D6CEC2'; ctx.beginPath(); ctx.arc(x, y, 2, 0, 7); ctx.fill();
      }
      for (const p of nodes) {
        ctx.fillStyle = p.hot ? '#D6CEC2' : 'rgba(248,250,252,.65)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.hot ? p.r + 0.8 : p.r, 0, 7); ctx.fill();
      }
      if (reduce) cancelAnimationFrame(raf);
    };

    const move = (e) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const leave = () => { mouse.x = mouse.y = -999; };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    init(); draw(); io.observe(c);
    window.addEventListener('resize', init);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerleave', leave);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', init); window.removeEventListener('pointermove', move); window.removeEventListener('pointerleave', leave); };
  }, [density]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-ink" aria-hidden>
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" />
      <div className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-ink-soft blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
    </div>
  );
}