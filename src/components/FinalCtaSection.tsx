import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight, Terminal, Mail, MessageSquare, ShieldCheck, MapPin, Clock, ArrowUp, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (initialUrl?: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [targetUrl, setTargetUrl] = useState('');
  const [market, setMarket] = useState('Karachi & Pakistan');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (targetUrl) {
      onRequestReview(targetUrl);
    } else {
      onRequestReview();
    }
  };

  return (
    <section id="final-cta" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Command Center Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>DIRECT INITIATION PROTOCOL</span>
        </div>

        {/* Headline */}
        <h2 className="text-[clamp(2.2rem,6.8vw,3.2rem)] md:text-[clamp(2.8rem,5.5vw,4.2rem)] lg:text-[clamp(3.4rem,5.2vw,4.75rem)] font-[800] tracking-[-0.025em] md:tracking-[-0.035em] lg:tracking-[-0.04em] text-[#F4FAF7] leading-[1.04] md:leading-[1.0] lg:leading-[0.98] max-w-4xl mx-auto antialiased">
          Ready to fix your crawl health &amp;<br className="hidden sm:inline" />{' '}
          <span className="text-gradient-emerald">capture real search demand?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Request a comprehensive technical SEO review of your website. I analyze crawl logs, keyword mapping, and indexability issues before your competitors do.
        </p>

        {/* Direct URL Input Command Box */}
        <div className="mt-10 max-w-2xl mx-auto rounded-3xl bg-[#080D0D] border border-emerald-500/30 p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,155,0.12)]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="flex-1 px-4 py-3.5 rounded-2xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors shadow-inner"
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,229,155,0.3)] flex-shrink-0"
            >
              <span>Request Technical SEO Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#060909]" />
            </button>
          </form>

          <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-medium text-[#5E736D] px-1">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E59B]" />
              <span>Includes Screaming Frog Crawl &amp; Indexation Check</span>
            </span>
            <span>Zero automated spam PDF dumps</span>
          </div>
        </div>

        {/* Direct Contact Row */}
        <div className="mt-12 pt-8 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#94A3B8]">
          <div className="p-3 rounded-2xl bg-[#080D0D] border border-white/5 flex flex-col items-center justify-center space-y-1">
            <Mail className="w-4 h-4 text-[#00E59B]" />
            <span className="text-white font-bold">daniyalseoinfo@gmail.com</span>
            <span className="text-[10px] text-[#5E736D]">Direct Specialist Inbox</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#080D0D] border border-white/5 flex flex-col items-center justify-center space-y-1">
            <Clock className="w-4 h-4 text-[#00FFD1]" />
            <span className="text-white font-bold">&lt; 24h Turnaround</span>
            <span className="text-[10px] text-[#5E736D]">Initial Audit Response</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#080D0D] border border-white/5 flex flex-col items-center justify-center space-y-1">
            <MapPin className="w-4 h-4 text-[#00E59B]" />
            <span className="text-white font-bold">Karachi, PK</span>
            <span className="text-[10px] text-[#5E736D]">PKT (UTC+5) • Global Remote</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#080D0D] border border-white/5 flex flex-col items-center justify-center space-y-1">
            <ShieldCheck className="w-4 h-4 text-[#00FFD1]" />
            <span className="text-white font-bold">White-Hat Only</span>
            <span className="text-[10px] text-[#5E736D]">Google Search Essentials</span>
          </div>
        </div>

      </div>
    </section>
  );
};

/* Section 17: Tech-Studio Footer */
export const Footer: React.FC<{
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (initialUrl?: string) => void;
}> = ({ onRouteChange, onRequestReview }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#040606] border-t border-white/8 pt-16 pb-12 relative text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/8">
          
          {/* Col 1 & 2: Entity & Bio */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-sm font-bold text-[#00E59B]">DA</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                DANIYAL ASAD <span className="text-[#00E59B] text-xs font-semibold">// SEARCH ARCHITECT</span>
              </span>
            </div>

            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-[#00E59B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B] animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL • INDEXING ACTIVE</span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Technical SEO Specialist focused on crawl efficiency, indexing pipelines, semantic intent clustering, and localized search growth in Karachi and worldwide.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-medium">
              <a
                href="mailto:daniyalseoinfo@gmail.com"
                className="text-[#94A3B8] hover:text-[#00E59B] transition-colors flex items-center space-x-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#00E59B]" />
                <span>daniyalseoinfo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Core Capabilities */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs uppercase text-white font-bold">
              CAPABILITIES
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button
                  onClick={() => onRouteChange('technical-seo-services-karachi')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  Technical SEO Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('on-page-seo-services-karachi')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  On-Page Intent Optimization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('keyword-research-services-karachi')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  Keyword Clustering &amp; Silos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('local-seo-services-karachi')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  Local SEO Karachi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('seo-services-in-karachi')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  Full SEO Engagements
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Evidence */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs uppercase text-white font-bold">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <a
                  href="#seo-inspector"
                  className="hover:text-[#00E59B] transition-colors"
                >
                  Live SEO Inspector Tool
                </a>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('portfolio')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  Crawl Audit Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('about')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  About Daniyal Asad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('blog')}
                  className="hover:text-[#00E59B] transition-colors"
                >
                  SEO Technical Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRequestReview()}
                  className="text-[#00E59B] hover:underline font-semibold"
                >
                  Request Manual Audit ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Entity Signals */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs uppercase text-white font-bold">
              SERP DIAGNOSTIC
            </h4>
            <div className="p-3.5 rounded-2xl bg-[#080D0D] border border-white/6 space-y-2 text-[11px] font-mono text-[#5E736D]">
              <div className="flex items-center justify-between text-[#00E59B]">
                <span>robots.txt</span>
                <span>User-agent: * Allow: /</span>
              </div>
              <div className="flex items-center justify-between">
                <span>HTTP Response</span>
                <span className="text-[#00FFD1]">200 OK</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Schema Graph</span>
                <span className="text-white">Person &amp; Service</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Canonical</span>
                <span className="text-white">Self-referencing</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Timezone and Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E736D] gap-4">
          <div>
            © {new Date().getFullYear()} Daniyal Asad. All rights reserved. • Built with precision &amp; search architecture.
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[#94A3B8]">
              Karachi, Pakistan (PKT / UTC+5)
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/40 text-[#94A3B8] hover:text-[#00E59B] transition-colors flex items-center space-x-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
