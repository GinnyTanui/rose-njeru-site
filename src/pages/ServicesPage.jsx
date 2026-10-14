import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { breadcrumbLd, Seo } from '../components/Seo';
import { ServiceCards } from '../components/Services';
import { Container, Eyebrow, Section, TextLink } from '../components/ui';
import { homeCta, services, SITE } from '../data';

export default function ServicesPage() {
  return (
    <>
      <Seo path="/services" title="AI Automation & Business Operations Services | Rose Njeru"
        description="Business audits, operations automation, tool integrations and AI agents for service businesses. Compare the four services and find the right place to start."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Services', '/services']]), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE.url}/services/${s.slug}` })) }]} />
      <main>
        <section aria-labelledby="all-h" className="relative overflow-hidden text-cream">
          <HeroBackground density={0.7} />
          <Container className="relative py-14 sm:py-20">
            <div className="max-w-2xl">
              <Eyebrow dark>OUR SERVICES</Eyebrow>
              <h1 id="all-h" className="text-3xl leading-[1.1] sm:text-5xl">The Right Solution for Your Operations</h1>
              <p className="mt-5 text-[15px] leading-relaxed text-cream/80 sm:text-base">Not every business needs more software. Sometimes you need a clearer process. Sometimes your existing tools need to work together. Sometimes a repetitive task can be automated. And sometimes AI can handle a specific job.</p>
            </div>
          </Container>
        </section>
        <Section>
          <ServiceCards />
          <div className="mt-8"><TextLink to="/pricing">View pricing packages</TextLink></div>
        </Section>
        <FinalCTA title={homeCta.h} text={homeCta.p} />
      </main>
    </>
  );
}