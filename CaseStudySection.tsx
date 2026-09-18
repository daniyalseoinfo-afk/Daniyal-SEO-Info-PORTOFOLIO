import React, { useState } from 'react';
import { PageRoute, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/seoData';
import { ArrowUpRight, CheckCircle2, AlertTriangle, Cpu, Search, MapPin, Eye, FileText } from 'lucide-react';

interface CaseStudySectionProps {
  onRouteChange: (route: PageRoute) => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  onRouteChange,
  onSelectCaseStudy
}) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const handleOpenStudy = (study: CaseStudy) => {
    if (onSelectCaseStudy) {
      onSelectCaseStudy(study);
    } else {
      onRouteChange('portfolio');
    }
  };

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-[#0D1017] relative border-t border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] px-2.5 py-1 rounded bg-[#2DD4BF]/10 border border-[#2DD4BF]/20">
                03 / SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display">
              SEO work, documented properly.
            </h2>
            <p className="mt-3 text-base text-[#B5BBC7] max-w-xl">
              Real problem solving across technical crawling audits, keyword intent clustering, and localized search optimization.
            </p>
          </div>

          <button
            onClick={() => onRouteChange('portfolio')}
            className="self-start md:self-auto px-5 py-3 rounded-xl bg-[#11151E] border border-white/10 text-white text-sm font-semibold hover:border-[#2DD4BF]/50 transition-all flex items-center space-x-2"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#2DD4BF]" />
          </button>
        </div>

        {/* Horizontal Case Studies Blocks */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={study.id}
                id={`case-study-${study.id}`}
                className="rounded-3xl bg-[#11151E] border border-white/10 hover:border-white/25 transition-all p-6 sm:p-10 shadow-2xl group overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Visual Preview / Layered Diagnostics */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-[#080A0F] border border-white/12 p-3 shadow-inner group-hover:border-[#2DD4BF]/40 transition-all">
                      
                      {/* Status Badge */}
                      <div className="absolute top-5 left-5 z-20 px-3 py-1 rounded-md bg-[#080A0F]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-[#2DD4BF] flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                        <span>{study.status}</span>
                      </div>

                      {/* Image Thumbnail */}
                      <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#161C28]">
                        <img
                          src={study.imageSrc}
                          alt={study.title}
                          className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/90 via-[#080A0F]/20 to-transparent" />
                      </div>

                      {/* Floating Metric Strip */}
                      {study.keyMetrics && (
                        <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-white/8 text-center font-mono">
                          {study.keyMetrics.map((m, i) => (
                            <div key={i} className="p-2 rounded-lg bg-[#161C28]/80 border border-white/5">
                              <span className="text-xs sm:text-sm font-bold text-[#2DD4BF] block">{m.value}</span>
                              <span className="text-[9px] text-[#7D8595] truncate block">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Details Breakdown */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#45E6FF] border border-white/5">
                        {study.category}
                      </span>
                      <span className="text-xs font-mono text-[#7D8595]">
                        {study.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <div className="text-xs font-mono text-[#7D8595] bg-[#161C28] p-2.5 rounded-xl border border-white/5">
                      <strong className="text-[#B5BBC7]">Context:</strong> {study.clientType}
                    </div>

                    {/* Challenge & Finding Preview */}
                    <p className="text-sm text-[#B5BBC7] leading-relaxed">
                      {study.challenge}
                    </p>

                    {/* Tools Used */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-[#7D8595] uppercase block mb-1.5">
                        Diagnostic Tools Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-[#161C28] text-white border border-white/5"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center space-x-3">
                      <button
                        onClick={() => onRouteChange('portfolio')}
                        className="px-5 py-2.5 rounded-xl bg-[#2DD4BF] text-[#080A0F] text-xs sm:text-sm font-bold hover:bg-[#14B8A6] transition-all flex items-center space-x-1.5"
                      >
                        <span>View Full Breakdown</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const SeoProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#080A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky Desktop Process Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-5">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] px-2.5 py-1 rounded bg-[#2DD4BF]/10 border border-[#2DD4BF]/20">
                04 / PROCESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-tight">
              From search problem to{' '}
              <span className="text-[#2DD4BF]">measurable action.</span>
            </h2>

            <p className="text-base text-[#B5BBC7] leading-relaxed">
              SEO is not a one-time magic trick. It is a systematic feedback loop: discover the core bottleneck, eliminate technical friction, target real user intent, optimize page relevance, and track performance in Search Console.
            </p>

            <div className="p-4 rounded-2xl bg-[#11151E] border border-white/8 space-y-2">
              <div className="text-xs font-mono text-[#2DD4BF] font-semibold uppercase tracking-wider">
                Execution Guarantee
              </div>
              <p className="text-xs text-[#7D8595] leading-relaxed">
                Clear deliverables at every step. You receive structured spreadsheets, verified crawl reports, and clear developer action plans.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Step-by-Step Flow */}
          <div className="lg:col-span-7 space-y-6">
            {[
              {
                num: '01',
                title: 'Understand',
                subtitle: 'Business, Audience, Website & Goals',
                desc: 'Every project starts with honest discovery. I look at your business model, customer journey in Karachi or global markets, and current search hurdles.',
                deliverable: 'Discovery brief & commercial priority matrix'
              },
              {
                num: '02',
                title: 'Audit',
                subtitle: 'Review Technical Health & Search Performance',
                desc: 'A deep-dive diagnosis analyzing how search bots crawl, render, index, and evaluate your website. We identify status code errors, index bloat, and Core Web Vitals issues.',
                deliverable: 'Screaming Frog crawl report & prioritized fix backlog'
              },
              {
                num: '03',
                title: 'Research',
                subtitle: 'Analyze Keywords, Intent & Competitors',
                desc: 'Identifying the exact queries potential clients use. I evaluate search intent, analyze SERP structures, group queries into topic clusters, and construct a logical URL architecture.',
                deliverable: 'Categorized keyword master sheet & cluster map'
              },
              {
                num: '04',
                title: 'Optimize',
                subtitle: 'Improve Content, Pages & Technical Elements',
                desc: 'Executing targeted optimizations on metadata, heading hierarchy, contextual internal links, schema markup, and content depth to satisfy search intent better than competitors.',
                deliverable: 'Page-by-page metadata, JSON-LD schema & internal linking'
              },
              {
                num: '05',
                title: 'Measure',
                subtitle: 'Monitor Search Console, GA4 & Organic Performance',
                desc: 'Tracking how Google reacts to changes. We monitor impressions, average ranking positions, organic clicks, index coverage, and actual inquiry leads.',
                deliverable: 'GSC performance review & next iteration roadmap'
              }
            ].map((step, i) => {
              const isActive = activeStep === i;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setActiveStep(i)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#11151E] border-[#2DD4BF]/50 shadow-[0_0_30px_-5px_rgba(45,212,191,0.15)]'
                      : 'bg-[#0D1017] border-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`text-2xl sm:text-3xl font-mono font-bold transition-colors ${
                        isActive ? 'text-[#2DD4BF]' : 'text-[#7D8595]'
                      }`}>
                        {step.num}
                      </span>
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-[#B5BBC7]'
                        }`}>
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono text-[#7D8595]">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#2DD4BF] text-[#080A0F] font-bold' : 'bg-white/5 text-[#7D8595]'
                    }`}>
                      {isActive ? 'ACTIVE STAGE' : 'STEP'}
                    </span>
                  </div>

                  <p className="text-sm text-[#B5BBC7] leading-relaxed mt-2">
                    {step.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-2 text-xs font-mono">
                    <span className="text-[#7D8595]">Deliverable:</span>
                    <span className={isActive ? 'text-[#45E6FF]' : 'text-white'}>
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
