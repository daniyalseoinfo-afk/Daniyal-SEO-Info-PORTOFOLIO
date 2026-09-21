import React, { useState, useMemo } from 'react';
import { PageRoute } from '../types';
import { 
  Monitor, 
  Smartphone, 
  Copy, 
  Check, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  HelpCircle,
  Code2,
  Share2,
  Search
} from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface SerpToolProps {
  onRouteChange: (route: PageRoute) => void;
  onRequestReview: (url?: string) => void;
}

/**
 * Calculates estimated pixel width of a string in Arial 20px (Google Desktop title font)
 */
function estimateTitlePixelWidth(text: string): number {
  if (!text) return 0;
  // Character width weighting approximation for Arial 20px
  let width = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[ijlI1\.,;:\!\' ]/.test(char)) width += 5.5;
    else if (/[fkttr\-]/.test(char)) width += 7.5;
    else if (/[abcdeghnopquvxyzs]/.test(char)) width += 11;
    else if (/[wmWMQ#%&]/.test(char)) width += 16;
    else if (/[A-Z0-9]/.test(char)) width += 13;
    else width += 10;
  }
  return Math.round(width);
}

export const SerpPreviewToolPage: React.FC<SerpToolProps> = ({
  onRouteChange,
  onRequestReview
}) => {
  const [title, setTitle] = useState('SEO Services in Karachi | Technical & Local Search by Daniyal Asad');
  const [description, setDescription] = useState('Data-driven SEO services for businesses in Karachi. Technical audits, search intent mapping, Core Web Vitals optimization, and Google Maps local visibility.');
  const [url, setUrl] = useState('https://daniyalseoinfo-afk.github.io/Daniyal-SEO-Info-PORTOFOLIO/seo-services-in-karachi');
  const [canonical, setCanonical] = useState('https://daniyalseoinfo-afk.github.io/Daniyal-SEO-Info-PORTOFOLIO/seo-services-in-karachi');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copiedCode, setCopiedCode] = useState(false);

  // Metrics
  const titlePixelWidth = useMemo(() => estimateTitlePixelWidth(title), [title]);
  const titleLimit = device === 'desktop' ? 580 : 600;
  const isTitleTruncated = titlePixelWidth > titleLimit;
  const titleChars = title.length;

  const descChars = description.length;
  const isDescOptimal = descChars >= 120 && descChars <= 160;
  const isDescTooLong = descChars > 160;
  const isDescTooShort = descChars < 100 && descChars > 0;

  // Breadcrumb parse
  const parsedBreadcrumb = useMemo(() => {
    try {
      const u = new URL(url.startsWith('http') ? url : `https://${url}`);
      const pathParts = u.pathname.split('/').filter(Boolean);
      return {
        domain: u.hostname.replace('www.', ''),
        pathString: pathParts.length > 0 ? pathParts.join(' › ') : ''
      };
    } catch {
      return { domain: 'yourdomain.com', pathString: 'service › page' };
    }
  }, [url]);

  // Canonical parity
  const isCanonicalMatching = useMemo(() => {
    if (!url || !canonical) return true;
    return url.trim().replace(/\/$/, '') === canonical.trim().replace(/\/$/, '');
  }, [url, canonical]);

  // Copy code helper
  const handleCopyCode = () => {
    const code = `<title>${title}</title>\n<meta name="description" content="${description}" />\n<link rel="canonical" href="${canonical || url}" />`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    trackEvent('serp_tool_used', { action: 'copy_html_code' });
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 bg-[#060909] text-[#F4FAF7]">
      {/* Background Grid & Lighting */}
      <div className="fixed inset-0 pointer-events-none bg-tech-grid opacity-20 -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1111] border border-emerald-500/20">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E59B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E59B]"></span>
            </span>
            <span className="text-xs font-mono font-medium text-[#00E59B] uppercase tracking-wider">
              FREE TECHNICAL SEO LINKABLE ASSET
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-[800] tracking-[-0.035em] text-white leading-[1.05]">
            Google SERP Snippet &amp;{' '}
            <span className="text-gradient-emerald">Pixel Width Previewer</span>
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Google measures search snippet titles in <strong>pixels (~580px - 600px)</strong>, not character counts. Test your title tags, meta descriptions, and canonical parity in real-time before deploying to production.
          </p>
        </div>
      </header>

      {/* Main Interactive Tool Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Editor Controls */}
          <div className="lg:col-span-6 bg-[#080D0D] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-[#00E59B]" />
                <span>Snippet Configuration</span>
              </h2>
              <span className="text-xs font-mono text-[#5E736D]">CLIENT-SIDE REAL-TIME</span>
            </div>

            {/* Title Tag Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <label htmlFor="tool-title" className="text-white font-semibold">Title Tag (&lt;title&gt;)</label>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    isTitleTruncated ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-[#00E59B] border border-emerald-500/30'
                  }`}>
                    {titlePixelWidth}px / {titleLimit}px
                  </span>
                  <span className="text-[#94A3B8]">{titleChars} chars</span>
                </div>
              </div>
              <input
                id="tool-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter page SEO title..."
                className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
              />
              <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                <span>Desktop cutoff: ~580px</span>
                {isTitleTruncated && (
                  <span className="text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Risk of Google truncation (...)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Meta Description Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <label htmlFor="tool-desc" className="text-white font-semibold">Meta Description (&lt;meta name=&quot;description&quot;&gt;)</label>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    isDescTooLong ? 'bg-red-500/20 text-red-400' :
                    isDescOptimal ? 'bg-emerald-500/20 text-[#00E59B]' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {descChars} chars
                  </span>
                </div>
              </div>
              <textarea
                id="tool-desc"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter compelling meta description summarizing page intent..."
                className="w-full px-4 py-3 rounded-xl bg-[#0B1111] border border-white/10 text-white placeholder-[#5E736D] text-xs font-mono focus:outline-none focus:border-emerald-500/50"
              />
              <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                <span>Recommended: 120 – 160 characters</span>
                {isDescTooLong && <span className="text-red-400">May be cut off on search results</span>}
                {isDescOptimal && <span className="text-[#00E59B] flex items-center space-x-1"><CheckCircle2 className="w-3 h-3" /><span>Optimal length</span></span>}
              </div>
            </div>

            {/* URL & Canonical */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="tool-url" className="block text-xs font-mono text-white font-semibold">Page URL</label>
                <input
                  id="tool-url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1111] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="tool-canonical" className="block text-xs font-mono text-white font-semibold">Canonical Tag URL</label>
                <input
                  id="tool-canonical"
                  type="text"
                  value={canonical}
                  onChange={(e) => setCanonical(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1111] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500/50"
                />
              </div>
            </div>

            {/* Parity Status Alert */}
            {!isCanonicalMatching && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Canonical Mismatch:</strong> Canonical URL differs from Page URL. Ensure this cross-page canonicalization is intentional to prevent duplicate indexing issues.
                </div>
              </div>
            )}

            {/* Copy Snippet Code Action */}
            <button
              onClick={handleCopyCode}
              className="w-full py-3 rounded-xl bg-[#0B1111] border border-white/10 hover:border-emerald-500/30 text-white text-xs font-mono flex items-center justify-center space-x-2 transition-colors group"
            >
              {copiedCode ? (
                <>
                  <Check className="w-4 h-4 text-[#00E59B]" />
                  <span className="text-[#00E59B]">Copied HTML Meta Tags to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#94A3B8] group-hover:text-white" />
                  <span>Copy Ready-to-Use &lt;head&gt; HTML Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Google SERP Preview Simulation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#080D0D] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Search className="w-5 h-5 text-[#00E59B]" />
                  <span>Live Google SERP Simulator</span>
                </h2>

                {/* Desktop / Mobile Toggle */}
                <div className="flex items-center p-1 bg-[#0B1111] border border-white/10 rounded-xl">
                  <button
                    onClick={() => { setDevice('desktop'); trackEvent('serp_tool_used', { device: 'desktop' }); }}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      device === 'desktop' ? 'bg-[#00E59B] text-[#060909] font-bold' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => { setDevice('mobile'); trackEvent('serp_tool_used', { device: 'mobile' }); }}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      device === 'mobile' ? 'bg-[#00E59B] text-[#060909] font-bold' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* SERP Simulation Card (Authentic Google Search Card Styling) */}
              <div className={`p-5 sm:p-6 rounded-2xl bg-white text-[#202124] font-sans transition-all ${
                device === 'mobile' ? 'max-w-[390px] mx-auto border-2 border-slate-300 shadow-2xl' : 'w-full shadow-lg'
              }`}>
                {/* Google Search Result Header */}
                <div className="flex items-center space-x-3 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#00E59B]/20 border border-[#00E59B] flex items-center justify-center text-[11px] font-bold text-[#060909] shrink-0">
                    D
                  </div>
                  <div className="leading-tight overflow-hidden">
                    <div className="text-[14px] font-medium text-[#202124] truncate">
                      {parsedBreadcrumb.domain}
                    </div>
                    <div className="text-[12px] text-[#4d5156] truncate flex items-center space-x-1">
                      <span>https://{parsedBreadcrumb.domain}</span>
                      {parsedBreadcrumb.pathString && (
                        <span>› {parsedBreadcrumb.pathString}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Google Search Result Blue Title Link */}
                <h3 className="text-[20px] leading-[1.3] text-[#1a0dab] hover:underline cursor-pointer font-normal mb-1">
                  {isTitleTruncated ? `${title.slice(0, 60)}...` : (title || 'Example Title Tag')}
                </h3>

                {/* Google Search Result Description Snippet */}
                <p className="text-[14px] leading-[1.58] text-[#4d5156] break-words">
                  {isDescTooLong ? `${description.slice(0, 160)}...` : (description || 'Example meta description snippet will appear here.')}
                </p>
              </div>

              {/* Quality Checklist */}
              <div className="p-4 rounded-2xl bg-[#0B1111] border border-white/[0.06] space-y-2.5 text-xs font-mono">
                <span className="text-[#5E736D] uppercase text-[10px] tracking-wider block font-bold">
                  DIAGNOSTIC CRITERIA CHECKLIST
                </span>
                
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Title Width within Google Limits (&lt;{titleLimit}px):</span>
                  {isTitleTruncated ? (
                    <span className="text-red-400 font-bold flex items-center space-x-1">
                      <span>Too Wide ({titlePixelWidth}px)</span>
                    </span>
                  ) : (
                    <span className="text-[#00E59B] font-bold flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Pass ({titlePixelWidth}px)</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Meta Description Length (120-160):</span>
                  <span className={isDescOptimal ? 'text-[#00E59B] font-bold' : 'text-amber-400'}>
                    {descChars} characters
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Self-Referencing Canonical Parity:</span>
                  {isCanonicalMatching ? (
                    <span className="text-[#00E59B] font-bold flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Matching</span>
                    </span>
                  ) : (
                    <span className="text-amber-400 font-bold">Cross-Domain / Non-matching</span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 rounded-2xl bg-[#0B1111] border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white">Need a complete technical audit?</h4>
                  <p className="text-xs text-[#94A3B8]">Daniyal personally inspects crawl traps, sitemaps, and indexing health.</p>
                </div>
                <button
                  onClick={() => onRequestReview(url)}
                  className="px-5 py-2.5 rounded-full bg-[#00E59B] text-[#060909] font-bold text-xs hover:bg-[#37F3B0] transition-all shrink-0"
                >
                  Request Technical Audit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Educational Content & FAQ: Linkable Asset Value */}
        <div className="mt-16 bg-[#080D0D] border border-white/[0.08] rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-[800] text-white">
              How Google Really Handles Title Tags &amp; Snippets
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Understanding why traditional character limits are flawed and how modern search engines evaluate title relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[#0B1111] border border-white/5 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span className="text-[#00E59B] font-mono">01.</span>
                <span>Pixels vs Character Count</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Google&apos;s desktop SERP container is fixed at approximately 600 pixels. A title with wide characters like &quot;W&quot; and &quot;M&quot; truncates earlier than one with narrow letters like &quot;i&quot; and &quot;l&quot;. Measuring in pixels prevents awkward mid-sentence cutoffs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1111] border border-white/5 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span className="text-[#00E59B] font-mono">02.</span>
                <span>Why Google Rewrites Titles</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Google frequently replaces HTML &lt;title&gt; tags with the page&apos;s H1 heading, anchor text, or brand name if it determines the title is stuffed with keywords, overly boilerplate, or fails to represent the query intent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1111] border border-white/5 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span className="text-[#00E59B] font-mono">03.</span>
                <span>Meta Description Best Practice</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                While meta descriptions are not a direct Google ranking factor, they directly determine Click-Through Rate (CTR). Include the target search phrase naturally and present a clear value proposition to earn the organic click.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
