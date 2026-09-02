# Segment 14 — Infrastructure / DevOps

Checked: 2026-08-26. Method: source inspection of the actual deploy tooling in this
repo (`scratch/`), DNS resolution checks, and cross-referencing `AUDIT_STATUS.md`'s
existing tracked security-debt list for what's already known vs. newly found here.

## 🔴 Critical — a live plaintext root SSH password for the production VPS is committed to git and pushed to GitHub, in a file not previously listed in `AUDIT_STATUS.md`'s tracked secret inventory

**Evidence (value intentionally redacted below — do not ask me to reprint it; it's
visible directly in the file if you need to confirm it, and per the same precedent
`AUDIT_STATUS.md` already set for the CRM password, no reason to create a second
plaintext copy of a credential that needs rotating):**

`scratch/deploy_to_vps.js:43-48`:
```js
}).connect({
  host: '167.86.76.229',
  port: 22,
  username: 'root',
  password: '[REDACTED — live plaintext value in the file at this exact line]'
});
```

**Confirmed this is not a local-only/untracked file** — checked directly:
- `git ls-files` confirms it **is tracked**.
- `git log --oneline -- scratch/deploy_to_vps.js` shows **3 commits** touching it.
- `git log origin/main -- scratch/deploy_to_vps.js` confirms **the same 3 commits
  are present on `origin/main`** — this has been pushed to GitHub
  (`github.com/Afraim3499/yagacalls` per `CLAUDE.md`), not just sitting locally.

**Why this is flagged as newly-found rather than a duplicate of an existing item:**
`AUDIT_STATUS.md` §4 item 5 already tracks "secrets already pushed to GitHub" but
names two specific files — `VPS_OPERATIONS_GUIDE.md` and `SYSTEM_DOCUMENTATION.md`.
**This file, `scratch/deploy_to_vps.js`, is not in that list.** It contains the same
class of credential (VPS root SSH access) that item 2 already flags for rotation —
so the *rotation* action item isn't new, but **this specific exposed file is a new
data point**: whoever eventually does the git-history scrub for item 5 needs to
include this file too, or the scrub will be incomplete and the password will still
be recoverable from history even after `VPS_OPERATIONS_GUIDE.md`/`SYSTEM_DOCUMENTATION.md`
are cleaned.

**Fix — reinforcing what `AUDIT_STATUS.md` already recommends, now with a complete
file list**: (1) rotate the VPS root password immediately (this was already flagged
as pending — this finding raises the urgency, since the current password is
confirmed live in a *third* location beyond the two already known), (2) when doing
the git-history rewrite for item 5, include `scratch/deploy_to_vps.js` in the scrub,
(3) longer-term, move deploy credentials to environment variables or an SSH key
(the script already uses the `ssh2` npm package, which supports key-based auth
natively — no reason to be using a password at all) loaded from a `.env` file that's
actually gitignored, not hardcoded in source.

## 🟢 Low — no `ecosystem.config.js`/PM2 process config is version-controlled in this repo

**Evidence:** searched for a PM2 ecosystem file (`ecosystem.config.js` or similar) at
the repo root and two levels deep — none found. The deploy script
(`scratch/deploy_to_vps.js:11`) just runs `pm2 restart yagacalls-web`, implying the
process was defined directly on the VPS at some point (`pm2 start ...`) rather than
via a committed config file.

**Why it matters:** PM2's restart policy, max-memory-restart threshold, log file
paths/rotation, and environment variables for the `yagacalls-web` process currently
exist only on the VPS itself, not in version control — so they're not reviewable,
not reproducible from a fresh server, and not diffable in a PR the way the rest of
the deploy pipeline is. If the VPS were lost or needed rebuilding, this
configuration would need to be reconstructed from memory/SSH history rather than
`git clone` + `pm2 start ecosystem.config.js`.

**Fix:** export the current live PM2 config (`pm2 show yagacalls-web` /
`pm2 ecosystem`) into a committed `ecosystem.config.js`, and point the deploy script
at it explicitly.

## ✅ Verified clean

- **Cloudflare properly fronts both `yagacalls.com` and `www.yagacalls.com`** — DNS
  resolution for both returns Cloudflare's anycast IP ranges (`104.21.x.x`,
  `172.67.x.x`, plus IPv6), not the origin VPS IP directly. The real origin address
  is not exposed via public DNS, which is the correct setup (confirmed separately,
  from the deploy script, that the actual origin is a different, non-Cloudflare IP
  entirely — consistent with Cloudflare properly proxying rather than just hosting
  DNS in "grey cloud" mode).
- **DNS is consistent between apex and `www`** — both resolve to the identical set
  of 4 addresses (2 IPv4 + 2 IPv6), so there's no risk of one hostname pointing at
  stale infrastructure the other doesn't (this is separate from Segment 1's
  *redirect* finding — DNS-level consistency is fine, it's the HTTP-level
  canonicalization that's missing).
- **Deploy pipeline is coherent and does what `VPS_OPERATIONS_GUIDE.md`/`CLAUDE.md`
  describe**: SSH in, `git reset --hard origin/main`, `npm run build` (which per
  `CLAUDE.md` runs `scripts/validate-seo.js` via the `prebuild` hook — confirmed
  actually exists and passes, Segment 1), `pm2 restart`, then trigger a search-engine
  ping pipeline on success. No mismatch found between the documented process and
  the actual script.

## ℹ️ Not verifiable in this environment

- **PM2 process health, memory growth over uptime, restart frequency** — needs live
  VPS access (`pm2 status`, `pm2 logs`).
- **Nginx configuration** (buffer sizes, timeouts, gzip/brotli level, upstream health
  checks) — no Nginx config file found committed in this repo; presumably lives only
  on the VPS. Not reviewable from here.
- **Disk space / log growth** — needs VPS access. Relevant given Segment 6 already
  flagged that conversion-tracking events are currently only reaching
  `console.log` (Segment 12) — if that endpoint gets meaningful traffic, PM2's log
  file is where that's accumulating, and without rotation (unconfirmed either way)
  it grows unbounded.
- **Backup strategy and whether it's tested/restorable** — no backup tooling/config
  found in this repo; if backups exist, they're managed outside version control.
  Worth a direct answer from you on whether this exists at all, since I can't infer
  it from the codebase either way.
- **GitHub Actions (`'.github/workflows/validate.yml'`) current pass/fail status on
  `main`** — attempted via `gh` CLI, not installed in this environment. The workflow
  file itself exists and, per `CLAUDE.md`, runs the same checks as the deploy
  script's `prebuild` hook plus a typecheck; its *current* status on GitHub needs
  checking directly at
  `github.com/Afraim3499/yagacalls/actions`.

---
**Segment 14 tally: 1 🔴 Critical (newly-located instance of an already-tracked credential-rotation item) · 0 🟠 · 0 🟡 · 1 🟢 Low · 5 ℹ️ · 3 clean checks confirmed**
