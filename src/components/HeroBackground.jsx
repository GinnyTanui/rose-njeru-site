/* ---------- artwork per page ---------- */
const ART = {
  home: { src: '/hero/home.svg', w: 1130, h: 790, alt: 'Isometric illustration of a messy process becoming a clean workflow, an AI core in the middle and an AI agent connected to business tools' },
  audit: { src: '/hero/audit.svg', w: 1104, h: 884, alt: 'Isometric illustration of a business process map with a magnifying glass reviewing each step' },
  integration: { src: '/hero/integration.svg', w: 1109, h: 679, alt: 'Isometric illustration of interlocking gears connecting business tools with flowing data' },
  workflow: { src: '/hero/workflow.svg', w: 1209, h: 997, alt: 'Isometric illustration of an automated workflow rising step by step from first task to finished job' },
  aiagent: { src: '/hero/aiagent.svg', w: 1263, h: 982, alt: 'Isometric illustration of an AI agent with a screen face answering customer messages and connected to calendar, inbox and CRM tools' },
  about: { src: '/hero/about.svg', w: 1253, h: 982, alt: 'Isometric illustration of a business specialist at the centre of rising steps, charts and a conversation' },
  pricing: { src: '/hero/pricing.svg', w: 1109, h: 674, alt: 'Isometric illustration of three ascending service packages with checkmarks beside stacks of coins' },
  contact: { src: '/hero/contact.svg', w: 1263, h: 1004, alt: 'Isometric illustration of an envelope, chat bubbles and a location pin representing getting in touch' },
  leads: { src: '/hero/leads.svg', w: 1109, h: 839, alt: 'Isometric illustration of a funnel turning incoming leads into booked appointments on a calendar' },
};

/* The hero background for every page: electric blue, a faint static blueprint grid, and (optionally) a large illustration. Nothing moves.
   align="center"  the art spans the whole hero and a soft blue wash sits behind the centred text (home).
   align="left"    the art sits to the right and fades out toward the left-aligned text (inner pages).
   variant         home | aiagent | audit | integration | workflow | leads | about | pricing | contact | network (no illustration) */
// `density` is accepted but ignored: it only drove the removed animation, and callers still pass it.
export function HeroBackground({ variant = 'network', align = 'left', priority = false, decorative = false }) {
  const art = ART[variant];
  const alt = decorative ? '' : art?.alt; // the closing call-to-action repeats the page's art, so it is marked decorative
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-brand">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(255,255,255,.16),transparent_55%)]" aria-hidden />
      <div className="absolute inset-0 bg-blueprint [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_75%)]" aria-hidden />

      {art && align === 'center' && (
        <>
          <img src={art.src} alt={alt} width={art.w} height={art.h} decoding="async" {...(priority ? { fetchpriority: "high" } : { loading: 'lazy' })}
            className="absolute left-1/2 top-1/2 h-auto w-[150vw] max-w-none -translate-x-1/2 -translate-y-[46%] opacity-40 sm:w-[125vw] md:opacity-100 lg:w-[min(1240px,100vw)]" />
          {/* calm blue wash behind the centred text so the headline stays easy to read */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_52%_at_50%_44%,rgba(47,91,255,.9),rgba(47,91,255,.6)_55%,transparent_100%)]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand/70 to-transparent" aria-hidden />
        </>
      )}
      {art && align === 'left' && (
        <img src={art.src} alt={alt} width={art.w} height={art.h} decoding="async" {...(priority ? { fetchpriority: "high" } : { loading: 'lazy' })}
          className="absolute right-[-10%] top-1/2 h-[120%] w-auto max-w-none -translate-y-1/2 opacity-30 [mask-image:linear-gradient(to_right,transparent,black_38%)] sm:right-[-6%] md:opacity-100 lg:right-[-2%] lg:h-[132%]" />
      )}
    </div>
  );
}