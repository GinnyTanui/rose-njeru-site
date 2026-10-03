import { Seo } from '../components/Seo';
import { Button, Section, TextLink } from '../components/ui';

export default function NotFound() {
  return (
    <>
      <Seo path="/" title="Page not found | Rose Njeru" description="This page could not be found." noindex />
      <main>
        <Section>
          <h1 className="text-3xl sm:text-4xl">Page not found</h1>
          <p className="mt-4 max-w-xl text-ink/75">The page you were looking for doesn&apos;t exist. Try the homepage or one of the services.</p>
          <div className="mt-6 flex flex-wrap items-center gap-6"><Button to="/">Back to the homepage</Button><TextLink to="/services">Explore services</TextLink></div>
        </Section>
      </main>
    </>
  );
}