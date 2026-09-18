import React, { useState, useEffect, useRef } from 'react';
import { Search, TrendingUp, CheckCircle2, Globe, Cpu, ArrowUpRight, Sparkles, Activity, Layers } from 'lucide-react';

export const SearchIntelligence3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const queries = [
    'SEO services in Karachi',
    'Technical SEO audit Karachi',
    'Local SEO Clifton DHA Karachi',
    'Keyword research & clustering PK'
  ];

  // Mouse tilt tracking (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 4.5;
    const rotY = (x / (rect.width / 2)) * 4.5;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setActiveQueryIndex((prev) => (prev + 1) % queries.length);
        setIsTyping(false);
      }, 300);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto lg:max-w-none perspective-1000 py-6"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2DD4BF]/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-10 w-64 h-64 bg-[#45E6FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main 3D Tilted Card Container */}
      <div
        className="relative transition-transform duration-300 ease-out preserve-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Floating Top Metric Pill */}
        <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 z-20 px-3.5 py-1.5 rounded-full bg-[#11151E]/90 border border-[#2DD4BF]/40 backdrop-blur-xl shadow-xl flex items-center space-x-2 animate-bounce duration-1000">
          <div className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
          <span className="text-[11px] font-mono font-bold text-white tracking-tight">
            Position ↑ <span className="text-[#2DD4BF]">+38% Clicks</span>
          </span>
        </div>

        {/* Floating Index Status Pill */}
        <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 z-20 px-3 py-1.5 rounded-full bg-[#11151E]/95 border border-[#45E6FF]/40 backdrop-blur-xl shadow-xl flex items-center space-x-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#45E6FF]" />
          <span className="text-[11px] font-mono text-[#F7F8FA]">
            Status: <span className="text-[#45E6FF] font-bold">200 OK • Indexed ✓</span>
          </span>
        </div>

        {/* Floating Mini Crawl Node Tag */}
        <div className="hidden sm:flex absolute -right-6 top-16 z-20 px-3 py-1 rounded-lg bg-[#161C28]/90 border border-white/10 backdrop-blur-md items-center space-x-1.5 text-[10px] font-mono text-[#7D8595]">
          <Cpu className="w-3 h-3 text-[#2DD4BF]" />
          <span>Crawl Depth: 1</span>
        </div>

        {/* Floating Keyword Cluster Tag */}
        <div className="hidden sm:flex absolute -left-6 bottom-20 z-20 px-3 py-1 rounded-lg bg-[#161C28]/90 border border-white/10 backdrop-blur-md items-center space-x-1.5 text-[10px] font-mono text-[#7D8595]">
          <Layers className="w-3 h-3 text-[#45E6FF]" />
          <span>Cluster: High Intent</span>
        </div>

        {/* Primary Browser / Search Intelligence Panel */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0D1017]/90 border border-white/12 backdrop-blur-2xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Header Bar with Browser controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/8">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[10px] font-mono text-[#7D8595]">google.com/search</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#2DD4BF] border border-[#2DD4BF]/20">
                SERP LIVE
              </span>
            </div>
          </div>

          {/* Search Query Input Bar */}
          <div className="relative mb-5">
            <div className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/12 text-sm focus-within:border-[#2DD4BF] transition-colors">
              <div className="flex items-center space-x-2.5 overflow-hidden">
                <Search className="w-4 h-4 text-[#2DD4BF] flex-shrink-0" />
                <span className={`font-mono text-xs sm:text-sm text-[#F7F8FA] truncate ${isTyping ? 'opacity-50' : 'opacity-100'} transition-opacity`}>
                  {queries[activeQueryIndex]}
                </span>
              </div>
              <span className="w-1.5 h-4 bg-[#2DD4BF] animate-pulse" />
            </div>

            {/* Quick Query Switches */}
            <div className="flex items-center space-x-1.5 mt-2 overflow-x-auto pb-1 no-scrollbar">
              {queries.map((q, i) => (
                <button
                  key={q}
                  onClick={() => setActiveQueryIndex(i)}
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-md whitespace-nowrap transition-all ${
                    activeQueryIndex === i
                      ? 'bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF]/40 font-semibold'
                      : 'bg-white/5 text-[#7D8595] hover:text-white border border-transparent'
                  }`}
                >
                  {i === 0 ? 'Primary' : i === 1 ? 'Technical' : i === 2 ? 'Local' : 'Clusters'}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Preview Cards */}
          <div className="space-y-3">
            {/* Result 1 - Highlighted Primary Result */}
            <div className="p-3.5 rounded-xl bg-[#11151E] border border-[#2DD4BF]/30 hover:border-[#2DD4BF] transition-all group">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center">
                    <Globe className="w-2.5 h-2.5 text-[#2DD4BF]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#B5BBC7]">daniyalseo.pk/karachi</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#2DD4BF] text-[#080A0F] font-bold">
                  #1 ORGANIC
                </span>
              </div>
              <h4 className="text-sm font-semibold text-[#2DD4BF] group-hover:underline flex items-center">
                <span>Daniyal | SEO Services in Karachi & Technical Optimization</span>
              </h4>
              <p className="text-xs text-[#B5BBC7] mt-1 line-clamp-2 leading-relaxed">
                Professional SEO services in Karachi by Daniyal. Specializing in Technical audits, On-Page structure, Google Maps local ranking, and high-intent keyword clustering...
              </p>
              <div className="flex items-center space-x-2 mt-2 pt-2 border-t border-white/5 text-[10px] font-mono text-[#7D8595]">
                <span className="text-[#45E6FF]">Schema: ProfessionalService</span>
                <span>•</span>
                <span>Core Web Vitals: 98/100</span>
              </div>
            </div>

            {/* Result 2 - Structured Local Pack Mini Card */}
            <div className="p-3 rounded-xl bg-[#121722]/80 border border-white/8 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-1">
                  <span className="text-[10px] font-mono text-[#7D8595]">daniyalseo.pk/technical-seo</span>
                </div>
                <span className="text-[9px] font-mono text-[#7D8595]">Position #2</span>
              </div>
              <h5 className="text-xs font-semibold text-white">
                Technical SEO Services Karachi — Crawling, Indexing & CWV Audit
              </h5>
              <p className="text-[11px] text-[#7D8595] mt-0.5 line-clamp-1">
                Resolve crawl budget waste, render-blocking scripts, and duplicate canonicals for Pakistani sites...
              </p>
            </div>

            {/* Result 3 - Keyword Cluster Node */}
            <div className="p-2.5 rounded-xl bg-[#121722]/50 border border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-3.5 h-3.5 text-[#45E6FF]" />
                <span className="text-xs text-[#B5BBC7]">Google Search Console Analytics Signal</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-mono">
                <span className="text-[#2DD4BF]">CTR 8.4%</span>
                <span className="text-[#7D8595]">Avg. Pos: 2.1</span>
              </div>
            </div>
          </div>

          {/* Micro Footer Data Signals */}
          <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between text-[10px] font-mono text-[#7D8595]">
            <span className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-[#2DD4BF]" />
              <span>Real-time SERP Entity Diagnostic</span>
            </span>
            <span className="text-[#B5BBC7]">Karachi, PK (Geo-Located)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
