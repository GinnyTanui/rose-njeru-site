import { useEffect } from 'react';
import { SITE, services } from '../data';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', content);
};

/* Per-page title, description, canonical, Open Graph, Twitter and JSON-LD (@graph). */
export function Seo({ title, description, path = '/', jsonLd = [], noindex = false, image = '/og-default.png' }) {
  useEffect(() => {
    const url = SITE.url + path;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', SITE.url + image);
    setMeta('name', 'twitter:image', SITE.url + image);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = url;
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd });
    document.head.appendChild(s);
    return () => s.remove();
  }, [title, description, path, noindex]); // eslint-disable-line
  return null;
}

const ID = { rose: `${SITE.url}/#rose`, business: `${SITE.url}/#business` };
export const providerRef = { '@id': ID.business };

// Only facts supplied in the project content.
export const siteNodes = [
  { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name },
  { '@type': 'Person', '@id': ID.rose, name: 'Rose Njeru', jobTitle: 'AI Automation & Business Systems Specialist', url: SITE.url, email: SITE.email, sameAs: [SITE.linkedin, SITE.upwork, SITE.github] },
  { '@type': 'ProfessionalService', '@id': ID.business, name: SITE.name, url: SITE.url, email: SITE.email, founder: { '@id': ID.rose }, description: 'AI automation and business operations solutions for service businesses: business process audits, operational process automation, systems and data integration, sales and marketing automation and AI agents.' , hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE.url}/services/${s.slug}` } })) } },
];

export const faqLd = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const breadcrumbLd = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE.url + path })),
});