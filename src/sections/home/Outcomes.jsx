import { FiLink, FiMessageCircle, FiRepeat, FiTarget } from 'react-icons/fi';
import { Section, SectionHeading, TextLink } from '../../components/ui';
import { outcomes } from '../../data';

const icons = [FiMessageCircle, FiTarget, FiLink, FiRepeat];

export default function Outcomes() {
  return (
    <Section tone="sand" labelledBy="outcomes-h">
      <SectionHeading id="outcomes-h" title="Make the Processes Behind Your Business Run More Smoothly">
        From the first customer enquiry to the work happening behind the scenes, I help you build systems that keep things moving.
      </SectionHeading>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map(([t, d], i) => {
          const I = icons[i];
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
}