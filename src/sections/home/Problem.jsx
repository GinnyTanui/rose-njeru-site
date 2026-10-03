import { Section } from '../../components/ui';
import { problems } from '../../data';

/* Two-column grid: five situations, with the "Individually..." line as the sixth card. */
export default function Problem() {
  return (
    <Section labelledBy="problem-h" className="!py-12 lg:!py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="problem-h" className="text-2xl leading-tight sm:text-3xl lg:text-4xl">The Small Gaps in Your Business Add Up</h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink/75 sm:text-base">Small gaps in how work gets done can quietly cost you time, customers, and money.</p>
      </div>
      <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
        <ul className="contents" role="list">
          {problems.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-2xl border border-ink/15 bg-white/60 px-5 py-4 text-[15px]">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />{p}
            </li>
          ))}
        </ul>
        <p className="flex items-center rounded-2xl bg-ink px-5 py-4 font-display text-base font-bold leading-snug text-cream">Individually, these gaps may seem small. Over time, they add up.</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-ink/75">The problem isn&apos;t always one major issue. Sometimes, it&apos;s the gaps between your processes, tools, and the way work gets done.</p>
    </Section>
  );
}