import { FiArrowRight } from 'react-icons/fi';
import { CardGroup, ChipGroup, FormStatus, Honeypot, TextArea, TextField } from '../../components/Fields';
import { Section } from '../../components/ui';
import { useFormspree } from '../../components/useFormspree';

const HELP = ['Business Audit', 'Operations Automation', 'Integration Build', 'AI Agent', 'Not sure yet'];
const IMPROVE = ['Reduce repetitive work', 'Connect existing tools', 'Improve a process', 'Handle customer enquiries', 'Automate a recurring task', 'Explore AI for a specific task', 'Not sure yet'];
const ACHIEVE = ['Save time', 'Reduce manual work', 'Improve customer response', 'Reduce errors', 'Connect information across systems', 'Handle more work', 'Something else'];

export default function ConsultationForm() {
  const { status, onSubmit } = useFormspree(import.meta.env.VITE_FORMSPREE_CONSULTATION_ID);
  return (
    <Section tone="sand" className="!pt-10">
      <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-ink/15 bg-cream p-5 sm:p-8">
        <input type="hidden" name="_subject" value="New free consultation request" />
        <Honeypot />
        <section aria-labelledby="basic-h">
          <h2 id="basic-h" className="mb-4 text-xl">Basic details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Name" name="name" required autoComplete="name" />
            <TextField label="Work Email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="mt-4"><TextField label="Company / Organisation" name="company" autoComplete="organization" /></div>
        </section>
        <CardGroup legend="What would you like help with?" name="help_with" options={HELP} />
        <ChipGroup legend="What are you looking to improve?" name="improve" options={IMPROVE} />
        <TextArea label="Tell us a little more (optional)" name="details" placeholder="Briefly describe what you're currently doing and what you'd like to improve." />
        <ChipGroup legend="What would you like the improved process to achieve?" name="achieve" options={ACHIEVE} />
        <div className="space-y-4">
          <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-ink transition hover:brightness-105 disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : 'Request Free Consultation'} <FiArrowRight aria-hidden />
          </button>
          <FormStatus status={status} successText="Thank you. Your request has been sent, and we'll be in touch to arrange your free consultation." />
          <p className="text-sm leading-relaxed text-ink/65"><strong className="font-semibold text-ink">No preparation required.</strong> Share what you know — we&apos;ll use the consultation to understand the problem and explore what could help.</p>
        </div>
      </form>
    </Section>
  );
}