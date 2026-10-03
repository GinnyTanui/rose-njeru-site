import { FiCheck } from 'react-icons/fi';
import { Button, Section, TextLink } from '../../components/ui';
import { CTA_LABEL } from '../../data';

/* Section 1: "Why you need it" (left, sticky) beside "What it includes" (right). */
export const ServiceOverview = ({ s }) => (
  <Section labelledBy="why-h" className="!pt-10">
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 id="why-h" className="text-2xl leading-tight sm:text-3xl">{s.whyTitle}</h2>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/80 sm:text-base">
          {s.why.map((p, i) => <p key={i} className={i === s.why.length - 1 ? 'font-display text-lg font-bold text-ink' : ''}>{p}</p>)}
        </div>
      </div>
      <div>
        <h2 id="inc-h" className="text-2xl leading-tight sm:text-3xl">{s.includesTitle}</h2>
        {s.includesIntro && <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{s.includesIntro}</p>}
        <ol className="mt-5 divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/15 bg-white/60">
          {s.includes.map(([t, d], i) => (
            <li key={t} className="flex gap-4 px-5 py-4">
              <span className="pt-0.5 font-mono text-xs text-ink/45">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-base">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
);

/* Section 2: "What you get" (dark card) beside "Who it's for" (light card with CTA). */
export const ServiceOutcome = ({ s }) => (
  <Section tone="sand" labelledBy="get-h">
    <div className="grid gap-5 lg:grid-cols-2">
      <article className="rounded-3xl bg-ink p-6 text-cream sm:p-8">
        <h2 id="get-h" className="text-2xl leading-tight sm:text-3xl">{s.getTitle}</h2>
        {s.getLead && <p className="mt-3 font-display text-lg font-bold leading-snug text-accent">{s.getLead}</p>}
        {s.getIntro && <p className="mt-3 text-[15px] leading-relaxed text-cream/75">{s.getIntro}</p>}
        {s.get.length > 0 && <ul className="mt-6 space-y-3.5">
          {s.get.map(([t, d]) => (
            <li key={t} className="flex items-start gap-3">
              <FiCheck className="mt-1 shrink-0 text-accent" aria-hidden />
              <div><h3 className="text-base">{t}</h3>{d && <p className="mt-0.5 text-sm leading-relaxed text-cream/70">{d}</p>}</div>
            </li>
          ))}
        </ul>}
      </article>
      <article className="flex flex-col rounded-3xl border border-ink/15 bg-cream p-6 sm:p-8">
        <h2 id="who-h" className="text-2xl leading-tight sm:text-3xl">Who Is This For?</h2>
        <p className="mt-3 font-display text-lg font-bold leading-snug">{s.who.intro}</p>
        {s.who.items.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {s.who.items.map((i) => <li key={i} className="flex items-start gap-3 text-[15px] text-ink/85"><FiCheck className="mt-1 shrink-0 text-accent" aria-hidden />{i}</li>)}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
          <Button>{CTA_LABEL}</Button>
          <TextLink to="/pricing">See pricing</TextLink>
        </div>
      </article>
    </div>
  </Section>
);