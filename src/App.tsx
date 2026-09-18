import React, { useState, useEffect } from 'react';
import { PageRoute, CaseStudy } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/FinalCtaSection';
import { SeoReviewModal } from './components/SeoReviewModal';
import { PAGE_SEO, ROUTE_BY_PATH } from './data/pageSeo';
import { usePageSEO } from './hooks/usePageSEO';

// Pages
import { HomeView } from './pages/HomeView';
import { SeoServicesKarachiPage } from './pages/SeoServicesKarachiPage';
import { TechnicalSeoPage, OnPageSeoPage } from './pages/TechnicalSeoPage';
import { LocalSeoPage, KeywordResearchPage } from './pages/LocalSeoPage';
import { PortfolioPage, AboutPage } from './pages/PortfolioPage';
import { BlogPage, ContactPage } from './pages/BlogPage';

function routeFromPathname(pathname: string): PageRoute {
  return ROUTE_BY_PATH[pathname] || 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    routeFromPathname(window.location.pathname)
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [initialReviewUrl, setInitialReviewUrl] = useState('');

  // Keep state in sync with browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(routeFromPathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Updates <title>, meta description, canonical & OG tags per route
  usePageSEO(currentRoute);

  const handleNavigate = (route: PageRoute) => {
    const path = PAGE_SEO[route]?.path || '/';
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReviewModal = (url?: string) => {
    if (url) setInitialReviewUrl(url);
    setIsReviewModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080A0F] text-[#F7F8FA] selection:bg-[#B7FF3C] selection:text-[#080A0F] font-sans relative antialiased">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleNavigate}
        onRequestReview={() => handleOpenReviewModal()}
      />

      {/* Main Content Router */}
      <main id="main-content">
        {currentRoute === 'home' && (
          <HomeView
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'seo-services-in-karachi' && (
          <SeoServicesKarachiPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'technical-seo-services-karachi' && (
          <TechnicalSeoPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'on-page-seo-services-karachi' && (
          <OnPageSeoPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'local-seo-services-karachi' && (
          <LocalSeoPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'keyword-research-services-karachi' && (
          <KeywordResearchPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'portfolio' && (
          <PortfolioPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'blog' && (
          <BlogPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onRouteChange={handleNavigate}
            onRequestReview={handleOpenReviewModal}
          />
        )}
      </main>

      {/* Global Structured Footer */}
      <Footer
        onRouteChange={handleNavigate}
        onRequestReview={() => handleOpenReviewModal()}
      />

      {/* Interactive Review Drawer/Modal */}
      <SeoReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        initialUrl={initialReviewUrl}
      />
    </div>
  );
}
