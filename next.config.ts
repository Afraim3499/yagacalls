import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    contentDispositionType: 'inline',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/home.html', destination: '/', permanent: true },
      { source: '/pricing.html', destination: '/pricing', permanent: true },
      { source: '/method.html', destination: '/method', permanent: true },
      { source: '/proof.html', destination: '/proof', permanent: true },
      { source: '/analysis.html', destination: '/analysis', permanent: true },
      { source: '/news.html', destination: '/news', permanent: true },
      { source: '/academy.html', destination: '/academy', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/disclaimer.html', destination: '/disclaimer', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
    ];
  },
};

export default nextConfig;
