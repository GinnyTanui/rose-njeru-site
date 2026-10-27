import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import FinalCTA from '../components/FinalCTA';
import { HeroBackground } from '../components/HeroBackground';
import PostCard from '../components/PostCard';
import { Seo, breadcrumbLd, faqLd, providerRef } from '../components/Seo';
import { Container, Dot, Eyebrow, Section } from '../components/ui';
import { homeCta } from '../data';
import { minutes, posts } from '../posts';
import NotFound from './NotFound';

/* ---------- Reading the post text (see the guide at the top of posts.js) ---------- */

const slug = (s) => s.toLowerCase().replace(/^\d+\.\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const plain = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\{\{|\}\}|\*\*|\*/g, '');
const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

function parse(md) {
  const lines = md.trim().split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i += 1; continue; }
    if (l.startsWith('### ')) { blocks.push({ t: 'h3', text: l.slice(4) }); i += 1; continue; }
    if (l.startsWith('## ')) { blocks.push({ t: 'h2', text: l.slice(3) }); i += 1; continue; }
    if (l.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i += 1; }
      blocks.push({ t: 'table', head: cells(rows[0]), align: cells(rows[1]).map((c) => (c.endsWith(':') ? 'right' : 'left')), rows: rows.slice(2).map(cells) });
      continue;
    }
    if (/^- /.test(l) || /^\d+\. /.test(l)) {
      const ordered = /^\d+\. /.test(l);
      const re = ordered ? /^\d+\. / : /^- /;
      const items = [];
      while (i < lines.length && re.test(lines[i])) { items.push(lines[i].replace(re, '')); i += 1; }
      blocks.push({ t: ordered ? 'ol' : 'ul', items });
      continue;
    }
    if (l.startsWith('>')) {
      const paras = [[]];
      while (i < lines.length && lines[i].startsWith('>')) {
        const text = lines[i].replace(/^>\s?/, '');
        if (!text.trim()) paras.push([]); else paras[paras.length - 1].push(text);
        i += 1;
      }
      blocks.push({ t: 'callout', paras: paras.filter((p) => p.length).map((p) => p.join(' ')) });
      continue;
    }
    const img = l.match(/^!\[([^\]]*)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)$/);
    if (img) { blocks.push({ t: 'figure', alt: img[1], name: img[2], caption: img[3] || '' }); i += 1; continue; }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#|\||- |\d+\. |>|!\[)/.test(lines[i])) { para.push(lines[i]); i += 1; }
    blocks.push({ t: 'p', text: para.join(' ') });
  }
  return blocks;
}

/* **bold**  *italic*  [link](url)  {{formula}} */
function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|\{\{.+?\}\})/g).filter(Boolean);
  return parts.map((p, k) => {
    if (p.startsWith('**')) return <strong key={k} className="font-semibold text-ink"><Inline text={p.slice(2, -2)} /></strong>;
    if (p.startsWith('{{')) return <code key={k} className="rounded-md bg-cream px-2 py-0.5 font-mono text-[0.9em] text-ink">{p.slice(2, -2)}</code>;
    if (p.startsWith('*')) return <em key={k}>{p.slice(1, -1)}</em>;
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const cls = 'font-medium text-ink underline decoration-sand decoration-2 underline-offset-4 hover:decoration-ink';
      return link[2].startsWith('/')
        ? <Link key={k} to={link[2]} className={cls}>{link[1]}</Link>
        : <a key={k} href={link[2]} target="_blank" rel="noopener noreferrer" className={cls}>{link[1]}</a>;
    }
    return <Fragment key={k}>{p}</Fragment>;
  });
}

/* ---------- The article body ---------- */

function Body({ blocks, images }) {
  const ids = new Set(blocks.filter((b) => b.t === 'h2' || b.t === 'h3').map((b) => slug(b.text)));
  const out = [];
  for (let n = 0; n < blocks.length; n += 1) {
    const b = blocks[n];
    const key = n;
    if (b.t === 'h2' && b.text === 'In this guide' && /^[uo]l$/.test(blocks[n + 1]?.t)) {
      const list = blocks[n + 1];
      const L = list.t === 'ol' ? 'ol' : 'ul';
      out.push(
        <nav key={key} aria-label="In this guide" className="mt-8 rounded-2xl border border-ink/10 bg-sand/45 p-5 sm:p-6">
          <p className="font-display text-base font-bold">In this guide</p>
          <L className={`mt-3 space-y-1.5 text-[15px] ${L === 'ol' ? 'list-decimal pl-5' : 'list-none'}`}>
            {list.items.map((it) => (
              <li key={it} className={L === 'ul' ? 'flex items-start gap-3' : ''}>
                {L === 'ul' && <Dot className="mt-2 text-ink" />}
                {ids.has(slug(it)) ? <a href={`#${slug(it)}`} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">{it}</a> : it}
              </li>
            ))}
          </L>
        </nav>,
      );
      n += 1;
      continue;
    }
    if (b.t === 'h2') out.push(<h2 key={key} id={slug(b.text)} className="mt-12 text-2xl leading-tight sm:text-3xl">{b.text}</h2>);
    else if (b.t === 'h3') out.push(<h3 key={key} id={slug(b.text)} className="mt-8 text-lg leading-snug sm:text-xl">{b.text}</h3>);
    else if (b.t === 'p') out.push(<p key={key} className="mt-4 text-[15px] leading-[1.8] text-ink/85 sm:text-base"><Inline text={b.text} /></p>);
    else if (b.t === 'ul') {
      out.push(
        <ul key={key} className="mt-4 space-y-2.5" role="list">
          {b.items.map((it) => <li key={it} className="flex items-start gap-3 text-[15px] leading-[1.7] text-ink/85 sm:text-base"><Dot className="mt-2.5 text-ink" /><span><Inline text={it} /></span></li>)}
        </ul>,
      );
    } else if (b.t === 'ol') {
      out.push(
        <ol key={key} className="mt-4 space-y-2.5" role="list">
          {b.items.map((it, j) => (
            <li key={it} className="flex items-start gap-3 text-[15px] leading-[1.7] text-ink/85 sm:text-base">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand font-mono text-xs text-cream">{j + 1}</span>
              <span><Inline text={it} /></span>
            </li>
          ))}
        </ol>,
      );
    } else if (b.t === 'callout') {
      out.push(
        <aside key={key} className="mt-6 space-y-3 rounded-2xl border-l-4 border-ink bg-sand/50 p-5 sm:p-6">
          {b.paras.map((p) => <p key={p} className="text-[15px] font-medium leading-[1.7] text-ink sm:text-base"><Inline text={p} /></p>)}
        </aside>,
      );
    } else if (b.t === 'table') {
      out.push(
        <div key={key} className="mt-6 overflow-x-auto rounded-2xl border border-ink/15">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand text-cream">
                {b.head.map((h, c) => <th key={h} scope="col" className={`px-4 py-3 font-display font-bold ${b.align[c] === 'right' ? 'text-right' : ''}`}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={r.join('|')} className={ri % 2 ? 'bg-sand/30' : 'bg-cream'}>
                  {r.map((c, ci) => <td key={ci} className={`border-t border-ink/10 px-4 py-3 align-top text-ink/85 ${b.align[ci] === 'right' ? 'text-right' : ''}`}><Inline text={c} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    } else if (b.t === 'figure' && images[b.name]) {
      out.push(
        <figure key={key} className="mt-8">
          <img src={images[b.name]} alt={b.alt} loading="lazy" className="w-full rounded-2xl border border-ink/15" />
          {b.caption && <figcaption className="mt-2 text-center text-sm text-ink/60">{b.caption}</figcaption>}
        </figure>,
      );
    }
  }
  return out;
}

/* One question-and-answer pair per FAQ heading, for Google's FAQ rich results. */
function faqPairs(blocks) {
  const start = blocks.findIndex((b) => b.t === 'h2' && b.text === 'FAQ');
  if (start < 0) return [];
  const pairs = [];
  for (let n = start + 1; n < blocks.length && blocks[n].t !== 'h2'; n += 1) {
    if (blocks[n].t === 'h3') pairs.push([blocks[n].text, blocks[n + 1]?.t === 'p' ? plain(blocks[n + 1].text) : '']);
  }
  return pairs.filter(([, a]) => a);
}

/* ---------- The page ---------- */

export default function BlogPost() {
  const { slug: postSlug } = useParams();
  const post = posts.find((p) => p.slug === postSlug);
  if (!post) return <NotFound />;
  const blocks = parse(post.body);
  const faq = faqPairs(blocks);
  const path = `/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Seo path={path} title={`${post.title} | Rose Njeru`} description={post.description}
        jsonLd={[
          breadcrumbLd([['Home', '/'], ['Blog', '/blog'], [post.title, path]]),
          { '@type': 'BlogPosting', headline: post.title, description: post.description, author: { '@type': 'Person', name: 'Rose Njeru' }, publisher: providerRef },
          ...(faq.length ? [faqLd(faq)] : []),
        ]} />
      <main>
        <section aria-labelledby="post-h" className="relative overflow-hidden text-cream">
          <HeroBackground density={0.6} />
          <Container className="relative py-10 sm:py-14">
            <div className="max-w-3xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-sand hover:text-cream"><FiArrowLeft aria-hidden /> All guides</Link>
              <div className="mt-6"><Eyebrow dark>BLOG</Eyebrow></div>
              <h1 id="post-h" className="text-2xl leading-[1.15] sm:text-4xl">{post.title}</h1>
              <p className="mt-4 text-base italic leading-relaxed text-cream/80 sm:text-lg">{post.excerpt}</p>
              <p className="mt-5 font-mono text-xs text-cream/60">By Rose Njeru · {minutes(post)} min read</p>
            </div>
          </Container>
        </section>

        <Section className="!pt-10 sm:!pt-12">
          <article className="mx-auto max-w-3xl">
            {post.cover && <img src={post.cover} alt="" className="mb-8 aspect-[16/9] w-full rounded-3xl object-cover" />}
            <Body blocks={blocks} images={post.images} />
          </article>
        </Section>

        {others.length > 0 && (
          <Section tone="sand" labelledBy="more-h" className="!py-10 sm:!py-12">
            <h2 id="more-h" className="text-xl sm:text-2xl">More guides</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {others.map((p) => <PostCard key={p.slug} post={p} level="h3" />)}
            </div>
          </Section>
        )}

        <FinalCTA title={homeCta.h} text={homeCta.p} />
      </main>
    </>
  );
}