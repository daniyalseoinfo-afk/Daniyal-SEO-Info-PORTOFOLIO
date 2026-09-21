import { PageRoute } from '../types';
import { SITE_URL, getCanonicalUrl } from '../lib/siteConfig';

export { SITE_URL };

export interface PageSeoEntry {
  path: string;
  title: string;
  description: string;
  h1: string;
  breadcrumbs: { name: string; path: string }[];
}

export const PAGE_SEO: Record<PageRoute, PageSeoEntry> = {
  'home': {
    path: '/',
    title: 'SEO Specialist in Karachi | Technical, On-Page & Local SEO | Daniyal Asad',
    description: 'SEO specialist in Karachi focusing on technical SEO audits, search intent, on-page optimization, internal linking, and local search growth. Explore practical SEO projects, audits, and case studies.',
    h1: 'SEO Specialist in Karachi — Technical, On-Page & Local SEO',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  'seo-services-in-karachi': {
    path: '/seo-services-in-karachi',
    title: 'SEO Services in Karachi | Technical, On-Page & Local SEO Consulting',
    description: 'Independent SEO consulting for Karachi businesses. Focused on technical crawl health, on-page search intent alignment, and local Map Pack visibility.',
    h1: 'SEO Services in Karachi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'SEO Services in Karachi', path: '/seo-services-in-karachi' }
    ],
  },
  'technical-seo-services-karachi': {
    path: '/technical-seo-services-karachi',
    title: 'Technical SEO Services Karachi | Crawl Diagnostics, Indexing & Core Web Vitals',
    description: 'Identify and resolve crawl traps, indexation blocks, canonical conflicts, render-blocking scripts, and Core Web Vitals bottlenecks.',
    h1: 'Technical SEO Services in Karachi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/seo-services-in-karachi' },
      { name: 'Technical SEO', path: '/technical-seo-services-karachi' }
    ],
  },
  'on-page-seo-services-karachi': {
    path: '/on-page-seo-services-karachi',
    title: 'On-Page SEO Services Karachi | Content Intent & Semantic Architecture',
    description: 'On-page search optimization: user intent mapping, structured heading hierarchy, CTR-focused metadata, and contextual internal link architecture.',
    h1: 'On-Page SEO Services in Karachi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/seo-services-in-karachi' },
      { name: 'On-Page SEO', path: '/on-page-seo-services-karachi' }
    ],
  },
  'local-seo-services-karachi': {
    path: '/local-seo-services-karachi',
    title: 'Local SEO Services Karachi | Google Business Profile & Local Search',
    description: 'Local SEO strategy for Karachi businesses: Google Business Profile optimization, local citation cleanup, and geo-targeted commercial landing pages.',
    h1: 'Local SEO Services in Karachi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/seo-services-in-karachi' },
      { name: 'Local SEO', path: '/local-seo-services-karachi' }
    ],
  },
  'keyword-research-services-karachi': {
    path: '/keyword-research-services-karachi',
    title: 'Keyword Research Services Karachi | Topic Clusters & Search Intent Mapping',
    description: 'Data-driven keyword research that maps user search intent into clear topic clusters and 1-to-1 page architecture to avoid keyword cannibalization.',
    h1: 'Keyword Research Services in Karachi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/seo-services-in-karachi' },
      { name: 'Keyword Research', path: '/keyword-research-services-karachi' }
    ],
  },
  'portfolio': {
    path: '/portfolio',
    title: 'SEO Portfolio & Case Studies | Technical Audits & Strategy Exercises',
    description: 'Documented SEO audit exercises and demonstration projects. Inspect real diagnostic methodology, problem identification, prioritization, and technical fixes.',
    h1: 'SEO Case Studies & Diagnostic Exercises',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/portfolio' }
    ],
  },
  'about': {
    path: '/about',
    title: 'About Daniyal Asad | SEO Specialist in Karachi',
    description: 'Learn about Daniyal Asad, an SEO specialist based in Karachi, Pakistan working across technical diagnostics, search intent, on-page SEO, and data-driven organic growth.',
    h1: 'About Daniyal Asad',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ],
  },
  'blog': {
    path: '/blog',
    title: 'SEO Knowledge Base & Field Notes | Technical SEO Guides | Daniyal Asad',
    description: 'Practical guides on Search Console diagnostics, crawl budget management, Core Web Vitals, keyword cannibalization, and local SEO in Pakistan.',
    h1: 'SEO Knowledge Base & Field Notes',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'SEO Resources', path: '/blog' }
    ],
  },
  'free-seo-tools': {
    path: '/free-seo-tools/serp-preview',
    title: 'Free Google SERP Snippet Preview & Pixel Width Tool | Daniyal Asad',
    description: 'Free SEO tool to preview Google desktop and mobile SERP snippets, calculate title tag pixel widths (600px cutoff), and inspect meta descriptions in real-time.',
    h1: 'Google SERP Snippet & Pixel Width Preview Tool',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Free SEO Tools', path: '/free-seo-tools/serp-preview' }
    ],
  },
  'contact': {
    path: '/contact',
    title: 'Contact Daniyal Asad | SEO Project Inquiries & Website Review',
    description: 'Get in touch to discuss a website audit, search intent project, or technical SEO consultation. Based in Karachi, working remotely.',
    h1: 'Discuss an SEO Project or Audit',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ],
  },
  'not-found': {
    path: '/404',
    title: 'Page Not Found (404) | Daniyal Asad SEO',
    description: 'The requested page could not be found. Explore SEO services, portfolio case studies, or return to the homepage.',
    h1: 'Page Not Found (404)',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: '404', path: '/404' }
    ],
  },
};

export const ROUTE_BY_PATH: Record<string, PageRoute> = Object.entries(PAGE_SEO).reduce(
  (acc, [route, entry]) => {
    acc[entry.path] = route as PageRoute;
    return acc;
  },
  {} as Record<string, PageRoute>
);

// Map flat paths and alternate legacy paths
ROUTE_BY_PATH['/404.html'] = 'not-found';
ROUTE_BY_PATH['/free-seo-tools'] = 'free-seo-tools';
