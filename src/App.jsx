import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import PageTransition from './components/layout/PageTransition';

const HomePage = lazy(() => import('./pages/HomePage'));
const CoffeeCataloguePage = lazy(() => import('./pages/CoffeeCataloguePage'));
const CoffeeDetailPage = lazy(() => import('./pages/CoffeeDetailPage'));
const OriginsPage = lazy(() => import('./pages/OriginsPage'));
const QualityTraceabilityPage = lazy(() => import('./pages/QualityTraceabilityPage'));
const ExportServicesPage = lazy(() => import('./pages/ExportServicesPage'));
const MarketsPage = lazy(() => import('./pages/MarketsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const RequestOfferPage = lazy(() => import('./pages/RequestOfferPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingPage() {
  return <main className="route-loading" aria-live="polite"><span>Loading Koffera Coffee…</span></main>;
}

export default function App() {
  return (
    <>
      <Header />
      <PageTransition>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coffees" element={<CoffeeCataloguePage />} />
            <Route path="/coffees/:slug" element={<CoffeeDetailPage />} />
            <Route path="/origins" element={<OriginsPage />} />
            <Route path="/quality-traceability" element={<QualityTraceabilityPage />} />
            <Route path="/export-services" element={<ExportServicesPage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/request-offer" element={<RequestOfferPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
    </>
  );
}
