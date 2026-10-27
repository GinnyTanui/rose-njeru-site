import { HeroBackground } from './HeroBackground';
import { Container, Eyebrow } from './ui';

/* Hero used by the secondary pages. `variant` picks the background artwork (see HeroBackground). */
export default function PageHero({ id, eyebrow, title, variant = 'network', children }) {
  return (
    <section aria-labelledby={id} className="relative overflow-hidden bg-brand text-white">
      <HeroBackground variant={variant} density={0.5} />
      <Container className="relative py-12 sm:py-16">
        <div className="max-w-2xl">
          {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
          <h1 id={id}>{title}</h1>
          {children && <div className="mt-4 space-y-3 text-lead text-white/90">{children}</div>}
        </div>
      </Container>
    </section>
  );
}