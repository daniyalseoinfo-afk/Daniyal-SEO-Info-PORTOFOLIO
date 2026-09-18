import React from 'react';

export const KeywordMarquee: React.FC = () => {
  const keywords = [
    'KEYWORD RESEARCH',
    'TECHNICAL SEO',
    'ON-PAGE SEO',
    'LOCAL SEO KARACHI',
    'SEARCH CONSOLE',
    'COMPETITOR ANALYSIS',
    'CORE WEB VITALS',
    'SCHEMA JSON-LD',
    'CRAWL EFFICIENCY',
    'SERP INTENT'
  ];

  return (
    <div className="py-8 bg-[#080A0F] border-b border-white/8 overflow-hidden relative select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {keywords.concat(keywords).map((kw, i) => (
          <div key={i} className="flex items-center mx-6">
            <span className="text-xl sm:text-2xl font-mono uppercase tracking-widest text-transparent stroke-text font-bold opacity-40 hover:opacity-100 hover:text-[#B7FF3C] transition-all cursor-default"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.25)',
              }}
            >
              {kw}
            </span>
            <span className="ml-6 text-sm font-mono text-[#B7FF3C]/50">—</span>
          </div>
        ))}
      </div>
    </div>
  );
};
