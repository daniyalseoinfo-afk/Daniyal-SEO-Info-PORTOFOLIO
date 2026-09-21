import React, { useState } from 'react';
import { PageRoute, CaseStudy } from '../types';
import { ArrowUpRight, CheckCircle2, AlertTriangle, Cpu, Network, MapPin, TrendingUp, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

interface CaseStudySectionProps {
  onRouteChange: (route: PageRoute) => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  onRouteChange,
  onSelectCaseStudy
}) => {
  const caseStudiesData = [
    {
      id: 'technical-seo-audit',
      title: 'E-Commerce Technical Crawling & Canonical Indexation Overhaul',
      category: 'Technical SEO • Crawl Efficiency',
      clientType: 'Online Retail Store',
      problem: 'Audit exercise focused on faceted-navigation crawl bloat, redirect chains, and conflicting canonical signals that can waste crawl resources.',
      actions: [
        'Crawled a representative e-commerce architecture in Screaming Frog',
        'Implemented strict robots.txt disallow rules for query filter parameters',
        'Mapped redirect-chain and canonical remediation rules for affected URL patterns',
        'Injected JSON-LD Product & BreadcrumbList structured data schema'
      ],
      results: [
        { label: 'Evidence Status', before: 'Exercise', after: 'Methodology documented', highlight: true },
        { label: 'Primary Focus', before: 'Crawl bloat', after: 'Canonical + redirect plan', highlight: false },
        { label: 'Production Result', before: 'Not claimed', after: 'Requires verified GSC data', highlight: false }
      ],
      tag: 'CRAWL DIAGNOSTIC'
    },
    {
      id: 'keyword-intent-clustering',
      title: 'B2B Commercial Keyword Clustering & Search Architecture',
      category: 'Keyword Research • Content Architecture',
      clientType: 'Industrial Equipment Supplier',
      problem: 'High-volume content had zero search intent alignment, competing internally for identical terms (keyword cannibalization) while ignoring commercial buyer queries.',
      actions: [
        'Clustered a representative B2B keyword set by commercial intent and topic',
        'Rebuilt URL taxonomy with strict parent-child folder architecture',
        'Constructed internal link graph ensuring commercial money pages sit at depth ≤ 2',
        'Aligned page H1-H3 document hierarchy with search intent profiles'
      ],
      results: [
        { label: 'Evidence Status', before: 'Exercise', after: 'Architecture documented', highlight: true },
        { label: 'Primary Focus', before: 'Cannibalization', after: 'Intent-to-URL map', highlight: false },
        { label: 'Production Result', before: 'Not claimed', after: 'Requires verified GSC data', highlight: false }
      ],
      tag: 'TAXONOMY & INTENT'
    },
    {
      id: 'local-seo-karachi-expansion',
      title: 'Karachi Local Search Visibility Strategy',
      category: 'Local SEO • Google Business Profile',
      clientType: 'Corporate Consultancy (Karachi)',
      problem: 'Strategy exercise focused on improving local relevance, citation consistency, and service-area landing-page quality for a Karachi business.',
      actions: [
        'Optimized Google Business Profile with localized primary category & geo-services',
        'Mapped NAP consistency checks across relevant Pakistani business directories',
        'Designed a location-page framework that avoids thin or doorway-style pages',
        'Outlined a compliant customer review acquisition and response workflow'
      ],
      results: [
        { label: 'Evidence Status', before: 'Exercise', after: 'Local plan documented', highlight: true },
        { label: 'Primary Focus', before: 'Local relevance', after: 'GBP + citation framework', highlight: false },
        { label: 'Production Result', before: 'Not claimed', after: 'Requires verified GBP/GSC data', highlight: false }
      ],
      tag: 'GEO AUTHORITY'
    }
  ];

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-[#00E59B] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B]" />
              <span>SELECTED SEO EXERCISES &amp; CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight font-display leading-[1.12]">
              SEO Diagnosis,{' '}
              <span className="text-gradient-emerald">Documented Step by Step.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              These portfolio exercises demonstrate root-cause diagnosis, prioritization, and implementation planning. Verified client outcomes are only shown when supporting data is available.
            </p>
          </div>

          <button
            onClick={() => onRouteChange('portfolio')}
            className="self-start md:self-auto px-5 py-3 rounded-full bg-[#0D1414] border border-white/10 text-white text-xs font-mono font-semibold hover:border-emerald-500/40 hover:text-[#00E59B] transition-all flex items-center space-x-2"
          >
            <span>View All Documentation</span>
            <ArrowUpRight className="w-4 h-4 text-[#00E59B]" />
          </button>
        </div>

        {/* Stacked Bento Case Study Cards */}
        <div className="space-y-8">
          {caseStudiesData.map((study, idx) => (
            <div
              key={study.id}
              className="rounded-3xl bg-[#080D0D]/90 border border-white/8 hover:border-emerald-500/30 transition-all duration-300 p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Col: Problem, Actions Taken */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-[#00E59B] font-bold border border-emerald-500/20">
                      {study.tag}
                    </span>
                    <span className="text-xs font-mono text-[#5E736D]">
                      {study.category} • {study.clientType}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00E59B] transition-colors font-display">
                    {study.title}
                  </h3>

                  {/* Problem Statement */}
                  <div className="p-4 rounded-2xl bg-[#0D1414] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5E736D] block">
                      Crawl &amp; Architecture Hurdle:
                    </span>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Engineered Actions */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5E736D] block">
                      Engineered Intervention:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      {study.actions.map((act, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[#94A3B8] p-2 rounded-xl bg-black/30 border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00E59B] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Measured Results & Before/After Metrics */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0D1414] border border-white/8 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] font-mono">
                    <span className="text-white font-bold flex items-center space-x-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#00E59B]" />
                      <span>Evidence &amp; Scope</span>
                    </span>
                    <span className="text-[#00FFD1]">Transparent Status</span>
                  </div>

                  <div className="space-y-3">
                    {study.results.map((res, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border ${
                          res.highlight
                            ? 'bg-emerald-500/[0.06] border-emerald-500/25'
                            : 'bg-black/30 border-white/5'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#5E736D] block">
                          {res.label}
                        </span>
                        <div className="flex items-baseline justify-between mt-1 font-mono">
                          <span className="text-xs text-[#5E736D] line-through">
                            {res.before}
                          </span>
                          <span className={`text-sm font-bold ${res.highlight ? 'text-[#00E59B]' : 'text-white'}`}>
                            {res.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#5E736D]">Case Study #{idx + 1}</span>
                    <button
                      onClick={() => onRouteChange('portfolio')}
                      className="text-[#00E59B] hover:text-[#00FFD1] flex items-center space-x-1 font-semibold"
                    >
                      <span>Read Full Report</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* 5-Step SEO Process Section */
export const SeoProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Diagnose',
      subtitle: 'Technical Crawl & Server Log Audit',
      desc: 'Executing custom Screaming Frog crawls and log file inspections. We isolate 301/404 chains, render-blocking scripts, indexing parameter leaks, and Core Web Vitals latency.',
      deliverable: 'Technical Audit Matrix & Developer Fix Backlog'
    },
    {
      num: '02',
      title: 'Map',
      subtitle: 'Commercial Intent & Topic Clustering',
      desc: 'Grouping thousands of high-intent search terms into cohesive topic clusters. We align keywords with parent URLs, avoid internal cannibalization, and architect a 3-click hierarchy.',
      deliverable: 'Commercial Taxonomy Map & Keyword Masterfile'
    },
    {
      num: '03',
      title: 'Engineer',
      subtitle: 'On-Page Hierarchy & Schema Graph',
      desc: 'Restructuring HTML document outlines, injecting deep JSON-LD entity schema (@type: ProfessionalService, Product), and redesigning internal link anchor text to channel link equity.',
      deliverable: 'Structured Data Payloads & On-Page Outlines'
    },
    {
      num: '04',
      title: 'Deploy',
      subtitle: 'Staging Validation & Googlebot Fetch',
      desc: 'Validating fixes in staging or live code, running URL inspection in Google Search Console, pinging updated XML sitemaps, and checking live rendering via Chrome DevTools.',
      deliverable: 'Deployment Verification & Indexing Pass'
    },
    {
      num: '05',
      title: 'Compound',
      subtitle: 'GSC Trend Analysis & Query Expansion',
      desc: 'Monitoring search impression velocity, ranking shifts, and user CTR. We continuously optimize high-impression low-CTR queries to turn steady search demand into compounding revenue.',
      deliverable: 'Bi-Weekly Search Console Insights & Growth Roadmap'
    }
  ];

  return (
    <section id="process-section" className="py-24 sm:py-32 bg-[#060909] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-[#00E59B] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E59B]" />
            <span>THE 5-STEP FRAMEWORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4FAF7] tracking-tight font-display leading-[1.12]">
            From Crawl Diagnosis to{' '}
            <span className="text-gradient-emerald">Compounding Growth.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Search engineering follows a strict procedural sequence. We resolve technical blockers before publishing, map intent before writing, and measure real search data rather than vanity metrics.
          </p>
        </div>

        {/* Process Steps: Horizontal desktop, vertical mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0B1111] border-emerald-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,155,0.12)] -translate-y-1'
                    : 'bg-[#080D0D]/70 border-white/6 hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className={`text-2xl font-mono font-bold transition-colors ${
                      isActive ? 'text-[#00E59B]' : 'text-white/20'
                    }`}>
                      {step.num}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                      isActive ? 'bg-emerald-500/20 text-[#00E59B]' : 'bg-white/5 text-[#5E736D]'
                    }`}>
                      {step.title}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mt-4 mb-2 font-display">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] font-mono">
                  <span className="text-[#5E736D] block text-[9px] uppercase">Artifact:</span>
                  <span className={isActive ? 'text-[#00FFD1] font-semibold' : 'text-white'}>
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
