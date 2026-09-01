import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stop leaking "X-Powered-By: Next.js" on every response (Segment 6 finding).
  poweredByHeader: false,
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
      // Canonicalize the bare domain to www — app/robots.ts, app/sitemap.xml/route.ts, and
      // every page's <link rel="canonical"> already treat www.yagacalls.com as
      // canonical; this closes the gap where the bare domain previously served
      // identical content directly with no redirect (Segment 1 finding).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yagacalls.com' }],
        destination: 'https://www.yagacalls.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Applies to every route, including static assets and API routes.
        source: '/:path*',
        headers: [
          // HTTPS is already enforced (Cloudflare + host redirects), but HSTS
          // closes the gap where a first-time visitor without a cached HSTS
          // directive can still be downgraded to HTTP by a network attacker.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Blocks the site from being embedded in a third-party <iframe>
          // (clickjacking) — also covered by the CSP frame-ancestors below,
          // kept here too for browsers that only honor the legacy header.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable browser features this site never uses.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
          // Deliberately permissive on script-src (Next.js inline hydration
          // data, GTM's inline init snippet, and inline JSON-LD <script>
          // blocks all require 'unsafe-inline' without a nonce wired through
          // next/script — that's a larger follow-up, not a safe drive-by
          // change). Still meaningfully restricts object embedding, blocks
          // this site from being framed (frame-ancestors), and pins
          // form submissions/base URIs to same-origin.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              // The reviews section, live signal-results desk, and affiliate
              // leaderboard all fetch/write directly to Supabase client-side
              // (components/reviews/CommunityReviewsSection.tsx,
              // components/results/LiveSignalResultsDesk.tsx,
              // components/affiliate/AffiliateLeaderboard.tsx,
              // components/home/ReviewTrustBar.tsx) — verified live against a
              // production build that omitting this silently breaks those
              // features (blocked fetch, swallowed by their own catch blocks
              // with no visible error to the user, which is exactly why this
              // needed a real browser-console check, not just a build check).
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://ghwvwtwktnveqdqivxmy.supabase.co wss://stream.binance.com:9443 wss://*.binance.com:* wss://*.binance.com",
              "frame-ancestors 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
