import { FaMicrosoft, FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiBarChart2, FiCalendar, FiCreditCard, FiEdit3, FiMessageCircle, FiMessageSquare, FiPhoneCall, FiSearch, FiSend, FiShare2, FiUsers } from 'react-icons/fi';
import { SiAirtable, SiClaude, SiMake, SiN8N, SiNotion, SiPython, SiZapier } from 'react-icons/si';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { faqLd, Seo, siteNodes } from '../components/Seo';
import ServicesSection from '../components/Services';
import { Badge, Button, Container, Dot, Section, SectionHeading, TextLink } from '../components/ui';
import { caseStudies, CTA_LABEL, help, homeCta, homeFaqs, intro, problem, process, toolsSection as T, why, whyTitle } from '../data';

/* Introduction = hero.
   The customer meets the four everyday scenarios first (bordered cards, no icons, all left-aligned),
   then the answer arrives in a warm-stone panel: the "process problems" line, the body text and the buttons. */
function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden text-cream">
      <HeroBackground />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <h1 id="hero-h" className="mb-8 font-display text-base font-extrabold tracking-[0.12em] text-sand sm:mb-10 sm:text-lg lg:text-xl">
          AI AUTOMATION &amp; BUSINESS SYSTEMS SPECIALIST
        </h1>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <ul className="space-y-3" role="list">
            {intro.scenarios.map((t) => (
              <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5">
                <p className="text-[15px] leading-snug text-cream/90 sm:text-base">{t}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-sand p-7 text-ink shadow-2xl shadow-ink/40 sm:p-9">
            <h2 className="font-sans text-xl font-semibold leading-snug tracking-normal sm:text-2xl">{intro.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80 sm:text-base">{intro.body}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button>{CTA_LABEL}</Button>
              <Button to="/#services" variant="secondary">Explore Services</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Left: one customer's journey (a real sequence, so it is numbered). Right: the team's week. Then the closing line. */
function Problem() {
  return (
    <section aria-labelledby="problem-h" className="bg-cream py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="problem-h" className="text-2xl leading-tight sm:text-3xl lg:text-4xl">{problem.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/75 sm:text-base">{problem.text}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-ink p-6 text-cream sm:p-8">
            <h3 className="text-xl sm:text-2xl">{problem.journeyTitle}</h3>
            <ol className="relative mt-6 space-y-5">
              <span className="absolute bottom-3 left-[15px] top-3 w-px bg-cream/20" aria-hidden />
              {problem.journey.map(([label, text], i) => (
                <li key={label} className="relative flex gap-4">
                  <span className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand font-mono text-xs font-medium text-ink">{i + 1}</span>
                  <p className="pt-0.5 text-[15px] leading-relaxed text-cream/80"><span className="font-display font-bold text-cream">{label}: </span>{text}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-ink/10 bg-sand/45 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl">{problem.weekTitle}</h3>
            <ul className="mt-6 space-y-3" role="list">
              {problem.week.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-3.5 text-[15px] leading-snug">
                  <Dot className="mt-2 text-ink" />{w}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-sand/45 px-6 py-7 text-center sm:px-10">
          <p className="font-display text-xl font-extrabold leading-snug sm:text-2xl">{problem.closingLead}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75 sm:text-base">{problem.closingRest}</p>
        </div>
      </Container>
    </section>
  );
}

const icons = [
  [FiMessageCircle, FiSend, FiCalendar, FiCreditCard],
  [FiEdit3, FiShare2, FiBarChart2, FiSearch],
];

/* Replaces the old "Make the Processes Behind Your Business…" section. Customers on navy, the team on warm stone. */
function Help() {
  return (
    <Section tone="sand" labelledBy="help-h">
      <SectionHeading id="help-h" eyebrow={help.eyebrow} title={help.title}>{help.text}</SectionHeading>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {help.groups.map((g, gi) => {
          const dark = gi === 0;
          return (
            <article key={g.title} className={`rounded-3xl p-6 sm:p-8 ${dark ? 'bg-ink text-cream' : 'border border-ink/10 bg-sand/60 text-ink'}`}>
              <h3 className="text-xl sm:text-2xl">{g.title}</h3>
              <ul className="mt-6 space-y-5" role="list">
                {g.items.map(([t, d], i) => {
                  const I = icons[gi][i];
                  return (
                    <li key={t} className="flex gap-4">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg ${dark ? 'bg-sand text-ink' : 'bg-ink text-sand'}`}><I aria-hidden /></span>
                      <div>
                        <h4 className="font-display text-base font-bold">{t}</h4>
                        <p className={`mt-1 text-[15px] leading-relaxed ${dark ? 'text-cream/75' : 'text-ink/75'}`}>{d}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* Home teaser: the four case studies, each linking to its full write-up. */
function CaseStudyPreview() {
  return (
    <Section tone="dark" labelledBy="cases-h">
      <SectionHeading id="cases-h" dark eyebrow="Case studies" title="Proof in production" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Link key={c.slug} to={`/case-studies#${c.slug}`} className="group flex h-full flex-col rounded-3xl border border-white/10 bg-ink-soft p-6 transition hover:-translate-y-1 hover:border-sand/60 sm:p-7">
            <Badge className="self-start">{c.service}</Badge>
            <h3 className="mt-4 text-xl">{c.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-cream/70">{c.blocks[0].p}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-sand">
              Read the case study <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8"><TextLink dark to="/case-studies">See all case studies</TextLink></div>
    </Section>
  );
}

/* Heading sticks on the left while the four steps scroll past on the right. Step 1 and 2 carry their lists inside a stone panel. */
function Process() {
  return (
    <Section id="process" labelledBy="process-h">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="process-h" eyebrow={process.eyebrow} title={process.title}>{process.text}</SectionHeading>
        </div>
        <ol className="relative space-y-5">
          {process.steps.map((st, i) => (
            <li key={st.title} className="rounded-3xl border border-ink/15 bg-cream p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink font-mono text-sm text-cream">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="pt-1.5 text-lg sm:text-xl">{st.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{st.text}</p>

                  {st.columns && (
                    <div className="mt-5 grid gap-4 rounded-2xl bg-sand/45 p-4 sm:grid-cols-2 sm:p-5">
                      {st.columns.map(([h, list]) => (
                        <div key={h}>
                          <h4 className="font-display text-sm font-bold">{h}</h4>
                          <ul className="mt-2.5 space-y-2" role="list">
                            {list.map((x) => <li key={x} className="flex items-start gap-2.5 text-sm leading-snug text-ink/85"><Dot className="mt-1.5 text-ink" />{x}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {st.notes && (
                    <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
                      {st.notes.map(([k, v]) => <p key={k}><span className="font-display font-bold">{k}:</span> <span className="text-ink/75">{v}</span></p>)}
                    </div>
                  )}

                  {st.examples && (
                    <div className="mt-5 rounded-2xl bg-sand/45 p-4 sm:p-5">
                      <h4 className="font-display text-sm font-bold">{st.exampleLabel}</h4>
                      <ul className="mt-2.5 space-y-2.5" role="list">
                        {st.examples.map((x) => <li key={x} className="flex items-start gap-2.5 text-[15px] leading-snug text-ink/85"><Dot className="mt-2 text-ink" />{x}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

// [icon, brand colour]. Every tool keeps its own brand colour so the section is colourful.
// Twilio, Vapi and GoHighLevel have no logo in react-icons, so they get a generic icon in a brand-style colour; swap in the real logo files if available.
// (Vapi's own brand colour is a mint green, so it is shown in navy to keep the site to the client palette.)
const meta = {
  Zapier: [SiZapier, '#FF4F00'],
  Make: [SiMake, '#6D00CC'],
  n8n: [SiN8N, '#EA4B71'],
  'Microsoft Power Automate': [FaMicrosoft, '#0078D4'],
  Airtable: [SiAirtable, '#18BFFF'],
  Notion: [SiNotion, '#1F1F1F'],
  GoHighLevel: [FiUsers, '#2563EB'],
  'Claude (Anthropic)': [SiClaude, '#D97757'],
  'Twilio (SMS)': [FiMessageSquare, '#F22F46'],
  'Vapi (voice)': [FiPhoneCall, '#0F172A'],
  WhatsApp: [FaWhatsapp, '#25D366'],
  Python: [SiPython, '#3776AB'],
};

const Tile = ({ name }) => {
  const [I, c] = meta[name];
  return (
    <li className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream p-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{ borderLeft: `4px solid ${c}` }}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-2xl text-white" style={{ backgroundColor: c }}><I aria-hidden /></span>
      <span className="text-sm font-medium leading-tight">{name}</span>
    </li>
  );
};

function Tools() {
  return (
    <Section tone="sand" labelledBy="tools-h">
      <SectionHeading id="tools-h" eyebrow={T.title} title={T.heading}>{T.text}</SectionHeading>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {T.groups.map((g) => (
          <article key={g.title} className="flex flex-col rounded-3xl border border-ink/10 bg-cream p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl">{g.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate first-letter:uppercase">{g.tagline}</p>
            {g.text && <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{g.text}</p>}
            <ul className="mt-5 grid gap-3 sm:grid-cols-2" role="list">{g.tools.map((t) => <Tile key={t} name={t} />)}</ul>
            <div className="mt-auto pt-5">
              <p className="rounded-2xl bg-sand/45 px-4 py-3 text-sm leading-relaxed text-ink/85">
                <span className="font-display font-bold">Used for:</span> {g.usedFor}
              </p>
            </div>
          </article>
        ))}
      </div>

      <article className="mt-5 rounded-3xl bg-ink p-6 text-cream sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div>
            <h3 className="text-xl sm:text-2xl">{T.existing.title}</h3>
            <p className="mt-1 text-sm font-medium text-sand first-letter:uppercase">{T.existing.tagline}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-cream/75">{T.existing.text}</p>
          </div>
          <ul className="flex flex-wrap gap-2.5" role="list">
            {T.existing.tools.map((t) => <li key={t} className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-ink">{t}</li>)}
          </ul>
        </div>
      </article>
    </Section>
  );
}

function Why() {
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

export default function Home() {
  return (
    <>
      <Seo path="/" title="AI Automation & Business Systems Specialist | Rose Njeru"
        description="Rose Njeru helps service businesses make operations easier to run with AI automation, business process automation, connected systems and AI agents."
        jsonLd={[...siteNodes, faqLd(homeFaqs)]} />
      <main>
        <Hero /><Problem /><Help /><ServicesSection /><CaseStudyPreview /><Process /><Tools /><Why />
        <FAQSection items={homeFaqs} tone="sand" />
        <FinalCTA title={homeCta.h} text={homeCta.p} />
      </main>
    </>
  );
}