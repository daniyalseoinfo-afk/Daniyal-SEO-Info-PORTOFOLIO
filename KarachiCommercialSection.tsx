import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Search, MapPin, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface KarachiCommercialSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const KarachiCommercialSection: React.FC<KarachiCommercialSectionProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <section id="commercial-karachi" className="py-24 sm:py-32 bg-[#0D1017] relative border-t border-b border-white/8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#2DD4BF]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#45E6FF]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Commercial Intent Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#2DD4BF]">
              <MapPin className="w-3.5 h-3.5" />
              <span>SEO / KARACHI</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.15]">
              Professional SEO services for businesses in{' '}
              <span className="text-[#2DD4BF]">Karachi.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#B5BBC7] leading-relaxed">
              From technical issues and weak keyword targeting to local visibility and content optimization, I help identify the SEO improvements worth prioritizing first. Whether you run a Karachi e-commerce store, medical clinic, industrial B2B firm, or professional consultancy, search discovery is built on systematic execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#11151E] border border-white/8">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-white block font-semibold">Tailored for Karachi Search</strong>
                  <span className="text-[#7D8595]">Targeting local buyers, commercial areas & search nuances.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#11151E] border border-white/8">
                <CheckCircle2 className="w-4 h-4 text-[#45E6FF] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-white block font-semibold">No Generic Agency Fluff</strong>
                  <span className="text-[#7D8595]">Direct hands-on work with transparent reporting.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="karachi-explore-services-btn"
                onClick={() => onRouteChange('seo-services-in-karachi')}
                className="px-6 py-3.5 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-sm sm:text-base hover:bg-[#14B8A6] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_-5px_rgba(45,212,191,0.4)] flex items-center space-x-2"
                data-cursor="EXPLORE"
              >
                <span>Explore SEO Services in Karachi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="karachi-request-review-btn"
                onClick={onRequestReview}
                className="px-6 py-3.5 rounded-xl bg-[#161C28] text-white font-semibold text-sm hover:bg-white/10 transition-colors border border-white/10"
              >
                Request Free Karachi SEO Review
              </button>
            </div>
          </div>

          {/* Right Column: Search Interface & Ranking Indicator Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#11151E] border border-white/12 p-6 shadow-2xl relative overflow-hidden">
              
              {/* Search Bar Simulation */}
              <div className="p-3.5 rounded-xl bg-[#161C28] border border-white/10 flex items-center space-x-3 mb-5">
                <Search className="w-4 h-4 text-[#2DD4BF]" />
                <span className="text-sm font-mono text-white font-medium">SEO Services in Karachi</span>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-[#2DD4BF]/20 text-[#2DD4BF] font-bold">
                  High Commercial Intent
                </span>
              </div>

              {/* SERP Rank Breakdown Box */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#0D1017] border border-[#2DD4BF]/30 relative">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#7D8595] mb-2">
                    <span className="text-[#2DD4BF] font-bold">Entity: Daniyal (Junior SEO Executive)</span>
                    <span>Karachi • PK</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Daniyal | Professional SEO Services Karachi
                  </h4>
                  <p className="text-xs text-[#B5BBC7] leading-relaxed">
                    Technical audits, keyword research, on-page architecture, and Google Maps Local SEO tailored for businesses across Karachi.
                  </p>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#45E6FF]">Geo-Target: Karachi (Clifton, DHA, Gulshan)</span>
                    <span className="text-[#2DD4BF]">Indexable ✓</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#161C28]/60 border border-white/5 flex items-center justify-between text-xs font-mono text-[#7D8595]">
                  <span>Local Search Volume: 1,600/mo</span>
                  <span className="text-emerald-400">Rising Trend ↗</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/8 text-[11px] font-mono text-[#7D8595] flex items-center justify-between">
                <span>Methodology: Google Search Essentials</span>
                <span className="text-[#2DD4BF]">White-Hat SEO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
