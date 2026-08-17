# CLAUDE.md — Yaga Calls monorepo

This file exists to save the next engineer (or agent) from re-discovering the same
non-obvious things the hard way. It intentionally does not restate what the code
already makes clear — it covers the parts that aren't visible from a quick read.

## What lives where

This repo (`F:\kalababas`, remote `github.com/Afraim3499/yagacalls`) is the **public
marketing/content site**, `yagacalls.com` — Next.js 16 App Router, TypeScript, Tailwind,
fully statically generated (SSG) via `generateStaticParams()` on every dynamic route.

**`yaga-content-system/` is a separate git repo** (its own remote,
`github.com/Afraim3499/yagacontentsystem`), checked out as a subfolder here. Despite the
name, **it is not a CMS for this site.** It's a creator-ops platform: Telegram bot
engines, a content-dispatch pipeline for a team of social creators, and — critically —
**`yaga-content-system/crm-app/` is `crm.yagacalls.com`**, the internal VIP-member/
affiliate CRM (Vite + React SPA + Supabase). If you're looking for the code behind
`crm.yagacalls.com`, that's where it is; it has nothing to do with `app/` in this repo.

There is currently **no `.gitmodules`** wiring `yaga-content-system` up as a real git
submodule of this repo, so a fresh `git clone` of this repo will not pull it in. If you
need it, clone `github.com/Afraim3499/yagacontentsystem` separately into that path.

## Where site content actually comes from

All public-site content — blog posts, academy modules, regional and commercial landing
pages — is **authored directly as TypeScript/TSX/JSON in `content/`** in this repo, not
fetched from `yaga-content-system`, Supabase, or any CMS at build or runtime. There is no
non-engineer editorial workflow: changing copy means editing `content/` and redeploying.

### The regions "shadow content" trap

`content/data/regions.ts` defines 13 region entries with full long-form copy/FAQs. But
**11 of those 13 slugs also have their own static folder** under `app/regions/<slug>/`
(e.g. `app/regions/uae/page.tsx`), and Next.js always resolves a literal route segment
before it falls through to the `app/regions/[slug]/page.tsx` catch-all that reads
`regions.ts`. So for every slug with its own folder, **editing the long-form fields in
`regions.ts` does nothing** — only `slug`, `regionName`, and `relatedRegions` are actually
consumed (by the `RelatedRegions` cross-link widget), everything else is dead weight for
those 11 entries. `regions.ts` is only fully "live" for `middle-east` and `netherlands`,
the two slugs with no folder. See the comment block at the top of `content/data/regions.ts`
for the full breakdown, including which slugs (`gcc`, `russia`) have folders but no
`regions.ts` entry at all.

The same static-folder-shadows-dynamic-route pattern exists for a few `content/data/commercial.ts`
entries (`affiliate`, `free-vs-paid-crypto-signals`, `crypto-signals-with-risk-management`),
but there it's handled correctly — those slugs are explicitly excluded from
`generateStaticParams()`, so there's no orphaned/misleading content for commercial pages.

## Deployment reality

`vercel.json` in both this repo and `yaga-content-system` might suggest Vercel is the
host, but **production actually runs on a self-managed VPS** (PM2 process
`yagacalls-web`, Nginx reverse proxy) — see `VPS_OPERATIONS_GUIDE.md` for details.
Deployment is a manual/scripted SSH pull + `npm run build` + `pm2 restart`
(`scratch/deploy_to_vps.js`), not an automated pipeline. `npm run build` runs
`scripts/validate-seo.js` first via the `prebuild` npm lifecycle hook — that's the one
automated gate that actually runs on every real deploy, since there's no CI wired into
the deploy path itself. `.github/workflows/validate.yml` runs the same checks (plus
typecheck) on every push/PR as an earlier safety net, independent of the deploy script.

## SEO/schema conventions to not regress

- **`app/robots.ts` is the only robots.txt source.** Do not add a static
  `public/robots.txt` back — Next.js resolving both is exactly how the deliberate
  AI-crawler allow-list (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) almost
  shipped inconsistently. `scripts/validate-seo.js` fails the build if `public/robots.txt`
  reappears.
- Prefer the shared helpers in `lib/schema.ts` (`createBreadcrumbSchema`,
  `createFAQSchema`, etc.) over hand-rolling `<script type="application/ld+json">` blocks.
  The helpers guarantee a `name` property on `BreadcrumbList`/`FAQPage`, which Google
  Search Console flags as an "unnamed item" error when missing — this exact bug shipped
  repeatedly (see git log for `fix(schema)` commits) because hand-rolled JSON-LD kept
  omitting it. `scripts/validate-seo.js` scans for this now.
- Any new region/commercial URL referenced in `public/llms.txt`, `public/llms-full.txt`,
  `public/indexing-priority-urls.txt`, `content/strategy/priority-indexing-urls.ts`, or
  `scripts/submit-indexnow.js` must correspond to a real route (`scripts/validate-seo.js`
  checks this) — `/regions/canada` and `/regions/london` were referenced everywhere
  without ever having a page, and were actively submitted to Bing/Yandex's IndexNow API.
- `app/sitemap.ts` derives `lastModified` per route from real git commit history
  (`lib/gitLastModified.ts`) rather than `new Date()` — don't revert to a hardcoded
  "everything changed today, every build" timestamp.

## Security note (as of this writing — verify current state before relying on this)

`crm-app`'s "authentication" is a client-side password check against Supabase using the
public anon key, plus a `sessionStorage` flag — not real auth. Several of its serverless
API endpoints (`api/dispatch.js`, `api/reply-issue.js`, `api/telegram-webhook.js`, cron
endpoints) have no server-side auth check at all. There is also a hardcoded Postgres
superuser connection string in `yaga-content-system/bot_engine_serverless.js` (both the
root and `crm-app`-bundled copies). None of this is specific to this file's scope, but if
you're touching CRM auth or any of those API routes, know that the surrounding security
model needs a real rework, not incremental patches.
