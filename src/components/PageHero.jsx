import { HeroBackground } from './HeroBackground';
import { Container, Eyebrow } from './ui';

export default function PageHero({ id, eyebrow, title, children }) {
  return (
    <section aria-labelledby={id} className="relative overflow-hidden text-cream">
      <HeroBackground density={0.6} />
      <Container className="relative py-12 sm:py-16">
        <div className="max-w-2xl">
          {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
          <h1 id={id} className="text-3xl leading-[1.1] sm:text-5xl">{title}</h1>
          <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-cream/80 sm:text-base">{children}</div>
        </div>
      </Container>
    </section>
  );
}