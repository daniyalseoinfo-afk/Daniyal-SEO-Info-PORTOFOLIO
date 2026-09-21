import React, { useState } from 'react';
import { PageRoute, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/seoData';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Tag, 
  User, 
  ArrowRight, 
  BookOpen, 
  Share2, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Send,
  Terminal
} from 'lucide-react';
import { submitPortfolioForm } from '../lib/formSubmit';

export const BlogPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Technical SEO', 'Local SEO', 'Keyword Research'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Blog Article Reader View */}
      {selectedPost ? (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#00E59B] hover:text-[#37F3B0] mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Technical Guides</span>
          </button>

          <div className="space-y-4 pb-8 border-b border-white/[0.08]">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0B1111] text-[#00E59B] border border-emerald-500/30">
              {selectedPost.category}
            </span>

            <h1 className="text-3xl sm:text-5xl font-[800] text-white tracking-[-0.035em] leading-[1.05]">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-[#00E59B]" />
                <span className="text-white">By Daniyal Asad</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedPost.publishedDate}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedPost.readTime}</span>
              </span>
            </div>
          </div>

          {/* Table of Contents Bento */}
          <div className="my-8 p-6 rounded-2xl bg-[#080D0D] border border-white/[0.07] space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00E59B] font-bold">
              TABLE OF CONTENTS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
              {selectedPost.tableOfContents.map((toc, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  <span className="text-[#00E59B] font-mono text-xs">0{i + 1}.</span>
                  <span className="text-white">{toc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="max-w-[740px] space-y-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed pt-2">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-white/[0.07] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#5E736D]" />
            {selectedPost.tags.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-[#0B1111] text-[#F4FAF7] border border-white/5">
                #{t}
              </span>
            ))}
          </div>

          {/* Contextual Author Card & CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-[#080D0D] border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">Need custom guidance on this technical problem?</h4>
              <p className="text-xs text-[#94A3B8]">Daniyal provides direct technical audits and on-page optimization for websites in Karachi &amp; globally.</p>
            </div>
            <button
              onClick={onRequestReview}
              className="px-6 py-3 rounded-full bg-[#00E59B] text-[#060909] font-bold text-xs sm:text-sm hover:bg-[#37F3B0] shrink-0 transition-all shadow-[0_0_20px_rgba(0,229,155,0.3)]"
            >
              Request Free Technical Audit
            </button>
          </div>
        </article>
      ) : (
        /* Blog Archive Listing */
        <div>
          <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/20">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
                  </span>
                  <span className="text-xs font-medium text-[#F4FAF7]">
                    TECHNICAL INSIGHTS &amp; AUDIT NOTES
                  </span>
                </div>

                <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
                  SEO Research &amp;{' '}
                  <span className="text-gradient-emerald">Field Notes</span>
                </h1>

                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                  Field observations on Core Web Vitals, local Karachi Google Maps optimization, crawl budget efficiency, and Search Console keyword diagnostics written by Daniyal Asad.
                </p>

                {/* Category Pill Selectors */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        activeCategory === cat
                          ? 'bg-[#00E59B] text-[#060909] font-bold shadow-[0_0_15px_rgba(0,229,155,0.3)]'
                          : 'bg-[#0B1111] text-[#94A3B8] hover:text-white border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer space-y-6"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[#5E736D]">
                        <span className="px-2.5 py-1 rounded bg-[#0B1111] text-[#00E59B] border border-emerald-500/20">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#00E59B] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-[#5E736D] font-mono">{post.publishedDate}</span>
                      <span className="text-[#00E59B] group-hover:underline flex items-center space-x-1 font-semibold">
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
};

export const ContactPage: React.FC<{ onRouteChange: (route: PageRoute) => void; onRequestReview: () => void }> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    businessType: 'E-Commerce Store',
    targetMarket: 'Karachi & Pakistan',
    challenge: '',
    targetKeywords: '',
    budget: 'Standard ($250 - $600)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitPortfolioForm('New SEO Project Inquiry', {
        form_name: 'SEO Project Inquiry',
        name: formData.name,
        email: formData.email,
        website: formData.website,
        business_type: formData.businessType,
        target_market: formData.targetMarket,
        target_keywords: formData.targetKeywords || 'Not provided',
        budget: formData.budget,
        primary_challenge: formData.challenge || 'Not provided',
        message: formData.message
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Message send nahi hua. Dobara try karein ya direct email use karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Hero */}
      <section className="py-14 sm:py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
              </span>
              <span className="text-xs font-medium text-[#F4FAF7]">
                INITIATE DIRECT PROJECT CONSULTATION
              </span>
            </div>

            <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-[800] tracking-[-0.035em] text-[#F4FAF7] leading-[1.0] antialiased">
              Let&apos;s talk about your{' '}
              <span className="text-gradient-emerald">search architecture.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Share your current search bottlenecks, indexation obstacles, or local ranking goals. Daniyal Asad will personally inspect your domain and identify what needs attention first.
            </p>

            <div className="pt-1 text-xs font-mono text-[#5E736D]">
              NO RANKING GIMMICKS • NO BLIND PACKAGES • DATA-DRIVEN DIAGNOSIS FIRST
            </div>
          </div>
        </div>
      </section>

      {/* Form & Contact Bento Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Form Bento Card */}
            <div className="lg:col-span-8 bg-[#080D0D] p-7 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-[#00E59B] text-[#00E59B] flex items-center justify-center mx-auto text-2xl font-bold shadow-[0_0_25px_rgba(0,229,155,0.3)]">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                    Thank you for reaching out. Daniyal will personally inspect your domain in Screaming Frog and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0B1111] border border-white/10 text-white text-xs font-mono mt-4 hover:border-emerald-500/30"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Website Audit &amp; Project Inquiry</h3>
                    <p className="text-xs text-[#94A3B8]">Provide domain details for an initial crawl assessment.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Daniyal Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@mybusiness.pk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">Website URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://mybrand.pk"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                      >
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="Local Service / Clinic">Local Service / Clinic</option>
                        <option value="B2B / Logistics">B2B / Logistics</option>
                        <option value="SaaS / Software">SaaS / Software</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">Target Market</label>
                      <input
                        type="text"
                        placeholder="Karachi (DHA/Clifton) or Pakistan-wide"
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">Target Keywords (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. SEO services in Karachi"
                        value={formData.targetKeywords}
                        onChange={(e) => setFormData({ ...formData, targetKeywords: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">What is your primary search challenge?</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share details regarding your current traffic, indexation issues, or ranking drop..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#00E59B] text-[#060909] font-bold text-sm hover:bg-[#37F3B0] transition-all shadow-[0_0_30px_rgba(0,229,155,0.35)] disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending SEO Inquiry...' : 'Submit Inquiry to Daniyal'}</span>
                  </button>

                  {submitError && (
                    <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-center text-xs text-red-200">
                      {submitError}{' '}
                      <a href="mailto:daniyalseoinfo@gmail.com" className="font-bold underline underline-offset-2">
                        Email Daniyal
                      </a>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Right Column: Direct Signals Bento Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.08] space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00E59B] font-semibold">
                  DIRECT CONTACT CHANNELS
                </span>
                
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#5E736D] block font-mono text-[11px]">Primary Email:</span>
                    <a href="mailto:daniyalseoinfo@gmail.com" className="text-white font-medium hover:text-[#00E59B] transition-colors">
                      daniyalseoinfo@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-[#5E736D] block font-mono text-[11px]">Geographic Location:</span>
                    <span className="text-white">Karachi, Sindh, Pakistan</span>
                  </div>

                  <div>
                    <span className="text-[#5E736D] block font-mono text-[11px]">Project Status:</span>
                    <span className="text-[#00E59B] font-semibold">Accepting Select Audits</span>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-[#080D0D] border border-white/[0.08] space-y-3 text-xs text-[#94A3B8]">
                <h4 className="font-bold text-white font-mono uppercase text-[11px]">What happens next?</h4>
                <div className="space-y-2 pt-1">
                  <div className="flex items-start space-x-2">
                    <span className="text-[#00E59B] font-mono">1.</span>
                    <span>Direct crawl inspection in Screaming Frog and Search Console index coverage checks.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#00E59B] font-mono">2.</span>
                    <span>Competitor SERP keyword gap analysis against primary Karachi competitors.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#00E59B] font-mono">3.</span>
                    <span>A clear, actionable diagnostic memo identifying the highest priority technical fixes.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
