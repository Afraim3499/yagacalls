# Segment 2 — On-page & Technical SEO

Checked: 2026-08-26. Method: pulled `<title>`, meta description, and H1 count live for
all 88 sitemap URLs into a dataset, then cross-referenced anomalies against source
code to find the actual root cause (not just the symptom).

## 🔴 Critical — 13 pages ship a literally doubled title suffix: "...| Yaga Calls | Yaga Calls"

**Evidence — live `<title>` tags, verbatim:**
```
/disclaimer                              Disclaimer & Risk Disclosure | Yaga Calls | Yaga Calls
/privacy                                 Privacy Policy | Yaga Calls | Yaga Calls
/risk-disclosure                         Crypto Trading Risk Disclosure | Yaga Calls | Yaga Calls
/terms                                   Terms of Service | Yaga Calls | Yaga Calls
/verified-crypto-signal-provider         Verified Crypto Signal Provider: How to Check Proof | Yaga Calls | Yaga Calls
/best-crypto-signal-provider             Best Crypto Signal Provider for Serious Traders | Yaga Calls | Yaga Calls
/narrative-trading-crypto-signals        Narrative Trading Crypto Signals | Yaga Calls | Yaga Calls
/what-are-crypto-signals                 What Are Crypto Signals? Entries, Targets & Stop-Loss Guide | Yaga Calls | Yaga Calls
/how-to-choose-a-crypto-signal-provider  How to Choose a Crypto Signal Provider | 12-Point Checklist | Yaga Calls | Yaga Calls
/crypto-signals-with-risk-management     Crypto Signals With Risk Management | Yaga Calls | Yaga Calls
/best-crypto-signals-group               Best Crypto Signals Group 2026 | Reliable Telegram Trading | Yaga Calls | Yaga Calls
/premium-crypto-signals-telegram         Premium Crypto Signals Telegram | Exclusive Market Analysis | Yaga Calls | Yaga Calls
/crypto-signals-with-proof               Crypto Signals With Proof | Verified Historical Trading Results | Yaga Calls | Yaga Calls
```

**Root cause, traced in source:**
`app/layout.tsx:19-22` sets a global Next.js metadata title template:
```ts
title: {
  default: "Yaga Calls | Professional Crypto Signals & Market Analysis",
  template: "%s | Yaga Calls",
},
```
This automatically appends `" | Yaga Calls"` to whatever title string any page returns
as `metadata.title`, unless that page explicitly opts out with `title: { absolute: "..." }`.
Two separate content sources violate this contract by already hardcoding the suffix
into their own title string:
1. **Static legal pages** — e.g. `app/disclaimer/page.tsx:5`: `title: "Disclaimer & Risk Disclosure | Yaga Calls"` (same pattern in `privacy/page.tsx:5`, `risk-disclosure/page.tsx:5`, `terms/page.tsx:5`).
2. **Standalone SEO landing pages** — e.g. `app/verified-crypto-signal-provider/page.tsx:14` and five siblings, same pattern.
3. **Commercial catch-all pages** — `content/data/commercial.ts:10`: `metaTitle: "Best Crypto Signals Group 2026 | Reliable Telegram Trading | Yaga Calls"`, consumed by the `[slug]` route's `generateMetadata()` and fed straight into `title`, same doubling. (Confirms this is a *pattern* problem, not a one-file typo — it recurs independently in three different code locations, so a single-file fix won't catch all of it.)

**Why some pages with "Yaga Calls" in the title do NOT double** (so the fix is targeted,
not a blanket strip): region pages (`app/regions/uae/page.tsx` etc.) use an em-dash
separator (`"UAE Crypto Signals — Yaga Calls"`) for their **openGraph** title only —
their actual top-level `metadata.title` is set elsewhere (a per-region SEO field) and
does *not* already contain the suffix, so the template correctly appends it once.
Verified live: `/regions/uae` → `Crypto Signals UAE | Premium Telegram Access | Yaga Calls`
(correct, single suffix).

**Impact:** these are 13 commercially important pages (pricing-adjacent comparison
pages, proof/trust pages, and every legal page) showing a visibly broken, unprofessional
title in every SERP result, browser tab, and social share — and wasting ~11 characters
of the ~60-char SERP budget on a redundant repeat of the brand name.

**Fix:** strip the trailing `" | Yaga Calls"` from the source string in each of the 13
locations (the 10 `app/**/page.tsx` files listed above by title text, plus the 3
`metaTitle` fields in `content/data/commercial.ts` for `best-crypto-signals-group`,
`premium-crypto-signals-telegram`, `crypto-signals-with-proof`) and let the layout
template supply it once. Worth adding a 5th check to `scripts/validate-seo.js` that
fails the build if any resolved title would end in `Yaga Calls | Yaga Calls` — this is
exactly the class of bug that script exists to catch pre-deploy.

## 🟡 Medium — meta descriptions exceed the ~160-char SERP display limit on 32 of 88 pages

Worst offenders: `/affiliate` (229 chars), `/authors/aisha-al-mansoori` (199),
`/authors/sarah-jenkins` (194), `/regions/qatar` (193), `/regions/europe` (194),
`/best-crypto-signal-provider` (181), plus all 13 region pages and 6 of 8 author bio
pages. Google will truncate these mid-sentence in search results (sometimes
mid-word), which reads as sloppy and can cut off the actual call-to-action language
these descriptions were written to end with. Recommend trimming to ≤155 chars,
front-loading the key value proposition since that's what survives truncation.

## 🟡 Medium — title tags exceed ~60 chars on 58 of 88 pages (partially overlaps the doubling bug above)

Once the 13 doubled titles in the critical finding are fixed, several of these drop
under the limit automatically. But a large residual set is still long on its own
merits — e.g. `/blog/crv-trading-curve-price-updates` (92 chars, unrelated to the
doubling bug), `/what-are-crypto-signals` (89, independent of doubling — still 68
after removing the duplicate suffix), `/crypto-signals-with-proof` (89). Recommend a
second pass specifically on titles >60 chars *after* the critical fix ships, so the
residual list is accurate (right now it's inflated by the doubling bug).

## 🟢 Low — `/crypto-signal-results` page exists, is live, and is linked from the homepage nav — but is missing from `sitemap.xml`

**Evidence:** `app/crypto-signal-results/page.tsx` exists, live URL returns `200`
with title `Verified Signal Results & Performance Ledger | Yaga Calls`, and `/crypto-signal-results`
appears as an `href` on the homepage — but it is **not** in the `staticRoutePaths`
array in `app/sitemap.ts`, so it never appears in `sitemap.xml` (confirmed: 0 matches
when grepping the 88-URL sitemap list for it).

**Why it's Low, not higher:** it's still crawlable (linked from the homepage nav, not
orphaned), so this isn't a hard indexing blocker — just a missed signal that costs it
sitemap-driven discovery priority and freshness/`lastModified` tracking that every
other static page gets.

**Fix:** add `/crypto-signal-results` to `staticRoutePaths` in `app/sitemap.ts`. This
is exactly the same class of gap `scripts/validate-seo.js` Check 4 already guards for
region folders specifically — worth generalizing that check to scan all of `app/**/page.tsx`
for static routes missing from the sitemap, not just `app/regions/*`.

## ✅ Verified clean

- **No duplicate `<title>` values** anywhere across all 88 live pages.
- **No duplicate meta descriptions** anywhere across all 88 live pages.
- **Exactly one `<h1>`** on every one of the 88 pages — no zero-H1 or multi-H1 pages.
- **No empty titles or empty descriptions** on any page.
- **Image `alt` coverage**: sampled homepage, `/proof` (11 images), `/best-crypto-signals-group`, a blog post, and `/regions/uae` — zero `<img>` tags missing an `alt` attribute, zero empty `alt=""` on meaningful images.
- **Internal link integrity**: extracted all 56 internal page links from the homepage (nav + footer, which is shared across the site) and requested every one live — all resolve `200`/`301`/`308`, zero broken links.
- **URL structure**: trailing-slash requests correctly `308`-redirect to the canonical no-slash form; uppercase-path requests correctly `404` (case-sensitive routing — standard Next.js behavior, not a defect).
- **Region page duplicate-content spot-check**: compared meta descriptions and hero copy fetched live for `/regions/uae` vs `/regions/dubai` — genuinely different, city/country-specific wording (not boilerplate with a find-replaced place name). Not exhaustive across all 13, but the sample shows real per-region content investment.

## ℹ️ Not verifiable in this environment / needs a deeper manual pass

- **Full duplicate-content similarity scoring** across all 13 region pages and all
  commercial landing pages — the 2-page spot-check above was clean, but a proper
  n-gram/cosine-similarity pass across all of them (especially the ones sharing a
  template) is worth a dedicated tool (Copyscape/Siteliner-style) rather than manual
  eyeballing. Flagging as a recommended follow-up, not claiming it's verified clean.
- **Full internal-link crawl beyond the homepage** — checked the homepage's 56 links
  exhaustively; did not crawl second-level internal links from every one of the 88
  pages (would be several hundred more requests). If you want that full-depth crawl,
  say so and I'll run it as a follow-up pass.

---
**Segment 2 tally: 1 🔴 Critical · 0 🟠 · 2 🟡 Medium · 1 🟢 Low · 2 ℹ️ · 6 clean checks confirmed**
