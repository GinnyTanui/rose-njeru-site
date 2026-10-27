import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { Section, SectionHeading, TextLink } from './ui';

/* Five rounded cards (3 + 2 on desktop). Number, name, one line, one button. The whole card is the link; it fills blue on hover. */
export const ServiceCards = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
    {services.map((s, i) => (
      <Link key={s.slug} to={`/services/${s.slug}`}
        className={`group flex h-full flex-col rounded-3xl border border-brand/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-xl hover:shadow-brand/25 lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}>
        <span className="text-small font-bold text-brand transition group-hover:text-white/80">{s.no}</span>
        <h3 className="mt-5">{s.name}</h3>
        <p className="mt-2 text-small text-muted transition group-hover:text-white/90">{s.short}</p>
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-4 py-2 text-small font-semibold text-brand transition group-hover:border-white group-hover:bg-white">
            Explore this service <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    ))}
  </div>
);

export default function ServicesSection() {
  return (
    <Section id="services" tone="white" labelledBy="services-h">
      <SectionHeading id="services-h" eyebrow="OUR SERVICES" title="AI Automation & Systems Solutions">
        Practical solutions for improving processes, connecting existing systems, automating repetitive activities and applying AI where it makes sense. Each solution is shaped around the processes, tools and needs involved.
      </SectionHeading>
      <div className="mt-10"><ServiceCards /></div>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        <TextLink to="/services">See all services</TextLink>
        <TextLink to="/pricing">View pricing packages</TextLink>
      </div>
    </Section>
  );
}