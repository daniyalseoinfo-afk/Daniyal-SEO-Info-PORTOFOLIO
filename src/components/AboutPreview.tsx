import React from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight, Cpu, Search, Compass, ShieldCheck, Terminal, MapPin } from 'lucide-react';
import daniyalPortrait from '../assets/images/daniyal-portrait-2026.webp';

interface AboutPreviewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onRouteChange }) => {
  const principles = [
    {
      num: '01',
      title: 'Evidence Before Assumptions',
      desc: 'Never recommend changes based on gut feelings. We inspect raw server logs, Google Search Console query logs, and real bot render trees before writing code.'
    },
    {
      num: '02',
      title: 'Architecture Before Volume',
      desc: 'Publishing hundreds of articles on a website with crawl bloat, broken canonicals, and confused intent is wasted budget. We build the search foundation first.'
    },
    {
      num: '03',
      title: 'Commercial Impact Over Vanity Metrics',
      desc: 'A million impressions for zero-intent keywords is vanity. We measure search success in qualified traffic, targeted commercial inquiries, and compounding organic ROI.'
    }
  ];

  return (
    <section id="about-section" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Soft Emerald/Cyan Ambient Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Lighting Behind Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(0,229,155,0.1)] bg-[#080D0D] group">
                <img
                  src={daniyalPortrait}
                  alt="Daniyal Asad, Technical SEO Specialist and Search Architect"
                  className="w-full h-auto object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Bottom Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060909] via-[#060909]/30 to-transparent opacity-90 pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#080D0D]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-white block font-display">
                      Daniyal Asad
                    </span>
                    <span className="text-[11px] font-mono text-[#00E59B]">
                      Technical SEO Specialist &amp; Search Architect
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#5E736D] block">Based in</span>
                    <span className="text-[11px] font-mono text-[#F4FAF7]">Karachi, PK</span>
                  </div>
                </div>
              </div>

              {/* Floating Technical Badge 1 */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1.5 rounded-full bg-[#0B1111]/90 border border-emerald-500/30 backdrop-blur-xl shadow-lg flex items-center space-x-1.5 text-xs font-mono font-semibold text-white">
                <Cpu className="w-3.5 h-3.5 text-[#00E59B]" />
                <span>Crawl Engineering</span>
              </div>

              {/* Floating Technical Badge 2 */}
              <div className="absolute top-1/2 -left-3 sm:-left-5 px-3 py-1.5 rounded-full bg-[#0B1111]/90 border border-cyan-400/30 backdrop-blur-xl shadow-lg flex items-center space-x-1.5 text-xs font-semibold text-white">
                <Search className="w-3.5 h-3.5 text-[#00FFD1]" />
                <span>Search Intent Graph</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Operating Principles */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>ABOUT DANIYAL ASAD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-[#F4FAF7] tracking-[-0.035em] leading-[1.04] antialiased">
              SEO built around systems,{' '}
              <span className="text-gradient-emerald">not guesswork.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              I am a Technical SEO Specialist and Search Architect based in Karachi. My work focuses on the engineering layer of search: optimizing crawl efficiency, indexing pipelines, information architecture, structured data entities, and commercial intent mapping.
            </p>

            <p className="text-sm sm:text-base text-[#5E736D] leading-relaxed">
              I treat Google as an automated discovery and evaluation machine that demands clean signals. When you eliminate crawl traps, parameter bloat, render delays, and content cannibalization, rankings respond with remarkable predictability.
            </p>

            {/* 3 Core Operating Principles */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] uppercase text-[#5E736D] font-medium block">
                Core Operating Principles:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {principles.map((p) => (
                  <div
                    key={p.num}
                    className="p-3.5 rounded-2xl bg-[#080D0D] border border-white/6 hover:border-emerald-500/30 transition-colors"
                  >
                    <span className="text-xs font-bold text-[#00E59B] block mb-1">
                      {p.num}. {p.title}
                    </span>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics & CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-preview-more-btn"
                onClick={() => onRouteChange('about')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-xs sm:text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center space-x-2 shadow-[0_0_15px_rgba(0,229,155,0.3)]"
              >
                <span>Read Full Biography &amp; Philosophy</span>
                <ArrowUpRight className="w-4 h-4 text-[#060909]" />
              </button>

              <div className="flex items-center space-x-2 text-xs text-[#5E736D]">
                <MapPin className="w-3.5 h-3.5 text-[#00E59B]" />
                <span>Karachi, PK • Remote Global Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
