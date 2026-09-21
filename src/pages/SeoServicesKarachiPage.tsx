import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES_LIST, FAQ_LIST } from '../data/seoData';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  Search, 
  Cpu, 
  LayoutTemplate, 
  ShieldCheck, 
  ArrowUpRight,
  ChevronDown,
  Building2,
  Stethoscope,
  Truck,
  Briefcase
} from 'lucide-react';
import { LiveSeoInspectorTool } from '../components/LiveSeoInspectorTool';

interface SeoServicesKarachiPageProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (initialUrl?: string) => void;
}

export const SeoServicesKarachiPage: React.FC<SeoServicesKarachiPageProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Page Hero */}
      <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(0,229,155,0.15)]">
              <MapPin className="w-3.5 h-3.5 text-[#00E59B]" />
              <span className="text-xs font-medium text-[#F4FAF7]">
                KARACHI COMMERCIAL SEO ARCHITECTURE
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
                SEO Services in{' '}
                <span className="text-gradient-emerald">Karachi</span> Built Around What Your Website Actually Needs.
              </h1>
              <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
                Engineered search visibility covering keyword clustering, on-page entity hierarchy, technical crawl optimization, and Google Maps Local 3-Pack domination for businesses across Pakistan and global markets.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              {['DATA-DRIVEN METHODOLOGY', 'ZERO BLACK-HAT TACTICS', 'DHA & CLIFTON LOCAL 3-PACK', '100% TRANSPARENT DELIVERABLES'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#0D1414] border border-white/[0.07] text-[#00E59B] font-mono text-[11px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onRequestReview()}
                className="px-6 py-3.5 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all duration-300 shadow-[0_0_30px_rgba(0,229,155,0.35)] flex items-center space-x-2"
              >
                <span>Request Free Technical SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onRouteChange('portfolio')}
                className="px-6 py-3.5 rounded-full bg-[#0B1111] text-[#F4FAF7] font-semibold text-sm border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center space-x-2"
              >
                <span>View Karachi Case Studies</span>
                <ArrowUpRight className="w-4 h-4 text-[#00E59B]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Comprehensive 6 Systems Bento Grid */}
      <section className="py-20 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-2">
            <span className="text-xs font-semibold text-[#00E59B] uppercase tracking-wider">
              COMPREHENSIVE SEARCH ENGINE COVERAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em]">
              Specialized SEO Systems
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Every website faces unique structural obstacles. Daniyal Asad deploys tailored engineering modules designed to unlock search bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((svc) => (
              <div
                key={svc.id}
                className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0B1111] text-[#00E59B] border border-emerald-500/20">
                      SYSTEM {svc.number}
                    </span>
                    <button
                      onClick={() => onRouteChange(svc.route)}
                      className="text-xs font-medium text-[#94A3B8] group-hover:text-[#00E59B] flex items-center space-x-1 transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E59B] transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {svc.fullDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div className="space-y-2">
                    {svc.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-[#94A3B8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E59B] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onRouteChange(svc.route)}
                    className="w-full py-2.5 rounded-xl bg-[#0B1111] hover:bg-emerald-500/10 text-xs font-semibold text-white group-hover:text-[#00E59B] border border-white/5 group-hover:border-emerald-500/20 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Inspect {svc.title} Process</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Inspector for Karachi Businesses */}
      <section className="py-20 border-b border-white/[0.07] bg-[#080D0D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveSeoInspectorTool onRequestReview={onRequestReview} />
        </div>
      </section>

      {/* Target Industries in Karachi */}
      <section className="py-20 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#00E59B] uppercase tracking-wider">
              INDUSTRY ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em]">
              Who Benefits Most from My SEO Services in Karachi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'E-Commerce Brands',
                desc: 'Karachi apparel, electronics, and catalog retailers suffering from index bloat, thin category pages, and faceted search waste.',
                area: 'Pakistan-Wide',
                icon: Building2
              },
              {
                title: 'Healthcare & Clinics',
                desc: 'Medical centers, dental practices, and diagnostic labs in Clifton & DHA requiring dominance across Google Maps 3-Pack.',
                area: 'Clifton & DHA',
                icon: Stethoscope
              },
              {
                title: 'B2B & Logistics',
                desc: 'Port freight forwarders, customs agents, and industrial suppliers targeting high-intent commercial buyers.',
                area: 'Port / Industrial',
                icon: Truck
              },
              {
                title: 'Corporate Practices',
                desc: 'Law firms, architecture studios, and corporate consultancies needing authoritative search presence and local citations.',
                area: 'Karachi Central',
                icon: Briefcase
              }
            ].map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="p-6 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-[#0B1111] border border-white/10 flex items-center justify-center text-[#00E59B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-[#00E59B] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {ind.area}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{ind.title}</h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Commercial FAQ Accordion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold text-[#00E59B] uppercase tracking-wider">
              CLEAR TRANSPARENT ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-[800] text-white tracking-[-0.03em]">
              Frequently Asked Questions: SEO Services in Karachi
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#080D0D] border border-white/[0.07] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00E59B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 border-t border-white/[0.07] bg-gradient-to-b from-[#080D0D] to-[#060909] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h3 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em]">
            Ready to scale your search visibility in{' '}
            <span className="text-gradient-emerald">Karachi?</span>
          </h3>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Get an objective, technical review of your website&apos;s crawl health, keyword clustering, and local rankings directly from Daniyal Asad.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onRequestReview()}
              className="px-8 py-4 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all shadow-[0_0_35px_rgba(0,229,155,0.4)]"
            >
              Request Karachi SEO Audit
            </button>
            <button
              onClick={() => onRouteChange('contact')}
              className="px-8 py-4 rounded-full bg-[#0B1111] text-white text-sm font-semibold border border-white/10 hover:border-emerald-500/30 transition-colors"
            >
              Contact Directly
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
