import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { regionalPages } from '../content/data/regions';
import { commercialPages } from '../content/data/commercial';
import { blogPostsMetadata } from '../content/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yagacalls.com';
  const lastModified = new Date();

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
    '/terms',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticRoutePaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add regional pages
  const regionalRoutes: MetadataRoute.Sitemap = regionalPages.map((page) => ({
    url: `${baseUrl}/regions/${page.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Add commercial landing pages (exclude any that duplicate static routes)
  const staticRouteSet = new Set(staticRoutePaths.map(r => r.replace(/^\//, '')));
  const commercialRoutes: MetadataRoute.Sitemap = commercialPages
    .filter((page) => !staticRouteSet.has(page.slug))
    .map((page) => {
      const imageUrl = page.heroImage 
        ? (page.heroImage.startsWith('http') ? page.heroImage : `${baseUrl}${page.heroImage}`)
        : undefined;
      return {
        url: `${baseUrl}/${page.slug}`,
        lastModified,
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
    academyRoutes = academyData.map((mod: { slug: string }) => ({
      url: `${baseUrl}/academy/${mod.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Sitemap academy error:', error);
  }

  return [...staticRoutes, ...blogRoutes, ...academyRoutes, ...regionalRoutes, ...commercialRoutes];
}
