import React from 'react';
import { Wrench, Terminal, Cpu, Database, Search, LayoutTemplate, Activity } from 'lucide-react';

export const ToolboxMiniBento: React.FC = () => {
  const tools = [
    {
      name: 'Google Search Console',
      role: 'Primary Search Interface',
      icon: Terminal,
      bullets: [
        'Crawl diagnostics & bot coverage',
        'Indexation status & excluded URLs',
        'Real search query CTR & impression trends',
        'Core Web Vitals field data tracking'
      ]
    },
    {
      name: 'Screaming Frog SEO Spider',
      role: 'Technical Crawler Engine',
      icon: Cpu,
      bullets: [
        'Crawl simulation with JavaScript rendering',
        'Response codes (3xx, 4xx, 5xx) isolation',
        'Canonical tag & robots directives inspection',
        'Internal PageRank & crawl depth mapping'
      ]
    },
    {
      name: 'Google Analytics 4',
      role: 'Organic Behavioral Attribution',
      icon: Activity,
      bullets: [
        'Organic session engagement rates',
        'Landing page conversion pathways',
        'Device & geographic audience analysis',
        'Event-driven inquiry & phone call tracking'
      ]
    },
    {
      name: 'Ahrefs / Semrush',
      role: 'Competitive & SERP Intelligence',
      icon: Database,
      bullets: [
        'Karachi & Pakistani competitor keyword gaps',
        'Search intent & historical SERP volatility',
        'Backlink profile toxic anchor audits',
        'Topical clustering & volume verification'
      ]
    },
    {
      name: 'PageSpeed Insights & CrUX',
      role: 'Performance Diagnostics',
      icon: Search,
      bullets: [
        'LCP, INP, and CLS field & lab profiling',
        'Render-blocking script identification',
        'Pakistani hosting latency & TTFB checks',
        'DOM payload & image optimization audits'
      ]
    },
    {
      name: 'WordPress & Elementor',
      role: 'CMS Architecture & Deployment',
      icon: LayoutTemplate,
      bullets: [
        'Clean semantic DOM and schema injection',
        'Robots.txt & XML sitemap customization',
        'Faceted parameter query cleanup',
        'Fast lightweight template engineering'
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#060909] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>05 / TECHNICAL INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4FAF7]">
            Toolbox Mini-Bento
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Every utility in the stack serves a distinct diagnostic or deployment function, not mere decoration.
          </p>
        </div>

        {/* 6-Card Bento Grid with functional bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="rounded-2xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/30 p-6 space-y-4 transition-all shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#0D1414] border border-white/10 flex items-center justify-center text-[#00E59B] group-hover:border-emerald-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-[#5E736D] uppercase">
                      {tool.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {tool.name}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                    {tool.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#00E59B]">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] font-medium text-[#5E736D]">
                  <span>Applied in daily client audits</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
