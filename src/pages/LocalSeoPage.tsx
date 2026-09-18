import React from 'react';
import { PageRoute } from '../types';
import { MapPin, SearchCode, CheckCircle2, ArrowRight, Compass, Layers } from 'lucide-react';

export const LocalSeoPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#B7FF3C]">
              <MapPin className="w-3.5 h-3.5" />
              <span>LOCAL SEO / KARACHI, PAKISTAN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
              Local SEO Services in{' '}
              <span className="text-[#B7FF3C]">Karachi</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
              Strengthen location relevance and capture local customer queries across DHA, Clifton, Gulshan-e-Iqbal, PECHS, and Korangi on Google Maps and Local 3-Pack.
            </p>

            <div className="pt-4">
              <button
                onClick={onRequestReview}
                className="px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-all"
              >
                Request Karachi Local SEO Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">Google Business Profile (GBP)</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Precision category alignment, geotagged real business photography, and active response management.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">Pakistani NAP Citations</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Standardize Name, Address, and Phone numbers across Pakistani local directories and business registries.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">Karachi Neighborhood Landing Pages</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Authored geo-targeted service pages with embedded LocalBusiness JSON-LD markup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const KeywordResearchPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#B7FF3C]">
              <SearchCode className="w-3.5 h-3.5" />
              <span>KEYWORD STRATEGY & CLUSTERING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
              Keyword Research Services in{' '}
              <span className="text-[#B7FF3C]">Karachi</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
              Turn raw search volume numbers into clear topic clusters and pages instead of an unorganized spreadsheet.
            </p>

            <div className="pt-4">
              <button
                onClick={onRequestReview}
                className="px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-all"
              >
                Request Keyword Opportunity Matrix
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">Intent Classification</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Separate informational research queries from high-intent commercial keywords that drive leads in Karachi.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">Topical Clustering</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Group semantically related keywords into single pillar pages to prevent keyword cannibalization.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11151E] border border-white/8 space-y-3">
              <h3 className="text-lg font-bold text-white">Competitor Gap Analysis</h3>
              <p className="text-xs text-[#B5BBC7] leading-relaxed">
                Identify valuable terms your competitors rank for where your site currently has zero coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
