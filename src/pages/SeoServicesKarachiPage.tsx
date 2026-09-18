import React from 'react';
import { PageRoute } from '../types';
import { SERVICES_LIST, FAQ_LIST } from '../data/seoData';
import { ArrowRight, CheckCircle2, MapPin, Sparkles, Search, Cpu, LayoutTemplate, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { LiveSeoInspectorTool } from '../components/LiveSeoInspectorTool';

interface SeoServicesKarachiPageProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (initialUrl?: string) => void;
}

export const SeoServicesKarachiPage: React.FC<SeoServicesKarachiPageProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-[#080A0F] relative border-b border-white/8">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#B7FF3C]/8 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#B7FF3C]">
              <MapPin className="w-3.5 h-3.5" />
              <span>SEO / KARACHI, PAKISTAN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
              SEO Services in{' '}
              <span className="text-[#B7FF3C]">Karachi</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
              Professional SEO services covering keyword research, on-page optimization, technical SEO, and local search for businesses in Karachi, Pakistan.
            </p>

            <p className="text-sm sm:text-base text-[#7D8595] leading-relaxed">
              Whether you are looking for the <strong>best SEO services in Karachi</strong> to capture local high-intent buyers in DHA and Clifton, or need technical crawl audits for an e-commerce catalog, my approach focuses on data, clear reasoning, and white-hat execution.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onRequestReview()}
                className="px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-all shadow-[0_0_25px_-5px_rgba(183,255,60,0.4)] flex items-center space-x-2"
              >
                <span>Request Free SEO Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onRouteChange('portfolio')}
                className="px-6 py-3.5 rounded-xl bg-[#161C28] text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-colors"
              >
                View Karachi Case Studies
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Overview & Specialization Grid */}
      <section className="py-20 bg-[#0D1017] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#45E6FF]">
              COMPREHENSIVE COVERAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-display">
              What My Professional SEO Services in Karachi Include
            </h2>
            <p className="text-sm sm:text-base text-[#B5BBC7] mt-2">
              Every website has unique barriers. I structure optimizations around what is currently holding your search presence back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_LIST.map((svc) => (
              <div
                key={svc.id}
                className="p-8 rounded-3xl bg-[#11151E] border border-white/8 hover:border-[#B7FF3C]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B7FF3C] px-2.5 py-1 rounded bg-[#161C28] border border-white/5">
                      SERVICE {svc.number}
                    </span>
                    <button
                      onClick={() => onRouteChange(svc.route)}
                      className="text-xs font-mono text-[#7D8595] group-hover:text-[#B7FF3C] flex items-center space-x-1"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#B7FF3C] transition-colors mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-[#B5BBC7] leading-relaxed mb-4">
                    {svc.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {svc.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-[#7D8595]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF3C]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={() => onRouteChange(svc.route)}
                    className="text-xs font-mono font-bold text-white group-hover:text-[#B7FF3C] flex items-center space-x-1"
                  >
                    <span>Explore {svc.title} Process</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Inspector for Karachi Businesses */}
      <section className="py-16 bg-[#080A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveSeoInspectorTool onRequestReview={onRequestReview} />
        </div>
      </section>

      {/* Who I Work With in Karachi */}
      <section className="py-20 bg-[#0D1017] border-t border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7FF3C]">
              TARGET INDUSTRIES IN KARACHI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-display">
              Who Benefits Most from My SEO Services in Karachi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'E-Commerce Brands',
                desc: 'Karachi fashion, electronics, and specialty retailers suffering from index bloat, thin category pages, and high cart abandonment.',
                area: 'Pakistan-Wide'
              },
              {
                title: 'Healthcare & Clinics',
                desc: 'Dental clinics, physiotherapists, and medical specialists in Clifton & DHA looking to rank in Google Maps 3-Pack.',
                area: 'Clifton & DHA'
              },
              {
                title: 'B2B & Logistics',
                desc: 'Karachi port freight forwarders, customs clearance agents, and industrial suppliers targeting high-intent commercial buyers.',
                area: 'Port / Industrial'
              },
              {
                title: 'Professional Practices',
                desc: 'Law firms, architecture studios, and corporate consultancies needing authoritative search presence and local citations.',
                area: 'Karachi Central'
              }
            ].map((ind) => (
              <div key={ind.title} className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
                <span className="text-[10px] font-mono text-[#B7FF3C] bg-white/5 px-2 py-0.5 rounded">
                  {ind.area}
                </span>
                <h3 className="text-lg font-bold text-white">{ind.title}</h3>
                <p className="text-xs text-[#B5BBC7] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Commercial FAQ */}
      <section className="py-20 bg-[#080A0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-8 text-center">
            Frequently Asked Questions: SEO Services in Karachi
          </h2>
          <div className="space-y-4">
            {FAQ_LIST.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-2">
                <h4 className="text-base font-semibold text-white">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-[#B5BBC7] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0D1017] border-t border-white/8 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Ready to improve your search visibility in Karachi?
          </h3>
          <p className="text-sm text-[#B5BBC7] mt-3">
            Get an honest review of your website&apos;s technical health, keyword clustering, and local rankings.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => onRequestReview()}
              className="px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-colors"
            >
              Request Karachi SEO Review
            </button>
            <button
              onClick={() => onRouteChange('contact')}
              className="px-6 py-3.5 rounded-xl bg-[#161C28] text-white text-sm font-semibold border border-white/10"
            >
              Contact Directly
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
