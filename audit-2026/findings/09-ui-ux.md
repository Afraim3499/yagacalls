# Segment 9 — UI/UX Audit

Checked: 2026-08-26. Method: live DOM/layout inspection via a real browser session at
mobile (375×812) and tablet (768×1024) viewports. **Tooling limitation, stated
upfront**: the browser pane in this environment runs backgrounded/non-compositing —
`computer` screenshot and click actions time out ("the Browser pane is not displayed,
so the page is not compositing frames"). All checks below used direct DOM
measurement and JS-dispatched clicks instead, which work reliably headlessly, but
**no visual screenshots could be captured this session** — see "not verifiable."

## 🟡 Medium — mobile menu toggle has no `aria-expanded` state

**Evidence:** confirmed live — clicking the hamburger button
(`<button aria-label="Toggle menu" class="md:hidden ...">`) correctly opens the
mobile nav and reveals the full menu (verified: visible link count jumped from 4 to
92, including all 8 primary nav items — Results, Reviews, Pricing, Method, Proof,
Academy, Blog, Contact). **The menu itself works correctly** — this isn't a broken
feature. But the button carries only `aria-label="Toggle menu"` with no
`aria-expanded="true|false"` attribute, before or after the click. Screen reader
users get no programmatic signal of whether the menu is currently open or closed —
they have to infer it from context after activating it.

**Fix:** add `aria-expanded={isOpen}` to the toggle button, wired to whatever state
variable already controls the menu's visibility (it clearly exists, since the menu
does open/close correctly).

## 🟢 Low-confidence, not filed as a violation — most "small" touch targets are inline text links, which are the standard exception

**Evidence:** an initial scan found 75 of 98 interactive elements on the mobile
homepage under the 44×44px touch-target guideline. On inspection, the large
majority are inline text links inside body copy or link lists (e.g. "Position Sizing
Calculator →" at 237×16, "View Setup logic →" at 126×16) — WCAG 2.5.5 (Target Size,
AAA) explicitly exempts links that are "in a sentence or block of text," so these
aren't violations under the standard reading of that guideline. Standalone `<button>`
elements checked separately: only 1 button exists on the homepage and it's
adequately sized. **Not filing this as a defect** — flagging only that a manual
visual pass (screenshots aren't available this session — see below) would be the
right way to confirm none of these read as "should be tap-friendly" in practice
despite being technically-exempt inline links, since bounding-box measurement alone
can't fully judge visual intent.

## ✅ Verified clean

- **Wide comparison table on mobile is correctly contained**: the "Avoid the Signal
  Group Trap" homepage table (423px wide, wider than the 375px mobile viewport) sits
  inside a `<div class="overflow-x-auto">` wrapper — confirmed the page itself has
  **no** horizontal scroll (`document.documentElement.scrollWidth === window.innerWidth`
  at 375px), only the table scrolls internally. This is exactly the right pattern.
- **No horizontal overflow at tablet width either**: checked `/pricing` at 768×1024 —
  `scrollWidth` (753px) stays under viewport width, zero elements found exceeding
  viewport bounds. Tablet is the most commonly neglected breakpoint and it's clean
  here.
- **Mobile navigation is functional**, not just present — confirmed via an actual
  click-and-verify test (not just checking the button exists): the toggle reveals
  the complete primary nav, not a partial/broken menu.
- **`Organization` schema's `sameAs` already correctly includes all 4 real social
  profiles** (Telegram, X, LinkedIn, Binance Square) found in the footer — cross-
  referencing Segment 4's finding about the *author-level* `Person` `sameAs` being
  self-referential: that finding stands (it's about the 8 individual authors, not
  the organization), but this confirms the org-level entity itself is already doing
  this correctly, so the pattern to replicate for authors already exists in the
  same codebase.

## ℹ️ Not verifiable in this environment

- **Visual screenshots** — the browser pane here doesn't composite frames in the
  background state this session ran in, so I could not visually confirm spacing,
  alignment, color application, or typography rendering by eye — everything above
  was verified via DOM measurement (accurate for layout/overflow/functional
  questions, but not a substitute for looking at it). **Recommend**: open the site
  yourself at a few breakpoints, or ask me to re-run this with the pane actively
  displayed if that's achievable in a different session context.
- **Visual consistency across templates** (spacing rhythm, button styling, color
  application matching a design system) — this needs eyes-on comparison across
  page types, which the DOM-measurement approach used here can't judge.
  - **Dark mode**: site ships `class="dark"` on `<html>` unconditionally — appears
    to be dark-only by design (no toggle found), not a light/dark switch to test.
  - **Loading states/skeletons** — not exercised; would need to throttle network and
    observe in-flight states, which requires the visual pane.
- **Full visual pass across all page templates at all 3 breakpoints** — checked 2 of
  many templates at mobile+tablet. If you want the same overflow/functional check
  run across region pages, commercial pages, blog posts, and academy pages
  specifically, that's a mechanical extension of what was done here — say so and
  I'll run it.

## ℹ️ Info — closes the loop on a Segment 5 finding

Confirmed `partner@yagacalls.com` appears as plain visible link text in the footer
(`"partner@yagacalls.com"` in the visible-links list captured during mobile nav
testing) — this is what triggers Cloudflare's automatic email-obfuscation script
flagged as a minor render-blocking resource in Segment 5. Not a new issue, just
confirms the root cause of that earlier finding.

---
**Segment 9 tally: 0 🔴 · 0 🟠 · 1 🟡 Medium · 0 🟢 (one observation explicitly not filed as a defect) · 3 ℹ️ · 4 clean checks confirmed**
