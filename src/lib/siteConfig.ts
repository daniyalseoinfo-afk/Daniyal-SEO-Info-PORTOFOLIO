/**
 * Centralized Site & SEO Configuration
 * 
 * Authoritative source of truth for domain, canonical URLs, author information,
 * and routing paths across the entire application.
 */

// Normalized production site URL (no trailing slash)
export const RAW_SITE_URL = import.meta.env.VITE_SITE_URL || 'https://daniyalseoinfo-afk.github.io/Daniyal-SEO-Info-PORTOFOLIO';
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, '');

// Vite base path (e.g. '/Daniyal-SEO-Info-PORTOFOLIO' for GitHub Pages project build, or '' for root domain)
export const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export const SITE_INFO = {
  name: 'Daniyal Asad',
  brandName: 'Daniyal SEO',
  role: 'SEO Specialist',
  positioning: 'Technical SEO, Search Intent & Local Growth',
  email: 'daniyalseoinfo@gmail.com',
  city: 'Karachi',
  region: 'Sindh',
  country: 'Pakistan',
  countryCode: 'PK',
  addressLocality: 'Karachi',
  addressCountry: 'PK',
  linkedinUrl: 'https://linkedin.com/in/daniyal-seo',
  githubUrl: 'https://github.com/daniyalseoinfo-afk',
  repoUrl: 'https://github.com/daniyalseoinfo-afk/Daniyal-SEO-Info-PORTOFOLIO',
  liveSiteUrl: 'https://daniyalseoinfo-afk.github.io/Daniyal-SEO-Info-PORTOFOLIO/',
  defaultOgImage: `${SITE_URL}/og-image.jpg`,
};

/**
 * Returns the fully-qualified canonical URL for any route path.
 * Ensures consistent canonical formatting across SPA runtime and prerendered SSG.
 */
export function getCanonicalUrl(path: string = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${cleanPath}/`;
}

/**
 * Returns the in-app routing href respecting the base path.
 */
export function getAppHref(path: string = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!BASE_PATH) return cleanPath;
  return `${BASE_PATH}${cleanPath}` || '/';
}
