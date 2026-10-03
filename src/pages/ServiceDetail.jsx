import { useParams } from 'react-router-dom';
import FAQSection from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { Seo, breadcrumbLd, faqLd, providerRef } from '../components/Seo';
import ServiceHero from '../sections/service/ServiceHero';
import { ServiceOutcome, ServiceOverview } from '../sections/service/ServiceBlocks';
import RelatedServices from '../sections/service/RelatedServices';
import NotFound from './NotFound';
import { SITE, services } from '../data';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);

  if (!s) return <NotFound />;

  const path = `/services/${s.slug}`;

  return (
    <>
      <Seo
        path={path}
        title={`${s.seoTitle} | Rose Njeru`}
        description={s.seo}
        jsonLd={[
          {
            '@type': 'Service',
            name: s.name,
            description: s.hero,
            url: SITE.url + path,
            provider: providerRef,
          },
          faqLd(s.faqs),
          breadcrumbLd([
            ['Home', '/'],
            ['Services', '/services'],
            [s.name, path],
          ]),
        ]}
      />

      <main>
        <ServiceHero s={s} />
        <ServiceOverview s={s} />
        <ServiceOutcome s={s} />
        <FAQSection items={s.faqs} />
        <RelatedServices current={s.slug} />
        <FinalCTA
          title={s.cta.h}
          text={s.cta.p}
          line={s.cta.line}
        />
      </main>
    </>
  );
}