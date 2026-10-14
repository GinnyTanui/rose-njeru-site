import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Container, Section } from '../components/ui';
import { about } from '../data';

/* About page: navy intro, then the journey (navy card) beside "Beyond the Work" (warm-stone card),
   then the closing "Let's Work Together" call to action. */
export default function About() {
  return (
    <>
      <Seo path="/about" title="About Rose Njeru | Business Systems & Automation Specialist"
        description="Rose Njeru is a business systems and automation specialist based in Nairobi, helping service businesses stop losing time, leads, and money to slow, manual work."
        jsonLd={[breadcrumbLd([['Home', '/'], ['About', '/about']])]} />
      <main>
        <section aria-labelledby="about-h" className="relative overflow-hidden text-cream">
          <HeroBackground density={0.7} />
          <Container className="relative py-12 sm:py-16">
            <div className="max-w-3xl">
              <p className="mb-3 font-display text-sm font-extrabold tracking-[0.12em] text-sand sm:text-base">ABOUT</p>
              <h1 id="about-h" className="text-2xl leading-[1.1] sm:text-4xl">{about.greeting}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">{about.intro}</p>
            </div>
          </Container>
        </section>

        <Section labelledBy="journey-h">
          <div className="grid items-start gap-5 lg:grid-cols-[1.3fr_0.9fr]">
            <article className="rounded-3xl bg-ink p-5 text-cream sm:p-7">
              <h2 id="journey-h" className="text-xl sm:text-2xl">{about.journey.title}</h2>
              <div className="mt-4 space-y-3">
                {about.journey.paragraphs.map((p) => <p key={p} className="text-sm leading-relaxed text-cream/80 sm:text-[15px]">{p}</p>)}
              </div>
            </article>
            <article className="rounded-3xl bg-sand p-5 text-ink sm:p-7">
              <h2 className="text-xl sm:text-2xl">{about.beyond.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-[15px]">{about.beyond.text}</p>
            </article>
          </div>
        </Section>

        <FinalCTA title={about.together.title} text={about.together.text} />
      </main>
    </>
  );
}