import { FiCheck, FiClock, FiRefreshCw } from 'react-icons/fi';
import { Button, Section, TextLink } from '../../components/ui';
import { CTA_LABEL, pricing, services } from '../../data';

const Meta = ({ icon: I, label, children }) => (
  <p className="flex items-start gap-2 text-sm text-ink/80"><I className="mt-0.5 shrink-0 text-ink" aria-hidden /><span><span className="font-semibold text-ink">{label}:</span> {children}</span></p>
);

const Tiers = ({ name, tiers }) => (
  <div className="mt-4 overflow-hidden rounded-2xl border border-ink/15">
    <table className="w-full text-sm">
      <caption className="sr-only">{name} pricing by number of tools connected</caption>
      <thead className="bg-ink text-cream"><tr><th scope="col" className="px-4 py-2 text-left font-medium">Tools connected</th><th scope="col" className="px-4 py-2 text-right font-medium">Price</th></tr></thead>
      <tbody className="divide-y divide-ink/10 bg-white/60">
        {tiers.map(([t, p]) => <tr key={t}><th scope="row" className="px-4 py-2.5 text-left font-normal">{t}</th><td className="px-4 py-2.5 text-right font-display font-bold">{p}</td></tr>)}
      </tbody>
    </table>
  </div>
);

export default function PackageGrid() {
  return (
    <Section tone="sand" labelledBy="packages-h">
      <h2 id="packages-h" className="mb-8 text-2xl sm:text-3xl">Pricing Packages</h2>
      <div className="grid gap-5 lg:grid-cols-2">
        {pricing.map((p, i) => (
          <article key={p.slug} className="flex flex-col rounded-3xl border border-ink/15 bg-cream p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-ink/55">Package {services.find((s) => s.slug === p.slug).no}</p>
                <h3 className="mt-2 text-2xl">{p.name}</h3>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-extrabold leading-none sm:text-4xl">{p.price}</p>
                {p.priceNote && <p className="mt-1 text-xs text-ink/60">{p.priceNote}</p>}
              </div>
            </div>
            <div className="mt-5 space-y-2 border-y border-ink/10 py-4">
              <Meta icon={FiClock} label="Delivery">{p.delivery}</Meta>
              {p.maintenance && <Meta icon={FiRefreshCw} label="Optional maintenance">{p.maintenance}</Meta>}
            </div>
            {p.tiers && <Tiers name={p.name} tiers={p.tiers} />}
            <h4 className="mt-6 font-display text-base font-bold">Includes</h4>
            <ul className="mt-3 space-y-2">
              {p.includes.map((x) => <li key={x} className="flex items-start gap-2 text-[15px] text-ink/85"><FiCheck className="mt-1 shrink-0 text-accent" aria-hidden />{x}</li>)}
            </ul>
            <div className="mt-6 rounded-2xl bg-ink p-5 text-cream">
              <h4 className="font-display text-sm font-bold text-accent">You get</h4>
              <p className="mt-1.5 text-[15px] leading-relaxed text-cream/85">{p.get}</p>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
              <Button>{CTA_LABEL}</Button>
              <TextLink to={`/services/${p.slug}`}>About {p.name}</TextLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}