import React from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight, Sparkles, Terminal, Mail, MessageSquare } from 'lucide-react';

interface FinalCtaSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <section id="final-cta" className="py-24 sm:py-32 bg-[#0D1017] relative border-t border-white/8 overflow-hidden">
      {/* Large Soft Electric Lime Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[#B7FF3C]/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#45E6FF]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Small Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#11151E] border border-[#B7FF3C]/30 text-xs font-mono text-[#B7FF3C] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>HAVE A WEBSITE TO IMPROVE?</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display max-w-3xl mx-auto leading-[1.1]">
          Let&apos;s find the SEO opportunities you&apos;re{' '}
          <span className="text-[#B7FF3C]">missing.</span>
        </h2>

        {/* Honest Body Copy */}
        <p className="mt-6 text-base sm:text-lg text-[#B5BBC7] max-w-2xl mx-auto leading-relaxed">
          Share your website URL, target market in Karachi or internationally, and current search hurdles. I will review your crawlability, indexation, and keyword targeting to outline where your attention should go first.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            id="final-cta-request-review-btn"
            onClick={onRequestReview}
            className="px-8 py-4 rounded-2xl bg-[#B7FF3C] text-[#080A0F] font-bold text-base hover:bg-[#A8F536] transition-all transform hover:-translate-y-0.5 shadow-[0_0_35px_-5px_rgba(183,255,60,0.5)] flex items-center space-x-2 active:translate-y-0"
            data-cursor="AUDIT"
          >
            <Terminal className="w-5 h-5" />
            <span>Request an SEO Review</span>
          </button>

          <button
            id="final-cta-contact-btn"
            onClick={() => onRouteChange('contact')}
            className="px-8 py-4 rounded-2xl bg-[#11151E] border border-white/14 text-white font-semibold text-base hover:bg-[#161C28] hover:border-white/30 transition-all flex items-center space-x-2"
            data-cursor="CONTACT"
          >
            <span>Contact Daniyal</span>
            <ArrowUpRight className="w-5 h-5 text-[#B7FF3C]" />
          </button>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#7D8595]">
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
            <span>No Automated Spam Reports</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#45E6FF]" />
            <span>No Unrealistic Ranking Guarantees</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
            <span>Karachi, Pakistan (Local & Global SEO)</span>
          </span>
        </div>

      </div>
    </section>
  );
};

export const Footer: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <footer id="main-footer" className="bg-[#080A0F] border-t border-white/8 pt-16 pb-12 relative text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/8">
          
          {/* Col 1 & 2: Entity & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#121722] border border-white/10 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-[#B7FF3C]">D</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                DANIYAL<span className="text-[#B7FF3C]">.</span>
              </span>
            </div>

            <p className="text-xs font-mono text-[#B7FF3C] uppercase tracking-wider">
              Junior SEO Executive — Karachi, Pakistan
            </p>

            <p className="text-xs sm:text-sm text-[#7D8595] max-w-sm leading-relaxed">
              I help businesses improve organic search visibility through disciplined technical diagnostics, keyword clustering, on-page optimization, and local search architecture.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-mono">
              <a
                href="mailto:daniyalseoinfo@gmail.com"
                className="text-[#B5BBC7] hover:text-[#B7FF3C] transition-colors flex items-center space-x-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>daniyalseoinfo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-[#B5BBC7]">
              <li>
                <button
                  onClick={() => onRouteChange('seo-services-in-karachi')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  SEO Services in Karachi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('technical-seo-services-karachi')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  Technical SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('on-page-seo-services-karachi')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  On-Page SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('local-seo-services-karachi')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  Local SEO Karachi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('keyword-research-services-karachi')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  Keyword Research
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-[#B5BBC7]">
              <li>
                <button
                  onClick={() => onRouteChange('portfolio')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  SEO Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('about')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  About Daniyal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('blog')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  SEO Blog & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange('contact')}
                  className="hover:text-[#B7FF3C] transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={onRequestReview}
                  className="text-[#B7FF3C] hover:underline"
                >
                  Request Review ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Entity Verification & Easter Egg Signals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              ENTITY SIGNALS
            </h4>
            <div className="p-3 rounded-xl bg-[#11151E] border border-white/8 space-y-2 text-[11px] font-mono text-[#7D8595]">
              <div className="flex items-center justify-between text-[#B7FF3C]">
                <span>robots.txt</span>
                <span>User-agent: * Allow: / ✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>status</span>
                <span className="text-[#45E6FF]">200 OK • Indexable</span>
              </div>
              <div className="flex items-center justify-between">
                <span>schema</span>
                <span className="text-white">Person & Service</span>
              </div>
              <div className="flex items-center justify-between">
                <span>canonical</span>
                <span className="text-white">Self-referencing</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#7D8595] gap-4">
          <div>
            © 2026 Daniyal. All rights reserved.
          </div>

          <div className="text-center sm:text-right text-[#B5BBC7]">
            Built around search, data & continuous improvement.
          </div>
        </div>

      </div>
    </footer>
  );
};
