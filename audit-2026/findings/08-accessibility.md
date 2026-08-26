# Segment 8 — Accessibility

Checked: 2026-08-26. Method: live DOM inspection via an actual browser session
(not just static HTML grep, since focus/ARIA behavior needs a real DOM), plus source
inspection to find exact fix locations. This is a targeted pass on the highest-value
checks, not a full axe-core/WAVE automated scan — see "not verifiable" for what a
proper automated + screen-reader pass would still need to cover.

## 🟠 High — FAQ accordion toggle buttons have zero visible focus indicator for keyboard users

**Evidence:** `components/blog/FAQSection.tsx:49`:
```tsx
className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-text-high hover:text-primary transition-colors focus:outline-none"
```
`focus:outline-none` removes the browser's default focus ring entirely, and the only
other state-change class is `hover:text-primary` — a **hover**-only style that a
keyboard user tabbing through the page never triggers. Result: a sighted keyboard
user (or anyone using switch-access/voice-control that relies on visible focus) has
**no way to see which FAQ question is currently focused** when tabbing through the
page. This is a direct WCAG 2.4.7 (Focus Visible) failure.

**Why High, not Medium:** `createFAQSchema()`/`ContactFAQ`/`FAQSection` is used
broadly — confirmed FAQ content and schema present on the homepage, `/contact`,
region pages, and commercial pages (Segment 3) — so this isn't a one-page issue,
it's a component used across a large fraction of the site's total pages, and FAQ
accordions are exactly the kind of interactive element keyboard users need to
operate to reach content sighted mouse users get by default.

**Fix:** replace `focus:outline-none` with a visible focus style, e.g.
`focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary` (or a
`focus:ring-2 focus:ring-primary` pattern, consistent with what's already used
elsewhere in the codebase — see the calculator inputs below, which at least change
border color on focus).

## 🟡 Medium — calculator form inputs have visually-present labels with no programmatic association

**Evidence:** live DOM check on `/position-sizing-calculator` — all 8 `<label>`
elements (Account Size, Risk Type, Risk Per Trade, Leverage, Direction, Entry Price,
Stop-Loss Price, Target Price) have **neither** a `for` attribute **nor** wrap their
corresponding `<input>`:
```
{ text: "Account Size ($)", hasFor: false, wrapsInput: false }
{ text: "Risk Per Trade (%)", hasFor: false, wrapsInput: false }
... (6 more, same pattern)
```
Root cause, exact location: `components/tools/PositionSizingCalculator.tsx:172-176`:
```tsx
<label className="...">Account Size ($)</label>
<input type="number" value={accountSize} onChange={...} .../>
```
No `htmlFor`/`id` pair, no wrapping.

**Why it matters:** a sighted mouse user never notices — the label sits visually
next to the field and reads fine. A screen-reader user tabbing into that input hears
only *"number, edit text, one thousand"* with no indication of what the number
represents, because the browser's accessibility tree has no programmatic link
between the label text and the input. This is a WCAG 1.3.1 (Info and Relationships)
/ 4.1.2 (Name, Role, Value) failure, and since this is a **calculator whose entire
value proposition is entering the right numbers into the right fields**, it's a
meaningfully worse experience here than on a typical form.

**Scope:** confirmed on Position Sizing Calculator specifically (live-tested); the
same component pattern (`<label>` + sibling `<input>`, no `for`/`id`) is a
reasonable bet for the other two calculators (`LeverageTradingCalculator.tsx`,
`LiquidationPriceCalculator.tsx`) given they share the same `outline-none` styling
convention (see below), but that's inference from the styling grep, not a live
DOM check on those two pages — flagging as likely-but-not-directly-confirmed.

**Fix:** add matching `id`/`htmlFor` pairs (or wrap each `<input>` in its `<label>`)
across all three calculator components.

## 🟡 Medium — 4 footer social icon-links have no accessible name (addendum, found during Segment 9 mobile testing)

**Evidence:** live DOM check of the footer's social-icon row: `t.me/yagacalls`
(Telegram), `x.com/Yagacalls`, the Binance Square profile, and
`linkedin.com/company/yagacalls` are each rendered as a bare `<a href="...">` wrapping
only an inline `<svg>` — no `aria-label`, no `title`, no visually-hidden text, and no
`<img alt="...">` (which would have supplied a name the way the header logo does).
```html
<a href="https://t.me/yagacalls" class="w-8 h-8 flex items-center justify-center rounded-full ..."><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">...</svg></a>
```
A screen reader announces each of these as a bare "link" with no indication of
destination or purpose — a real WCAG 2.4.4 (Link Purpose) / 4.1.2 failure, and it's
in the footer, so it repeats on every page that shares the footer (i.e. the whole
site).

**Fix:** add `aria-label="Yaga Calls on Telegram"` (etc., one per icon) to each anchor.

## 🟢 Low — no skip-to-content link

**Evidence:** searched the homepage's rendered HTML for a "skip to content" /
"skip navigation" link (the standard pattern, usually visually-hidden-until-focused,
placed as the first focusable element in `<body>`): none found. A keyboard user has
to tab through the full header/nav on every single page before reaching main
content.

**Fix:** add one visually-hidden-until-focused anchor at the top of `app/layout.tsx`'s
body linking to a `#main-content` id on the `<main>` element — a standard, low-effort
pattern.

## ✅ Verified clean

- **`lang="en"` is correctly set** on `<html>` — confirmed live: `<html lang="en" class="dark">`.
- **Lightweight color-contrast spot-check found no violations** among sampled body
  text/label elements on the calculator page (computed-style contrast ratios all
  ≥4.5:1 against their resolved background in the sample taken). **Important
  caveat, stated plainly:** this was a targeted script sampling `<p>`, `<label>`,
  and a couple of utility-class selectors on one page — it is *not* a substitute for
  a full axe-core/WAVE scan across all page templates, and a `[]` (no violations)
  result from a hand-rolled script carries less confidence than a purpose-built
  tool's output. Treat this as "no red flags in a quick sample," not "contrast is
  fully verified site-wide."

## ℹ️ Not verifiable in this environment / needs a dedicated follow-up pass

- **Full automated a11y scan (axe DevTools / Lighthouse accessibility score)** across
  every page template — this environment can inspect the live DOM directly (as done
  above) but doesn't have axe-core wired in to run its full rule set. Recommend
  running the axe DevTools browser extension or `https://pagespeed.web.dev`'s
  accessibility score across the homepage, a blog post, a region page, a commercial
  page, and all 3 calculators — that'll catch anything beyond the two confirmed
  issues above (color contrast at scale, ARIA misuse, missing alt text edge cases
  beyond Segment 2's sample, etc.).
- **Real screen-reader pass** (VoiceOver/NVDA/JAWS) — needs actual assistive
  technology software, not available here. The two confirmed findings above
  (missing focus indicator, unassociated labels) are exactly the kind of thing a
  real screen-reader pass would surface loudly, so fixing those first is a good use
  of a follow-up screen-reader session's time.
- **Full keyboard-only navigation walkthrough** of the entire site (not just the one
  component checked) — confirmed the FAQ-toggle focus-visibility gap exists in code
  and is used broadly, but didn't tab through every single page template start to
  finish. Worth doing once the above fixes ship, as a verification pass.
- **Touch target sizing on mobile** — cross-referencing to Segment 9 (UI/UX), which
  covers responsive/mobile-specific checks including this.

---
**Segment 8 tally (updated after Segment 9 addendum): 0 🔴 · 1 🟠 High · 2 🟡 Medium · 1 🟢 Low · 3 ℹ️ · 2 clean checks confirmed (one with an explicit confidence caveat)**
