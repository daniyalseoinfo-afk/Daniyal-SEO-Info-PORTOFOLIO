import React, { useState } from 'react';
import { PageRoute } from '../types';
import { MapPin, ArrowUpRight, Network, Building2, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

interface KarachiCommercialSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const KarachiCommercialSection: React.FC<KarachiCommercialSectionProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [selectedHub, setSelectedHub] = useState<number>(0);

  const hubs = [
    {
      name: 'DHA Karachi (Phases 1–8)',
      category: 'Corporate, Real Estate & Retail',
      queries: ['commercial property DHA', 'aesthetic clinic DHA phase 6', 'corporate law firm Karachi'],
      visibility: 'Rank #1–#3',
      intent: 'High Transactional',
      signals: 'GBP Profile + Schema NAP Verified'
    },
    {
      name: 'Clifton (Blocks 1–9)',
      category: 'Consultancies, FinTech & Healthcare',
      queries: ['fintech consulting clifton', 'best dentist clifton block 2', 'private equity advisors'],
      visibility: 'Rank #1–#2',
      intent: 'Commercial Investigation',
      signals: 'Geo-Entity Clustering'
    },
    {
      name: 'Shahrah-e-Faisal Corridor',
      category: 'Enterprise HQ & B2B Technology',
      queries: ['software house karachi', 'b2b logistics company', 'commercial office leasing'],
      visibility: 'Top 3 Organic',
      intent: 'B2B Procurement',
      signals: 'Organization Schema Graph'
    },
    {
      name: 'Korangi & SITE Industrial Area',
      category: 'Manufacturing, Exporters & Heavy Tooling',
      queries: ['textile machinery manufacturers', 'industrial packaging karachi', 'chemical raw materials supply'],
      visibility: 'Rank #1 Market Lead',
      intent: 'Industrial High-Value B2B',
      signals: 'Product Schema & Breadcrumbs'
    },
    {
      name: 'Gulshan-e-Iqbal & PECHS',
      category: 'EdTech, Medical Centers & Retail',
      queries: ['diagnostic lab gulshan', 'online education academy pk', 'commercial retail supplies'],
      visibility: 'Top 3 Map Pack',
      intent: 'Local Direct Consumer',
      signals: 'Citation Consistency 100%'
    }
  ];

  const badges = [
    'Local Intent',
    'Service Coverage',
    'Commercial Queries',
    'Map Visibility',
    'Location Architecture'
  ];

  return (
    <section id="commercial-karachi" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>GEO-COMMERCIAL ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-[#F4FAF7] tracking-[-0.035em] leading-[1.04] antialiased">
            Built in Karachi. Optimized for{' '}
            <span className="text-gradient-emerald">Competitive Search Markets.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Karachi&apos;s commercial landscape is dense and multifaceted. From enterprise headquarters on Shahrah-e-Faisal to exporters in Korangi and medical practices in Clifton, I architect localized search systems that dominate competitive queries and translate geo-intent into qualified revenue.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#0D1414] text-[#00FFD1] border border-cyan-500/20 shadow-sm"
              >
                ● {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Network Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Commercial Nodes List */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] uppercase text-[#5E736D] font-medium block mb-2">
              Select Commercial Search Hub:
            </span>
            {hubs.map((hub, idx) => (
              <button
                key={hub.name}
                onClick={() => setSelectedHub(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                  selectedHub === idx
                    ? 'bg-[#0D1414] border-emerald-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_15px_rgba(0,229,155,0.1)]'
                    : 'bg-[#080D0D]/60 border-white/6 hover:border-white/15 text-[#94A3B8]'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    selectedHub === idx ? 'bg-[#00E59B] ring-4 ring-emerald-500/20' : 'bg-white/20'
                  }`} />
                  <div className="truncate">
                    <span className="text-sm font-bold text-white block truncate">
                      {hub.name}
                    </span>
                    <span className="text-xs text-[#5E736D] block truncate font-normal">
                      {hub.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-[#00E59B] font-semibold border border-emerald-500/20">
                    {hub.visibility}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Node Details & Geo-Intent Blueprint */}
          <div className="lg:col-span-6 rounded-3xl bg-[#080D0D]/95 border border-emerald-500/20 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/8">
              <div>
                <span className="text-[10px] uppercase text-[#00E59B] block font-semibold">
                  ACTIVE HUB BLUEPRINT
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {hubs[selectedHub].name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-medium text-[#5E736D] block">Intent Profile</span>
                <span className="text-xs font-semibold text-[#00FFD1]">
                  {hubs[selectedHub].intent}
                </span>
              </div>
            </div>

            {/* Target Commercial Queries in this Hub */}
            <div className="mt-5 space-y-2">
              <span className="text-[11px] font-medium text-[#5E736D] uppercase block">
                Target High-Intent Commercial Queries:
              </span>
              <div className="space-y-1.5 text-xs">
                {hubs[selectedHub].queries.map((q) => (
                  <div key={q} className="p-2.5 rounded-xl bg-[#0D1414] border border-white/6 flex items-center justify-between text-white">
                    <span className="truncate pr-2">“{q}”</span>
                    <span className="text-[10px] font-semibold text-[#00E59B] bg-emerald-500/10 px-1.5 py-0.5 rounded flex-shrink-0">
                      High CTR
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Geo Authority Validation */}
            <div className="mt-5 p-4 rounded-2xl bg-[#0D1414] border border-white/6 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#5E736D]">
                <span>Search Signal Protocol:</span>
                <span className="text-white font-semibold">{hubs[selectedHub].signals}</span>
              </div>
              <div className="flex items-center justify-between text-[#5E736D]">
                <span>Market Ranking Potential:</span>
                <span className="text-[#00E59B] font-bold">Top 3 Map Pack &amp; Organic SERP</span>
              </div>
              <div className="flex items-center justify-between text-[#5E736D]">
                <span>Execution Standard:</span>
                <span className="text-[#00FFD1] font-medium">Enterprise-grade Schema &amp; Entity Links</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-5 border-t border-white/8 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onRouteChange('local-seo-services-karachi')}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-xs hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(0,229,155,0.3)]"
              >
                <span>Explore Local SEO Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onRequestReview}
                className="text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
              >
                Request Karachi Review →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
