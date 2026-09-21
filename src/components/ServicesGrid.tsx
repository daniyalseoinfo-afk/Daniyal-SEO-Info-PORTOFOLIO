import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight, Cpu, Layers, Network, MapPin, CheckCircle2, ShieldCheck, Zap, Sparkles, Terminal } from 'lucide-react';

interface ServicesGridProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onRouteChange }) => {
  const [activeCluster, setActiveCluster] = useState<number>(0);
  const [activeLayer, setActiveLayer] = useState<'h1' | 'h2' | 'schema' | 'links'>('schema');

  const clusters = [
    {
      name: 'Commercial Equipment',
      intent: 'Transactional',
      urls: 12,
      coverage: '94%',
      primaryQuery: 'industrial machinery suppliers karachi',
      subQueries: ['generator maintenance services', 'cnc machinery distributors sindh', 'heavy tooling spare parts']
    },
    {
      name: 'Fintech & B2B SaaS',
      intent: 'Commercial Investigation',
      urls: 16,
      coverage: '98%',
      primaryQuery: 'payroll software pakistan b2b',
      subQueries: ['corporate tax filing software', 'merchant payment gateway pk', 'cloud billing enterprise']
    },
    {
      name: 'Local Professional Services',
      intent: 'High Commercial',
      urls: 8,
      coverage: '92%',
      primaryQuery: 'corporate legal consultant clifton',
      subQueries: ['tax compliance firm karachi', 'commercial dispute lawyer dha', 'business registration consultancy']
    }
  ];

  return (
    <section id="services-grid" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B]" />
            <span>SEARCH SYSTEMS &amp; SPECIALIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight leading-[1.12]">
            Architectural SEO Systems{' '}
            <span className="text-gradient-emerald">Engineered for Growth.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            No generic agency retainers or automated report bloat. Every service is a dedicated engineering module designed to resolve crawl friction, map commercial search intent, and compound qualified organic revenue.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: Technical SEO (Feature Card - Span 8 Columns) */}
          <div
            id="bento-technical-seo"
            className="lg:col-span-8 rounded-3xl bg-[#080D0D]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div>
              {/* Header Badge & Action */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E59B]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#00E59B] block font-semibold">
                      SYSTEM 01 • INFRASTRUCTURE
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00E59B] transition-colors">
                      Technical SEO &amp; Crawl Optimization
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onRouteChange('technical-seo-services-karachi')}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-[#00E59B] group-hover:text-[#060909] group-hover:border-transparent transition-all transform group-hover:translate-x-0.5"
                  aria-label="Explore Technical SEO Services"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-2xl mb-6">
                Eradicating crawl budget leaks, render-blocking JavaScript, 301 redirection chains, and canonical ambiguities. We guarantee search engines index your commercial assets without resistance.
              </p>

              {/* Interactive Visual Crawl Tree + Core Web Vitals HUD */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-2">
                
                {/* Visual Crawl Tree Display */}
                <div className="md:col-span-7 p-4 rounded-2xl bg-[#0D1414] border border-white/8 font-mono text-xs text-[#94A3B8] space-y-1.5 select-none">
                  <div className="text-[10px] text-[#5E736D] uppercase tracking-wider pb-2 border-b border-white/5 flex items-center justify-between">
                    <span>Live Crawl Graph</span>
                    <span className="text-[#00E59B] font-bold">● Budget: 100% Efficient</span>
                  </div>
                  <div className="pt-2 text-[#00FFD1] font-semibold">
                    <span>/ (Homepage) [200 OK • HTML 32KB]</span>
                  </div>
                  <div className="pl-3 text-[#94A3B8]">
                    <span>├── /services/ [200 OK]</span>
                  </div>
                  <div className="pl-6 text-[#F4FAF7]">
                    <span>├── /services/technical-seo/ <span className="text-[#00E59B]">[Canonical Verified]</span></span>
                  </div>
                  <div className="pl-6 text-[#F4FAF7]">
                    <span>└── /services/local-seo-karachi/ <span className="text-[#00FFD1]">[Geo-Schema OK]</span></span>
                  </div>
                  <div className="pl-3 text-[#94A3B8]">
                    <span>├── /case-studies/ [200 OK]</span>
                  </div>
                  <div className="pl-3 text-[#5E736D]">
                    <span>└── /sitemap.xml [Indexable URLs: 42 • Depth ≤ 3]</span>
                  </div>
                </div>

                {/* Core Web Vitals & Site Health HUD */}
                <div className="md:col-span-5 p-4 rounded-2xl bg-[#0D1414] border border-white/8 flex flex-col justify-between">
                  <div className="text-[10px] text-[#5E736D] uppercase pb-2 border-b border-white/5 flex items-center justify-between font-medium">
                    <span>Core Web Vitals</span>
                    <span className="text-[#00E59B] font-bold">Google Validated</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-3 text-center">
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[9px] text-[#5E736D] block font-medium">LCP</span>
                      <span className="text-xs font-mono font-bold text-[#00E59B]">1.4s</span>
                      <span className="text-[8px] text-[#00E59B] block font-medium">Good</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[9px] text-[#5E736D] block font-medium">INP</span>
                      <span className="text-xs font-mono font-bold text-[#00E59B]">86ms</span>
                      <span className="text-[8px] text-[#00E59B] block font-medium">Good</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[9px] text-[#5E736D] block font-medium">CLS</span>
                      <span className="text-xs font-mono font-bold text-[#00E59B]">0.02</span>
                      <span className="text-[8px] text-[#00E59B] block font-medium">Good</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-medium">
                    <span className="text-[#5E736D]">Crawl Health Score:</span>
                    <span className="text-[#00E59B] font-bold font-mono">99 / 100</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Tag List & Action */}
            <div className="pt-5 border-t border-white/8 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {['Log File Audits', 'Crawl Budget', 'Index Coverage', 'Core Web Vitals', 'Schema JSON-LD', 'Canonical Integrity'].map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#0D1414] text-[#94A3B8] border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onRouteChange('technical-seo-services-karachi')}
                className="text-xs font-semibold text-[#00E59B] hover:text-[#00FFD1] flex items-center space-x-1"
              >
                <span>Explore Technical SEO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 2: Commercial Keyword Clustering (Span 4 Columns) */}
          <div
            id="bento-keyword-clustering"
            className="lg:col-span-4 rounded-3xl bg-[#080D0D]/90 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00FFD1]">
                    <Network className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#00FFD1] block font-semibold">
                      SYSTEM 02 • INTENT
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00FFD1] transition-colors">
                      Commercial Keyword Clusters
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onRouteChange('keyword-research-services-karachi')}
                  className="p-2 rounded-full bg-white/5 text-white group-hover:bg-[#00FFD1] group-hover:text-[#060909] transition-all"
                  aria-label="Explore Keyword Research"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Grouping search terms by commercial intent and parent topics rather than chasing isolated vanity keywords with zero buyers.
              </p>

              {/* Cluster Selector Tabs */}
              <div className="space-y-2 mb-4">
                {clusters.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveCluster(i)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between border ${
                      activeCluster === i
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-white'
                        : 'bg-[#0D1414] border-white/5 text-[#94A3B8] hover:border-white/10'
                    }`}
                  >
                    <span className="font-semibold">{c.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-[#00FFD1] font-medium">
                      {c.intent}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Cluster Details */}
              <div className="p-3 rounded-2xl bg-[#0D1414] border border-white/8 space-y-2 text-[11px]">
                <div className="flex items-center justify-between text-[#5E736D] pb-1 border-b border-white/5">
                  <span className="font-medium">Target Head Term:</span>
                  <span className="text-white truncate font-semibold ml-1">{clusters[activeCluster].primaryQuery}</span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-[#5E736D] uppercase block font-medium">Semantic Sub-Queries:</span>
                  {clusters[activeCluster].subQueries.map((q) => (
                    <div key={q} className="flex items-center space-x-1.5 text-[#94A3B8]">
                      <span className="w-1 h-1 rounded-full bg-[#00FFD1]" />
                      <span className="truncate">{q}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                  <span className="text-[#5E736D] font-medium">Architecture Mapping:</span>
                  <span className="text-[#00FFD1] font-semibold">
                    {clusters[activeCluster].urls} URLs • {clusters[activeCluster].coverage} Match
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs font-medium text-[#5E736D]">Intent-driven taxonomy</span>
              <button
                onClick={() => onRouteChange('keyword-research-services-karachi')}
                className="text-xs font-semibold text-[#00FFD1] hover:underline"
              >
                View Topic Maps →
              </button>
            </div>
          </div>

          {/* CARD 3: Local SEO Karachi (Span 5 Columns) */}
          <div
            id="bento-local-seo"
            className="lg:col-span-5 rounded-3xl bg-[#080D0D]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E59B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#00E59B] block font-semibold">
                      SYSTEM 03 • GEO AUTHORITY
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00E59B] transition-colors">
                      Local SEO &amp; Karachi Map Pack
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onRouteChange('local-seo-services-karachi')}
                  className="p-2 rounded-full bg-white/5 text-white group-hover:bg-[#00E59B] group-hover:text-[#060909] transition-all"
                  aria-label="Explore Local SEO"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Dominating the Google Maps 3-Pack and geo-specific commercial intent queries across Karachi&apos;s prime business districts.
              </p>

              {/* Stylized Mini Karachi Map Pack HUD */}
              <div className="p-4 rounded-2xl bg-[#0D1414] border border-white/8 space-y-3">
                <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/5 font-medium">
                  <span className="text-[#5E736D]">Geo-Target: Karachi, Sindh</span>
                  <span className="text-[#00E59B] font-bold">Rank #1–#3 In-Pack</span>
                </div>

                {/* District Nodes with Pulsing Pins */}
                <div className="space-y-2 text-xs">
                  {[
                    { area: 'DHA Karachi (Phases 1–8)', queries: 'Corporate & Real Estate', rank: '#1' },
                    { area: 'Clifton (Blocks 2, 4, 8 & 9)', queries: 'Medical & Consultancies', rank: '#1' },
                    { area: 'Gulshan-e-Iqbal & PECHS', queries: 'Education & Tech Startups', rank: '#2' },
                    { area: 'Korangi & SITE Industrial Area', queries: 'Manufacturers & B2B Hubs', rank: '#1' },
                  ].map((d) => (
                    <div key={d.area} className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                      <div className="flex items-center space-x-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
                        </span>
                        <span className="text-white font-medium text-[11px]">{d.area}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-[#5E736D] hidden sm:inline">{d.queries}</span>
                        <span className="text-[11px] font-bold text-[#00E59B] px-1.5 py-0.5 rounded bg-emerald-500/10 font-mono">
                          {d.rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-medium text-[#5E736D]">
                  <span>Local Citations &amp; Schema</span>
                  <span className="text-[#00FFD1]">100% NAP Consistency</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs font-medium text-[#5E736D]">Google Business Profile</span>
              <button
                onClick={() => onRouteChange('local-seo-services-karachi')}
                className="text-xs font-semibold text-[#00E59B] hover:underline"
              >
                Local Strategy Details →
              </button>
            </div>
          </div>

          {/* CARD 4: On-Page Search Architecture (Span 7 Columns) */}
          <div
            id="bento-on-page-architecture"
            className="lg:col-span-7 rounded-3xl bg-[#080D0D]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E59B]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#00E59B] block font-semibold">
                      SYSTEM 04 • SEMANTIC ARCHITECTURE
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00E59B] transition-colors">
                      On-Page &amp; Semantic Entity Graph
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onRouteChange('on-page-seo-services-karachi')}
                  className="p-2 rounded-full bg-white/5 text-white group-hover:bg-[#00E59B] group-hover:text-[#060909] transition-all"
                  aria-label="Explore On-Page SEO"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Building clear document outlines that Google parses effortlessly. We map primary entities, latent subtopics, internal links, and structured data into a cohesive conversion framework.
              </p>

              {/* Layer Inspector Blueprint */}
              <div className="p-4 rounded-2xl bg-[#0D1414] border border-white/8 space-y-3">
                <div className="flex items-center space-x-2 border-b border-white/5 pb-2 text-[11px] font-medium">
                  {(['h1', 'h2', 'schema', 'links'] as const).map((layer) => (
                    <button
                      key={layer}
                      onClick={() => setActiveLayer(layer)}
                      className={`px-2.5 py-1 rounded-lg uppercase tracking-wider transition-colors ${
                        activeLayer === layer
                          ? 'bg-emerald-500/20 text-[#00E59B] font-bold border border-emerald-500/30'
                          : 'text-[#5E736D] hover:text-white'
                      }`}
                    >
                      {layer === 'links' ? 'Internal Links' : layer}
                    </button>
                  ))}
                </div>

                {/* Layer Content Viewer */}
                <div className="text-xs">
                  {activeLayer === 'h1' && (
                    <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px]">
                      <span className="text-[#00E59B] block font-semibold">H1 Tag Structure:</span>
                      <p className="text-[#F4FAF7]">
                        &lt;h1&gt;Technical SEO Services in Karachi | Crawl Diagnostics &amp; Indexation&lt;/h1&gt;
                      </p>
                      <span className="text-[10px] text-[#5E736D] block pt-1">
                        ✓ Exact commercial intent • Single unique H1 • No entity ambiguity
                      </span>
                    </div>
                  )}

                  {activeLayer === 'h2' && (
                    <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px]">
                      <span className="text-[#00FFD1] block font-semibold">Semantic H2 Hierarchy:</span>
                      <p className="text-[#F4FAF7]">
                        ├── H2: Identifying Crawl Budget Leaks on Enterprise Stores<br />
                        ├── H2: Core Web Vitals (LCP/INP) Code-Level Remediation<br />
                        └── H2: Commercial Search Intent Alignment for Pakistani Markets
                      </p>
                    </div>
                  )}

                  {activeLayer === 'schema' && (
                    <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px]">
                      <span className="text-[#00E59B] block font-semibold">JSON-LD Structured Data Schema:</span>
                      <pre className="text-[10px] text-[#94A3B8] font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Daniyal Asad Search Architecture",
  "areaServed": "Karachi, Pakistan",
  "knowsAbout": ["Technical SEO", "Crawl Optimization", "Semantic Search"]
}`}
                      </pre>
                    </div>
                  )}

                  {activeLayer === 'links' && (
                    <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/5 text-[11px]">
                      <span className="text-[#00FFD1] block font-semibold">Internal Linking Graph:</span>
                      <p className="text-[#F4FAF7]">
                        • Siloed context hubs with zero orphan commercial pages<br />
                        • Descriptive anchor text (not &ldquo;click here&rdquo;)<br />
                        • Maximum 3-click depth from root homepage
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-1 flex items-center justify-between text-[10px] font-medium text-[#5E736D]">
                  <span>Entity Disambiguation</span>
                  <span className="text-[#00E59B]">100% Google NLP Compatible</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs font-medium text-[#5E736D]">Content architecture</span>
              <button
                onClick={() => onRouteChange('on-page-seo-services-karachi')}
                className="text-xs font-semibold text-[#00E59B] hover:underline"
              >
                On-Page Systems →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
