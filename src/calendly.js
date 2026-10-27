// Everything about the Calendly booking widget in one place.
// The event link comes from .env: VITE_CALENDLY_URL=https://calendly.com/<user>/<event>
export const BASE_URL = import.meta.env.VITE_CALENDLY_URL;
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const STYLE_SRC = 'https://assets.calendly.com/assets/external/widget.css';

// Set to false to preload only Calendly's script and stylesheet (no hidden booking page).
const WARM_BOOKING_FRAME = true;

// Site colours: paper background, ink text, electric-blue buttons.
// The compact inline calendar hides the event-details panel; the full-screen phone pop-up keeps it.
export const withOptions = (url, compact) =>
  `${url}${url.includes('?') ? '&' : '?'}hide_gdpr_banner=1${compact ? '&hide_event_type_details=1' : ''}&background_color=EEF4FF&text_color=10141A&primary_color=2F5BFF`;

// Loads Calendly's script and stylesheet once, no matter how many times it is asked for.
export function loadCalendly() {
  if (!document.querySelector(`link[href="${STYLE_SRC}"]`)) {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = STYLE_SRC;
    document.head.appendChild(css);
  }
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

// Called once when a visitor lands on any page. After the page has finished loading and the browser is idle, it
// fetches Calendly's script and styles and quietly opens the booking page in a hidden frame, so the calendar on
// /consultation appears almost instantly. Skipped on data-saver connections and when no Calendly link is set.
export function warmCalendly() {
  if (!BASE_URL || typeof window === 'undefined' || window.__calendlyWarm) return;
  window.__calendlyWarm = true;
  if (navigator.connection && navigator.connection.saveData) return;
  const run = () => {
    loadCalendly().catch(() => {});
    if (!WARM_BOOKING_FRAME) return;
    const frame = document.createElement('iframe');
    frame.src = `${withOptions(BASE_URL, true)}&embed_domain=${encodeURIComponent(window.location.hostname)}&embed_type=Inline`;
    frame.setAttribute('aria-hidden', 'true');
    frame.tabIndex = -1;
    frame.title = '';
    frame.style.cssText = 'position:absolute;width:1px;height:1px;border:0;opacity:0;pointer-events:none;left:-9999px';
    document.body.appendChild(frame);
    setTimeout(() => frame.remove(), 30000); // the files stay in the browser cache after the frame is gone
  };
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500));
  if (document.readyState === 'complete') idle(run); else window.addEventListener('load', () => idle(run), { once: true });
}