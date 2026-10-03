import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Section, SectionHeading } from '../../components/ui';
import { services } from '../../data';

export default function RelatedServices({ current }) {
  return (
    <Section tone="sand" labelledBy="rel-h">
      <SectionHeading id="rel-h" title="Related Services" />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.filter((s) => s.slug !== current).map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-3xl border border-ink/15 bg-cream p-6 transition hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-cream">
            <span className="font-mono text-xs text-ink/55 group-hover:text-accent">Service {s.no}</span>
            <h3 className="mt-3 text-lg">{s.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75 group-hover:text-cream/80">{s.short}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Explore {s.name} <FiArrowRight aria-hidden className="text-accent transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </Section>
  );
}