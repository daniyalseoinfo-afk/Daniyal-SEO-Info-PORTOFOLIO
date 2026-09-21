import React from 'react';
import { Network, Database, Layers, ArrowRight, Share2, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import keywordClusteringImage from '../../assets/images/keyword-clustering-on-page.webp';

interface KeywordClusterCaseStudyProps {
  onInspect: () => void;
}

export const KeywordClusterCaseStudy: React.FC<KeywordClusterCaseStudyProps> = ({ onInspect }) => {
  const connectedNodes = [
    { label: 'Service Keywords', detail: 'customs clearance agent, sea freight fcl', color: '#00E59B' },
    { label: 'Location Keywords', detail: 'karachi port, port qasim, korangi', color: '#00FFD1' },
    { label: 'Transactional Terms', detail: 'container rates, freight quote pakistan', color: '#B7FF3C' },
    { label: 'Supporting Topics', detail: 'import tariff codes, customs duties 2026', color: '#A855F7' },
    { label: 'FAQs & Micro-Intent', detail: 'how to clear container karachi port', color: '#38BDF8' },
    { label: 'Entity Terms', detail: 'Pakistan Customs, WeBOC, KICT, PICT', color: '#F59E0B' }
  ];

  return (
    <div className="rounded-3xl bg-[#080D0D] border border-purple-500/20 hover:border-purple-500/40 transition-all p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden relative group text-left">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/8 mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold px-3 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
            03 / KEYWORD ARCHITECTURE &amp; TOPOLOGY
          </span>
          <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Demonstration Project
          </span>
        </div>
        <div className="text-xs font-medium text-[#94A3B8] flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Karachi Port &amp; Korangi Industrial Area • B2B Freight Logistics</span>
        </div>
      </div>

      <div className="space-y-8">
        
        {/* Title & Core Meta Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4FAF7] leading-tight">
              Commercial Keyword Clustering &amp; On-Page Content Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
              Resolved multi-page keyword cannibalization for a major Pakistani logistics broker by transforming a 5-page generic brochure site into an authoritative hub-and-spoke search architecture.
            </p>
          </div>

          {/* 4 Data Chips */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-2 text-xs font-medium">
            <div className="p-2.5 rounded-xl bg-[#0D1414] border border-white/5">
              <span className="text-[10px] text-[#5E736D] block">Search Intent</span>
              <span className="font-semibold text-[#00E59B]">Transactional</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0D1414] border border-white/5">
              <span className="text-[10px] text-[#5E736D] block">Architecture</span>
              <span className="font-semibold text-[#00FFD1]">Hub → Cluster</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0D1414] border border-white/5">
              <span className="text-[10px] text-[#5E736D] block">Internal Links</span>
              <span className="font-semibold text-purple-400">Contextual Silo</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0D1414] border border-white/5">
              <span className="text-[10px] text-[#5E736D] block">Entity Coverage</span>
              <span className="font-semibold text-white">Expanded (68+ KWs)</span>
            </div>
          </div>
        </div>

        {/* Large Keyword Topology / Cluster Visualization */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#060909] border border-white/8 relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/5 text-xs font-medium">
            <div className="flex items-center space-x-2 text-[#94A3B8]">
              <Network className="w-4 h-4 text-purple-400" />
              <span className="font-bold text-white">Search Intent &amp; Cluster Topology</span>
            </div>
            <span className="text-[#5E736D]">Semantic Graph Map</span>
          </div>

          {/* Connected Network Graphic */}
          <div className="py-6 flex flex-col items-center justify-center relative">
            
            {/* Central Node */}
            <div className="relative z-10 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-900/60 to-[#080D0D] border-2 border-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-center">
              <div className="flex items-center justify-center space-x-1.5 text-[10px] font-semibold text-purple-300">
                <Database className="w-3 h-3" />
                <span>CENTRAL PILLAR ENTITY</span>
              </div>
              <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">
                Commercial Search Intent
              </span>
              <span className="text-[10px] font-medium text-[#00E59B]">High-LTV B2B Inquiries</span>
            </div>

            {/* Connecting Stems (Visual Line) */}
            <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-white/10 my-1" />

            {/* 6 Connected Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {connectedNodes.map((node) => (
                <div
                  key={node.label}
                  className="p-3.5 rounded-xl bg-[#0D1414] border border-white/5 hover:border-purple-500/30 transition-all text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
                      <span>{node.label}</span>
                    </span>
                    <span className="text-[10px] text-[#5E736D] font-normal">Node</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] font-mono">{node.detail}</p>
                </div>
              ))}
            </div>

          </div>

          {/* URL Architecture Blueprint */}
          <div className="pt-4 border-t border-white/5">
            <span className="text-[10px] font-semibold uppercase text-[#5E736D] block mb-2">
              Clean URL Taxonomy &amp; Hierarchy
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#0D1414] border border-white/5 text-[#94A3B8]">
                <span className="text-[#00E59B] font-mono">/service/</span>
                <span className="block text-[10px] text-[#5E736D] font-medium mt-0.5">Parent Hub (Topical Authority)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0D1414] border border-white/5 text-[#94A3B8]">
                <span className="text-[#00FFD1] font-mono">/service/location/</span>
                <span className="block text-[10px] text-[#5E736D] font-medium mt-0.5">Karachi Port &amp; Port Qasim Silos</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0D1414] border border-white/5 text-[#94A3B8]">
                <span className="text-purple-400 font-mono">/service/category/</span>
                <span className="block text-[10px] text-[#5E736D] font-medium mt-0.5">Customs Brokerage, LCL, Air Cargo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Row: Supporting Context Image & Action Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Supporting Proof Image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 bg-[#060909]">
            <img
              src={keywordClusteringImage}
              alt="Keyword clustering database and cluster sheets proof"
              className="w-full h-44 object-cover opacity-85 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-3 right-3 text-[10px] font-medium text-[#94A3B8] flex justify-between">
              <span>Keyword Master Database</span>
              <span className="text-purple-400"><span className="font-mono">120+</span> Clustered Queries</span>
            </div>
          </div>

          {/* Action & Outcomes Summary */}
          <div className="lg:col-span-7 space-y-3">
            <div className="p-4 rounded-xl bg-[#0D1414] border border-white/5 space-y-2 text-xs">
              <span className="text-purple-400 font-semibold block uppercase text-[10px]">
                Implementation Breakthrough
              </span>
              <p className="text-[#94A3B8] leading-relaxed">
                Eliminated cannibalization where 12 distinct maritime customs terms were fighting over a single homepage. Created 25 dedicated intent-satisfying pages that match exactly how freight forwarders search in Pakistan.
              </p>
            </div>

            <div className="pt-1 flex items-center justify-between">
              <button
                onClick={onInspect}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold transition-all shadow-sm group-hover:border-purple-500"
              >
                <span>View Full Case Study &amp; Taxonomy Matrix</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
