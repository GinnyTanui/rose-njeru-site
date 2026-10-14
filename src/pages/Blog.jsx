import PageHero from '../components/PageHero';
import PostCard from '../components/PostCard';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Section } from '../components/ui';
import { posts } from '../posts';

export default function Blog() {
  return (
    <>
      <Seo path="/blog" title="Blog: AI Automation Guides for Small Businesses | Rose Njeru"
        description="Practical guides on AI receptionists, automation and measuring the return on investment, for service businesses."
        jsonLd={[breadcrumbLd([['Home', '/'], ['Blog', '/blog']])]} />
      <main>
        <PageHero compact id="blog-h" eyebrow="BLOG" title="Blog" />
        <Section tone="sand" className="!py-10 sm:!py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </Section>
      </main>
    </>
  );
}