import { FiBarChart2, FiLayers, FiSearch, FiUsers } from 'react-icons/fi';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Button, Dot, Eyebrow, Section } from '../components/ui';
import { about } from '../data';

const differentIcons = [FiSearch, FiBarChart2, FiLayers, FiUsers];

/* About page: hero, what I believe (with the OECD figures), why I do things differently, how I work,
   a short bio on a deep-blue band, the case-study pointer, then the closing call to action. */
export default function About() {
  return (
    <>
      <Seo path="/about" title="About Rose Njeru | Better Systems, Less Operational Friction"
        description="Rose Njeru helps service-based businesses improve how they work through better processes, connected systems, automation and practical AI. Based in Nairobi, Kenya."
        jsonLd={[breadcrumbLd([['Home', '/'], ['About', '/about']])]} />
      <main>
        <PageHero id="about-h" eyebrow="ABOUT" title={about.title} variant="about">
          {about.intro.map((p) => <p key={p}>{p}</p>)}
          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            <Button dark>Book a Free Consultation</Button>
            <Button dark variant="secondary" to="/services" arrow={false}>Explore My Services</Button>
          </div>
        </PageHero>

        {/* What I believe */}
        <Section tone="light" labelledBy="believe-h">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              <Eyebrow>WHAT I BELIEVE</Eyebrow>
              <h2 id="believe-h">{about.believe.title}</h2>
              <div className="mt-5 space-y-4 text-body text-muted">
                {about.believe.paras.map((p) => <p key={p}>{p}</p>)}
              </div>
              <p className="mt-6 border-l-4 border-orange pl-5 font-display text-h3 font-bold text-ink">{about.believe.emphasis}</p>
            </div>
            <aside aria-label="OECD survey findings" className="self-start rounded-3xl bg-brand p-6 text-white sm:p-8 lg:sticky lg:top-24">
              <p className="text-eyebrow font-semibold text-white/80">OECD SURVEY OF SMES USING GENERATIVE AI</p>
              <dl className="mt-5 space-y-6">
                {about.believe.stats.map(([n, label]) => (
                  <div key={n}>
                    <dt className="font-display text-display font-bold leading-none">{n}</dt>
                    <dd className="mt-2 text-small text-white/90">{label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-white/25 pt-4 text-xs text-white/80">
                Source: <a href={about.believe.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">{about.believe.source.label}</a>. {about.believe.source.note}
              </p>
            </aside>
          </div>
        </Section>

        {/* Why I do things differently */}
        <Section tone="white" labelledBy="diff-h">
          <h2 id="diff-h" className="max-w-3xl">{about.different.title}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.different.items.map(([t, d], i) => {
              const Icon = differentIcons[i];
              return (
                <article key={t} className="rounded-2xl border border-brand/15 bg-cream p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/15 text-xl text-orange-ink"><Icon aria-hidden /></span>
                  <h3 className="mt-4">{t}</h3>
                  <p className="mt-2 text-small text-muted">{d}</p>
                </article>
              );
            })}
          </div>
        </Section>

        {/* How I work */}
        <Section tone="light" labelledBy="how-h">
          <header className="max-w-3xl">
            <Eyebrow>HOW I WORK</Eyebrow>
            <h2 id="how-h">{about.how.subtitle}</h2>
          </header>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.how.steps.map(([no, name, text]) => (
              <li key={no} className="rounded-2xl border border-brand/15 bg-white p-6">
                <p className="text-small font-semibold text-brand"><span className="text-orange-ink">{no}</span> — {name}</p>
                <p className="mt-3 text-small text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-start gap-3 text-body font-semibold text-ink"><Dot className="mt-2.5 text-orange" />{about.how.closing}</p>
        </Section>

        {/* Meet Rose */}
        <Section tone="ink" labelledBy="meet-h">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
            <header>
              <h2 id="meet-h">{about.meet.title}</h2>
              <p className="mt-3 font-display font-bold text-orange-soft">{about.meet.role}</p>
            </header>
            <div className="space-y-4 text-body text-white/90">
              {about.meet.paras.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </Section>

        {/* Case studies pointer */}
        <Section tone="white" labelledBy="work-h">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-14">
            <div>
              <h2 id="work-h" className="max-w-2xl">{about.solutions.title}</h2>
              <div className="mt-4 max-w-2xl space-y-3 text-body text-muted">
                {about.solutions.paras.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
            <div className="lg:justify-self-end"><Button to="/case-studies">Explore Case Studies</Button></div>
          </div>
        </Section>

        <FinalCTA title={about.cta.title} text={about.cta.paras} />
      </main>
    </>
  );
}