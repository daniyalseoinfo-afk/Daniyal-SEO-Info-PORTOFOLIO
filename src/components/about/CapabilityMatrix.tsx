import React, { useState } from 'react';
import { Layers, ChevronRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

interface CapabilityItem {
  discipline: string;
  level: 'Primary Focus' | 'Regular Workflow' | 'Working Knowledge';
  detail: string;
  deliverable: string;
}

export const CapabilityMatrix: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const capabilities: CapabilityItem[] = [
    {
      discipline: 'Technical SEO',
      level: 'Primary Focus',
      detail: 'Investigating crawl traps, server log responses, HTTP status code hygiene, render-blocking resources, and Core Web Vitals.',
      deliverable: 'Screaming Frog crawl audits, P1/P2/P3 issue backlog, robots.txt & XML sitemap configuration'
    },
    {
      discipline: 'On-Page SEO',
      level: 'Primary Focus',
      detail: 'Aligning HTML structure, title tags, meta descriptions, and heading hierarchy to satisfy exact user intent while maximizing SERP CTR.',
      deliverable: 'Page-level metadata mapping, H1-H3 structural blueprints, semantic copy optimization'
    },
    {
      discipline: 'Keyword Research',
      level: 'Primary Focus',
      detail: 'Clustering search queries by commercial and informational intent rather than pulling raw spreadsheets of unorganized volume.',
      deliverable: 'Topical cluster database, search intent classification, keyword-to-URL mapping tables'
    },
    {
      discipline: 'Semantic SEO',
      level: 'Regular Workflow',
      detail: 'Structuring content around entities, concepts, and topical nodes recognized by modern search engine knowledge graphs.',
      deliverable: 'Topic expansion roadmaps, entity gap analysis, semantic heading hierarchy'
    },
    {
      discipline: 'Local SEO',
      level: 'Primary Focus',
      detail: 'Optimizing Google Business Profiles, geographic category accuracy, local Pakistani directory citations, and localized landing pages.',
      deliverable: 'GBP audit, NAP citation alignment, localized clinic/business schema, review workflows'
    },
    {
      discipline: 'Internal Linking',
      level: 'Regular Workflow',
      detail: 'Designing contextual anchor text hierarchies and topical silos to pass PageRank efficiently from high-authority hubs to target pages.',
      deliverable: 'Internal linking graph, orphan page resolution, anchor text distribution guidelines'
    },
    {
      discipline: 'Content Architecture',
      level: 'Regular Workflow',
      detail: 'Building 3-click URL structures and category taxonomies that prevent keyword cannibalization and organize thousands of pages.',
      deliverable: 'Information architecture diagrams, breadcrumb navigation rules, category taxonomy'
    },
    {
      discipline: 'Schema Markup',
      level: 'Regular Workflow',
      detail: 'Deploying JSON-LD structured data (Organization, LocalBusiness, Physician, Product, Article, FAQ) for rich snippet eligibility.',
      deliverable: 'Validated custom JSON-LD templates ready for CMS or Google Tag Manager injection'
    },
    {
      discipline: 'Crawl Diagnostics',
      level: 'Primary Focus',
      detail: 'Analyzing Googlebot crawl frequency, crawl budget depletion on faceted parameters, and server response time (TTFB) spikes.',
      deliverable: 'Crawl depth reports, faceted parameter disallow strategies, canonical consistency audits'
    },
    {
      discipline: 'Indexation Pipelines',
      level: 'Working Knowledge',
      detail: 'Managing GSC Page Indexing reports, resolving "Crawled - currently not indexed", and submitting segmented XML sitemaps.',
      deliverable: 'Index bloat remediation, sitemap segmentation, canonical tag consolidation'
    }
  ];

  const getBadgeStyle = (level: CapabilityItem['level']) => {
    switch (level) {
      case 'Primary Focus':
        return 'bg-emerald-500/10 text-[#00E59B] border-emerald-500/30';
      case 'Regular Workflow':
        return 'bg-cyan-500/10 text-[#00FFD1] border-cyan-500/30';
      case 'Working Knowledge':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#060909] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>03 / PRACTICAL EXECUTION SCOPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4FAF7]">
            What I Work On
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Honest capability matrix based on daily workflow and hands-on client execution, free of fabricated proficiency percentages.
          </p>
        </div>

        {/* Capability Table / Rows */}
        <div className="rounded-3xl bg-[#080D0D] border border-white/10 overflow-hidden shadow-2xl divide-y divide-white/5">
          {capabilities.map((item, index) => {
            const isExpanded = activeItem === index;
            return (
              <div
                key={item.discipline}
                onClick={() => setActiveItem(isExpanded ? null : index)}
                className={`p-4 sm:p-5 transition-all cursor-pointer ${
                  isExpanded ? 'bg-[#0D1414]' : 'hover:bg-[#0D1414]/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#5E736D] w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.discipline}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${getBadgeStyle(item.level)}`}>
                      {item.level}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-[#5E736D] transition-transform ${isExpanded ? 'rotate-90 text-[#00E59B]' : ''}`} />
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                    <div className="md:col-span-7 space-y-1">
                      <span className="text-[10px] font-semibold uppercase text-[#5E736D] block">
                        Scope &amp; Methodology
                      </span>
                      <p className="text-[#94A3B8] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                    <div className="md:col-span-5 space-y-1">
                      <span className="text-[10px] font-semibold uppercase text-[#00E59B] block">
                        Tangible Deliverable
                      </span>
                      <p className="text-white text-xs leading-relaxed">
                        {item.deliverable}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
