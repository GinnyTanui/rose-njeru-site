import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import FAQSection from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { breadcrumbLd, faqLd, providerRef, Seo } from '../components/Seo';
import { Badge, Button, Container, Section, SectionHeading, TextLink } from '../components/ui';
import { caseStudies, CTA_LABEL, services, SITE } from '../data';
import NotFound from './NotFound';

/* Single column: the side visual and the "what we build" list are gone. */
function ServiceHero({ s }) {
  return (
    <section aria-labelledby="svc-h" className="relative overflow-hidden text-cream">
      <HeroBackground />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <Badge>Service {s.no}</Badge>
          <h1 id="svc-h" className="mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{s.name}</h1>
          {s.tagline && <p className="mt-3 font-display text-base font-bold text-cream sm:text-lg">{s.tagline}</p>}
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/80 sm:text-base">{s.hero}</p>
          {s.heroExtra && <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-cream/70">{s.heroExtra}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Button dark>{CTA_LABEL}</Button>
            <TextLink to="/pricing" dark>See {s.name} pricing</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Section 1: "Why you need it" (left, sticky) beside "What it includes" (right). */
const ServiceOverview = ({ s }) => (
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
        <ol className="mt-5 divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/15 bg-cream">
          {s.includes.map(([t, d], i) => (
            <li key={t} className="flex gap-4 px-5 py-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sand font-mono text-xs text-ink">{i + 1}</span>
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
const ServiceOutcome = ({ s }) => (
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
            {s.who.items.map((i) => <li key={i} className="flex items-start gap-3 text-[15px] text-ink/85"><FiCheck className="mt-1 shrink-0 text-ink" aria-hidden />{i}</li>)}
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

/* "Proof in production": links each service to its own case study. */
function ProofInProduction({ s }) {
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

function RelatedServices({ current }) {
  return (
    <Section tone="sand" labelledBy="rel-h">
      <SectionHeading id="rel-h" title="Related Services" />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.filter((s) => s.slug !== current).map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-3xl border border-ink/15 bg-cream p-6 transition hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-cream">
            <span className="font-mono text-xs text-ink/55 group-hover:text-accent">Service {s.no}</span>
            <h3 className="mt-3 text-lg">{s.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75 group-hover:text-cream/80">{s.short}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Explore {s.name} <FiArrowRight aria-hidden className="text-ink transition group-hover:translate-x-1 group-hover:text-accent" /></span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);

  if (!s) return <NotFound />;

  const path = `/services/${s.slug}`;

  return (
    <>
      <Seo
        path={path}
        title={`${s.seoTitle} | Rose Njeru`}
        description={s.seo}
        jsonLd={[
          {
            '@type': 'Service',
            name: s.name,
            description: s.hero,
            url: SITE.url + path,
            provider: providerRef,
          },
          faqLd(s.faqs),
          breadcrumbLd([
            ['Home', '/'],
            ['Services', '/services'],
            [s.name, path],
          ]),
        ]}
      />

      <main>
        <ServiceHero s={s} />
        <ServiceOverview s={s} />
        <ServiceOutcome s={s} />
        <ProofInProduction s={s} />
        <FAQSection items={s.faqs} />
        <RelatedServices current={s.slug} />
        <FinalCTA
          title={s.cta.h}
          text={s.cta.p}
          line={s.cta.line}
        />
      </main>
    </>
  );
}