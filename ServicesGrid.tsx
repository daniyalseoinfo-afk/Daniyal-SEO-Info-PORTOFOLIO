import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES_LIST } from '../data/seoData';
import { ArrowUpRight, Cpu, LayoutTemplate, SearchCode, MapPin, CheckCircle2, Terminal, Layers } from 'lucide-react';

interface ServicesGridProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onRouteChange }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'title' | 'h1' | 'link' | 'schema'>('title');

  return (
    <section id="services-grid" className="py-24 sm:py-32 bg-[#080A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] px-2.5 py-1 rounded bg-[#2DD4BF]/10 border border-[#2DD4BF]/20">
              02 / SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-tight">
            SEO services built around what your website{' '}
            <span className="text-[#2DD4BF]">actually needs.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B5BBC7] leading-relaxed">
            No cookie-cutter packages or automated report spam. Each service tackles a specific mechanism of search discovery and ranking authority.
          </p>
        </div>

        {/* 4 Custom Distinct Asymmetric Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CARD 1: Technical SEO (Large Horizontal Card - 8 cols) */}
          <div
            id="card-technical-seo"
            className="lg:col-span-8 rounded-3xl bg-[#0D1017] border border-white/10 hover:border-[#2DD4BF]/50 transition-all p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-mono font-bold text-[#2DD4BF]">01</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7D8595] px-2 py-0.5 rounded bg-white/5">
                  Infrastructure & Crawling
                </span>
              </div>
              <button
                onClick={() => onRouteChange('technical-seo-services-karachi')}
                className="p-2.5 rounded-full bg-[#161C28] text-white group-hover:bg-[#2DD4BF] group-hover:text-[#080A0F] transition-all transform group-hover:translate-x-1"
                aria-label="Explore Technical SEO"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors">
                  Technical SEO
                </h3>
                <p className="text-sm text-[#B5BBC7] leading-relaxed">
                  Find crawling, indexing, architecture and performance problems that can restrict organic visibility before you waste effort on content.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Indexing', 'CWV', 'Schema', 'Crawlability'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#161C28] text-[#B5BBC7] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onRouteChange('technical-seo-services-karachi')}
                    className="text-xs font-mono font-bold text-[#2DD4BF] hover:underline flex items-center space-x-1"
                  >
                    <span>Explore Technical SEO</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Animated Mini Crawler / Site Tree Interactive Visualization */}
              <div className="md:col-span-6 p-4 rounded-2xl bg-[#11151E] border border-white/8 relative">
                <div className="text-[10px] font-mono text-[#7D8595] pb-2 mb-3 border-b border-white/5 flex items-center justify-between">
                  <span>CRAWLER TREE DIAGNOSTIC</span>
                  <span className="text-[#2DD4BF] font-semibold">200 OK Active</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  {/* Root Node */}
                  <div
                    onMouseEnter={() => setHoveredNode('root')}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`p-2 rounded-lg border transition-all flex items-center justify-between ${
                      hoveredNode === 'root' ? 'bg-[#2DD4BF]/15 border-[#2DD4BF]' : 'bg-[#161C28] border-white/5'
                    }`}
                  >
                    <span className="text-[#2DD4BF] font-bold">/ (Homepage)</span>
                    <span className="text-[10px] text-[#7D8595]">Depth: 0 • 200 OK</span>
                  </div>

                  {/* Branch Level 1 */}
                  <div className="pl-4 space-y-1.5 border-l-2 border-dashed border-[#2DD4BF]/30 ml-3">
                    <div
                      onMouseEnter={() => setHoveredNode('services')}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`p-1.5 rounded-md border text-[11px] flex items-center justify-between transition-all ${
                        hoveredNode === 'services' ? 'bg-[#45E6FF]/15 border-[#45E6FF]' : 'bg-[#121722] border-white/5'
                      }`}
                    >
                      <span className="text-[#45E6FF]">/seo-services-in-karachi</span>
                      <span className="text-[9px] text-[#2DD4BF]">Canonical ✓</span>
                    </div>

                    <div className="pl-4 border-l border-white/10 ml-2">
                      <div className="p-1 rounded bg-[#161C28]/60 text-[10px] text-[#7D8595] flex items-center justify-between">
                        <span>/technical-seo</span>
                        <span className="text-emerald-400">Schema Valid</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#7D8595]">
                  <span>Response: 142ms</span>
                  <span>Render: Clean DOM</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: On-Page SEO (Tall Card - 4 cols) */}
          <div
            id="card-onpage-seo"
            className="lg:col-span-4 rounded-3xl bg-[#0D1017] border border-white/10 hover:border-[#45E6FF]/50 transition-all p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-mono font-bold text-[#45E6FF]">02</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7D8595] px-2 py-0.5 rounded bg-white/5">
                    Structure
                  </span>
                </div>
                <button
                  onClick={() => onRouteChange('on-page-seo-services-karachi')}
                  className="p-2.5 rounded-full bg-[#161C28] text-white group-hover:bg-[#45E6FF] group-hover:text-[#080A0F] transition-all transform group-hover:translate-x-1"
                  aria-label="Explore On-Page SEO"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#45E6FF] transition-colors mb-2">
                On-Page SEO
              </h3>
              <p className="text-sm text-[#B5BBC7] leading-relaxed mb-4">
                Improve page targeting, content hierarchy, and relevance around real search intent.
              </p>

              {/* Interactive Webpage Inspector Mockup */}
              <div className="p-3.5 rounded-2xl bg-[#11151E] border border-white/8 space-y-2.5 my-3">
                <div className="flex items-center space-x-1 text-[10px] font-mono border-b border-white/5 pb-2">
                  <button
                    onClick={() => setActiveTab('title')}
                    className={`px-2 py-0.5 rounded ${activeTab === 'title' ? 'bg-[#45E6FF]/20 text-[#45E6FF]' : 'text-[#7D8595]'}`}
                  >
                    &lt;title&gt;
                  </button>
                  <button
                    onClick={() => setActiveTab('h1')}
                    className={`px-2 py-0.5 rounded ${activeTab === 'h1' ? 'bg-[#45E6FF]/20 text-[#45E6FF]' : 'text-[#7D8595]'}`}
                  >
                    &lt;h1&gt;
                  </button>
                  <button
                    onClick={() => setActiveTab('link')}
                    className={`px-2 py-0.5 rounded ${activeTab === 'link' ? 'bg-[#45E6FF]/20 text-[#45E6FF]' : 'text-[#7D8595]'}`}
                  >
                    &lt;a link&gt;
                  </button>
                </div>

                <div className="text-xs font-mono p-2.5 rounded-lg bg-[#161C28] border border-white/5 text-white">
                  {activeTab === 'title' && (
                    <div>
                      <span className="text-[#45E6FF]">&lt;title&gt;</span>
                      <span className="text-[#2DD4BF]">SEO Services in Karachi | Daniyal</span>
                      <span className="text-[#45E6FF]">&lt;/title&gt;</span>
                      <p className="text-[10px] text-[#7D8595] mt-1 font-sans">
                        56 chars • High CTR commercial intent
                      </p>
                    </div>
                  )}
                  {activeTab === 'h1' && (
                    <div>
                      <span className="text-[#45E6FF]">&lt;h1&gt;</span>
                      <span className="text-white">Professional SEO Services Karachi</span>
                      <span className="text-[#45E6FF]">&lt;/h1&gt;</span>
                      <p className="text-[10px] text-[#7D8595] mt-1 font-sans">
                        Single unambiguous primary intent header
                      </p>
                    </div>
                  )}
                  {activeTab === 'link' && (
                    <div>
                      <span className="text-[#45E6FF]">&lt;a href=&quot;/contact&quot;&gt;</span>
                      <span className="text-[#2DD4BF]">Request an SEO Review</span>
                      <span className="text-[#45E6FF]">&lt;/a&gt;</span>
                      <p className="text-[10px] text-[#7D8595] mt-1 font-sans">
                        Contextual anchor passing internal relevance
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onRouteChange('on-page-seo-services-karachi')}
                className="text-xs font-mono font-bold text-[#45E6FF] hover:underline flex items-center space-x-1"
              >
                <span>Explore On-Page SEO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 3: Keyword Research (Wide Data-Driven Card - 7 cols) */}
          <div
            id="card-keyword-research"
            className="lg:col-span-7 rounded-3xl bg-[#0D1017] border border-white/10 hover:border-[#2DD4BF]/50 transition-all p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-mono font-bold text-[#2DD4BF]">03</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7D8595] px-2 py-0.5 rounded bg-white/5">
                    Query Strategy
                  </span>
                </div>
                <button
                  onClick={() => onRouteChange('keyword-research-services-karachi')}
                  className="p-2.5 rounded-full bg-[#161C28] text-white group-hover:bg-[#2DD4BF] group-hover:text-[#080A0F] transition-all transform group-hover:translate-x-1"
                  aria-label="Explore Keyword Research"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors mb-2">
                Keyword Research & Clustering
              </h3>
              <p className="text-sm text-[#B5BBC7] leading-relaxed mb-4">
                Turn raw keyword data into clear topic clusters and pages instead of an unorganized spreadsheet.
              </p>

              {/* Keyword Cluster Constellation Visual */}
              <div className="p-4 rounded-2xl bg-[#11151E] border border-white/8 space-y-2">
                <div className="text-[10px] font-mono text-[#7D8595] pb-1 border-b border-white/5 flex items-center justify-between">
                  <span>TOPIC CLUSTER MATRIX</span>
                  <span className="text-[#2DD4BF]">Intent Mapped</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded-xl bg-[#161C28] border border-[#2DD4BF]/30 text-xs">
                    <span className="text-[10px] font-mono uppercase text-[#2DD4BF] block font-bold">Commercial Intent</span>
                    <span className="text-white font-medium">SEO Services in Karachi</span>
                    <span className="text-[10px] text-[#7D8595] block mt-0.5">Vol: 1,600 • High Priority</span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#161C28] border border-white/5 text-xs">
                    <span className="text-[10px] font-mono uppercase text-[#45E6FF] block font-bold">Service Specific</span>
                    <span className="text-white font-medium">Technical SEO Audit</span>
                    <span className="text-[10px] text-[#7D8595] block mt-0.5">Vol: 720 • Low KD</span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#161C28] border border-white/5 text-xs">
                    <span className="text-[10px] font-mono uppercase text-purple-400 block font-bold">Local Intent</span>
                    <span className="text-white font-medium">SEO Consultant DHA</span>
                    <span className="text-[10px] text-[#7D8595] block mt-0.5">Vol: 480 • High Conv.</span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#161C28] border border-white/5 text-xs">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block font-bold">Informational</span>
                    <span className="text-white font-medium">Fix Core Web Vitals PK</span>
                    <span className="text-[10px] text-[#7D8595] block mt-0.5">Guide / Blog Target</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onRouteChange('keyword-research-services-karachi')}
                className="text-xs font-mono font-bold text-[#2DD4BF] hover:underline flex items-center space-x-1"
              >
                <span>Explore Keyword Research</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 4: Local SEO Karachi (5 cols) */}
          <div
            id="card-local-seo"
            className="lg:col-span-5 rounded-3xl bg-[#0D1017] border border-white/10 hover:border-[#45E6FF]/50 transition-all p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-mono font-bold text-[#45E6FF]">04</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7D8595] px-2 py-0.5 rounded bg-white/5">
                    Karachi Geo-Targeting
                  </span>
                </div>
                <button
                  onClick={() => onRouteChange('local-seo-services-karachi')}
                  className="p-2.5 rounded-full bg-[#161C28] text-white group-hover:bg-[#45E6FF] group-hover:text-[#080A0F] transition-all transform group-hover:translate-x-1"
                  aria-label="Explore Local SEO"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#45E6FF] transition-colors mb-2">
                Local SEO Karachi
              </h3>
              <p className="text-sm text-[#B5BBC7] leading-relaxed mb-4">
                Strengthen location relevance for businesses that want to be discovered by customers in Karachi.
              </p>

              {/* Abstract Karachi Map Pin Mockup */}
              <div className="p-4 rounded-2xl bg-[#11151E] border border-white/8 relative">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#7D8595] pb-2 mb-3 border-b border-white/5">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#2DD4BF]" />
                    <span>KARACHI LOCAL PACK</span>
                  </span>
                  <span className="text-[#45E6FF]">3-Pack Ranking</span>
                </div>

                <div className="p-3 rounded-xl bg-[#161C28] border border-[#2DD4BF]/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Google Business Profile</span>
                    <span className="text-[10px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/10 px-1.5 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#B5BBC7]">
                    DHA • Clifton • Gulshan-e-Iqbal • PECHS • Korangi
                  </p>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-[#7D8595] pt-1">
                    <span>NAP Consistency: 100%</span>
                    <span>•</span>
                    <span>Local Schema ✓</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onRouteChange('local-seo-services-karachi')}
                className="text-xs font-mono font-bold text-[#45E6FF] hover:underline flex items-center space-x-1"
              >
                <span>Explore Local SEO Karachi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
