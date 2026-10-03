import { FiArrowRight } from 'react-icons/fi';
import { FormStatus, Honeypot, TextArea, TextField } from '../../components/Fields';
import { useFormspree } from '../../components/useFormspree';

export default function ContactForm() {
  const { status, onSubmit } = useFormspree(import.meta.env.VITE_FORMSPREE_CONTACT_ID);
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl">Send a Message</h2>
      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-3xl border border-ink/15 bg-cream p-5 sm:p-7">
        <input type="hidden" name="_subject" value="New message from the website contact form" />
        <Honeypot />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Name" name="name" required autoComplete="name" />
          <TextField label="Email" name="email" type="email" required autoComplete="email" />
        </div>
        <TextField label="Subject / Reason for Contact" name="subject" required />
        <TextArea label="Message" name="message" required />
        <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-ink transition hover:brightness-105 disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send Message'} <FiArrowRight aria-hidden />
        </button>
        <FormStatus status={status} successText="Thank you. Your message has been sent." />
        <p className="text-sm text-ink/65">We&apos;ll review your message and get back to you as soon as possible.</p>
      </form>
    </div>
  );
}