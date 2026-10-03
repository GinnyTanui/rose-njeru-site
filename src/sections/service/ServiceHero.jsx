import { HeroBackground } from '../../components/HeroBackground';
import { ServiceVisual } from '../../components/Visuals';
import { Button, Container, TextLink } from '../../components/ui';
import { CTA_LABEL } from '../../data';

/* Compact on purpose: same two-column layout, but short enough that the next section peeks in on first load. */
export default function ServiceHero({ s }) {
  return (
    <section aria-labelledby="svc-h" className="relative overflow-hidden text-cream">
      <HeroBackground />
      <Container className="relative grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:gap-12 lg:py-10">
        <div>
          <p className="font-display text-4xl font-extrabold text-accent sm:text-5xl" aria-hidden>{s.no}</p>
          <h1 id="svc-h" className="mt-1 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.6rem]">{s.name}</h1>
          {s.tagline && <p className="mt-2 font-display text-base font-bold text-cream sm:text-lg">{s.tagline}</p>}
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/80">{s.hero}</p>
          {s.heroExtra && <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-cream/70">{s.heroExtra}</p>}
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Button>{CTA_LABEL}</Button>
            <TextLink to="/pricing" dark>See {s.name} pricing</TextLink>
          </div>
        </div>
        <ServiceVisual type={s.visual} />
      </Container>
    </section>
  );
}