export type PageRoute = 
  | 'home'
  | 'seo-services-in-karachi'
  | 'technical-seo-services-karachi'
  | 'on-page-seo-services-karachi'
  | 'local-seo-services-karachi'
  | 'keyword-research-services-karachi'
  | 'portfolio'
  | 'about'
  | 'blog'
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
  features: string[];
  deliverables: string[];
  route: PageRoute;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  location: string;
  category: 'Technical' | 'On-Page' | 'Keyword Research' | 'Local SEO' | 'Comprehensive';
  status: 'VERIFIED CASE' | 'AUDIT PROJECT' | 'KEYWORD RESEARCH' | 'ON-PAGE OPTIMIZATION' | 'DEMO / CONCEPTUAL';
  challenge: string;
  myRole: string;
  servicesPerformed: string[];
  toolsUsed: string[];
  findings: string[];
  actionsTaken: string[];
  resultSummary?: string;
  keyMetrics?: { label: string; value: string; detail: string }[];
  imageSrc: string;
  keyLearning: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Technical SEO' | 'Local SEO' | 'Keyword Research' | 'On-Page SEO' | 'SEO Learning';
  publishedDate: string;
  readTime: string;
  summary: string;
  content: string[];
  tableOfContents: string[];
  tags: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  usage: string;
  features: string[];
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Timeline' | 'Services' | 'Guarantees' | 'Local Karachi' | 'Audits';
}

export interface ReviewRequestFormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  businessType: string;
  targetMarket: string;
  primaryChallenge: string;
  targetKeywords: string;
  budgetRange: string;
  message: string;
}
