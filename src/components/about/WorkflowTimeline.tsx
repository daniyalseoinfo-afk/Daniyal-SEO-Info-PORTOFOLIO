import React from 'react';
import { GitCommit, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export const WorkflowTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Audit',
      desc: 'Server logs, Screaming Frog crawl, 404s, redirect chains, and indexing health.',
      badge: 'DOM & Logs'
    },
    {
      num: '02',
      title: 'Diagnose',
      desc: 'Isolating root bottlenecks, crawl traps, thin parameter bloat, and canonical flaws.',
      badge: 'Root Cause'
    },
    {
      num: '03',
      title: 'Map Intent',
      desc: 'Clustering target queries into commercial topic silos and logical 3-click hierarchy.',
      badge: 'Semantic Silos'
    },
    {
      num: '04',
      title: 'Optimize',
      desc: 'Deploying metadata, heading hierarchy, JSON-LD schema, and internal PageRank flow.',
      badge: 'On-Page & Code'
    },
    {
      num: '05',
      title: 'Measure',
      desc: 'Tracking GSC impressions, CTR velocity, rank stability, and genuine business inquiries.',
      badge: 'GA4 & GSC'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#060909] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
            <GitCommit className="w-3.5 h-3.5" />
            <span>04 / SYSTEMATIC DELIVERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4FAF7]">
            SEO Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            A 5-phase structured timeline designed to solve search problems methodically rather than throwing random tactics at a website.
          </p>
        </div>

        {/* Timeline Grid with Connected Line */}
        <div className="relative">
          
          {/* Background illuminated connecting line for desktop */}
          <div className="hidden lg:block absolute top-7 left-10 right-10 h-0.5 bg-gradient-to-r from-[#00E59B] via-[#00FFD1] to-purple-500 opacity-40 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, index) => (
              <div
                key={item.num}
                className="rounded-2xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/40 p-5 space-y-4 transition-all shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-full bg-[#0D1414] border border-emerald-500/30 text-[#00E59B] font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[#00E59B] group-hover:text-[#060909] transition-colors shadow-sm">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-[#5E736D]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 text-[10px] font-medium text-[#5E736D] flex items-center justify-between">
                  <span>Phase 0{index + 1}</span>
                  <span className="text-[#00E59B] opacity-0 group-hover:opacity-100 transition-opacity">Ready ›</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
