import { useId, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Container, Eyebrow } from './ui';

/* Questions split into two independent columns of cards (one column on mobile),
   so opening an answer only pushes down its own column. */
export function FAQAccordion({ items, dark }) {
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
              <div key={q} className={`rounded-2xl border transition ${dark ? 'border-cream/20 bg-white/5' : 'bg-white/70'} ${isOpen ? (dark ? 'border-accent' : 'border-ink') : dark ? '' : 'border-ink/15'}`}>
                <h3 className="font-sans">
                  <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold leading-snug">
                    {q}
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 bg-accent text-ink' : 'bg-ink/10'}`}><FiPlus aria-hidden /></span>
                  </button>
                </h3>
                <div id={`${uid}-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden"><p className={`px-5 pb-5 text-[15px] leading-relaxed ${dark ? 'text-cream/75' : 'text-ink/75'}`}>{a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* Centered heading, questions underneath. */
export const FAQSection = ({ items, dark, tone }) => (
  <section id="faqs" aria-labelledby="faq-h" className={`${dark ? 'bg-ink text-cream' : tone === 'sand' ? 'bg-cream-sand text-ink' : 'bg-cream text-ink'} py-14 sm:py-16 lg:py-20`}>
    <Container>
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <Eyebrow dark={dark}>FAQS</Eyebrow>
        <h2 id="faq-h" className="text-2xl leading-tight sm:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
      </header>
      <FAQAccordion items={items} dark={dark} />
    </Container>
  </section>
);

export default FAQSection;