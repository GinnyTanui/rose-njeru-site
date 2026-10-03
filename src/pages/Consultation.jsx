import PageHero from '../components/PageHero';
import { Seo, breadcrumbLd } from '../components/Seo';
import ConsultationForm from '../sections/consultation/ConsultationForm';

export default function Consultation() {
  return (
    <>
      <Seo path="/consultation" title="Book a Free Consultation | Rose Njeru"
        description="Tell us what you're working with and what you'd like to improve. Request a free consultation about automation, integrations or AI agents for your business."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Book a Free Consultation', '/consultation']])]} />
      <main>
        <PageHero id="consult-h" eyebrow="FREE CONSULTATION" title="Book a Free Consultation">
          <p>Tell us a little about what you&apos;re working with and what you&apos;d like to improve.</p>
          <p>We&apos;ll review the details before the consultation so we can make the conversation useful.</p>
        </PageHero>
        <ConsultationForm />
      </main>
    </>
  );
}