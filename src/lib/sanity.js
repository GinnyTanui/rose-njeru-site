import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

/* ---------------------------------------------------------------------------------------
   Sanity connection. Reads two values from .env (and from the host's Environment Variables):
     VITE_SANITY_PROJECT_ID   your Sanity project ID
     VITE_SANITY_DATASET      usually "production"
   Both are PUBLIC identifiers (safe in the browser). No secret token is used anywhere on the site:
   the site can only READ published posts, never change anything.
   If the project ID is missing, the site quietly falls back to the posts in src/posts.js.
   --------------------------------------------------------------------------------------- */

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const sanityReady = Boolean(projectId);

export const client = sanityReady
  ? createClient({ projectId, dataset, apiVersion: '2025-01-01', useCdn: true, perspective: 'published' })
  : null;

const builder = sanityReady ? createImageUrlBuilder({ projectId, dataset }) : null;
export const urlFor = (source) => builder.image(source);

/* A post is live when it has a URL, is published (not a draft) and its publish date has arrived,
   so Rose can also schedule a post by setting a future date. */
const LIVE = '_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()';
const WORDS = '"words": count(string::split(pt::text(body), " "))';

export const LIST_QUERY = `*[${LIVE}] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, description, publishedAt, coverImage, tags, ${WORDS}
}`;

export const POST_QUERY = `*[${LIVE} && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, description, publishedAt, _updatedAt, coverImage, tags, showContents, faq, ${WORDS},
  body[]{ ..., _type == "videoFile" => { "fileUrl": file.asset->url } }
}`;

/* Turns a Sanity document into the same shape the rest of the site already uses for posts. */
export function normalize(doc) {
  const hasCover = Boolean(doc.coverImage?.asset);
  return {
    source: 'sanity',
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    description: doc.description || doc.excerpt,
    date: doc.publishedAt,
    modified: doc._updatedAt,
    cover: hasCover ? urlFor(doc.coverImage).width(1200).height(675).fit('crop').auto('format').url() : null,
    ogImage: hasCover ? urlFor(doc.coverImage).width(1200).height(630).fit('crop').format('jpg').url() : null,
    coverAlt: doc.coverImage?.alt || '',
    minutes: Math.max(1, Math.round((doc.words || 0) / 200)),
    tags: doc.tags || [],
    showContents: doc.showContents !== false,
    faq: (doc.faq || []).filter((f) => f?.question && f?.answer),
    body: doc.body || [],
  };
}