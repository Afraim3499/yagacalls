import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { regionalPages } from '../content/data/regions';
import { commercialPages } from '../content/data/commercial';
import { blogPostsMetadata } from '../content/blog/posts';
import { getFileLastModified, hasStaticPageFolder } from '../lib/gitLastModified';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yagacalls.com';
  // Build-time fallback only — used if a file can't be found or git history
  // isn't available in the deploy environment. Everything below prefers a
  // real per-page last-modified date over this.
  const buildFallback = new Date();

  const staticRoutePaths = [
    '',
    '/method',
    '/proof',
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
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticRoutePaths.map((route) => {
    const pageFile = route === '' ? 'app/page.tsx' : `app${route}/page.tsx`;
    return {
      url: `${baseUrl}${route}`,
      lastModified: getFileLastModified(pageFile, buildFallback),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    };
  });

  // Add regional pages. Most slugs are shadowed by their own static folder
  // (app/regions/<slug>/page.tsx) which Next.js resolves ahead of the
  // [slug] catch-all — use that file's real last-modified date when it
  // exists, since that's what's actually rendered. Only the handful of
  // slugs served purely through content/data/regions.ts (e.g. middle-east,
  // netherlands) fall back to that data file's date.
  const regionsDataFallback = getFileLastModified('content/data/regions.ts', buildFallback);
  const regionalRoutes: MetadataRoute.Sitemap = regionalPages.map((page) => {
    const folderFile = `app/regions/${page.slug}/page.tsx`;
    const lastModified = hasStaticPageFolder(`regions/${page.slug}`)
      ? getFileLastModified(folderFile, regionsDataFallback)
      : regionsDataFallback;
    return {
      url: `${baseUrl}/regions/${page.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // Regional pages that live as their own static folder (app/regions/<slug>/page.tsx)
  // rather than through content/data/regions.ts + the [slug] catch-all route.
  // They still need to be discoverable in the sitemap.
  const folderOnlyRegionSlugs = ['gcc', 'russia'];
  const folderOnlyRegionRoutes: MetadataRoute.Sitemap = folderOnlyRegionSlugs.map((slug) => ({
    url: `${baseUrl}/regions/${slug}`,
    lastModified: getFileLastModified(`app/regions/${slug}/page.tsx`, buildFallback),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Add commercial landing pages (exclude any that duplicate static routes)
  const staticRouteSet = new Set(staticRoutePaths.map(r => r.replace(/^\//, '')));
  const commercialDataFallback = getFileLastModified('content/data/commercial.ts', buildFallback);
  const commercialRoutes: MetadataRoute.Sitemap = commercialPages
    .filter((page) => !staticRouteSet.has(page.slug))
    .map((page) => {
      const imageUrl = page.heroImage
        ? (page.heroImage.startsWith('http') ? page.heroImage : `${baseUrl}${page.heroImage}`)
        : undefined;
      return {
        url: `${baseUrl}/${page.slug}`,
        lastModified: commercialDataFallback,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        ...(imageUrl ? {
          images: [imageUrl.replace(/&/g, '&amp;')],
        } : {}),
      };
    });

  // Add dynamic blog posts from TSX database (with image metadata for Google Image indexing)
  const blogRoutes: MetadataRoute.Sitemap = blogPostsMetadata.map((post) => {
    const imageUrl = post.featuredImage 
      ? (post.featuredImage.startsWith('http') ? post.featuredImage : `${baseUrl}${post.featuredImage}`)
      : undefined;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified || post.datePublished),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
      ...(imageUrl ? {
        images: [imageUrl.replace(/&/g, '&amp;')],
      } : {}),
    };
  });

  // Add dynamic academy modules if data exists
  let academyRoutes: MetadataRoute.Sitemap = [];
  try {
    const filePath = path.join(process.cwd(), 'content/data/academy.json');
    const academyData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const academyLastModified = getFileLastModified('content/data/academy.json', buildFallback);
    academyRoutes = academyData.map((mod: { slug: string }) => ({
      url: `${baseUrl}/academy/${mod.slug}`,
      lastModified: academyLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Sitemap academy error:', error);
  }

  return [...staticRoutes, ...blogRoutes, ...academyRoutes, ...regionalRoutes, ...folderOnlyRegionRoutes, ...commercialRoutes];
}
