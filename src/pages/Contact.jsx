import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiAlertCircle, FiArrowRight, FiCheckCircle, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import { breadcrumbLd, Seo } from '../components/Seo';
import { Section } from '../components/ui';
import { SITE } from '../data';

/* Posts a form to Formspree as JSON. formId is the part after /f/ in your Formspree endpoint.
   status: idle | sending | success | error | unconfigured */
function useFormspree(formId) {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!formId) return setStatus('unconfigured');
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // honeypot: bots fill this in, people never see it
    const body = {};
    for (const key of new Set(data.keys())) {
      const values = data.getAll(key);
      body[key] = values.length > 1 ? values.join(', ') : values[0]; // multi-select chips -> "a, b, c"
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) { setStatus('success'); form.reset(); } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return { status, onSubmit };
}

const box = 'w-full rounded-lg border border-ink/20 bg-cream px-3 py-1.5 text-base outline-none sm:text-[13px] transition placeholder:text-ink/40 focus:border-ink focus:ring-2 focus:ring-ink/20';

const TextField = ({ label, name, type = 'text', required, placeholder, autoComplete }) => (
  <label className="block">
    <span className="mb-0.5 block text-xs font-semibold">{label}{required && <span className="text-ink/50"> *</span>}</span>
    <input className={box} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} />
  </label>
);

const TextArea = ({ label, name, required, placeholder, rows = 5 }) => (
  <label className="block">
    <span className="mb-0.5 block text-xs font-semibold">{label}{required && <span className="text-ink/50"> *</span>}</span>
    <textarea className={`${box} resize-y`} name={name} required={required} placeholder={placeholder} rows={rows} />
  </label>
);

const Honeypot = () => <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />;

const FormStatus = ({ status, successText }) => {
  if (status === 'success') return <p role="status" className="flex items-start gap-2 rounded-2xl bg-ink px-4 py-3 text-sm text-cream"><FiCheckCircle className="mt-0.5 shrink-0 text-accent" aria-hidden />{successText}</p>;
  if (status === 'error') return <p role="alert" className="flex items-start gap-2 rounded-2xl border border-accent bg-accent/15 px-4 py-3 text-sm"><FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />Something went wrong sending that. Please try again, or email {SITE.email}.</p>;
  if (status === 'unconfigured') return <p role="alert" className="flex items-start gap-2 rounded-2xl border border-accent bg-accent/15 px-4 py-3 text-sm"><FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />This form isn&apos;t connected to Formspree yet. Add the form ID to your .env file (see README).</p>;
  return null;
};

const Row = ({ icon: I, label, href, children }) => {
  const external = /^https?:\/\//.test(href);
  return (
    <li>
      <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} className="group flex items-center gap-2.5 rounded-lg border border-ink/15 bg-cream p-2.5 transition hover:border-ink">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm text-accent"><I aria-hidden /></span>
        <span><span className="block text-[11px] text-ink/55">{label}</span><span className="break-all text-[13px] font-medium">{children}</span></span>
      </a>
    </li>
  );
};

function ContactDetails() {
  return (
    <div>
      <h2 className="text-lg sm:text-xl">Contact Details</h2>
      <ul className="mt-3 space-y-2">
        <Row icon={FiMail} label="Email" href={`mailto:${SITE.email}`}>{SITE.email}</Row>
        {SITE.phone && <Row icon={FiPhone} label="Phone" href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</Row>}
        {SITE.location && (
          <li className="flex items-center gap-2.5 rounded-lg border border-ink/15 bg-cream p-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm text-accent"><FiMapPin aria-hidden /></span>
            <span><span className="block text-[11px] text-ink/55">Location / service area</span><span className="text-[13px] font-medium">{SITE.location}</span></span>
          </li>
        )}
        <Row icon={FaLinkedinIn} label="LinkedIn" href={SITE.linkedin}>Rose Njeru</Row>
      </ul>
    </div>
  );
}

function ContactForm() {
  const { status, onSubmit } = useFormspree(import.meta.env.VITE_FORMSPREE_CONTACT_ID);
  return (
    <div>
      <h2 className="text-lg sm:text-xl">Send a Message</h2>
      <form onSubmit={onSubmit} className="mt-3 space-y-2.5 rounded-xl border border-ink/15 bg-cream p-3.5 sm:p-4">
        <input type="hidden" name="_subject" value="New message from the website contact form" />
        <Honeypot />
        <div className="grid gap-2.5 sm:grid-cols-2">
          <TextField label="Name" name="name" required autoComplete="name" />
          <TextField label="Email" name="email" type="email" required autoComplete="email" />
        </div>
        <TextField label="Subject / Reason for Contact" name="subject" required />
        <TextArea label="Message" name="message" required rows={3} />
        <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-[36px] items-center justify-center gap-2 rounded-full bg-ink px-4 py-1.5 text-[13px] font-semibold text-cream transition hover:bg-ink-soft disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send Message'} <FiArrowRight aria-hidden />
        </button>
        <FormStatus status={status} successText="Thank you. Your message has been sent." />
        <p className="text-[11px] text-ink/65">We&apos;ll review your message and get back to you as soon as possible.</p>
      </form>
    </div>
  );
}

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
        <Section className="!py-10 sm:!py-12">
          <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <ContactDetails />
            <ContactForm />
          </div>
        </Section>
      </main>
    </>
  );
}