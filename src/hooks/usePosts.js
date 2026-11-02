import { useEffect, useState } from 'react';
import { posts as legacyPosts } from '../posts';
import { LIST_QUERY, POST_QUERY, client, normalize, sanityReady } from '../lib/sanity';

/* Posts come from Sanity. The two older posts still written in src/posts.js are kept underneath, so the blog is
   never empty (even if Sanity is down) and nothing disappears. If Sanity has a post with the same URL, Sanity wins. */

const merge = (sanityPosts) => {
  const taken = new Set(sanityPosts.map((p) => p.slug));
  return [...sanityPosts, ...legacyPosts.filter((p) => !taken.has(p.slug))];
};

let listCache = null;
const postCache = new Map();

export function usePosts() {
  const [state, setState] = useState(() => {
    if (listCache) return { posts: listCache, loading: false, error: null };
    return { posts: sanityReady ? [] : legacyPosts, loading: sanityReady, error: null };
  });

  useEffect(() => {
    if (!sanityReady || listCache) return undefined;
    let cancelled = false;
    client.fetch(LIST_QUERY)
      .then((docs) => {
        listCache = merge(docs.map(normalize));
        if (!cancelled) setState({ posts: listCache, loading: false, error: null });
      })
      .catch((error) => {
        if (!cancelled) setState({ posts: legacyPosts, loading: false, error });
      });
    return () => { cancelled = true; };
  }, []);

  return state;
}

export function usePost(slug) {
  const [state, setState] = useState({ slug: null, post: null, loading: true });

  useEffect(() => {
    let cancelled = false;
    const done = (post) => { if (!cancelled) setState({ slug, post, loading: false }); };
    const legacy = () => legacyPosts.find((p) => p.slug === slug) || null;

    if (!sanityReady) { done(legacy()); return undefined; }
    if (postCache.has(slug)) { done(postCache.get(slug)); return undefined; }

    setState({ slug, post: null, loading: true });
    client.fetch(POST_QUERY, { slug })
      .then((doc) => {
        const post = doc ? normalize(doc) : legacy();
        postCache.set(slug, post);
        done(post);
      })
      .catch(() => done(legacy()));
    return () => { cancelled = true; };
  }, [slug]);

  // Until the lookup for THIS slug has finished, report "loading" so the 404 page never flashes.
  const ready = state.slug === slug && !state.loading;
  return { post: ready ? state.post : null, loading: !ready };
}