import React from 'react';
import { PageRoute } from '../types';
import { SearchIntelligence3D } from './SearchIntelligence3D';
import { ArrowDown, ArrowUpRight, Check, MapPin, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none -z-10" />

      {/* Ambient Lighting Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#2DD4BF]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#45E6FF]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Location & Entity Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#11151E] border border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-[#F7F8FA]">
                KARACHI, PAKISTAN
              </span>
              <span className="text-[#7D8595]">•</span>
              <span className="text-xs font-mono text-[#B5BBC7]">
                Available for New SEO Projects
              </span>
            </div>

            {/* Main Headline with Electric Lime Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F7F8FA] leading-[1.08] font-display">
              SEO that turns{' '}
              <span className="text-[#2DD4BF] underline decoration-[#2DD4BF]/40 decoration-wavy underline-offset-8">
                search data
              </span>{' '}
              into practical growth.
            </h1>

            {/* Entity Identification Subhead */}
            <div className="flex items-center space-x-2 text-sm sm:text-base font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45E6FF]" />
              <span>Daniyal — Junior SEO Executive in Karachi</span>
            </div>

            {/* Honest, Clear Body Copy */}
            <p className="text-base sm:text-lg text-[#B5BBC7] max-w-xl leading-relaxed">
              I help businesses improve organic visibility through keyword research, technical SEO, on-page optimization, and local search. Clear reasoning, hands-on diagnostics, and zero generic fluff.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-services-btn"
                onClick={() => onRouteChange('seo-services-in-karachi')}
                className="px-6 py-3.5 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-sm sm:text-base hover:bg-[#14B8A6] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_-5px_rgba(45,212,191,0.4)] flex items-center space-x-2 active:translate-y-0"
                data-cursor="SERVICES"
              >
                <span>Explore SEO Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-work-btn"
                onClick={() => onRouteChange('portfolio')}
                className="px-6 py-3.5 rounded-xl bg-[#11151E] border border-white/12 text-white font-semibold text-sm sm:text-base hover:bg-[#161C28] hover:border-white/25 transition-all flex items-center space-x-2"
                data-cursor="WORK"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#7D8595]" />
              </button>

              <button
                id="hero-audit-review-btn"
                onClick={onRequestReview}
                className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-mono text-[#2DD4BF] hover:underline flex items-center space-x-1"
              >
                <Terminal className="w-4 h-4 mr-1" />
                <span>Request Free SEO Review →</span>
              </button>
            </div>

            {/* Core Competencies Line */}
            <div className="pt-4 border-t border-white/8">
              <p className="text-xs font-mono uppercase tracking-widest text-[#7D8595] mb-2">
                Core SEO Disciplines
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#B5BBC7]">
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Technical SEO</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>On-Page SEO</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Local SEO Karachi</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Keyword Clustering</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Search Intelligence Object */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <SearchIntelligence3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#7D8595]">
          <div className="flex items-center space-x-3">
            <span className="text-[#2DD4BF] font-bold">01</span>
            <span className="uppercase tracking-widest">SCROLL TO EXPLORE</span>
            <span className="w-8 h-[1px] bg-[#2DD4BF]/40 animate-pulse" />
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-[11px]">
            <span>Primary Focus: Karachi & Global Search</span>
            <span>•</span>
            <span className="text-[#45E6FF]">Google Search Essentials Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};
