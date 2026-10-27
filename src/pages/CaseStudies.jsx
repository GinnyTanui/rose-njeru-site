import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Badge, Dot, Section, TextLink } from '../components/ui';
import { caseStudies, casesTitle, homeCta } from '../data';

export default function CaseStudies() {
  return (
    <>
      <Seo path="/case-studies" title="Case Studies: Operational Challenges, Measurable Improvements | Rose Njeru"
        description="Case studies showing how a business process audit, workflow automation, systems integration, AI agents and lead follow-up automation turn operational challenges into measurable improvements."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Case Studies', '/case-studies']])]} />
      <main>
        <PageHero id="cs-h" eyebrow="CASE STUDIES" title={casesTitle} variant="audit">
          <nav aria-label="Case studies">
            <ul className="mt-6 flex flex-wrap gap-2.5" role="list">
              {caseStudies.map((c) => (
                <li key={c.slug}><a href={`#${c.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-2 text-small text-white transition hover:bg-white hover:text-brand"><span className="font-bold">{c.no}</span>{c.label}</a></li>
              ))}
            </ul>
          </nav>
        </PageHero>

        {caseStudies.map((c, i) => (
          <Section key={c.slug} id={c.slug} tone={i % 2 ? 'white' : 'light'} labelledBy={`${c.slug}-h`}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Badge>Service {c.no}: {c.label}</Badge>
                <h2 id={`${c.slug}-h`} className="mt-4">{c.challengeTitle}</h2>
                <p className="mt-3 text-small font-semibold text-muted">{c.client}</p>
                <div className="mt-6 rounded-2xl border border-brand/15 bg-white p-5">
                  <p className="font-display text-small font-bold">What I&apos;d measure</p>
                  <ul className="mt-3 space-y-2" role="list">
                    {c.measure.map((m) => <li key={m} className="flex items-start gap-2.5 text-small"><Dot className="mt-2 text-brand" />{m}</li>)}
                  </ul>
                </div>
                <div className="mt-6"><TextLink to={`/services/${c.service}`}>About {c.label}</TextLink></div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-eyebrow font-semibold text-brand">THE CHALLENGE</p>
                  <div className="mt-3 space-y-4 text-body text-muted">{c.challenge.map((p) => <p key={p}>{p}</p>)}</div>
                </div>
                <div className="rounded-2xl bg-brand p-6 text-white sm:p-8">
                  <p className="text-eyebrow font-semibold text-white/80">THE SOLUTION</p>
                  <h3 className="mt-2 text-h2 !text-[1.375rem] sm:!text-[1.5rem]">{c.solutionTitle}</h3>
                  <div className="mt-3 space-y-3 text-body text-white/90">{c.solution.map((p) => <p key={p}>{p}</p>)}</div>
                  <h4 className="mt-6 font-display font-bold">{c.itemsLabel}</h4>
                  <ul className="mt-3 space-y-3" role="list">
                    {c.items.map(([t, d], k) => (
                      <li key={t} className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                        {c.numbered ? <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand">0{k + 1}</span> : <Dot className="mt-2 text-mint" />}
                        <p className="text-small"><span className="font-display font-bold">{t}.</span> <span className="text-white/90">{d}</span></p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        ))}
        <FinalCTA title={homeCta.h} text={homeCta.p} variant="integration" />
      </main>
    </>
  );
}