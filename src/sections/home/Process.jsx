import { Dot, Section, SectionHeading } from '../../components/ui';
import { process } from '../../content';

/* Heading sticks on the left while the four steps scroll past on the right. Step 1 and 2 carry their lists inside a stone panel. */
export default function Process() {
  return (
    <Section id="process" labelledBy="process-h">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="process-h" eyebrow={process.eyebrow} title={process.title}>{process.text}</SectionHeading>
        </div>
        <ol className="relative space-y-5">
          {process.steps.map((st, i) => (
            <li key={st.title} className="rounded-3xl border border-ink/15 bg-cream p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink font-mono text-sm text-cream">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="pt-1.5 text-lg sm:text-xl">{st.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{st.text}</p>

                  {st.columns && (
                    <div className="mt-5 grid gap-4 rounded-2xl bg-sand/45 p-4 sm:grid-cols-2 sm:p-5">
                      {st.columns.map(([h, list]) => (
                        <div key={h}>
                          <h4 className="font-display text-sm font-bold">{h}</h4>
                          <ul className="mt-2.5 space-y-2" role="list">
                            {list.map((x) => <li key={x} className="flex items-start gap-2.5 text-sm leading-snug text-ink/85"><Dot className="mt-1.5 text-ink" />{x}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {st.notes && (
                    <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
                      {st.notes.map(([k, v]) => <p key={k}><span className="font-display font-bold">{k}:</span> <span className="text-ink/75">{v}</span></p>)}
                    </div>
                  )}

                  {st.examples && (
                    <div className="mt-5 rounded-2xl bg-sand/45 p-4 sm:p-5">
                      <h4 className="font-display text-sm font-bold">{st.exampleLabel}</h4>
                      <ul className="mt-2.5 space-y-2.5" role="list">
                        {st.examples.map((x) => <li key={x} className="flex items-start gap-2.5 text-[15px] leading-snug text-ink/85"><Dot className="mt-2 text-ink" />{x}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}