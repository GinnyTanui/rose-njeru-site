import FinalCTA from '../components/FinalCTA';
import { Seo, breadcrumbLd, providerRef } from '../components/Seo';
import PricingHero from '../sections/pricing/PricingHero';
import PackageGrid from '../sections/pricing/PackageGrid';
import { SITE, pricing } from '../data';

const offer = (p) => (p.tiers
  ? { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '75', highPrice: '200' }
  : { '@type': 'Offer', priceCurrency: 'USD', price: p.price.replace('$', '') });

export default function Pricing() {
  return (
    <>
      <Seo path="/pricing" title="Pricing Packages for AI Automation Services | Rose Njeru"
        description="Clear pricing for a Business Audit, Operations Automation, Integration Build and AI Agents, with delivery times and what each package includes."
        jsonLd={[
          breadcrumbLd([['Home', '/'], ['Pricing', '/pricing']]),
          ...pricing.map((p) => ({ '@type': 'Service', name: p.name, url: `${SITE.url}/services/${p.slug}`, provider: providerRef, offers: offer(p) })),
        ]} />
      <main>
        <PricingHero />
        <PackageGrid />
        <FinalCTA title="Not Sure Where to Start?" text="Talk through how your operations work and identify which service or package fits your needs." />
      </main>
    </>
  );
}