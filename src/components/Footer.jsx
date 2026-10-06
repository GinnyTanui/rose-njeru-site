import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SITE, services } from '../data';
import { Container } from './ui';

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">AI automation and business operations for service businesses with growing teams.</p>
        </div>
        <nav aria-label="Services">
          <p className="mb-3 font-mono text-xs text-cream/50">Services</p>
          <ul className="space-y-2 text-sm">{services.map((s) => <li key={s.slug}><Link className="text-cream/80 hover:text-accent" to={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Explore">
          <p className="mb-3 font-mono text-xs text-cream/50">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link className="text-cream/80 hover:text-accent" to="/">Home</Link></li>
            <li><Link className="text-cream/80 hover:text-accent" to="/services">All services</Link></li>
            <li><Link className="text-cream/80 hover:text-accent" to="/case-studies">Case studies</Link></li>
            <li><Link className="text-cream/80 hover:text-accent" to="/about">About</Link></li>
            <li><Link className="text-cream/80 hover:text-accent" to="/pricing">Pricing packages</Link></li>
            <li><Link className="text-cream/80 hover:text-accent" to="/contact">Contact</Link></li>
            <li><Link className="text-cream/80 hover:text-accent" to="/consultation">Book a free consultation</Link></li>
          </ul>
        </nav>
        <div>
          <p className="mb-3 font-mono text-xs text-cream/50">Get in touch</p>
          <a className="break-all text-sm text-cream/80 hover:text-accent" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <div className="mt-4 flex gap-3">
            <a aria-label="Rose Njeru on LinkedIn" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 hover:border-accent hover:text-accent"><FaLinkedinIn aria-hidden /></a>
<a aria-label="Rose Njeru on GitHub" href={SITE.github} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 hover:border-accent hover:text-accent"><FaGithub aria-hidden /></a>
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-5 text-xs text-cream/50">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</Container>
    </footer>
  );
}