import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  MapPin, 
  SearchCode, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers, 
  Star, 
  Navigation, 
  Building2, 
  Globe2, 
  TrendingUp, 
  Filter, 
  Share2, 
  ArrowUpRight,
  Database,
  Crosshair,
  FileCheck2
} from 'lucide-react';
import localSeoImage from '../assets/images/local-seo-strategy.webp';
import keywordArchitectureImage from '../assets/images/keyword-clustering-on-page.webp';

export const LocalSeoPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [selectedHub, setSelectedHub] = useState<'dha' | 'clifton' | 'gulshan' | 'pechs'>('dha');

  const hubs = {
    dha: {
      name: 'DHA Karachi (Phases 1-8)',
      type: 'High-Net-Worth Commercial / Premium Services',
      queries: ['dental clinic dha karachi', 'commercial real estate dha phase 6', 'corporate law firm dha'],
      radius: '8.4 km² radius coverage',
      competitiveness: 'Extremely High (Requires Geo-Tagged Proof)'
    },
    clifton: {
      name: 'Clifton (Blocks 1-9)',
      type: 'Retail, Hospitality & Executive Consultancies',
      queries: ['boutique hotel clifton karachi', 'executive clinic clifton', 'fine dining reservation clifton'],
      radius: '6.2 km² radius coverage',
      competitiveness: 'High (Review Velocity Driven)'
    },
    gulshan: {
      name: 'Gulshan-e-Iqbal & Federal B Area',
      type: 'High-Density Consumer Services & Healthcare',
      queries: ['diagnostic lab gulshan iqbal', 'software academy gulshan', 'hvac repair karachi central'],
      radius: '12.1 km² radius coverage',
      competitiveness: 'High Search Volume'
    },
    pechs: {
      name: 'PECHS & Shahrah-e-Faisal Corridor',
      type: 'B2B Commercial, Logistics & Financial Hubs',
      queries: ['logistics company shahrah-e-faisal', 'office space pechs block 6', 'it exporter karachi'],
      radius: '9.5 km² radius coverage',
      competitiveness: 'Corporate Authority Target'
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(0,229,155,0.15)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
                </span>
                <span className="text-xs font-medium text-[#F4FAF7]">
                  SYSTEM 03 / LOCAL GEO-COMMERCIAL ARCHITECTURE
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
                  Local SEO Services in{' '}
                  <span className="text-gradient-emerald">Karachi</span> &amp; Google Map Pack.
                </h1>
                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                  Dominating the Local 3-Pack across high-intent commercial districts. Precision Google Business Profile optimization, localized citation authority, and neighborhood landing page silos.
                </p>
              </div>

              {/* Telemetry Pills */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['GOOGLE MAP PACK #1', 'LOCALBUSINESS SCHEMA', 'NAP INTEGRITY', 'DHA & CLIFTON HUBS', 'GEO-TAGGED ASSETS', 'REVIEW VELOCITY'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#0D1414] border border-white/[0.07] text-[#00E59B] font-mono text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onRequestReview}
                  className="px-6 py-3.5 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all duration-300 shadow-[0_0_30px_rgba(0,229,155,0.35)] flex items-center space-x-2"
                >
                  <span>Request Karachi Local SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onRouteChange('portfolio')}
                  className="px-6 py-3.5 rounded-full bg-[#0B1111] text-[#F4FAF7] font-semibold text-sm border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center space-x-2"
                >
                  <span>View Local SEO Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00E59B]" />
                </button>
              </div>
            </div>

            {/* Right Visual Bento */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-emerald-500/20 bg-[#080D0D] p-6 shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#00E59B]" />
                    <span className="text-xs font-semibold text-white">MAP PACK SIMULATOR</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00E59B] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    RANK #1 VERIFIED
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-video group">
                  <img
                    src={localSeoImage}
                    alt="Daniyal planning local SEO and Google Business Profile optimization in Karachi"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-85" />
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0B1111] border border-white/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center space-x-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>5.0 (48+ Verified Reviews)</span>
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px]">DHA Phase 6 Hub</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-tight">
                    Geo-coordinates: 24.8138° N, 67.0673° E • Verified Pakistani NAP Consistency across 35+ Directories
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Karachi Hub Selector Bento */}
      <section className="py-16 sm:py-20 border-b border-white/[0.07] bg-[#080D0D]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-semibold text-[#00E59B] uppercase tracking-wider">
              GEO-TARGETING BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-4xl font-[800] text-white tracking-[-0.03em]">
              Karachi Neighborhood Targeting Engine
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Select a commercial corridor to inspect localized search intent and geo-targeted ranking strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Hub Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {(Object.keys(hubs) as Array<keyof typeof hubs>).map((key) => {
                const hub = hubs[key];
                const isSelected = selectedHub === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedHub(key)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#0B1111] border-emerald-500/40 shadow-[0_0_20px_-5px_rgba(0,229,155,0.2)]'
                        : 'bg-[#080D0D] border-white/[0.07] hover:border-white/15'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-[#00E59B]' : 'text-white'}`}>
                        {hub.name}
                      </h4>
                      <p className="text-xs text-[#94A3B8]">{hub.type}</p>
                    </div>
                    <Navigation className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#00E59B]' : 'text-[#5E736D]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Hub Details Panel */}
            <div className="lg:col-span-7 rounded-3xl bg-[#0B1111] border border-white/[0.08] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#00E59B] uppercase block">TARGET COMMERCE CORRIDOR</span>
                  <h3 className="text-xl font-bold text-white">{hubs[selectedHub].name}</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#080D0D] border border-white/10 text-[#00FFD1]">
                  {hubs[selectedHub].radius}
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider block">High-Intent Keyword Sample:</span>
                <div className="flex flex-wrap gap-2">
                  {hubs[selectedHub].queries.map((q) => (
                    <span key={q} className="px-3 py-1.5 rounded-xl bg-[#080D0D] border border-white/[0.07] text-xs font-mono text-white">
                      &quot;{q}&quot;
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#080D0D] border border-white/[0.05]">
                  <span className="text-[11px] text-[#94A3B8] uppercase block">Market Profile</span>
                  <span className="text-xs font-semibold text-white mt-1 block">{hubs[selectedHub].type}</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#080D0D] border border-white/[0.05]">
                  <span className="text-[11px] text-[#94A3B8] uppercase block">Competitiveness Tier</span>
                  <span className="text-xs font-semibold text-[#00E59B] mt-1 block">{hubs[selectedHub].competitiveness}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4 Pillars Bento Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#00E59B] uppercase tracking-wider">
              LOCAL EXECUTION ARTIFACTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em]">
              The 4 Pillars of Map Pack Dominance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Google Business Profile Engine',
                desc: 'Primary category precision, service item taxonomy, geotagged real photography, and keyword-integrated business descriptions.',
                badge: 'GBP ARCHITECTURE'
              },
              {
                title: 'Pakistani NAP Standardization',
                desc: '100% exact consistency across business name, address, and phone numbers in local business registries and telecom directories.',
                badge: 'CITATION CITADEL'
              },
              {
                title: 'Localized Geo-Entity Schema',
                desc: 'Injecting LocalBusiness JSON-LD markup with exact geo-coordinates, operating hours, areaServed polygons, and department links.',
                badge: 'SEMANTIC GRAPH'
              },
              {
                title: 'Authentic Review Velocity',
                desc: 'Strategic review acquisition protocols ensuring steady, legitimate customer testimonials containing high-intent service keywords.',
                badge: 'SOCIAL REPUTATION'
              }
            ].map((col) => (
              <div key={col.title} className="p-6 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B1111] text-[#00E59B] border border-emerald-500/20">
                    {col.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">{col.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export const KeywordResearchPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Hero */}
      <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-teal-500/20 shadow-[0_0_15px_-3px_rgba(0,207,200,0.15)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CFC8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00CFC8]"></span>
                </span>
                <span className="text-xs font-medium text-[#F4FAF7]">
                  SYSTEM 04 / SEARCH INTENT &amp; DEMAND CLUSTERING
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
                  Keyword Research &amp; Commercial{' '}
                  <span className="text-gradient-emerald">Intent Clustering</span>
                </h1>
                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                  Transform raw search queries into structured, profitable topic silos. Eliminating keyword cannibalization and targeting search demand where buyer intent is proven.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['INTENT CLUSTERING', 'ZERO CANNIBALIZATION', 'COMMERCIAL SERP GAP', 'LONG-TAIL SILOS', 'SEARCH JOURNEY FUNNELS'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#0D1414] border border-white/[0.07] text-[#00CFC8] font-mono text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onRequestReview}
                  className="px-6 py-3.5 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all duration-300 shadow-[0_0_30px_rgba(0,229,155,0.35)] flex items-center space-x-2"
                >
                  <span>Request Keyword Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onRouteChange('portfolio')}
                  className="px-6 py-3.5 rounded-full bg-[#0B1111] text-[#F4FAF7] font-semibold text-sm border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center space-x-2"
                >
                  <span>View E-Commerce Cluster Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00E59B]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-teal-500/20 bg-[#080D0D] p-6 shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                  <span className="text-xs font-semibold text-white">SEARCH DEMAND MATRIX</span>
                  <span className="text-[10px] font-mono text-[#00CFC8] px-2 py-0.5 rounded bg-teal-500/10">340+ TERMS MAPPED</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-video group">
                  <img
                    src={keywordArchitectureImage}
                    alt="Commercial keyword clustering and on-page content architecture planning"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-85" />
                </div>

                <div className="p-3 rounded-xl bg-[#0B1111] border border-white/[0.05] flex items-center justify-between text-xs">
                  <span className="text-[#94A3B8]">High Commercial Intent</span>
                  <span className="font-mono text-[#00E59B] font-bold">68% of Total Volume</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars Bento */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#00CFC8] uppercase tracking-wider">
              INTENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em]">
              The 3 Layers of Intent Modeling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-teal-500/30 transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-[#00CFC8]">
                <Filter className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">1. Intent Classification</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Separating pure research queries from high-intent commercial terms to ensure budget is only invested in pages that generate transactions.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-teal-500/30 transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E59B]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">2. Semantic Topic Clustering</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Grouping dozens of semantically related long-tail variations into singular, comprehensive pillar URLs to eliminate internal cannibalization.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-teal-500/30 transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00FFD1]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">3. Commercial Gap Discovery</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Identifying lucrative search phrases that leading competitors already capture where your brand currently has zero indexable page coverage.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
