import React from 'react';
import { Activity, Terminal, TrendingUp, AlertTriangle, Layers, ShieldCheck } from 'lucide-react';

export const CaseStudiesHero: React.FC = () => {
  const heroChips = [
    'Technical SEO',
    'Local Search',
    'Content Architecture',
    'Keyword Clustering',
    'Crawl & Indexation'
  ];

  return (
    <section className="relative pt-12 pb-14 sm:pb-16 overflow-hidden border-b border-white/5 bg-[#060909]">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle engineering grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#00E59B 1px, transparent 1px), linear-gradient(90deg, #00E59B 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Context */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>SELECTED SEO SYSTEMS / CASE STUDIES</span>
            </div>

            <h1 className="text-[clamp(2.2rem,6.8vw,3.2rem)] md:text-[clamp(2.8rem,5.5vw,4.2rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-[800] tracking-[-0.025em] md:tracking-[-0.035em] lg:tracking-[-0.04em] text-[#F4FAF7] leading-[1.04] md:leading-[1.0] lg:leading-[0.98] antialiased">
              Search problems.<br />
              <span className="text-gradient-emerald">Diagnosed, engineered &amp; improved.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              Explore selected SEO projects covering crawl diagnostics, local search architecture, keyword clustering, on-page optimization and commercial search growth.
            </p>

            {/* Metric-Style Hero Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full bg-[#080D0D] border border-white/8 hover:border-emerald-500/30 text-xs font-medium text-[#94A3B8] transition-colors shadow-sm"
                >
                  <span className="text-[#00E59B] mr-1.5 font-bold">●</span>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Performance Intelligence HUD */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#080D0D]/95 border border-emerald-500/25 p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,229,155,0.08)] relative overflow-hidden backdrop-blur-xl">
              
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/8">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E59B] animate-pulse" />
                  <span className="text-xs font-semibold text-white uppercase">
                    Performance Intelligence
                  </span>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-cyan-500/10 text-[#00FFD1] border border-cyan-500/20">
                  Interface Preview
                </span>
              </div>

              {/* Sample Metric Grid */}
              <div className="grid grid-cols-2 gap-3 py-4">
                <div className="p-3 rounded-2xl bg-[#0D1414] border border-white/5">
                  <div className="flex items-center justify-between text-[#5E736D] text-[10px] font-medium">
                    <span>Organic Visibility</span>
                    <TrendingUp className="w-3 h-3 text-[#00E59B]" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#00E59B] mt-1 block">
                    +38%
                  </span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Trailing 90 days</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#0D1414] border border-white/5">
                  <div className="flex items-center justify-between text-[#5E736D] text-[10px] font-medium">
                    <span>Indexed URLs</span>
                    <ShieldCheck className="w-3 h-3 text-[#00FFD1]" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 block">
                    94%
                  </span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Zero crawl traps</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#0D1414] border border-white/5">
                  <div className="flex items-center justify-between text-[#5E736D] text-[10px] font-medium">
                    <span>Critical Issues</span>
                    <AlertTriangle className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#F4FAF7] mt-1 block">
                    03
                  </span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Remediated P1/P2</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#0D1414] border border-white/5">
                  <div className="flex items-center justify-between text-[#5E736D] text-[10px] font-medium">
                    <span>Query Coverage</span>
                    <Layers className="w-3 h-3 text-[#00E59B]" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#00E59B] mt-1 block">
                    +126%
                  </span>
                  <span className="text-[9px] font-medium text-[#5E736D]">Commercial clusters</span>
                </div>
              </div>

              {/* Miniature Sparkline Graph & Crawl Health */}
              <div className="pt-2 border-t border-white/8 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-medium">
                  <span className="text-[#5E736D]">Crawl Latency Trend:</span>
                  <span className="text-[#00E59B] font-semibold"><span className="font-mono">240ms</span> (Healthy)</span>
                </div>

                {/* SVG Mini Sparkline */}
                <div className="h-14 w-full relative bg-black/40 rounded-xl p-1 border border-white/5 overflow-hidden">
                  <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hudGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00E59B" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00E59B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 50 Q 50 48 80 35 T 160 30 T 220 15 T 300 8 L 300 60 L 0 60 Z"
                      fill="url(#hudGradient)"
                    />
                    <path
                      d="M 0 50 Q 50 48 80 35 T 160 30 T 220 15 T 300 8"
                      fill="none"
                      stroke="#00E59B"
                      strokeWidth="2.5"
                    />
                    <circle cx="300" cy="8" r="4" fill="#00FFD1" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[10px] font-medium text-[#5E736D]">
                  <span className="flex items-center space-x-1">
                    <Activity className="w-3 h-3 text-[#00E59B]" />
                    <span>Crawl Health Status</span>
                  </span>
                  <span className="text-white">Active Googlebot-Desktop / Mobile</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
