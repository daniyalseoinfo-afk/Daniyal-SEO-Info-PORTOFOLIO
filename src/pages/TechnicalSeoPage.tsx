import React from 'react';
import { PageRoute } from '../types';
import { Cpu, Terminal, CheckCircle2, ArrowRight, Server, ShieldCheck, Layers, FileCode } from 'lucide-react';
import technicalCrawlImage from '../assets/images/technical-crawl-indexation.webp';
import keywordArchitectureImage from '../assets/images/keyword-clustering-on-page.webp';

interface TechnicalSeoPageProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (initialUrl?: string) => void;
}

export const TechnicalSeoPage: React.FC<TechnicalSeoPageProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#B7FF3C]">
                <Cpu className="w-3.5 h-3.5" />
                <span>TECHNICAL SEO / KARACHI</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
                Technical SEO Services in{' '}
                <span className="text-[#B7FF3C]">Karachi</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
                Find and fix crawling, indexing, architecture, and rendering problems that restrict organic search discovery.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-[#7D8595]">
                {['200 OK', 'INDEXED', 'CANONICAL', 'XML SITEMAP', 'LCP', 'INP', 'CLS', 'SCHEMA JSON-LD'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#11151E] border border-white/8 text-[#45E6FF]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => onRequestReview()}
                  className="px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-all shadow-[0_0_25px_-5px_rgba(183,255,60,0.4)] flex items-center space-x-2"
                >
                  <span>Request Technical SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#11151E] shadow-[0_24px_70px_rgba(0,0,0,0.55)] aspect-[4/5]">
                <img
                  src={technicalCrawlImage}
                  alt="Daniyal reviewing technical crawl and indexation data in Karachi"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/45 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Diagnostic Breakdown */}
      <section className="py-20 bg-[#0D1017] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7FF3C]">
              CORE TECHNICAL AUDIT MODULES
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 font-display">
              How I Inspect & Fix Technical Search Bottlenecks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Crawl Budget & Server Logs',
                desc: 'Prevent search bots from wasting crawl requests on filter permutations, login pages, or unlinked scripts.',
                badge: 'Screaming Frog'
              },
              {
                title: 'Indexation & Coverage (GSC)',
                desc: 'Diagnose "Crawled - currently not indexed" and "Discovered - currently not indexed" URLs in Google Search Console.',
                badge: 'GSC Diagnostics'
              },
              {
                title: 'Canonicalization & Duplicate Content',
                desc: 'Correct canonical tags across HTTP/HTTPS, trailing slashes, WWW vs non-WWW, and multi-currency product pages.',
                badge: 'Canonical Tags'
              },
              {
                title: 'Core Web Vitals & TTFB',
                desc: 'Optimize LCP, INP, and CLS performance on Pakistani 4G networks by eliminating render-blocking scripts and optimizing images.',
                badge: 'PageSpeed'
              },
              {
                title: 'Structured Data (JSON-LD Schema)',
                desc: 'Deploy custom Schema markup for Organization, LocalBusiness, FAQPage, Article, and Product entities.',
                badge: 'Schema.org'
              },
              {
                title: 'Site Architecture & Internal Graph',
                desc: 'Eliminate orphan pages, restructure category hierarchies, and optimize internal PageRank distribution.',
                badge: 'Site Tree'
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161C28] text-[#B7FF3C] border border-white/5">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#B5BBC7] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export const OnPageSeoPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#45E6FF]">
                <span>ON-PAGE SEO / KARACHI</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
                On-Page SEO Services in{' '}
                <span className="text-[#45E6FF]">Karachi</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
                Improve page targeting, content hierarchy, and relevance around real search intent.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-[#7D8595]">
                {['TITLE TAG', 'H1 HIERARCHY', 'SEARCH INTENT', 'INTERNAL LINKS', 'CONTENT DEPTH', 'IMAGE ALT'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#11151E] border border-white/8 text-[#B7FF3C]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onRequestReview}
                  className="px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-all"
                >
                  Request On-Page Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#11151E] shadow-[0_24px_70px_rgba(0,0,0,0.55)] aspect-video">
                <img
                  src={keywordArchitectureImage}
                  alt="Commercial keyword clustering and on-page content architecture planning"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">1. Search Intent Mapping</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Determine if searchers want quick answers, detailed guides, commercial comparisons, or direct purchasing options.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">2. CTR-Optimized Metadata</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Authored title tags and meta descriptions that maximize click-through rate without misleading visitors.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">3. Contextual Internal Linking</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Build logical bridge links between related topic articles to pass ranking authority directly to commercial landing pages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
