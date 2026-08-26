# Segment 7 — Forms, Conversion Points & Functional QA

Checked: 2026-08-26. **Scope correction made during this segment**: there is no
on-site contact/lead form anywhere on this site — confirmed by reading
`app/contact/page.tsx` in full. "Contact" is entirely a Telegram hand-off flow
(manual onboarding via Telegram DM, no HTML form, no POST endpoint for
inquiries). So this segment pivots to what the actual conversion mechanism is: the
Telegram CTA links, and the three interactive calculator tools. No real submission
was fired against anything with a side effect, per the rules I operate under — the
findings below are from reading source, live GET requests, and interacting with
client-side-only calculator state.

## 🟠 High — the official conversion CTA sends visitors to a Telegram identity with zero "Yaga Calls" branding, undermining the site's own anti-scam warnings

**Evidence:** every "Join"/"Contact" CTA across the homepage, `/contact`, `/pricing`,
and `/regions/uae` (checked all four) consistently link to the same 3 Telegram
destinations:
```
https://t.me/+JFf8kBf01mg3OTg1   (private invite link)
https://t.me/yagacalls            (public channel)
https://t.me/yagacalls47          (DM contact)
```
Fetched each live and inspected Telegram's own Open Graph preview data:
- `t.me/+JFf8kBf01mg3OTg1` and `t.me/yagacalls` both preview as **"Yaga Calls Result"**
  with description: *"You will see the success of yaga and his followers here. To
  join High Table dm @yagacalls47."*
- `t.me/yagacalls47` — the account the above two explicitly funnel every visitor
  toward for actual onboarding — previews as **"Baba Yaga"**, with no mention of
  "Yaga Calls," "High Table," or the site's brand anywhere in its profile metadata.

**Why this is High, not Low:** the site's own `/contact` page FAQ (in
`app/contact/page.tsx:118-121,135-136`) explicitly warns visitors: *"How do I avoid
fake Yaga Calls Telegram accounts? Use only official links from the Yaga Calls
website... Avoid random DMs, duplicate groups, unofficial admins."* and *"How do I
know I am contacting the official Yaga Calls Telegram? ...Avoid random Telegram DMs,
copied logos, fake admins, unofficial payment requests."* A visitor who reads that
warning and then clicks the site's own official CTA lands on an account/channel
branded **"Baba Yaga"** referencing something called **"High Table"** — neither of
which visually or textually confirms "this is really Yaga Calls" at the exact moment
a cautious visitor is looking for that confirmation. This is precisely the kind of
mismatch the FAQ tells people to watch out for, sitting on the site's own primary
conversion path. I'm not asserting anything about legitimacy — I have no way to
verify that from here, and it may be an entirely intentional operational choice
(internal team handle, codename, etc.) — but from a pure conversion-trust
standpoint, it's a real, measurable friction point worth a deliberate decision
rather than leaving it as-is by default.

**Recommended fix (pick based on what's actually true):** if `@yagacalls47` /
"Baba Yaga" is legitimately the team, add "Yaga Calls" to that account's Telegram
display name/bio so it visually confirms on arrival; if the operational reality is
more complex than that, at minimum the site's own FAQ copy warning visitors about
"fake admins" and "unofficial" contacts is currently in tension with its own
official flow, and that's worth resolving one way or the other.

## 🟢 Low — Position Sizing Calculator's auto-generated summary sentence is missing a `$` sign

**Evidence:** live-tested the calculator with two different input sets (defaults,
then Account=$5000/Leverage=5x) and confirmed the underlying math is 100% correct
both times (Risk Amount, Stop Distance, Position Size, Notional Value, Margin
Required, R:R ratio, Potential Reward all recalculated correctly on every field
change — see clean-checks section below). The one bug: the plain-English summary
line at the bottom reads:
```
"With a $5000 account and 50 risk, an entry at $100 with a $95 stop-loss requires an estimated 10.00 units."
```
"50 risk" should be "$50 risk" — every other dollar figure in the same sentence
correctly carries a `$` prefix.

**Root cause, exact line:** `components/tools/PositionSizingCalculator.tsx:372`:
```tsx
"With a ${accountSize} account and {results.riskAmount.toFixed(0)} risk, an entry at ${entryPrice}..."
```
The `{results.riskAmount.toFixed(0)}` interpolation is missing the literal `$` that
`${accountSize}`, `${entryPrice}`, and `${stopLoss}` all have. One-character fix.
Confirmed via grep this exact pattern doesn't recur in the other two calculator
components (`leverage-trading-calculator`, `liquidation-price-calculator`) — isolated
to this one file.

## ✅ Verified clean

- **Position Sizing Calculator math is genuinely correct and genuinely live** (not a
  static mockup): tested twice with different inputs.
  - Defaults (Account $1000, Risk 1%, Leverage 1x, Entry $100, Stop $95, Target $115)
    → Risk Amount $10.00 ✓, Stop Distance $5.00 ✓, Position Size 2.0000 units ✓,
    Notional $200.00 ✓, Margin $200.00 ✓, R:R 1:3.00 ✓, Potential Reward $30.00 ✓ —
    every value hand-verified against the actual formula (`Units = Risk ÷ Stop
    Distance`, etc.).
  - Changed inputs (Account $5000, Leverage 5x) → Risk Amount $50.00 ✓, Position
    Size 10.0000 units ✓, Notional $1000.00 ✓, Margin Required $200.00 ✓ (correctly
    divided by the new 5x leverage), R:R and Reward scaled correctly ✓. The
    calculator recalculates live off real field state, not hardcoded display values.
- **Telegram links are internally consistent** across all pages checked (homepage,
  contact, pricing, a region page) — same 3 URLs everywhere, no stray/different
  invite links found on any of the 4 pages sampled.
- **The `llms.txt` Telegram link and the live-site Telegram link, while different
  invite-hash strings, resolve to the identical destination** (verified via matching
  Open Graph preview data) — initially looked like a potential broken/mismatched
  link between the AI-crawler file and the live site, but checking the actual
  destination content (not just the URL string) showed they're the same group. Worth
  recording that this was checked and is *not* a bug, since it looked like one at
  first glance.
- **Core API routes respond without erroring**: `/api/prices`, `/api/og`,
  `/api/indexnow` all return `200` on a live GET. (`/api/track` alone 404s on a bare
  GET, but that's expected — it's a tracking POST endpoint / the real handler lives
  at the nested `/api/track/telegram`, not at the parent path.)

## ℹ️ Not verifiable in this environment / intentionally not tested

- **Actual Telegram bot/onboarding flow past the DM hand-off** — once a visitor DMs
  `@yagacalls47`, everything from there is manual human/Telegram-bot interaction
  outside this site's code; not something I can test from here.
- **Leverage Trading Calculator and Liquidation Price Calculator** — confirmed their
  source doesn't share the Position Sizing Calculator's specific `$`-sign bug, but I
  did not do the same live two-input recalculation test on these two that I did for
  Position Sizing. Worth a quick follow-up pass if you want the same depth of
  verification on all three tools rather than one.
- **Any rate limiting on `/api/track` or `/api/track/telegram`** — didn't probe this
  with repeated requests since that risks generating real tracking noise in your
  analytics without asking first.

---
**Segment 7 tally: 0 🔴 · 1 🟠 High · 0 🟡 · 1 🟢 Low · 3 ℹ️ · 4 clean checks confirmed**
