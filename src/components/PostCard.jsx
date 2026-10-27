import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { minutes } from '../posts';

/* Blog card used on the blog list and under each post. No cover image yet? A navy tile with the RN mark stands in. */
export default function PostCard({ post, level: Tag = 'h2' }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/15 bg-cream transition hover:-translate-y-1 hover:border-ink">
      {post.cover ? (
        <img src={post.cover} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
      ) : (
        <div className="grid aspect-[16/9] place-items-center bg-brand"><img src="/logo-mark.png" alt="" className="h-20 w-auto opacity-90" /></div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs text-ink/55">{minutes(post)} min read</p>
        <Tag className="mt-2 text-lg leading-snug sm:text-xl">{post.title}</Tag>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold">
          Read the guide <FiArrowRight aria-hidden className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}