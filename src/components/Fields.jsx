import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { SITE } from '../data';

const box = 'w-full rounded-xl border border-ink/20 bg-cream px-4 py-3 text-[15px] outline-none transition placeholder:text-ink/40 focus:border-ink focus:ring-2 focus:ring-ink/20';

export const TextField = ({ label, name, type = 'text', required, placeholder, autoComplete }) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-semibold">{label}{required && <span className="text-ink/50"> *</span>}</span>
    <input className={box} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} />
  </label>
);

export const TextArea = ({ label, name, required, placeholder, rows = 5 }) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-semibold">{label}{required && <span className="text-ink/50"> *</span>}</span>
    <textarea className={`${box} resize-y`} name={name} required={required} placeholder={placeholder} rows={rows} />
  </label>
);

/* Selectable pills. type="checkbox" for multi-select, "radio" for single. */
export const ChipGroup = ({ legend, name, options, type = 'checkbox' }) => (
  <fieldset>
    <legend className="mb-3 font-display text-base font-bold">{legend}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label key={o} className="cursor-pointer">
          <input type={type} name={name} value={o} className="peer sr-only" />
          <span className="inline-block rounded-full border border-ink/25 bg-cream px-4 py-2 text-sm transition hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">{o}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

/* Larger selectable cards (single choice). */
export const CardGroup = ({ legend, name, options }) => (
  <fieldset>
    <legend className="mb-3 font-display text-base font-bold">{legend}</legend>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((o) => (
        <label key={o} className="cursor-pointer">
          <input type="radio" name={name} value={o} className="peer sr-only" />
          <span className="flex min-h-[56px] items-center justify-between gap-3 rounded-2xl border border-ink/20 bg-cream px-4 py-3 text-[15px] font-medium transition hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
            {o}
            <span className="h-4 w-4 shrink-0 rounded-full border-2 border-current opacity-50" aria-hidden />
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

export const Honeypot = () => <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />;

export const FormStatus = ({ status, successText }) => {
  if (status === 'success') return <p role="status" className="flex items-start gap-2 rounded-2xl bg-ink px-4 py-3 text-sm text-cream"><FiCheckCircle className="mt-0.5 shrink-0 text-accent" aria-hidden />{successText}</p>;
  if (status === 'error') return <p role="alert" className="flex items-start gap-2 rounded-2xl border border-accent bg-accent/15 px-4 py-3 text-sm"><FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />Something went wrong sending that. Please try again, or email {SITE.email}.</p>;
  if (status === 'unconfigured') return <p role="alert" className="flex items-start gap-2 rounded-2xl border border-accent bg-accent/15 px-4 py-3 text-sm"><FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />This form isn&apos;t connected to Formspree yet. Add the form ID to your .env file (see README).</p>;
  return null;
};