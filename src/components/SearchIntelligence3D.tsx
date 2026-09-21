import React, { useState, useRef } from 'react';
import { Search, Globe, ArrowUpRight, TrendingUp, Monitor, Smartphone, ShieldCheck, CheckCircle2, ChevronRight, Activity, Cpu } from 'lucide-react';

export const SearchIntelligence3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 3.5;
    const rotY = (x / (rect.width / 2)) * 3.5;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto lg:max-w-none perspective-1000 select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* 3D Transform Container */}
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Floating Metric Pill 1: Position Lift */}
        <div className="absolute -top-4 -left-2 sm:-top-5 sm:-left-4 z-30 px-3 py-1.5 rounded-full bg-[#0B1111]/90 border border-emerald-500/30 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#00E59B] animate-pulse" />
          <span className="text-[11px] font-mono text-white">
            Position: <span className="text-[#00E59B] font-bold">#1</span> <span className="text-[#00FFD1] text-[10px] font-mono ml-1">↑ 6 positions</span>
          </span>
        </div>

        {/* Floating Metric Pill 2: Indexation Verified */}
        <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 z-30 px-3 py-1.5 rounded-full bg-[#0B1111]/95 border border-cyan-400/30 backdrop-blur-xl shadow-xl flex items-center space-x-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFD1]" />
          <span className="text-[11px] font-mono text-[#F4FAF7]">
            Crawl Status: <span className="text-[#00FFD1] font-bold">200 OK • Canonical Valid</span>
          </span>
        </div>

        {/* Main SERP Terminal Card */}
        <div className="rounded-3xl bg-[#080D0D]/95 border border-emerald-500/20 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_30px_-5px_rgba(0,229,155,0.1)] relative overflow-hidden">
          
          {/* Subtle Faint Grid Pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

          {/* Top Controls: Badge, Query Bar, Device Switcher */}
          <div className="relative z-10 space-y-3 pb-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#00E59B]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E59B]">
                  LIVE SERP MODEL
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#5E736D] border border-white/5">
                  Demo Simulation
                </span>
              </div>

              {/* Device Toggle Tabs */}
              <div className="flex items-center rounded-lg bg-[#0D1414] p-0.5 border border-white/10">
                <button
                  onClick={() => setActiveDevice('desktop')}
                  className={`px-2 py-1 rounded-md text-[10px] font-mono flex items-center space-x-1 transition-colors ${
                    activeDevice === 'desktop' ? 'bg-emerald-500/20 text-[#00E59B] font-bold' : 'text-[#5E736D] hover:text-white'
                  }`}
                  aria-label="Desktop SERP view"
                >
                  <Monitor className="w-3 h-3" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setActiveDevice('mobile')}
                  className={`px-2 py-1 rounded-md text-[10px] font-mono flex items-center space-x-1 transition-colors ${
                    activeDevice === 'mobile' ? 'bg-emerald-500/20 text-[#00E59B] font-bold' : 'text-[#5E736D] hover:text-white'
                  }`}
                  aria-label="Mobile SERP view"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            {/* Google Search Bar Mock */}
            <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 shadow-inner">
              <Search className="w-4 h-4 text-[#00E59B] flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-[#F4FAF7] truncate">
                technical seo consultant karachi
              </span>
              <div className="ml-auto hidden sm:flex items-center space-x-1 text-[9px] font-mono text-[#5E736D] uppercase">
                <span>Google PK</span>
              </div>
            </div>
          </div>

          {/* Real-time KPI Bar for Position #1 Model */}
          <div className="relative z-10 grid grid-cols-4 gap-2 my-4 p-2.5 rounded-xl bg-[#0D1414]/90 border border-emerald-500/15 text-center">
            <div>
              <span className="text-[9px] font-mono text-[#5E736D] uppercase block">Position</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#00E59B]">#1 (Top)</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-[#5E736D] uppercase block">CTR</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white">18.4%</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-[#5E736D] uppercase block">Impressions</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white">12.8K</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-[#5E736D] uppercase block">Clicks</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#00FFD1]">2.3K</span>
            </div>
          </div>

          {/* Organic Results Simulation */}
          <div className="relative z-10 space-y-4">
            
            {/* RESULT #1: Daniyal Asad Architecture Showcase */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-emerald-500/[0.08] to-transparent border border-emerald-500/30 shadow-[0_4px_20px_rgba(0,229,155,0.06)] relative group">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-[#00E59B] font-bold">
                RANK #1
              </div>

              {/* Breadcrumb & URL */}
              <div className="flex items-center space-x-2 text-xs mb-1">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[9px] font-mono text-[#00E59B] font-bold">
                  DA
                </div>
                <div className="flex items-center space-x-1 text-[11px] font-mono text-[#94A3B8]">
                  <span>daniyalseo.com</span>
                  <span className="text-[#5E736D]">›</span>
                  <span className="text-[#00FFD1]">services</span>
                  <span className="text-[#5E736D]">›</span>
                  <span className="text-white">technical-seo</span>
                </div>
              </div>

              {/* Snippet Title */}
              <h4 className="text-sm sm:text-base font-bold text-[#38BDF8] group-hover:underline cursor-pointer flex items-center space-x-1">
                <span>Technical SEO Consultant in Karachi | Daniyal Asad — Search Architecture</span>
              </h4>

              {/* Snippet Description */}
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                Hands-on Technical SEO & Crawl Diagnostics for Karachi & remote enterprises. Auditing indexation bottlenecks, Core Web Vitals, JSON-LD entity schema, and commercial search intent.
              </p>

              {/* Sitelinks Extensions (Rich Result feature) */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-emerald-500/15 text-[11px]">
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="font-semibold text-white block">Crawl & Indexation Audit</span>
                  <span className="text-[10px] text-[#5E736D] truncate block">Screaming Frog 404/301 loops & crawl budget.</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="font-semibold text-white block">Core Web Vitals Tuning</span>
                  <span className="text-[10px] text-[#5E736D] truncate block">LCP, INP & CLS code-level optimization.</span>
                </div>
              </div>
            </div>

            {/* RESULT #2: Generic Competitor (illustrates contrast in search intent) */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 opacity-60">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-[#5E736D] mb-1">
                <span>genericagency.pk › services › seo</span>
              </div>
              <h5 className="text-xs font-semibold text-[#64748B]">
                Best SEO Agency Karachi | Digital Marketing Packages
              </h5>
              <p className="text-[11px] text-[#5E736D] mt-1 line-clamp-1">
                We are a full-service marketing agency offering generic SEO packages and social media management in Karachi...
              </p>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#5E736D]">
            <span>Algorithm: Google Organic Ranking Pipeline</span>
            <span>Target Market: Karachi, PK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
