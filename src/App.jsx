import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const About = lazy(() => import('./pages/About'));

const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));

const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Consultation = lazy(() => import('./pages/Consultation'));

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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}