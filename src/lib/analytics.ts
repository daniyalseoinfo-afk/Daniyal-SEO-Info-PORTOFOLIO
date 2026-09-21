/**
 * Analytics Utility for Google Analytics 4 (GA4) & Search Diagnostics
 * 
 * Supports privacy-safe event logging with safe client-side fallback.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';


export function initAnalytics() {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !/^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID)) return;
  if (document.querySelector(`script[data-ga4="${GA_MEASUREMENT_ID}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  script.dataset.ga4 = GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) { window.dataLayer!.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
}

export type AnalyticsEventName =
  | 'page_view'
  | 'contact_form_submit'
  | 'audit_request'
  | 'portfolio_case_study_view'
  | 'serp_tool_used'
  | 'primary_cta_click'
  | 'email_click'
  | 'linkedin_click'
  | 'github_click'
  | 'faq_expand';

export interface AnalyticsEventParams {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  case_study_id?: string;
  service_category?: string;
  cta_name?: string;
  source_page?: string;
  [key: string]: any;
}

/**
 * Dispatches custom events to GA4 dataLayer if initialized
 */
export function trackEvent(name: AnalyticsEventName, params?: AnalyticsEventParams) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }

  // Developer mode debugging log
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${name}:`, params);
  }
}

/**
 * Tracks a route navigation event
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
}
