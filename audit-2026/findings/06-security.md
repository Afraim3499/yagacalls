# Segment 6 — Security

Checked: 2026-08-26. Scope note: `AUDIT_STATUS.md` §4 already tracks 9 detailed,
still-open critical security items for the **CRM** (`yaga-content-system/crm-app`)
and the **content-system repo** — those are re-confirmed below at a glance, not
re-audited from scratch (no reason to duplicate that existing work). The new findings
in this segment are specific to the **public yagacalls.com site** (this repo), which
hadn't been checked from a pure security-header/dependency angle before.

## 🟠 High — the live site sends zero hardening HTTP headers

**Evidence:** full response header dump on the homepage, filtered for every standard
security header:
```
Strict-Transport-Security  → absent (no HSTS at all)
Content-Security-Policy    → absent
X-Frame-Options             → absent
X-Content-Type-Options      → absent
Referrer-Policy              → absent
Permissions-Policy           → absent
X-Powered-By                → "Next.js"  (present — an info-disclosure header that shouldn't be)
```
This is the full set — not a partial gap, **none** of the standard hardening headers
are being sent, at either the Next.js app layer or the Cloudflare edge in front of it.

**Why it matters concretely, not just "best practice":**
- **No HSTS** — first-time visitors (or anyone whose browser hasn't cached a prior
  HSTS directive) can be downgraded to HTTP by a network-level attacker (evil-twin
  Wi-Fi, ARP spoofing) even though the server itself redirects HTTP→HTTPS correctly
  (confirmed in Segment 1) — HSTS is what closes that specific gap.
- **No `X-Frame-Options`/frame-ancestors CSP** — the site can be embedded in an
  `<iframe>` on any third-party page, enabling clickjacking attacks against any
  interactive element (contact forms, affiliate links, pricing CTAs).
- **No CSP at all** — no defense-in-depth against XSS if any injection point is ever
  found elsewhere in the app; CSP is the standard mitigation layer that's currently
  entirely absent.
- **No `X-Content-Type-Options: nosniff`** — browsers can MIME-sniff responses,
  opening a (minor but real) content-type confusion attack surface.

**Fix:** add a `headers()` function to `next.config.ts` (same file already handling
`redirects()` — Segment 1) setting these site-wide, and/or configure them at the
Cloudflare edge (Transform Rules / a Cloudflare-managed security header set) since
that's what's actually fronting every response (see Segment 14). Also set
`poweredByHeader: false` in the same `next.config.ts` `NextConfig` object to stop
leaking `X-Powered-By: Next.js` — that's a one-line change in a file already read
this session.

## 🟠 High — production dependencies carry 4 high-severity, actively-fixable vulnerabilities

**Evidence:** `npm audit --omit=dev` run live against this repo's actual
`package.json`/lockfile:
```
next: 16.2.4 installed — fix available: 16.3.3
4 high-severity advisories, rolled up from 10 listed Next.js CVEs including:
  - SSRF in Server Actions on custom servers
  - SSRF via attacker-controlled rewrite destination hostname
  - Unauthenticated disclosure of internal Server Function endpoints
  - Cache confusion of response bodies (2 related CVEs)
  - DoS in Server Actions / Edge runtime / Image Optimization API (SVG)
  - Middleware/Proxy bypass (2 CVEs)
+ postcss <=8.5.22 (bundled via next) — XSS via unescaped </style>, 3 separate
  source-map path-traversal/arbitrary-file-read CVEs
+ sharp <0.35.0 — inherited libvips CVEs (image processing)
```
`npm audit fix --force` resolves all 4 by upgrading to `next@16.3.3` (flagged as
outside the currently pinned dependency range) and `sharp@0.35.3` (flagged as a
breaking change) — so this needs a deliberate upgrade-and-test pass, not a blind
auto-fix, but it shouldn't be left sitting either given the SSRF and
unauthenticated-disclosure items in that list.

**Fix:** schedule a Next.js 16.3.3 upgrade with a full regression pass (build +
`scripts/validate-seo.js` + manual smoke test of forms/API routes given the SSRF/
Server-Actions-specific CVEs in the list), rather than `--force`-upgrading straight
to production.

## 🟢 Low — `ab_bucket` A/B-test cookie has no `Secure` or `SameSite` attribute

**Evidence:** `Set-Cookie: ab_bucket=A; Path=/; Expires=...; Max-Age=2592000` — no
`Secure`, `HttpOnly`, or explicit `SameSite` flag. Low severity because the cookie
only carries an A/B bucket label (not a session/auth token) and modern browsers
default unset `SameSite` to `Lax`, but `Secure` costs nothing to add given the site
is HTTPS-only anyway, and it's a one-line fix wherever this cookie is set.

## ✅ Verified clean

- **No exposed `.env`, `.git/config`, `.git/HEAD`, `package.json`, or `next.config.js`**
  at their literal public URLs — all return real `404`s, not the file contents. This
  is the exact class of exposure flagged generically in the on-page checklist and
  it's clean here.
- **TLS certificate is valid and current**: `CN=yagacalls.com`, issued by Google
  Trust Services (via Cloudflare), valid `2026-08-07` through `2026-11-05` — not
  expiring imminently, and Cloudflare auto-renews so this isn't something that needs
  manual tracking.
- **HTTP→HTTPS redirect works correctly** (re-confirmed from Segment 1) — both host
  variants force TLS via `301`.

## Re-confirmed from `AUDIT_STATUS.md` (not re-audited in full — cross-referencing only)

- **Item 8** (untracked secret-adjacent files sitting one `git add -A` away from
  being committed) — **still open, confirmed via live `git status` this session**:
  `hightable_exports/`, `scrape_all_free_members.py`, `scrape_deep_subscribers.py`,
  `scrape_remaining_to_5109.py`, and the bare-named `yaga client relation bot` file
  are all still untracked in this exact repo. **New since the last audit pass:** two
  additional untracked CSV files not previously flagged —
  `searched_with_rising-searches_Worldwide_20260813-1427_20260814-1427.csv` and
  `searched_with_top-searches_Worldwide_20260813-1427_20260814-1427.csv` — worth
  adding to the same `.gitignore` fix. Confirmed (pattern-matched, value not printed
  here) that the `yaga client relation bot` file does contain a Telegram-bot-token-
  shaped credential on disk right now.
- **Items 1-7, 9** (Supabase/SSH/CRM-password rotation, hardcoded Postgres
  connection string across 13 `yaga-content-system` files, git-history secret
  scrubbing, CRM's client-side-only auth, 5 unauthenticated CRM API endpoints,
  hardcoded Telegram API credentials) — not re-verified line-by-line this pass
  (that repo's full re-scan timed out mid-command in this environment, and
  `AUDIT_STATUS.md` already documents these in more depth than a quick re-check
  would add). Per that file, these are **still open** — "user has said 'handle
  later' each time it's come up." Flagging again here only because a "full
  technical audit, don't underestimate small things" scope should surface them
  explicitly rather than assume you'll cross-reference a different file.

## ℹ️ Not verifiable in this environment

- **Rate limiting / bot-abuse protection** on the contact form or any POST endpoint
  — would need to actually submit repeated requests to test, which risks polluting
  real data/notifications; deferred to Segment 7 (Forms) where I'll note it as a
  question rather than fire real submissions without asking first.
- **CORS configuration on any API routes** — this repo's `app/api/` surface (if any
  beyond what's blocked by `robots.ts`'s `Disallow: /api/`) wasn't enumerated this
  pass; worth a dedicated look if there are POST/PUT endpoints beyond static-page
  rendering.
- **WAF / Cloudflare security rule configuration** — requires Cloudflare dashboard
  access, see Segment 14.

---
**Segment 6 tally: 0 🔴 · 2 🟠 High · 0 🟡 · 1 🟢 Low · 3 ℹ️ · 3 clean checks confirmed · 2 pre-existing critical-item groups re-confirmed still open (see AUDIT_STATUS.md)**
