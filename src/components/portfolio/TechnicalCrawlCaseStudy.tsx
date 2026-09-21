import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Cpu, Network, ShieldCheck, ArrowUpRight } from 'lucide-react';
import technicalCrawlImage from '../../assets/images/technical-crawl-indexation.webp';

interface TechnicalCrawlCaseStudyProps {
  onInspect: () => void;
}

export const TechnicalCrawlCaseStudy: React.FC<TechnicalCrawlCaseStudyProps> = ({ onInspect }) => {
  const challengeChips = ['Indexation', 'Internal Linking', 'Crawl Depth', 'Canonicalization'];

  return (
    <div className="rounded-3xl bg-[#080D0D] border border-emerald-500/20 hover:border-emerald-500/40 transition-all p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden relative group">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/8 mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold px-3 py-1 rounded bg-emerald-500/10 text-[#00E59B] border border-emerald-500/20">
            01 / TECHNICAL SEO
          </span>
          <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            SEO Audit Exercise
          </span>
        </div>
        <div className="text-xs font-medium text-[#94A3B8] flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#00E59B]" />
          <span>Multi-Brand Apparel E-Commerce Architecture</span>
        </div>
      </div>

      {/* 2-Column Bento Grid: Left (55-60% Image & Crawl Arch) / Right (Intelligence Panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Image & Visual Architecture) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#060909] group-hover:border-emerald-500/30 transition-all shadow-xl">
            <img
              src={technicalCrawlImage}
              alt="Technical Crawl & Indexation Overhaul diagnostic visual"
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-80" />
            
            {/* Overlay Status Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium px-3 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
              <span className="text-[#00E59B] flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Screaming Frog In-Depth HTML/JS Crawl</span>
              </span>
              <span className="text-[#94A3B8]"><span className="font-mono">14,000+</span> Raw URLs Audited</span>
            </div>
          </div>

          {/* Mini Crawl Architecture Visualizer */}
          <div className="p-5 rounded-2xl bg-[#0D1414] border border-white/5 space-y-3">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-[#5E736D] uppercase">Target Crawl Depth Architecture</span>
              <span className="text-[#00FFD1]">≤ 3 Clicks to Revenue</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium">
              <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/8 text-white">
                <span className="text-[10px] text-[#5E736D] block font-mono">L1</span>
                <span className="font-semibold text-[#00E59B]">Homepage</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/8 text-white">
                <span className="text-[10px] text-[#5E736D] block font-mono">L2</span>
                <span className="font-semibold text-white">Collections</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/8 text-white">
                <span className="text-[10px] text-[#5E736D] block font-mono">L3</span>
                <span className="font-semibold text-white">Products</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/8 text-white">
                <span className="text-[10px] text-[#5E736D] block font-mono">L4</span>
                <span className="font-semibold text-[#94A3B8]">Content</span>
              </div>
            </div>

            {/* Diagnostic Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-medium">
              <div className="flex items-center space-x-1.5 text-[#00E59B]">
                <span>✓</span>
                <span>HTTP Health</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[#00E59B]">
                <span>✓</span>
                <span>Canonical Signals</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[#00E59B]">
                <span>✓</span>
                <span>Indexability</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[#00FFD1]">
                <span>✓</span>
                <span>Crawl Depth Opt.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Project Intelligence Panel) */}
        <div className="lg:col-span-5 space-y-5 text-left">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4FAF7] leading-tight">
            Technical Crawl &amp; Indexation Overhaul for a Pakistani Apparel Brand
          </h2>

          {/* Compact Challenge Chips */}
          <div className="flex flex-wrap gap-1.5">
            {challengeChips.map((chip) => (
              <span
                key={chip}
                className="px-2.5 py-1 rounded bg-[#0D1414] border border-white/10 text-[11px] font-medium text-[#94A3B8]"
              >
                #{chip}
              </span>
            ))}
          </div>

          {/* Structured Intelligence Blocks */}
          <div className="space-y-3.5 text-xs text-[#94A3B8] leading-relaxed">
            
            {/* Problem */}
            <div className="p-3.5 rounded-xl bg-[#0D1414] border-l-2 border-amber-400/80 border border-white/5 space-y-1">
              <span className="text-[10px] font-semibold uppercase text-amber-300 block">
                Problem
              </span>
              <p>
                Severe index bloat with over 14,000 faceted filter URLs indexed. Search crawlers were trapped in parameter permutations while primary high-margin collection pages suffered from crawl starvation.
              </p>
            </div>

            {/* Diagnosis */}
            <div className="p-3.5 rounded-xl bg-[#0D1414] border-l-2 border-[#00FFD1] border border-white/5 space-y-1">
              <span className="text-[10px] font-semibold uppercase text-[#00FFD1] block">
                Diagnosis
              </span>
              <p>
                Faceted color/size parameters lacked canonical self-references, generating infinite near-duplicate page variants, high TTFB spikes (2.4s), and over 340 broken 404 links in main navigation menus.
              </p>
            </div>

            {/* Action */}
            <div className="p-3.5 rounded-xl bg-[#0D1414] border-l-2 border-[#00E59B] border border-white/5 space-y-1.5">
              <span className="text-[10px] font-semibold uppercase text-[#00E59B] block">
                Action Implemented
              </span>
              <ul className="space-y-1 text-[#F4FAF7]">
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#00E59B] font-bold">›</span>
                  <span>Robots.txt disallow directives on faceted filter permutations</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#00E59B] font-bold">›</span>
                  <span>Restructured rel="canonical" tags strictly to parent category targets</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#00E59B] font-bold">›</span>
                  <span>Purged 340 dead 404 URLs and built clean XML sitemaps with 200 OK only</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#00E59B] font-bold">›</span>
                  <span>Converted catalog assets to WebP with responsive srcset attributes</span>
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/25 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase text-[#00E59B]">
                  Exercise Impact &amp; Target Outcomes
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  [ADD REAL CLIENT RESULT - GSC AUDIT EXERCISE]
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div>
                  <span className="text-base sm:text-lg font-bold font-mono text-white block">8,000+</span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Index Bloat Cleared</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-bold font-mono text-[#00E59B] block">3.2x</span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Crawl Frequency</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-bold font-mono text-[#00FFD1] block">99.4%</span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Status Code Health</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={onInspect}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-[#00E59B] border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm group-hover:border-emerald-500"
            >
              <span>View Full Case Study &amp; Technical Breakdown</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
