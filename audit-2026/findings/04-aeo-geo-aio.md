# Segment 4 — AEO / GEO / AIO (AI-crawler & answer-engine optimization)

Checked: 2026-08-26. Builds directly on Segment 1's `robots.ts`/`llms.txt` findings —
not re-litigated here, just cross-referenced. This segment focuses on content
extractability and E-E-A-T-style trust signals specifically relevant to how AI answer
engines (ChatGPT, Perplexity, Google AI Overviews, Claude) select and cite sources.

## 🟡 Medium — author `Person` schema has no externally-verifiable identity signal (`sameAs` is self-referential)

**Evidence:** full `Person` schema on `/authors/chen-wei` (representative sample):
```json
"url": "https://www.yagacalls.com/authors/chen-wei",
"sameAs": "https://www.yagacalls.com/authors/chen-wei"
```
`sameAs` points at the exact same URL as `url` — it doesn't link out to any external,
independently-checkable profile (LinkedIn, X/Twitter, personal site, GitHub, ORCID,
etc.). Per schema.org's own definition, `sameAs` exists specifically to point to "a
reference web page that unambiguously indicates the item's identity" *elsewhere* —
using it to reference the page itself provides no corroboration value.

**Why this matters for AEO/GEO specifically (not just classic SEO):** both Google's
E-E-A-T guidance and AI answer engines doing source-credibility assessment weight
whether an author entity can be corroborated outside the publisher's own domain — a
self-referential `sameAs` reads as "this site vouches for itself," which is exactly
the pattern low-trust content farms also produce. This is worth fixing across all 8
author profiles in `content/data/authors.ts` if the authors have real, linkable
external presences to point to. (I'm not asserting whether they do — that's a content
decision, not something I can verify from here — just flagging the schema gap.)

**Fix:** if real external profiles exist for these 8 authors, add them as an array to
`sameAs` in `content/data/authors.ts` / wherever `Person` schema is generated. If they
don't, that's a separate, bigger content-strategy question worth a deliberate decision
rather than leaving the schema field silently self-referential.

## ✅ Verified clean — content is well-structured for AI extraction

- **`answerFirstBlock`-style content is real and visible, not just metadata.** Spot-checked `content/data/commercial.ts`'s `answerFirstBlock` field for `best-crypto-signals-group` — the exact text is rendered verbatim and visibly on the live page, not hidden or schema-only. This is a genuinely good AEO pattern: a direct, confident, extractable answer near the top of the content, which is exactly what AI answer engines pull for citations.
- **Author bylines are real and linked**, not decorative — `BlogPosting` schema's `author` field on a sampled post carries `name`, `url`, and `jobTitle` all pointing to a real, working `/authors/<slug>` profile page (cross-referenced against Segment 1's link-integrity check — all 8 author pages returned live `200`).
- **FAQ content is genuinely visible** (re-confirmed from Segment 3) — AI engines that scrape rendered text rather than parsing JSON-LD will still find the same Q&A content a human would see.
- **`llms.txt` / `llms-full.txt` exist, are current, and every URL referenced resolves** (Segment 1) — this is still a minority of sites doing this at all as of today, so it's a genuine differentiator, not table stakes.

## ℹ️ Info-only (carried over from Segment 1, not re-scored) — `llms-full.txt` uses the URL itself as link text

`[https://www.yagacalls.com/x](https://www.yagacalls.com/x): description` instead of
descriptive anchor text. Not broken, just a missed opportunity — descriptive anchor
text in this file is itself a small extra signal for what the page is about, on top
of the description that already follows the colon. Low-effort improvement if this
file gets touched again for other reasons.

## ℹ️ Not verifiable in this environment

- **Actual AI-crawler traffic** — whether GPTBot / ClaudeBot / PerplexityBot /
  Google-Extended are *actually* hitting the site and at what frequency requires VPS
  Nginx access-log analysis, which isn't available from here. `robots.ts` allow-listing
  them (Segment 1) only confirms they're *permitted* to crawl, not that they *are*.
  **Action needed from you:** if you can pull `access.log` filtered by those
  user-agent strings, that's the real signal — I can help analyze it in a follow-up
  pass if you paste or share it.
- **Actual citation/retrieval testing** — asking ChatGPT/Perplexity/Google AI
  Overviews live questions to see if yagacalls.com gets cited requires querying those
  services directly and is outside what I can systematically verify here (results
  are also non-deterministic run to run). Worth doing manually with a handful of your
  target queries ("best crypto signals group", "how to choose a crypto signal
  provider", etc.) and noting whether/how the site is cited.
- **AI Overviews / SGE snapshot testing** — same limitation, requires live querying
  from a real Google session.

---
**Segment 4 tally: 0 🔴 · 0 🟠 · 1 🟡 Medium · 0 🟢 · 3 ℹ️ (2 not-verifiable-here) · 4 clean checks confirmed**
