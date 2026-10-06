import { FiBarChart2, FiCalendar, FiCreditCard, FiEdit3, FiMessageCircle, FiSearch, FiSend, FiShare2 } from 'react-icons/fi';
import { Section, SectionHeading } from '../../components/ui';
import { help } from '../../content';

const icons = [
  [FiMessageCircle, FiSend, FiCalendar, FiCreditCard],
  [FiEdit3, FiShare2, FiBarChart2, FiSearch],
];


export default function Help() {
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