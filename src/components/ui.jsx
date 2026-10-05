import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { CTA_PATH } from '../data';

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
);

/* light = off-white, sand = a very soft warm-stone tint, dark = deep navy. Alternating them keeps the page easy on the eye. */
const TONES = { light: 'bg-cream text-ink', sand: 'bg-sand/25 text-ink', dark: 'bg-ink text-cream' };
export const Section = ({ id, tone = 'light', labelledBy, className = '', children }) => (
  <section id={id} aria-labelledby={labelledBy} className={`${TONES[tone]} py-14 sm:py-16 lg:py-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export const Eyebrow = ({ children, dark }) => (
  <p className={`mb-4 font-mono text-xs tracking-[0.14em] ${dark ? 'text-cream/60' : 'text-slate'}`}>{children}</p>
);

export const SectionHeading = ({ id, eyebrow, title, children, dark, className = '' }) => (
  <header className={`max-w-3xl ${className}`}>
    {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
    <h2 id={id} className="text-2xl leading-tight sm:text-3xl lg:text-4xl">{title}</h2>
    {children && <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed sm:text-base ${dark ? 'text-cream/75' : 'text-slate'}`}>{children}</p>}
  </header>
);

/* Small round bullet used instead of ticks. Takes its colour from the text colour (set text-* on it). */
export const Dot = ({ className = '' }) => <span className={`inline-block h-2 w-2 shrink-0 rounded-full bg-current ${className}`} aria-hidden="true" />;

/* Warm-stone pill for small labels (service number, "Case study", etc). */
export const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center rounded-full bg-sand px-3 py-1 font-mono text-xs font-medium text-ink ${className}`}>{children}</span>
);

/* One button style everywhere. Pass `dark` when the button sits on a navy background.
   primary: navy on light sections, warm stone on navy.  secondary: outline in the same colours.
   With no `to`/`href` it goes to the consultation page (the primary CTA). */
export const Button = ({ to, href, variant = 'primary', arrow = true, dark, children, className = '' }) => {
  const base = 'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5';
  const look = variant === 'primary'
    ? (dark ? 'bg-sand text-ink hover:bg-cream' : 'bg-ink text-cream hover:bg-ink-soft')
    : `border-2 ${dark ? 'border-sand text-sand hover:bg-sand hover:text-ink' : 'border-ink text-ink hover:bg-ink hover:text-cream'}`;
  const inner = <>{children}{arrow && <FiArrowRight aria-hidden />}</>;
  const cls = `${base} ${look} ${className}`;
  const dest = !to && !href ? CTA_PATH : to;
  return dest ? <Link to={dest} className={cls}>{inner}</Link> : <a href={href} className={cls}>{inner}</a>;
};

export const TextLink = ({ to, children, dark }) => (
  <Link to={to} className={`group inline-flex items-center gap-2 font-semibold underline decoration-sand decoration-2 underline-offset-8 ${dark ? 'text-sand' : 'text-ink'}`}>
    {children}<FiArrowRight className="transition group-hover:translate-x-1" aria-hidden />
  </Link>
);