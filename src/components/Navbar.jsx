import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { CTA_LABEL, SITE, services } from '../data';
import { Button, Container } from './ui';

const links = [['Home', '/'], ['Services', '/services'], ['Pricing', '/pricing'], ['Contact', '/contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold">{SITE.name}</Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => <Link key={l} to={h} className="text-sm text-cream/80 hover:text-cream">{l}</Link>)}
          <Button arrow={false} className="!min-h-[40px] !px-5 !py-2 !text-sm">{CTA_LABEL}</Button>
        </nav>
        <button className="grid h-11 w-11 place-items-center md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </Container>
      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-ink px-5 pb-6 pt-3 md:hidden">
          {[...links, ...services.map((s) => [s.name, `/services/${s.slug}`])].map(([l, h]) => (
            <Link key={l} to={h} onClick={() => setOpen(false)} className="block py-3 text-cream/85">{l}</Link>
          ))}
          <Button className="mt-3 w-full">{CTA_LABEL}</Button>
        </nav>
      )}
    </header>
  );
}