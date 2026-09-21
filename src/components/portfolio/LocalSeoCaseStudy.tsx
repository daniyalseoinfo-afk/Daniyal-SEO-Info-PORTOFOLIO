import React, { useState } from 'react';
import { MapPin, Navigation, Star, ShieldCheck, ArrowRight, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import localSeoImage from '../../assets/images/local-seo-strategy.webp';

interface LocalSeoCaseStudyProps {
  onInspect: () => void;
}

export const LocalSeoCaseStudy: React.FC<LocalSeoCaseStudyProps> = ({ onInspect }) => {
  const [selectedHub, setSelectedHub] = useState<'Clifton' | 'DHA' | 'Karachi'>('Clifton');

  const hubData = {
    Clifton: {
      queries: ['dental clinic in clifton', 'best dentist clifton karachi', 'teeth whitening clifton'],
      radius: '3.5 km Local Geo-Radius',
      visibility: 'Top 3 Local Pack',
      intent: 'Immediate Appointment Seeking'
    },
    DHA: {
      queries: ['dental clinic DHA phase 5', 'orthodontist DHA karachi', 'emergency dentist near me'],
      radius: '4.8 km Radius',
      visibility: 'Rank #1–#2 Local Pack',
      intent: 'High-LTV Specialist Treatments'
    },
    Karachi: {
      queries: ['dental implants karachi', 'pediatric dentist karachi', 'cosmetic dentistry pakistan'],
      radius: 'Metro Citywide Relevance',
      visibility: 'Organic SERP Authority',
      intent: 'Commercial Comparison'
    }
  };

  const processSteps = [
    { step: '01', title: 'Audit', desc: 'NAP citation audit across Pakistani directories & medical listings' },
    { step: '02', title: 'Entity Optimization', desc: 'Primary & secondary category precision in Google Business Profile' },
    { step: '03', title: 'GBP Signals', desc: 'Working hours, geo-tagged photo assets, and treatment attribute alignment' },
    { step: '04', title: 'Local Landing Pages', desc: 'Geo-targeted landing pages embedded with Physician JSON-LD schema' },
    { step: '05', title: 'Tracking', desc: 'Call tracking, direction requests, and discovery search velocity monitoring' }
  ];

  return (
    <div className="rounded-3xl bg-[#080D0D] border border-cyan-500/20 hover:border-cyan-500/40 transition-all p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden relative group">
      
      {/* Background ambient light */}
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/8 mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold px-3 py-1 rounded bg-cyan-500/10 text-[#00FFD1] border border-cyan-500/20">
            02 / LOCAL SEO &amp; MAPS ARCHITECTURE
          </span>
          <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            SEO Strategy Exercise
          </span>
        </div>
        <div className="text-xs font-medium text-[#94A3B8] flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#00FFD1]" />
          <span>Clifton &amp; DHA, Karachi • Private Medical &amp; Dental Practice</span>
        </div>
      </div>

      {/* Asymmetric Bento Layout: Left Content (50%) / Right Interactive Geo-Pack Visualizer (50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Narrative, Problem, Strategy & Process */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4FAF7] leading-tight">
              Local SEO Strategy &amp; Google Business Profile Optimization for Clifton Healthcare
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Transforming a premier Clifton dental clinic from zero map-pack visibility into a verified local search entity capturing high-intent patient appointments across Clifton &amp; DHA Karachi.
            </p>
          </div>

          {/* Problem & Strategy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#0D1414] border border-white/5 space-y-1">
              <span className="text-[10px] font-semibold uppercase text-amber-300 block">
                The Core Bottleneck
              </span>
              <p className="text-[#94A3B8] leading-relaxed">
                Primary category was diluted ("Medical Center" vs "Dental Clinic"), severe NAP discrepancies on local directories, and zero geo-structured schema.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D1414] border border-white/5 space-y-1">
              <span className="text-[10px] font-semibold uppercase text-[#00FFD1] block">
                The Strategic Fix
              </span>
              <p className="text-[#94A3B8] leading-relaxed">
                GBP category refinement, Physician JSON-LD deployment, standardized phone numbers, and neighborhood landing pages for Clifton &amp; DHA.
              </p>
            </div>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase text-[#5E736D] block">
              Execution Methodology
            </span>
            <div className="space-y-1.5">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start space-x-3 p-2.5 rounded-xl bg-[#0D1414] border border-white/5 text-xs"
                >
                  <span className="font-semibold text-[#00FFD1] text-[11px] mt-0.5 font-mono">
                    {item.step}
                  </span>
                  <div>
                    <span className="font-bold text-white block">{item.title}</span>
                    <span className="text-[#94A3B8] text-[11px] leading-snug">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={onInspect}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-[#00FFD1] border border-cyan-500/30 text-xs font-semibold transition-all shadow-sm group-hover:border-cyan-500"
            >
              <span>View Full Case Study Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Dark Mini-Map & Search Pack UI */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className="rounded-2xl bg-[#0D1414] border border-cyan-500/25 p-5 shadow-2xl relative overflow-hidden text-left">
            
            {/* Header & Geo Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#00FFD1]" />
                <span className="text-xs font-semibold text-white uppercase">
                  Karachi Map Pack Interface
                </span>
              </div>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-[#5E736D] border border-white/5">
                Visualization
              </span>
            </div>

            {/* Geo Hub Selectors */}
            <div className="flex gap-2 pt-3">
              {(['Clifton', 'DHA', 'Karachi'] as const).map((hub) => (
                <button
                  key={hub}
                  onClick={() => setSelectedHub(hub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedHub === hub
                      ? 'bg-cyan-500/20 text-[#00FFD1] border border-cyan-500/50 font-bold'
                      : 'bg-[#080D0D] text-[#5E736D] border border-white/5 hover:text-white'
                  }`}
                >
                  {hub}
                </button>
              ))}
            </div>

            {/* Dark Mini-Map Vector Canvas */}
            <div className="mt-4 rounded-xl bg-[#060909] border border-white/8 p-4 relative overflow-hidden">
              
              {/* Abstract Geo Grid & Radar Circles */}
              <div className="relative h-44 w-full flex items-center justify-center">
                <div className="absolute w-40 h-40 rounded-full border border-cyan-500/20 animate-ping opacity-25" />
                <div className="absolute w-32 h-32 rounded-full border border-cyan-500/30" />
                <div className="absolute w-20 h-20 rounded-full border border-cyan-500/40" />

                {/* Central Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00E59B] to-[#00FFD1] p-1.5 shadow-[0_0_20px_rgba(0,255,209,0.8)] text-[#060909]">
                    <Navigation className="w-full h-full fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold text-white mt-1 px-2 py-0.5 rounded bg-black/80 border border-white/10">
                    {selectedHub} Core Entity
                  </span>
                </div>

                {/* Neighbor Nodes */}
                <div className="absolute top-4 left-6 text-[10px] font-medium text-[#5E736D]">
                  Sea View / Block 2
                </div>
                <div className="absolute bottom-4 right-6 text-[10px] font-medium text-[#5E736D]">
                  Khayaban-e-Shahbaz
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-medium pt-3 border-t border-white/5">
                <div>
                  <span className="text-[#5E736D] block">Coverage Radius</span>
                  <span className="text-[#00FFD1] font-bold">{hubData[selectedHub].radius}</span>
                </div>
                <div>
                  <span className="text-[#5E736D] block">SERP Signal</span>
                  <span className="text-[#00E59B] font-bold">{hubData[selectedHub].visibility}</span>
                </div>
              </div>
            </div>

            {/* Fake Google 3-Pack SERP Preview */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#080D0D] border border-white/8 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-medium">
                <span className="text-[#94A3B8]">Simulated Local Search Pack:</span>
                <span className="text-[#00FFD1]">Google Maps 3-Pack</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0D1414] border border-cyan-500/30 flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-bold text-white">Clifton Healthcare &amp; Dental Surgery</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-[#00E59B] font-mono">#1</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] text-amber-400 mt-0.5">
                    <span>5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[#5E736D]">(48) • Dental Clinic</span>
                  </div>
                  <div className="text-[10px] text-[#5E736D] font-medium mt-1">
                    Clifton Block 5, Karachi • Open · Closes 9 PM
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-cyan-500/10 text-[#00FFD1]">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Entity Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {hubData[selectedHub].queries.map((q) => (
                  <span
                    key={q}
                    className="px-2 py-0.5 rounded bg-black/60 border border-white/8 text-[10px] font-medium text-[#94A3B8]"
                  >
                    "{q}"
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Supporting Image Context in Mini Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#080D0D]">
            <img
              src={localSeoImage}
              alt="Local SEO Google Business Profile audit proof"
              className="w-full h-36 object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-medium text-[#94A3B8]">
              <span>Verified NAP &amp; Geo-Attribute Signals</span>
              <span className="text-[#00FFD1]">100% Citation Consistency</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
