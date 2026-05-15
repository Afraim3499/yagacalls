import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { regionalPages } from '../content/data/regions';
import { commercialPages } from '../content/data/commercial';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yagacalls.com';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
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
  ].map((route) => ({
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

  // Add commercial landing pages
  const commercialRoutes: MetadataRoute.Sitemap = commercialPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Add dynamic blog posts if data exists
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const filePath = path.join(process.cwd(), 'content/data/blog.json');
    const blogData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    blogRoutes = blogData.map((post: { slug: string }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
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
