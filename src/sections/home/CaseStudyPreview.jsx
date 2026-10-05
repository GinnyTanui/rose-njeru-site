import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Badge, Section, SectionHeading, TextLink } from '../../components/ui';
import { caseStudies } from '../../content';

/* Home teaser: the four case studies, each linking to its full write-up. */
export default function CaseStudyPreview() {
  return (
    <Section tone="dark" labelledBy="cases-h">
      <SectionHeading id="cases-h" dark eyebrow="Case studies" title="Proof in production" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Link key={c.slug} to={`/case-studies#${c.slug}`} className="group flex h-full flex-col rounded-3xl border border-white/10 bg-ink-soft p-6 transition hover:-translate-y-1 hover:border-sand/60 sm:p-7">
            <Badge className="self-start">{c.service}</Badge>
            <h3 className="mt-4 text-xl">{c.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-cream/70">{c.blocks[0].p}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-sand">
              Read the case study <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8"><TextLink dark to="/case-studies">See all case studies</TextLink></div>
    </Section>
  );
}