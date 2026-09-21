import React, { useState } from 'react';
import { Terminal, Cpu, Search, Activity, Layers, Sparkles, TrendingUp, BarChart2, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ToolStackSection: React.FC = () => {
  const tools = [
    {
      name: 'Google Search Console',
      role: 'Source of Truth Search Intelligence',
      tag: '● Primary Diagnostic',
      usage: 'Direct first-party data on real user queries, impressions, average CTR, mobile usability, and indexing anomalies.',
      accent: 'emerald',
      features: ['Live Query Impressions & CTR', 'Index Coverage & Exclusions', 'URL Inspection API Verification']
    },
    {
      name: 'Screaming Frog SEO Spider',
      role: 'Enterprise Crawl Simulation',
      tag: '● Crawl Engine',
      usage: 'Full simulated bot crawl inspecting status codes (404/301 loops), canonical tags, DOM rendering, and heading hierarchy.',
      accent: 'cyan',
      features: ['Custom Regex & XPath Extraction', 'JavaScript Rendering Simulation', 'Crawl Depth & Tree Visualization']
    },
    {
      name: 'Google Analytics 4',
      role: 'Organic Conversion Attribution',
      tag: '● Revenue Tracking',
      usage: 'Measuring user engagement, session duration, landing page conversion rates, and multi-channel assisted lead conversions.',
      accent: 'emerald',
      features: ['Custom Event & Lead Tracking', 'Organic User Journey Mapping', 'Engagement Rate by Search Topic']
    },
    {
      name: 'Ahrefs & SEMrush',
      role: 'Competitive Landscape & SERPs',
      tag: '● Market Intel',
      usage: 'Reverse engineering competitor keyword footprints, identifying content gaps, and monitoring referring domain velocity.',
      accent: 'cyan',
      features: ['SERP Volatility Tracking', 'Commercial Keyword Gap Analysis', 'Backlink Toxicity & Anchor Auditing']
    },
    {
      name: 'PageSpeed Insights & CrUX',
      role: 'Core Web Vitals Engineering',
      tag: '● Performance Vitals',
      usage: 'Benchmarking real-user performance across 75th percentile mobile networks in Pakistan and global markets.',
      accent: 'emerald',
      features: ['LCP (Largest Contentful Paint)', 'INP (Interaction to Next Paint)', 'CLS (Cumulative Layout Shift)']
    },
    {
      name: 'Schema.org & Rich Results',
      role: 'Structured Data Graph Validation',
      tag: '● Entity Verification',
      usage: 'Synthesizing and validating JSON-LD schemas for ProfessionalService, LocalBusiness, FAQPage, and Organization entities.',
      accent: 'cyan',
      features: ['Google Rich Results Testing', 'Schema Markup Validator', 'Semantic Entity Disambiguation']
    },
    {
      name: 'Google Keyword Planner',
      role: 'Search Demand & Commercial Intent',
      tag: '● Demand Forecasting',
      usage: 'Extracting historical query volume trends, regional seasonal peaks, and CPC commercial bidding indicators.',
      accent: 'emerald',
      features: ['Geo-Targeted Karachi Volume', 'Buyer Commercial Intent Data', 'Historical Demand Elasticity']
    },
    {
      name: 'Google Business Profile',
      role: 'Local Map Pack & Geo Authority',
      tag: '● Local Ecosystem',
      usage: 'Managing Google Maps 3-Pack placement, local business citations, customer review sentiment, and geo-intent visibility.',
      accent: 'cyan',
      features: ['Map Pack Ranking Verification', 'Local Citation Alignment (NAP)', 'Direct Call & Direction Insights']
    }
  ];

  return (
    <section id="tools-section" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>DIAGNOSTIC INSTRUMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight leading-[1.12]">
            The Stack Behind{' '}
            <span className="text-gradient-emerald">the Decisions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Software collects the raw data; search architecture interprets it. Every tool in my stack serves a specific verification function in the ranking pipeline.
          </p>
        </div>

        {/* Bento Grid for Tool Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-2xl bg-[#080D0D]/90 border border-white/8 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-[10px] font-semibold text-[#00E59B]">
                    {tool.tag}
                  </span>
                  <span className="text-[9px] font-medium text-[#5E736D] uppercase">
                    Verified
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00E59B] transition-colors mt-3 mb-1">
                  {tool.name}
                </h3>

                <span className="text-xs font-semibold text-[#00FFD1] block mb-3">
                  {tool.role}
                </span>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {tool.usage}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/5 text-[11px] text-[#5E736D]">
                  {tool.features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[#94A3B8]">
                      <span className="w-1 h-1 rounded-full bg-[#00E59B]" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-medium text-[#5E736D]">
                <span>Pipeline Stage</span>
                <span className="text-white font-semibold">Active Daily</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* Section 13: Analytics Philosophy & Compounding Growth */
export const AnalyticsPhilosophySection: React.FC = () => {
  const [timeHorizon, setTimeHorizon] = useState<'30D' | '90D' | '6M' | '12M'>('12M');

  const funnelStages = [
    {
      num: '01',
      title: 'Targeted Visibility',
      metric: '+140% Impressions',
      desc: 'Ranking for specific commercial queries rather than broad informational fluff with zero purchase intent.'
    },
    {
      num: '02',
      title: 'Qualified Organic CTR',
      metric: '18.4% Average CTR',
      desc: 'Compelling snippet titles, rich review stars, and precise intent matching that wins the click.'
    },
    {
      num: '03',
      title: 'Intent-Aligned Experience',
      metric: '< 1.4s LCP',
      desc: 'Fast rendering, clear content hierarchy, and immediate answers that stop users from bouncing back to Google.'
    },
    {
      num: '04',
      title: 'Commercial Conversion',
      metric: '+210% Inquiries',
      desc: 'Frictionless lead captures, direct phone call triggers, and clear next steps that generate revenue.'
    }
  ];

  return (
    <section id="analytics-philosophy" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASUREMENT &amp; RETURN ON EFFORT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight leading-[1.12]">
            Traffic Is Useful.{' '}
            <span className="text-gradient-emerald">Qualified Search Demand Is Better.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A spike in page views that generates zero inquiries is vanity. We engineer the entire search lifecycle: from initial bot discovery and high-CTR snippet visibility to conversion on high-value landing pages.
          </p>
        </div>

        {/* Compounding Search Growth Visualizer Card */}
        <div className="rounded-3xl bg-[#080D0D]/95 border border-emerald-500/20 p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/8 gap-4">
            <div>
              <span className="text-[10px] uppercase text-[#00E59B] font-semibold block">
                COMPOUNDING TRAJECTORY SIMULATION
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Qualified Organic Search vs. Traditional Paid Ad Reliance
              </h3>
            </div>

            {/* Time Horizon Toggles */}
            <div className="flex items-center rounded-xl bg-[#0D1414] p-1 border border-white/8">
              {(['30D', '90D', '6M', '12M'] as const).map((horizon) => (
                <button
                  key={horizon}
                  onClick={() => setTimeHorizon(horizon)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    timeHorizon === horizon
                      ? 'bg-emerald-500/20 text-[#00E59B] font-bold border border-emerald-500/30'
                      : 'text-[#5E736D] hover:text-white'
                  }`}
                >
                  {horizon}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Compounding Search Growth Curve */}
          <div className="py-6">
            <div className="h-64 sm:h-72 w-full relative">
              <svg viewBox="0 0 800 240" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00E59B" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00E59B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="0" y1="60" x2="800" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="120" x2="800" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="180" x2="800" y2="180" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                {/* Compounding Area Fill */}
                <path
                  d="M 0 220 Q 200 215 350 170 T 600 80 T 800 20 L 800 240 L 0 240 Z"
                  fill="url(#curveGradient)"
                />

                {/* Primary Compounding Organic Curve */}
                <path
                  d="M 0 220 Q 200 215 350 170 T 600 80 T 800 20"
                  fill="none"
                  stroke="#00E59B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Linear/Flat Traditional Baseline Curve */}
                <path
                  d="M 0 210 L 800 180"
                  fill="none"
                  stroke="#5E736D"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* Highlight Point at Peak */}
                <circle cx="800" cy="20" r="6" fill="#00FFD1" stroke="#060909" strokeWidth="2" />
                <circle cx="600" cy="80" r="5" fill="#00E59B" stroke="#060909" strokeWidth="2" />
                <circle cx="350" cy="170" r="4" fill="#00E59B" stroke="#060909" strokeWidth="2" />
              </svg>

              {/* Curve Annotation Badges */}
              <div className="absolute top-2 right-2 sm:right-6 px-3 py-1.5 rounded-xl bg-[#0D1414] border border-emerald-500/30 text-right shadow-lg">
                <span className="text-[10px] font-semibold text-[#00E59B] block">
                  +280% Compounding Growth
                </span>
                <span className="text-[9px] font-medium text-[#5E736D]">
                  Zero Ongoing Ad Spend Needed
                </span>
              </div>

              <div className="absolute bottom-8 left-6 text-[10px] font-medium text-[#5E736D] hidden sm:block">
                <span>Baseline: Flat Visibility (Without Crawl Optimization)</span>
              </div>
            </div>
          </div>

          {/* Bottom Trajectory Stats */}
          <div className="pt-4 border-t border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-[10px] text-[#5E736D] block font-medium">CRAWL EFFICIENCY</span>
              <span className="text-sm sm:text-base font-bold text-white font-mono">99% Clean</span>
            </div>
            <div>
              <span className="text-[10px] text-[#5E736D] block font-medium">TARGETED CLICKS</span>
              <span className="text-sm sm:text-base font-bold text-[#00E59B] font-mono">5,390 / mo</span>
            </div>
            <div>
              <span className="text-[10px] text-[#5E736D] block font-medium">COMMERCIAL INQUIRIES</span>
              <span className="text-sm sm:text-base font-bold text-[#00FFD1] font-mono">+210%</span>
            </div>
            <div>
              <span className="text-[10px] text-[#5E736D] block font-medium">CAC REDUCTION</span>
              <span className="text-sm sm:text-base font-bold text-white font-mono">-64% Paid Cost</span>
            </div>
          </div>

        </div>

        {/* 4 Pipeline Transformation Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {funnelStages.map((stage) => (
            <div
              key={stage.num}
              className="p-5 rounded-2xl bg-[#080D0D] border border-white/6 hover:border-emerald-500/30 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-mono font-bold text-[#00E59B]">
                  {stage.num}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-[#00E59B] font-semibold border border-emerald-500/20">
                  {stage.metric}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-1.5">
                {stage.title}
              </h4>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
