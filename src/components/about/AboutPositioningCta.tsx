import React from 'react';
import { ArrowRight, Terminal, Sparkles, Mail, Linkedin, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../../types';
import { SITE_INFO } from '../../lib/siteConfig';

interface AboutPositioningCtaProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const AboutPositioningCta: React.FC<AboutPositioningCtaProps> = ({ onRouteChange, onRequestReview }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#060909] relative overflow-hidden space-y-16">
      
      {/* Recruiter & Hiring Pathway Block (Phase 29) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#080D0D] border border-white/[0.08] p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#00E59B]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>FOR RECRUITERS, AGENCIES &amp; IN-HOUSE TEAMS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Hiring or Collaborating with Daniyal?
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00E59B] animate-pulse" />
              <span className="text-xs font-mono text-[#00E59B]">Open for Roles &amp; Retainers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-[#0B1111] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#5E736D] uppercase block">Target Roles</span>
              <ul className="text-xs text-white space-y-1 font-medium">
                <li className="flex items-center space-x-1.5 text-[#00E59B]">
                  <span>›</span>
                  <span className="text-white">SEO Specialist</span>
                </li>
                <li className="flex items-center space-x-1.5 text-[#00E59B]">
                  <span>›</span>
                  <span className="text-white">Technical SEO Specialist</span>
                </li>
                <li className="flex items-center space-x-1.5 text-[#00E59B]">
                  <span>›</span>
                  <span className="text-white">SEO Executive (Agency / In-House)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1111] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#5E736D] uppercase block">Core Competencies</span>
              <ul className="text-xs text-[#94A3B8] space-y-1">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00E59B]" />
                  <span>Screaming Frog crawl audits</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00E59B]" />
                  <span>GSC Index Coverage &amp; sitemaps</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00E59B]" />
                  <span>Topic clustering &amp; cannibalization</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00E59B]" />
                  <span>Local SEO &amp; Karachi Google 3-Pack</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1111] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#5E736D] uppercase block">Location &amp; Availability</span>
              <div className="space-y-1.5 text-xs text-[#94A3B8]">
                <div className="flex items-center space-x-1.5 text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#00E59B]" />
                  <span>Karachi, Pakistan (On-site / Hybrid)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-white font-medium">
                  <Terminal className="w-3.5 h-3.5 text-[#00FFD1]" />
                  <span>Full Remote (Worldwide Teams)</span>
                </div>
                <p className="text-[11px] text-[#5E736D] pt-1">
                  Flexible with EST, GMT, and PKT timezones for standups and sprint planning.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
            <span className="text-xs text-[#94A3B8]">Direct Contact Channels:</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="px-4 py-2 rounded-xl bg-[#0B1111] border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-white flex items-center space-x-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00E59B]" />
                <span>{SITE_INFO.email}</span>
              </a>
              <a
                href={SITE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0B1111] border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-white flex items-center space-x-2 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#00FFD1]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Conversion Panel */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#080D0D] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(0,229,155,0.1)] relative overflow-hidden">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-[#00E59B]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]" />
            </span>
            <span>AVAILABLE FOR AUDITS &amp; STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight max-w-2xl mx-auto leading-tight">
            Need Someone Who Diagnoses the Actual Bottlenecks?
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            If your website has crawl traps, unindexed URLs, cannibalization, or local Map Pack stagnation in Karachi, let’s identify what is limiting search performance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestReview}
              className="px-8 py-4 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm sm:text-base hover:bg-[#37F3B0] transition-all flex items-center space-x-2 shadow-[0_0_25px_rgba(0,229,155,0.35)]"
            >
              <span>Request Technical SEO Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onRouteChange('portfolio')}
              className="px-7 py-4 rounded-full bg-[#0D1414] hover:bg-[#121A1A] text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-emerald-500/40 transition-all flex items-center space-x-2"
            >
              <span>View Case Studies</span>
            </button>
          </div>

          <div className="pt-4 text-xs font-medium text-[#5E736D]">
            <span>100% Confidential • Direct diagnostic analysis by Daniyal Asad • No automated generic PDF spam</span>
          </div>

        </div>
      </div>
    </section>
  );
};
