# Yaga Calls Post-Launch Monitoring Plan (Phase 5)

This document outlines the systematic monitoring and optimization steps required following the global search indexing of the Yaga Calls platform.

## Daily Monitoring (First 7 Days)
- **Search Console Indexing**: Verify that the submitted sitemap is "Success" and monitor the "Pages" report for indexing progress.
- **URL Inspection**: Manually inspect the P0 URLs (Homepage, Pricing, Method, Proof, Dubai) to confirm they are "On Google" or "Request Indexing" if not crawled within 48 hours.
- **Sitemap Processing**: Check if Google/Bing have encountered any errors reading `sitemap.xml`.
- **404 Error Check**: Monitor the GSC "Indexing" report for any unexpected 404s from old paths.
- **CTA Tracking**: Verify that Telegram clicks are being recorded in Vercel Analytics/Logs.
- **Live Performance**: Check Core Web Vitals in GSC (if data is available) or run Lighthouse on live URLs.

## Weekly Monitoring (First 4 Weeks)
- **Search Queries**: Identify which keywords are driving impressions in GSC.
- **CTR Optimization**: If a page has high impressions but low CTR, refine the `metaTitle` or `metaDescription` in `regions.ts` or `commercial.ts`.
- **Topical Gaps**: Identify queries that are showing in GSC but don't have a dedicated FAQ answer; add these to the relevant page data.
- **Internal Linking**: Add deep-links from high-impression pages to lower-impression regional pages to redistribute link equity.
- **AI Answer Visibility**: Perform test searches on Perplexity/Gemini/SearchGPT to see if Yaga Calls is cited for specific trading methodology questions.

## Monthly Maintenance
- **Content Freshness**: Update the `lastReviewed` property on all landing pages to signal "freshness" to crawlers.
- **llms-full.txt Update**: Ensure the AI context file is updated with any new blog or academy content.
- **Backlink Outreach**: Monitor for mentions in the global crypto community and ensure high-authority links are maintained.
- **Conversion Audit**: Review which regional or commercial pages have the highest conversion rate to Telegram onboarding and replicate their structure on lower-performing pages.

## Incident Response
- **Indexing Blockers**: If GSC reports "Excluded" due to "Noindex" or "Canonical mismatch", resolve immediately.
- **Ranking Drops**: Analyze if any core narrative (e.g., Bitcoin ETF trends) has shifted, requiring a content update in `marketContext`.
- **Build Errors**: Ensure every Vercel deployment passes the sitemap/robots validation.
