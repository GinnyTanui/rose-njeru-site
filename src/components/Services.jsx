import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { Section, SectionHeading, TextLink } from './ui';

/* Rounded cards: number, name, short description, one button. Whole card is the link; fills navy on hover. */
export const ServiceCards = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((s) => (
      <Link key={s.slug} to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-3xl border border-ink/15 bg-cream p-5 transition duration-300 xl:p-6 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-cream hover:shadow-xl hover:shadow-ink/20">
        <span className="font-mono text-xs text-ink/55 transition group-hover:text-accent">Service {s.no}</span>
        <h3 className="mt-6 text-xl">{s.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/75 transition group-hover:text-cream/80">{s.short}</p>
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/25 px-3.5 py-2 text-[13px] font-semibold xl:px-4 xl:text-sm transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            Explore<span className="xl:hidden"> </span><span className="hidden sm:max-lg:inline xl:inline">this service</span> <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    ))}
  </div>
);

export default function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-h">
      <SectionHeading id="services-h" eyebrow="Our services" title="What Your Business Needs to Run Better">
        Not every business needs more software. Sometimes you need a clearer process. Sometimes your existing tools need to work together. Sometimes a repetitive task can be automated. And sometimes AI can handle a specific job.
      </SectionHeading>
      <div className="mt-10"><ServiceCards /></div>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        <TextLink to="/services">See all services</TextLink>
        <TextLink to="/pricing">View pricing packages</TextLink>
      </div>
    </Section>
  );
}