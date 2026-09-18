import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, AlertTriangle, Cpu, Terminal, ArrowRight, ShieldAlert } from 'lucide-react';

export const LiveSeoInspectorTool: React.FC<{ onRequestReview: (initialUrl?: string) => void }> = ({ onRequestReview }) => {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        domain: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        keyword: keyword || 'Commercial Intent Query',
        score: 72,
        checks: [
          { name: 'Crawlability & robots.txt', status: 'pass', detail: 'No disallow blocks on primary assets' },
          { name: 'Mobile Viewport & Core Web Vitals', status: 'warning', detail: 'LCP > 2.5s on mobile networks in Pakistan' },
          { name: 'Metadata & Search Intent Hierarchy', status: 'warning', detail: 'Title tag could be optimized for CTR' },
          { name: 'Structured Data (JSON-LD)', status: 'fail', detail: 'Missing Organization or LocalBusiness Schema' },
          { name: 'Local Karachi Signal Authority', status: 'warning', detail: 'NAP consistency needs citation sync' },
        ]
      });
    }, 1200);
  };

  return (
    <div className="rounded-3xl bg-[#11151E] border border-white/12 p-6 sm:p-8 shadow-2xl relative overflow-hidden my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/8">
        <div>
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-[#2DD4BF]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-bold">
              INTERACTIVE SEO DIAGNOSTIC TOOL
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Test Your Website&apos;s Search Readiness
          </h3>
          <p className="text-xs sm:text-sm text-[#7D8595] mt-0.5">
            Simulate a preliminary technical check across crawlability, metadata, Core Web Vitals & schema.
          </p>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#161C28] text-[#45E6FF] border border-white/10 self-start">
          Free Diagnostic Tool
        </span>
      </div>

      <form onSubmit={handleScan} className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-6">
          <label className="block text-xs font-mono text-[#7D8595] mb-1">
            Website URL
          </label>
          <input
            type="text"
            placeholder="e.g. yourbusiness.com.pk"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#2DD4BF] transition-colors"
            required
          />
        </div>

        <div className="sm:col-span-4">
          <label className="block text-xs font-mono text-[#7D8595] mb-1">
            Target Keyword (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. SEO services Karachi"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#161C28] border border-white/10 text-white placeholder-[#7D8595] text-sm focus:outline-none focus:border-[#45E6FF] transition-colors"
          />
        </div>

        <div className="sm:col-span-2 flex items-end">
          <button
            type="submit"
            disabled={isScanning}
            className="w-full py-3 rounded-xl bg-[#2DD4BF] text-[#080A0F] font-bold text-sm hover:bg-[#14B8A6] transition-all flex items-center justify-center space-x-1.5 shadow-[0_0_20px_-3px_rgba(45,212,191,0.3)] disabled:opacity-50"
          >
            {isScanning ? (
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#080A0F] animate-ping" />
                <span>Auditing...</span>
              </span>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Inspect</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Results View */}
      {scanResult && (
        <div className="mt-8 pt-6 border-t border-white/8 space-y-4 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0D1017] border border-white/8">
            <div>
              <span className="text-xs font-mono text-[#7D8595]">Target Domain Tested:</span>
              <h4 className="text-base font-bold text-white font-mono">{scanResult.domain}</h4>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <span className="text-[10px] font-mono text-[#7D8595] uppercase">Preliminary Health</span>
                <div className="text-lg font-bold text-[#2DD4BF] font-mono">{scanResult.score}/100</div>
              </div>
              <button
                onClick={() => onRequestReview(scanResult.domain)}
                className="px-4 py-2 rounded-xl bg-[#2DD4BF] text-[#080A0F] text-xs font-bold hover:bg-[#14B8A6] transition-colors flex items-center space-x-1"
              >
                <span>Get Full Manual Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {scanResult.checks.map((c: any, i: number) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#161C28] border border-white/5 flex items-start space-x-3">
                {c.status === 'pass' && <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] flex-shrink-0 mt-0.5" />}
                {c.status === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />}
                {c.status === 'fail' && <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />}
                <div>
                  <span className="text-xs font-bold text-white block">{c.name}</span>
                  <span className="text-[11px] text-[#7D8595]">{c.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
