import { Section, SectionHeading } from '../../components/ui';
import { steps } from '../../data';

export default function Process() {
  return (
    <Section id="process" tone="dark" labelledBy="process-h">
      <SectionHeading id="process-h" dark title="Our Process in Four Simple Steps">
        Here&apos;s what it&apos;s like to work together — clear, practical, and focused on finding the right way to improve your business processes.
      </SectionHeading>
      <ol className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
        <span className="absolute left-[18px] top-[18px] hidden h-px w-[calc(100%-2.25rem)] bg-cream/20 lg:block" aria-hidden />
        <span className="absolute bottom-0 left-[18px] top-[18px] w-px bg-cream/20 lg:hidden" aria-hidden />
        {steps.map(([t, d], i) => (
          <li key={t} className="relative pl-14 lg:pl-0 lg:pt-14">
            <span className={`absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full font-mono text-sm ${i === 3 ? 'bg-accent text-ink' : 'border border-cream/40 bg-ink text-cream'}`}>{i + 1}</span>
            <h3 className="text-lg">{t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cream/75">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}