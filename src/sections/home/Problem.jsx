import { Container, Dot } from '../../components/ui';
import { problem } from '../../content';

/* Left: one customer's journey (a real sequence, so it is numbered). Right: the team's week. Then the closing line. */
export default function Problem() {
  return (
    <section aria-labelledby="problem-h" className="bg-cream py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="problem-h" className="text-2xl leading-tight sm:text-3xl lg:text-4xl">{problem.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/75 sm:text-base">{problem.text}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-ink p-6 text-cream sm:p-8">
            <h3 className="text-xl sm:text-2xl">{problem.journeyTitle}</h3>
            <ol className="relative mt-6 space-y-5">
              <span className="absolute bottom-3 left-[15px] top-3 w-px bg-cream/20" aria-hidden />
              {problem.journey.map(([label, text], i) => (
                <li key={label} className="relative flex gap-4">
                  <span className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand font-mono text-xs font-medium text-ink">{i + 1}</span>
                  <p className="pt-0.5 text-[15px] leading-relaxed text-cream/80"><span className="font-display font-bold text-cream">{label}: </span>{text}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-ink/10 bg-sand/45 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl">{problem.weekTitle}</h3>
            <ul className="mt-6 space-y-3" role="list">
              {problem.week.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-3.5 text-[15px] leading-snug">
                  <Dot className="mt-2 text-ink" />{w}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-sand/45 px-6 py-7 text-center sm:px-10">
          <p className="font-display text-xl font-extrabold leading-snug sm:text-2xl">{problem.closingLead}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75 sm:text-base">{problem.closingRest}</p>
        </div>
      </Container>
    </section>
  );
}