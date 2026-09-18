import React, { useState } from 'react';
import { FAQ_LIST } from '../data/seoData';
import { MessageSquare, ShieldCheck, Database, BookOpen, Plus, Minus, CheckCircle } from 'lucide-react';

export const WhyDaniyalSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Direct Communication',
      desc: 'You speak and strategize directly with the person doing the actual audit, crawl analysis, and metadata execution—never passed down to an inexperienced offshore intern.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Evidence Over Assumptions',
      desc: 'Recommendations are based on verified crawl data, Google Search Console query logs, Core Web Vitals diagnostics, and real SERP competitor analysis.',
      icon: Database
    },
    {
      num: '03',
      title: 'No Fake Guarantees',
      desc: 'I do not sell deceptive "#1 ranking within 7 days" shortcuts that violate Google Search Essentials. SEO decisions are explainable, safe, and transparent.',
      icon: ShieldCheck
    },
    {
      num: '04',
      title: 'Continuous Learning',
      desc: 'Search algorithms and user discovery evolve rapidly. My methodology stays up-to-date with Google algorithm updates, AI Overviews, and rendering standards.',
      icon: BookOpen
    }
  ];

  return (
    <section id="why-daniyal" className="py-24 sm:py-32 bg-[#0D1017] relative border-t border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] px-2.5 py-1 rounded bg-[#2DD4BF]/10 border border-[#2DD4BF]/20">
              WORK PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display">
            Direct communication. Clear reasoning.{' '}
            <span className="text-[#2DD4BF]">Hands-on SEO.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B5BBC7]">
            How I approach every SEO engagement—whether auditing an established Karachi e-commerce catalog or launching local SEO for a new clinic.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="p-8 rounded-3xl bg-[#11151E] border border-white/8 hover:border-[#2DD4BF]/40 transition-all group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#161C28] border border-white/8 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-[#080A0F] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-mono font-bold text-[#7D8595] group-hover:text-[#2DD4BF] transition-colors">
                    {p.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2DD4BF] transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-[#B5BBC7] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#080A0F] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] px-2.5 py-1 rounded bg-[#2DD4BF]/10 border border-[#2DD4BF]/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F8FA] tracking-tight font-display">
            Clear answers about SEO.
          </h2>
          <p className="mt-4 text-base text-[#B5BBC7]">
            Everything you need to know about SEO costs in Karachi, realistic timelines, and what is included in an audit.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#11151E] border-[#2DD4BF]/40 shadow-lg'
                    : 'bg-[#0D1017] border-white/8 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#7D8595] px-2 py-0.5 rounded bg-white/5">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#2DD4BF] text-[#080A0F]' : 'bg-[#161C28] text-white'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#B5BBC7] leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
