import { useEffect } from 'react';
import { PageRoute } from '../types';
import { PAGE_SEO, SITE_URL } from '../data/pageSeo';

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

/**
 * Updates document title, meta description, canonical URL, and Open Graph /
 * Twitter tags whenever the current route changes. This is what makes each
 * "page" of the SPA actually distinct to Google, instead of every route
 * sharing the same title/description from index.html.
 */
export function usePageSEO(route: PageRoute) {
  useEffect(() => {
    const entry = PAGE_SEO[route];
    if (!entry) return;

    const fullUrl = `${SITE_URL}${entry.path}`;

    document.title = entry.title;
    setMetaByName('description', entry.description);
    setCanonical(fullUrl);

    setMetaByProperty('og:title', entry.title);
    setMetaByProperty('og:description', entry.description);
    setMetaByProperty('og:url', fullUrl);
    setMetaByProperty('og:type', route === 'home' ? 'website' : 'article');

    setMetaByName('twitter:title', entry.title);
    setMetaByName('twitter:description', entry.description);
  }, [route]);
}
