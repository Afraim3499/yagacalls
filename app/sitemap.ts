import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yagacalls.com';
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
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

  return [...staticRoutes, ...blogRoutes, ...academyRoutes];
}
