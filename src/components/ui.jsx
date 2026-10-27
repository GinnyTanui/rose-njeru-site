import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { CTA_PATH } from '../data';

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[72rem] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
);

/* light = paper, white = white, blue = the electric-blue band. "sand" and "dark" are kept as aliases so older pages still work.
   One vertical rhythm for every section: 56px on phones, 64px on tablets, 80px on desktop. */
const TONES = {
  light: 'bg-cream text-ink',
  white: 'bg-white text-ink',
  blue: 'bg-brand text-white',
  ink: 'bg-brand-dark text-white',
  sand: 'bg-white text-ink',
  dark: 'bg-brand text-white',
};
export const Section = ({ id, tone = 'light', labelledBy, className = '', children }) => (
  <section id={id} aria-labelledby={labelledBy} className={`${TONES[tone]} py-14 sm:py-16 lg:py-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

/* Small label with a short orange line in front. `dark` = on an electric-blue band, `ink` = on a near-black band. */
export const Eyebrow = ({ children, dark, ink, className = '' }) => (
  <p className={`mb-3 flex items-center gap-3 text-eyebrow font-semibold ${ink ? 'text-orange-soft' : dark ? 'text-white/80' : 'text-brand'} ${className}`}>
    <span aria-hidden className="h-0.5 w-6 shrink-0 rounded-full bg-orange" />{children}
  </p>
);

/* Highlights a phrase inside a heading. light = orange text (large type only), ink = bright orange text,
   blue = white text with an orange underline (orange text is too pale on electric blue). */
export const Hl = ({ on = 'light', children }) => {
  const cls = on === 'blue'
    ? 'whitespace-nowrap underline decoration-orange decoration-[3px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[5px] sm:underline-offset-[10px]'
    : on === 'ink' ? 'text-orange-soft' : 'text-orange-strong';
  return <span className={cls}>{children}</span>;
};

/* highlight("Where AI makes a difference.", "makes a difference", "light") */
export const highlight = (text, phrase, on = 'light') => {
  const i = text.indexOf(phrase);
  if (i < 0) return text;
  return <>{text.slice(0, i)}<Hl on={on}>{phrase}</Hl>{text.slice(i + phrase.length)}</>;
};

export const SectionHeading = ({ id, eyebrow, title, children, dark, ink, center, className = '' }) => (
  <header className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
    {eyebrow && <Eyebrow dark={dark} ink={ink} className={center ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
    <h2 id={id}>{title}</h2>
    {children && <p className={`mt-4 max-w-2xl text-body ${center ? 'mx-auto' : ''} ${dark || ink ? 'text-white/85' : 'text-muted'}`}>{children}</p>}
  </header>
);

export const Dot = ({ className = '' }) => <span className={`inline-block h-2 w-2 shrink-0 rounded-full bg-current ${className}`} aria-hidden="true" />;

export const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center rounded-full bg-sand px-3 py-1 text-xs font-semibold text-brand-dark ${className}`}>{children}</span>
);

/* dark = the button sits on an electric-blue band. */
export const Button = ({ to, href, variant = 'primary', arrow = true, dark, children, className = '' }) => {
  const base = 'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-small font-semibold transition hover:-translate-y-0.5';
  const look = variant === 'primary'
    ? (dark ? 'bg-orange text-ink hover:bg-[#FF9D5C]' : 'bg-brand text-white hover:bg-brand-deep')
    : `border-2 ${dark ? 'border-white text-white hover:bg-white hover:text-brand' : 'border-brand text-brand hover:bg-brand hover:text-white'}`;
  const inner = <>{children}{arrow && <FiArrowRight aria-hidden />}</>;
  const cls = `${base} ${look} ${className}`;
  const dest = !to && !href ? CTA_PATH : to;
  const external = /^https?:\/\//.test(href || '');
  return dest ? <Link to={dest} className={cls}>{inner}</Link> : <a href={href} className={cls} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>{inner}</a>;
};

export const TextLink = ({ to, children, dark }) => (
  <Link to={to} className={`group inline-flex items-center gap-2 text-small font-semibold underline decoration-2 underline-offset-8 ${dark ? 'text-white decoration-orange' : 'text-orange-ink decoration-orange/50'}`}>
    {children}<FiArrowRight className="transition group-hover:translate-x-1" aria-hidden />
  </Link>
);