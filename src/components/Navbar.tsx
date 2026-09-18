import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { ChevronDown, Menu, X, ArrowUpRight, Search, Activity, Cpu, MapPin, Sparkles } from 'lucide-react';

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
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', route: 'home' as PageRoute, num: '01' },
    { label: 'SEO Karachi', route: 'seo-services-in-karachi' as PageRoute, num: '02' },
    { label: 'Portfolio', route: 'portfolio' as PageRoute, num: '03' },
    { label: 'About', route: 'about' as PageRoute, num: '04' },
    { label: 'Blog', route: 'blog' as PageRoute, num: '05' },
    { label: 'Contact', route: 'contact' as PageRoute, num: '06' },
  ];

  const serviceSubItems = [
    {
      title: 'Technical SEO',
      desc: 'Crawlability, Core Web Vitals, Schema & Indexation',
      route: 'technical-seo-services-karachi' as PageRoute,
      icon: Cpu,
      tag: '01'
    },
    {
      title: 'On-Page SEO',
      desc: 'Content hierarchy, Search Intent & Metadata',
      route: 'on-page-seo-services-karachi' as PageRoute,
      icon: Activity,
      tag: '02'
    },
    {
      title: 'Keyword Research',
      desc: 'Topic clustering, Search intent & Competitor SERPs',
      route: 'keyword-research-services-karachi' as PageRoute,
      icon: Search,
      tag: '03'
    },
    {
      title: 'Local SEO Karachi',
      desc: 'Google Maps, GBP, Citations & Geo-Relevance',
      route: 'local-seo-services-karachi' as PageRoute,
      icon: MapPin,
      tag: '04'
    }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A0F]/85 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Entity Status */}
          <div className="flex items-center space-x-3">
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex items-center space-x-2 text-left"
              data-cursor="HOME"
            >
              <div className="w-8 h-8 rounded-lg bg-[#121722] border border-white/10 flex items-center justify-center group-hover:border-[#B7FF3C] transition-colors">
                <span className="font-mono text-sm font-bold text-[#B7FF3C]">D</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#B7FF3C] transition-colors">
                  DANIYAL<span className="text-[#B7FF3C]">.</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-widest text-[#7D8595] px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                  SEO / Karachi
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                currentRoute === 'home'
                  ? 'text-[#B7FF3C] bg-[#B7FF3C]/10'
                  : 'text-[#B5BBC7] hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            <button
              id="nav-link-seo-karachi"
              onClick={() => handleNavClick('seo-services-in-karachi')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                currentRoute === 'seo-services-in-karachi'
                  ? 'text-[#B7FF3C] bg-[#B7FF3C]/10'
                  : 'text-[#B5BBC7] hover:text-white hover:bg-white/5'
              }`}
            >
              SEO Services
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                id="nav-dropdown-services"
                className="flex items-center space-x-1 px-3.5 py-2 text-sm font-medium text-[#B5BBC7] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                <span>Specializations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#B7FF3C]' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="p-2 rounded-2xl bg-[#11151E] border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                    <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#7D8595] border-b border-white/5 mb-1">
                      Core Disciplines
                    </div>
                    {serviceSubItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentRoute === item.route;
                      return (
                        <button
                          key={item.route}
                          id={`dropdown-item-${item.route}`}
                          onClick={() => handleNavClick(item.route)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-3 group ${
                            isActive ? 'bg-[#B7FF3C]/10 border border-[#B7FF3C]/30' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-[#161C28] border border-white/8 text-[#B7FF3C] group-hover:bg-[#B7FF3C] group-hover:text-[#080A0F] transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-1.5">
                              <span className="text-xs font-mono text-[#7D8595]">{item.tag}</span>
                              <span className="text-sm font-semibold text-white group-hover:text-[#B7FF3C] transition-colors">
                                {item.title}
                              </span>
                            </div>
                            <p className="text-xs text-[#7D8595] line-clamp-1 mt-0.5">
                              {item.desc}
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
              id="nav-link-portfolio"
              onClick={() => handleNavClick('portfolio')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                currentRoute === 'portfolio'
                  ? 'text-[#B7FF3C] bg-[#B7FF3C]/10'
                  : 'text-[#B5BBC7] hover:text-white hover:bg-white/5'
              }`}
            >
              Portfolio
            </button>

            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                currentRoute === 'about'
                  ? 'text-[#B7FF3C] bg-[#B7FF3C]/10'
                  : 'text-[#B5BBC7] hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </button>

            <button
              id="nav-link-blog"
              onClick={() => handleNavClick('blog')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                currentRoute === 'blog'
                  ? 'text-[#B7FF3C] bg-[#B7FF3C]/10'
                  : 'text-[#B5BBC7] hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </button>

            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                currentRoute === 'contact'
                  ? 'text-[#B7FF3C] bg-[#B7FF3C]/10'
                  : 'text-[#B5BBC7] hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="header-cta-btn"
              onClick={onRequestReview}
              className="relative group px-4 py-2.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] text-xs sm:text-sm font-bold flex items-center space-x-1.5 hover:bg-[#A8F536] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_-3px_rgba(183,255,60,0.35)] active:translate-y-0"
              data-cursor="AUDIT"
            >
              <span>Request SEO Review</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              id="mobile-review-btn"
              onClick={onRequestReview}
              className="px-3 py-1.5 rounded-lg bg-[#B7FF3C] text-[#080A0F] text-xs font-bold"
            >
              Review
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-[#121722] border border-white/10 text-white hover:text-[#B7FF3C]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#080A0F]/95 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#B7FF3C] uppercase tracking-widest">Navigation</span>
            </div>
            
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl transition-all ${
                    currentRoute === item.route
                      ? 'bg-[#B7FF3C]/10 text-[#B7FF3C] font-bold'
                      : 'text-[#F7F8FA] hover:text-[#B7FF3C] hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl font-display font-semibold">{item.label}</span>
                  <span className="font-mono text-xs text-[#7D8595]">{item.num}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-[#7D8595] uppercase tracking-wider block mb-3">
                SEO Disciplines
              </span>
              <div className="grid grid-cols-2 gap-2">
                {serviceSubItems.map((sub) => (
                  <button
                    key={sub.route}
                    onClick={() => handleNavClick(sub.route)}
                    className="p-3 text-left rounded-xl bg-[#11151E] border border-white/8 hover:border-[#B7FF3C]/50 transition-colors"
                  >
                    <span className="text-xs font-bold text-white block">{sub.title}</span>
                    <span className="text-[10px] text-[#7D8595] font-mono">Explore →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestReview();
              }}
              className="w-full py-3.5 rounded-xl bg-[#B7FF3C] text-[#080A0F] font-bold text-center flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Free SEO Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#7D8595] font-mono">
              Daniyal • Junior SEO Executive • Karachi, PK
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
