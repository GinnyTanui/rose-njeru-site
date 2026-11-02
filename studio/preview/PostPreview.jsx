import { useState } from 'react'
import { PortableText, toPlainText } from '@portabletext/react'
import { createImageUrlBuilder } from '@sanity/image-url'
import { useClient } from 'sanity'

/* "Live preview" tab. Shows the post the way it will look on the website (same fonts, colours and layout),
   and updates as Rose types, BEFORE she publishes. It reads the draft she is editing inside the Studio, so it needs
   no password/token and nothing is exposed publicly. */

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function embedUrl(raw = '') {
  try {
    const u = new URL(raw)
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`
    if (host.endsWith('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) return `https://www.youtube-nocookie.com${u.pathname}`
      if (u.pathname.startsWith('/shorts/')) return `https://www.youtube-nocookie.com/embed/${u.pathname.split('/')[2]}`
      const id = u.searchParams.get('v')
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }
    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean).pop()
      return /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null
    }
  } catch { /* not a valid URL */ }
  return null
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@700&display=swap');
.rn{font-family:'DM Sans',system-ui,sans-serif;color:#10141A;background:#EEF4FF;line-height:1.7;-webkit-font-smoothing:antialiased}
.rn *{box-sizing:border-box}
.rn h1,.rn h2,.rn h3,.rn h4,.rn h5,.rn h6{font-family:Manrope,system-ui,sans-serif;font-weight:700;margin:0;line-height:1.2;letter-spacing:-0.015em}
.rn-hero{background:#2F5BFF;color:#fff;padding:40px 28px 44px}
.rn-hero h1{font-size:34px;line-height:1.15}
.rn-eyebrow{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:600;letter-spacing:.14em;color:rgba(255,255,255,.85);margin:0 0 14px}
.rn-eyebrow:before{content:"";width:24px;height:2px;border-radius:2px;background:#FF8A3D}
.rn-excerpt{margin:14px 0 0;font-style:italic;font-size:18px;color:rgba(255,255,255,.85)}
.rn-meta{margin:16px 0 0;font-size:12px;color:rgba(255,255,255,.65)}
.rn-article{max-width:760px;margin:0 auto;padding:36px 28px 56px;background:#EEF4FF}
.rn-cover{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:24px;margin-bottom:28px}
.rn p{margin:16px 0 0;font-size:16px;line-height:1.8;color:rgba(16,20,26,.85)}
.rn a{color:#10141A;font-weight:500;text-decoration:underline;text-decoration-color:#DCE7FF;text-decoration-thickness:2px;text-underline-offset:4px}
.rn .h1{margin-top:56px;font-size:34px}
.rn .h2{margin-top:48px;font-size:28px}
.rn .h3{margin-top:32px;font-size:21px}
.rn .h4{margin-top:28px;font-size:18px}
.rn .h5{margin-top:24px;font-size:16px}
.rn .h6{margin-top:24px;font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:rgba(16,20,26,.7)}
.rn ul{list-style:none;padding:0;margin:16px 0 0}
.rn ul li{display:flex;gap:12px;margin-top:10px;font-size:16px;line-height:1.7;color:rgba(16,20,26,.85)}
.rn ul li:before{content:"";flex:none;width:8px;height:8px;border-radius:50%;background:#10141A;margin-top:11px}
.rn ol{margin:16px 0 0;padding-left:24px}
.rn ol li{margin-top:10px;font-size:16px;line-height:1.7;color:rgba(16,20,26,.85);padding-left:4px}
.rn ol li::marker{font-weight:600;color:#2F5BFF}
.rn strong{font-weight:600;color:#10141A}
.rn code.inline{background:#EEF4FF;padding:2px 8px;border-radius:6px;font-size:.9em}
.rn mark{background:rgba(255,138,61,.3);padding:0 4px;border-radius:4px;color:#10141A}
.rn .callout{margin:24px 0 0;padding:22px 24px;border-left:4px solid #10141A;border-radius:16px;background:rgba(220,231,255,.5);font-weight:500;font-size:16px;line-height:1.7}
.rn .quote{margin:24px 0 0;padding-left:20px;border-left:4px solid #2F5BFF;font-size:20px;font-style:italic;line-height:1.7;color:rgba(16,20,26,.8)}
.rn figure{margin:32px 0 0}
.rn figure img,.rn figure video{display:block;width:100%;height:auto;border-radius:16px;border:1px solid rgba(16,20,26,.15)}
.rn figcaption{margin-top:8px;text-align:center;font-size:14px;color:rgba(16,20,26,.6)}
.rn .video{aspect-ratio:16/9;border-radius:16px;overflow:hidden;border:1px solid rgba(16,20,26,.15);background:#10141A}
.rn .video iframe{width:100%;height:100%;border:0}
.rn .tablewrap{margin:24px 0 0;overflow-x:auto;border-radius:16px;border:1px solid rgba(16,20,26,.15)}
.rn table{width:100%;min-width:420px;border-collapse:collapse;font-size:14px;text-align:left}
.rn th{background:#2F5BFF;color:#EEF4FF;padding:12px 16px;font-family:Manrope,sans-serif}
.rn td{padding:12px 16px;border-top:1px solid rgba(16,20,26,.1);vertical-align:top;color:rgba(16,20,26,.85)}
.rn tr:nth-child(even) td{background:rgba(220,231,255,.3)}
.rn hr{border:0;border-top:1px solid rgba(16,20,26,.15);margin:40px 0}
.rn pre{margin:24px 0 0;padding:20px;border-radius:16px;background:#10141A;color:#EEF4FF;overflow-x:auto;font-size:14px;line-height:1.6}
.rn .btn{display:inline-flex;align-items:center;min-height:46px;margin-top:28px;padding:10px 24px;border-radius:999px;font-size:15px;font-weight:600;text-decoration:none}
.rn .btn.primary{background:#2F5BFF;color:#fff}
.rn .btn.secondary{border:2px solid #2F5BFF;color:#2F5BFF;background:transparent}
.rn .toc{margin-top:28px;padding:22px 24px;border-radius:16px;border:1px solid rgba(16,20,26,.1);background:rgba(220,231,255,.45)}
.rn .toc b{font-family:Manrope,sans-serif;font-size:16px}
.rn .toc ol{margin-top:10px;font-size:15px}
.rn .empty{padding:60px 28px;text-align:center;color:rgba(16,20,26,.6)}
`

const WIDTHS = [
  { label: 'Desktop', px: 1000 },
  { label: 'Tablet', px: 768 },
  { label: 'Phone', px: 390 },
]

export default function PostPreview({ document: doc }) {
  const client = useClient({ apiVersion: '2025-01-01' })
  const [width, setWidth] = useState(WIDTHS[0].px)
  const post = doc?.displayed || {}
  const { projectId, dataset } = client.config()
  const builder = createImageUrlBuilder({ projectId, dataset })
  const img = (src, w) => builder.image(src).width(w).auto('format').url()
  const fileUrl = (ref = '') => {
    const m = ref.match(/^file-(.+)-([a-z0-9]+)$/i)
    return m ? `https://cdn.sanity.io/files/${projectId}/${dataset}/${m[1]}.${m[2]}` : null
  }

  const body = post.body || []
  const heads = body.filter((b) => b._type === 'block' && (b.style === 'h1' || b.style === 'h2')).map((b) => toPlainText(b))
  const words = toPlainText(body).split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null

  const heading = (cls, Tag) => ({ children, value }) => <Tag id={slug(toPlainText(value))} className={cls}>{children}</Tag>

  const components = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
      h1: heading('h1', 'h2'),
      h2: heading('h2', 'h2'),
      h3: heading('h3', 'h3'),
      h4: heading('h4', 'h4'),
      h5: heading('h5', 'h5'),
      h6: heading('h6', 'h6'),
      quote: ({ children }) => <blockquote className="quote">{children}</blockquote>,
      blockquote: ({ children }) => <aside className="callout">{children}</aside>,
    },
    list: { bullet: ({ children }) => <ul>{children}</ul>, number: ({ children }) => <ol>{children}</ol> },
    listItem: { bullet: ({ children }) => <li><span>{children}</span></li>, number: ({ children }) => <li>{children}</li> },
    marks: {
      code: ({ children }) => <code className="inline">{children}</code>,
      underline: ({ children }) => <u>{children}</u>,
      'strike-through': ({ children }) => <s>{children}</s>,
      highlight: ({ children }) => <mark>{children}</mark>,
      link: ({ value, children }) => <a href={value?.href} onClick={(e) => e.preventDefault()}>{children}</a>,
    },
    types: {
      image: ({ value }) => (value?.asset ? (
        <figure><img src={img(value, 1400)} alt={value.alt || ''} />{value.caption && <figcaption>{value.caption}</figcaption>}</figure>
      ) : null),
      videoEmbed: ({ value }) => {
        const src = embedUrl(value?.url)
        return src ? (
          <figure><div className="video"><iframe src={src} title={value.caption || 'Video'} allowFullScreen /></div>{value.caption && <figcaption>{value.caption}</figcaption>}</figure>
        ) : <p style={{ color: '#b00020' }}>⚠ This video link isn't a valid YouTube or Vimeo link, so it won't show on the site.</p>
      },
      videoFile: ({ value }) => {
        const src = fileUrl(value?.file?.asset?._ref)
        return src ? (
          <figure><video controls playsInline preload="metadata" src={src} />{value.caption && <figcaption>{value.caption}</figcaption>}</figure>
        ) : null
      },
      table: ({ value }) => {
        const rows = (value?.rows || []).map((r) => r.cells || [])
        if (!rows.length) return null
        const [head, ...rest] = rows
        return (
          <div className="tablewrap"><table>
            <thead><tr>{head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>{rest.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
          </table></div>
        )
      },
      divider: () => <hr />,
      codeBlock: ({ value }) => (value?.code ? (
        <figure><pre><code>{value.code}</code></pre>{value.filename && <figcaption>{value.filename}</figcaption>}</figure>
      ) : null),
      ctaButton: ({ value }) => (value?.label ? (
        <div><a className={`btn ${value.style === 'secondary' ? 'secondary' : 'primary'}`} href={value.href} onClick={(e) => e.preventDefault()}>{value.label} →</a></div>
      ) : null),
    },
  }

  const faq = (post.faq || []).filter((f) => f?.question && f?.answer)

  return (
    <div style={{ height: '100%', overflow: 'auto', background: '#e8eaee' }}>
      <style>{CSS}</style>
      <div style={{ position: 'sticky', top: 0, zIndex: 5, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#fff', borderBottom: '1px solid #d9dce2', fontFamily: 'system-ui, sans-serif', fontSize: 13 }}>
        <strong style={{ marginRight: 4 }}>Live preview</strong>
        {WIDTHS.map((w) => (
          <button key={w.label} type="button" onClick={() => setWidth(w.px)}
            style={{ padding: '5px 12px', borderRadius: 999, border: '1px solid #2F5BFF', cursor: 'pointer', background: width === w.px ? '#2F5BFF' : '#fff', color: width === w.px ? '#fff' : '#2F5BFF', fontWeight: 600 }}>
            {w.label}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', color: '#6b7280' }}>Updates as you type · nothing is public until you click Publish</span>
      </div>

      <div className="rn" style={{ width: '100%', maxWidth: width, margin: '16px auto', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,.12)' }}>
        {!post.title && !body.length ? (
          <div className="empty">Start writing in the Editor tab and your post will appear here.</div>
        ) : (
          <>
            <header className="rn-hero">
              <p className="rn-eyebrow">{post.tags?.[0] ? `BLOG · ${post.tags[0].toUpperCase()}` : 'BLOG'}</p>
              <h1>{post.title || 'Untitled post'}</h1>
              {post.excerpt && <p className="rn-excerpt">{post.excerpt}</p>}
              <p className="rn-meta">By Rose Njeru · {date ? `${date} · ` : ''}{minutes} min read</p>
            </header>
            <article className="rn-article">
              {post.coverImage?.asset && <img className="rn-cover" src={img(post.coverImage, 1200)} alt={post.coverImage.alt || ''} />}
              {post.showContents !== false && heads.length >= 3 && (
                <nav className="toc"><b>In this guide</b><ol>{heads.map((h) => <li key={h}><a href={`#${slug(h)}`} onClick={(e) => e.preventDefault()}>{h}</a></li>)}</ol></nav>
              )}
              <PortableText value={body} components={components} />
              {faq.length > 0 && (
                <>
                  <h2 className="h2" id="faq">FAQ</h2>
                  {faq.map((f) => <div key={f.question}><h3 className="h3">{f.question}</h3><p style={{ whiteSpace: 'pre-line' }}>{f.answer}</p></div>)}
                </>
              )}
            </article>
          </>
        )}
      </div>
    </div>
  )
}