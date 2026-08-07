import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'Googlebot',
          'Bingbot',
          'Applebot',
          'Bytespider',
          'CCBot',
          'DuckAssistBot',
          'PetalBot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://www.yagacalls.com/sitemap.xml',
  };
}
