# Segment 12 — Analytics, Tracking & Measurement

Checked: 2026-08-26. Method: traced the site's conversion-tracking code path
end-to-end, from the CTA button's click handler through to the API route it calls,
since that's the one piece of this segment fully verifiable from source code rather
than requiring dashboard access.

## 🟠 High — the site's own custom conversion-tracking endpoint is a no-op stub; Telegram CTA clicks are not actually recorded anywhere

**Evidence — traced the full path:**

1. `components/shared/CTAButton.tsx:37-55` — every CTA button site-wide that links to
   a `t.me` URL fires a `POST /api/track/telegram` on click, tagged as a
   `telegram_click` conversion event with a label and the page path. This is
   deliberate, purpose-built conversion-tracking code — someone clearly intended
   for Telegram click-throughs (the site's actual primary conversion action, per
   Segment 7) to be measured.
2. `app/api/track/telegram/route.ts` — the endpoint that receives it:
```ts
export async function POST(request: Request) {
  const { event, label, path } = body;
  // Server-side logging for internal analytics
  console.log(`[CONVERSION TRACKING] Event: ${event}, Label: ${label}, Path: ${path}, Timestamp: ${new Date().toISOString()}`);
  // This endpoint currently does not send messages to Telegram as no bot is integrated.
  // It is prepared for future integration with analytics providers or a manual alert system.
  return NextResponse.json({ success: true });
}
```
   **This is a `console.log` and nothing else.** No database write, no forwarding to
   GA4/GTM, no webhook, no alert. The code comment confirms this directly: "prepared
   for future integration" — i.e., the integration was never finished.
3. **Confirmed this data doesn't reach Google Analytics/GTM either**: searched the
   entire codebase for `window.dataLayer` pushes (the mechanism that would feed a
   custom event like this into GTM/GA4) — the only file referencing `dataLayer` at
   all is `app/layout.tsx`, and that's just the GTM container's own initialization
   snippet, not an event push. `CTAButton.tsx`'s click handler calls `fetch()` only,
   never `dataLayer.push()`.

**Net effect: right now, nobody can answer "how many people clicked Join Telegram,
from which page, this week" from any system this codebase controls.** Every click
produces a log line on the VPS that (per Segment 14's PM2/log-rotation note) likely
isn't being actively monitored or retained, and then the data is gone. This is the
site's core business conversion metric, and the purpose-built tracking
infrastructure for it currently does nothing durable.

**Caveat, stated fairly:** it's possible GTM has its own separate Auto-Event Click
Trigger configured directly in the Google Tag Manager web dashboard (listening for
clicks on `a[href*="t.me"]` independent of this custom endpoint) — that configuration
lives in Google's UI, not in this repo, so I can't confirm or rule it out from code.
**Action needed from you:** check the GTM container (`GTM-M824DP22`) dashboard for
any trigger tracking Telegram link clicks. If one exists, the GA4 side may actually
be fine and only the custom `/api/track/telegram` endpoint needs finishing (or
removing, if it's redundant). If nothing exists there either, this is a genuine
total blind spot on primary conversions.

**Fix, in order of effort:** (1) minimum viable — write the event to a database
table or forwarding webhook instead of just `console.log`; (2) better — also call
`window.dataLayer.push({event: 'telegram_click', ...})` in `CTAButton.tsx` so it
flows into GA4 as a real, queryable conversion event alongside whatever GTM already
captures automatically.

## ✅ Verified clean

- **Single GTM container, no duplicates**: only one reference to a GTM ID
  (`GTM-M824DP22`) anywhere in `app/`, defined once in `app/layout.tsx` and loaded
  via `next/script`'s `afterInteractive` strategy (confirmed non-blocking in
  Segment 5). No leftover/duplicate old GA snippets, no second GTM container, no
  conflicting installs found.
- **GTM loads on every page** by construction — it's in the root layout that wraps
  every route, not injected per-page (so no risk of it silently missing on some
  templates the way a per-page-copy-pasted snippet could).

## ℹ️ Not verifiable in this environment

- **The actual GTM container's tag/trigger/variable configuration** — lives entirely
  in Google's dashboard, not in this codebase. This is the single most important
  open question from this segment (see the caveat above) and needs your GTM login
  to resolve.
- **GA4 property configuration, conversion goals, and whether Search Console is
  linked to it** — requires GA4/GSC dashboard access.
- **UTM parameter survival through navigation** — didn't find any campaign-link
  infrastructure in the codebase to test against (no UTM-aware components found);
  if campaigns are run, worth confirming UTM params aren't stripped by any redirect
  in `next.config.ts`'s `redirects()` block (checked in Segment 1 — none of the
  current redirects would strip query strings, but this wasn't specifically
  campaign-tested).
- **Real historical conversion/traffic data** — obviously requires dashboard access
  this environment doesn't have.

---
**Segment 12 tally: 0 🔴 · 1 🟠 High · 0 🟡 · 0 🟢 · 4 ℹ️ (1 with a clear action-needed-from-you resolution path) · 2 clean checks confirmed**
