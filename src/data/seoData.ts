import { ServiceItem, CaseStudy, BlogPost, ProcessStep, ToolItem, FaqItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Daniyal',
  title: 'Junior SEO Executive',
  city: 'Karachi',
  country: 'Pakistan',
  email: 'daniyalseoinfo@gmail.com',
  linkedin: 'https://linkedin.com/in/daniyal-seo',
  experienceYears: '2+ Years Hands-On Experience',
  shortBio: 'I help businesses improve how they appear in Google Search through keyword research, on-page optimization, technical SEO, local SEO and search performance analysis.',
  coreKeywords: [
    'SEO Services in Karachi',
    'professional SEO services Karachi',
    'best SEO services in Karachi'
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'technical-seo',
    slug: 'technical-seo-services-karachi',
    number: '01',
    title: 'Technical SEO',
    shortDesc: 'Find crawling, indexing, architecture and performance problems that can restrict organic visibility.',
    fullDesc: 'Search engines must be able to crawl, render, index, and understand your website without encountering dead ends, render-blocking scripts, broken redirect loops, or bloated site structure.',
    iconName: 'Server',
    tags: ['Indexing', 'CWV', 'Schema', 'Crawlability'],
    features: [
      'Crawl Budget & Server Log Diagnostics',
      'XML Sitemap & robots.txt Configuration',
      'Core Web Vitals & PageSpeed Performance',
      'Canonicalization & Duplicate Content Resolution',
      'Structured Data (JSON-LD Schema Markup)',
      'Internal Linking Graph & Orphan Page Detection'
    ],
    deliverables: [
      'Comprehensive Screaming Frog Crawl Audit (HTML & JS rendering)',
      'Actionable prioritized technical bug backlog (P1, P2, P3)',
      'Custom JSON-LD schema snippets ready for deployment',
      'Core Web Vitals remediation action list for developers'
    ],
    route: 'technical-seo-services-karachi'
  },
  {
    id: 'on-page-seo',
    slug: 'on-page-seo-services-karachi',
    number: '02',
    title: 'On-Page SEO',
    shortDesc: 'Improve page targeting, content hierarchy and relevance around real search intent.',
    fullDesc: 'Align your page architecture, metadata, headings, and semantic body content to directly satisfy user queries while ensuring clear signals for search algorithms.',
    iconName: 'LayoutTemplate',
    tags: ['Search Intent', 'Metadata', 'Heading Hierarchy', 'Internal Links'],
    features: [
      'Search Intent Mapping (Informational, Navigational, Commercial, Transactional)',
      'Optimized Title Tags & Meta Descriptions that improve CTR',
      'Heading Architecture (H1, H2, H3 logical flow)',
      'Strategic Contextual Internal Linking & Anchor Text Planning',
      'Image Optimization (Alt text, WebP format, contextual placement)',
      'Content Gap Analysis vs Top Ranking Karachi & Global Competitors'
    ],
    deliverables: [
      'Target page-by-page On-Page optimization sheet',
      'Ready-to-publish meta tags & headline recommendations',
      'Internal link mapping matrix with anchor text guidelines',
      'Content refinement guidelines targeting high-intent SERP features'
    ],
    route: 'on-page-seo-services-karachi'
  },
  {
    id: 'keyword-research',
    slug: 'keyword-research-services-karachi',
    number: '03',
    title: 'Keyword Research',
    shortDesc: 'Turn keyword data into clear clusters and pages instead of an unorganized spreadsheet.',
    fullDesc: 'Keyword research is not just pulling search volume metrics. It is mapping consumer query language, evaluating competitor rank authority, and clustering topics into clear page architectures.',
    iconName: 'SearchCode',
    tags: ['Topic Clusters', 'Search Intent', 'SERP Analysis', 'Volume & Difficulty'],
    features: [
      'Commercial & Transactional Query Identification',
      'Topical Clustering & Semantic Keyword Grouping',
      'SERP Competitor Difficulty & Ranking Opportunity Analysis',
      'Long-tail & Question Query Extraction for FAQ/Guides',
      'Local Karachi Search Variations & Urdu-English Transliterated Queries',
      'Keyword-to-URL Mapping Architecture'
    ],
    deliverables: [
      'Categorized Keyword Master Database in Google Sheets / Excel',
      'Topical cluster visual roadmap for site expansion',
      'Priority score matrix balancing search volume, intent & ranking difficulty',
      'Recommended URL mapping table with target primary & secondary keywords'
    ],
    route: 'keyword-research-services-karachi'
  },
  {
    id: 'local-seo',
    slug: 'local-seo-services-karachi',
    number: '04',
    title: 'Local SEO',
    shortDesc: 'Strengthen location relevance for businesses that want to be discovered by customers in Karachi.',
    fullDesc: 'Help your business capture high-intent local queries in Karachi (DHA, Clifton, Gulshan-e-Iqbal, PECHS, Korangi, North Nazimabad, etc.) on Google Maps and Local Pack results.',
    iconName: 'MapPin',
    tags: ['Google Business Profile', 'Local Pack', 'NAP Citations', 'Geo Signals'],
    features: [
      'Google Business Profile (GBP) Audit & Complete Optimization',
      'Localized On-Page Signals & Karachi Area Landing Pages',
      'NAP Consistency Audit (Name, Address, Phone across Pakistani directories)',
      'Local Keyword Research (e.g. "near me", "in Karachi", "DHA Karachi")',
      'Local Citation Building & Local Authority Signals',
      'Review Generation Workflow & Customer Feedback Strategies'
    ],
    deliverables: [
      'GBP optimization scorecard and category alignment',
      'Local landing page template with LocalBusiness JSON-LD markup',
      'NAP citation audit and cleanup spreadsheet',
      'Localized content & review response playbook'
    ],
    route: 'local-seo-services-karachi'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'karachi-ecommerce-tech-audit',
    title: 'Technical Crawl & Indexation Overhaul for a Pakistani Apparel Brand',
    clientType: 'E-Commerce Website (Karachi-based Fashion Store)',
    location: 'Karachi, Pakistan',
    category: 'Technical',
    status: 'AUDIT PROJECT',
    challenge: 'A multi-brand Karachi apparel store was suffering from severe index bloat, with over 14,000 faceted filter URLs indexed while primary category landing pages remained uncrawled due to crawl budget exhaustion.',
    myRole: 'Junior SEO Executive (Crawl Diagnostics, Robots Configuration & Canonical Setup)',
    servicesPerformed: [
      'Screaming Frog In-Depth Crawl Audit',
      'Faceted Navigation Parameter Handling in GSC & robots.txt',
      'Canonical Tag Restructuring',
      'XML Sitemap Segmentation by Category and Stock Status',
      'Core Web Vitals Audit on Mobile Viewports'
    ],
    toolsUsed: ['Screaming Frog', 'Google Search Console', 'PageSpeed Insights', 'Google Sheets'],
    findings: [
      'Over 9,200 thin filter pages (color/size parameters) indexed creating massive duplicate content',
      'Server response time (TTFB) spiking over 2.4s due to unoptimized database queries on filter pages',
      'Missing self-referencing canonical tags on main collection pages',
      'Over 340 broken 404 links within high-priority category navigation menus'
    ],
    actionsTaken: [
      'Added strict disallow directives for non-indexable filter parameter patterns in robots.txt',
      'Implemented clean rel="canonical" tags pointing back to parent category pages',
      'Fixed broken internal navigation links and created clean XML sitemaps with only 200 OK URLs',
      'Compressed high-resolution fashion banner images into WebP with responsive srcset attributes'
    ],
    resultSummary: 'Demonstrated reduction of over 8,000 non-essential URLs in Google Search Console crawl reports, freeing crawl budget for high-priority seasonal product collections.',
    keyMetrics: [
      { label: 'Index Bloat Cleared', value: '8,000+', detail: 'Low-value faceted URLs removed from index queue' },
      { label: 'Crawl Efficiency', value: '3.2x', detail: 'More frequent bot visits on core revenue pages' },
      { label: 'Status Code Health', value: '99.4%', detail: 'Zero 404 navigation errors remaining' }
    ],
    imageSrc: '/src/assets/images/seo_audit_case_1787128852303.jpg',
    keyLearning: 'Faceted navigation on e-commerce sites can silently destroy search visibility if search crawlers get trapped in infinite parameter permutations.'
  },
  {
    id: 'local-dental-clinic-karachi',
    title: 'Local SEO Strategy & Google Business Profile Optimization for Clifton Healthcare',
    clientType: 'Private Medical & Dental Clinic',
    location: 'Clifton & DHA, Karachi',
    category: 'Local SEO',
    status: 'AUDIT PROJECT',
    challenge: 'A dental clinic in Clifton Karachi was failing to rank in Google Maps 3-Pack for high-intent queries like "dental clinic near me", "teeth whitening Karachi", and "dentist in DHA Karachi", losing patients to nearby practices.',
    myRole: 'Local SEO Strategist & On-Page Optimizer',
    servicesPerformed: [
      'Google Business Profile Full Audit & Category Optimization',
      'Local Keyword Intent & Competitor SERP Analysis in Karachi',
      'On-Page Local Landing Page Structuring with Clinic Schema',
      'Local Pakistani Medical Directory Citations Alignment',
      'Patient Review Strategy Playbook'
    ],
    toolsUsed: ['Google Business Profile', 'Google Search Console', 'Ahrefs', 'Google Maps'],
    findings: [
      'Primary GBP category was set too broadly ("Medical Center" instead of "Dental Clinic")',
      'Name, Address, Phone (NAP) discrepancies between website and social business listings',
      'Zero localized structured data (Physician / Dentist Schema) present on service pages',
      'No dedicated service-specific landing pages for specialized dental procedures'
    ],
    actionsTaken: [
      'Refined primary and secondary GBP categories with verified service attributes and working hours',
      'Authored schema-rich localized landing pages targeting specific neighborhoods (Clifton, DHA Karachi)',
      'Standardized NAP details across all digital profiles and healthcare directories in Pakistan',
      'Designed a smooth WhatsApp-integrated post-visit review request workflow for clinic reception'
    ],
    resultSummary: 'Optimized local search footprint ensuring clean local entity signals, direct click-to-call conversions, and heightened Google Maps local relevance.',
    keyMetrics: [
      { label: 'Target Local Queries', value: '25+', detail: 'Mapped to dedicated localized treatment pages' },
      { label: 'NAP Consistency', value: '100%', detail: 'Synchronized across all Pakistani directories' },
      { label: 'Schema Coverage', value: 'Complete', detail: 'LocalBusiness & Dentist JSON-LD deployed' }
    ],
    imageSrc: '/src/assets/images/local_seo_case_1787128891837.jpg',
    keyLearning: 'For local businesses in Karachi, pinpoint category selection in GBP and geo-specific on-page signals determine 80% of local pack ranking potential.'
  },
  {
    id: 'b2b-logistics-keyword-cluster',
    title: 'Commercial Keyword Clustering & On-Page Content Architecture for Freight Operator',
    clientType: 'B2B Logistics & Customs Brokerage Firm',
    location: 'Karachi Port / Korangi Industrial Area',
    category: 'Keyword Research',
    status: 'KEYWORD RESEARCH',
    challenge: 'The logistics company had a 5-page generic brochure website targeting broad terms like "shipping" with zero distinction between customs clearance, air freight, ocean freight, and warehousing in Karachi.',
    myRole: 'Junior SEO Executive (Keyword Clustering & Content Blueprinting)',
    servicesPerformed: [
      'Comprehensive B2B Keyword Research for Pakistani Trade & Logistics',
      'Search Intent Classification (Transactional vs Informational)',
      'Topical Cluster Architecture & URL Taxonomy Design',
      'On-Page Optimization Templates for Port & Customs Services'
    ],
    toolsUsed: ['Semrush', 'Google Keyword Planner', 'Google Trends', 'Google Sheets'],
    findings: [
      'Over 85% of potential B2B searches used specific terminology like "customs clearance agent Karachi port" or "LCL consolidation Pakistan"',
      'High search intent with virtually zero authoritative competition on specialized port logistics queries',
      'Existing homepage suffered from keyword cannibalization trying to rank for 12 distinct service types simultaneously'
    ],
    actionsTaken: [
      'Constructed a 4-pillar keyword cluster covering 68 commercial long-tail queries',
      'Mapped dedicated service landing pages for Karachi Port, Port Qasim, and Air Cargo operations',
      'Drafted metadata, H1/H2 hierarchies, and technical FAQ schema for each specialized service page',
      'Structured a clear B2B quotation funnel to convert commercial search intent into inquiry leads'
    ],
    resultSummary: 'Delivered an actionable 25-page content and keyword architecture blueprint ready for implementation with prioritized commercial value scoring.',
    keyMetrics: [
      { label: 'Keywords Clustered', value: '120+', detail: 'Grouped by search intent & commercial value' },
      { label: 'Cluster Pillars', value: '4 Pillars', detail: 'Customs, Ocean, Air & Karachi Warehousing' },
      { label: 'Cannibalization', value: 'Resolved', detail: 'Dedicated 1-to-1 URL-to-keyword mapping' }
    ],
    imageSrc: '/src/assets/images/daniyal_portrait_1787128804384.jpg',
    keyLearning: 'In B2B industrial markets like Karachi, specific commercial keywords outperform generic high-volume terms by 10x in conversion rate.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'core-web-vitals-karachi-hosting',
    slug: 'core-web-vitals-slow-karachi-hosting',
    title: 'Diagnosing Core Web Vitals for Websites Hosted in Pakistan: LCP, INP & TTFB',
    category: 'Technical SEO',
    publishedDate: 'Aug 2026',
    readTime: '6 min read',
    summary: 'A technical breakdown of why Pakistani websites struggle with Core Web Vitals, how high latency to overseas hosting servers impacts TTFB, and actionable fixes for LCP and INP.',
    tableOfContents: [
      'The Pakistani Hosting Latency Reality',
      'Largest Contentful Paint (LCP) Bottlenecks',
      'Interaction to Next Paint (INP) Explained',
      'Practical CDN & Asset Optimization Guide',
      'Summary Checklist for Developers'
    ],
    content: [
      'When auditing websites for businesses in Karachi, one of the most common technical hurdles is high Time to First Byte (TTFB). Many Pakistani businesses use shared hosting located in North America or Europe, causing 250ms+ network roundtrips before the first byte reaches a user in Karachi.',
      'To solve Largest Contentful Paint (LCP), you must optimize the critical rendering path: serve properly sized modern image formats (AVIF/WebP), avoid render-blocking CSS stylesheets, and preconnect to critical CDN domains.',
      'Interaction to Next Paint (INP), which replaced FID as a core metric, measures how quickly the page responds to user clicks and keystrokes. Avoid heavy third-party tracking scripts that monopolize the browser main thread.',
      'By implementing Cloudflare edge caching, minifying CSS/JS payloads, and prioritizing hero asset loading, you can achieve sub-1.2s LCP even on mobile connections across Pakistan.'
    ],
    tags: ['Core Web Vitals', 'Technical SEO', 'LCP', 'INP', 'PageSpeed']
  },
  {
    id: 'local-seo-karachi-complete-guide',
    slug: 'local-seo-karachi-business-guide',
    title: 'Local SEO in Karachi: How to Rank in Google Maps & 3-Pack for Neighborhoods',
    category: 'Local SEO',
    publishedDate: 'Jul 2026',
    readTime: '8 min read',
    summary: 'Step-by-step strategy for Karachi retail, healthcare, and professional services to capture local search visibility across DHA, Clifton, Gulshan, and PECHS.',
    tableOfContents: [
      'Understanding Google Local Algorithm Signals',
      'Google Business Profile Precision Setup',
      'Neighborhood Landing Pages & Geo-Relevance',
      'Building Pakistani Citations & Directories',
      'Review Management that Builds Local Trust'
    ],
    content: [
      'Karachi is a massive metropolis with distinct commercial zones. Search queries with geo-intent like "best physiotherapist in DHA Karachi" or "office interior designer Gulshan-e-Iqbal" require hyper-local targeting.',
      'Your Google Business Profile (GBP) is the cornerstone of local search. Ensure exact primary category alignment, upload geotagged authentic photos of your actual premises, and maintain active business hours.',
      'Creating dedicated neighborhood landing pages with embedded LocalBusiness schema and distinct local landmarks gives search engines strong semantic location signals.',
      'Consistent NAP (Name, Address, Phone) information across Pakistani directories like BusinessList.pk, PakYellowPages, and industry-specific portals cements your entity in Google Knowledge Graph.'
    ],
    tags: ['Local SEO', 'Karachi SEO', 'Google Maps', 'GBP', 'Local Pack']
  },
  {
    id: 'keyword-cannibalization-audit',
    slug: 'keyword-cannibalization-audit-guide',
    title: 'How to Detect and Fix Keyword Cannibalization: A Practical GSC Workflow',
    category: 'Keyword Research',
    publishedDate: 'Jun 2026',
    readTime: '5 min read',
    summary: 'When multiple pages on your site compete for the same search query, Google gets confused and splits your ranking power. Here is how I diagnose and resolve it using Google Search Console.',
    tableOfContents: [
      'What Keyword Cannibalization Really Means',
      'Spotting Query Fluctuations in Search Console',
      'The 4 Solutions: 301 Redirect, Canonical, De-optimize, or Consolidate',
      'Preventing Cannibalization with URL Mapping'
    ],
    content: [
      'Keyword cannibalization occurs when search engines cannot determine which URL on your site is the authoritative source for a given query, causing two or more URLs to constantly swap ranking positions in the SERPs.',
      'In Google Search Console, filter by a specific search query and inspect the Pages tab. If impressions and clicks are split between two similar pages, you are cannibalizing your own authority.',
      'To resolve it: either consolidate both articles into one authoritative cornerstone guide and 301 redirect the weaker URL, use canonical tags if both pages must exist for UX reasons, or de-optimize one page by adjusting its H1 and title tag toward a different secondary intent.',
      'Maintaining a living Keyword-to-URL mapping sheet ensures your team never publishes competing content for existing targeted keywords.'
    ],
    tags: ['Keyword Research', 'Google Search Console', 'On-Page SEO', 'Search Intent']
  }
];

export const SEO_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Understand',
    tagline: 'Business, Audience, Website & Goals',
    description: 'Every SEO campaign starts with honest discovery. I look at your business model, customer journey, target market in Karachi or globally, revenue drivers, and current search hurdles.',
    deliverables: ['Discovery Brief', 'Commercial Priority Matrix', 'Competitor Landscape Overview'],
    metrics: ['Target Audience Intent', 'Key Conversion Actions']
  },
  {
    stepNumber: '02',
    title: 'Audit',
    tagline: 'Review Technical Health & Current Search Performance',
    description: 'A deep-dive diagnosis analyzing how search bots crawl, render, index, and evaluate your site. I identify technical bottlenecks, broken paths, index bloat, and Core Web Vitals issues.',
    deliverables: ['Screaming Frog Crawl Report', 'Technical Defect Backlog', 'Search Console Health Scorecard'],
    metrics: ['Indexed vs Excluded Ratio', 'Core Web Vitals Scores', 'Crawl Error Rate']
  },
  {
    stepNumber: '03',
    title: 'Research',
    tagline: 'Analyze Keywords, Intent & Competitors',
    description: 'Identifying the exact queries potential clients use. I evaluate search intent, analyze SERP structures, group queries into topic clusters, and construct a logical URL architecture.',
    deliverables: ['Topical Keyword Clusters', 'Search Intent Matrix', 'Competitor Content Gap Sheet'],
    metrics: ['Commercial Intent Density', 'SERP Difficulty Scores', 'Search Volume Estimates']
  },
  {
    stepNumber: '04',
    title: 'Optimize',
    tagline: 'Improve Content, Pages & Technical Elements',
    description: 'Executing targeted optimizations on metadata, heading hierarchy, contextual internal links, schema markup, and content depth to directly satisfy search intent better than competitors.',
    deliverables: ['Page-by-Page Metadata Sheet', 'JSON-LD Schema Files', 'Internal Linking Implementation'],
    metrics: ['Keyword Relevance Alignment', 'CTR Enhancement Signals', 'DOM Structure Health']
  },
  {
    stepNumber: '05',
    title: 'Measure',
    tagline: 'Monitor Search Console, GA4 & Organic Performance',
    description: 'Tracking how Google reacts to changes. We monitor impressions, average ranking positions, organic clicks, index coverage, and actual commercial inquiry leads.',
    deliverables: ['Search Console Performance Review', 'GA4 Organic Traffic Report', 'Next Sprint Optimization Plan'],
    metrics: ['Organic Impressions & Clicks', 'Average Position Trends', 'Conversion Leads']
  }
];

export const TOOL_STACK: ToolItem[] = [
  {
    name: 'Google Search Console',
    category: 'Search Diagnostics',
    usage: 'Queries • Pages • Indexing • CTR • Core Web Vitals',
    features: ['Real Google Search Performance Data', 'URL Inspection & Index Coverage', 'Sitemap Submission & Crawl Stats', 'Manual Actions & Security Check'],
    tag: 'Primary Tool'
  },
  {
    name: 'Screaming Frog SEO Spider',
    category: 'Technical Crawling',
    usage: 'Crawl Depth • Status Codes • Canonicalization • Redirects',
    features: ['Full JavaScript Rendering Crawls', 'Broken Link & Redirect Loop Detection', 'Duplicate Metadata Identification', 'Custom XPath & Schema Extraction'],
    tag: 'Technical Audit'
  },
  {
    name: 'Google Analytics 4 (GA4)',
    category: 'Traffic & Behavior',
    usage: 'Organic Sessions • User Engagement • Event Tracking',
    features: ['Organic Channel Attribution', 'Key Event & Lead Goal Tracking', 'User Journey & Bounce Patterns', 'Landing Page Engagement Time'],
    tag: 'Measurement'
  },
  {
    name: 'Ahrefs / Semrush',
    category: 'Competitive Intelligence',
    usage: 'Keyword Gap • SERP Features • Search Difficulty',
    features: ['Competitor Organic Keyword Profiles', 'Historical SERP Position Changes', 'Content Gap Analysis', 'Topical Keyword Explorer'],
    tag: 'Research'
  },
  {
    name: 'PageSpeed Insights & Lighthouse',
    category: 'Performance & UX',
    usage: 'LCP • INP • CLS • Render-Blocking Resources',
    features: ['Real-world Chrome User Experience Report (CrUX)', 'Lab Diagnostic Performance Scans', 'Asset Compression Recommendations', 'DOM Size & CSS/JS Execution Time'],
    tag: 'Core Web Vitals'
  },
  {
    name: 'Google Trends & Keyword Planner',
    category: 'Market & Intent',
    usage: 'Search Volume • Regional Seasonality • Trend Velocity',
    features: ['Pakistan & Global Search Trends', 'Commercial Bid Valuations', 'Rising Query Discovery', 'Search Seasonality Insights'],
    tag: 'Intent'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'Pricing',
    question: 'How much do SEO services cost in Karachi?',
    answer: 'SEO pricing in Karachi depends on the scope of your website, current technical health, and business goals. Unlike agencies that push expensive generic retainer packages with unneeded fluff, I provide transparent project-based audits (e.g. comprehensive technical or keyword cluster audits) or focused monthly execution plans tailored to your specific website bottlenecks.'
  },
  {
    category: 'Timeline',
    question: 'How long does SEO take to produce results?',
    answer: 'SEO is a compounding process rather than an overnight switch. Technical fixes (resolving indexation blocks or fixing canonical tags) can yield crawling improvements within days to weeks. Commercial rankings and organic traffic growth typically require 3 to 6 months of disciplined optimization, depending on competitor authority and domain history.'
  },
  {
    category: 'Services',
    question: 'What SEO services do you provide in Karachi?',
    answer: 'I specialize in hands-on Technical SEO (crawling, indexing, Core Web Vitals, schema markup), On-Page SEO (metadata, content relevance, internal linking), Keyword Research & Clustering, and Local SEO (Google Business Profile optimization and Karachi neighborhood targeting).'
  },
  {
    category: 'Guarantees',
    question: 'Can you guarantee #1 rankings on Google?',
    answer: 'No honest SEO professional can guarantee a #1 ranking, because search algorithms use hundreds of dynamic signals and Google explicitly warns against agencies making ranking guarantees. What I do guarantee is transparent, evidence-based methodology, white-hat execution adhering to Google Search Essentials, and clear measurable progress.'
  },
  {
    category: 'Local Karachi',
    question: 'Do you offer Local SEO for businesses across Karachi?',
    answer: 'Yes! I help Karachi businesses (clinics, law firms, e-commerce brands, real estate agencies, restaurants, and B2B services) improve their visibility across specific Karachi localities like DHA, Clifton, Gulshan-e-Iqbal, PECHS, Korangi, and North Nazimabad on Google Maps and Local Pack searches.'
  },
  {
    category: 'Audits',
    question: 'What is included in your Technical SEO audit?',
    answer: 'A comprehensive technical audit includes an in-depth crawl with Screaming Frog (handling HTML and JavaScript rendering), indexation and coverage review via Google Search Console, robots.txt and sitemap diagnostics, canonical and redirect audit, Core Web Vitals assessment, and a prioritized action backlog categorized by impact (P1 critical fixes to P3 enhancements).'
  }
];
