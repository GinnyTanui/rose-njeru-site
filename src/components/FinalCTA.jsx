import { FiCheck } from 'react-icons/fi';
import { CTA_LABEL, SITE } from '../data';
import { Button, Container } from './ui';
import { HeroBackground } from './HeroBackground';

/* Closing call-to-action: same electric-blue world as the hero. `text` can be a string or an array of paragraphs. */
export default function FinalCTA({ title, text, line, variant = 'network', assurances, emailNote = false }) {
  const paras = Array.isArray(text) ? text : [text];
  return (
    <section aria-labelledby="cta-h" className="relative overflow-hidden bg-brand text-white">
      <HeroBackground variant={variant} decorative />
      <Container className="relative py-16 text-center sm:py-20">
        <h2 id="cta-h" className="mx-auto max-w-3xl">{title}</h2>
        <div className="mx-auto mt-4 max-w-2xl space-y-3 text-body text-white/90">
          {paras.map((p) => <p key={p}>{p}</p>)}
        </div>
        {line && <p className="mt-4 font-display text-h3 font-bold text-white">{line}</p>}
        <div className="mt-8"><Button dark>{CTA_LABEL}</Button></div>
        {assurances && (
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-small text-white" role="list">
            {assurances.map((x) => (
              <li key={x} className="flex items-center gap-2"><FiCheck className="shrink-0 text-mint" aria-hidden />{x}</li>
            ))}
          </ul>
        )}
        {emailNote && (
          <p className="mt-5 text-small text-white/90">
            Can&apos;t find a suitable time? Email us at <a href={`mailto:${SITE.email}`} className="font-semibold underline underline-offset-4">{SITE.email}</a>
          </p>
        )}
      </Container>
    </section>
  );
}