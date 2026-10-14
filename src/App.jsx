import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from './data';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Inner pages load on demand so the homepage stays light.
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Consultation = lazy(() => import('./pages/Consultation'));

// Scrolls to #hash targets (e.g. /#faqs, /case-studies#ai-agents) and to top on route change.
// Lazy pages may not be on screen yet, so it keeps looking for the target for about 2 seconds.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return undefined; }
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView(); clearInterval(timer); }
      else if (++tries > 25) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [pathname, hash]);
  return null;
}

// Floating WhatsApp button, bottom-right on every page. The number comes from SITE.phone in data.js.
function WhatsAppButton() {
  const href = `https://wa.me/${SITE.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hi Rose, I'd like to know more about your services.")}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with Rose on WhatsApp (opens in a new tab)"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)', marginRight: 'env(safe-area-inset-right, 0px)' }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink/30 transition hover:scale-105 sm:bottom-6 sm:right-6">
      <FaWhatsapp size={30} aria-hidden />
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}