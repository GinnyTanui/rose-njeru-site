import { Section } from '../../components/ui';
import { why } from '../../data';

export default function Why() {
  return (
    <Section labelledBy="why-h">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <h2 id="why-h" className="text-2xl leading-tight sm:text-3xl lg:sticky lg:top-24 lg:self-start lg:text-4xl">Why Work With Us</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {why.map(([t, d], i) => (
            <article key={t} className={`rounded-3xl border p-6 ${i === 0 ? 'border-ink bg-ink text-cream' : 'border-ink/15 bg-cream'}`}>
              <p className={`font-mono text-xs ${i === 0 ? 'text-accent' : 'text-ink/50'}`}>0{i + 1}</p>
              <h3 className="mt-3 text-lg">{t}</h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? 'text-cream/80' : 'text-ink/75'}`}>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}