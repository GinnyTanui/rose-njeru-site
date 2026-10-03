import PageHero from '../components/PageHero';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Section } from '../components/ui';
import ContactDetails from '../sections/contact/ContactDetails';
import ContactForm from '../sections/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <Seo path="/contact" title="Contact Rose Njeru | Let's Talk"
        description="Have a question or want to get in touch? Send Rose Njeru a message about AI automation, business operations or tool integrations."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Contact', '/contact']]), { '@type': 'ContactPage', name: 'Contact' }]} />
      <main>
        <PageHero id="contact-h" eyebrow="CONTACT" title="Let's Talk">
          <p>Have a question, need more information, or want to get in touch? Send us a message and we&apos;ll get back to you.</p>
        </PageHero>
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ContactDetails />
            <ContactForm />
          </div>
        </Section>
      </main>
    </>
  );
}