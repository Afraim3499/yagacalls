# Segment 15 — Legal / Compliance

Checked: 2026-08-26. **Framing note**: I'm reporting factual, verifiable technical
observations (what scripts/cookies fire, what the privacy policy does and doesn't
say, what mechanisms exist or don't) — not legal advice or a definitive compliance
verdict. Where a finding touches GDPR/CCPA/ADA, treat it as "here's what a lawyer
reviewing this would want to look at," not a legal conclusion.

## 🟠 High — no cookie-consent mechanism exists at all, while the site actively markets to EU/UK regions and sets non-essential cookies immediately on load

**Evidence:**
- Searched the entire `components/` tree for any cookie-consent/GDPR-banner
  component (`CookieConsent`, `CookieBanner`, `gdpr`, etc.) — **zero matches**. No
  consent UI exists anywhere in the codebase.
- Confirmed (Segment 6, re-checked here) the `ab_bucket` A/B-testing cookie is set
  on **every** page load, unconditionally, before any user interaction.
- Confirmed (Segment 12) Google Tag Manager loads on every page via
  `afterInteractive` — unconditionally, with no consent gate — which is the
  mechanism that would set GA4/advertising cookies once configured in the container.
- The live Privacy Policy's entire cookie disclosure is one passive sentence:
  *"We use basic cookies to understand site performance and maintain session states.
  You can disable cookies in your browser settings."* — a disclosure, not a
  consent request.
- **This isn't a hypothetical edge case for this specific site**: `sitemap.xml`
  (Segment 1) confirms dedicated pages for `/regions/europe`, `/regions/uk`,
  `/regions/germany`, `/regions/switzerland`, `/regions/netherlands` — 5 of the
  site's 13 region pages explicitly target EU/UK/EEA-adjacent audiences by name.

**Why this is worth a legal review, stated factually:** GDPR and the ePrivacy
Directive (and UK GDPR post-Brexit) generally require *prior opt-in consent* before
setting non-essential cookies (analytics, A/B-testing, advertising) for EU/UK
visitors — a passive "you can disable cookies in your browser" notice is generally
understood not to satisfy that requirement. A site that has dedicated marketing
pages built specifically for EU/UK regions and zero consent mechanism is a
combination worth a deliberate legal look, not an incidental oversight to leave as-is.

**Recommended next step:** this is a legal/compliance decision, not a code fix I
should make unilaterally — flagging for your (or counsel's) call on what consent
mechanism to implement (a standard cookie-consent banner blocking GTM/non-essential
cookies until accepted is the common pattern).

## 🟡 Medium — the Privacy Policy has no GDPR-specific data-subject-rights language

**Evidence:** read the complete live Privacy Policy text (it's short — 4 sections:
"Information We Collect," "How We Use Information," "Data Sharing," "Cookies").
Searched it directly for GDPR/CCPA-standard rights language (`right to access`,
`right to erasure`/`deletion`, `data subject`, `GDPR`, `CCPA`, `California`) — **zero
matches** for any of it. The policy states what data is collected (usage data,
Telegram usernames, crypto transaction IDs) and that it isn't sold to third parties,
but doesn't tell a visitor how to request access to, correction of, or deletion of
their own data, doesn't name a legal basis for processing, and doesn't mention data
retention periods or international transfer safeguards.

**Fix:** again, a legal-review item rather than something to code around — but
factually, a privacy policy for a site actively marketing to EU/UK visitors
typically needs an explicit data-subject-rights section to be considered complete
under GDPR.

## ℹ️ Cross-reference, not re-scored — accessibility findings carry real legal exposure too

Segment 8 found a confirmed WCAG 2.4.7 failure (no visible focus indicator on FAQ
accordions, used site-wide) and a confirmed WCAG 4.1.2 failure (unlabeled footer
social icon-links, also site-wide). ADA-based website-accessibility litigation
against commercial sites in the US is common and specifically targets exactly this
class of finding (missing focus indicators, unlabeled interactive elements, form
labels not programmatically associated). Not re-scoring these here — they're fully
detailed in `08-accessibility.md` — just flagging that fixing them serves both the
UX and the legal-exposure angle simultaneously, which may help prioritize them.

## ✅ Verified clean

- **Privacy Policy correctly discloses the specific categories of data actually
  collected** (usage/IP/device data, Telegram usernames, crypto transaction IDs) —
  read against what the site's actual functionality does (Telegram-based onboarding,
  crypto payment verification per Segment 7) and found no contradiction — the
  policy's factual claims match the site's real data flow as far as this audit can
  observe it.
- **No sale/trade of personal data is claimed**, and no evidence found in the
  codebase contradicting that (no third-party ad-network pixels or data-broker
  integrations found beyond GTM/GA4 and the site's own conversion tracking).
- **Legal pages are present, linked, and reachable**: Privacy Policy, Terms of
  Service, Risk Disclosure, and Disclaimer all exist, are linked from the footer
  (confirmed site-wide since the footer is shared), and all return `200` (re-confirmed
  from Segment 1's link-integrity sweep).
- **Financial-risk disclaimers are pervasive and consistent** (re-confirmed from
  Segment 11) — "Educational content only," "does not constitute financial advice,"
  and "no signal provider can guarantee profit" appear consistently across dozens of
  pages, which is a meaningfully protective pattern for a crypto-signals business
  from a consumer-protection standpoint, whatever the cookie-consent gap above.

## ℹ️ Not verifiable in this environment

- **Definitive legal compliance verdict** — genuinely requires a lawyer, not a code
  audit; everything above is "here's what's technically observable," not a ruling.
- **Terms of Service completeness** (governing law/jurisdiction clause, age
  restriction) — searched for common clauses and found no explicit "18+"/age-gate or
  governing-law statement in the Terms page's text; noting this factually rather
  than as a scored finding, since whether it's *required* depends on jurisdiction
  and business structure a code audit can't determine.
- **Whether any US state-specific disclosures are required** given the "Global"
  `areaServed` claim in the Organization schema and no US-region-specific page (there
  IS a `/regions/usa` page) — another item for counsel, not code.

---
**Segment 15 tally: 0 🔴 · 1 🟠 High · 1 🟡 Medium · 0 🟢 · 1 ℹ️ cross-reference · 3 ℹ️ not-verifiable · 4 clean checks confirmed**
