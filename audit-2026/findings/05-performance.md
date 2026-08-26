# Segment 5 — Performance (Core Web Vitals & beyond)

Checked: 2026-08-26. Method: real Navigation Timing API + Resource Timing API pulled
from an actual browser session against the live homepage, plus repeated `curl` timing
breakdowns, plus source inspection of image/font/script loading strategy.

## 🟡 Medium — TTFB is inconsistent and, on a cold request, high (~1.1-1.2s)

**Evidence — 3 consecutive requests, timing breakdown:**
```
attempt 1: connect=0.076s tls=0.104s ttfb=1.193s total=1.224s
attempt 2: connect=0.018s tls=0.043s ttfb=0.617s total=0.644s
attempt 3: connect=0.014s tls=0.033s ttfb=0.327s total=0.611s
```
Real browser session (separate check) measured `ttfb: 1113ms` on its navigation.
Response headers show `x-nextjs-cache: HIT` and `x-nextjs-prerender: 1` — i.e. this
is a *prerendered, cached* page, not a cold SSR render — yet TTFB still ranges
300ms-1.2s. For a fully static/prerendered page served through Cloudflare, sub-100ms
TTFB on cache hits is the realistic bar; this is meaningfully above that.

**Important caveat, stated plainly so this isn't overclaimed:** TTFB is heavily
affected by the tester's physical distance from the serving edge. This environment's
network egress location is unknown to me and may be far from both Cloudflare's PoP
and the VPS origin — so these absolute numbers may not reflect what a visitor in the
site's actual target regions (UAE, UK, USA, Singapore, etc., per the `/regions/`
pages) experiences. The relative signal that's still meaningful regardless of
location: three back-to-back requests to a supposedly-cached page produced three
different TTFBs varying by nearly 4x, which suggests either inconsistent
edge-cache behavior or the origin is being hit more often than the cache headers
imply.

**Recommended follow-up (needs your access, not verifiable from here):** run
PageSpeed Insights (I attempted the API from here and hit `429 quota exceeded` on
the keyless tier — needs a real API key or the web UI) and check the CrUX field-data
TTFB percentile for real users, which is location-agnostic and the actual number
Google uses for ranking signals. Also worth checking the Cloudflare cache
configuration (Page Rules / Cache Rules) to confirm the homepage and static routes
are set to cache aggressively at the edge rather than relying on origin
`Cache-Control` alone.

## 🟢 Low — Cloudflare auto-injects a render-blocking, non-async email-obfuscation script

**Evidence:** in `<head>`, every other script is `async` —
`<script src="/_next/static/chunks/....js" async>` — except one:
```html
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js">
```
`data-cfasync="false"` explicitly opts this script *out* of Cloudflare's own
Rocket Loader async handling, so it loads synchronously, render-blocking. This is
Cloudflare's automatic "Email Address Obfuscation" feature — it self-injects
whenever Cloudflare detects a plaintext email address in the page (likely
`partner@yagacalls.com`, which appears in the `Organization` JSON-LD and probably
in visible footer/contact content too).

**Fix:** this is a Cloudflare dashboard setting, not a code change — turn off
"Email Address Obfuscation" under Cloudflare's Scrape Shield settings (its
protection value is minimal — it's trivially bypassed by any real scraper — and it's
currently costing every page load a blocking script for no real benefit). Cross-
reference: Segment 14 (Infrastructure) since this is a Cloudflare config item, not
an app-code item.

## ✅ Verified clean

- **Page weight is genuinely lean**: homepage total transfer size ~304KB across 25
  requests (15 scripts totaling ~213KB, 6 stylesheet/link resources totaling ~98KB).
  This is a good number for a marketing site with this much content — no bloat
  red flag here.
- **Static asset caching is correctly configured**: `/_next/static/*` chunks serve
  `Cache-Control: public, max-age=31536000, immutable` — optimal, no wasted
  re-downloads for returning visitors.
- **Images use `next/image` correctly, site-wide**: confirmed `srcSet`/`sizes`
  attributes generating properly-scaled responsive variants, `.webp` source format,
  `decoding="async"`, and correct `loading="lazy"` on below-the-fold images
  (`regions-hero.webp`) while above-the-fold hero/logo images load eagerly. This is
  exactly the recommended pattern — nothing to fix here.
- **Font loading**: a single `woff2` is `<link rel="preload" as="font" crossorigin>`'d
  in `<head>` — correct pattern to avoid FOIT/FOUT-driven CLS on the primary
  typeface.
- **No render-blocking first-party JS**: every `_next/static/chunks/*.js` script tag
  in `<head>` carries `async` (the one exception is the Cloudflare-injected script
  above, which is third-party, not app code).
- **GTM loads non-blocking**: `app/layout.tsx:80` uses Next.js's `<Script strategy="afterInteractive">`
  for Google Tag Manager — the correct pattern, confirmed it does not appear as a
  blocking `<head>` script.
- **Viewport meta tag present and correct**: `width=device-width, initial-scale=1` —
  table stakes for mobile rendering/zoom behavior, confirmed present.

## ℹ️ Not verifiable in this environment

- **Real LCP / INP / CLS values** — attempted to capture these via the
  `PerformanceObserver`/`largest-contentful-paint` and `layout-shift` entry types in
  the actual browser session, but the browser pane here runs backgrounded/non-
  compositing (confirmed: a screenshot attempt failed with "the Browser pane is not
  displayed, so the page is not compositing frames"), and paint/LCP/CLS entries
  require actual frame compositing to fire — they came back empty. **This is a hard
  tooling limitation, not a site problem** — genuine Core Web Vitals need either a
  real foregrounded browser (Lighthouse, WebPageTest, Chrome DevTools on your own
  machine) or Google's CrUX field data (PageSpeed Insights).
- **PageSpeed Insights lab + field data** — the public API needs a key here (hit
  quota on the keyless tier); recommend running
  https://pagespeed.web.dev/analysis?url=https://www.yagacalls.com manually — it's
  free and takes 30 seconds, and will give you the authoritative LCP/INP/CLS numbers
  plus a mobile-specific score this environment cannot produce.
- **Nginx-level performance tuning** (buffer sizes, keepalive, gzip/brotli
  compression level, HTTP/2 vs HTTP/3 at the origin — note Cloudflare's edge already
  advertises `alt-svc: h3` regardless of origin config) — requires VPS access, see
  Segment 14.
- **Performance under real concurrent load** (PM2 process behavior, memory growth
  over uptime) — requires VPS monitoring access, see Segment 14.

---
**Segment 5 tally: 0 🔴 · 0 🟠 · 1 🟡 Medium · 1 🟢 Low · 4 ℹ️ (mostly tooling-limited, with a clear manual follow-up path) · 7 clean checks confirmed**
