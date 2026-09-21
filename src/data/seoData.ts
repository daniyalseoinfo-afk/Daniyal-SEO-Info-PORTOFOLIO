import { ServiceItem, CaseStudy, BlogPost, ProcessStep, ToolItem, FaqItem } from '../types';
import technicalCrawlImage from '../assets/images/technical-crawl-indexation.webp';
import localSeoImage from '../assets/images/local-seo-strategy.webp';
import keywordClusteringImage from '../assets/images/keyword-clustering-on-page.webp';

export const PERSONAL_INFO = {
  name: 'Daniyal Asad',
  title: 'SEO Specialist',
  city: 'Karachi',
  region: 'Sindh',
  country: 'Pakistan',
  email: 'daniyalseoinfo@gmail.com',
  linkedin: 'https://linkedin.com/in/daniyal-seo',
  github: 'https://github.com/daniyalseoinfo-afk',
  positioning: 'Technical SEO, Search Intent & Local Organic Growth',
  shortBio: 'I diagnose and resolve technical search bottlenecks, map commercial keyword intent into structured topic clusters, and build sustainable organic search systems for websites in Karachi and remote teams.',
  coreFocusAreas: [
    'Technical SEO Audits & Crawl Diagnostics',
    'Search Intent Analysis & Keyword Clustering',
    'On-Page Semantic Hierarchy & Metadata CTR',
    'Local SEO & Google Business Profile Architecture',
    'Google Search Console & GA4 Performance Analysis'
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'technical-seo',
    slug: 'technical-seo-services-karachi',
    number: '01',
    title: 'Technical SEO Services',
    shortDesc: 'Diagnose crawling, indexing, canonicalization, and Core Web Vitals issues that restrict search performance.',
    fullDesc: 'Search engines must be able to crawl, render, index, and understand your website without hitting infinite parameter loops, broken canonicals, or render-blocking bottlenecks.',
    iconName: 'Server',
    tags: ['Index Coverage', 'Crawl Budget', 'Core Web Vitals', 'Schema Graph'],
    features: [
      'Crawl Budget & Server Log Diagnostics',
      'XML Sitemap Segmentation & robots.txt Syntax Review',
      'Core Web Vitals Remediation (LCP, INP, CLS)',
      'Canonicalization & Duplicate Content Resolution',
      'JSON-LD Structured Data Entity Architecture',
      'Internal Linking Graph & Orphan Page Detection'
    ],
    deliverables: [
      'Comprehensive Screaming Frog Crawl Audit (HTML & JavaScript rendering)',
      'Prioritized Technical Issue Backlog (Critical, High, Medium, Low)',
      'Validated JSON-LD Schema Snippets ready for deployment',
      'Developer-friendly remediation specifications for Core Web Vitals'
    ],
    route: 'technical-seo-services-karachi'
  },
  {
    id: 'on-page-seo',
    slug: 'on-page-seo-services-karachi',
    number: '02',
    title: 'On-Page SEO Services',
    shortDesc: 'Align page structure, heading hierarchy, and semantic depth directly around user search intent.',
    fullDesc: 'On-page SEO aligns page architecture, metadata, headings, and body content to satisfy search intent while establishing clear entity relationships for search engines.',
    iconName: 'LayoutTemplate',
    tags: ['Search Intent', 'CTR Metadata', 'Heading Hierarchy', 'Internal Links'],
    features: [
      'Search Intent Disambiguation (Informational, Commercial, Transactional)',
      'CTR-Engineered Title Tags & Meta Descriptions within pixel limits',
      'Logical Heading Hierarchy (One H1, Semantic H2 & H3 Flow)',
      'Contextual Internal Linking with Descriptive Anchor Text',
      'Image Optimization (Modern WebP, contextual alt text, lazy loading)',
      'Content Depth & Entity Analysis vs Top Ranking SERP Competitors'
    ],
    deliverables: [
      'Page-by-page On-Page optimization workbook',
      'Ready-to-publish meta tags and headline specifications',
      'Internal link matrix mapping cornerstone pages to supporting content',
      'Search intent satisfying content outline templates'
    ],
    route: 'on-page-seo-services-karachi'
  },
  {
    id: 'keyword-research',
    slug: 'keyword-research-services-karachi',
    number: '03',
    title: 'Keyword Research & Topic Clustering',
    shortDesc: 'Turn search query data into structured topic clusters and 1-to-1 page mapping instead of random spreadsheets.',
    fullDesc: 'Keyword research is not merely pulling monthly volume figures. It is understanding how target customers phrase problems, classifying query intent, and structuring topic clusters to prevent keyword cannibalization.',
    iconName: 'SearchCode',
    tags: ['Topic Clustering', 'Commercial Intent', 'Cannibalization Prevention', 'SERP Difficulty'],
    features: [
      'Commercial & Transactional Query Identification',
      'Topical Clustering & Semantic Keyword Grouping',
      'SERP Competitor Authority & Ranking Opportunity Scoring',
      'Long-tail & Question Query Extraction for Educational Guides',
      'Pakistani Commercial Search Terminology & Roman Urdu Transliterations',
      '1-to-1 Keyword-to-URL Architecture Mapping'
    ],
    deliverables: [
      'Structured Keyword Master Database categorized by intent & topic',
      'Topical cluster architecture diagram mapping pillars to sub-topics',
      'Prioritization scoring matrix (Search Volume, Intent, Competition)',
      'Target URL mapping table with primary and secondary keyword targets'
    ],
    route: 'keyword-research-services-karachi'
  },
  {
    id: 'local-seo',
    slug: 'local-seo-services-karachi',
    number: '04',
    title: 'Local SEO Services',
    shortDesc: 'Strengthen location relevance and Google Maps 3-Pack visibility for businesses serving Karachi.',
    fullDesc: 'Capture high-intent local queries in Karachi (DHA, Clifton, Gulshan-e-Iqbal, PECHS, Korangi, North Nazimabad) across Google Maps and localized search results.',
    iconName: 'MapPin',
    tags: ['Google Business Profile', 'Map 3-Pack', 'NAP Consistency', 'Local Citations'],
    features: [
      'Google Business Profile (GBP) Category & Attribute Optimization',
      'Localized On-Page Signals & Authentic Geo-Targeted Content',
      'NAP Consistency Audit (Name, Address, Phone across Pakistani directories)',
      'Local Keyword Intent Research (e.g., "in Karachi", "DHA Karachi", "near me")',
      'Local Citation Verification on Established Pakistani Portals',
      'Customer Review Generation Strategy & Response Playbook'
    ],
    deliverables: [
      'Google Business Profile optimization scorecard and category mapping',
      'Local landing page template with LocalBusiness JSON-LD markup',
      'NAP citation audit and discrepancy cleanup workbook',
      'Review acquisition SOP tailored to local customer touchpoints'
    ],
    route: 'local-seo-services-karachi'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'karachi-ecommerce-tech-audit',
    title: 'Technical Crawl & Indexation Overhaul for an Apparel E-Commerce Store',
    clientType: 'Apparel E-Commerce Architecture (Faceted Navigation)',
    location: 'Karachi, Pakistan',
    category: 'Technical',
    status: 'SEO Audit Exercise',
    challenge: 'A multi-brand apparel e-commerce store suffered from severe index bloat, with over 14,000 faceted filter URLs indexed while primary category landing pages remained uncrawled due to crawl budget exhaustion.',
    myRole: 'SEO Specialist (Crawl Diagnostics, Parameter Handling & Canonical Architecture)',
    servicesPerformed: [
      'Screaming Frog Deep Crawl Audit (HTML & JavaScript rendering)',
      'Faceted Navigation Parameter Disallow Directives in robots.txt',
      'Canonical Tag Restructuring across Category & Filter Variants',
      'XML Sitemap Segmentation by Product Collection and Stock Status',
      'Mobile Core Web Vitals Assessment on 4G Connections'
    ],
    toolsUsed: ['Screaming Frog SEO Spider', 'Google Search Console', 'PageSpeed Insights', 'Google Sheets'],
    findings: [
      'Over 9,200 thin filter pages (color/size parameters) indexed creating duplicate content',
      'Server response time (TTFB) exceeded 2.2s on dynamically generated filter queries',
      'Missing self-referencing canonical tags on main collection pages',
      'Over 340 broken 404 links within high-priority category navigation menus'
    ],
    actionsTaken: [
      'Designed strict disallow patterns in robots.txt for non-indexable filter query strings',
      'Mapped self-referencing rel="canonical" tags on parent category pages and parameterized variants',
      'Rebuilt XML sitemaps to include only canonical 200 OK indexable URLs',
      'Optimized hero banner images from PNG to WebP with responsive srcset attributes'
    ],
    resultSummary: 'Demonstrated resolution of crawl budget waste by removing low-value faceted URLs from the index queue and restoring bot crawling frequency to revenue-driving category pages.',
    keyMetrics: [
      { label: 'Index Bloat Identified', value: '8,000+ URLs', detail: 'Faceted parameters isolated from search crawl' },
      { label: 'Crawl Efficiency Target', value: 'Optimized', detail: 'Bot requests redirected to canonical catalog' },
      { label: 'Verified Outcome Status', value: '[ADD REAL CLIENT RESULT]', detail: 'Awaiting verified production GSC screenshot' }
    ],
    imageSrc: technicalCrawlImage,
    keyLearning: 'Faceted navigation on e-commerce sites can silently destroy search visibility if search crawlers get trapped in infinite parameter permutations.'
  },
  {
    id: 'local-dental-clinic-karachi',
    title: 'Local SEO Strategy & Google Business Profile Architecture for Clifton Healthcare',
    clientType: 'Private Medical & Healthcare Practice',
    location: 'Clifton & DHA, Karachi',
    category: 'Local SEO',
    status: 'SEO Strategy Exercise',
    challenge: 'A healthcare practice in Clifton was invisible in the Google Maps 3-Pack for high-intent local searches like "clinic in Clifton Karachi" and "specialist near me", conceding patient discovery to competing practices.',
    myRole: 'Local SEO Specialist (Local Entity Architecture, GBP Alignment & Citations)',
    servicesPerformed: [
      'Google Business Profile Category & Attribute Optimization',
      'Local Keyword Intent & Competitor SERP Analysis in Karachi',
      'On-Page Local Landing Page Structuring with LocalBusiness Schema',
      'NAP Consistency Audit across Pakistani Business Directories',
      'Patient Review Acquisition & Feedback Playbook'
    ],
    toolsUsed: ['Google Business Profile', 'Google Search Console', 'Ahrefs', 'Google Maps'],
    findings: [
      'Primary GBP category was set too broadly, missing high-intent specialty queries',
      'Name, Address, Phone (NAP) discrepancies between website and social business listings',
      'No localized structured data (Physician / LocalBusiness Schema) present on service pages',
      'Absence of dedicated treatment pages targeting specific neighborhood search intent'
    ],
    actionsTaken: [
      'Aligned primary and secondary GBP categories with verified service attributes and consulting hours',
      'Authored schema-rich localized landing pages targeting Clifton and DHA patient catchment areas',
      'Standardized NAP details across all digital profiles and healthcare directories in Pakistan',
      'Designed a compliant post-consultation review request workflow for reception staff'
    ],
    resultSummary: 'Established a localized search foundation ensuring consistent NAP signals, direct click-to-call conversions, and heightened Google Maps local relevance.',
    keyMetrics: [
      { label: 'Local Queries Mapped', value: '25+ Queries', detail: 'Targeted to specific neighborhood treatment pages' },
      { label: 'NAP Consistency', value: '100% Target', detail: 'Synchronized across Pakistani directories' },
      { label: 'Verified Outcome Status', value: '[ADD REAL CLIENT RESULT]', detail: 'Awaiting verified GSC & Map Pack analytics' }
    ],
    imageSrc: localSeoImage,
    keyLearning: 'For local businesses in Karachi, pinpoint primary category selection in GBP and geo-specific on-page signals account for the majority of local 3-pack visibility.'
  },
  {
    id: 'b2b-logistics-keyword-cluster',
    title: 'Commercial Keyword Clustering & Content Architecture for Port Logistics Operator',
    clientType: 'B2B Logistics & Customs Brokerage Firm',
    location: 'Karachi Port / Korangi Industrial Area',
    category: 'Keyword Research',
    status: 'Demonstration Project',
    challenge: 'The logistics firm operated a 5-page brochure website targeting broad terms like "shipping" with zero distinction between customs clearance, air freight, ocean freight, and bonded warehousing in Karachi.',
    myRole: 'SEO Specialist (Keyword Clustering, Search Intent Classification & Architecture Blueprint)',
    servicesPerformed: [
      'B2B Keyword Research for Pakistani Trade & Logistics Operators',
      'Search Intent Classification (Transactional vs Informational)',
      'Topical Cluster Architecture & URL Taxonomy Design',
      'On-Page Optimization Templates for Port & Customs Services'
    ],
    toolsUsed: ['Semrush', 'Google Keyword Planner', 'Google Trends', 'Google Sheets'],
    findings: [
      'Over 85% of high-converting B2B searches used specific terminology like "customs clearance agent Karachi port"',
      'High search intent with minimal authoritative competition on specialized port logistics queries',
      'Homepage suffered from keyword cannibalization trying to rank for 12 distinct service types simultaneously'
    ],
    actionsTaken: [
      'Constructed a 4-pillar keyword cluster covering 68 commercial long-tail queries',
      'Mapped dedicated service landing pages for Karachi Port, Port Qasim, and Air Cargo operations',
      'Drafted metadata, H1/H2 hierarchies, and technical FAQ schema for each specialized service page',
      'Structured a clear B2B inquiry funnel to convert commercial search intent into qualified leads'
    ],
    resultSummary: 'Delivered an actionable 25-page content and keyword architecture blueprint ready for implementation with prioritized commercial value scoring.',
    keyMetrics: [
      { label: 'Keywords Clustered', value: '120+ Queries', detail: 'Classified by intent and commercial value' },
      { label: 'Cluster Pillars', value: '4 Pillars', detail: 'Customs, Ocean Freight, Air Freight & Warehousing' },
      { label: 'Verified Outcome Status', value: '[ADD REAL CLIENT RESULT]', detail: 'Awaiting verified GA4 organic conversion metrics' }
    ],
    imageSrc: keywordClusteringImage,
    keyLearning: 'In B2B industrial markets like Karachi, specific commercial keywords outperform generic high-volume terms by 10x in qualified inquiry rate.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'core-web-vitals-karachi-hosting',
    slug: 'core-web-vitals-slow-karachi-hosting',
    title: 'Diagnosing Core Web Vitals for Websites Hosted in Pakistan: LCP, INP & TTFB',
    category: 'Technical SEO',
    publishedDate: 'Sep 2026',
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
    id: 'keyword-cannibalization-audit',
    slug: 'keyword-cannibalization-audit-guide',
    title: 'How to Detect and Fix Keyword Cannibalization: A Practical GSC Workflow',
    category: 'Keyword Research',
    publishedDate: 'Aug 2026',
    readTime: '5 min read',
    summary: 'When multiple pages on your site compete for the same search query, Google splits your ranking power. Here is how I diagnose and resolve it using Google Search Console.',
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
      'Karachi is a massive metropolis with distinct commercial zones. Search queries with geo-intent like "best clinic in DHA Karachi" or "office furniture Gulshan-e-Iqbal" require hyper-local targeting.',
      'Your Google Business Profile (GBP) is the cornerstone of local search. Ensure exact primary category alignment, upload geotagged authentic photos of your actual premises, and maintain active business hours.',
      'Creating dedicated neighborhood landing pages with embedded LocalBusiness schema and distinct local landmarks gives search engines strong semantic location signals.',
      'Consistent NAP (Name, Address, Phone) information across Pakistani directories like BusinessList.pk, PakYellowPages, and industry-specific portals cements your entity in Google Knowledge Graph.'
    ],
    tags: ['Local SEO', 'Karachi SEO', 'Google Maps', 'GBP', 'Local Pack']
  },
  {
    id: 'technical-seo-audit-process-guide',
    slug: 'technical-seo-audit-process-guide',
    title: 'My Technical SEO Audit Process: Crawl Traps, Canonical Loops & Indexation',
    category: 'Technical SEO',
    publishedDate: 'Jun 2026',
    readTime: '7 min read',
    summary: 'A step-by-step walkthrough of my technical SEO audit process using Screaming Frog, Search Console coverage reports, and ICE prioritization.',
    tableOfContents: [
      'Step 1: Configuration & Full Site Crawl',
      'Step 2: GSC Coverage & Indexation Pipeline',
      'Step 3: Canonical Parity & Redirect Loops',
      'Step 4: JavaScript Rendering & Hydration Checks',
      'Step 5: Prioritizing Fixes using the ICE Framework'
    ],
    content: [
      'A technical SEO audit should never be an automated 80-page PDF export with generic recommendations. It must be an analytical investigation into what is currently blocking search bots from crawling, indexing, and properly ranking your revenue-driving pages.',
      'We start by configuring Screaming Frog to mirror Googlebot: honoring robots.txt, checking canonicals, following internal redirects, and rendering JavaScript if the site is built on React, Vue, or Next.js.',
      'Next, we cross-reference crawl data with Google Search Console Index Coverage. URLs marked as "Crawled - currently not indexed" or "Discovered - currently not indexed" often point to thin content, duplicate parameter loops, or internal linking deficiencies.',
      'Finally, every discovered issue is filtered through the ICE Framework (Impact, Confidence, Effort) to give development teams an immediate, prioritized sprint backlog.'
    ],
    tags: ['Technical SEO', 'Screaming Frog', 'Crawl Budget', 'Indexing', 'ICE Framework']
  }
];

export const SEO_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Research & Discover',
    tagline: 'Business Model, Search Intent & Technical Baseline',
    description: 'Every engagement begins with clear discovery. I evaluate your business model, customer journey, current search visibility in Karachi or globally, and identify existing technical bottlenecks.',
    deliverables: ['Discovery Summary', 'Current Visibility Baseline', 'Competitor Landscape Overview'],
    metrics: ['Search Intent Profile', 'Core Conversion Points']
  },
  {
    stepNumber: '02',
    title: 'Diagnose & Crawl',
    tagline: 'In-Depth Technical Crawl & Search Console Audit',
    description: 'An analytical investigation into how search bots crawl, render, index, and evaluate your site. I pinpoint crawl traps, index bloat, broken redirects, and Core Web Vitals issues.',
    deliverables: ['Screaming Frog Crawl Log Analysis', 'Index Coverage Diagnosis', 'Prioritized Defect Backlog'],
    metrics: ['Indexed vs Excluded Ratio', 'Core Web Vitals Scores', 'Crawl Error Rate']
  },
  {
    stepNumber: '03',
    title: 'Prioritize (ICE)',
    tagline: 'Score Fixes by Impact, Confidence & Effort',
    description: 'Not all SEO issues have equal business value. I categorize every recommendation into Critical, High, Medium, and Low priorities so engineering and content teams tackle highest-ROI fixes first.',
    deliverables: ['ICE Prioritization Matrix', 'Sprint Action Plan', 'Technical Specification Tickets'],
    metrics: ['Expected Search Impact', 'Implementation Effort Level']
  },
  {
    stepNumber: '04',
    title: 'Implement & Optimize',
    tagline: 'On-Page Architecture, Metadata, Schema & Content Depth',
    description: 'Executing targeted optimizations on metadata, heading hierarchy, contextual internal links, schema markup, and content depth to directly satisfy search intent better than competitors.',
    deliverables: ['Page-by-Page Metadata Workbook', 'JSON-LD Schema Implementation', 'Internal Link Graph Matrix'],
    metrics: ['Search Intent Alignment', 'CTR Optimization Score', 'DOM Structure Health']
  },
  {
    stepNumber: '05',
    title: 'Measure & Iterate',
    tagline: 'Track Search Console Queries, CTR & Organic Conversions',
    description: 'Monitoring how Google reacts to changes over 30, 60, and 90 days. We track non-branded search impressions, average position trends, crawl frequency, and qualified inquiry conversions.',
    deliverables: ['Search Console Query Diagnostics', 'GA4 Organic Traffic Report', 'Next Sprint Optimization Roadmap'],
    metrics: ['Non-Branded Query Impressions', 'Average Position Trends', 'Qualified Organic Inquiries']
  }
];

export const TOOL_STACK: ToolItem[] = [
  {
    name: 'Google Search Console',
    category: 'Search Diagnostics',
    usage: 'Query Impressions • Click-Through Rates • Index Coverage • Core Web Vitals',
    features: ['Real Google Search Performance Data', 'URL Inspection & Index Pipeline', 'XML Sitemap Submission & Crawl Stats', 'Mobile Usability Diagnostics'],
    tag: 'Primary Tool'
  },
  {
    name: 'Screaming Frog SEO Spider',
    category: 'Technical Crawling',
    usage: 'Crawl Depth • Status Codes • Canonicalization • Redirect Loops',
    features: ['JavaScript Rendering Crawls', 'Broken Link & Redirect Diagnostics', 'Duplicate Metadata Identification', 'Custom XPath Extraction'],
    tag: 'Technical Audit'
  },
  {
    name: 'Google Analytics 4 (GA4)',
    category: 'Traffic & Behavior',
    usage: 'Organic Channel Attribution • Engagement Time • Lead Event Tracking',
    features: ['Organic Search Conversion Paths', 'Landing Page Engagement Rates', 'User Journey Tracking', 'Custom Lead Event Attribution'],
    tag: 'Measurement'
  },
  {
    name: 'Ahrefs / Semrush',
    category: 'Competitive Intelligence',
    usage: 'Keyword Gap Analysis • SERP Feature Evaluation • Search Difficulty',
    features: ['Competitor Organic Keyword Profiles', 'Historical SERP Position Changes', 'Content Gap Analysis', 'Topical Keyword Clustering'],
    tag: 'Research'
  },
  {
    name: 'PageSpeed Insights & Lighthouse',
    category: 'Performance & CWV',
    usage: 'LCP • INP • CLS • Render-Blocking CSS/JS',
    features: ['Real-world Chrome User Experience Report (CrUX)', 'Lab Diagnostic Performance Scans', 'Asset Compression Recommendations', 'DOM Execution Profiling'],
    tag: 'Core Web Vitals'
  },
  {
    name: 'Google Trends & Keyword Planner',
    category: 'Market & Intent',
    usage: 'Search Demand Velocity • Regional Seasonality • Commercial Bid Signals',
    features: ['Pakistan & Global Search Trends', 'Commercial Intent Valuation', 'Rising Query Discovery', 'Search Seasonality Insights'],
    tag: 'Intent'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'Pricing',
    question: 'How do you structure SEO engagements in Karachi?',
    answer: 'I provide transparent, project-based audits (e.g. comprehensive Technical SEO Audits or Keyword Intent & Architecture Blueprints) or focused monthly execution retainers. Unlike agencies pushing bloated packages with useless vanity metrics, my scope focuses on specific architectural bottlenecks that block indexation and rankings.'
  },
  {
    category: 'Timeline',
    question: 'How long does SEO take to produce measurable search improvements?',
    answer: 'Technical fixes (resolving robots.txt blocks, fixing canonical loops, or cleaning up sitemaps) can produce crawl and indexing improvements within days to weeks. Commercial rankings and non-branded search traffic growth typically require 3 to 6 months of disciplined optimization, depending on competitor authority and domain history.'
  },
  {
    category: 'Services',
    question: 'What specific SEO services do you provide?',
    answer: 'I focus on four core pillars: Technical SEO (crawling, indexation, Core Web Vitals, schema markup), On-Page SEO (metadata, search intent alignment, heading hierarchy, internal linking), Keyword Research & Topic Clustering, and Local SEO (Google Business Profile optimization and Karachi geo-targeted signals).'
  },
  {
    category: 'Guarantees',
    question: 'Can you guarantee #1 rankings on Google?',
    answer: 'No honest SEO professional can guarantee a #1 ranking, as search algorithms use hundreds of dynamic signals and Google explicitly advises against hiring anyone promising guaranteed rankings. What I guarantee is transparent, evidence-based methodology, adherence to Google Search Essentials, and clear measurable progress in Search Console.'
  },
  {
    category: 'Local Karachi',
    question: 'Do you offer Local SEO for businesses across Karachi?',
    answer: 'Yes. I help Karachi businesses (healthcare clinics, professional practices, retail stores, e-commerce brands, and B2B services) improve their visibility across specific Karachi localities like DHA, Clifton, Gulshan-e-Iqbal, PECHS, Korangi, and North Nazimabad on Google Maps and Local Pack searches.'
  },
  {
    category: 'Audits',
    question: 'What is included in a Technical SEO audit?',
    answer: 'A comprehensive technical audit includes an in-depth crawl with Screaming Frog (handling HTML and JavaScript rendering), index coverage review via Google Search Console, robots.txt and sitemap diagnostics, canonical and redirect audit, Core Web Vitals assessment, and an ICE-prioritized action backlog (Impact, Confidence, Effort).'
  }
];
