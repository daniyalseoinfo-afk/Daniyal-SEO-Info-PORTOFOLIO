import React, { useState } from 'react';
import { Compass, Network, ArrowRight, Eye, CheckCircle2, TrendingUp } from 'lucide-react';

export const SearchFlowStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const concepts = [
    {
      title: 'Discover',
      question: 'Can search engines efficiently crawl the site?',
      detail: 'Ensuring zero crawl traps, optimal robots.txt directives, and efficient server TTFB so search bots traverse critical pages effortlessly.'
    },
    {
      title: 'Understand',
      question: 'Are topics, entities and intent clearly communicated?',
      detail: 'Applying semantic schema markup, clean heading hierarchy, and unambiguous entity references that modern language models and algorithms resolve instantly.'
    },
    {
      title: 'Connect',
      question: 'Does internal architecture distribute relevance effectively?',
      detail: 'Structuring logical siloed hubs, contextual breadcrumbs, and targeted anchor text to funnel link equity to high-value revenue pages.'
    },
    {
      title: 'Convert',
      question: 'Does organic visibility support real business objectives?',
      detail: 'Targeting high-intent commercial and transactional queries rather than empty vanity traffic to produce inquiries, phone calls, and revenue.'
    }
  ];

  const searchFlowSteps = [
    { code: '01', name: 'CRAWL', sub: 'Bot Discovery & HTTP Status' },
    { code: '02', name: 'INDEX', sub: 'Canonicalization & Rendering' },
    { code: '03', name: 'UNDERSTAND', sub: 'Entities & Semantic Context' },
    { code: '04', name: 'RANK', sub: 'SERP Positioning & CTR' },
    { code: '05', name: 'CONVERT', sub: 'Commercial Pipeline Growth' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#060909] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Bento Card */}
        <div className="rounded-3xl bg-[#080D0D] border border-emerald-500/20 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Conceptual Foundation */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-semibold text-[#00E59B] uppercase block mb-2">
                  01 / PHILOSOPHICAL FOUNDATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4FAF7] leading-tight">
                  How I Approach Search
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  I focus on understanding how pages are discovered, interpreted, connected and matched to search demand.
                </p>
              </div>

              {/* 4 Concepts */}
              <div className="space-y-3 pt-2">
                {concepts.map((concept, idx) => (
                  <div
                    key={concept.title}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[#0D1414] border-emerald-500/40 shadow-sm'
                        : 'bg-[#060909]/60 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center space-x-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${activeStep === idx ? 'bg-[#00E59B]' : 'bg-[#5E736D]'}`} />
                        <span>{concept.title}</span>
                      </span>
                      <span className="text-[10px] font-medium text-[#00E59B]">Phase 0{idx + 1}</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1">
                      {concept.question}
                    </div>
                    <p className="text-[11px] text-[#94A3B8] mt-1 leading-relaxed">
                      {concept.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Search Flow Architecture */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0D1414] border border-white/10 p-6 sm:p-8 space-y-6 text-left relative overflow-hidden">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/8 text-xs font-medium">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E59B]" />
                    <span className="font-bold text-white">SEARCH ENGINE PIPELINE</span>
                  </div>
                  <span className="text-[#5E736D]">DOM &amp; SERP FLOW</span>
                </div>

                {/* 5-Step Vertical Interactive Pipeline */}
                <div className="space-y-3 relative">
                  {searchFlowSteps.map((step, idx) => {
                    const isCurrent = activeStep === idx || (activeStep >= 4 && idx === 4);
                    return (
                      <div key={step.name} className="relative">
                        <div
                          className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                            isCurrent
                              ? 'bg-gradient-to-r from-emerald-500/15 via-[#0D1414] to-transparent border-emerald-500/50 shadow-[0_0_20px_rgba(0,229,155,0.1)]'
                              : 'bg-[#080D0D] border-white/5'
                          }`}
                        >
                          <div className="flex items-center space-x-3.5">
                            <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                              isCurrent ? 'bg-[#00E59B] text-[#060909]' : 'bg-[#060909] text-[#5E736D]'
                            }`}>
                              {step.code}
                            </span>
                            <div>
                              <span className={`text-sm font-bold block ${
                                isCurrent ? 'text-white' : 'text-[#94A3B8]'
                              }`}>
                                {step.name}
                              </span>
                              <span className="text-[10px] text-[#5E736D]">
                                {step.sub}
                              </span>
                            </div>
                          </div>
                          
                          <span className="text-xs font-medium">
                            {isCurrent ? (
                              <span className="text-[#00E59B] flex items-center space-x-1">
                                <span>VERIFIED</span>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              <span className="text-[#5E736D]">STAGED</span>
                            )}
                          </span>
                        </div>

                        {/* Connector Arrow for all except last */}
                        {idx < searchFlowSteps.length - 1 && (
                          <div className="flex justify-center py-1">
                            <span className="text-white/20 text-xs">↓</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-[#060909] border border-white/5 text-[11px] font-medium text-[#94A3B8] flex items-center justify-between">
                  <span>Pipeline Philosophy:</span>
                  <span className="text-[#00FFD1]">Engineering over guesswork</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
