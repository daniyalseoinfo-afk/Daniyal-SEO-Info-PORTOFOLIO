import { PageRoute } from '../types';

// Central place for per-page SEO metadata. Update SITE_URL once you have a
// final custom domain — everything else (canonical links, OG tags, sitemap
// references) reads from this single constant.
export const SITE_URL = 'https://daniyalseoportfolio.netlify.app';

interface PageSeoEntry {
  path: string; // real URL path (no hash)
  title: string;
  description: string;
}

export const PAGE_SEO: Record<PageRoute, PageSeoEntry> = {
  'home': {
    path: '/',
    title: 'Daniyal — Junior SEO Executive in Karachi | Technical, On-Page & Local SEO',
    description: 'Personal portfolio and professional SEO services by Daniyal, Junior SEO Executive in Karachi, Pakistan. Hands-on Technical SEO, Keyword Research, On-Page & Local Search Optimization.',
  },
  'seo-services-in-karachi': {
    path: '/seo-services-in-karachi',
    title: 'SEO Services in Karachi | Technical, On-Page & Local SEO by Daniyal',
    description: 'Affordable, transparent SEO services for Karachi businesses — technical audits, on-page optimization, keyword clustering, and local search visibility from a hands-on SEO executive.',
  },
  'technical-seo-services-karachi': {
    path: '/technical-seo-services-karachi',
    title: 'Technical SEO Services in Karachi | Site Audits & Core Web Vitals',
    description: 'Technical SEO audits in Karachi covering crawlability, indexation, Core Web Vitals, site speed, and schema markup — fixing the issues that block your rankings.',
  },
  'on-page-seo-services-karachi': {
    path: '/on-page-seo-services-karachi',
    title: 'On-Page SEO Services in Karachi | Content & Metadata Optimization',
    description: 'On-page SEO services for Karachi businesses — content hierarchy, search intent alignment, title tags, meta descriptions, and internal linking done right.',
  },
  'local-seo-services-karachi': {
    path: '/local-seo-services-karachi',
    title: 'Local SEO Services in Karachi | Google Business Profile & Maps Ranking',
    description: 'Local SEO for Karachi businesses — Google Business Profile optimization, local citations, Maps visibility, and geo-targeted search rankings.',
  },
  'keyword-research-services-karachi': {
    path: '/keyword-research-services-karachi',
    title: 'Keyword Research Services in Karachi | Topic Clusters & Search Intent',
    description: 'Data-driven keyword research and topic clustering for Karachi businesses — find the search terms your customers actually use and the intent behind them.',
  },
  'portfolio': {
    path: '/portfolio',
    title: 'SEO Portfolio & Case Studies | Daniyal, Junior SEO Executive Karachi',
    description: 'Real SEO case studies and audit logs — technical crawling audits, keyword intent clustering, and localized search optimization projects with documented methodology.',
  },
  'about': {
    path: '/about',
    title: 'About Daniyal | Junior SEO Executive in Karachi, Pakistan',
    description: 'Learn about Daniyal, a Junior SEO Executive based in Karachi, Pakistan, specializing in technical, on-page, and local SEO for growing businesses.',
  },
  'blog': {
    path: '/blog',
    title: 'SEO Blog | Technical, Local & On-Page SEO Insights by Daniyal',
    description: 'SEO articles and learning notes on technical SEO, local SEO, keyword research, and on-page optimization, written from real project experience in Karachi.',
  },
  'contact': {
    path: '/contact',
    title: 'Contact Daniyal | Request an SEO Review in Karachi',
    description: 'Get in touch with Daniyal for a free SEO review or to discuss technical, on-page, or local SEO services for your business in Karachi.',
  },
};

export const ROUTE_BY_PATH: Record<string, PageRoute> = Object.entries(PAGE_SEO).reduce(
  (acc, [route, entry]) => {
    acc[entry.path] = route as PageRoute;
    return acc;
  },
  {} as Record<string, PageRoute>
);
