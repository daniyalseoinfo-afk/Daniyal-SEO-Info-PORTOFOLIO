import React, { useState, useEffect } from 'react';
import { Search, Terminal, CheckCircle2, AlertTriangle, ArrowUpRight, Cpu, Sparkles, ShieldCheck, RefreshCw } from 'lucide-react';

interface LiveSeoInspectorToolProps {
  onRequestReview: (initialUrl?: string) => void;
}

export const LiveSeoInspectorTool: React.FC<LiveSeoInspectorToolProps> = ({ onRequestReview }) => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepIndex, setScanStepIndex] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  const demoDomains = [
    'example-ecommerce.com',
    'karachibusiness.pk',
    'b2b-saas-platform.com'
  ];

  const auditSequence = [
    'Connecting to target host via HTTPS...',
    'Fetching HTML document payload & response headers...',
    'Evaluating HTTP 200 response & server latency...',
    'Inspecting viewport configuration & mobile signals...',
    'Auditing robots.txt directives & disallow paths...',
    'Validating rel="canonical" tag consistency...',
    'Parsing JSON-LD schema & structured entity graph...',
    'Verifying H1-H3 document semantic hierarchy...',
    'Calculating technical indexability score...',
    'Audit complete.'
  ];

  const handleRunAudit = (targetUrl?: string) => {
    const auditUrl = targetUrl || url;
    if (!auditUrl) return;
    if (targetUrl) setUrl(targetUrl);

    setIsScanning(true);
    setHasCompleted(false);
    setScanStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < auditSequence.length) {
        setScanStepIndex(step);
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setHasCompleted(true);
      }
    }, 280);
  };

  const getCleanDomain = () => {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'yourwebsite.com';
  };

  return (
    <div id="seo-inspector" className="rounded-3xl bg-[#080D0D]/95 border border-emerald-500/20 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_25px_rgba(0,229,155,0.08)] relative overflow-hidden my-6">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/8">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-[#00E59B] uppercase mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>LIVE SEO INSPECTOR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Inspect Your Website Like Google Does.
          </h3>
          <p className="text-sm text-[#94A3B8] mt-1 max-w-2xl">
            Run a simulated first-pass technical inspection and identify potential search visibility, crawlability, and indexation issues in seconds.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#0D1414] text-[#00FFD1] border border-cyan-400/20">
            Real-time Simulation
          </span>
        </div>
      </div>

      {/* Input Field and Quick Demo Chips */}
      <div className="mt-6 space-y-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRunAudit();
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E736D]" />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#0D1414] border border-white/10 text-white placeholder-[#5E736D] text-sm focus:outline-none focus:border-emerald-500/50 transition-colors shadow-inner"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isScanning || !url}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,229,155,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#060909]" />
                <span>Auditing Payload...</span>
              </>
            ) : (
              <>
                <span>Run SEO Inspection</span>
                <ArrowUpRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Domain Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-medium">
          <span className="text-[#5E736D]">Or test with demo domain:</span>
          {demoDomains.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => handleRunAudit(d)}
              className="px-2.5 py-1 rounded-lg bg-[#0D1414] border border-white/8 hover:border-emerald-500/40 text-[#94A3B8] hover:text-[#00E59B] transition-colors"
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Crawl Simulation Progress Terminal */}
      {isScanning && (
        <div className="mt-6 p-4 rounded-2xl bg-[#0D1414] border border-emerald-500/20 font-mono text-xs space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px]">
            <span className="text-[#00E59B] font-semibold flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00E59B] animate-pulse" />
              <span>Simulating Bot Crawl Sequence: {getCleanDomain()}</span>
            </span>
            <span className="text-[#5E736D]">
              Step {scanStepIndex + 1} / {auditSequence.length}
            </span>
          </div>

          <p className="text-[#F4FAF7] flex items-center space-x-2 pt-1">
            <span className="text-[#00FFD1]">›</span>
            <span>{auditSequence[scanStepIndex]}</span>
          </p>

          <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden mt-2">
            <div
              className="bg-gradient-to-r from-[#00E59B] to-[#00FFD1] h-full transition-all duration-250 ease-out"
              style={{ width: `${((scanStepIndex + 1) / auditSequence.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Completed Inspection Results HUD */}
      {hasCompleted && (
        <div className="mt-8 space-y-6 animate-in fade-in duration-300">
          
          {/* Top Score Dials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#0D1414] border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#5E736D] block font-medium">
                  Technical Architecture
                </span>
                <span className="text-xl font-bold text-white mt-0.5 block">
                  Crawl Health
                </span>
                <span className="text-xs text-[#00E59B] font-medium">Optimal Indexing</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-[#00E59B] flex items-center justify-center text-[#00E59B] font-mono font-extrabold text-lg shadow-[0_0_15px_rgba(0,229,155,0.2)]">
                92
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0D1414] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#5E736D] block font-medium">
                  On-Page &amp; Metadata
                </span>
                <span className="text-xl font-bold text-white mt-0.5 block">
                  Content Quality
                </span>
                <span className="text-xs text-[#00FFD1] font-medium">Clear Entity Focus</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-cyan-500/10 border-2 border-[#00FFD1] flex items-center justify-center text-[#00FFD1] font-mono font-extrabold text-lg shadow-[0_0_15px_rgba(0,255,209,0.2)]">
                88
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0D1414] border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#5E736D] block font-medium">
                  Internal Link Graph
                </span>
                <span className="text-xl font-bold text-white mt-0.5 block">
                  Taxonomy
                </span>
                <span className="text-xs text-[#00E59B] font-medium">Depth ≤ 3 Clicks</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-[#00E59B] flex items-center justify-center text-[#00E59B] font-mono font-extrabold text-lg shadow-[0_0_15px_rgba(0,229,155,0.2)]">
                94
              </div>
            </div>
          </div>

          {/* Diagnostic Check Rows */}
          <div className="p-5 rounded-2xl bg-[#0D1414] border border-white/8 space-y-3 text-xs">
            <div className="text-[10px] text-[#5E736D] uppercase pb-2 border-b border-white/5 flex items-center justify-between font-medium">
              <span>Diagnostic Checklist — {getCleanDomain()}</span>
              <span className="text-[#00E59B] font-semibold">Pass 8 / 8 Simulated Signals</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {[
                { check: 'HTTP Response Status', value: '200 OK (Renderable)', pass: true },
                { check: 'Title Tag Audit', value: 'Detected (58 chars - Optimal length)', pass: true },
                { check: 'Meta Description', value: 'Detected (152 chars - High CTR intent)', pass: true },
                { check: 'Canonical Tag Integrity', value: 'Self-referencing & Valid', pass: true },
                { check: 'Robots.txt Directive', value: 'Accessible (Allow: /)', pass: true },
                { check: 'Structured Schema', value: 'JSON-LD Detected (Organization / Local)', pass: true },
                { check: 'Indexability Signal', value: 'Indexable (Noindex directive absent)', pass: true },
                { check: 'Mobile & SSL Signals', value: 'HTTPS Active • Responsive Viewport', pass: true },
              ].map((item) => (
                <div key={item.check} className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E59B] flex-shrink-0" />
                    <span className="text-[#94A3B8] font-medium">{item.check}</span>
                  </div>
                  <span className="text-white font-semibold text-[11px] truncate max-w-[180px] text-right font-mono">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Hook: Automated vs Manual Review */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#0D1414] to-cyan-500/10 border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] uppercase text-[#00E59B] font-semibold">
                WANT THE REAL DIAGNOSIS?
              </span>
              <h4 className="text-lg font-bold text-white">
                Automated tests only catch surface code.
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                I manually review server crawl logs, keyword mapping, search intent gaps, cannibalization, and true SERP competition to uncover why your rankings have stalled.
              </p>
            </div>

            <button
              onClick={() => onRequestReview(url)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00E59B] to-[#00FFD1] text-[#060909] font-bold text-xs sm:text-sm hover:from-[#37F3B0] hover:to-[#00CFC8] transition-all flex items-center justify-center space-x-2 flex-shrink-0 shadow-[0_0_20px_rgba(0,229,155,0.4)]"
            >
              <span>Request Manual SEO Review</span>
              <ArrowUpRight className="w-4 h-4 text-[#060909]" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
