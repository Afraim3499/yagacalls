# Segment 3 — Structured Data / Schema

Checked: 2026-08-26. All JSON-LD pulled live from the rendered HTML, cross-referenced
against `lib/schema.ts` and the components/pages that call it.

## 🟡 Medium — every blog post's breadcrumb has a category-level node pointing to the same URL as the "Blog" node above it

**Evidence — live BreadcrumbList schema, 5 different posts checked, all show the same pattern:**
```
/blog/best-crypto-signals-group:            [Blog → /blog] [Education → /blog] [<title> → /blog/...]
/blog/telegram-crypto-signals-trustworthy:   [Blog → /blog] [Strategy  → /blog] [<title> → /blog/...]
/blog/narrative-trading-crypto:              [Blog → /blog] [Analysis  → /blog] [<title> → /blog/...]
/blog/crypto-signals-for-beginners:          [Blog → /blog] [Beginner  → /blog] [<title> → /blog/...]
/blog/why-stop-loss-matters:                 [Blog → /blog] [Strategy  → /blog] [<title> → /blog/...]
```
Position 1 ("Blog") and position 2 (the category — "Education"/"Strategy"/"Analysis"/
"Beginner") carry **different display names but the identical `item` URL** (`/blog`).
Confirmed there's no real category page behind these names — `https://www.yagacalls.com/blog/education`
returns `404`.

**Root cause:** `components/blog/ArticleLayout.tsx:111-121`. When a post has no
`parentPillarSlug` set, the breadcrumb falls back to:
```ts
{ name: category, item: `/blog` }
```
— reusing the `/blog` URL because there's nowhere else to point it, since categories
aren't real routes.

**Why it matters:** Google's breadcrumb structured-data guidelines expect each
`itemListElement` entry to represent a distinct, navigable step in the hierarchy. Two
consecutive entries with different names but identical URLs is technically-valid JSON
(schema validators won't reject it) but semantically wrong, and in practice Google
sometimes collapses or drops confusing breadcrumb trails from the rich-result display
rather than showing a broken-looking two-hop trail that goes nowhere new. This affects
every blog post that isn't a "pillar" post — the majority of the 24 posts in `sitemap.xml`.

**Fix options (pick one, don't need both):**
1. Build real `/blog/category/<slug>` (or `/blog?category=`) archive pages and point the category breadcrumb node at that — turns it into genuinely useful navigation, not just schema plumbing.
2. Or, simpler: drop the category tier entirely for posts with no parent pillar, so the breadcrumb is just `Blog → <title>` (2 nodes, both genuinely distinct) instead of a fake 3-tier trail.

## 🟢 Low — homepage emits duplicate, byte-identical `Organization` and `WebSite` JSON-LD blocks

**Evidence:**
```
curl homepage → "@type":"Organization" appears 2× (byte-identical, same @id)
curl homepage → "@type":"WebSite" appears 2×
curl /pricing  → "@type":"Organization" appears 1× (correct)
```
**Root cause:** `app/layout.tsx:74` calls `createOrganizationSchema()` once, site-wide
(rendered into every page via the shared layout — confirmed correct on `/pricing`,
which only shows it once). But `app/page.tsx:40` (the homepage specifically) *also*
calls `createOrganizationSchema()` and (per the `WebSite` duplication) presumably
`createWebsiteSchema()` again, independently — so the homepage alone ends up
rendering both blocks twice.

**Why it's Low, not higher:** duplicate JSON-LD with a shared `@id` isn't invalid per
schema.org spec and Google generally de-dupes by `@id` rather than erroring — this is
markup bloat and a code-cleanliness issue, not a functional indexing bug. Worth
cleaning up because it's dead weight on every homepage load and because leftover
"the layout already provides this" duplication is exactly the kind of thing that
tends to get copy-pasted forward into new pages by a future engineer who doesn't
realize `layout.tsx` already covers it.

**Fix:** remove the redundant `createOrganizationSchema()` / `createWebsiteSchema()`
calls (and their `<JsonLd>` render) from `app/page.tsx:40`, since `app/layout.tsx:74`
already supplies both for every page including the homepage.

## ✅ Verified clean

- **No hand-rolled JSON-LD outside `lib/schema.ts`** — searched `components/` for any
  `"@type": "BreadcrumbList"` or `"FAQPage"` literal not going through the shared
  helpers: zero matches. Every schema block on the site is built by
  `createBreadcrumbSchema()` / `createFAQSchema()` / etc., which hardcode the `name`
  property (`lib/schema.ts:121`, `:135`) — structurally impossible to regress the
  "unnamed item" bug this way.
- **`scripts/validate-seo.js`** re-confirmed passing (see Segment 1) — its
  `checkJsonLdNames` check only walks `app/`, not `components/`; since no
  hand-rolled JSON-LD exists in `components/` either (checked above), that scan-scope
  gap is currently harmless, but worth knowing it's there if someone adds hand-rolled
  schema inside a component in the future.
- **`name` property present** on every live `BreadcrumbList` and `FAQPage` block
  sampled (homepage, blog posts, `/regions/uae`) — `"name":"Breadcrumbs"` and
  `"name":"Frequently Asked Questions"` respectively, exactly as `lib/schema.ts`
  guarantees.
- **FAQ schema content is genuinely visible on-page**, not schema-only/hidden —
  spot-checked `/regions/uae`: the first FAQ question text in the JSON-LD
  ("Does Yaga Calls provide crypto signals for UAE traders?") appears verbatim in the
  rendered page body. This matters because Google can action-suppress FAQ rich
  results site-wide if it detects schema content that isn't actually shown to users.
- **`Organization` schema fields look complete and consistent**: `@id`, `name`,
  `alternateName` (brand-variant coverage — Yagacall, Yaga Call, etc.), `logo` as a
  proper `ImageObject` with dimensions, `contactPoint` array, `areaServed`. No
  half-filled required fields spotted in the block sampled.

## ℹ️ Not verifiable in this environment

- **Google Rich Results Test / Schema.org Validator** — these are hosted tools
  requiring an interactive browser session against Google's own validator UI; I
  didn't drive a browser against them this pass. The checks above (name presence,
  duplicate detection, visible-content matching) cover the failure modes those tools
  primarily catch, but a live pass through Google's actual validator is worth doing
  before/after the fixes above ship, since it's the authoritative source of truth for
  rich-result eligibility. **Recommend:** paste 2-3 URLs (homepage, a blog post,
  `/regions/uae`) into https://search.google.com/test/rich-results after the fixes.
- **LocalBusiness/Product schema** — not applicable; this is a Telegram-membership
  service, not a local business or physical product, so neither schema type is
  expected here and their absence isn't a defect.

---
**Segment 3 tally: 0 🔴 · 0 🟠 · 1 🟡 Medium · 1 🟢 Low · 2 ℹ️ · 5 clean checks confirmed**
