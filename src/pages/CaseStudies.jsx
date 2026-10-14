import { FiArrowDown, FiUserCheck } from 'react-icons/fi';
import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Badge, Container, Dot, Eyebrow, Section, TextLink } from '../components/ui';
import { caseStudies, homeCta } from '../data';

/* One block of a case study: plain text, a bullet list, or a step-by-step flow. */
function Block({ b }) {
  const body = (
    <>
      <h3 className={`font-display text-lg font-bold sm:text-xl ${b.tone === 'result' ? 'text-sand' : ''}`}>{b.h}</h3>
      {b.p && <p className={`mt-2 text-[15px] leading-relaxed sm:text-base ${b.tone === 'result' ? 'text-cream/85' : 'text-ink/80'}`}>{b.p}</p>}
      {b.list && (
        <ul className="mt-3 space-y-2.5" role="list">
          {b.list.map((x) => <li key={x} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85 sm:text-base"><Dot className="mt-2.5 text-ink" />{x}</li>)}
        </ul>
      )}
      {b.flow && (
        <ol className="mt-4" role="list">
          {b.flow.map(([label, detail], i) => (
            <li key={label}>
              <div className="flex gap-4 rounded-2xl border border-ink/15 bg-cream px-4 py-3.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs text-cream">{i + 1}</span>
                <p className="pt-1 text-[15px] leading-snug"><span className="font-display font-bold">{label}</span> <span className="text-ink/75">{detail}</span></p>
              </div>
              {i < b.flow.length - 1 && <FiArrowDown className="mx-auto my-1.5 text-ink/40" aria-hidden />}
            </li>
          ))}
        </ol>
      )}
    </>
  );
  if (b.tone === 'result') return <div className="rounded-3xl bg-ink p-6 text-cream sm:p-7">{body}</div>;
  if (b.tone === 'callout') {
    return (
      <div className="flex gap-4 rounded-3xl bg-sand p-6 sm:p-7">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-lg text-sand"><FiUserCheck aria-hidden /></span>
        <div>{body}</div>
      </div>
    );
  }
  return <div>{body}</div>;
}

export default function CaseStudies() {
  return (
    <>
      <Seo path="/case-studies" title="Case Studies: Proof in Production | Rose Njeru"
        description="Real work for real businesses: a business audit, operations automation, an integration build and an AI agent, with what was built and what we'd measure."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Case Studies', '/case-studies']])]} />
      <main>
        <section aria-labelledby="cs-h" className="relative overflow-hidden text-cream">
          <HeroBackground density={0.7} />
          <Container className="relative py-14 sm:py-20">
            <div className="max-w-3xl">
              <Eyebrow dark>CASE STUDIES</Eyebrow>
              <h1 id="cs-h" className="text-3xl leading-[1.1] sm:text-5xl">Proof in production</h1>
              <nav aria-label="Case studies" className="mt-8">
                <ul className="flex flex-wrap gap-2.5" role="list">
                  {caseStudies.map((c) => (
                    <li key={c.slug}>
                      <a href={`#${c.slug}`} className="inline-flex items-center gap-2 rounded-full border border-sand/60 px-4 py-2 text-sm text-sand transition hover:bg-sand hover:text-ink">
                        <span className="font-mono text-xs">{c.no}</span>{c.service}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Container>
        </section>

        {caseStudies.map((c, i) => (
          <Section key={c.slug} id={c.slug} tone={i % 2 ? 'sand' : 'light'} labelledBy={`${c.slug}-h`}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Badge>Service {c.no}</Badge>
                <h2 id={`${c.slug}-h`} className="mt-4 text-2xl leading-tight sm:text-3xl">{c.title}</h2>
                <div className="mt-6 rounded-3xl border border-ink/10 bg-sand/60 p-5">
                  <p className="font-display text-sm font-bold">What we&apos;d measure</p>
                  <ul className="mt-3 space-y-2" role="list">
                    {c.measure.map((m) => <li key={m} className="flex items-start gap-2.5 text-[15px] leading-snug first-letter:uppercase"><Dot className="mt-2 text-ink" />{m}</li>)}
                  </ul>
                </div>
                <div className="mt-6"><TextLink to={`/services/${c.slug}`}>About {c.service}</TextLink></div>
              </div>

              <div className="space-y-6">
                {c.blocks.map((b) => <Block key={b.h} b={b} />)}
                {c.bonus && (
                  <aside className="rounded-3xl border-2 border-dashed border-ink/25 p-6 sm:p-7">
                    <Badge>{c.bonus.label}</Badge>
                    <h3 className="mt-3 font-display text-lg font-bold sm:text-xl">{c.bonus.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/80 sm:text-base">{c.bonus.text}</p>
                  </aside>
                )}
              </div>
            </div>
          </Section>
        ))}

        <FinalCTA title={homeCta.h} text={homeCta.p} />
      </main>
    </>
  );
}