import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Terminal, CheckCircle, Award, Compass, Cpu, Search } from 'lucide-react';

interface AboutPreviewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onRouteChange }) => {
  return (
    <section id="about-preview" className="py-24 sm:py-32 bg-[#080A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Floating Skill Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-[#B7FF3C]/10 rounded-3xl blur-3xl -z-10" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/14 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#11151E]">
                <img
                  src="/src/assets/images/daniyal_portrait_1787128804384.jpg"
                  alt="Daniyal, Junior SEO Executive in Karachi"
                  className="w-full h-auto object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay Gradient at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-transparent to-transparent opacity-80" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0D1017]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Daniyal</span>
                    <span className="text-[10px] font-mono text-[#B7FF3C]">Junior SEO Executive</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#7D8595]">Karachi, PK</span>
                </div>
              </div>

              {/* Floating Skill Labels around Portrait */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 px-3 py-1.5 rounded-full bg-[#11151E] border border-[#B7FF3C]/40 backdrop-blur-xl shadow-lg flex items-center space-x-1.5 text-xs font-mono font-semibold text-white">
                <Cpu className="w-3.5 h-3.5 text-[#B7FF3C]" />
                <span>Technical SEO</span>
              </div>

              <div className="absolute top-1/3 -left-4 sm:-left-6 px-3 py-1.5 rounded-full bg-[#11151E] border border-[#45E6FF]/40 backdrop-blur-xl shadow-lg flex items-center space-x-1.5 text-xs font-mono font-semibold text-white">
                <Search className="w-3.5 h-3.5 text-[#45E6FF]" />
                <span>GSC & GA4</span>
              </div>

              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-3 py-1.5 rounded-full bg-[#11151E] border border-white/20 backdrop-blur-xl shadow-lg flex items-center space-x-1.5 text-xs font-mono font-semibold text-white">
                <Compass className="w-3.5 h-3.5 text-[#B7FF3C]" />
                <span>Keyword Clusters</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Honest Personality */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#B7FF3C]">
              <span>ABOUT DANIYAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.15]">
              Hi, I&apos;m Daniyal.
            </h2>

            <p className="text-xl font-medium text-[#45E6FF] font-display">
              Junior SEO Executive based in Karachi.
            </p>

            <p className="text-base sm:text-lg text-[#B5BBC7] leading-relaxed">
              I&apos;m building hands-on experience across technical SEO, keyword research, competitor analysis, on-page optimization and local search. I enjoy understanding why a page isn&apos;t performing and turning that diagnosis into practical improvements.
            </p>

            <p className="text-sm sm:text-base text-[#7D8595] leading-relaxed">
              I believe SEO should be transparent. Instead of hiding behind vague marketing buzzwords or making unrealistic promises, I present clear diagnostic findings from Screaming Frog, Search Console, and SERP competitive data so you always know what we are doing and why.
            </p>

            {/* Quick Principles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#0D1017] border border-white/8 text-xs">
                <span className="font-mono text-[#B7FF3C] block font-bold mb-1">01. Direct Execution</span>
                <span className="text-[#B5BBC7]">You communicate directly with the specialist executing your audits.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1017] border border-white/8 text-xs">
                <span className="font-mono text-[#45E6FF] block font-bold mb-1">02. Evidence-Based</span>
                <span className="text-[#B5BBC7]">Decisions backed by live search console queries & crawl logs.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                id="about-preview-more-btn"
                onClick={() => onRouteChange('about')}
                className="px-6 py-3.5 rounded-xl bg-[#11151E] border border-white/15 text-white font-semibold text-sm hover:bg-[#161C28] hover:border-[#B7FF3C]/50 transition-all flex items-center space-x-2"
                data-cursor="ABOUT"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 text-[#B7FF3C]" />
              </button>

              <button
                id="about-preview-contact-btn"
                onClick={() => onRouteChange('contact')}
                className="text-xs sm:text-sm font-mono text-[#B5BBC7] hover:text-[#B7FF3C] underline underline-offset-4"
              >
                Get In Touch →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
