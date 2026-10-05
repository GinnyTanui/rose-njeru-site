import { FiMessageSquare, FiPhoneCall, FiUsers } from 'react-icons/fi';
import { FaMicrosoft, FaWhatsapp } from 'react-icons/fa';
import { SiAirtable, SiClaude, SiMake, SiN8N, SiNotion, SiPython, SiZapier } from 'react-icons/si';
import { Section, SectionHeading } from '../../components/ui';
import { toolsSection as T } from '../../content';

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

export default function Tools() {
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