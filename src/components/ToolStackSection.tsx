import React, { useState } from 'react';
import { TOOL_STACK } from '../data/seoData';
import { Terminal, Cpu, Search, Activity, Layers, Sparkles, TrendingUp, BarChart2, Check } from 'lucide-react';

export const ToolStackSection: React.FC = () => {
  return (
    <section id="tool-stack" className="py-24 sm:py-32 bg-[#0D1017] relative border-t border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7FF3C] px-2.5 py-1 rounded bg-[#B7FF3C]/10 border border-[#B7FF3C]/20">
              TOOL STACK & DIAGNOSTICS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display">
            Tools are useful. Knowing what to look for{' '}
            <span className="text-[#45E6FF]">matters more.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B5BBC7]">
            I use industry-standard software to gather raw search and crawl data, then apply disciplined technical analysis to extract what actually matters for ranking.
          </p>
        </div>

        {/* Tools Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOL_STACK.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-3xl bg-[#11151E] border border-white/8 hover:border-[#B7FF3C]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#161C28] text-[#B7FF3C] border border-white/5">
                    {tool.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#7D8595]">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#B7FF3C] transition-colors mb-2">
                  {tool.name}
                </h3>

                <div className="text-xs font-mono text-[#45E6FF] bg-[#161C28] px-3 py-1.5 rounded-lg border border-white/5 mb-4">
                  {tool.usage}
                </div>

                <ul className="space-y-2 text-xs text-[#B5BBC7]">
                  {tool.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-[#B7FF3C] font-mono font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#7D8595]">
                <span>Status: Verified Tool</span>
                <span className="text-emerald-400">Active Workflow</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const AnalyticsPhilosophySection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'clicks' | 'impressions' | 'ctr' | 'leads'>('clicks');

  return (
    <section id="analytics-philosophy" className="py-24 sm:py-32 bg-[#080A0F] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#B7FF3C]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Statement */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7FF3C] px-2.5 py-1 rounded bg-[#B7FF3C]/10 border border-[#B7FF3C]/20">
              MEASUREMENT PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display">
            Rankings are useful.{' '}
            <span className="text-[#B7FF3C]">Business impact</span> matters more.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B5BBC7]">
            A ranking position that produces zero qualified visitors is meaningless. We track the entire organic journey: Search impressions → Click-through rate → Engagement → Inquiries.
          </p>
        </div>

        {/* Full-Width Interactive Analytics Visualizer Card */}
        <div className="rounded-3xl bg-[#11151E] border border-white/12 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
          
          {/* Top Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7D8595] block">
                ORGANIC SEARCH EVOLUTION MODEL
              </span>
              <span className="text-sm font-bold text-white mt-0.5 block">
                Illustrative 6-Month SEO Compounding Cycle
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 bg-[#161C28] p-1.5 rounded-xl border border-white/8">
              {[
                { id: 'clicks', label: 'Organic Clicks', color: '#B7FF3C' },
                { id: 'impressions', label: 'Impressions', color: '#45E6FF' },
                { id: 'ctr', label: 'CTR (%)', color: '#8B5CFF' },
                { id: 'leads', label: 'Qualified Leads', color: '#22c55e' }
              ].map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedMetric === metric.id
                      ? 'bg-[#11151E] text-white font-bold border border-white/10 shadow-sm'
                      : 'text-[#7D8595] hover:text-white'
                  }`}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-1.5"
                    style={{ backgroundColor: metric.color }}
                  />
                  {metric.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chart Visual */}
          <div className="py-8">
            <div className="relative h-64 sm:h-72 w-full flex items-end justify-between gap-2 sm:gap-4 pt-10">
              
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-white border-dashed w-full" />
                <div className="border-b border-white border-dashed w-full" />
                <div className="border-b border-white border-dashed w-full" />
                <div className="border-b border-white border-dashed w-full" />
              </div>

              {/* Data Bars / Curve Simulation */}
              {[
                { month: 'Month 1', stage: 'Audit & Tech Fixes', clicks: 20, impressions: 25, ctr: 15, leads: 10 },
                { month: 'Month 2', stage: 'Index Cleanup', clicks: 32, impressions: 40, ctr: 28, leads: 22 },
                { month: 'Month 3', stage: 'Keyword Clustering', clicks: 52, impressions: 65, ctr: 48, leads: 40 },
                { month: 'Month 4', stage: 'On-Page Optimization', clicks: 70, impressions: 82, ctr: 65, leads: 60 },
                { month: 'Month 5', stage: 'Local Citations', clicks: 88, impressions: 94, ctr: 82, leads: 78 },
                { month: 'Month 6', stage: 'Compounding Authority', clicks: 100, impressions: 100, ctr: 95, leads: 95 }
              ].map((col, idx) => {
                const heightVal = col[selectedMetric];

                return (
                  <div key={col.month} className="flex-1 flex flex-col items-center group relative z-10">
                    
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 px-2.5 py-1 rounded-md bg-[#161C28] border border-white/15 text-[10px] font-mono text-[#B7FF3C] whitespace-nowrap shadow-xl">
                      {col.stage}
                    </div>

                    {/* Bar */}
                    <div className="w-full max-w-[48px] bg-[#161C28] rounded-t-xl overflow-hidden h-48 flex items-end border border-white/5 group-hover:border-[#B7FF3C]/50 transition-colors">
                      <div
                        className="w-full transition-all duration-700 ease-out rounded-t-lg"
                        style={{
                          height: `${heightVal}%`,
                          backgroundColor:
                            selectedMetric === 'clicks'
                              ? '#B7FF3C'
                              : selectedMetric === 'impressions'
                              ? '#45E6FF'
                              : selectedMetric === 'ctr'
                              ? '#8B5CFF'
                              : '#22c55e',
                        }}
                      />
                    </div>

                    {/* X-axis labels */}
                    <span className="text-[11px] font-mono text-[#F7F8FA] font-medium mt-3">
                      {col.month}
                    </span>
                    <span className="text-[9px] font-mono text-[#7D8595] hidden sm:block truncate max-w-[80px]">
                      {col.stage}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#7D8595] gap-2">
            <span>Illustrative growth curve based on systematic technical remediation and intent alignment.</span>
            <span className="text-[#B7FF3C] font-semibold">Zero Fake Metrics Guarantee</span>
          </div>

        </div>

      </div>
    </section>
  );
};
