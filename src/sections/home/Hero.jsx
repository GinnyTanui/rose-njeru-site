import { HeroBackground } from '../../components/HeroBackground';
import { HeroVisual } from '../../components/Visuals';
import { Button, Container, Eyebrow } from '../../components/ui';
import { CTA_LABEL } from '../../data';

export default function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden text-cream">
      <HeroBackground />
      <Container className="relative grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-12">
        <div>
          <Eyebrow dark>AI AUTOMATION &amp; BUSINESS SYSTEMS SPECIALIST</Eyebrow>
          <h1 id="hero-h" className="text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">Make Your Operations Easier to Run</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/80">Make your operations easier to run with connected systems, smarter processes, automation, and AI while uncovering opportunities to save time, improve customer experiences, and capture more revenue.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button>{CTA_LABEL}</Button>
            <Button to="/#services" variant="secondary" dark>Explore Services</Button>
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}