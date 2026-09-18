import React, { useState } from 'react';
import { PageRoute, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/seoData';
import { ArrowRight, CheckCircle2, AlertCircle, Cpu, Search, MapPin, Eye, ArrowUpRight } from 'lucide-react';
import daniyalPortrait from '../assets/images/daniyal_portrait_1787128804384.jpg';

export const PortfolioPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStudyModal, setActiveStudyModal] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Technical', 'On-Page', 'Keyword Research', 'Local SEO'];

  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-20">
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#2DD4BF]">
              <span>03 / CASE STUDIES & AUDIT LOGS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
              SEO Portfolio
            </h1>

            <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
              Real problem solving across technical crawling audits, keyword intent clustering, and localized search optimization. Documented methodology rather than unverified marketing hype.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#2DD4BF] text-[#080A0F] font-bold shadow-md'
                      : 'bg-[#11151E] text-[#B5BBC7] hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="py-20 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#11151E] border border-white/10 hover:border-[#2DD4BF]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#080A0F] text-[#2DD4BF] border border-white/10">
                      {study.status}
                    </span>
                    <span className="text-xs font-mono text-[#7D8595]">
                      {study.category} • {study.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <div className="text-xs text-[#7D8595] font-mono">
                    <strong className="text-[#B5BBC7]">Context:</strong> {study.clientType}
                  </div>

                  <p className="text-xs sm:text-sm text-[#B5BBC7] leading-relaxed">
                    {study.challenge}
                  </p>

                  {/* Findings */}
                  <div className="p-4 rounded-xl bg-[#161C28] border border-white/5 space-y-2">
                    <span className="text-[11px] font-mono uppercase text-[#45E6FF] block font-bold">
                      Key Audit Diagnostics
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#B5BBC7]">
                      {study.findings.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-[#2DD4BF] font-mono">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Taken */}
                  <div className="space-y-1 text-xs text-[#7D8595]">
                    <span className="font-mono text-white block">Actions Executed:</span>
                    <p className="line-clamp-2">{study.actionsTaken.join(' • ')}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs font-mono text-[#2DD4BF]">
                    {study.resultSummary}
                  </div>
                  <button
                    onClick={() => setActiveStudyModal(study)}
                    className="px-3.5 py-2 rounded-lg bg-[#161C28] text-white text-xs font-mono hover:bg-[#2DD4BF] hover:text-[#080A0F] transition-colors flex items-center space-x-1"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail for Deep Dive */}
      {activeStudyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080A0F]/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#11151E] border border-white/14 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveStudyModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#161C28] text-white hover:bg-white/10"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#2DD4BF] px-2.5 py-1 rounded bg-[#161C28]">
                {activeStudyModal.status} • {activeStudyModal.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                {activeStudyModal.title}
              </h3>
              <p className="text-xs font-mono text-[#7D8595]">
                {activeStudyModal.clientType} — {activeStudyModal.location}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase font-mono">1. The Search Bottleneck</h4>
              <p className="text-xs sm:text-sm text-[#B5BBC7] leading-relaxed bg-[#161C28] p-4 rounded-xl border border-white/5">
                {activeStudyModal.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase font-mono">2. Audit Findings</h4>
              <div className="space-y-2">
                {activeStudyModal.findings.map((finding, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0D1017] border border-white/5 text-xs text-[#B5BBC7] flex items-start space-x-2">
                    <span className="text-[#2DD4BF] font-bold font-mono">[{idx + 1}]</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase font-mono">3. Actions & Resolution</h4>
              <div className="space-y-2">
                {activeStudyModal.actionsTaken.map((action, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0D1017] border border-[#2DD4BF]/20 text-xs text-white flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#161C28] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono uppercase text-[#45E6FF] font-bold">Key Architectural Takeaway:</span>
              <p className="text-xs text-[#B5BBC7] italic">{activeStudyModal.keyLearning}</p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => {
                  setActiveStudyModal(null);
                  onRequestReview();
                }}
                className="px-6 py-3 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-xs sm:text-sm hover:bg-[#14B8A6]"
              >
                Request Similar SEO Audit for Your Site
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export const AboutPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#2DD4BF]">
                <span>PERSONAL ENTITY & BACKGROUND</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
                About Daniyal
              </h1>

              <p className="text-xl font-medium text-[#45E6FF] font-display">
                Junior SEO Executive based in Karachi, Pakistan.
              </p>

              <p className="text-base sm:text-lg text-[#B5BBC7] leading-relaxed">
                I help businesses improve organic search visibility through disciplined technical diagnostics, keyword clustering, on-page optimization, and local search architecture.
              </p>

              <p className="text-sm sm:text-base text-[#7D8595] leading-relaxed">
                I discovered search engine optimization at the intersection of web technology, data analysis, and user psychology. Instead of treating SEO as generic marketing tricks, I focus on how search bots parse DOM trees, evaluate crawl efficiency, and match search intent with user-first content.
              </p>

              <div className="pt-2 flex gap-4">
                <button
                  onClick={onRequestReview}
                  className="px-6 py-3.5 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-sm hover:bg-[#14B8A6] transition-all"
                >
                  Work With Daniyal
                </button>
                <button
                  onClick={() => onRouteChange('contact')}
                  className="px-6 py-3.5 rounded-xl bg-[#161C28] text-white font-semibold text-sm border border-white/10"
                >
                  Send a Direct Message
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-white/14 shadow-2xl bg-[#11151E]">
                <img
                  src={daniyalPortrait}
                  alt="Daniyal, Junior SEO Executive in Karachi"
                  className="w-full h-auto object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Work Routine & Principles */}
      <section className="py-20 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <span className="text-xs font-mono text-[#2DD4BF] uppercase">01. Discovery & Crawling</span>
              <h3 className="text-lg font-bold text-white">Diagnostic Depth</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                I crawl websites with Screaming Frog and evaluate Search Console coverage before proposing any content changes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <span className="text-xs font-mono text-[#45E6FF] uppercase">02. Intent Mapping</span>
              <h3 className="text-lg font-bold text-white">Semantic Clusters</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Grouping commercial and informational queries prevents cannibalization and builds topical authority.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <span className="text-xs font-mono text-purple-400 uppercase">03. Measurement</span>
              <h3 className="text-lg font-bold text-white">Transparent Tracking</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Direct Search Console and GA4 data tracking organic clicks and inquiries, not fake vanity numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
