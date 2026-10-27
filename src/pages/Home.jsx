import { FaMicrosoft, FaWhatsapp } from 'react-icons/fa';
import { FiAlertCircle, FiArrowRight, FiBarChart2, FiCpu, FiLayers, FiLink, FiMessageSquare, FiPhoneCall, FiRepeat, FiSearch, FiShare2, FiTarget, FiTrendingUp, FiUserCheck, FiUsers, FiZap } from 'react-icons/fi';
import { SiAirtable, SiClaude, SiMake, SiN8N, SiNotion, SiPython, SiZapier } from 'react-icons/si';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { faqLd, Seo, siteNodes } from '../components/Seo';
import ServicesSection from '../components/Services';
import { Badge, Button, Container, Section, SectionHeading, TextLink, highlight } from '../components/ui';
import { caseStudies, casesTitle, categories, difference, homeCta, homeFaqs, homeHero, practical, process, roi, toolsSection as T, why, whyTitle } from '../data';

/* Hero: full electric blue, centred white text, the illustration spreads across the whole hero behind it. */
function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden bg-brand text-white">
      <HeroBackground variant="home" align="center" density={0.5} priority />
      <Container className="relative pb-28 pt-14 text-center sm:pb-32 sm:pt-20 lg:pb-36 lg:pt-24">
        <h1 id="hero-h" className="mx-auto max-w-3xl text-display">{highlight(homeHero.title, 'work smarter', 'blue')}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lead text-white/90">{homeHero.text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button dark>Book A Discovery Call</Button>
          <Button dark variant="secondary" to="/#services" arrow={false}>See Our Services</Button>
        </div>
      </Container>
    </section>
  );
}

/* Three cards that overlap the bottom edge of the hero. */
function Categories() {
  return (
    <section aria-label="What I do" className="relative z-10 bg-cream pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <ul className="-mt-16 grid gap-4 sm:-mt-20 md:grid-cols-3" role="list">
          {categories.map((c) => (
            <li key={c.no}>
              <Link to={c.to} className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-xl shadow-brand/15 ring-1 ring-brand/10 transition hover:-translate-y-1 hover:ring-brand">
                <span className="text-small font-bold text-orange-ink">{c.no}.</span>
                <h2 className="mt-3 text-h3">{c.title}</h2>
                <p className="mt-2 text-small text-muted">{c.text}</p>
                <FiArrowRight aria-hidden className="mt-auto pt-0 text-xl text-orange-strong transition group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* Four short explanations, open layout (a rule on top instead of boxes) so it reads differently from the cards above. */
function Difference() {
  return (
    <Section tone="light" labelledBy="diff-h" className="!pt-0">
      <SectionHeading id="diff-h" eyebrow={difference.eyebrow} title={highlight(difference.title, 'make a difference.')}>{difference.text}</SectionHeading>
      <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {difference.items.map(([label, title, text]) => (
          <article key={label} className="relative border-t-2 border-brand/20 pt-5 before:absolute before:-top-0.5 before:left-0 before:h-0.5 before:w-12 before:bg-orange">
            <p className="text-eyebrow font-semibold text-brand">{label}</p>
            <h3 className="mt-3">{title}</h3>
            <p className="mt-2 text-small text-muted">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* Five rows: what it is, what it does, and a Read More link to the service page. Rows (not cards) so it reads differently from the Services cards above. */
const roiIcons = [FiSearch, FiRepeat, FiLink, FiTrendingUp, FiCpu];
function Roi() {
  return (
    <Section tone="light" labelledBy="roi-h">
      <SectionHeading id="roi-h" title={highlight(roi.title, 'Measurable ROI')}>{roi.text}</SectionHeading>
      <ul className="mt-10 divide-y divide-brand/15 border-y border-brand/15" role="list">
        {roi.items.map(([slug, name, text], i) => {
          const Icon = roiIcons[i];
          return (
            <li key={slug} className="grid gap-4 py-7 lg:grid-cols-[0.8fr_1.6fr_auto] lg:items-center lg:gap-10">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange/15 text-2xl text-orange-ink"><Icon aria-hidden /></span>
                <h3>{name}</h3>
              </div>
              <p className="text-small text-muted">{text}</p>
              <Link to={`/services/${slug}`} aria-label={`Read more about ${name}`} className="group inline-flex items-center gap-2 text-small font-semibold text-orange-ink underline decoration-orange/50 decoration-2 underline-offset-8">
                Read More <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/* Five practical outcomes. Four cards in a 2x2 grid, and the fifth (AI agents) as a full-width blue banner so the grid has a clear ending. */
const practicalIcons = [FiAlertCircle, FiZap, FiShare2, FiUserCheck, FiCpu];
function Practical() {
  const last = practical.items.length - 1;
  return (
    <Section tone="white" labelledBy="practical-h">
      <SectionHeading id="practical-h" title={highlight(practical.title, 'Better Systems')}>{practical.text}</SectionHeading>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {practical.items.map(([slug, title, text], i) => {
          const Icon = practicalIcons[i];
          const featured = i === last;
          return (
            <article key={slug} className={`flex flex-col rounded-2xl p-6 sm:p-8 ${featured ? 'bg-brand text-white md:col-span-2 md:flex-row md:items-center md:gap-8' : 'border border-brand/15 bg-cream'}`}>
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl ${featured ? 'bg-white/15 text-white' : 'bg-orange/15 text-orange-ink'}`}><Icon aria-hidden /></span>
              <div className={featured ? 'mt-5 md:mt-0 md:flex-1' : 'mt-5'}>
                <h3>{title}</h3>
                <p className={`mt-3 text-small ${featured ? 'text-white/90' : 'text-muted'}`}>{text}</p>
              </div>
              <Link to={`/services/${slug}`} aria-label={`Read more: ${title}`}
                className={`group mt-5 inline-flex items-center gap-2 self-start text-small font-semibold underline decoration-2 underline-offset-8 ${featured ? 'text-white decoration-orange md:mt-0 md:shrink-0' : 'mt-auto pt-0 text-orange-ink decoration-orange/50'}`}>
                Read More <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
              </Link>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* Six case studies, each linking to its write-up. */
function CaseStudyPreview() {
  return (
    <Section tone="blue" labelledBy="cases-h">
      <SectionHeading id="cases-h" dark title={highlight(casesTitle, 'Measurable Improvements', 'blue')} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <Link key={c.slug} to={`/case-studies#${c.slug}`} className="group flex h-full flex-col rounded-2xl bg-white p-6 text-ink transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/20">
            <Badge className="self-start">{c.label}</Badge>
            <h3 className="mt-4">{c.challengeTitle}</h3>
            <p className="mt-2 line-clamp-4 text-small text-muted">{c.challenge[0]}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-small font-semibold text-orange-ink">
              Read the case study <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8"><TextLink dark to="/case-studies">See all case studies</TextLink></div>
    </Section>
  );
}

/* Heading stays on the left while the four steps scroll past on the right. */
function Process() {
  return (
    <Section id="process" tone="light" labelledBy="process-h">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="process-h" eyebrow={process.eyebrow} title={highlight(process.title, 'Four Simple Steps')}>{process.text}</SectionHeading>
        </div>
        <ol className="space-y-5">
          {process.steps.map((st) => (
            <li key={st.no} className="rounded-2xl border border-brand/15 bg-white p-6 sm:p-7">
              <p className="text-small font-semibold text-brand"><span className="text-orange-ink">{st.no}</span> — {st.name}</p>
              <h3 className="mt-2 text-h2 !text-[1.375rem] sm:!text-[1.5rem]">{st.title}</h3>
              <div className="mt-3 space-y-3 text-body text-muted">{st.paras.map((p) => <p key={p}>{p}</p>)}</div>
              <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-small font-semibold text-ink">{st.result}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

// [icon, brand colour]. Every tool keeps its own brand colour.
// Twilio, Vapi and GoHighLevel have no logo in react-icons, so they get a generic icon in a brand-style colour; swap in real logo files if available.
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
  'Vapi (voice)': [FiPhoneCall, '#12A594'],
  WhatsApp: [FaWhatsapp, '#25D366'],
  Python: [SiPython, '#3776AB'],
};

const Tile = ({ name }) => {
  const [I, c] = meta[name];
  return (
    <li className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{ borderLeft: `4px solid ${c}` }}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-xl text-white" style={{ backgroundColor: c }}><I aria-hidden /></span>
      <span className="text-small font-medium leading-tight">{name}</span>
    </li>
  );
};

function Tools() {
  return (
    <Section tone="white" labelledBy="tools-h">
      <SectionHeading id="tools-h" title={highlight(T.heading, 'Work Better')}>{T.text}</SectionHeading>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {T.groups.map((g) => (
          <article key={g.title} className="flex flex-col rounded-2xl border border-brand/15 bg-cream p-5 sm:p-6">
            <h3>{g.title}</h3>
            <p className="mt-1 text-small font-semibold text-brand first-letter:uppercase">{g.tagline}</p>
            {g.text && <p className="mt-3 text-small text-muted">{g.text}</p>}
            <ul className="mt-5 grid gap-3 sm:grid-cols-2" role="list">{g.tools.map((t) => <Tile key={t} name={t} />)}</ul>
            <p className="mt-auto rounded-xl bg-white px-4 py-3 text-small text-ink/85 [margin-top:1.25rem]"><span className="font-display font-bold">Used for:</span> {g.usedFor}</p>
          </article>
        ))}
      </div>
      <article className="mt-5 rounded-2xl bg-brand p-6 text-white sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div>
            <h3>{T.existing.title}</h3>
            <p className="mt-1 text-small font-semibold text-white/80 first-letter:uppercase">{T.existing.tagline}</p>
            <p className="mt-3 text-small text-white/90">{T.existing.text}</p>
          </div>
          <ul className="flex flex-wrap gap-2.5" role="list">
            {T.existing.tools.map((t) => <li key={t} className="rounded-full bg-white px-4 py-2 text-small font-medium text-brand">{t}</li>)}
          </ul>
        </div>
      </article>
    </Section>
  );
}

const whyIcons = [FiBarChart2, FiLayers, FiTarget];

/* The deep-blue (#1B38B8) section: it separates the tools and FAQ blocks and gives the orange accent a dark ground to sit on. */
function Why() {
  return (
    <Section tone="ink" labelledBy="why-h">
      <header className="max-w-3xl">
        <h2 id="why-h">{whyTitle}</h2>
      </header>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {why.map(([t, d], i) => {
          const Icon = whyIcons[i];
          return (
            <article key={t} className="flex flex-col rounded-2xl border border-white/25 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-xl text-orange-soft"><Icon aria-hidden /></span>
                <span className="text-small font-bold text-orange-soft">0{i + 1}</span>
              </div>
              <h3 className="mt-5">{t}</h3>
              <p className="mt-3 text-small text-white/80">{d}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Seo path="/" title="AI Automation & Business Systems Specialist | Rose Njeru"
        description="Rose Njeru helps growing businesses simplify everyday operations, reduce repetitive work and connect the tools they already use with AI, automation and connected systems."
        jsonLd={[...siteNodes, faqLd(homeFaqs)]} />
      <main>
        <Hero /><Categories /><Difference /><ServicesSection /><Roi /><CaseStudyPreview /><Practical /><Process /><Tools /><Why />
        <FAQSection items={homeFaqs} tone="white" />
        <FinalCTA title={homeCta.h} text={homeCta.p} variant="workflow" />
      </main>
    </>
  );
}