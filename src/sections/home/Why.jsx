import { Section } from '../../components/ui';
import { why, whyTitle } from '../../content';

export default function Why() {
  return (
    <Section labelledBy="why-h">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <h2 id="why-h" className="text-2xl leading-tight sm:text-3xl lg:sticky lg:top-24 lg:self-start lg:text-4xl">{whyTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {why.map(([t, d], i) => {
            const first = i === 0;
            const last = i === why.length - 1;
            return (
              <article key={t} className={`rounded-3xl border p-6 ${first ? 'border-ink bg-ink text-cream' : last ? 'border-ink/10 bg-sand/60 sm:col-span-2' : 'border-ink/15 bg-cream'}`}>
                <p className={`font-mono text-xs ${first ? 'text-sand' : 'text-ink/55'}`}>0{i + 1}</p>
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${first ? 'text-cream/80' : 'text-ink/75'}`}>{d}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}