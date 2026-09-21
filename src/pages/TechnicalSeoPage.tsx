import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Layers, 
  FileCode, 
  Zap, 
  Globe, 
  Terminal, 
  Search, 
  RefreshCw, 
  AlertTriangle, 
  Check, 
  Code2, 
  Network,
  Activity,
  ArrowUpRight
} from 'lucide-react';
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
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState<'crawl' | 'index' | 'vitals' | 'schema'>('crawl');
  const [simulatedUrl, setSimulatedUrl] = useState('https://example.com/products/category?sort=asc');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 600);
  };

  const auditModules = [
    {
      id: 'crawl-budget',
      title: 'Crawl Budget & Server Efficiency',
      tag: 'CRAWL-BUDGET',
      desc: 'Eliminate spider traps, unindexed parameter loops, and 301 redirect chains to ensure search bots only spend request budget on revenue-generating pages.',
      metrics: ['0% Trapped URLs', '3x Crawl Velocity', '100% Clean Trailing Slashes'],
      deliverables: ['Custom robots.txt logic', 'Crawl depth flattening (< 3 clicks)', 'Server access log audits'],
      tool: 'Screaming Frog + Log Analyzer'
    },
    {
      id: 'gsc-indexation',
      title: 'Google Indexation & Coverage Diagnostics',
      tag: 'INDEX-PIPELINE',
      desc: 'Resolve persistent "Discovered - currently not indexed" and "Crawled - currently not indexed" statuses across large e-commerce catalogs and content hubs.',
      metrics: ['99.4% Indexation Rate', '0 Soft 404 Errors', 'XML Sitemap Priority Indexing'],
      deliverables: ['Dynamic XML sitemap trees', 'Canonical header parity checks', 'Noindex tag remediation'],
      tool: 'Google Search Console API'
    },
    {
      id: 'core-web-vitals',
      title: 'Core Web Vitals & Render Pipeline',
      tag: 'FIELD-DATA',
      desc: 'Engineering high-scoring LCP, INP, and CLS scores specifically benchmarked on 4G mobile networks across Pakistan and global markets.',
      metrics: ['LCP < 1.4s (Green)', 'INP < 90ms (Responsive)', 'CLS < 0.02 (Stable)'],
      deliverables: ['Elimination of render-blocking JS', 'Server-Side Rendering (SSR) hydration audits', 'Next-gen WebP/AVIF compression'],
      tool: 'Chrome DevTools + PageSpeed'
    },
    {
      id: 'schema-architecture',
      title: 'Structured Data & Entity Graph',
      tag: 'SEMANTIC-GRAPH',
      desc: 'Deploy custom JSON-LD schema across Organization, LocalBusiness, FAQPage, Article, and Product hierarchies to capture SERP Rich Results.',
      metrics: ['100% Valid JSON-LD', 'Rich Snippet Eligibility', 'Entity Disambiguation'],
      deliverables: ['Nested JSON-LD architecture', 'BreadcrumbList hierarchy', 'Schema validation against Google Rich Results'],
      tool: 'Schema.org + Google Rich Testing'
    },
    {
      id: 'international-href',
      title: 'Hreflang & Regional Target Signals',
      tag: 'GEO-ROUTING',
      desc: 'Multi-regional search targeting ensuring users in Karachi, the UAE, the UK, and North America land on the correct localized currency and language pages.',
      metrics: ['Zero Self-Referential Errors', '100% x-default Fallback', 'Bidirectional Link Parity'],
      deliverables: ['Hreflang XML sitemaps', 'Geo-IP redirect audit for bots', 'Currency parameter canonicalization'],
      tool: 'Ahrefs + Custom Python Scripts'
    },
    {
      id: 'javascript-rendering',
      title: 'JavaScript SEO & DOM Hydration',
      tag: 'DOM-INSPECTION',
      desc: 'Ensuring client-rendered Single Page Applications (React, Next.js, Vue, Angular) pass critical meta, link rel, and primary content to Googlebot without timeouts.',
      metrics: ['HTML Raw vs Rendered Parity', 'Fast Bot Execution Time', 'Full Crawlable Internal Links'],
      deliverables: ['Dynamic rendering assessment', 'Hydration mismatch discovery', 'Anchor href crawlable format audit'],
      tool: 'Puppeteer + Headless Chrome'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* System Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(0,229,155,0.15)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
                </span>
                <span className="text-xs font-medium text-[#F4FAF7]">
                  SYSTEM 01 / CRAWL &amp; SEARCH ARCHITECTURE
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
                  Technical SEO Services in{' '}
                  <span className="text-gradient-emerald">Karachi</span> &amp; Worldwide.
                </h1>
                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                  Eliminating crawl friction, resolving indexing bottlenecks, optimizing JavaScript DOM rendering, and structuring semantic entity signals for sustained organic search compounding.
                </p>
              </div>

              {/* Technical Telemetry Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['200 OK STATUS', 'INDEX-FIRST ARCHITECTURE', 'CANONICAL PARITY', 'CORE WEB VITALS', 'JSON-LD GRAPH', 'ZERO ORPHAN URLS'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#0D1414] border border-white/[0.07] text-[#00E59B] font-mono text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onRequestReview()}
                  className="px-6 py-3.5 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all duration-300 shadow-[0_0_30px_rgba(0,229,155,0.35)] flex items-center space-x-2"
                >
                  <span>Request Technical Crawl Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onRouteChange('portfolio')}
                  className="px-6 py-3.5 rounded-full bg-[#0B1111] text-[#F4FAF7] font-semibold text-sm border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center space-x-2"
                >
                  <span>View 14K+ URL Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00E59B]" />
                </button>
              </div>
            </div>

            {/* Right: Technical Diagnostic Bento Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-emerald-500/20 bg-[#080D0D] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden space-y-5">
                
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                  <div className="flex items-center space-x-2.5">
                    <Terminal className="w-4 h-4 text-[#00E59B]" />
                    <span className="text-xs font-semibold text-white tracking-wide">CRAWL TELEMETRY MONITOR</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-[#00E59B] border border-emerald-500/20">
                    LIVE ENGINE
                  </span>
                </div>

                {/* Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-video group">
                  <img
                    src={technicalCrawlImage}
                    alt="Daniyal Asad analyzing technical search architecture and crawl indexation logs"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-1 rounded bg-[#060909]/90 text-[#00FFD1] border border-cyan-500/20">
                      STATUS: 200 OK
                    </span>
                    <span className="px-2 py-1 rounded bg-[#060909]/90 text-white/80 border border-white/10">
                      DEPTH: L1 &lt; 2 CLICKS
                    </span>
                  </div>
                </div>

                {/* Telemetry Stats Grid */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-[#0B1111] border border-white/[0.05] text-center">
                    <span className="text-[10px] text-[#94A3B8] uppercase block">Crawl Depth</span>
                    <span className="text-lg font-mono font-bold text-[#00E59B]">&lt; 3 Clicks</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B1111] border border-white/[0.05] text-center">
                    <span className="text-[10px] text-[#94A3B8] uppercase block">Index Status</span>
                    <span className="text-lg font-mono font-bold text-white">99.4%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B1111] border border-white/[0.05] text-center">
                    <span className="text-[10px] text-[#94A3B8] uppercase block">Avg TTFB</span>
                    <span className="text-lg font-mono font-bold text-[#00FFD1]">180ms</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Crawl Diagnostic Simulator */}
      <section className="py-16 sm:py-20 border-b border-white/[0.07] bg-[#080D0D]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1111] border border-white/[0.07] text-xs font-semibold text-[#00E59B]">
              <Zap className="w-3.5 h-3.5" />
              <span>INTERACTIVE TECHNICAL INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-[800] text-white tracking-[-0.03em] leading-tight">
              Test Common Crawl Bottlenecks
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Switch diagnostic layers to see how Googlebot interacts with complex multi-parameter URLs and architecture scripts.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#0B1111] overflow-hidden shadow-2xl">
            
            {/* Simulator Tabs */}
            <div className="flex border-b border-white/[0.07] bg-[#080D0D] overflow-x-auto scrollbar-none">
              {[
                { id: 'crawl', label: '1. Crawl Traps & Parameters', icon: Network },
                { id: 'index', label: '2. Canonical & Coverage Pipeline', icon: ShieldCheck },
                { id: 'vitals', label: '3. Core Web Vitals (INP/LCP)', icon: Activity },
                { id: 'schema', label: '4. Entity Schema Hierarchy', icon: Code2 }
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeDiagnosticTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDiagnosticTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-6 py-4 text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                      active 
                        ? 'border-[#00E59B] text-[#00E59B] bg-white/[0.02]' 
                        : 'border-transparent text-[#94A3B8] hover:text-white hover:bg-white/[0.01]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-[#00E59B]' : 'text-[#5E736D]'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulator Interactive Body */}
            <div className="p-6 sm:p-8">
              
              {/* URL Input bar */}
              <form onSubmit={handleSimulate} className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#5E736D]">GET</span>
                  <input
                    type="text"
                    value={simulatedUrl}
                    onChange={(e) => setSimulatedUrl(e.target.value)}
                    className="w-full pl-14 pr-4 py-3 rounded-xl bg-[#080D0D] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSimulating}
                  className="px-5 py-3 rounded-xl bg-[#00E59B] text-[#060909] text-xs font-bold hover:bg-[#37F3B0] transition-colors flex items-center justify-center space-x-2 shrink-0"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Simulating...' : 'Run Simulation'}</span>
                </button>
              </form>

              {/* Tab Display Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  {activeDiagnosticTab === 'crawl' && (
                    <>
                      <h3 className="text-xl font-bold text-white">Parameter Explosion &amp; Crawl Budget Waste</h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        Faceted navigation (e.g. <code className="font-mono text-[#00FFD1] text-xs">?sort=asc&amp;color=blue</code>) can multiply 500 catalog products into 45,000 crawl paths, exhausting bot requests before valuable commercial pages are reached.
                      </p>
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Robots.txt Disallow parameter filters that do not yield search volume</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Self-referencing canonical pointing directly to master category</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>AJAX/pushState for sorting so search engines only crawl canonical URLs</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeDiagnosticTab === 'index' && (
                    <>
                      <h3 className="text-xl font-bold text-white">Coverage Fix: Discovered vs. Indexed Parity</h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        When Google lists URLs under "Discovered - currently not indexed", it signals that bot crawl thresholds were exceeded or content quality signals were insufficient.
                      </p>
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Flatten internal linking graph so all core pages sit within 3 clicks of root</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Generate segmented XML sitemap tiers strictly for 200 OK indexable URLs</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Purge soft-404 thin search results from internal site search pages</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeDiagnosticTab === 'vitals' && (
                    <>
                      <h3 className="text-xl font-bold text-white">Field Data Performance: Sub-1.5s LCP on Mobile</h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        Interaction to Next Paint (INP) and Largest Contentful Paint (LCP) directly influence mobile SERP rank stability and real user bounce rate.
                      </p>
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Eliminate long main-thread tasks blocking user interactions</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Implement fetchpriority=&quot;high&quot; on above-the-fold hero images</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Enforce CSS aspect-ratio on all containers to achieve 0.00 CLS score</span>
                        </div>
                      </div>
                    </>
                  )}

                  {activeDiagnosticTab === 'schema' && (
                    <>
                      <h3 className="text-xl font-bold text-white">Semantic Entity Disambiguation via JSON-LD</h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        Rather than simple meta tags, structured entity graphs establish unambiguous authority relationships between organizations, local branches, and service offerings.
                      </p>
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Nested @graph architecture connecting LocalBusiness to WebSite entities</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Full schema validation guaranteeing zero errors in Google Rich Results Test</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>FAQPage and Article structured data to dominate SERP real estate</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Right Terminal Code Output */}
                <div className="lg:col-span-5 rounded-2xl bg-[#060909] border border-white/[0.08] p-4 font-mono text-[11px] leading-relaxed space-y-2 text-[#94A3B8]">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[#5E736D]">
                    <span>BOT_RESPONSE_HEADERS</span>
                    <span className="text-[#00E59B]">HTTP/2 200</span>
                  </div>
                  <p><span className="text-[#00FFD1]">X-Robots-Tag:</span> index, follow</p>
                  <p><span className="text-[#00FFD1]">Link:</span> &lt;https://example.com/products/category&gt;; rel=&quot;canonical&quot;</p>
                  <p><span className="text-[#00FFD1]">Content-Type:</span> text/html; charset=UTF-8</p>
                  <p><span className="text-[#00FFD1]">Server-Timing:</span> ttfb;dur=142.6, render;dur=88.2</p>
                  <div className="p-2.5 rounded bg-[#080D0D] border border-emerald-500/20 text-[#00E59B] text-[10px]">
                    ✓ CRAWL HEALTH VERIFIED: Zero duplicate loops detected. Canonical link points to primary category without query string.
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6 Core Technical Pillars Bento Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B1111] border border-white/[0.07] text-xs font-semibold text-[#00E59B]">
              <Cpu className="w-3.5 h-3.5" />
              <span>THE 6 PILLARS OF SEARCH ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em] leading-[1.05]">
              How I Inspect &amp; Solve Technical Search Barriers
            </h2>
            <p className="text-base text-[#94A3B8]">
              Unlike generic agency surface audits, my technical engineering protocols resolve the underlying crawl, server, and architecture defects that suppress search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditModules.map((module) => (
              <div
                key={module.id}
                className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0B1111] text-[#00E59B] border border-emerald-500/20">
                      {module.tag}
                    </span>
                    <span className="text-[11px] text-[#5E736D] font-mono">{module.tool}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E59B] transition-colors leading-snug">
                    {module.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {module.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  {/* Key Metrics */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#5E736D] block font-semibold">Target Outcomes</span>
                    <div className="flex flex-wrap gap-1.5">
                      {module.metrics.map((m) => (
                        <span key={m} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B1111] text-[#F4FAF7] border border-white/5">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <ul className="space-y-1 text-xs text-[#94A3B8]">
                    {module.deliverables.map((d) => (
                      <li key={d} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-14 sm:py-20 border-t border-white/[0.07] bg-gradient-to-b from-[#080D0D] to-[#060909]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-[800] tracking-[-0.035em] text-white leading-[1.02]">
            Ready to solve your website&apos;s{' '}
            <span className="text-gradient-emerald">technical crawl debt?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Book a comprehensive technical diagnostic with Daniyal Asad. Every recommendation is backed by server logs, crawl trees, and clear business justification.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onRequestReview()}
              className="px-8 py-4 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm sm:text-base hover:bg-[#37F3B0] transition-all shadow-[0_0_35px_rgba(0,229,155,0.4)] inline-flex items-center space-x-2"
            >
              <span>Request Free Technical SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-cyan-500/20 shadow-[0_0_15px_-3px_rgba(0,255,209,0.15)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFD1] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFD1]"></span>
                </span>
                <span className="text-xs font-medium text-[#F4FAF7]">
                  SYSTEM 02 / ON-PAGE &amp; CONTENT ARCHITECTURE
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
                  On-Page SEO &amp; Semantic{' '}
                  <span className="text-gradient-emerald">Content Architecture</span>
                </h1>
                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                  Transforming loose articles into authoritative, interconnected topic clusters. Engineering entity coverage, CTR-optimized metadata, and internal link equity distribution that Google favors.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['ENTITY MAPPING', 'SEARCH INTENT MATCHING', 'TITLE TAG CTR', 'TOPIC CLUSTER SILOS', 'INTERNAL PAGERANK', 'RICH SNIPPETS'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#0D1414] border border-white/[0.07] text-[#00FFD1] font-mono text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onRequestReview}
                  className="px-6 py-3.5 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all duration-300 shadow-[0_0_30px_rgba(0,229,155,0.35)] flex items-center space-x-2"
                >
                  <span>Request On-Page Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onRouteChange('portfolio')}
                  className="px-6 py-3.5 rounded-full bg-[#0B1111] text-[#F4FAF7] font-semibold text-sm border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center space-x-2"
                >
                  <span>Explore Cluster Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00E59B]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-cyan-500/20 bg-[#080D0D] p-6 shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                  <span className="text-xs font-semibold text-white">TOPIC GRAPH MODEL</span>
                  <span className="text-[10px] font-mono text-[#00FFD1] px-2 py-0.5 rounded bg-cyan-500/10">3-TIER SILO</span>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-video group">
                  <img
                    src={keywordArchitectureImage}
                    alt="Commercial keyword clustering and on-page content architecture planning"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-80" />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8]">Entity Coverage</span>
                    <span className="font-mono text-[#00E59B] font-bold">100% Core Salience</span>
                  </div>
                  <div className="w-full bg-[#0B1111] h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* On-Page Framework Bento Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#00FFD1] uppercase tracking-wider">
              ON-PAGE METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em]">
              Precision Content Optimization Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E59B]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">1. Search Intent Disambiguation</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Determining whether searchers require informational synthesis, commercial comparison matrixes, or direct conversion checkpoints to rank in top positions.
              </p>
              <ul className="text-xs text-[#5E736D] space-y-1 font-mono pt-2">
                <li>• Commercial vs Informational tagging</li>
                <li>• Direct SERP intent verification</li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00FFD1]">
                <FileCode className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">2. CTR-Engineered Metadata</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Authored title tags and rich snippet descriptions built to maximize click-through rate from the SERP without resorting to misleading clickbait.
              </p>
              <ul className="text-xs text-[#5E736D] space-y-1 font-mono pt-2">
                <li>• Power modifiers &amp; brand signals</li>
                <li>• Pixel-width truncation prevention</li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-[#00CFC8]">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">3. Semantic Internal Linking</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Engineering contextual bridge links between supportive guides and high-conversion pillar pages to funnel PageRank authority directly to money pages.
              </p>
              <ul className="text-xs text-[#5E736D] space-y-1 font-mono pt-2">
                <li>• Descriptive anchor text variation</li>
                <li>• Elimination of orphan subpages</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
