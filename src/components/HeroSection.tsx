import React from 'react';
import { PageRoute } from '../types';
import { SearchIntelligence3D } from './SearchIntelligence3D';
import { ArrowUpRight, ArrowDownRight, Sparkles, Terminal, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  const entityPills = [
    'Technical SEO',
    'Crawl Efficiency',
    'Search Architecture',
    'On-Page SEO',
    'Semantic SEO',
    'Keyword Clustering',
    'Local SEO',
    'Internal Linking',
    'Schema',
    'Indexation'
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 overflow-hidden">
      {/* Subtle Background Technical Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-400/8 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Positioning & Conversion */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/25 shadow-[0_0_20px_rgba(0,229,155,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E59B]"></span>
              </span>
              <span className="text-xs font-medium text-[#F4FAF7]">
                Available for High-Impact SEO Projects in Karachi &amp; Remote
              </span>
            </div>

            {/* Editorial High-Impact Headline (Matching Reference Style & Brand Colors) */}
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-[clamp(2.2rem,7.5vw,3.2rem)] md:text-[clamp(2.8rem,6vw,4.5rem)] lg:text-[clamp(3.4rem,6vw,5.25rem)] font-[800] tracking-[-0.025em] md:tracking-[-0.035em] lg:tracking-[-0.04em] text-[#F4FAF7] leading-[1.04] md:leading-[1.0] lg:leading-[0.98] antialiased">
                <span className="block">SEO services built around what</span>
                <span className="block">
                  your website{' '}
                  <span className="text-gradient-emerald">
                    actually needs.
                  </span>
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Technical SEO, search architecture and commercial content systems engineered by Daniyal Asad to eliminate crawl waste, fix indexation bottlenecks, and drive compounding search demand.
            </p>

            {/* Interactive Expertise / Entity Pills */}
            <div className="pt-1">
              <div className="text-[11px] font-mono text-[#5E736D] uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00E59B]" />
                <span>Search Entities &amp; Architectural Focus</span>
              </div>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {entityPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#94A3B8] bg-[#0D1414] border border-white/8 hover:border-emerald-500/40 hover:text-[#00E59B] hover:bg-emerald-500/5 transition-all duration-200 cursor-default select-none shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                id="hero-request-audit-btn"
                onClick={onRequestReview}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-sm sm:text-base hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(0,229,155,0.4)] flex items-center space-x-2 active:translate-y-0"
              >
                <span>Request SEO Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#060909]" />
              </button>

              <button
                id="hero-explore-cases-btn"
                onClick={() => {
                  const el = document.getElementById('case-studies');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onRouteChange('portfolio');
                  }
                }}
                className="px-6 py-3.5 rounded-full bg-[#0D1414] border border-white/12 text-[#F4FAF7] font-semibold text-sm sm:text-base hover:bg-[#111B1B] hover:border-emerald-500/30 transition-all flex items-center space-x-2"
              >
                <span>Explore Case Studies</span>
                <ArrowDownRight className="w-4 h-4 text-[#00E59B]" />
              </button>
            </div>

            {/* Trust Line */}
            <div className="flex items-center space-x-2 pt-2 text-xs font-mono text-[#5E736D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E59B]" />
              <span>Technical SEO • Karachi • Remote Projects</span>
            </div>

          </div>

          {/* Right Column: Interactive 3D Google SERP HUD */}
          <div className="lg:col-span-5 w-full">
            <SearchIntelligence3D />
          </div>

        </div>
      </div>
    </section>
  );
};
