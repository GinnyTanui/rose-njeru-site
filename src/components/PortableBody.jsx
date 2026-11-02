import { PortableText, toPlainText } from '@portabletext/react';
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/sanity';
import { Button, Dot } from './ui';

/* Renders a post written in Sanity with the SAME look as the posts in src/posts.js
   (same fonts, spacing, callout box, table and picture styles). */

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const LINK = 'font-medium text-ink underline decoration-sand decoration-2 underline-offset-4 hover:decoration-ink';

/* YouTube and Vimeo links become a proper embedded player. Anything else returns null (nothing shown). */
function embedUrl(raw = '') {
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (host.endsWith('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) return `https://www.youtube-nocookie.com${u.pathname}`;
      if (u.pathname.startsWith('/shorts/')) return `https://www.youtube-nocookie.com/embed/${u.pathname.split('/')[2]}`;
      const id = u.searchParams.get('v');
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean).pop();
      return /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch { /* not a valid URL */ }
  return null;
}

const Caption = ({ children }) => (children ? <figcaption className="mt-2 text-center text-sm text-ink/60">{children}</figcaption> : null);

const components = {
  block: {
    normal: ({ children }) => <p className="mt-4 text-[15px] leading-[1.8] text-ink/85 sm:text-base">{children}</p>,
    // The page title is already the one real H1 (good for Google), so "Heading 1" is drawn at H1 size
    // but marked up as a section heading (<h2>). It looks like an H1 and keeps the page's heading order correct.
    h1: ({ children, value }) => <h2 id={slug(toPlainText(value))} className="mt-14 scroll-mt-24 text-3xl leading-tight sm:text-4xl">{children}</h2>,
    h2: ({ children, value }) => <h2 id={slug(toPlainText(value))} className="mt-12 scroll-mt-24 text-2xl leading-tight sm:text-3xl">{children}</h2>,
    h3: ({ children, value }) => <h3 id={slug(toPlainText(value))} className="mt-8 scroll-mt-24 text-lg leading-snug sm:text-xl">{children}</h3>,
    h4: ({ children, value }) => <h4 id={slug(toPlainText(value))} className="mt-7 scroll-mt-24 text-base leading-snug sm:text-lg">{children}</h4>,
    h5: ({ children, value }) => <h5 id={slug(toPlainText(value))} className="mt-6 scroll-mt-24 font-display text-base font-bold leading-snug">{children}</h5>,
    h6: ({ children, value }) => <h6 id={slug(toPlainText(value))} className="mt-6 scroll-mt-24 font-display text-sm font-bold uppercase leading-snug tracking-wide text-ink/70">{children}</h6>,
    quote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-brand pl-5 text-lg italic leading-[1.7] text-ink/80 sm:text-xl">{children}</blockquote>
    ),
    blockquote: ({ children }) => (
      <aside className="mt-6 rounded-2xl border-l-4 border-ink bg-sand/50 p-5 text-[15px] font-medium leading-[1.7] text-ink sm:p-6 sm:text-base">{children}</aside>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 space-y-2.5" role="list">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-brand">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[15px] leading-[1.7] text-ink/85 sm:text-base"><Dot className="mt-2.5 text-ink" /><span>{children}</span></li>
    ),
    number: ({ children }) => <li className="pl-1 text-[15px] leading-[1.7] text-ink/85 sm:text-base">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-4">{children}</span>,
    'strike-through': ({ children }) => <s className="text-ink/60">{children}</s>,
    highlight: ({ children }) => <mark className="rounded bg-orange/30 px-1 text-ink">{children}</mark>,
    code: ({ children }) => <code className="rounded-md bg-cream px-2 py-0.5 font-mono text-[0.9em] text-ink">{children}</code>,
    link: ({ value, children }) => {
      const href = value?.href || '';
      if (href.startsWith('/')) return <Link to={href} className={LINK}>{children}</Link>;
      if (/^(mailto:|tel:)/.test(href)) return <a href={href} className={LINK}>{children}</a>;
      return <a href={href} target="_blank" rel="noopener noreferrer" className={LINK}>{children}</a>;
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const dim = value.asset._ref?.match(/-(\d+)x(\d+)-/); // reserves the right space so the page doesn't jump while loading
      return (
        <figure className="mt-8">
          <img
            src={urlFor(value).width(1400).auto('format').url()}
            alt={value.alt || ''}
            width={dim ? Number(dim[1]) : undefined}
            height={dim ? Number(dim[2]) : undefined}
            loading="lazy"
            className="h-auto w-full rounded-2xl border border-ink/15"
          />
          <Caption>{value.caption}</Caption>
        </figure>
      );
    },
    videoEmbed: ({ value }) => {
      const src = embedUrl(value?.url);
      if (!src) return null;
      return (
        <figure className="mt-8">
          <div className="aspect-video overflow-hidden rounded-2xl border border-ink/15 bg-ink">
            <iframe
              src={src}
              title={value.caption || 'Video'}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            />
          </div>
          <Caption>{value.caption}</Caption>
        </figure>
      );
    },
    videoFile: ({ value }) => {
      if (!value?.fileUrl) return null;
      return (
        <figure className="mt-8">
          <video controls playsInline preload="metadata" className="w-full rounded-2xl border border-ink/15 bg-ink">
            <source src={value.fileUrl} />
            Your browser can't play this video. <a href={value.fileUrl} className={LINK}>Download it instead</a>.
          </video>
          <Caption>{value.caption}</Caption>
        </figure>
      );
    },
    divider: () => <hr className="my-10 border-ink/15" />,
    codeBlock: ({ value }) => (value?.code ? (
      <figure className="mt-6">
        <pre className="overflow-x-auto rounded-2xl bg-ink p-5 text-sm leading-relaxed text-cream"><code>{value.code}</code></pre>
        <Caption>{value.filename}</Caption>
      </figure>
    ) : null),
    ctaButton: ({ value }) => {
      if (!value?.label || !value?.href) return null;
      const internal = value.href.startsWith('/');
      return (
        <div className="mt-8">
          {internal
            ? <Button to={value.href} variant={value.style === 'secondary' ? 'secondary' : 'primary'}>{value.label}</Button>
            : <Button href={value.href} variant={value.style === 'secondary' ? 'secondary' : 'primary'}>{value.label}</Button>}
        </div>
      );
    },
    table: ({ value }) => {
      const rows = (value?.rows || []).map((r) => r.cells || []);
      if (rows.length < 1) return null;
      const [head, ...body] = rows;
      return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/15">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand text-cream">
                {head.map((h, c) => <th key={c} scope="col" className="px-4 py-3 font-display font-bold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-sand/30' : 'bg-cream'}>
                  {r.map((c, ci) => <td key={ci} className="border-t border-ink/10 px-4 py-3 align-top text-ink/85">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

/* "In this guide" box, built automatically from the H2 headings (only when there are 3 or more). */
function Contents({ value }) {
  const heads = value.filter((b) => b._type === 'block' && (b.style === 'h1' || b.style === 'h2')).map((b) => toPlainText(b));
  if (heads.length < 3) return null;
  return (
    <nav aria-label="In this guide" className="mt-8 rounded-2xl border border-ink/10 bg-sand/45 p-5 sm:p-6">
      <p className="font-display text-base font-bold">In this guide</p>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px]">
        {heads.map((h) => (
          <li key={h}><a href={`#${slug(h)}`} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">{h}</a></li>
        ))}
      </ol>
    </nav>
  );
}

export default function PortableBody({ value = [], showContents = true }) {
  return (
    <>
      {showContents && <Contents value={value} />}
      <PortableText value={value} components={components} />
    </>
  );
}

/* Question-and-answer list at the end of a post (also feeds Google's FAQ rich results in BlogPost). */
export function PostFaq({ items = [] }) {
  if (!items.length) return null;
  return (
    <>
      <h2 id="faq" className="mt-12 scroll-mt-24 text-2xl leading-tight sm:text-3xl">FAQ</h2>
      {items.map((f) => (
        <div key={f.question}>
          <h3 className="mt-8 text-lg leading-snug sm:text-xl">{f.question}</h3>
          <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.8] text-ink/85 sm:text-base">{f.answer}</p>
        </div>
      ))}
    </>
  );
}