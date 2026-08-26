# Segment 13 — Cross-browser / Cross-device QA

Checked: 2026-08-26. **Significant tooling limitation, stated upfront and honestly**:
this environment's browser pane runs a single Chromium-based engine in a
backgrounded/non-compositing state — there is no real Safari, Firefox, or Edge
engine available to test against, and screenshot capture doesn't work in this
session (confirmed failing in Segments 5 and 9: "the Browser pane is not displayed,
so the page is not compositing frames"). **This segment cannot deliver genuine
cross-browser rendering verification** — that fundamentally requires either real
browser engines or a service like BrowserStack, neither available here. What follows
is what *is* legitimately checkable without those: server-side response consistency
across simulated user-agents, and known cross-browser-risk patterns in the source.

## ✅ Verified clean — no server-side User-Agent branching that could serve broken content to specific browsers

**Evidence:**
- No `middleware.ts` exists in the repo at all — confirmed via file search — so
  there's no routing-layer logic that could special-case behavior per browser/device.
- Requested the homepage with an iPhone Safari User-Agent string and a desktop Chrome
  User-Agent string: both returned `200`, **identical byte count** (196,310 bytes),
  and identical `<title>`. No UA-sniffing branching found anywhere that could cause
  one browser family to receive different (and potentially broken) markup than
  another.

This rules out the most common *server-side* cause of "works in Chrome, broken in
Safari" bugs (UA-conditional rendering) — but it says nothing about how a given
browser's own CSS/JS engine *renders* that identical markup, which is exactly what
this environment can't test.

## ℹ️ Low-confidence, flagged for manual verification, not filed as a bug

- **`min-h-screen` (Tailwind's `100vh` utility) usage** — present in multiple
  components (e.g. `ArticleLayout.tsx`). Tailwind v4 (confirmed installed version)
  maps this to literal `100vh` by default, not the newer `100dvh`. This is the
  classic source of the iOS Safari bug where `100vh` includes space the visible
  viewport doesn't actually have once the address bar is showing, causing content to
  appear cut off or requiring an extra scroll. **Not filing this as a confirmed
  defect** — modern iOS Safari versions have improved this significantly and it may
  not manifest at all depending on exact layout — but it's a real, well-known
  pattern worth a 30-second check on an actual iPhone.
- **`backdrop-blur`/`backdrop-filter`** used in 24 files — broadly well-supported in
  current Safari/Firefox/Chrome as of 2026, not flagging as a compatibility risk,
  just noting it was checked.

## ℹ️ Not verifiable in this environment — needs real devices or a cross-browser testing service

- **Actual visual rendering in Safari (macOS + iOS)** — the single most valuable
  cross-browser check for a site like this (different font rendering, flexbox/grid
  edge cases, backdrop-filter, form control styling, `<input type="number">` spinner
  behavior on the calculators) and the one this environment fundamentally cannot do.
  **Recommend**: manually open the site in Safari on both a Mac and an iPhone, or
  run it through BrowserStack/LambdaTest if you want this automated.
- **Firefox rendering** — same limitation.
- **Older/low-end Android device performance and rendering** — same limitation; the
  "mobile" viewport tested in Segment 9 emulates viewport dimensions and touch input
  but runs the same Chromium engine, not a genuine low-end-device CPU/GPU profile.
- **Physical device touch/gesture behavior** (pinch-zoom, momentum scroll, virtual
  keyboard interaction with the calculator's `<input type="number">` fields) — needs
  a real touchscreen device.
- **Print stylesheet** — not checked; low priority but genuinely untested either way.

---
**Segment 13 tally: 0 🔴 · 0 🟠 · 0 🟡 · 0 🟢 · 5 ℹ️ (this segment is dominated by hard tooling limitations — see recommendation below) · 1 clean check confirmed**

**Recommendation for this segment specifically**: given the tooling ceiling here, the
highest-value next step isn't more automated checking from this environment — it's
either (a) you spending 15 minutes on a real iPhone/Safari and Android device
clicking through the homepage, pricing page, and one calculator, or (b) wiring up a
BrowserStack/Percy-style visual regression service if this is a recurring concern
worth automating long-term.
