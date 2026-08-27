import fs from 'fs';
import path from 'path';
import { regionalPages } from '../../content/data/regions';
import { commercialPages } from '../../content/data/commercial';
import { blogPostsMetadata } from '../../content/blog/posts';
import { authors } from '../../content/data/authors';
import { getFileLastModified, getEntityLastModified, hasStaticPageFolder } from '../../lib/gitLastModified';

// Hand-built route handler (rather than the native app/sitemap.ts metadata
// route it replaces) so this can do two things Next's metadata-route API
// doesn't allow: send a real Cache-Control header, and attach an XSL
// stylesheet so the raw feed renders as a readable table for a human
// auditing it, not just raw XML. See audit-2026/findings/01-crawlability-indexing.md
// and the sitemap-specific follow-up audit for why both were worth doing.
export const revalidate = 3600;

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily';
  images?: string[];
};

const LEGAL_PATHS = new Set(['/disclaimer', '/privacy', '/risk-disclosure', '/terms']);
const FREQUENT_PATHS = new Set(['/news', '/analysis']);
const HUB_PATHS = new Set(['/blog', '/academy', '/regions', '/authors', '/sitemap']);

function staticRouteChangeFrequency(route: string): SitemapEntry['changeFrequency'] {
  if (route === '') return 'weekly'; // homepage
  if (LEGAL_PATHS.has(route)) return 'yearly';
  if (FREQUENT_PATHS.has(route)) return 'daily';
  if (HUB_PATHS.has(route)) return 'weekly'; // index pages change whenever new content is added
  return 'monthly'; // SEO/commercial-style static landing pages
}

function buildSitemapEntries(): SitemapEntry[] {
  const baseUrl = 'https://www.yagacalls.com';
  const buildFallback = new Date();

  const staticRoutePaths = [
    '',
    '/method',
    '/proof',
    '/crypto-signal-results',
    '/pricing',
    '/analysis',
    '/news',
    '/academy',
    '/blog',
    '/contact',
    '/disclaimer',
    '/privacy',
    '/risk-disclosure',
    '/regions',
    '/verified-crypto-signal-provider',
    '/premium-telegram-crypto-signals',
    '/best-crypto-signal-provider',
    '/narrative-trading-crypto-signals',
    '/crypto-signal-provider-comparison',
    '/what-are-crypto-signals',
    '/best-crypto-signal-groups-compared',
    '/how-to-choose-a-crypto-signal-provider',
    '/crypto-risk-management',
    '/how-to-set-stop-losses-in-crypto',
    '/position-sizing-calculator',
    '/telegram-crypto-signals',
    '/yaga-calls-review',
    '/about-yaga-calls',
    '/crypto-trading-group',
    '/crypto-trading-telegram-group',
    '/leverage-trading-calculator',
    '/liquidation-price-calculator',
    '/free-vs-paid-crypto-signals',
    '/crypto-signals-with-risk-management',
    '/affiliate',
    '/careers',
    '/terms',
    '/authors',
    '/sitemap',
  ];

  const staticRoutes: SitemapEntry[] = staticRoutePaths.map((route) => {
    const pageFile = route === '' ? 'app/page.tsx' : `app${route}/page.tsx`;
    return {
      url: `${baseUrl}${route}`,
      lastModified: getFileLastModified(pageFile, buildFallback),
      changeFrequency: staticRouteChangeFrequency(route),
    };
  });

  const regionsDataFallback = getFileLastModified('content/data/regions.ts', buildFallback);
  const regionalRoutes: SitemapEntry[] = regionalPages.map((page) => {
    const folderFile = `app/regions/${page.slug}/page.tsx`;
    const lastModified = hasStaticPageFolder(`regions/${page.slug}`)
      ? getFileLastModified(folderFile, regionsDataFallback)
      : regionsDataFallback;
    return {
      url: `${baseUrl}/regions/${page.slug}`,
      lastModified,
      changeFrequency: 'monthly',
    };
  });

  const folderOnlyRegionSlugs = ['gcc', 'russia'];
  const folderOnlyRegionRoutes: SitemapEntry[] = folderOnlyRegionSlugs.map((slug) => ({
    url: `${baseUrl}/regions/${slug}`,
    lastModified: getFileLastModified(`app/regions/${slug}/page.tsx`, buildFallback),
    changeFrequency: 'monthly',
  }));

  const staticRouteSet = new Set(staticRoutePaths.map((r) => r.replace(/^\//, '')));
  const commercialDataFallback = getFileLastModified('content/data/commercial.ts', buildFallback);
  const commercialRoutes: SitemapEntry[] = commercialPages
    .filter((page) => !staticRouteSet.has(page.slug))
    .map((page) => {
      const imageUrl = page.heroImage
        ? page.heroImage.startsWith('http') ? page.heroImage : `${baseUrl}${page.heroImage}`
        : undefined;
      return {
        url: `${baseUrl}/${page.slug}`,
        lastModified: commercialDataFallback,
        changeFrequency: 'monthly' as const,
        ...(imageUrl ? { images: [imageUrl] } : {}),
      };
    });

  const blogRoutes: SitemapEntry[] = blogPostsMetadata.map((post) => {
    const imageUrl = post.featuredImage
      ? post.featuredImage.startsWith('http') ? post.featuredImage : `${baseUrl}${post.featuredImage}`
      : undefined;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified || post.datePublished),
      changeFrequency: 'monthly' as const,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    };
  });

  const authorsFileFallback = getFileLastModified('content/data/authors.ts', buildFallback);
  const authorRoutes: SitemapEntry[] = authors.map((author) => ({
    url: `${baseUrl}/authors/${author.slug}`,
    lastModified: getEntityLastModified(
      'content/data/authors.ts',
      `slug: "${author.slug}"`,
      /^\s*slug:\s*"/,
      authorsFileFallback
    ),
    changeFrequency: 'yearly',
  }));

  let academyRoutes: SitemapEntry[] = [];
  try {
    const filePath = path.join(process.cwd(), 'content/data/academy.json');
    const academyData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const academyLastModified = getFileLastModified('content/data/academy.json', buildFallback);
    academyRoutes = academyData.map((mod: { slug: string }) => ({
      url: `${baseUrl}/academy/${mod.slug}`,
      lastModified: academyLastModified,
      changeFrequency: 'monthly' as const,
    }));
  } catch (error) {
    console.error('Sitemap academy error:', error);
  }

  return [...staticRoutes, ...blogRoutes, ...academyRoutes, ...authorRoutes, ...regionalRoutes, ...folderOnlyRegionRoutes, ...commercialRoutes];
}

// Escapes the 5 XML-significant characters. Applied to every value that
// isn't a value we generated ourselves as a known-safe literal (route
// paths and hardcoded image filenames above are safe; this still guards
// them defensively since content-derived values like blog slugs pass
// through the same builder).
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderSitemapXml(entries: SitemapEntry[]): string {
  const urlBlocks = entries
    .map((entry) => {
      const imageBlocks = (entry.images ?? [])
        .map((img) => `<image:image><image:loc>${escapeXml(img)}</image:loc></image:image>`)
        .join('');
      return (
        `<url><loc>${escapeXml(entry.url)}</loc>${imageBlocks}` +
        `<lastmod>${entry.lastModified.toISOString()}</lastmod>` +
        `<changefreq>${entry.changeFrequency}</changefreq></url>`
      );
    })
    .join('');

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">` +
    urlBlocks +
    `</urlset>`
  );
}

export async function GET() {
  const xml = renderSitemapXml(buildSitemapEntries());

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Real, honored Cache-Control this time — the native app/sitemap.ts
      // metadata route this replaces couldn't set response headers at all,
      // so it always shipped max-age=0/must-revalidate regardless of its
      // `revalidate` export (confirmed live: Next.js's own internal ISR
      // cache was working — x-nextjs-cache: HIT — but that never reached
      // the Cache-Control header sent to Cloudflare/browsers).
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
