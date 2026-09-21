import React from 'react';
import { PageRoute } from '../types';
import { ArrowLeft, Home, Briefcase, FileText, Search, AlertTriangle } from 'lucide-react';

interface NotFoundProps {
  onRouteChange: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundProps> = ({ onRouteChange }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#060909] text-[#F4FAF7] flex items-center justify-center relative">
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-red-500/30 text-red-400 text-xs font-mono">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>HTTP STATUS CODE: 404 NOT FOUND</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight text-white font-mono">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            This URL does not exist or has moved.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
            In technical SEO, clean 404 handling prevents search engines from crawling dead ends or creating soft-404 indexation issues. Use the navigation links below to find what you need.
          </p>
        </div>

        {/* Helpful Pathway Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <button
            onClick={() => onRouteChange('home')}
            className="p-4 rounded-2xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/40 text-left space-y-2 transition-all group"
          >
            <Home className="w-5 h-5 text-[#00E59B]" />
            <div className="text-sm font-bold text-white group-hover:text-[#00E59B] transition-colors">
              Homepage
            </div>
            <div className="text-xs text-[#94A3B8]">
              Return to primary overview
            </div>
          </button>

          <button
            onClick={() => onRouteChange('seo-services-in-karachi')}
            className="p-4 rounded-2xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/40 text-left space-y-2 transition-all group"
          >
            <Briefcase className="w-5 h-5 text-[#00E59B]" />
            <div className="text-sm font-bold text-white group-hover:text-[#00E59B] transition-colors">
              SEO Services
            </div>
            <div className="text-xs text-[#94A3B8]">
              Technical, on-page &amp; local
            </div>
          </button>

          <button
            onClick={() => onRouteChange('portfolio')}
            className="p-4 rounded-2xl bg-[#080D0D] border border-white/10 hover:border-emerald-500/40 text-left space-y-2 transition-all group"
          >
            <FileText className="w-5 h-5 text-[#00E59B]" />
            <div className="text-sm font-bold text-white group-hover:text-[#00E59B] transition-colors">
              SEO Portfolio
            </div>
            <div className="text-xs text-[#94A3B8]">
              Audit logs &amp; case exercises
            </div>
          </button>
        </div>

        <div className="pt-4">
          <button
            onClick={() => onRouteChange('free-seo-tools')}
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#00E59B] hover:text-[#37F3B0] transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Try the Free Google SERP Snippet &amp; Pixel Tool</span>
          </button>
        </div>
      </div>
    </div>
  );
};
