import { useEffect, useRef, useState } from 'react';
import { FiAlertCircle, FiExternalLink } from 'react-icons/fi';
import { Section } from '../../components/ui';


const BASE_URL = import.meta.env.VITE_CALENDLY_URL;
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';


const withOptions = (url) =>
  `${url}${url.includes('?') ? '&' : '?'}hide_gdpr_banner=1&hide_event_type_details=1&background_color=F8FAFC&text_color=0F172A&primary_color=0F172A`;


function loadCalendly() {
  return new Promise((resolve, reject) => {
    if (window.Calendly) return resolve();
    let tag = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!tag) {
      tag = document.createElement('script');
      tag.src = SCRIPT_SRC;
      tag.async = true;
      document.body.appendChild(tag);
    }
    tag.addEventListener('load', resolve);
    tag.addEventListener('error', reject);
  });
}

export default function CalendlyBooking() {
  const holder = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = holder.current;
    if (!BASE_URL || !el) return undefined;
    let cancelled = false;
    loadCalendly()
      .then(() => { if (!cancelled) window.Calendly.initInlineWidget({ url: withOptions(BASE_URL), parentElement: el }); })
      .catch(() => setFailed(true));
    return () => { cancelled = true; el.innerHTML = ''; };
  }, []);

  return (
    <Section tone="sand" className="!pt-10">
      <div className="mx-auto max-w-2xl">
        {!BASE_URL ? (
          <p role="alert" className="flex items-start gap-2 rounded-2xl border border-ink/20 bg-sand px-4 py-3 text-sm">
            <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />
            The booking calendar isn&apos;t connected yet. Add your Calendly link as VITE_CALENDLY_URL in the .env file.
          </p>
        ) : (
          <>
            <div className="overflow-hidden rounded-3xl border border-ink/15 bg-cream">
              <div ref={holder} className="h-[620px] w-full min-w-[320px] sm:h-[540px]" />
            </div>
            <p className="mt-4 text-center text-sm text-ink/70">
              {failed ? 'The calendar could not load. ' : 'Calendar not showing? '}
              <a href={BASE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline decoration-ink/40 underline-offset-4">
                Open it in a new tab <FiExternalLink aria-hidden />
              </a>
            </p>
          </>
        )}
      </div>
    </Section>
  );
}