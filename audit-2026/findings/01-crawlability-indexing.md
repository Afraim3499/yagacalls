# Segment 1 — Crawlability & Indexing

Checked: 2026-08-26. All findings below are backed by an actual command run this
session (shown under "Evidence") — nothing here is inferred from general SEO
knowledge without a corresponding live check.

## 🟠 High — No host-level canonicalization between `yagacalls.com` and `www.yagacalls.com`

Both hostnames serve the homepage (and, by extension, every route) directly with
`200 OK` — there is no 301 redirect collapsing one host into the other. HTTP→HTTPS
upgrades correctly, but it upgrades in-place per host rather than consolidating to
one canonical host.

**Evidence:**
```
curl -sI https://yagacalls.com/      → 200 OK
curl -sI https://www.yagacalls.com/  → 200 OK   (both live, both direct)
curl -sI http://yagacalls.com/       → 301 → https://yagacalls.com/       (stays non-www)
curl -sI http://www.yagacalls.com/   → 301 → https://www.yagacalls.com/  (stays www)
```
`next.config.ts` `redirects()` only handles legacy `.html` paths — no `host`-based
redirect rule exists there, and nothing at the Cloudflare/Nginx layer (in front of
the VPS per `VPS_OPERATIONS_GUIDE.md`) appears to be doing it either.

**Why it matters:** `app/robots.ts` and `app/sitemap.ts` both declare
`www.yagacalls.com` as canonical, and every page correctly emits
`<link rel="canonical" href="https://www.yagacalls.com/...">` even when served from
the bare domain — so this is **mitigated, not exploited, today**. But a `rel=canonical`
is a hint, not a directive: Google can and does sometimes index the non-preferred
host anyway, backlinks/social shares that use the bare domain split link equity
between two hosts instead of consolidating it, and not every AI crawler respects
canonical tags the same way Googlebot does. This is exactly the kind of thing that
silently costs ranking without ever throwing an "error."

**Fix:** add a host-based 301 in `next.config.ts` (or, better, at the Cloudflare edge
since that's what's actually fronting the VPS — see Segment 14) redirecting
`yagacalls.com/*` → `https://www.yagacalls.com/*` for both HTTP and HTTPS.

## ✅ Verified clean — `robots.txt`

- Single source confirmed: `app/robots.ts` exists, `public/robots.txt` does not.
- Live `https://www.yagacalls.com/robots.txt` matches `app/robots.ts` exactly: `Allow: /`, `Disallow: /api/` for `*`, explicit allow for the full AI-crawler list (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, Googlebot, Bingbot, Applebot, Bytespider, CCBot, DuckAssistBot, PetalBot), and correctly points `Sitemap:` at the www host.
- `scripts/validate-seo.js` run live this session: **passes** (`✔ SEO validation passed`) — no robots.txt duplication, no un-named JSON-LD, no broken region references, no sitemap gaps, as of the current tree.

## ✅ Verified clean — sitemap coverage

- `https://www.yagacalls.com/sitemap.xml` returns 88 URLs.
- **All 88 were requested live and all 88 return `200`** — zero 404s, zero redirects, zero soft-404s in the sitemap.
- `lastModified` values are real, varied, git-derived timestamps (not a single `new Date()` build stamp) — confirms `lib/gitLastModified.ts` is actually wired in on the live deploy, not just in source.
- Cross-checked `regions.ts` slugs vs. `app/regions/<slug>/` folders live: all folder-only slugs (`gcc`, `russia`, `dubai`, `australia`, `germany`, `qatar`, `saudi-arabia`, `singapore`, `switzerland`, `uae`, `uk`, `usa`, `europe`) resolve, and the two data-only slugs (`middle-east`, `netherlands`) also resolve. No regression on the "shadow content" trap documented in `CLAUDE.md`.

## ✅ Verified clean — AI-crawler / indexing-priority files vs. real routes

- `public/llms.txt` (24 URLs), `public/llms-full.txt`, `public/indexing-priority-urls.txt` (26 URLs incl. `/regions/dubai`) all cross-checked against real `app/regions/` folders and `regions.ts` slugs — no dead references. This is the exact bug class (`/regions/canada`, `/regions/london`) that shipped before per `AUDIT_STATUS.md`; confirmed not regressed, and confirmed those two specific URLs correctly 404 live (nothing references them anymore).
- `next.config.ts` still carries the old `.html` → clean-URL 301s from a prior migration; spot-checked two of them live (`/pricing.html`, `/contact.html`) — both correctly return `308 Permanent Redirect`.

## ℹ️ Info-only — `llms-full.txt` link formatting is self-referential

Every entry in `llms-full.txt` is formatted `[https://www.yagacalls.com/x](https://www.yagacalls.com/x): description` — i.e. the markdown link text is the URL itself, not descriptive anchor text. Functionally fine for machine parsing (not broken), but it's a wasted opportunity: descriptive anchor text in an `llms.txt`-style file is itself a small AEO signal (Segment 4 territory) and currently there's none. Not filing as a defect on its own — cross-referencing into Segment 4.

## ✅ Verified clean — 404 handling

`https://www.yagacalls.com/this-page-does-not-exist-xyz123` → real HTTP `404 Not Found` (not a soft-404 disguised as 200). Correct.

## ✅ Verified clean — meta robots / X-Robots-Tag

Sampled homepage, `/pricing`, `/regions/uae`, `/blog/best-crypto-signals-group`,
`/academy/atr-stops`, `/authors/chen-wei`: all emit
`<meta name="robots" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1">`
consistently, and none carry an `X-Robots-Tag` response header (so nothing is
accidentally being noindexed at the header level, which would silently override the
meta tag and wouldn't show up in a casual page-source check).

## ℹ️ Not verifiable in this environment

- **Google Search Console** (Coverage report, "discovered not indexed" / "crawled not
  indexed" / soft-404 counts, actual indexed-page count vs. sitemap count, manual
  actions) — requires the user's GSC login. **Action needed from you:** check Coverage
  report and paste/screenshot any errors for follow-up.
- **Bing Webmaster Tools / Yandex Webmaster** parity — same, requires login.
- **Real crawl-budget behavior over time** (server log analysis of actual Googlebot/
  Bingbot hit frequency and coverage) — would need VPS access to Nginx access logs,
  not available from here. If you can pull `access.log` filtered for known crawler
  user-agents, that's worth a follow-up pass.

## Not applicable

- **hreflang** — site is single-locale (English) targeting multiple regions via
  distinct `/regions/<slug>` content pages rather than translated URL variants, so
  hreflang tags are not expected here and their absence is not a defect.
- **Faceted/query-param URL space** — no search, filter, or pagination UI found that
  would generate a large crawlable query-string URL space; not a crawl-budget risk on
  this site's current structure.

---
**Segment 1 tally: 1 🟠 High · 0 🟡 · 0 🟢 · 3 ℹ️ (2 not-verifiable-here, 1 info-only) · 5 clean checks confirmed**
