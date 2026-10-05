import { HeroBackground } from '../../components/HeroBackground';
import { Badge, Button, Container, TextLink } from '../../components/ui';
import { CTA_LABEL } from '../../data';

/* Single column: the side visual is gone. Text on the left, the animated network still shows through on the right. */
export default function ServiceHero({ s }) {
  return (
    <section aria-labelledby="svc-h" className="relative overflow-hidden text-cream">
      <HeroBackground />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <Badge>Service {s.no}</Badge>
          <h1 id="svc-h" className="mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{s.name}</h1>
          {s.tagline && <p className="mt-3 font-display text-base font-bold text-cream sm:text-lg">{s.tagline}</p>}
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/80 sm:text-base">{s.hero}</p>
          {s.heroExtra && <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-cream/70">{s.heroExtra}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Button dark>{CTA_LABEL}</Button>
            <TextLink to="/pricing" dark>See {s.name} pricing</TextLink>
          </div>
        </div>
        {s.list && (
          <div className="mt-10 max-w-3xl border-t border-white/10 pt-6">
            <p className="mb-3 font-display text-sm font-bold text-cream/80">{s.listLabel}</p>
            <ul className="flex flex-wrap gap-2" role="list">
              {s.list.map((x) => <li key={x} className="rounded-full border border-sand/50 px-3.5 py-1.5 text-sm text-sand">{x}</li>)}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}