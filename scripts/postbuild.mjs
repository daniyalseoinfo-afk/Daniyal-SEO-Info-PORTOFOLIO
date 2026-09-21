import fs from 'node:fs';
import path from 'node:path';

const SITE=(process.env.VITE_SITE_URL||'https://daniyalseoinfo-afk.github.io/Daniyal-SEO-Info-PORTOFOLIO').replace(/\/+$/,'');
const routes = [["/", "SEO Specialist in Karachi | Technical, On-Page & Local SEO | Daniyal Asad", "SEO specialist in Karachi focusing on technical SEO audits, search intent, on-page optimization, internal linking, and local search growth. Explore practical SEO projects, audits, and case studies.", 1.0, "weekly"], ["/seo-services-in-karachi", "SEO Services in Karachi | Technical, On-Page & Local SEO Consulting", "Independent SEO consulting for Karachi businesses. Focused on technical crawl health, on-page search intent alignment, and local Map Pack visibility.", 0.9, "monthly"], ["/technical-seo-services-karachi", "Technical SEO Services Karachi | Crawl Diagnostics, Indexing & Core Web Vitals", "Identify and resolve crawl traps, indexation blocks, canonical conflicts, render-blocking scripts, and Core Web Vitals bottlenecks.", 0.9, "monthly"], ["/on-page-seo-services-karachi", "On-Page SEO Services Karachi | Content Intent & Semantic Architecture", "On-page search optimization: user intent mapping, structured heading hierarchy, CTR-focused metadata, and contextual internal link architecture.", 0.8, "monthly"], ["/local-seo-services-karachi", "Local SEO Services Karachi | Google Business Profile & Local Search", "Local SEO strategy for Karachi businesses: Google Business Profile optimization, local citation cleanup, and geo-targeted commercial landing pages.", 0.8, "monthly"], ["/keyword-research-services-karachi", "Keyword Research Services Karachi | Topic Clusters & Search Intent Mapping", "Data-driven keyword research that maps user search intent into clear topic clusters and 1-to-1 page architecture to avoid keyword cannibalization.", 0.8, "monthly"], ["/portfolio", "SEO Portfolio & Case Studies | Technical Audits & Strategy Exercises", "Documented SEO audit exercises and demonstration projects. Inspect diagnostic methodology, problem identification, prioritization, and technical fixes.", 0.85, "weekly"], ["/about", "About Daniyal Asad | SEO Specialist in Karachi", "Learn about Daniyal Asad, an SEO specialist based in Karachi, Pakistan working across technical diagnostics, search intent, on-page SEO, and organic growth.", 0.7, "monthly"], ["/blog", "SEO Knowledge Base & Field Notes | Technical SEO Guides | Daniyal Asad", "Practical guides on Search Console diagnostics, crawl management, Core Web Vitals, keyword cannibalization, and local SEO in Pakistan.", 0.8, "weekly"], ["/free-seo-tools/serp-preview", "Free Google SERP Snippet Preview & Pixel Width Tool | Daniyal Asad", "Free SEO tool to preview Google desktop and mobile SERP snippets, estimate title pixel widths, and inspect meta descriptions in real time.", 0.85, "monthly"], ["/contact", "Contact Daniyal Asad | SEO Project Inquiries & Website Review", "Get in touch to discuss a website audit, search intent project, or technical SEO consultation. Based in Karachi, working remotely.", 0.7, "monthly"]];
const dist='dist';
let template=fs.readFileSync(path.join(dist,'index.html'),'utf8');
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function replaceMeta(html, route, title, desc){
 const canonical=route==='/'?SITE+'/':SITE+route+'/';
 html=html.replace(/<title>.*?<\/title>/s,`<title>${esc(title)}</title>`)
 .replace(/<meta name="description" content="[^"]*"\s*\/>/,`<meta name="description" content="${esc(desc)}" />`)
 .replace(/<link rel="canonical" href="[^"]*"\s*\/>/,`<link rel="canonical" href="${canonical}" />`)
 .replace(/<meta property="og:title" content="[^"]*"\s*\/>/,`<meta property="og:title" content="${esc(title)}" />`)
 .replace(/<meta property="og:description" content="[^"]*"\s*\/>/,`<meta property="og:description" content="${esc(desc)}" />`)
 .replace(/<meta property="og:url" content="[^"]*"\s*\/>/,`<meta property="og:url" content="${canonical}" />`)
 .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/,`<meta name="twitter:title" content="${esc(title)}" />`)
 .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/,`<meta name="twitter:description" content="${esc(desc)}" />`);
 return html;
}
for(const [route,title,desc] of routes){
 if(route==='/') continue;
 const dir=path.join(dist,route.slice(1)); fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(path.join(dir,'index.html'),replaceMeta(template,route,title,desc));
}
// Dedicated noindex fallback for unknown GitHub Pages URLs.
const fallback=template.replace('<head>','<head>\n<meta name="robots" content="noindex, nofollow" />');
fs.writeFileSync(path.join(dist,'404.html'),fallback);
const today=new Date().toISOString().slice(0,10);
const xml=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',...routes.map(([r,,,p,c])=>`  <url><loc>${r==='/'?SITE+'/':SITE+r+'/'}</loc><lastmod>${today}</lastmod><changefreq>${c}</changefreq><priority>${p}</priority></url>`),'</urlset>'].join('\n');
fs.writeFileSync(path.join(dist,'sitemap.xml'),xml);
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`SEO static entries generated for ${routes.length} indexable routes.`);
