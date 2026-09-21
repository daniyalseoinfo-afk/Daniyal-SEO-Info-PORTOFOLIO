import { useEffect } from 'react';
import { PageRoute } from '../types';
import { PAGE_SEO } from '../data/pageSeo';
import { getCanonicalUrl, SITE_URL } from '../lib/siteConfig';
import { buildPageSchema } from '../lib/schemaGenerator';
import { trackPageView } from '../lib/analytics';
import { FAQ_LIST } from '../data/seoData';

function setMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLdSchema(schemaObj: any) {
  let scriptEl = document.getElementById('route-jsonld-schema') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'route-jsonld-schema';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(schemaObj, null, 2);
}

/**
 * Updates document title, meta description, canonical URL, Open Graph /
 * Twitter tags, and Schema.org JSON-LD whenever the current route changes.
 * Also logs page view event to GA4.
 */
export function usePageSEO(route: PageRoute) {
  useEffect(() => {
    const entry = PAGE_SEO[route] || PAGE_SEO['home'];
    const canonicalUrl = getCanonicalUrl(entry.path);

    document.title = entry.title;
    setMetaByName('description', entry.description);
    setMetaByName('robots', route === 'not-found' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setCanonical(canonicalUrl);

    setMetaByProperty('og:title', entry.title);
    setMetaByProperty('og:description', entry.description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', `${SITE_URL}/og-image.jpg`);
    setMetaByProperty('og:type', 'website');

    setMetaByName('twitter:title', entry.title);
    setMetaByName('twitter:description', entry.description);
    setMetaByName('twitter:image', `${SITE_URL}/og-image.jpg`);

    // Relevant FAQs for schema
    const relevantFaqs = (route === 'seo-services-in-karachi' || route === 'technical-seo-services-karachi' || route === 'home')
      ? FAQ_LIST.slice(0, 4)
      : undefined;

    // Generate dynamic JSON-LD
    const schema = buildPageSchema({
      route,
      path: entry.path,
      title: entry.title,
      description: entry.description,
      breadcrumbs: entry.breadcrumbs,
      faqs: relevantFaqs
    });

    setJsonLdSchema(schema);

    // Track in GA4
    trackPageView(entry.path, entry.title);
  }, [route]);
}
