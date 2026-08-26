# Segment 10 — User Journey / Conversion Funnel

Checked: 2026-08-26. Method: walked the actual blog-post reading journey via live DOM
inspection (breadcrumb presence, in-content CTA placement, what happens after a
reader finishes an article), cross-referencing structural findings from earlier
segments where they turn out to have direct user-facing impact.

## 🟡 Medium (upgrades a Segment 3 finding from schema-only to directly user-facing) — the fake breadcrumb category step is visible to real readers, not just search engines

**Evidence:** the visible on-page breadcrumb (rendered by `components/blog/Breadcrumbs.tsx`,
distinct from the JSON-LD checked in Segment 3) on `/blog/best-crypto-signals-group` reads:
```
Home > Blog > Education > Best Crypto Signals Group: What Serious Traders Should Look For
```
Both "Blog" and "Education" are rendered as clickable links — but per Segment 3's
root-cause trace (`components/blog/ArticleLayout.tsx:118`), they both point to the
exact same `/blog` URL, since "Education" isn't a real category page. **This means a
real visitor, not just a search-engine parser, sees two breadcrumb steps that look
like they lead somewhere different and don't.** A reader trying to browse "more
Education posts" by clicking that crumb lands on the undifferentiated main blog
list, identical to clicking "Blog." This raises the severity of the original Segment
3 finding — recommend re-reading it alongside this one, since the fix (either build
real category archive pages or drop the fake tier) now has a clear user-facing
justification, not just a structured-data cleanliness one.

## ❌ RETRACTED — "no related articles module" was wrong; the audit's own DOM check was mis-scoped

**Original claim (2026-08-26, later same day):** blog posts have no "related
articles"/"read next" section, only path off an article is scrolling into the footer.

**Correction:** this was a false positive caused by checking for a module *after*
`</article>` in the DOM rather than *inside* it. `components/blog/ArticleLayout.tsx`
already renders `<RelatedPosts relatedSlugs={relatedSlugs} currentSlug={slug} />`
near the end of the article body, and `components/blog/RelatedPosts.tsx` implements
genuinely good semantic-clustering logic (`getRelatedPostsSemantically()` — manual
override → parent pillar → sibling cluster posts → category-match fallback) to
surface 2 related posts even when no manual `relatedSlugs` are set. Re-verified live:
`curl .../blog/best-crypto-signals-group` contains "Recommended Topic Cluster
Reading" — the exact page originally checked, which the flawed DOM check had missed.
**No fix needed here — leaving this section in place, struck through, rather than
deleting it, so the correction is visible rather than silently disappearing.**

## ✅ Verified clean

- **Visible breadcrumb trail exists and renders correctly** on nested content pages
  (confirmed on a blog post) — my first automated check for this used too narrow a
  CSS selector and produced a false negative; corrected and re-verified: the
  `Breadcrumbs.tsx` component does render, with working `Home`/`Blog` links.
- **In-article conversion CTAs are present and reasonably prominent** — not just
  buried inline text links; styled as a distinct widget block within the article
  layout.

## ℹ️ Not verifiable in this environment

- **Full journey walk across every entry point** (region pages, commercial pages,
  academy modules) — checked the blog-post journey in depth as a representative
  sample; didn't repeat the same depth of check across all content types. The
  pattern found here (working breadcrumbs, present-but-not-abundant CTAs, no
  cross-content "next step" module) is a reasonable basis to expect similar results
  elsewhere, but that's inference, not a direct check of every template.
- **Real analytics funnel data** (where visitors actually drop off) — requires GA4
  access; see Segment 12.
- **Visual "does this feel like a dead end" judgment** — same screenshot limitation
  as Segment 9; the structural findings above (what DOM elements exist and where
  they link) are solid, but a human eyeballing the actual page flow would catch
  things pure DOM inspection can't.

---
**Segment 10 tally (revised after retraction): 0 🔴 · 0 🟠 · 1 🟡 Medium · 0 🟢 · 3 ℹ️ · 2 clean checks confirmed + 1 finding retracted**
