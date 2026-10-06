import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Container, Section } from '../components/ui';
import { about } from '../content';

export default function About() {
  return (
    <>
      <Seo path="/about" title="About Rose Njeru | AI Automation and Business Systems Specialist"
        description="Rose Njeru is an ai automation and business systems specialist based in Nairobi, helping service businesses stop losing time, leads, and money to slow, manual work."
        jsonLd={[breadcrumbLd([['Home', '/'], ['About', '/about']])]} />
      <main>
        <section aria-labelledby="about-h" className="relative overflow-hidden text-cream">
          <HeroBackground density={0.7} />
          <Container className="relative py-14 sm:py-20">
            <div className="max-w-3xl">
              <p className="mb-4 font-display text-base font-extrabold tracking-[0.12em] text-sand sm:text-lg">ABOUT</p>
              <h1 id="about-h" className="text-3xl leading-[1.1] sm:text-5xl">{about.greeting}</h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cream/80 sm:text-lg">{about.intro}</p>
            </div>
          </Container>
        </section>

        <Section labelledBy="journey-h">
          <div className="grid items-start gap-5 lg:grid-cols-[1.3fr_0.9fr]">
            <article className="rounded-3xl bg-ink p-6 text-cream sm:p-9">
              <h2 id="journey-h" className="text-2xl sm:text-3xl">{about.journey.title}</h2>
              <div className="mt-5 space-y-4">
                {about.journey.paragraphs.map((p) => <p key={p} className="text-[15px] leading-relaxed text-cream/80 sm:text-base">{p}</p>)}
              </div>
            </article>
            <article className="rounded-3xl bg-sand p-6 text-ink sm:p-9">
              <h2 className="text-2xl sm:text-3xl">{about.beyond.title}</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/80 sm:text-base">{about.beyond.text}</p>
            </article>
          </div>
        </Section>

        <FinalCTA title={about.together.title} text={about.together.text} />
      </main>
    </>
  );
}