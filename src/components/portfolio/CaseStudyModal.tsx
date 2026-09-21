import React from 'react';
import { X, CheckCircle2, Terminal, ArrowRight, ShieldCheck, Sparkles, AlertCircle, Layers } from 'lucide-react';
import { CaseStudy } from '../../types';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onRequestReview: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onRequestReview }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#080D0D] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(0,229,155,0.15)] max-h-[90vh] overflow-y-auto space-y-6 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#0D1414] border border-white/10 text-[#5E736D] hover:text-white hover:border-emerald-500/40 transition-colors"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#00E59B] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              {study.status} • {study.category}
            </span>
            <span className="text-xs font-medium text-[#5E736D]">
              {study.location}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4FAF7] leading-tight">
            {study.title}
          </h3>

          <p className="text-xs text-[#94A3B8]">
            <strong className="text-white">Client Environment:</strong> {study.clientType}
          </p>
        </div>

        {/* Visual proof preview */}
        {study.imageSrc && (
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#060909]">
            <img
              src={study.imageSrc}
              alt={`${study.title} case study visual`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D0D] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-medium text-white">
              <span>{study.myRole}</span>
              <span className="text-[#00E59B]">{study.resultSummary}</span>
            </div>
          </div>
        )}

        {/* Section 1: Challenge & Bottleneck */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-white uppercase flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>1. Search Problem &amp; Architecture Bottleneck</span>
          </h4>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed bg-[#0D1414] p-4 rounded-xl border border-white/5">
            {study.challenge}
          </p>
        </div>

        {/* Section 2: Audit Findings */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-white uppercase flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-[#00FFD1]" />
            <span>2. Diagnostic Audit Findings</span>
          </h4>
          <div className="space-y-2">
            {study.findings.map((finding, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#0D1414] border border-white/5 text-xs text-[#94A3B8] flex items-start space-x-2.5">
                <span className="text-[#00E59B] font-bold font-mono">[{idx + 1}]</span>
                <span className="leading-relaxed">{finding}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Actions Executed */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-white uppercase flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#00E59B]" />
            <span>3. Actions Executed &amp; Technical Fixes</span>
          </h4>
          <div className="space-y-2">
            {study.actionsTaken.map((action, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#0D1414] border border-emerald-500/20 text-xs text-[#F4FAF7] flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E59B] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Architectural Takeaway */}
        <div className="p-4 rounded-xl bg-[#0D1414] border border-white/8 space-y-1">
          <span className="text-[11px] uppercase text-[#00FFD1] font-semibold block">
            Core Search Engineering Principle:
          </span>
          <p className="text-xs text-[#94A3B8] italic leading-relaxed">"{study.keyLearning}"</p>
        </div>

        {/* Modal Footer CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/8">
          <span className="text-[11px] font-medium text-[#5E736D]">
            Direct review &amp; implementation by Daniyal Asad
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestReview();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-xs sm:text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,229,155,0.3)]"
          >
            <span>Request Similar SEO Audit for Your Site</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
