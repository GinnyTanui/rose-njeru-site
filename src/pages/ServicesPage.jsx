import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import { breadcrumbLd, Seo } from '../components/Seo';
import { ServiceCards } from '../components/Services';
import { Section, TextLink } from '../components/ui';
import { homeCta, services, SITE } from '../data';

export default function ServicesPage() {
  return (
    <>
      <Seo path="/services" title="AI Automation & Business Operations Services | Rose Njeru"
        description="Business process audits, systems integration, workflow automation, lead follow-up automation and AI agents for service businesses. Find the right place to start."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Services', '/services']]), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE.url}/services/${s.slug}` })) }]} />
      <main>
        <PageHero id="all-h" eyebrow="OUR SERVICES" title="AI Automation & Systems Solutions" variant="workflow">
          <p>Practical solutions for improving processes, connecting existing systems, automating repetitive activities and applying AI where it makes sense. Each solution is shaped around the processes, tools and needs involved.</p>
        </PageHero>
        <Section tone="white">
          <ServiceCards />
          <div className="mt-8"><TextLink to="/pricing">View pricing packages</TextLink></div>
        </Section>
        <FinalCTA title={homeCta.h} text={homeCta.p} />
      </main>
    </>
  );
}