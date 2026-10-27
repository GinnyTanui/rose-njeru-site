import { FiAlertTriangle, FiArrowRight, FiBarChart2, FiBell, FiBookOpen, FiCalendar, FiCheck, FiCheckCircle, FiClipboard, FiClock, FiCode, FiCreditCard, FiDatabase, FiFileText, FiFilter, FiFlag, FiGitBranch, FiInbox, FiMail, FiMap, FiMessageSquare, FiMic, FiPhoneCall, FiPhoneMissed, FiRefreshCw, FiRepeat, FiSearch, FiStar, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import FAQSection, { RichText } from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import { breadcrumbLd, faqLd, providerRef, Seo } from '../components/Seo';
import { Badge, Button, Container, Dot, Section, SectionHeading, TextLink } from '../components/ui';
import { caseStudies, services, SITE } from '../data';
import NotFound from './NotFound';

/* Hero: the artwork spreads behind the left-aligned text. Each service has its own illustration. */
function ServiceHero({ s }) {
  return (
    <section aria-labelledby="svc-h" className="relative overflow-hidden bg-brand text-white">
      <HeroBackground variant={s.hero} density={0.4} priority />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <Badge className="!bg-white/15 !text-white">Service {s.no}</Badge>
          <h1 id="svc-h" className="mt-4">{s.h1}</h1>
          <p className="mt-4 max-w-xl text-lead text-white/90">{s.lede}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button dark>{s.cta[0]}</Button>
            <Button dark variant="secondary" to="/pricing" arrow={false}>{s.cta[1]}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

const Rich = ({ children }) => <RichText text={children} />;

/* Icon for each card, picked from its title. First match wins, so the specific patterns come first. */
const ICONS = [
  [/missed-call/i, FiPhoneMissed], [/phone and sms|voice|contact rate/i, FiPhoneCall],
  [/api|webhook/i, FiCode], [/cost per|invoic|payment/i, FiCreditCard], [/quote|estimate/i, FiFileText],
  [/booking|schedul|appointment|calendar/i, FiCalendar], [/lead form|inquir(y|ies) handling|instant lead|inquiry agent|response time|lead response/i, FiInbox],
  [/communicat|status update|customer inquiry/i, FiMessageSquare], [/handoff|task|assign|human/i, FiUsers],
  [/bottleneck|root cause/i, FiAlertTriangle], [/process map/i, FiMap], [/future process/i, FiGitBranch],
  [/roadmap/i, FiFlag], [/action plan|qualification|routing|qualif/i, FiFilter], [/cost|impact|pipeline|saved|conversion/i, FiTrendingUp],
  [/baseline|metric|rate|quality|measure/i, FiBarChart2], [/review/i, FiStar], [/reactivation/i, FiRefreshCw],
  [/follow-up|sequence/i, FiRepeat], [/sop/i, FiBookOpen], [/document and inbox|inbox/i, FiMail], [/receptionist/i, FiClock],
  [/report|admin/i, FiClipboard], [/reminder/i, FiBell], [/tools and data|crm|records|database/i, FiDatabase],
  [/covers|search/i, FiSearch], [/handled|completion/i, FiCheckCircle],
];
const iconFor = (title) => (ICONS.find(([re]) => re.test(title)) || [null, FiTarget])[1];

/* Each section type has its own layout; backgrounds alternate paper / white, with blue for callouts. */
function Block({ b, tone }) {
  const head = <h2 className="max-w-3xl">{b.title}</h2>;
  const intro = b.intro && <p className="mt-3 max-w-2xl text-body text-muted">{b.intro}</p>;
  const dark = tone === 'blue';

  if (b.type === 'intro') {
    return (
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>{head}<div className="mt-5 space-y-4 text-body text-muted">{b.paras.map((p) => <p key={p}>{p}</p>)}</div></div>
        {b.list && (
          <aside className="self-start rounded-2xl border border-brand/15 bg-white p-6">
            <h3>{b.list.label}</h3>
            <ul className="mt-4 space-y-3">{b.list.items.map((i) => <li key={i} className="flex items-start gap-3 text-small"><Dot className="mt-2 text-brand" />{i}</li>)}</ul>
          </aside>
        )}
        {b.compare && <Compare rows={b.compare} />}
      </div>
    );
  }
  if (b.type === 'compare') {
    return (<>{head}<div className="mt-8"><Compare rows={b.compare} /></div>{b.outro && <p className="mt-6 max-w-3xl text-body text-muted"><Rich>{b.outro}</Rich></p>}</>);
  }
  if (b.type === 'cards') {
    return (
      <>{head}{intro}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {b.items.map(([t, d]) => {
            const Icon = iconFor(t);
            return (
              <article key={t} className="group rounded-2xl border border-brand/15 bg-white p-5 transition hover:border-brand hover:shadow-lg hover:shadow-brand/10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/15 text-xl text-orange-ink transition group-hover:bg-orange group-hover:text-ink"><Icon aria-hidden /></span>
                <h3 className="mt-4">{t}</h3>
                <p className="mt-2 text-small text-muted"><Rich>{d}</Rich></p>
              </article>
            );
          })}
        </div>
        {b.outro && <p className="mt-6 max-w-3xl text-body text-muted">{b.outro}</p>}
      </>
    );
  }
  if (b.type === 'steps') {
    return (
      <>{head}{intro}
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {b.items.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-brand/15 bg-cream p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-small font-bold text-white">{i + 1}</span>
              <h3 className="mt-4">{t}</h3>
              <p className="mt-2 text-small text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </>
    );
  }
  if (b.type === 'links') {
    return (
      <>{head}{intro}
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {b.items.map(([sign, label, to]) => {
            const inner = (<><span className="text-small text-muted">{sign}</span><span className={`mt-1 inline-flex items-center gap-2 font-display font-bold ${to ? 'text-brand' : 'text-ink'}`}>{label}{to && <FiArrowRight aria-hidden />}</span></>);
            return <li key={sign}>{to ? <Link to={to} className="flex h-full flex-col rounded-2xl border border-brand/15 bg-white p-5 transition hover:border-brand hover:shadow-lg hover:shadow-brand/10">{inner}</Link> : <div className="flex h-full flex-col rounded-2xl bg-sand p-5">{inner}</div>}</li>;
          })}
        </ul>
      </>
    );
  }
  if (b.type === 'examples') {
    return (
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>{head}{intro}</div>
        <div>
          <ol className="space-y-3">
            {b.items.map((x, i) => (
              <li key={x} className="flex items-start gap-4 rounded-2xl border border-brand/15 bg-white p-4">
                {b.ordered ? <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-small font-bold text-white">{i + 1}</span> : <Dot className="mt-2.5 text-brand" />}
                <p className="text-small">{x}</p>
              </li>
            ))}
          </ol>
          {b.outro && <p className="mt-5 text-body text-muted"><Rich>{b.outro}</Rich></p>}
        </div>
      </div>
    );
  }
  if (b.type === 'suits') {
    return (
      <>{head}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {b.items.map((x) => <li key={x} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-small"><FiCheck className="mt-0.5 shrink-0 text-brand" aria-hidden />{x}</li>)}
        </ul>
        {b.cta !== false && <div className="mt-8"><Button>Book a Free Consultation</Button></div>}
      </>
    );
  }
  // callout (blue band) and prose
  return (
    <div className="max-w-3xl">
      <h2>{b.title}</h2>
      <div className={`mt-5 space-y-4 text-body ${dark ? 'text-white/90' : 'text-muted'}`}>{b.paras.map((p) => <p key={p}>{p}</p>)}</div>
      {b.list && (
        <div className="mt-6 rounded-2xl bg-white/10 p-5 sm:p-6">
          <h3 className="text-white">{b.list.label}</h3>
          <ul className="mt-4 space-y-3">{b.list.items.map((i) => <li key={i} className="flex items-start gap-3 text-small text-white/90"><FiCheck className="mt-0.5 shrink-0 text-mint" aria-hidden />{i}</li>)}</ul>
        </div>
      )}
      {b.after && <div className={`mt-6 space-y-4 text-body ${dark ? 'text-white/90' : 'text-muted'}`}>{b.after.map((p) => <p key={p}>{p}</p>)}</div>}
    </div>
  );
}

/* Two-column "before / after" lists. */
function Compare({ rows }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {rows.map((r) => (
        <div key={r.label} className={`rounded-2xl p-6 ${r.good ? 'bg-brand text-white' : 'border border-brand/15 bg-white'}`}>
          <h3>{r.label}</h3>
          <ul className="mt-4 space-y-2.5">{r.items.map((i) => <li key={i} className="flex items-start gap-3 text-small"><Dot className={`mt-2 ${r.good ? 'text-mint' : 'text-orange'}`} />{i}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

/* "Proof in production": links each service to its case study. */
function ProofInProduction({ s }) {
  const c = caseStudies.find((x) => x.service === s.slug);
  if (!c) return null;
  return (
    <Section tone="ink" labelledBy="proof-h">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading id="proof-h" ink eyebrow="CASE STUDY" title="Proof in production">{`See how ${s.name} worked in a real scenario, then read the full case study.`}</SectionHeading>
          <div className="mt-7"><Button dark to={`/case-studies#${c.slug}`}>Read the case study</Button></div>
        </div>
        <article className="rounded-2xl bg-white p-6 text-ink sm:p-8">
          <Badge>{c.label}</Badge>
          <h3 className="mt-4">{c.challengeTitle}</h3>
          <p className="mt-3 line-clamp-4 text-small text-muted">{c.challenge[0]}</p>
          <div className="mt-5 border-t border-ink/10 pt-4">
            <p className="font-display text-small font-bold">What I&apos;d measure</p>
            <ul className="mt-3 flex flex-wrap gap-2" role="list">{c.measure.slice(0, 4).map((m) => <li key={m} className="rounded-full bg-cream px-3.5 py-1.5 text-xs">{m}</li>)}</ul>
          </div>
        </article>
      </div>
    </Section>
  );
}

function RelatedServices({ s }) {
  const rel = s.related.map((slug) => services.find((x) => x.slug === slug)).filter(Boolean);
  if (!rel.length) return null;
  return (
    <Section tone="white" labelledBy="rel-h">
      <SectionHeading id="rel-h" title="Related Services" />
      <div className={`mt-8 grid gap-4 md:grid-cols-2 ${rel.length > 2 ? 'lg:grid-cols-4' : ''}`}>
        {rel.map((r) => (
          <Link key={r.slug} to={`/services/${r.slug}`} className="group rounded-2xl border border-brand/15 bg-cream p-6 transition hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white">
            <span className="text-small font-bold text-orange-ink group-hover:text-white/80">{r.no}</span>
            <h3 className="mt-2">{r.name}</h3>
            <p className="mt-2 text-small text-muted group-hover:text-white/90">{r.short}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-small font-semibold text-brand group-hover:text-white">Explore <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" /></span>
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
  let n = 0; // alternates paper / white; callouts are always blue
  return (
    <>
      <Seo path={path} title={s.title} description={s.meta}
        jsonLd={[
          { '@type': 'Service', name: s.name, description: s.meta, url: SITE.url + path, provider: providerRef },
          faqLd(s.faqs),
          breadcrumbLd([['Home', '/'], ['Services', '/services'], [s.name, path]]),
        ]} />
      <main>
        <ServiceHero s={s} />
        {s.sections.map((b, i) => {
          const tone = b.type === 'callout' ? 'blue' : (n++ % 2 === 0 ? 'light' : 'white');
          return <Section key={b.title} tone={tone} labelledBy={`s${i}`} className="[&_h2]:scroll-mt-24"><div id={`s${i}`}><Block b={b} tone={tone} /></div></Section>;
        })}
        <ProofInProduction s={s} />
        <FAQSection items={s.faqs} tone="light" />
        <RelatedServices s={s} />
        <FinalCTA title={s.ctaBlock.h} text={s.ctaBlock.p} variant={s.hero} />
      </main>
    </>
  );
}