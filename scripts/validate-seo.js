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

function fail(message) {
  errors.push(message);
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

// ── Check 4: sitemap.ts includes every real static region folder ──
function checkSitemapCoversRegionFolders() {
  const sitemapFile = path.join(ROOT, 'app', 'sitemap.ts');
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
      fail(`app/regions/${slug}/ is a real page but is missing from both content/data/regions.ts and sitemap.ts's folderOnlyRegionSlugs — it won't appear in sitemap.xml.`);
    }
  }
}

checkRobotsDuplication();
checkJsonLdNames();
checkRegionReferencesAreReal();
checkSitemapCoversRegionFolders();

if (errors.length > 0) {
  console.error(`\n✖ SEO validation failed with ${errors.length} issue(s):\n`);
  errors.forEach((e) => console.error(`  - ${e}`));
  console.error('');
  process.exit(1);
} else {
  console.log('✔ SEO validation passed — no robots.txt conflicts, missing JSON-LD names, or broken region references found.');
}
