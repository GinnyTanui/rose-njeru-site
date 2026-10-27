import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SITE, services } from '../data';
import { Container } from './ui';

const a = 'text-white/85 hover:text-white';
const h = 'mb-3 text-eyebrow font-semibold text-orange-soft';
const socials = [
  { label: 'LinkedIn', href: SITE.linkedin, Icon: FaLinkedinIn },
  { label: 'TikTok', href: SITE.tiktok, Icon: FaTiktok },
  { label: 'YouTube', href: SITE.youtube, Icon: FaYoutube },
  { label: 'X', href: SITE.x, Icon: FaXTwitter },
  { label: 'GitHub', href: SITE.github, Icon: FaGithub },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.3fr_1.2fr_1fr_1fr]">
        <div>
          <img src="/logo-full.png" alt={SITE.name} width="131" height="112" className="h-28 w-auto" />
          <p className="mt-3 max-w-xs text-small text-white/80">AI automation and business operations for service businesses with growing teams.</p>
        </div>
        <nav aria-label="Services">
          <p className={h}>SERVICES</p>
          <ul className="space-y-2 text-small">{services.map((s) => <li key={s.slug}><Link className={a} to={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Explore">
          <p className={h}>EXPLORE</p>
          <ul className="space-y-2 text-small">
            <li><Link className={a} to="/">Home</Link></li>
            <li><Link className={a} to="/services">All services</Link></li>
            <li><Link className={a} to="/case-studies">Case studies</Link></li>
            <li><Link className={a} to="/blog">Blog</Link></li>
            <li><Link className={a} to="/about">About</Link></li>
            <li><Link className={a} to="/pricing">Pricing packages</Link></li>
            <li><Link className={a} to="/contact">Contact</Link></li>
            <li><Link className={a} to="/consultation">Book a free consultation</Link></li>
          </ul>
        </nav>
        <div>
          <p className={h}>GET IN TOUCH</p>
          <a className={`break-all text-small ${a}`} href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} aria-label={`Rose Njeru on ${label} (opens in a new tab)`} href={href} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:border-mint hover:text-mint"><Icon aria-hidden /></a>
            ))}
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/15 py-5 text-xs text-white/75">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</Container>
    </footer>
  );
}