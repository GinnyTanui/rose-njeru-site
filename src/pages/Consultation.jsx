import { useEffect, useRef, useState } from 'react';
import { FiAlertCircle, FiCalendar, FiExternalLink } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import { breadcrumbLd, Seo } from '../components/Seo';
import { Section } from '../components/ui';
import { BASE_URL, loadCalendly, withOptions } from '../calendly';

// True on phones (under 640px wide). Updates if the screen is rotated or resized.
function useIsPhone() {
  const query = '(max-width: 639px)';
  const [phone, setPhone] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setPhone(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return phone;
}

function CalendlyBooking() {
  const holder = useRef(null);
  const phone = useIsPhone();
  const [failed, setFailed] = useState(false);

  // Larger screens: the calendar sits inside the page.
  useEffect(() => {
    const el = holder.current;
    if (!BASE_URL || phone || !el) return undefined;
    let cancelled = false;
    loadCalendly()
      .then(() => { if (!cancelled) window.Calendly.initInlineWidget({ url: withOptions(BASE_URL, true), parentElement: el }); })
      .catch(() => setFailed(true));
    return () => { cancelled = true; el.innerHTML = ''; };
  }, [phone]);

  // Phones: a button opens Calendly full screen, which is far easier to use than a small box inside the page.
  const openPopup = () => {
    loadCalendly()
      .then(() => window.Calendly.initPopupWidget({ url: withOptions(BASE_URL, false) }))
      .catch(() => setFailed(true));
  };

  return (
    <Section tone="sand" className="!py-8 sm:!py-10">
      <div className="mx-auto max-w-xl">
        {!BASE_URL ? (
          <p role="alert" className="flex items-start gap-2 rounded-2xl border border-ink/20 bg-sand px-4 py-3 text-sm">
            <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />
            The booking calendar isn&apos;t connected yet.
          </p>
        ) : (
          <>
            {phone ? (
              <div className="rounded-2xl border border-ink/15 bg-cream p-6 text-center">
                <button type="button" onClick={openPopup}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-cream transition hover:bg-brand-deep">
                  <FiCalendar aria-hidden /> Choose a time
                </button>
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border border-ink/15 bg-cream">
                <div ref={holder} className="h-[480px] w-full min-w-[320px]" />
              </div>
            )}
            <p className="mt-4 text-center text-sm text-ink/70">
              {failed ? 'The calendar could not load. ' : phone ? 'Prefer a full page? ' : 'Calendar not showing? '}
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

export default function Consultation() {
  return (
    <>
      <Seo path="/consultation" title="Book a Free Consultation | Rose Njeru"
        description="Pick a time for a free consultation about a business process audit, operational process automation, systems and data integration, sales and marketing automation or AI agents."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Book a Free Consultation', '/consultation']])]} />
      <main>
        <PageHero id="consult-h" eyebrow="FREE CONSULTATION" title="Book a Free Consultation" variant="contact">
          <p>Pick a time that suits you, and tell me a little about how your business runs.</p>
          <p>I&apos;ll review the details before the call so the conversation is useful.</p>
        </PageHero>
        <CalendlyBooking />
      </main>
    </>
  );
}