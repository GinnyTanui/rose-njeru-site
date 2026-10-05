import { HeroBackground } from '../../components/HeroBackground';
import { Button, Container, Eyebrow } from '../../components/ui';
import { CTA_LABEL } from '../../data';

export default function PricingHero() {
  return (
    <section aria-labelledby="pricing-h" className="relative overflow-hidden text-cream">
      <HeroBackground density={0.7} />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <Eyebrow dark>PRICING</Eyebrow>
          <h1 id="pricing-h" className="text-3xl leading-[1.1] sm:text-5xl">Simple Pricing for Different Needs</h1>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/80 sm:text-base">Clear packages showing what&apos;s included, delivery times, and who each option is suited for.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button dark>{CTA_LABEL}</Button>
            <Button to="/services" variant="secondary" dark>Explore Services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}