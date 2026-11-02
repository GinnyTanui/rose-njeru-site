import PageHero from '../components/PageHero';
import PostCard from '../components/PostCard';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Section } from '../components/ui';
import { usePosts } from '../hooks/usePosts';

const Skeleton = () => (
  <div aria-hidden className="overflow-hidden rounded-3xl border border-ink/10 bg-cream">
    <div className="aspect-[16/9] animate-pulse bg-sand" />
    <div className="space-y-3 p-6"><div className="h-3 w-20 animate-pulse rounded bg-sand" /><div className="h-5 w-3/4 animate-pulse rounded bg-sand" /><div className="h-3 w-full animate-pulse rounded bg-sand" /></div>
  </div>
);

export default function Blog() {
  const { posts, loading } = usePosts();
  return (
    <>
      <Seo path="/blog" title="Blog: AI Automation Guides for Small Businesses | Rose Njeru"
        description="Practical guides on AI receptionists, automation and measuring the return on investment, for service businesses."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Blog', '/blog']])]} />
      <main>
        <PageHero compact id="blog-h" eyebrow="BLOG" title="Blog" />
        <Section tone="sand" className="!py-10 sm:!py-12">
          <div className="grid gap-6 md:grid-cols-2" aria-busy={loading}>
            {loading
              ? [0, 1].map((n) => <Skeleton key={n} />)
              : posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
          {!loading && posts.length === 0 && <p className="text-center text-ink/70">New guides are on the way.</p>}
        </Section>
      </main>
    </>
  );
}