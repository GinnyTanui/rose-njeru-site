import { Badge, Button, Section, SectionHeading } from '../../components/ui';
import { caseStudies } from '../../content';

/* "Proof in production": links each service to its own case study. */
export default function ProofInProduction({ s }) {
  const c = caseStudies.find((x) => x.slug === s.slug);
  if (!c) return null;
  return (
    <Section tone="dark" labelledBy="proof-h">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading id="proof-h" dark eyebrow="Case study" title="Proof in production">
            {`See how ${s.name} shipped in a real business, then read the full case study.`}
          </SectionHeading>
          <div className="mt-7"><Button dark to={`/case-studies#${c.slug}`}>Read the case study</Button></div>
        </div>
        <article className="rounded-3xl bg-sand p-6 text-ink sm:p-8">
          <Badge className="!bg-ink !text-cream">{c.service}</Badge>
          <h3 className="mt-4 text-xl sm:text-2xl">{c.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{c.blocks[0].p}</p>
          <div className="mt-5 border-t border-ink/15 pt-4">
            <p className="font-display text-sm font-bold">What we&apos;d measure</p>
            <ul className="mt-3 flex flex-wrap gap-2" role="list">
              {c.measure.map((m) => <li key={m} className="rounded-full bg-cream px-3.5 py-1.5 text-sm first-letter:uppercase">{m}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}