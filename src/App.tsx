import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
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
import { SerpPreviewToolPage } from './pages/SerpPreviewToolPage';
import { NotFoundPage } from './pages/NotFoundPage';

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

function routeFromPathname(pathname: string): PageRoute {
  const appPath = BASE_PATH && pathname.startsWith(BASE_PATH)
    ? pathname.slice(BASE_PATH.length) || '/'
    : pathname;

  // Clean trailing slash unless root
  const normalizedPath = (appPath.length > 1 && appPath.endsWith('/')) 
    ? appPath.slice(0, -1) 
    : appPath;

  return ROUTE_BY_PATH[normalizedPath] || (normalizedPath === '/' ? 'home' : 'not-found');
}

function pathForRoute(route: PageRoute): string {
  const appPath = PAGE_SEO[route]?.path || '/';
  return `${BASE_PATH}${appPath}` || '/';
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

  // Updates <title>, meta description, canonical, OG tags & JSON-LD schema per route
  usePageSEO(currentRoute);

  const handleNavigate = (route: PageRoute) => {
    const path = pathForRoute(route);
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
    <div className="min-h-screen bg-[#060909] text-[#F4FAF7] selection:bg-[#00E59B] selection:text-[#060909] font-sans relative antialiased">
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

        {currentRoute === 'free-seo-tools' && (
          <SerpPreviewToolPage
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

        {currentRoute === 'not-found' && (
          <NotFoundPage
            onRouteChange={handleNavigate}
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
