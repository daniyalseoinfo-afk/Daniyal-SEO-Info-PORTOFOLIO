import React from 'react';
import { PageRoute } from '../types';
import { HeroSection } from '../components/HeroSection';
import { HowIThinkSection } from '../components/HowIThinkSection';
import { KeywordMarquee } from '../components/KeywordMarquee';
import { ServicesGrid } from '../components/ServicesGrid';
import { KarachiCommercialSection } from '../components/KarachiCommercialSection';
import { AboutPreview } from '../components/AboutPreview';
import { CaseStudySection, SeoProcessSection } from '../components/CaseStudySection';
import { ToolStackSection, AnalyticsPhilosophySection } from '../components/ToolStackSection';
import { WhyDaniyalSection, FaqSection } from '../components/WhyDaniyalSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { LiveSeoInspectorTool } from '../components/LiveSeoInspectorTool';

interface HomeViewProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (initialUrl?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  return (
    <div>
      <HeroSection
        onRouteChange={onRouteChange}
        onRequestReview={() => onRequestReview()}
      />

      <HowIThinkSection />

      <KeywordMarquee />

      <ServicesGrid
        onRouteChange={onRouteChange}
      />

      <KarachiCommercialSection
        onRouteChange={onRouteChange}
        onRequestReview={() => onRequestReview()}
      />

      {/* Interactive Diagnostic Tool Section */}
      <section className="py-12 bg-[#060909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveSeoInspectorTool onRequestReview={onRequestReview} />
        </div>
      </section>

      <AboutPreview
        onRouteChange={onRouteChange}
      />

      <CaseStudySection
        onRouteChange={onRouteChange}
      />

      <SeoProcessSection />

      <ToolStackSection />

      <AnalyticsPhilosophySection />

      <WhyDaniyalSection />

      <FaqSection />

      <FinalCtaSection
        onRouteChange={onRouteChange}
        onRequestReview={() => onRequestReview()}
      />
    </div>
  );
};
