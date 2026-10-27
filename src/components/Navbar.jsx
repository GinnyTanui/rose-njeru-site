import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiChevronDown, FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { CTA_LABEL, SITE, services } from '../data';
import { Button, Container } from './ui';

const linkCls = ({ isActive }) => `border-b-2 py-1 text-small transition ${isActive ? 'border-orange text-white' : 'border-transparent text-white/80 hover:text-white'}`;

/* Resources: the two things a visitor can read or use before booking. */
const resources = [
  { to: '/blog', name: 'Blog', desc: 'Practical guides on AI, automation and measuring the return.', icon: FiBookOpen },
  { to: '/services/business-process-audit', name: 'Business Process Audit', desc: 'Find where your business loses time and what to fix first.', icon: FiSearch },
];

/* One dropdown, two uses (Services and Resources). Opens on hover, click or keyboard; closes on Escape, outside click and page change. */
function Menu({ label, active, width = 'w-[26rem]', footer, children }) {
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
        className={`flex items-center gap-1 border-b-2 py-1 text-small transition ${active ? 'border-orange text-white' : 'border-transparent text-white/80 hover:text-white'}`}>
        {label} <FiChevronDown aria-hidden className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className={`absolute left-1/2 top-full z-50 ${width} -translate-x-1/2 pt-3`}>
          <div className="rounded-2xl border border-ink/10 bg-white p-2.5 text-ink shadow-2xl shadow-ink/20">
            <ul className="grid gap-0.5">{children}</ul>
            {footer}
          </div>
        </div>
      )}
    </div>
  );
}

const Item = ({ to, badge, name, desc }) => (
  <li>
    <Link to={to} className="group flex items-start gap-3.5 rounded-xl p-3 transition hover:bg-cream">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">{badge}</span>
      <span>
        <span className="block font-display text-small font-bold">{name}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-muted">{desc}</span>
      </span>
    </Link>
  </li>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const close = () => setOpen(false);
  const resActive = pathname.startsWith('/blog');
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark text-white shadow-lg shadow-brand-dark/30">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" aria-label={`${SITE.name} home`} className="flex items-center gap-3">
          <img src="/logo-mark.png" alt="" width="58" height="39" className="h-9 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-[0.2em]">ROSE NJERU</span>
            <span className="mt-1.5 text-[10px] tracking-[0.5em] text-white/80">AUTOMATION</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <Menu label="Services" active={pathname.startsWith('/services')} width="w-[27rem]"
            footer={<Link to="/services" className="mt-1 flex items-center justify-between rounded-xl bg-cream px-4 py-3 text-small font-semibold text-brand hover:bg-sand">See all services <FiArrowRight aria-hidden /></Link>}>
            {services.map((s) => <Item key={s.slug} to={`/services/${s.slug}`} badge={s.no} name={s.name} desc={s.short} />)}
          </Menu>
          <NavLink to="/case-studies" className={linkCls}>Case Studies</NavLink>
          <Menu label="Resources" active={resActive} width="w-[22rem]">
            {resources.map((r) => <Item key={r.name} to={r.to} badge={<r.icon aria-hidden />} name={r.name} desc={r.desc} />)}
          </Menu>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/pricing" className={linkCls}>Pricing</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          <Button dark arrow={false} className="!min-h-[40px] !px-5 !py-2">{CTA_LABEL}</Button>
        </nav>
        <button className="grid h-11 w-11 place-items-center md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </Container>
      {open && (
        <nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto border-t border-white/15 bg-brand-dark px-5 pb-6 pt-3 md:hidden">
          <Link to="/" onClick={close} className="block py-3 text-white">Home</Link>
          <Link to="/services" onClick={close} className="block py-3 text-white">Services</Link>
          <ul className="mb-1 ml-3 border-l border-white/25 pl-4">
            {services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} onClick={close} className="block py-2 text-small text-white/80">{s.name}</Link></li>)}
          </ul>
          <Link to="/case-studies" onClick={close} className="block py-3 text-white">Case Studies</Link>
          <p className="pt-3 text-small text-white">Resources</p>
          <ul className="mb-1 ml-3 border-l border-white/25 pl-4">
            {resources.map((r) => <li key={r.name}><Link to={r.to} onClick={close} className="block py-2 text-small text-white/80">{r.name}</Link></li>)}
          </ul>
          <Link to="/about" onClick={close} className="block py-3 text-white">About</Link>
          <Link to="/pricing" onClick={close} className="block py-3 text-white">Pricing</Link>
          <Link to="/contact" onClick={close} className="block py-3 text-white">Contact</Link>
          <Button dark className="mt-3 w-full">{CTA_LABEL}</Button>
        </nav>
      )}
    </header>
  );
}