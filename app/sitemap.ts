import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { regionalPages } from '../content/data/regions';
import { commercialPages } from '../content/data/commercial';

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

  // Add dynamic blog posts if data exists (with image metadata for Google Image indexing)
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const filePath = path.join(process.cwd(), 'content/data/blog.json');
    const blogData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    blogRoutes = blogData.map((post: { slug: string; image?: string; title?: string }) => {
      const imageUrl = post.image 
        ? (post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`)
        : undefined;
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
        ...(imageUrl ? {
          images: [imageUrl.replace(/&/g, '&amp;')],
        } : {}),
      };
    });
  } catch (error) {
    console.error('Sitemap blog error:', error);
  }

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
