import { CTA_LABEL } from '../data';
import { Button, Container } from './ui';
import { HeroBackground } from './HeroBackground';

/* Same graphic language as the hero, much simpler. */
export default function FinalCTA({ title, text, line }) {
  return (
    <section aria-labelledby="cta-h" className="relative overflow-hidden text-cream">
      <HeroBackground density={0.6} />
      <Container className="relative py-16 text-center sm:py-20">
        <h2 id="cta-h" className="mx-auto max-w-3xl text-2xl leading-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/75 sm:text-base">{text}</p>
        {line && <p className="mt-4 font-display text-lg font-bold text-accent">{line}</p>}
        <div className="mt-8"><Button>{CTA_LABEL}</Button></div>
      </Container>
    </section>
  );
}