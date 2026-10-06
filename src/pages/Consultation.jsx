import PageHero from '../components/PageHero';
import { Seo, breadcrumbLd } from '../components/Seo';
import CalendlyBooking from '../sections/consultation/CalendlyBooking';

export default function Consultation() {
  return (
    <>
      <Seo path="/consultation" title="Book a Free Consultation | Rose Njeru"
        description="Pick a time that suits you for a free consultation about automation, integrations or AI agents for your business."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Book a Free Consultation', '/consultation']])]} />
      <main>
        <PageHero id="consult-h" eyebrow="FREE CONSULTATION" title="Book a Free Consultation">
          <p>Pick a time that suits you, and tell me a little about how your business runs.</p>
        </PageHero>
        <CalendlyBooking />
      </main>
    </>
  );
}