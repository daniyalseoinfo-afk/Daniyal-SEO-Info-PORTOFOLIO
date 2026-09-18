import React from 'react';
import { Target, Search, Cpu, Sparkles, CheckCircle, BarChart3, AlertCircle } from 'lucide-react';

export const HowIThinkSection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#0D1017] relative border-t border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B7FF3C] px-2.5 py-1 rounded bg-[#B7FF3C]/10 border border-[#B7FF3C]/20">
            HOW I THINK ABOUT SEO
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Large Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] leading-[1.15] font-display">
              Better rankings start with understanding the{' '}
              <span className="text-[#45E6FF]">right problem.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#B5BBC7] leading-relaxed">
              SEO isn&apos;t simply about stuffing keywords on a page or generating 50 generic blog posts. I look at how search engines understand a website, what potential customers in Karachi or international markets are actively searching for, what competitors are doing well, and where realistic ranking opportunities exist.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#11151E] border border-white/8">
                <div className="flex items-center space-x-2 text-[#B7FF3C] font-semibold text-sm mb-1.5">
                  <Target className="w-4 h-4" />
                  <span>Search Intent First</span>
                </div>
                <p className="text-xs text-[#7D8595] leading-relaxed">
                  Satisfying query intent matters more than raw keyword repetition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#11151E] border border-white/8">
                <div className="flex items-center space-x-2 text-[#45E6FF] font-semibold text-sm mb-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>Clean Site Architecture</span>
                </div>
                <p className="text-xs text-[#7D8595] leading-relaxed">
                  Eliminating crawl blocks, index bloat, and render lag gives Google clear signals.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Diagnosis & Verification Flow Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#11151E] border border-white/12 shadow-2xl relative overflow-hidden">
            <div className="text-xs font-mono uppercase tracking-wider text-[#7D8595] pb-3 border-b border-white/8 flex items-center justify-between">
              <span>SEO Diagnostic Framework</span>
              <span className="text-[#B7FF3C]">Karachi • PK</span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#161C28] border border-white/5">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">The Common Mistake</h4>
                  <p className="text-xs text-[#7D8595] mt-0.5">
                    Targeting high-volume keywords without satisfying intent, or attempting to rank a site that Google cannot crawl properly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#161C28] border border-[#B7FF3C]/30">
                <div className="w-6 h-6 rounded-full bg-[#B7FF3C]/20 text-[#B7FF3C] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#B7FF3C] uppercase tracking-wider">The Daniyal Approach</h4>
                  <p className="text-xs text-[#B5BBC7] mt-0.5">
                    Diagnose root technical blocks → Map high-intent keyword clusters → Optimize page hierarchy → Measure real Search Console trends.
                  </p>
                </div>
              </div>

              {/* Verified Checklist */}
              <div className="pt-2 space-y-2 text-xs font-mono text-[#B5BBC7]">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-[#7D8595]">Technical Accessibility</span>
                  <span className="text-[#B7FF3C]">100% Crawlable</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-[#7D8595]">Commercial Intent Match</span>
                  <span className="text-[#45E6FF]">High Precision</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#7D8595]">Measurement Base</span>
                  <span className="text-white">GSC & GA4 Real Data</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
