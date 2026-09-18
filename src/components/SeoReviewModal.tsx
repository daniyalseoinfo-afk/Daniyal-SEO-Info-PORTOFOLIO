import React, { useState } from 'react';
import { X, CheckCircle2, Terminal, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { ReviewRequestFormData } from '../types';

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
    businessType: 'E-Commerce',
    targetMarket: 'Karachi & Pakistan',
    primaryChallenge: 'Low organic traffic & weak keyword rankings',
    targetKeywords: '',
    budgetRange: 'Standard Project ($250 - $600)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080A0F]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#11151E] border border-white/14 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#161C28] text-[#7D8595] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#B7FF3C]/20 border border-[#B7FF3C] text-[#B7FF3C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Review Request Received!
            </h3>
            <p className="text-sm text-[#B5BBC7] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. I will personally review your website (<span className="text-[#B7FF3C] font-mono">{formData.websiteUrl}</span>) for technical crawl bottlenecks, indexing, and keyword gaps, and get back to you via email within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm hover:bg-[#A8F536] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#B7FF3C]/10 border border-[#B7FF3C]/20 text-[11px] font-mono text-[#B7FF3C]">
                <Terminal className="w-3.5 h-3.5" />
                <span>HANDS-ON REVIEW REQUEST</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Request an SEO Review
              </h3>
              <p className="text-xs sm:text-sm text-[#7D8595]">
                Share your website and target market in Karachi or globally. No automated generic reports — just real diagnostic insights.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Daniyal Khan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@business.pk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                    Website URL *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. https://mybrand.pk"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                    Business Model / Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B7FF3C]"
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
                  <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                    Target Market
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karachi (DHA/Clifton) or Worldwide"
                    value={formData.targetMarket}
                    onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                    Target Keywords (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SEO services in Karachi, dental clinic DHA"
                    value={formData.targetKeywords}
                    onChange={(e) => setFormData({ ...formData, targetKeywords: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#B7FF3C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B5BBC7] mb-1">
                  Primary SEO Challenge or Question
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me what seems broken or what you are trying to rank for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#B7FF3C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-sm sm:text-base hover:bg-[#A8F536] transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_-5px_rgba(183,255,60,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting review request...</span>
                  ) : (
                    <>
                      <span>Submit Website for Review</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] font-mono text-[#7D8595]">
                <span>No ranking guarantees • 100% Confidential • Direct reply from Daniyal</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
