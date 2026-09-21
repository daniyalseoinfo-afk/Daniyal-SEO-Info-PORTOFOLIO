import React from 'react';
import { Cpu, FileCode2, Network, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowIThinkSection: React.FC = () => {
  const diagnosticSteps = [
    {
      num: '01',
      phase: 'CRAWL',
      title: 'Crawl Discovery & Budget',
      question: 'Can Google efficiently discover, access, and revisit high-value commercial URLs without wasting crawl resources?',
      icon: Cpu,
      accent: 'emerald',
      microData: [
        { label: 'Crawl Budget Allocation', status: 'Optimized' },
        { label: 'Redirect Chains & Loops', status: '0 Chains' },
        { label: 'Crawl Depth Target', status: '≤ 3 Clicks' },
        { label: 'Log Analysis', status: '200 OK Dominant' },
      ],
      description: 'Search engines allocate limited crawl budgets. Bloated JavaScript, pagination loops, and broken internal links choke bot discovery before rankings even begin.'
    },
    {
      num: '02',
      phase: 'INDEX',
      title: 'Indexation & Canonicalization',
      question: 'Are the primary revenue-driving URLs canonicalized, renderable, and confirmed in Google Search Console index?',
      icon: FileCode2,
      accent: 'cyan',
      microData: [
        { label: 'Canonical Self-Referencing', status: '100% Strict' },
        { label: 'XML Sitemap Freshness', status: 'Real-time' },
        { label: 'Index Bloat (Filters/Params)', status: 'Pruned' },
        { label: 'Client-Side Rendering', status: 'Hydrated' },
      ],
      description: 'Being crawlable is meaningless if pages are marked noindex, canonicalized erroneously, or lost in the "Crawled - currently not indexed" graveyard.'
    },
    {
      num: '03',
      phase: 'RELEVANCE',
      title: 'Entity & Semantic Relevance',
      question: 'Does page architecture explicitly answer commercial intent and declare structured entity relationships to Google?',
      icon: Network,
      accent: 'emerald',
      microData: [
        { label: 'Entity Knowledge Graph', status: 'Mapped' },
        { label: 'Topic Hub & Spokes', status: '12 Clusters' },
        { label: 'JSON-LD Schema Hierarchy', status: 'Verified' },
        { label: 'Search Intent Match', status: 'Commercial' },
      ],
      description: 'Modern search is semantic. Google evaluates how thoroughly content covers entities, latent semantic queries, and distinct user expectations across the SERP.'
    },
    {
      num: '04',
      phase: 'CONVERSION',
      title: 'Commercial Conversion Action',
      question: 'Does increased search impressions and ranking authority translate into qualified leads and revenue for the business?',
      icon: TrendingUp,
      accent: 'cyan',
      microData: [
        { label: 'High-Intent Query CTR', status: '18.4% Avg' },
        { label: 'Qualified Lead Capture', status: 'Direct Flow' },
        { label: 'Local Map Pack Visibility', status: 'Top 3' },
        { label: 'Assisted Organic ROI', status: 'Compounding' },
      ],
      description: 'Rankings without qualified revenue is vanity. Every cluster is mapped back to commercial intent, targeted landing pages, and frictionless conversion points.'
    },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-[#00E59B] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B]" />
            <span>HOW I THINK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight leading-[1.12] font-display">
            SEO Problems Are Usually{' '}
            <span className="text-gradient-emerald">
              Architecture Problems
            </span>{' '}
            First.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Search engines do not rank keywords; they evaluate crawl access, indexation pipelines, entity authority, and user satisfaction. Here is the diagnostic sequence I apply to every web architecture.
          </p>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {diagnosticSteps.map((step, idx) => {
            const Icon = step.icon;
            const isEmerald = step.accent === 'emerald';
            return (
              <div
                key={step.num}
                className="rounded-2xl bg-[#080D0D]/90 border border-white/8 hover:border-emerald-500/30 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,155,0.08)] relative"
              >
                {/* Connector Arrow (desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#0D1414] border border-white/10 items-center justify-center text-[#5E736D] group-hover:text-[#00E59B] group-hover:border-emerald-500/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                <div>
                  {/* Card Header: Step number & Phase badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-2xl font-mono font-bold text-white/30 group-hover:text-[#00E59B] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-[#00E59B] border border-emerald-500/20">
                      {step.phase}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mt-4 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#0D1414] border border-white/10 flex items-center justify-center text-[#00E59B] group-hover:border-emerald-400/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Question Focus */}
                  <p className="text-xs text-[#00FFD1] font-medium mb-3 italic">
                    &ldquo;{step.question}&rdquo;
                  </p>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Micro-Data Diagnostic Box */}
                <div className="pt-3 border-t border-white/5 space-y-1.5 text-[11px] font-mono">
                  {step.microData.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[#5E736D]">
                      <span className="truncate pr-2">{item.label}</span>
                      <span className="text-[#F4FAF7] font-semibold flex-shrink-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
