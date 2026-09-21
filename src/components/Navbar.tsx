import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { ChevronDown, Menu, X, ArrowUpRight, Cpu, Layers, Network, Search, MapPin, FileCode, Wrench } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onRequestReview
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecializationOpen, setIsSpecializationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute, hashSection?: string) => {
    onRouteChange(route);
    setIsMobileMenuOpen(false);
    setIsSpecializationOpen(false);
    if (hashSection) {
      setTimeout(() => {
        const el = document.getElementById(hashSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const specializations = [
    {
      title: 'Technical SEO',
      desc: 'Crawl budgets, rendering & indexation pipeline',
      route: 'technical-seo-services-karachi' as PageRoute,
      icon: Cpu,
      tag: 'CRAWL'
    },
    {
      title: 'On-Page SEO',
      desc: 'Semantic entity hierarchy & metadata intent',
      route: 'on-page-seo-services-karachi' as PageRoute,
      icon: Layers,
      tag: 'CONTENT'
    },
    {
      title: 'Keyword Research',
      desc: 'Intent clustering & search demand mapping',
      route: 'keyword-research-services-karachi' as PageRoute,
      icon: Search,
      tag: 'INTENT'
    },
    {
      title: 'Local SEO Karachi',
      desc: 'Google Business Profile & Map Pack relevance',
      route: 'local-seo-services-karachi' as PageRoute,
      icon: MapPin,
      tag: 'LOCAL'
    },
    {
      title: 'All SEO Services',
      desc: 'Comprehensive search optimization architecture',
      route: 'seo-services-in-karachi' as PageRoute,
      icon: Network,
      tag: 'SERVICES'
    }
  ];

  return (
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <header
        id="main-header"
        className={`max-w-6xl mx-auto rounded-full pointer-events-auto transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#080D0D]/95 backdrop-blur-2xl border-emerald-500/20 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8),0_0_25px_-8px_rgba(0,229,155,0.15)] py-2 sm:py-2.5 px-3 sm:px-5'
            : 'bg-[#0B1111]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] py-2.5 sm:py-3 px-3 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Brand Monogram */}
          <button
            id="brand-monogram"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00E59B] rounded-full p-0.5"
            aria-label="Daniyal Asad SEO Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 transition-all duration-300 shadow-[0_0_12px_rgba(0,229,155,0.2)]">
              <span className="text-xs font-bold text-[#00E59B]">DA</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-[#00E59B] transition-colors">
                Daniyal Asad
              </span>
              <span className="text-[9px] font-mono text-[#5E736D] uppercase -mt-0.5 hidden sm:inline-block">
                SEO Specialist
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-xs text-[#94A3B8]" aria-label="Primary Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                currentRoute === 'home' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSpecializationOpen(true)}
              onMouseLeave={() => setIsSpecializationOpen(false)}
            >
              <button
                onClick={() => setIsSpecializationOpen(!isSpecializationOpen)}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 flex items-center space-x-1 transition-colors"
                aria-expanded={isSpecializationOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSpecializationOpen ? 'rotate-180 text-[#00E59B]' : ''}`} />
              </button>

              {isSpecializationOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-[#0B1111]/98 backdrop-blur-2xl border border-emerald-500/20 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-mono text-[#5E736D] uppercase px-3 py-1.5 border-b border-white/5 flex items-center justify-between">
                    <span>Core SEO Disciplines</span>
                    <span className="text-[#00E59B]">Verified Scope</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 pt-1.5">
                    {specializations.map((spec) => {
                      const Icon = spec.icon;
                      return (
                        <button
                          key={spec.title}
                          onClick={() => handleNavClick(spec.route)}
                          className="flex items-start space-x-2.5 p-2 rounded-xl hover:bg-white/5 text-left transition-colors group"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-emerald-400/40">
                            <Icon className="w-3.5 h-3.5 text-[#00E59B]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white group-hover:text-[#00E59B] transition-colors">
                                {spec.title}
                              </span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-[#5E736D] border border-white/5">
                                {spec.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#94A3B8] truncate mt-0.5">
                              {spec.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                currentRoute === 'portfolio' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                currentRoute === 'about' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                currentRoute === 'blog' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Knowledge Base
            </button>

            {/* Free SEO Tool Link */}
            <button
              onClick={() => handleNavClick('free-seo-tools')}
              className={`px-3 py-1.5 rounded-full flex items-center space-x-1.5 transition-colors ${
                currentRoute === 'free-seo-tools' ? 'text-[#00E59B] bg-emerald-500/10 font-semibold' : 'text-[#00E59B]/90 hover:text-[#00E59B] hover:bg-emerald-500/10'
              }`}
            >
              <Wrench className="w-3 h-3" />
              <span>Free SERP Tool</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                currentRoute === 'contact' ? 'text-white bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right: Availability Status & Audit CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-[#00E59B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
              </span>
              <span className="font-mono text-[10px] font-bold">AVAILABLE FOR AUDITS</span>
            </div>

            <button
              id="header-audit-btn"
              onClick={() => {
                trackEvent('primary_cta_click', { cta_name: 'header_request_audit' });
                onRequestReview();
              }}
              className="relative group px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-[#060909] bg-[#00E59B] hover:bg-[#37F3B0] transition-all duration-200 shadow-[0_0_15px_rgba(0,229,155,0.3)] hover:shadow-[0_0_22px_rgba(0,229,155,0.5)] active:scale-95 flex items-center space-x-1.5"
            >
              <span>Request SEO Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#94A3B8]">
              <button
                onClick={() => handleNavClick('home')}
                className="p-2 rounded-xl bg-white/5 text-left text-white font-semibold flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-[9px] font-mono text-[#00E59B]">01</span>
              </button>
              <button
                onClick={() => handleNavClick('portfolio')}
                className="p-2 rounded-xl bg-white/5 text-left hover:text-white flex items-center justify-between"
              >
                <span>Case Studies</span>
                <span className="text-[9px] font-mono text-[#5E736D]">02</span>
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="p-2 rounded-xl bg-white/5 text-left hover:text-white flex items-center justify-between"
              >
                <span>About</span>
                <span className="text-[9px] font-mono text-[#5E736D]">03</span>
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className="p-2 rounded-xl bg-white/5 text-left hover:text-white flex items-center justify-between"
              >
                <span>Knowledge Base</span>
                <span className="text-[9px] font-mono text-[#5E736D]">04</span>
              </button>
              <button
                onClick={() => handleNavClick('free-seo-tools')}
                className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left text-[#00E59B] font-bold flex items-center justify-between col-span-2"
              >
                <span>Free SERP Snippet &amp; Pixel Tool</span>
                <span className="text-[9px] font-mono text-[#00E59B]">FREE TOOL</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="p-2 rounded-xl bg-white/5 text-left hover:text-white flex items-center justify-between col-span-2"
              >
                <span>Contact Daniyal</span>
                <span className="text-[9px] font-mono text-[#5E736D]">DIRECT</span>
              </button>
            </div>

            <div className="pt-2 border-t border-white/5">
              <span className="text-[10px] font-mono text-[#5E736D] uppercase block mb-1.5">
                Core SEO Services
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {specializations.map((spec) => (
                  <button
                    key={spec.title}
                    onClick={() => handleNavClick(spec.route)}
                    className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-left text-white hover:border-emerald-500/30 truncate"
                  >
                    <span className="block font-semibold text-[11px] truncate">{spec.title}</span>
                    <span className="text-[9px] text-[#5E736D] block font-mono">{spec.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#00E59B]">
                <span className="h-2 w-2 rounded-full bg-[#00E59B] animate-pulse"></span>
                <span>Karachi &amp; Remote</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestReview();
                }}
                className="px-3 py-1.5 rounded-full bg-[#00E59B] text-[#060909] text-xs font-bold"
              >
                Request Audit
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
