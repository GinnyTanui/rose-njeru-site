import { FiUsers } from 'react-icons/fi';
import { FaMicrosoft } from 'react-icons/fa';
import { SiAirtable, SiMake, SiN8N, SiNotion, SiPython, SiZapier } from 'react-icons/si';
import { Section, SectionHeading } from '../../components/ui';
import { tools } from '../../data';

// [icon, brand colour]. GoHighLevel has no logo in react-icons, so it gets a generic CRM icon; swap in her real asset if available.
const meta = {
  Zapier: [SiZapier, '#FF4F00'], Make: [SiMake, '#6D00CC'], n8n: [SiN8N, '#EA4B71'],
  'Microsoft Power Automate': [FaMicrosoft, '#0078D4'], Airtable: [SiAirtable, '#18BFFF'], Notion: [SiNotion, '#1F1F1F'],
  GoHighLevel: [FiUsers, '#F59E0B'], Python: [SiPython, '#3776AB'],
};

export default function Tools() {
  return (
    <Section tone="sand" labelledBy="tools-h">
      <SectionHeading id="tools-h" title="Tools We Use to Build Your Systems">
        We work with a range of automation, workflow, data, and business platforms to build systems around the way your business operates.
      </SectionHeading>
      <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1.1fr_0.7fr]">
        {tools.map(([g, list]) => (
          <div key={g} className="rounded-3xl border border-ink/15 bg-cream p-5 sm:p-6">
            <h3 className="mb-4 text-base">{g}</h3>
            <ul className="grid grid-cols-2 gap-3">
              {list.map((t) => {
                const [I, c] = meta[t];
                return (
                  <li key={t} className="flex flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-white/60 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="grid h-11 w-11 place-items-center rounded-xl text-2xl" style={{ color: c, backgroundColor: `${c}1F` }}><I aria-hidden /></span>
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
}