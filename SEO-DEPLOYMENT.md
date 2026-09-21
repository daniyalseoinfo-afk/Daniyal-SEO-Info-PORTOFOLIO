# Daniyal SEO Portfolio — Deployment Notes

## Implemented in this optimized build
- One centralized production URL via `VITE_SITE_URL`.
- Canonicals normalized to trailing-slash URLs that match GitHub Pages directory output.
- Build-time static entry HTML generated for every indexable core route so direct visits do not depend on the SPA fallback.
- XML sitemap and robots.txt generated during production build from the same authoritative site URL.
- Dedicated noindex 404 fallback.
- Per-route titles, descriptions, canonical URLs, Open Graph and Twitter metadata.
- Person, WebSite, WebPage, breadcrumb and relevant FAQ structured data.
- GA4 initialization is optional and only loads for a valid `G-...` Measurement ID.
- GitHub Actions accepts `VITE_GA_MEASUREMENT_ID` as a repository secret.
- Lightweight favicon, Apple touch icon and web manifest added.
- Misleading homepage case-study outcome claims replaced with transparent exercise/evidence status.
- GitHub Pages base path retained for project-site deployment.

## Before deployment
1. Upload the project to the repository root and push to `main`.
2. In GitHub Settings > Pages, use GitHub Actions as the source.
3. Optional GA4: create repository secret `VITE_GA_MEASUREMENT_ID` with your real `G-...` ID.
4. Do not add an old Netlify URL anywhere.

## After deployment
1. Add the GitHub Pages URL-prefix property in Google Search Console.
2. Submit `https://daniyalseoinfo-afk.github.io/Daniyal-SEO-Info-PORTOFOLIO/sitemap.xml`.
3. Inspect the homepage and each service URL.
4. Confirm Google-selected canonical matches the declared canonical.
5. Once a custom domain is purchased, update only `VITE_SITE_URL`/GitHub Pages domain settings and redirect old URLs where possible.

## Ranking work that requires real-world data
Code cannot manufacture rankings. Use GSC after data accumulates to improve pages with impressions but weak CTR/position. Replace portfolio placeholders only with verified client/project evidence. Earn relevant links through useful resources, real profiles, contributions and genuinely useful tools.
