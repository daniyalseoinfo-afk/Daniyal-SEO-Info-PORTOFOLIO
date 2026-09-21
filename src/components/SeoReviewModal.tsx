import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Terminal, ArrowUpRight, ShieldCheck, Sparkles, Send, RefreshCw } from 'lucide-react';
import { ReviewRequestFormData } from '../types';
import { submitPortfolioForm } from '../lib/formSubmit';

interface SeoReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUrl?: string;
}

export const SeoReviewModal: React.FC<SeoReviewModalProps> = ({
  isOpen,
  onClose,
  initialUrl = ''
}) => {
  const [formData, setFormData] = useState<ReviewRequestFormData>({
    fullName: '',
    email: '',
    websiteUrl: initialUrl,
    businessType: 'E-Commerce Store',
    targetMarket: 'Karachi & Pakistan',
    primaryChallenge: 'Low organic traffic & weak keyword rankings',
    targetKeywords: '',
    budgetRange: 'Standard Project ($250 - $600)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (initialUrl) {
      setFormData((current) => ({ ...current, websiteUrl: initialUrl }));
    }
  }, [initialUrl]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitPortfolioForm('New Free SEO Review Request', {
        form_name: 'Free SEO Review Request',
        name: formData.fullName,
        email: formData.email,
        website: formData.websiteUrl,
        business_type: formData.businessType,
        target_market: formData.targetMarket,
        target_keywords: formData.targetKeywords || 'Not provided',
        primary_challenge: formData.primaryChallenge,
        budget_range: formData.budgetRange,
        message: formData.message || 'No additional message'
      });
      setIsSubmitted(true);
    } catch {
      setSubmitError('Failed to send request automatically. Please email directly to daniyalseoinfo@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#080D0D] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(0,229,155,0.15)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#0D1414] border border-white/10 text-[#5E736D] hover:text-white hover:border-emerald-500/40 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-[#00E59B] text-[#00E59B] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,229,155,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Review Request Initiated
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. I will personally review <span className="text-[#00E59B] font-mono">{formData.websiteUrl}</span> for technical crawl bottlenecks, indexing anomalies, and search intent gaps, then email my direct diagnostic notes within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1 text-left">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-[#00E59B]">
                <Terminal className="w-3.5 h-3.5" />
                <span>DIRECT SPECIALIST AUDIT REQUEST</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4FAF7]">
                Request a Technical SEO Review
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                Share your website and target market in Karachi or globally. No automated PDF summaries — just human-verified search architecture analysis.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Daniyal Khan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@business.pk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                    Website URL *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. https://mybrand.pk"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                    Business Model / Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  >
                    <option value="E-Commerce Store">E-Commerce Store (Karachi/Pakistan)</option>
                    <option value="Local Service / Clinic">Local Service / Clinic / Practice</option>
                    <option value="B2B / Industrial Company">B2B / Industrial Company</option>
                    <option value="SaaS / Digital Product">SaaS / Digital Product</option>
                    <option value="Agency / Content Publisher">Agency / Content Publisher</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                    Target Market
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karachi (DHA/Clifton) or International"
                    value={formData.targetMarket}
                    onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                    Target Keywords (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. technical SEO Karachi, industrial supplies"
                    value={formData.targetKeywords}
                    onChange={(e) => setFormData({ ...formData, targetKeywords: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">
                  Primary SEO Challenge or Indexing Question
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current crawl bottlenecks, traffic drop, or ranking goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,229,155,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-[#060909]" />
                      <span>Sending Request...</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Website for Manual Review</span>
                      <Send className="w-4 h-4 text-[#060909]" />
                    </>
                  )}
                </button>
              </div>

              {submitError && (
                <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-center text-xs text-red-200">
                  {submitError}{' '}
                  <a href="mailto:daniyalseoinfo@gmail.com" className="font-bold underline underline-offset-2">
                    Email Daniyal
                  </a>
                </div>
              )}

              <div className="pt-2 text-center text-[11px] text-[#5E736D]">
                <span>Direct manual review by Daniyal Asad • 100% Confidential • &lt; 24h Response</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
