import FAQSection from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { Seo, faqLd, siteNodes } from '../components/Seo';
import Hero from '../sections/home/Hero';
import Problem from '../sections/home/Problem';
import Help from '../sections/home/Help';
import CaseStudyPreview from '../sections/home/CaseStudyPreview';
import ServicesSection from '../sections/home/Services';
import Process from '../sections/home/Process';
import Tools from '../sections/home/Tools';
import Why from '../sections/home/Why';
import { homeCta } from '../data';
import { homeFaqs } from '../content';

export default function Home() {
  return (
    <>
      <Seo path="/" title="AI Automation & Business Systems Specialist | Rose Njeru"
        description="Rose Njeru helps service businesses make operations easier to run with AI automation, business process automation, connected systems and AI agents."
        jsonLd={[...siteNodes, faqLd(homeFaqs)]} />
      <main>
        <Hero /><Problem /><Help /><ServicesSection /><CaseStudyPreview /><Process /><Tools /><Why />
        <FAQSection items={homeFaqs} tone="sand" />
        <FinalCTA title={homeCta.h} text={homeCta.p} />
      </main>
    </>
  );
}