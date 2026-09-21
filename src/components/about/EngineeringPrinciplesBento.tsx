import React from 'react';
import { Terminal, Network, BarChart3, TrendingUp, ShieldCheck, Activity, Cpu } from 'lucide-react';

export const EngineeringPrinciplesBento: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060909] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 / OPERATING DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4FAF7]">
            Engineering Principles
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Search optimization grounded in systems thinking, algorithmic transparency, and structural integrity.
          </p>
        </div>

        {/* Asymmetric Bento Grid (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 01 — Diagnose Depth (Large Card, col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080D0D] border border-emerald-500/20 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#00E59B] uppercase">
                  PRINCIPLE 01
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-[#00E59B] border border-emerald-500/20">
                  ROOT CAUSE ANALYSIS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Diagnose Depth
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                I investigate the underlying technical or architectural cause before recommending surface-level changes. A drop in rankings is rarely solved by adding more keywords to a title tag if the page is trapped in a 4-level deep crawl chain.
              </p>
            </div>

            {/* Mini Diagnostic Terminal */}
            <div className="rounded-2xl bg-[#0D1414] border border-white/8 p-4 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[#5E736D] text-[11px]">
                <div className="flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00E59B]" />
                  <span>terminal_diagnostics.sh</span>
                </div>
                <span className="text-[#00E59B]">ONLINE</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">crawl_status</span>
                  <span className="text-[#00E59B] font-bold">healthy (200 OK)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">indexability</span>
                  <span className="text-[#00FFD1] font-bold">checking directives</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">canonical</span>
                  <span className="text-[#00E59B] font-bold">valid self-ref</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">internal_depth</span>
                  <span className="text-amber-300 font-bold">optimizing (≤ 3 clicks)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 — Semantic Clusters (col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#080D0D] border border-cyan-500/20 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#00FFD1] uppercase">
                  PRINCIPLE 02
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-cyan-500/10 text-[#00FFD1] border border-cyan-500/20">
                  SEMANTIC ENTITIES
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Semantic Clusters
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Search engines interpret topics through interconnected entities, not isolated strings. I build structured topic trees that reinforce topical authority.
              </p>
            </div>

            {/* Visual Connected Entity/Keyword Nodes */}
            <div className="rounded-2xl bg-[#0D1414] border border-white/8 p-4 text-xs space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-[#00E59B]" />
                <span>Core Topic (Authority Hub)</span>
              </div>
              <div className="pl-4 space-y-1.5 border-l border-white/10 ml-3 text-[11px] text-[#94A3B8]">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[#00FFD1]">↳</span>
                  <span className="text-white">Service:</span>
                  <span>Specialized Procedure</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[#00FFD1]">↳</span>
                  <span className="text-white">Location:</span>
                  <span>Clifton / DHA Karachi</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[#00FFD1]">↳</span>
                  <span className="text-white">Entity:</span>
                  <span>Doctor / Clinic Schema</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[#00FFD1]">↳</span>
                  <span className="text-white">Intent:</span>
                  <span className="text-[#00E59B]">High-Intent Transaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 — Transparent Tracking (Wide / Featured Card col-span-12) */}
          <div className="lg:col-span-12 rounded-3xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="md:w-1/2 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#00E59B] uppercase">
                  PRINCIPLE 03
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-[#5E736D] border border-white/5">
                  DEMO ANALYTICS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Transparent Tracking
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Direct Search Console and GA4 data tracking organic clicks and inquiries, not fabricated vanity numbers or manipulated ranking screenshots.
              </p>
            </div>

            {/* Miniature Analytics Chart Display */}
            <div className="md:w-1/2 w-full rounded-2xl bg-[#0D1414] border border-white/8 p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-[#94A3B8]">Telemetry Trend:</span>
                <span className="text-[10px] text-[#5E736D]">Demo Analytics</span>
              </div>

              {/* 4 Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/5">
                  <span className="text-[10px] text-[#5E736D] block font-medium">Visibility</span>
                  <span className="font-bold text-[#00E59B] font-mono">+42%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/5">
                  <span className="text-[10px] text-[#5E736D] block font-medium">Clicks</span>
                  <span className="font-bold text-white">Verified</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/5">
                  <span className="text-[10px] text-[#5E736D] block font-medium">Indexed URLs</span>
                  <span className="font-bold text-[#00FFD1] font-mono">100% Core</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#080D0D] border border-white/5">
                  <span className="text-[10px] text-[#5E736D] block font-medium">Commercial</span>
                  <span className="font-bold text-[#00E59B] font-mono">Top 3 SERP</span>
                </div>
              </div>

              {/* Mini Sparkline Chart */}
              <div className="h-12 w-full bg-black/40 rounded-xl p-1 border border-white/5 overflow-hidden">
                <svg viewBox="0 0 300 50" className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M 0 40 Q 60 38 100 25 T 180 22 T 240 10 T 300 5"
                    fill="none"
                    stroke="#00E59B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
