import React, { useState } from 'react';
import { PageRoute, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/seoData';

// Case Studies Page Components
import { CaseStudiesHero } from '../components/portfolio/CaseStudiesHero';
import { TechnicalCrawlCaseStudy } from '../components/portfolio/TechnicalCrawlCaseStudy';
import { LocalSeoCaseStudy } from '../components/portfolio/LocalSeoCaseStudy';
import { KeywordClusterCaseStudy } from '../components/portfolio/KeywordClusterCaseStudy';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';

// About Page Components
import { AboutHero } from '../components/about/AboutHero';
import { SearchFlowStory } from '../components/about/SearchFlowStory';
import { EngineeringPrinciplesBento } from '../components/about/EngineeringPrinciplesBento';
import { CapabilityMatrix } from '../components/about/CapabilityMatrix';
import { WorkflowTimeline } from '../components/about/WorkflowTimeline';
import { ToolboxMiniBento } from '../components/about/ToolboxMiniBento';
import { AboutPositioningCta } from '../components/about/AboutPositioningCta';

interface PageProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

// ==========================================
// PAGE 1 — CASE STUDIES (PORTFOLIO PAGE)
// ==========================================
export const PortfolioPage: React.FC<PageProps> = ({ onRouteChange, onRequestReview }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedStudy, setInspectedStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Technical', 'On-Page', 'Keyword Research', 'Local SEO'];

  // Study lookup map
  const studyMap = {
    technical: CASE_STUDIES.find((s) => s.id === 'karachi-ecommerce-tech-audit') || CASE_STUDIES[0],
    local: CASE_STUDIES.find((s) => s.id === 'local-dental-clinic-karachi') || CASE_STUDIES[1],
    keyword: CASE_STUDIES.find((s) => s.id === 'b2b-logistics-keyword-cluster') || CASE_STUDIES[2]
  };

  const showTechnical = selectedCategory === 'All' || selectedCategory === 'Technical';
  const showLocal = selectedCategory === 'All' || selectedCategory === 'Local SEO';
  const showKeyword = selectedCategory === 'All' || selectedCategory === 'Keyword Research' || selectedCategory === 'On-Page';

  return (
    <div className="pt-24 pb-20 bg-[#060909]">
      
      {/* 1. Case Studies Hero with Performance Intelligence HUD */}
      <CaseStudiesHero />

      {/* 2. Premium Segmented Filter Control */}
      <section className="py-8 bg-[#060909] border-b border-white/5 sticky top-20 z-30 backdrop-blur-xl bg-[#060909]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center space-x-2 text-xs font-mono text-[#5E736D]">
              <span className="w-2 h-2 rounded-full bg-[#00E59B]" />
              <span className="text-white font-bold">SYSTEM FILTER:</span>
              <span>Select Architecture Domain</span>
            </div>

            {/* Segmented Control Bar */}
            <div className="flex flex-wrap p-1.5 rounded-full bg-[#080D0D] border border-white/10 shadow-lg gap-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold shadow-[0_0_15px_rgba(0,229,155,0.4)]'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Case Studies Bento Container */}
      <section className="py-16 bg-[#060909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Case Study 01: Technical Crawl & Indexation */}
          {showTechnical && (
            <div className="animate-in fade-in duration-300">
              <TechnicalCrawlCaseStudy onInspect={() => setInspectedStudy(studyMap.technical)} />
            </div>
          )}

          {/* Case Study 02: Local SEO & Google Business Profile */}
          {showLocal && (
            <div className="animate-in fade-in duration-300">
              <LocalSeoCaseStudy onInspect={() => setInspectedStudy(studyMap.local)} />
            </div>
          )}

          {/* Case Study 03: Commercial Keyword Clustering & Topology */}
          {showKeyword && (
            <div className="animate-in fade-in duration-300">
              <KeywordClusterCaseStudy onInspect={() => setInspectedStudy(studyMap.keyword)} />
            </div>
          )}

        </div>
      </section>

      {/* 4. Deep Inspection Modal */}
      <CaseStudyModal
        study={inspectedStudy}
        onClose={() => setInspectedStudy(null)}
        onRequestReview={onRequestReview}
      />

    </div>
  );
};

// ==========================================
// PAGE 2 — ABOUT DANIYAL ASAD
// ==========================================
export const AboutPage: React.FC<PageProps> = ({ onRouteChange, onRequestReview }) => {
  return (
    <div className="pt-24 pb-20 bg-[#060909]">
      
      {/* 1. Asymmetric Bento Hero with Portrait Intelligence Card & HUD */}
      <AboutHero
        onRouteChange={onRouteChange}
        onRequestReview={onRequestReview}
      />

      {/* 2. Conceptual Foundation & Search Engine Pipeline Flow */}
      <SearchFlowStory />

      {/* 3. Engineering Principles Bento (Diagnose Depth, Semantic Clusters, Tracking) */}
      <EngineeringPrinciplesBento />

      {/* 4. Interactive Capability Matrix (What I Work On) */}
      <CapabilityMatrix />

      {/* 5. 5-Phase Systematic SEO Workflow Timeline */}
      <WorkflowTimeline />

      {/* 6. Technical Toolbox Mini-Bento */}
      <ToolboxMiniBento />

      {/* 7. Personal Positioning Conversion Panel */}
      <AboutPositioningCta
        onRouteChange={onRouteChange}
        onRequestReview={onRequestReview}
      />

    </div>
  );
};
