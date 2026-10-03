import { FiBriefcase, FiCalendar, FiCheck, FiCpu, FiDatabase, FiFileText, FiLayers, FiMail, FiMessageCircle, FiSliders, FiUser, FiUsers, FiZap, FiCreditCard, FiBook, FiShield, FiUserCheck, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/* ---------- shared primitives (one visual language for every graphic) ---------- */
export const Panel = ({ label, caption, children, className = '' }) => (
  <figure aria-label={caption} className={`relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-4 shadow-2xl shadow-ink/30 sm:p-5 ${className}`}>
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden />
    <p className="relative mb-3 font-mono text-[11px] tracking-wide text-cream/60">{label}</p>
    <div className="relative">{children}</div>
    <figcaption className="sr-only">{caption}</figcaption>
  </figure>
);

const Node = ({ icon: Icon, accent, children, className = '' }) => (
  <div className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium ${accent ? 'border-accent bg-accent text-ink' : 'border-white/15 bg-white/5 text-cream'} ${className}`}>
    {Icon && <Icon className="shrink-0" aria-hidden />}
    {children}
  </div>
);

const Down = ({ h = 'h-5' }) => (
  <div className={`relative mx-auto w-px bg-white/20 ${h}`} aria-hidden>
    <span className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-flow rounded-full bg-accent" />
  </div>
);

/* ---------- homepage hero: enquiry -> AI agent -> actions -> tools ---------- */
export const HeroVisual = () => (
  <div className="relative mx-auto w-full max-w-md animate-float">
    <Panel label="enquiry-to-booking workflow" caption="Diagram of an automated workflow: a customer enquiry is handled by an AI agent that qualifies, books and follows up, then updates the CRM, calendar, email and WhatsApp.">
      <div className="flex flex-col items-center">
        <Node icon={FiMessageCircle} className="w-full">Customer enquiry</Node>
        <Down />
        <Node icon={FiCpu} accent className="w-full">AI agent</Node>
        <Down />
        <div className="flex flex-wrap justify-center gap-2">
          {['Qualify', 'Book', 'Follow up'].map((t) => (
            <span key={t} className="rounded-full border border-accent/50 px-3 py-1 font-mono text-xs text-accent">{t}</span>
          ))}
        </div>
        <Down />
        <div className="grid w-full grid-cols-2 gap-2">
          <Node icon={FiUsers}>CRM</Node><Node icon={FiCalendar}>Calendar</Node>
          <Node icon={FiMail}>Email</Node><Node icon={FaWhatsapp}>WhatsApp</Node>
        </div>
        <div className="mt-5 flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm">
          <span className="text-cream/70">Outcome</span>
          <span className="flex items-center gap-2 font-semibold text-cream"><FiCheck className="text-accent" aria-hidden /> Lead booked, less manual steps</span>
        </div>
      </div>
    </Panel>
    <div className="absolute -right-3 -top-4 hidden rounded-2xl border border-white/10 bg-cream px-4 py-3 text-ink shadow-xl sm:block">
      <p className="font-mono text-[11px] text-ink/60">Reply sent</p>
      <p className="font-display text-lg font-extrabold">12 seconds</p>
    </div>
  </div>
);

/* ---------- 01 Business Audit ---------- */
const AuditVisual = () => (
  <Panel label="business operations assessment" caption="Diagram of a business operations assessment: the business is reviewed across operations, tools and customer journey, gaps become opportunities to automate, replace or improve, and the result is a 90-day action plan.">
    <div className="flex flex-col items-center">
      <Node icon={FiBriefcase} accent>Business</Node>
      <Down />
      <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
        {[['Operations', ['Processes', 'Bottlenecks', 'Manual work']], ['Tools', ['Software overlap', 'Gaps']], ['Customer', ['Journey drop-offs', 'Missed leads']]].map(([h, l]) => (
          <div key={h}>
            <div className="rounded-xl bg-white/10 py-2 text-center text-xs font-semibold text-cream sm:text-sm">{h}</div>
            <ul className="mt-2 space-y-1.5">
              {l.map((i) => <li key={i} className="rounded-lg border border-white/10 px-2 py-1.5 text-center text-[11px] text-cream/70 sm:text-xs">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <Down />
      <p className="mb-2 font-mono text-[11px] text-cream/60">Opportunity areas</p>
      <div className="flex flex-wrap justify-center gap-2">
        {['Automate', 'Replace', 'Improve'].map((t) => <Node key={t}><span className="h-2 w-2 rounded-full bg-accent" />{t}</Node>)}
      </div>
      <Down />
      <Node icon={FiFileText} accent>90-day action plan</Node>
    </div>
  </Panel>
);

/* ---------- 02 Operations Automation ---------- */
const WorkflowVisual = () => {
  const steps = [['Customer request'], ['Information captured', 1], ['Job created', 1], ['Team assigned', 1], ['Scheduled', 1], ['Work completed'], ['Customer updated', 1], ['Done']];
  return (
    <Panel label="operations workflow" caption="Workflow diagram: customer request, information captured, job created, team assigned, scheduled, work completed, customer updated, done, with the automated steps marked.">
      <ol className="relative space-y-1.5">
        <span className="absolute bottom-4 left-[15px] top-4 w-px bg-white/20" aria-hidden />
        {steps.map(([t, auto], i) => (
          <li key={t} className="relative flex items-center gap-3">
            <span className={`z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border font-mono text-xs ${i === steps.length - 1 ? 'border-accent bg-accent text-ink' : 'border-white/20 bg-ink text-cream'}`}>
              {i === steps.length - 1 ? <FiCheck aria-hidden /> : i + 1}
            </span>
            <span className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-cream">{t}</span>
            {auto ? <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2 py-1 font-mono text-[10px] text-accent"><FiZap aria-hidden />auto</span> : <span className="w-12" />}
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-2 text-xs text-cream/60"><FiZap className="text-accent" aria-hidden /> Automated steps · people stay in the loop where judgment is needed</p>
    </Panel>
  );
};

/* ---------- 03 Integration Build ---------- */
const IntegrationVisual = () => (
  <Panel label="integration architecture" caption="Integration diagram: CRM, bookings and forms connect through an integration layer to payments, email and accounting, so tools stay in sync.">
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
      <div className="space-y-2">
        <Node icon={FiUsers}>CRM</Node><Node icon={FiCalendar}>Bookings</Node><Node icon={FiSend}>Forms</Node>
      </div>
      <div className="relative flex h-full min-h-[11rem] w-20 flex-col items-center justify-center rounded-2xl border border-accent bg-accent/10 p-2 text-center sm:w-28">
        <FiLayers className="mb-2 text-xl text-accent" aria-hidden />
        <span className="font-display text-xs font-extrabold leading-tight text-cream sm:text-sm">Integration layer</span>
        <span className="absolute -left-3 top-1/2 h-px w-3 bg-accent sm:-left-4 sm:w-4" aria-hidden />
        <span className="absolute -right-3 top-1/2 h-px w-3 bg-accent sm:-right-4 sm:w-4" aria-hidden />
      </div>
      <div className="space-y-2">
        <Node icon={FiCreditCard}>Payments</Node><Node icon={FiMail}>Email</Node><Node icon={FiDatabase}>Accounting</Node>
      </div>
    </div>
    <div className="mt-6 rounded-xl bg-white/5 px-4 py-3 text-center text-sm font-medium text-cream">
      Connected tools. Less copying. Fewer errors.
    </div>
  </Panel>
);

/* ---------- 04 AI Agents ---------- */
const AgentVisual = () => (
  <Panel label="ai agent interaction" caption="Diagram of an AI agent: a customer message reaches an agent that uses knowledge, tools and rules, then either resolves the request or hands over to a person.">
    <div className="flex flex-col items-center">
      <Node icon={FiUser}>Customer</Node>
      <Down />
      <div className="w-full rounded-2xl border border-accent bg-accent/10 p-4 text-center">
        <p className="flex items-center justify-center gap-2 font-display text-lg font-extrabold text-cream"><FiCpu className="text-accent" aria-hidden />AI agent</p>
        <p className="mt-1 text-xs text-cream/70">One defined job, built around your business</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[[FiBook, 'Knowledge'], [FiSliders, 'Tools'], [FiShield, 'Rules']].map(([I, t]) => (
            <div key={t} className="flex flex-col items-center gap-1 rounded-lg bg-ink/80 py-2 text-[11px] text-cream sm:text-xs"><I aria-hidden />{t}</div>
          ))}
        </div>
      </div>
      <Down />
      <Node icon={FiMessageCircle} className="w-full">Response</Node>
      <Down />
      <div className="grid w-full grid-cols-2 gap-2">
        <Node icon={FiCheck} accent>Resolved</Node>
        <Node icon={FiUserCheck}>Human handoff</Node>
      </div>
    </div>
  </Panel>
);

export const VISUALS = { audit: AuditVisual, workflow: WorkflowVisual, integration: IntegrationVisual, agent: AgentVisual };
export const ServiceVisual = ({ type }) => {
  const V = VISUALS[type];
  return <V />;
};