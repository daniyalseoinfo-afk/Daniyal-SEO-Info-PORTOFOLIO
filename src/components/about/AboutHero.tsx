import React from 'react';
import { Terminal, MapPin, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Globe } from 'lucide-react';
import daniyalPortrait from '../../assets/images/daniyal-portrait-2026.webp';
import { PageRoute } from '../../types';

interface AboutHeroProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onRouteChange, onRequestReview }) => {
  const expertisePills = [
    'Technical SEO',
    'On-Page SEO',
    'Keyword Research',
    'Search Architecture',
    'Local SEO',
    'Semantic SEO'
  ];

  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-white/5 bg-[#060909]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Coordinates Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#00E59B 1px, transparent 1px), linear-gradient(90deg, #00E59B 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biography, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROFILE / SEARCH ENGINEERING</span>
            </div>

            <h1 className="text-[clamp(2.2rem,6.8vw,3.2rem)] md:text-[clamp(2.8rem,5.5vw,4.2rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-[800] tracking-[-0.025em] md:tracking-[-0.035em] lg:tracking-[-0.04em] text-[#F4FAF7] leading-[1.04] md:leading-[1.0] lg:leading-[0.98] antialiased">
              I build <span className="text-gradient-emerald">search systems</span>,<br />
              not just SEO pages.
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              Junior SEO Executive based in Karachi, focused on technical foundations, semantic search architecture, on-page systems and measurable organic growth.
            </p>

            {/* Expertise Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {expertisePills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-full bg-[#080D0D] border border-white/8 hover:border-emerald-500/30 text-xs font-medium text-[#94A3B8] transition-colors"
                >
                  <span className="text-[#00E59B] mr-1.5">›</span>
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons & Status Indicator */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onRequestReview}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center space-x-2 shadow-[0_0_25px_rgba(0,229,155,0.3)]"
              >
                <span>Work With Daniyal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onRouteChange('portfolio')}
                className="px-6 py-3.5 rounded-full bg-[#080D0D] hover:bg-[#0D1414] text-white font-semibold text-xs border border-white/10 hover:border-emerald-500/40 transition-all flex items-center space-x-2"
              >
                <span>Explore Case Studies</span>
              </button>
            </div>

            {/* Location & Availability Badge */}
            <div className="pt-3 flex items-center space-x-4 text-xs font-medium text-[#5E736D] border-t border-white/5">
              <div className="flex items-center space-x-1.5 text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-[#00E59B]" />
                <span>Karachi, Pakistan</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]" />
                </span>
                <span className="text-[#00E59B]">Available for Remote Projects</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Intelligence Card with Floating Telemetry HUD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Radial back light aura behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E59B]/20 to-[#00FFD1]/15 rounded-3xl blur-2xl -z-10" />

              {/* Main Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#080D0D] border border-emerald-500/30 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                
                {/* Tech coordinates markings top bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 text-[10px] font-mono text-[#5E736D]">
                  <span>LAT 24.8607° N</span>
                  <span>LNG 67.0011° E</span>
                  <span className="text-[#00E59B]">STATUS: VERIFIED</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#060909]">
                  <img
                    src={daniyalPortrait}
                    alt="Daniyal Asad, Search Architect & Technical SEO Specialist"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Floating HUD Chip 1: Top Left */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-medium text-white shadow-lg flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B] animate-pulse" />
                    <span className="font-semibold text-[#00E59B]">SEO SYSTEMS:</span>
                    <span>ACTIVE</span>
                  </div>

                  {/* Floating HUD Chip 2: Top Right */}
                  <div className="absolute top-4 right-4 px-2.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white shadow-lg flex items-center space-x-1">
                    <Globe className="w-3 h-3 text-[#00FFD1]" />
                    <span>Karachi, PK</span>
                  </div>

                  {/* Floating HUD Chip 3: Bottom Left */}
                  <div className="absolute bottom-4 left-4 px-3 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-[11px] text-left shadow-lg">
                    <span className="text-[9px] text-[#5E736D] block uppercase font-medium">Strategic Focus</span>
                    <span className="font-bold text-white">Search Architecture</span>
                  </div>

                  {/* Floating HUD Chip 4: Bottom Right */}
                  <div className="absolute bottom-4 right-4 px-3 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/30 text-[11px] text-left shadow-lg">
                    <span className="text-[9px] text-[#5E736D] block uppercase font-medium">Availability</span>
                    <span className="font-bold text-[#00E59B]">Open for Q3/Q4</span>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="p-3 text-center text-xs font-medium text-[#94A3B8]">
                  <span>Daniyal Asad • Search Architect &amp; Technical SEO Executive</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
