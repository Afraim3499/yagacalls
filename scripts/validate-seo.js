#!/usr/bin/env node
/**
 * Pre-deploy SEO/schema sanity checks.
 *
 * This exists because the same class of bug kept reaching production and
 * getting caught after the fact via Google Search Console: missing `name`
 * properties on BreadcrumbList/FAQPage JSON-LD, a duplicate/conflicting
 * robots.txt, and broken region URLs referenced in llms.txt / sitemap
 * inputs that don't correspond to a real route. None of this requires a
 * full Next.js build — it's a fast static scan of the source tree, meant
 * to run in CI (or locally via `npm run validate-seo`) before every
 * deploy.
 *
 * Exits non-zero (and prints every issue found) if anything fails.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

// Unlike fail(), a warning doesn't block the build (exit code stays 0) —
// used for content-quality signals where a false positive is plausible
// (e.g. a brand-new post genuinely has no cross-links yet) rather than a
// clear-cut technical defect.
function warn(message) {
  warnings.push(message);
}

function walk(dir, filterFn, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name.startsWith('.')) continue;
      walk(full, filterFn, results);
    } else if (filterFn(full)) {
      results.push(full);
    }
  }
  return results;
}

// ── Check 1: only one robots.txt source ──
// app/robots.ts (dynamic, with the AI-crawler allow-list) must be the sole
// source of truth. A stale public/robots.txt can silently take priority
// depending on how the host resolves static assets vs generated routes.
function checkRobotsDuplication() {
  const staticRobots = path.join(ROOT, 'public', 'robots.txt');
  const dynamicRobots = path.join(ROOT, 'app', 'robots.ts');
  if (fs.existsSync(staticRobots)) {
    fail(`public/robots.txt exists alongside app/robots.ts — delete the static file, app/robots.ts is the source of truth.`);
  }
  if (!fs.existsSync(dynamicRobots)) {
    fail(`app/robots.ts is missing entirely — no robots.txt will be served.`);
  }
}

// ── Check 2: inline JSON-LD BreadcrumbList/FAQPage must have "name" ──
// Pages using the lib/schema.ts helpers get this for free; pages that
// hand-roll their own <script type="application/ld+json"> object literal
// have historically forgotten it, which Google Search Console reports as
// an "unnamed item" error.
function checkJsonLdNames() {
  const files = walk(path.join(ROOT, 'app'), (f) => f.endsWith('.tsx') || f.endsWith('.ts'));
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    // Only check files that hand-roll JSON-LD objects (contain "@type").
    if (!/"@type":\s*"(BreadcrumbList|FAQPage)"/.test(src)) continue;

    for (const type of ['BreadcrumbList', 'FAQPage']) {
      const typeRe = new RegExp(`"@type":\\s*"${type}"[\\s\\S]{0,80}`, 'g');
      let match;
      while ((match = typeRe.exec(src)) !== null) {
        if (!/"name":/.test(match[0])) {
          const line = src.slice(0, match.index).split('\n').length;
          fail(`${path.relative(ROOT, file)}:${line} — ${type} JSON-LD block has no "name" property (GSC "unnamed item" error).`);
        }
      }
    }
  }
}

// ── Check 3: region URLs referenced in llms.txt / indexing files must be real ──
// Catches the exact class of bug where /regions/canada and /regions/london
// were referenced in llms.txt, indexNow submissions, etc. but never had a
// real route — silently feeding 404s to search/AI crawlers.
function checkRegionReferencesAreReal() {
  const regionsDir = path.join(ROOT, 'app', 'regions');
  const realFolderSlugs = fs.existsSync(regionsDir)
    ? fs.readdirSync(regionsDir, { withFileTypes: true })
        .filter((e) => e.isDirectory() && e.name !== '[slug]')
        .map((e) => e.name)
    : [];

  const regionsDataFile = path.join(ROOT, 'content', 'data', 'regions.ts');
  const regionsDataSrc = fs.existsSync(regionsDataFile) ? fs.readFileSync(regionsDataFile, 'utf8') : '';
  const dataSlugs = [...regionsDataSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

  const knownSlugs = new Set([...realFolderSlugs, ...dataSlugs]);

  const filesToScan = [
    path.join(ROOT, 'public', 'llms.txt'),
    path.join(ROOT, 'public', 'llms-full.txt'),
    path.join(ROOT, 'public', 'indexing-priority-urls.txt'),
    path.join(ROOT, 'content', 'strategy', 'priority-indexing-urls.ts'),
    path.join(ROOT, 'scripts', 'submit-indexnow.js'),
  ];

  for (const file of filesToScan) {
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    const refs = [...src.matchAll(/yagacalls\.com\/regions\/([a-z0-9-]+)/g)].map((m) => m[1]);
    for (const slug of refs) {
      if (!knownSlugs.has(slug)) {
        fail(`${path.relative(ROOT, file)} references /regions/${slug}, which has no app/regions/${slug}/ folder and no matching slug in content/data/regions.ts — this URL will 404.`);
      }
    }
  }
}

// ── Check 4: lib/sitemapBuilder.ts includes every real static region folder ──
function checkSitemapCoversRegionFolders() {
  const sitemapFile = path.join(ROOT, 'lib', 'sitemapBuilder.ts');
  const regionsDir = path.join(ROOT, 'app', 'regions');
  if (!fs.existsSync(sitemapFile) || !fs.existsSync(regionsDir)) return;

  const sitemapSrc = fs.readFileSync(sitemapFile, 'utf8');
  const folderSlugs = fs.readdirSync(regionsDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name !== '[slug]')
    .map((e) => e.name);

  const regionsDataFile = path.join(ROOT, 'content', 'data', 'regions.ts');
  const regionsDataSrc = fs.existsSync(regionsDataFile) ? fs.readFileSync(regionsDataFile, 'utf8') : '';
  const dataSlugs = new Set([...regionsDataSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));

  const folderOnlyMatch = sitemapSrc.match(/folderOnlyRegionSlugs\s*=\s*\[([^\]]*)\]/);
  const folderOnlySlugs = folderOnlyMatch
    ? [...folderOnlyMatch[1].matchAll(/'([^']+)'|"([^"]+)"/g)].map((m) => m[1] || m[2])
    : [];

  for (const slug of folderSlugs) {
    if (!dataSlugs.has(slug) && !folderOnlySlugs.includes(slug)) {
      fail(`app/regions/${slug}/ is a real page but is missing from both content/data/regions.ts and lib/sitemapBuilder.ts's folderOnlyRegionSlugs — it won't appear in sitemap-regions.xml.`);
    }
  }
}

// ── Check 5: page titles must not already contain the layout's own suffix ──
// app/layout.tsx sets a global metadata title template ("%s | Yaga Calls") that
// Next.js appends to whatever `title` a page returns. A page whose own title
// string already ends in "| Yaga Calls" gets it appended a second time, shipping
// "...Yaga Calls | Yaga Calls" to search results. This shipped on 13 pages at once
// (4 static legal pages, 6 SEO landing pages, 3 commercial.ts entries) because the
// bug can be introduced independently in any file that sets a top-level page title
// — this check scans all of them so it can't silently regress.
function checkNoDoubledTitleSuffix() {
  const SUFFIX_RE = /\|\s*Yaga Calls\s*$/;

  // app/**/page.tsx: only the *first* `title:` inside `export const metadata`
  // (before openGraph/twitter, which have their own independent titles that are
  // allowed to keep the suffix) is the one the layout template applies to.
  const pageFiles = walk(path.join(ROOT, 'app'), (f) => f.endsWith('page.tsx'));
  for (const file of pageFiles) {
    const src = fs.readFileSync(file, 'utf8');
    const metaMatch = src.match(/export const metadata[^{]*\{/);
    if (!metaMatch) continue;
    const start = metaMatch.index + metaMatch[0].length;
    const boundary = src.slice(start).search(/\b(openGraph|twitter)\s*:/);
    const block = boundary === -1 ? src.slice(start) : src.slice(start, start + boundary);
    const titleMatch = block.match(/title:\s*"([^"]*)"/);
    if (titleMatch && SUFFIX_RE.test(titleMatch[1])) {
      const line = src.slice(0, start + block.indexOf(titleMatch[0])).split('\n').length;
      fail(`${path.relative(ROOT, file)}:${line} — page title "${titleMatch[1]}" already ends in "| Yaga Calls"; app/layout.tsx's title template will append it again, shipping "...Yaga Calls | Yaga Calls".`);
    }
  }

  // content/data/*.ts and content/blog/posts.ts: `metaTitle` fields are fed
  // directly into `title` by the [slug] catch-all routes the same way.
  const dataFiles = [
    path.join(ROOT, 'content', 'data', 'commercial.ts'),
    path.join(ROOT, 'content', 'data', 'regions.ts'),
    path.join(ROOT, 'content', 'blog', 'posts.ts'),
  ];
  for (const file of dataFiles) {
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    const re = /metaTitle:\s*"([^"]*)"/g;
    let match;
    while ((match = re.exec(src)) !== null) {
      if (SUFFIX_RE.test(match[1])) {
        const line = src.slice(0, match.index).split('\n').length;
        fail(`${path.relative(ROOT, file)}:${line} — metaTitle "${match[1]}" already ends in "| Yaga Calls"; the layout title template will double it.`);
      }
    }
  }
}

// ── Check 6: every top-level static route folder must be listed in lib/sitemapBuilder.ts ──
// Generalizes Check 4 (which only covered app/regions/*) after finding
// app/crypto-signal-results/ was a live, linked page missing from
// STATIC_ROUTE_PATHS — silently absent from sitemap.xml despite being fully public.
function checkStaticRoutesCoveredBySitemap() {
  const appDir = path.join(ROOT, 'app');
  const sitemapFile = path.join(ROOT, 'lib', 'sitemapBuilder.ts');
  if (!fs.existsSync(appDir) || !fs.existsSync(sitemapFile)) return;

  // Folders with their own dynamic sitemap logic (own [slug] route + a
  // dedicated block in lib/sitemapBuilder.ts), route groups, non-page special
  // routes, and the sitemap route handlers themselves (each app/sitemap*.xml/
  // has a route.ts, not a page.tsx, so they're already skipped by the
  // pageFile check below — listed here too for clarity).
  const EXEMPT = new Set([
    'api', 'academy', 'authors', 'blog', 'regions', 'feed.xml', '(commercial)',
    'sitemap.xml', 'sitemap-pages.xml', 'sitemap-blog.xml', 'sitemap-academy.xml',
    'sitemap-regions.xml', 'sitemap-authors.xml', 'signal-studio',
  ]);

  const sitemapSrc = fs.readFileSync(sitemapFile, 'utf8');
  const staticRouteBlockMatch = sitemapSrc.match(/STATIC_ROUTE_PATHS\s*=\s*\[([\s\S]*?)\];/);
  const listedPaths = staticRouteBlockMatch
    ? new Set([...staticRouteBlockMatch[1].matchAll(/"([^"]*)"/g)].map((m) => m[1]))
    : new Set();

  const folders = fs.readdirSync(appDir, { withFileTypes: true }).filter((e) => e.isDirectory());
  for (const folder of folders) {
    if (EXEMPT.has(folder.name) || folder.name.startsWith('.') || folder.name.startsWith('[')) continue;
    const pageFile = path.join(appDir, folder.name, 'page.tsx');
    if (!fs.existsSync(pageFile)) continue; // not a real route (e.g. a shared layout-only folder)
    const routePath = `/${folder.name}`;
    if (!listedPaths.has(routePath)) {
      fail(`app/${folder.name}/page.tsx is a real, live route but "${routePath}" is missing from STATIC_ROUTE_PATHS in lib/sitemapBuilder.ts — it won't appear in sitemap-pages.xml.`);
    }
  }
}

// ── Check 7: flag blog posts / academy modules with zero curated cross-links ──
// A static proxy for the real internal-link-graph crawl run manually during
// the sitemap/internal-linking audit (see audit-2026/), which found several
// posts reachable only from their own index page's generic .map() listing —
// with zero relatedPosts entries, zero parentPillarSlug references, and zero
// hardcoded contextual links from any commercial/pillar page. This can't
// replace a real crawl (it doesn't count *how many* links, or resolve
// dynamic hrefs built at runtime), but it catches the exact failure mode
// that motivated the audit: a slug that no other file in the whole codebase
// ever mentions by name, meaning nothing was ever curated to point at it on
// purpose. A warning, not a failure — a brand-new post legitimately has no
// cross-links yet until someone adds them, and that shouldn't block a deploy.
function checkContentHasCuratedCrossLinks() {
  const appAndComponentsFiles = [
    ...walk(path.join(ROOT, 'app'), (f) => f.endsWith('.tsx')),
    ...walk(path.join(ROOT, 'components'), (f) => f.endsWith('.tsx')),
  ];
  const combinedSource = appAndComponentsFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

  function countReferences(slug, ownFileSrc, ownEntryRange) {
    // References elsewhere in the same data file (other entries' relatedPosts/
    // parentPillarSlug pointing at this slug) — exclude the entry's own block.
    const outsideOwnEntry = ownFileSrc.slice(0, ownEntryRange[0]) + ownFileSrc.slice(ownEntryRange[1]);
    const inOwnDataFile = (outsideOwnEntry.match(new RegExp(`["'\`]${slug}["'\`]`, 'g')) || []).length;
    const inAppOrComponents = (combinedSource.match(new RegExp(`/(?:blog|academy)/${slug}\\b`, 'g')) || []).length;
    return inOwnDataFile + inAppOrComponents;
  }

  // Blog posts
  const postsFile = path.join(ROOT, 'content', 'blog', 'posts.ts');
  if (fs.existsSync(postsFile)) {
    const src = fs.readFileSync(postsFile, 'utf8');
    const slugMatches = [...src.matchAll(/slug:\s*"([^"]+)"/g)];
    for (let i = 0; i < slugMatches.length; i++) {
      const slug = slugMatches[i][1];
      const entryStart = slugMatches[i].index;
      const entryEnd = i + 1 < slugMatches.length ? slugMatches[i + 1].index : src.length;
      const ownEntrySrc = src.slice(entryStart, entryEnd);
      // A post with its own clusterId gets real, dynamic sibling cross-links
      // at runtime via getClusterArticles()/RelatedPosts — invisible to a
      // static string scan, but a genuine link nonetheless. Only posts with
      // neither a static reference nor cluster membership are truly unlinked.
      const hasClusterMembership = /clusterId:\s*"[^"]+"/.test(ownEntrySrc);
      const refCount = countReferences(slug, src, [entryStart, entryEnd]);
      if (refCount === 0 && !hasClusterMembership) {
        warn(`content/blog/posts.ts: "${slug}" has no curated cross-link anywhere (no relatedPosts entry, no parentPillarSlug, no clusterId, no hardcoded /blog/${slug} link in app/ or components/) — only reachable via /blog's generic listing.`);
      }
    }
  }

  // Academy modules
  const academyFile = path.join(ROOT, 'content', 'data', 'academy.json');
  if (fs.existsSync(academyFile)) {
    try {
      const academyData = JSON.parse(fs.readFileSync(academyFile, 'utf8'));
      for (const mod of academyData) {
        const inAppOrComponents = (combinedSource.match(new RegExp(`/academy/${mod.slug}\\b`, 'g')) || []).length;
        if (inAppOrComponents === 0) {
          warn(`content/data/academy.json: "${mod.slug}" has no hardcoded link anywhere in app/ or components/ — only reachable via /academy's generic listing.`);
        }
      }
    } catch {
      // Malformed JSON is already a build-breaking problem elsewhere; not this check's job to report it.
    }
  }
}

// ── Check 8: openGraph (images, siteName, locale) and twitter (site, creator) must be set on all pages ──
// Next.js metadata shallow-merges openGraph/twitter objects, so defining them without images, siteName,
// locale, or twitter:site in a page overwrites the parent layout's values, causing social previews to fail.
function checkOpenGraphAndTwitterCompleteness() {
  const pageFiles = walk(path.join(ROOT, 'app'), (f) => f.endsWith('page.tsx'));
  for (const file of pageFiles) {
    const src = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);
    if (!src.includes('export const metadata') && !src.includes('export async function generateMetadata')) continue;

    if (src.includes('openGraph:')) {
      if (!src.includes('images:') && !src.includes('ogImageUrl')) {
        fail(`${rel} — openGraph block defined without "images" (causes og:image to be missing in social previews).`);
      }
      if (!src.includes('siteName:')) {
        fail(`${rel} — openGraph block defined without "siteName" (causes og:site_name to be missing).`);
      }
      if (!src.includes('locale:')) {
        fail(`${rel} — openGraph block defined without "locale" (causes og:locale to be missing).`);
      }
    } else {
      fail(`${rel} — page has metadata but no openGraph configuration.`);
    }

    if (src.includes('twitter:')) {
      if (!src.includes('site:')) {
        fail(`${rel} — twitter block defined without "site" handle (causes twitter:site to be missing).`);
      }
    } else {
      fail(`${rel} — page has metadata but no twitter configuration.`);
    }
  }
}

checkRobotsDuplication();
checkJsonLdNames();
checkRegionReferencesAreReal();
checkSitemapCoversRegionFolders();
checkNoDoubledTitleSuffix();
checkStaticRoutesCoveredBySitemap();
checkContentHasCuratedCrossLinks();
checkOpenGraphAndTwitterCompleteness();

if (warnings.length > 0) {
  console.warn(`\n⚠ ${warnings.length} content cross-linking warning(s) (does not block the build):\n`);
  warnings.forEach((w) => console.warn(`  - ${w}`));
  console.warn('');
}

if (errors.length > 0) {
  console.error(`\n✖ SEO validation failed with ${errors.length} issue(s):\n`);
  errors.forEach((e) => console.error(`  - ${e}`));
  console.error('');
  process.exit(1);
} else {
  console.log('✔ SEO validation passed — no robots.txt conflicts, missing JSON-LD names, or broken region references found.');
}
