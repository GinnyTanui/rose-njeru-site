import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Container, Dot, Eyebrow } from './ui';

/* Inline links in answers are written [text](/path) and become internal links. */
export const RichText = ({ text }) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((p, i) => {
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <Link key={i} to={m[2]} className="font-semibold text-brand underline underline-offset-4">{m[1]}</Link> : <span key={i}>{p}</span>;
  });
};

/* An answer is plain text. A line starting with "● " is shown as a bullet. */
const Answer = ({ text }) => {
  const lines = text.split('\n');
  const bullets = lines.filter((l) => l.startsWith('● '));
  const prose = lines.filter((l) => !l.startsWith('● '));
  return (
    <div className="space-y-2 px-5 pb-5 text-body text-muted">
      {prose.map((p) => <p key={p}><RichText text={p} /></p>)}
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((b) => <li key={b} className="flex items-start gap-3"><Dot className="mt-2.5 text-brand" />{b.slice(2)}</li>)}
        </ul>
      )}
    </div>
  );
};

/* Two independent columns of cards (one on mobile), so opening an answer only pushes down its own column. */
function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  const uid = useId();
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  return (
    <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
      {cols.map((col, c) => (
        <div key={c} className="space-y-3 md:space-y-4">
          {col.map(([q, a], j) => {
            const i = c ? half + j : j;
            const isOpen = open === i;
            return (
              <div key={q} className={`rounded-2xl border bg-white transition ${isOpen ? 'border-brand' : 'border-brand/15'}`}>
                <h3 className="font-sans">
                  <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold leading-snug">
                    {q}
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 bg-brand text-white' : 'bg-sand text-brand'}`}><FiPlus aria-hidden /></span>
                  </button>
                </h3>
                <div id={`${uid}-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden"><Answer text={a} /></div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const FAQSection = ({ items, tone }) => (
  <section id="faqs" aria-labelledby="faq-h" className={`${tone === 'white' || tone === 'sand' ? 'bg-white' : 'bg-cream'} py-14 text-ink sm:py-16 lg:py-20`}>
    <Container>
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <Eyebrow>FAQS</Eyebrow>
        <h2 id="faq-h">Frequently Asked Questions</h2>
      </header>
      <FAQAccordion items={items} />
    </Container>
  </section>
);

export default FAQSection;