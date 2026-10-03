import { Link, Navigate, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiCpu, FiGitBranch, FiLink, FiLink2, FiMessageCircle, FiRepeat, FiSearch, FiTarget, FiUsers } from 'react-icons/fi';
import { FaMicrosoft } from 'react-icons/fa';
import { SiAirtable, SiMake, SiN8N, SiNotion, SiPython, SiZapier } from 'react-icons/si';
import { Button, Container, Eyebrow, FAQSection, FinalCTA, Section, SectionHeading, Seo, TextLink, faqLd } from './components/ui';
import { HeroBackground, HeroVisual, ProblemVisual, ServiceVisual } from './components/Visuals';
import { homeCta, homeFaqs, outcomes, problems, services, steps, tools, why } from './data';

const outcomeIcons = [FiMessageCircle, FiTarget, FiLink, FiRepeat];
const serviceIcons = { 'business-audit': FiSearch, 'operations-automation': FiGitBranch, 'integration-build': FiLink2, 'ai-agents': FiCpu };
// GoHighLevel has no logo in react-icons, so it uses a generic CRM icon. Swap in her real logo asset if she has one.
const toolIcons = { Zapier: SiZapier, Make: SiMake, n8n: SiN8N, 'Microsoft Power Automate': FaMicrosoft, Airtable: SiAirtable, Notion: SiNotion, GoHighLevel: FiUsers, Python: SiPython };

/* ================= HOMEPAGE ================= */
const Hero = () => (
  <section aria-labelledby="hero-h" className="relative overflow-hidden text-cream">
    <HeroBackground />
    <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-24">
      <div>
        <Eyebrow dark>AI AUTOMATION &amp; BUSINESS OPERATIONS SPECIALIST</Eyebrow>
        <h1 id="hero-h" className="text-3xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">AI Automation for Smarter Business Operations</h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/80 sm:text-base">Make your business easier to run with better processes, connected tools, smart automation, and AI solutions built around the way your business works.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button>Book a Consultation</Button>
          <Button to="/#services" variant="secondary" dark>Explore Services</Button>
        </div>
      </div>
      <HeroVisual />
    </Container>
  </section>
);

/* Text left, diagram right. */
const Problem = () => (
  <Section labelledBy="problem-h">
    <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <SectionHeading id="problem-h" title="The Small Gaps in Your Business Add Up">
          Your business may be busy. But behind the scenes, small gaps in your processes can quietly cost you time, customers, and money.
        </SectionHeading>
        <ul className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
          {problems.map((p) => (
            <li key={p} className="flex gap-3 py-3.5 font-display text-base font-bold leading-snug sm:text-lg"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />{p}</li>
          ))}
        </ul>
      </div>
      <div className="lg:sticky lg:top-24"><ProblemVisual /></div>
    </div>
    <p className="mt-10 max-w-3xl border-l-4 border-accent pl-4 font-display text-xl font-bold leading-snug sm:text-2xl">
      None of these problems seem huge on their own. But when they happen every day, they become expensive.
    </p>
    <div className="mt-10 grid gap-4 rounded-3xl bg-ink p-6 text-cream sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-12">
      <h3 className="text-2xl sm:text-3xl">That&apos;s where we come in.</h3>
      <p className="max-w-2xl text-[15px] leading-relaxed text-cream/80">We look at how your business actually works — your processes, tools, customer interactions, and repetitive tasks — and identify where better systems, automation, integrations, or AI can take some of that work off your team&apos;s plate.</p>
    </div>
  </Section>
);

const Outcomes = () => (
  <Section tone="sand" labelledBy="outcomes-h">
    <SectionHeading id="outcomes-h" title="Make the Processes Behind Your Business Run More Smoothly">
      From the first customer enquiry to the work happening behind the scenes, I help you build systems that keep things moving.
    </SectionHeading>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {outcomes.map(([t, d], i) => {
        const I = outcomeIcons[i];
        return (
          <article key={t} className="rounded-3xl border border-ink/15 bg-cream p-6">
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-ink text-lg text-accent"><I aria-hidden /></span>
            <h3 className="text-lg">{t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{d}</p>
          </article>
        );
      })}
    </div>
    <div className="mt-8"><TextLink to="/#services">Explore Services</TextLink></div>
  </Section>
);

/* Rounded service cards. The whole card is a link; it fills teal on hover. */
export const ServiceCards = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {services.map((s) => {
      const I = serviceIcons[s.slug];
      return (
        <Link key={s.slug} to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-3xl border border-ink/15 bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-cream hover:shadow-xl hover:shadow-ink/20">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-ink/55 transition group-hover:text-cream/60">Service {s.no}</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-lg text-accent transition group-hover:bg-accent group-hover:text-ink"><I aria-hidden /></span>
          </div>
          <h3 className="mt-5 text-xl">{s.name}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75 transition group-hover:text-cream/80">{s.short}</p>
          <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-ink/55 transition group-hover:text-cream/60">{s.listLabel}</p>
          <ul className="space-y-1.5 text-sm">
            {s.list.map((i) => <li key={i} className="flex items-start gap-2"><FiCheck className="mt-0.5 shrink-0 text-accent" aria-hidden />{i}</li>)}
          </ul>
          <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold">Explore <FiArrowRight className="text-accent transition group-hover:translate-x-1" aria-hidden /></span>
        </Link>
      );
    })}
  </div>
);

const ServiceList = () => (
  <Section id="services" labelledBy="services-h">
    <SectionHeading id="services-h" eyebrow="Our services" title="What Your Business Needs to Run Better">
      Not every business needs more software. Sometimes you need a clearer process. Sometimes your existing tools need to work together. Sometimes a repetitive task can be automated. And sometimes AI can handle a specific job.
    </SectionHeading>
    <div className="mt-10"><ServiceCards /></div>
    <div className="mt-8"><TextLink to="/services">See all services</TextLink></div>
  </Section>
);

const Process = () => (
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

const Tools = () => (
  <Section tone="sand" labelledBy="tools-h">
    <SectionHeading id="tools-h" title="Tools I Use to Build Your Systems">
      We work with a range of automation, workflow, data, and business platforms to build systems around the way your business operates.
    </SectionHeading>
    <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_1.1fr_0.5fr]">
      {tools.map(([g, list]) => (
        <div key={g} className="rounded-3xl border border-ink/15 bg-cream p-5 sm:p-6">
          <h3 className="mb-4 text-base">{g}</h3>
          <ul className="grid grid-cols-2 gap-3">
            {list.map((t) => {
              const I = toolIcons[t];
              return (
                <li key={t} className="flex flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-cream-sand/60 p-4 transition hover:border-ink/40">
                  <I className="text-2xl text-ink" aria-hidden />
                  <span className="text-sm font-medium leading-tight">{t}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const Why = () => (
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

export function Home() {
  return (
    <>
      <Seo title="AI Automation & Business Operations Specialist | Rose Njeru Automation"
        description="Business audits, operations automation, tool integrations and AI agents for service businesses with growing teams."
        jsonLd={{ '@context': 'https://schema.org', '@graph': [{ '@type': 'ProfessionalService', name: 'Rose Njeru Automation', description: 'AI automation and business operations for service businesses.' }, faqLd(homeFaqs)] }} />
      <main>
        <Hero /><Problem /><Outcomes /><ServiceList /><Process /><Tools /><Why />
        <FAQSection items={homeFaqs} />
        <FinalCTA title={homeCta.h} text={homeCta.p} button={homeCta.btn} />
      </main>
    </>
  );
}

/* ================= ALL SERVICES ================= */
export function Services() {
  return (
    <>
      <Seo title="Services | Rose Njeru Automation" description="Business Audit, Operations Automation, Integration Build and AI Agents for service businesses."
        jsonLd={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Services' }} />
      <main>
        <Section tone="dark" className="relative overflow-hidden !py-0" labelledBy="all-h">
          <div className="absolute inset-0"><HeroBackground density={0.6} /></div>
          <div className="relative py-14 lg:py-20">
            <SectionHeading id="all-h" dark eyebrow="Our services" title="What Your Business Needs to Run Better">
              Not every business needs more software. Sometimes you need a clearer process. Sometimes your existing tools need to work together. Sometimes a repetitive task can be automated. And sometimes AI can handle a specific job.
            </SectionHeading>
          </div>
        </Section>
        <Section><ServiceCards /></Section>
        <FinalCTA title={homeCta.h} text={homeCta.p} button={homeCta.btn} />
      </main>
    </>
  );
}

/* ================= SERVICE DETAIL (one layout, four data sets) ================= */
const DetailBlock = ({ id, tone, title, lead, intro, children }) => (
  <Section tone={tone} labelledBy={id}>
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 id={id} className="text-2xl leading-tight sm:text-3xl">{title}</h2>
        {lead && <p className="mt-4 font-display text-lg font-bold leading-snug text-accent">{lead}</p>}
        {intro && <p className="mt-3 text-[15px] leading-relaxed opacity-75">{intro}</p>}
      </div>
      <div>{children}</div>
    </div>
  </Section>
);

const WHO_TITLES = {
  'business-audit': 'Who Is This For?',
  'operations-automation': 'Who This Operations Automation Service Is For',
  'integration-build': 'Who This Integration Build Is For',
  'ai-agents': 'Who This AI Agent Service Is For',
};

export function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/" replace />;
  const hasDesc = s.get.some((g) => g[1]);
  return (
    <>
      <Seo title={`${s.name} | Rose Njeru Automation`} description={s.seo}
        jsonLd={{ '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', name: s.name, description: s.hero, provider: { '@type': 'ProfessionalService', name: 'Rose Njeru Automation' } }, faqLd(s.faqs)] }} />
      <main>
        <section aria-labelledby="svc-h" className="relative overflow-hidden text-cream">
          <HeroBackground />
          <Container className="relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
            <div>
              <p className="font-display text-5xl font-extrabold text-accent sm:text-6xl">{s.no}</p>
              <h1 id="svc-h" className="mt-2 text-3xl leading-[1.1] sm:text-5xl">{s.name}</h1>
              {s.tagline && <p className="mt-3 font-display text-lg font-bold text-cream">{s.tagline}</p>}
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/80 sm:text-base">{s.hero}</p>
              {s.heroExtra && <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/70">{s.heroExtra}</p>}
              <div className="mt-7"><Button>Book a Consultation</Button></div>
            </div>
            <ServiceVisual type={s.visual} />
          </Container>
        </section>

        <DetailBlock id="why-h" title={s.whyTitle}>
          <div className="space-y-4 text-base leading-relaxed text-ink/80">
            {s.why.map((p, i) => <p key={i} className={i === s.why.length - 1 ? 'font-display text-xl font-bold text-ink' : ''}>{p}</p>)}
          </div>
        </DetailBlock>

        <DetailBlock id="inc-h" tone="sand" title={s.includesTitle} intro={s.includesIntro}>
          <ol className="grid gap-3 sm:grid-cols-2">
            {s.includes.map(([t, d], i) => (
              <li key={t} className="rounded-3xl border border-ink/15 bg-cream p-5">
                <span className="font-mono text-xs text-ink/50">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-base">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink/75">{d}</p>
              </li>
            ))}
          </ol>
        </DetailBlock>

        <DetailBlock id="get-h" tone="dark" title={s.getTitle} lead={s.getLead} intro={s.getIntro}>
          <ul className={hasDesc ? 'grid gap-3 sm:grid-cols-2' : 'flex flex-wrap gap-3'}>
            {s.get.map(([t, d]) => (
              <li key={t} className={hasDesc ? 'rounded-3xl border border-cream/15 bg-white/5 p-5' : 'flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink'}>
                {hasDesc ? (<><FiCheck className="mb-2 text-lg text-accent" aria-hidden /><h3 className="text-base">{t}</h3>{d && <p className="mt-1.5 text-[15px] leading-relaxed text-cream/75">{d}</p>}</>) : (<><FiCheck aria-hidden />{t}</>)}
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock id="who-h" title={WHO_TITLES[s.slug]}>
          <p className="font-display text-lg font-bold sm:text-xl">{s.who.intro}</p>
          {s.who.items.length > 0 && (
            <ul className="mt-5 grid gap-2.5">
              {s.who.items.map((i) => <li key={i} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-cream-sand px-4 py-3 text-[15px] text-ink/85"><FiCheck className="mt-0.5 shrink-0" aria-hidden />{i}</li>)}
            </ul>
          )}
        </DetailBlock>

        <FAQSection items={s.faqs} />
        <FinalCTA title={s.cta.h} text={s.cta.p} button={s.cta.btn} />
      </main>
    </>
  );
}