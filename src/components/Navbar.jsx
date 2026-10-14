import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { CTA_LABEL, SITE, services } from '../data';
import { Button, Container } from './ui';

const linkCls = ({ isActive }) => `border-b-2 py-1 text-sm transition ${isActive ? 'border-sand text-cream' : 'border-transparent text-cream/75 hover:text-cream'}`;

/* Services opens a panel with the four services; everything else is a plain link. */
function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, []);
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 border-b-2 py-1 text-sm transition ${pathname.startsWith('/services') ? 'border-sand text-cream' : 'border-transparent text-cream/75 hover:text-cream'}`}>
        Services <FiChevronDown aria-hidden className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 pt-3">
          <div className="rounded-3xl border border-white/10 bg-ink-soft p-3 shadow-2xl shadow-ink/40">
            <ul className="grid gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="group flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/5">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand font-mono text-xs font-medium text-ink">{s.no}</span>
                    <span>
                      <span className="block font-display text-sm font-bold text-cream">{s.name}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-cream/65">{s.short}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/services" className="mt-2 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-sand hover:bg-white/10">
              See all services <FiArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" aria-label={`${SITE.name} home`} className="flex items-center gap-3">
          <img src="/logo-full.png" alt="" width="58" height="40" className="h-10 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-medium tracking-[0.22em]">ROSE NJERU</span>
            <span className="mt-1.5 text-[10px] tracking-[0.5em] text-cream/70">AUTOMATION</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <ServicesMenu />
          <NavLink to="/case-studies" className={linkCls}>Case Studies</NavLink>
          <NavLink to="/blog" className={linkCls}>Blog</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/pricing" className={linkCls}>Pricing</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          <Button dark arrow={false} className="!min-h-[40px] !px-5 !py-2 !text-sm">{CTA_LABEL}</Button>
        </nav>
        <button className="grid h-11 w-11 place-items-center md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </Container>
      {open && (
        <nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-ink px-5 pb-6 pt-3 md:hidden">
          <Link to="/" onClick={close} className="block py-3 text-cream/85">Home</Link>
          <Link to="/services" onClick={close} className="block py-3 text-cream/85">Services</Link>
          <ul className="mb-1 ml-3 border-l border-white/15 pl-4">
            {services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} onClick={close} className="block py-2 text-sm text-cream/65">{s.name}</Link></li>)}
          </ul>
          <Link to="/case-studies" onClick={close} className="block py-3 text-cream/85">Case Studies</Link>
          <Link to="/blog" onClick={close} className="block py-3 text-cream/85">Blog</Link>
          <Link to="/about" onClick={close} className="block py-3 text-cream/85">About</Link>
          <Link to="/pricing" onClick={close} className="block py-3 text-cream/85">Pricing</Link>
          <Link to="/contact" onClick={close} className="block py-3 text-cream/85">Contact</Link>
          <Button dark className="mt-3 w-full">{CTA_LABEL}</Button>
        </nav>
      )}
    </header>
  );
}