import React from 'react';
import { Search, TrendingUp, Sparkles } from 'lucide-react';

export const KeywordMarquee: React.FC = () => {
  const keywordItems = [
    { text: 'Technical SEO', vol: '18.1K' },
    { text: 'SEO Consultant Karachi', vol: '14.5K' },
    { text: 'Crawl Optimization', vol: '9.8K' },
    { text: 'Keyword Research', vol: '22.4K' },
    { text: 'Local SEO Karachi', vol: '12.7K' },
    { text: 'Semantic SEO', vol: '8.4K' },
    { text: 'Google Indexing', vol: '16.2K' },
    { text: 'Internal Linking Graph', vol: '11.5K' },
    { text: 'Search Architecture', vol: '7.9K' },
    { text: 'Commercial SEO', vol: '15.0K' },
    { text: 'Schema Markup JSON-LD', vol: '10.2K' },
    { text: 'Content Optimization', vol: '19.8K' },
  ];

  return (
    <div className="py-6 bg-[#060909] border-y border-white/5 relative overflow-hidden select-none">
      {/* Left and Right Fading Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#060909] via-[#060909]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#060909] via-[#060909]/90 to-transparent z-20 pointer-events-none" />

      {/* Marquee Ticker Track */}
      <div className="flex animate-marquee whitespace-nowrap items-center group">
        {keywordItems.concat(keywordItems).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center mx-3 sm:mx-4 px-3.5 py-1.5 rounded-full bg-[#0D1414] border border-white/6 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B] mr-2" />
            <span className="text-xs sm:text-sm font-medium text-[#F4FAF7]">
              {item.text}
            </span>
            <span className="mx-2 text-[#5E736D] text-xs">•</span>
            <span className="text-[11px] font-mono font-semibold text-[#00FFD1] bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
              {item.vol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
