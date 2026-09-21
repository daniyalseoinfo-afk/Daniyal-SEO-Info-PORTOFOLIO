import { SITE_URL, SITE_INFO, getCanonicalUrl } from './siteConfig';
import { PageRoute } from '../types';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

/**
 * Builds the canonical site-level entity graph (Person + WebSite + ProfessionalService)
 */
export function getRootEntityGraph() {
  return [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      'name': SITE_INFO.name,
      'url': `${SITE_URL}/`,
      'jobTitle': 'SEO Specialist',
      'description': 'SEO Specialist in Karachi, Pakistan focused on technical SEO audits, search intent mapping, crawl efficiency, on-page optimization, and local search growth.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': SITE_INFO.city,
        'addressRegion': SITE_INFO.region,
        'addressCountry': SITE_INFO.countryCode,
      },
      'sameAs': [
        SITE_INFO.linkedinUrl,
        SITE_INFO.githubUrl,
      ],
      'knowsAbout': [
        'Search Engine Optimization',
        'Technical SEO Audits',
        'Crawl Budget & Indexation Diagnostics',
        'Information Architecture & Internal Linking',
        'Search Intent & Keyword Clustering',
        'Local SEO Karachi & Google Maps Optimization',
        'Google Search Console Analysis',
        'Core Web Vitals Remediation',
        'Screaming Frog SEO Spider'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'url': `${SITE_URL}/`,
      'name': `${SITE_INFO.name} — SEO Specialist Portfolio`,
      'description': 'Technical SEO audits, search architecture, keyword clustering, and localized search growth systems by Daniyal Asad.',
      'publisher': {
        '@id': `${SITE_URL}/#person`
      },
      'inLanguage': 'en-US'
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      'name': 'Daniyal Asad SEO Consultancy',
      'description': 'Technical SEO audits, search intent analysis, crawl troubleshooting, and local search optimization for businesses in Karachi and remote clients.',
      'url': `${SITE_URL}/`,
      'provider': {
        '@id': `${SITE_URL}/#person`
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': SITE_INFO.city,
        'addressRegion': SITE_INFO.region,
        'addressCountry': SITE_INFO.countryCode,
      },
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Karachi'
        },
        {
          '@type': 'Country',
          'name': 'Pakistan'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Worldwide Remote'
        }
      ]
    }
  ];
}

/**
 * Builds structured JSON-LD for a specific page including breadcrumbs and optional FAQs
 */
export function buildPageSchema(options: {
  route: PageRoute;
  path: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqSchemaItem[];
}) {
  const canonicalUrl = getCanonicalUrl(options.path);
  const graph: any[] = [...getRootEntityGraph()];

  // WebPage Schema
  const webPageSchema: any = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    'url': canonicalUrl,
    'name': options.title,
    'description': options.description,
    'isPartOf': {
      '@id': `${SITE_URL}/#website`
    },
    'about': {
      '@id': `${SITE_URL}/#person`
    },
    'inLanguage': 'en-US'
  };

  // BreadcrumbList Schema
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    const itemListElement = options.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': getCanonicalUrl(item.path)
    }));

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      'itemListElement': itemListElement
    });

    webPageSchema.breadcrumb = {
      '@id': `${canonicalUrl}#breadcrumb`
    };
  }

  graph.push(webPageSchema);

  // FAQPage Schema
  if (options.faqs && options.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      'mainEntity': options.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}
