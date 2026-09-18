import React, { useState } from 'react';
import { PageRoute, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/seoData';
import { ArrowLeft, Clock, Calendar, Tag, User, ArrowRight, BookOpen, Share2 } from 'lucide-react';

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
    <div className="pt-28 pb-20">
      
      {/* Blog Article Reader View */}
      {selectedPost ? (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#2DD4BF] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </button>

          <div className="space-y-4 pb-8 border-b border-white/10">
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#11151E] text-[#2DD4BF] border border-[#2DD4BF]/30">
              {selectedPost.category}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7D8595]">
              <span className="flex items-center space-x-1">
                <User className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span className="text-white">By Daniyal (Junior SEO Executive)</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedPost.publishedDate}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedPost.readTime}</span>
              </span>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="my-8 p-6 rounded-2xl bg-[#11151E] border border-white/8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] font-bold mb-3">
              Table of Contents
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B5BBC7]">
              {selectedPost.tableOfContents.map((toc, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-[#7D8595] font-mono">0{i + 1}.</span>
                  <span>{toc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="max-w-[740px] space-y-6 text-[#B5BBC7] text-base leading-relaxed">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#7D8595]" />
            {selectedPost.tags.map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-[#161C28] text-white border border-white/5">
                #{t}
              </span>
            ))}
          </div>

          {/* Contextual Author Card & CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-[#11151E] border border-white/12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">Have a question about this technical topic?</h4>
              <p className="text-xs text-[#7D8595]">Daniyal provides direct technical audits and on-page optimization for websites in Karachi & globally.</p>
            </div>
            <button
              onClick={onRequestReview}
              className="px-6 py-3 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-xs sm:text-sm hover:bg-[#14B8A6] flex-shrink-0"
            >
              Request Free Audit
            </button>
          </div>
        </article>
      ) : (
        /* Blog Archive Listing */
        <div>
          <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#2DD4BF]">
                  <span>TECHNICAL GUIDES & RESEARCH</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
                  SEO Insights & Case Notes
                </h1>

                <p className="text-lg sm:text-xl text-[#B5BBC7] leading-relaxed">
                  Practical guides on Core Web Vitals, local Karachi Google Maps optimization, and Search Console keyword diagnostics written by Daniyal.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                        activeCategory === cat
                          ? 'bg-[#2DD4BF] text-[#080A0F] font-bold shadow-md'
                          : 'bg-[#11151E] text-[#B5BBC7] hover:text-white border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#0D1017]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-8 rounded-3xl bg-[#11151E] border border-white/8 hover:border-[#2DD4BF]/40 transition-all flex flex-col justify-between group cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[#7D8595]">
                        <span className="px-2 py-0.5 rounded bg-[#161C28] text-[#2DD4BF]">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#B5BBC7] leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#7D8595]">{post.publishedDate}</span>
                      <span className="text-[#2DD4BF] group-hover:underline flex items-center space-x-1 font-bold">
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#080A0F] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11151E] border border-white/10 text-xs font-mono text-[#2DD4BF]">
              <span>GET IN TOUCH WITH DANIYAL</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F7F8FA] tracking-tight font-display leading-[1.1]">
              Let&apos;s talk about your website.
            </h1>

            <p className="text-lg text-[#B5BBC7] leading-relaxed">
              Share your current search bottlenecks and business goals. I will help diagnose what needs attention first.
            </p>

            <div className="pt-2 text-xs font-mono text-[#7D8595]">
              No ranking guarantees. No generic SEO package. Start with the actual problem.
            </div>
          </div>
        </div>
      </section>

      {/* Form & Contact Info */}
      <section className="py-20 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-8 bg-[#11151E] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/20 border border-[#2DD4BF] text-[#2DD4BF] flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#B5BBC7] max-w-md mx-auto">
                    Thank you for reaching out. Daniyal will personally review your inquiry and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#161C28] text-white text-xs font-mono mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white font-display">Website Audit & Project Inquiry</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#B5BBC7] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Daniyal Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:border-[#2DD4BF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#B5BBC7] mb-1">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@mybusiness.pk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:border-[#2DD4BF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#B5BBC7] mb-1">Website URL *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. https://mybrand.pk"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:border-[#2DD4BF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#B5BBC7] mb-1">Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white text-sm focus:border-[#2DD4BF]"
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
                      <label className="block text-xs font-mono text-[#B5BBC7] mb-1">Target Market</label>
                      <input
                        type="text"
                        placeholder="e.g. Karachi (DHA/Clifton) or Pakistan-wide"
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:border-[#2DD4BF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#B5BBC7] mb-1">Target Keywords (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. SEO services in Karachi"
                        value={formData.targetKeywords}
                        onChange={(e) => setFormData({ ...formData, targetKeywords: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:border-[#2DD4BF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#B5BBC7] mb-1">What is your biggest search challenge right now?</label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding your current traffic, indexation issues, or ranking drop..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:border-[#2DD4BF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-sm sm:text-base hover:bg-[#14B8A6] transition-all shadow-[0_0_25px_-5px_rgba(45,212,191,0.4)]"
                  >
                    Send SEO Inquiry to Daniyal
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Signals */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-[#11151E] border border-white/8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">DIRECT CONTACT</span>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#7D8595] block font-mono">Email Address:</span>
                    <a href="mailto:daniyalseoinfo@gmail.com" className="text-white font-medium hover:text-[#2DD4BF]">
                      daniyalseoinfo@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-[#7D8595] block font-mono">Location:</span>
                    <span className="text-white">Karachi, Sindh, Pakistan</span>
                  </div>

                  <div>
                    <span className="text-[#7D8595] block font-mono">Availability:</span>
                    <span className="text-[#2DD4BF] font-semibold">Accepting Select SEO Projects</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#11151E] border border-white/8 space-y-3 text-xs text-[#B5BBC7]">
                <h4 className="font-bold text-white font-mono uppercase">What happens next?</h4>
                <p>1. I inspect your site in Screaming Frog and check index coverage.</p>
                <p>2. I review keyword opportunities vs your top competitors in Karachi.</p>
                <p>3. I send a concise, honest roadmap outlining the highest priority fixes.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
