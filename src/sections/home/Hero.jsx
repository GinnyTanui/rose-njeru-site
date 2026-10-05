import { HeroBackground } from '../../components/HeroBackground';
import { Button, Container } from '../../components/ui';
import { CTA_LABEL } from '../../data';
import { intro } from '../../content';

/* Introduction = hero.
   The customer meets the four everyday scenarios first (bordered cards, no icons, all left-aligned),
   then the answer arrives in a warm-stone panel: the "process problems" line, the body text and the buttons. */
export default function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden text-cream">
      <HeroBackground />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <h1 id="hero-h" className="mb-8 font-mono text-xs font-normal tracking-[0.14em] text-cream/60 sm:mb-10">
          AI AUTOMATION &amp; BUSINESS SYSTEMS SPECIALIST
        </h1>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <ul className="space-y-3" role="list">
            {intro.scenarios.map((t) => (
              <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5">
                <p className="text-[15px] leading-snug text-cream/90 sm:text-base">{t}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-sand p-7 text-ink shadow-2xl shadow-ink/40 sm:p-9">
            <h2 className="font-sans text-xl font-semibold leading-snug tracking-normal sm:text-2xl">{intro.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80 sm:text-base">{intro.body}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button>{CTA_LABEL}</Button>
              <Button to="/#services" variant="secondary">Explore Services</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}