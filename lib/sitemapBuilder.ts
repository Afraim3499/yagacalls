import fs from "fs";
import path from "path";
import { regionalPages } from "../content/data/regions";
import { commercialPages } from "../content/data/commercial";
import { blogPostsMetadata } from "../content/blog/posts";
import { authors } from "../content/data/authors";
import { getFileLastModified, getEntityLastModified, hasStaticPageFolder } from "./gitLastModified";

// Shared by app/sitemap.xml/route.ts (the index) and the 5 segment route
// handlers (sitemap-pages.xml, sitemap-blog.xml, sitemap-academy.xml,
// sitemap-regions.xml, sitemap-authors.xml). Split into a real sitemap
// index + segments so Google Search Console reports indexing status per
// content type instead of one lump number for all ~90 URLs — a genuine,
// legitimate reason to segment at this URL count, distinct from (and much
// smaller in scope than) the crawl-budget argument that doesn't apply here.

export const BASE_URL = "https://www.yagacalls.com";

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "yearly" | "monthly" | "weekly" | "daily";
  images?: string[];
};

const LEGAL_PATHS = new Set(["/disclaimer", "/privacy", "/risk-disclosure", "/terms"]);
const FREQUENT_PATHS = new Set(["/news", "/analysis"]);
const HUB_PATHS = new Set(["/blog", "/academy", "/regions", "/authors", "/sitemap"]);

function staticRouteChangeFrequency(route: string): SitemapEntry["changeFrequency"] {
  if (route === "") return "weekly"; // homepage
  if (LEGAL_PATHS.has(route)) return "yearly";
  if (FREQUENT_PATHS.has(route)) return "daily";
  if (HUB_PATHS.has(route)) return "weekly"; // index pages change whenever new content is added
  return "monthly"; // SEO/commercial-style static landing pages
}

const STATIC_ROUTE_PATHS = [
  "",
  "/method",
  "/proof",
  "/crypto-signal-results",
  "/pricing",
  "/analysis",
  "/news",
  "/academy",
  "/blog",
  "/contact",
  "/disclaimer",
  "/privacy",
  "/risk-disclosure",
  "/regions",
  "/verified-crypto-signal-provider",
  "/premium-telegram-crypto-signals",
  "/best-crypto-signal-provider",
  "/narrative-trading-crypto-signals",
  "/crypto-signal-provider-comparison",
  "/what-are-crypto-signals",
  "/best-crypto-signal-groups-compared",
  "/how-to-choose-a-crypto-signal-provider",
  "/crypto-risk-management",
  "/how-to-set-stop-losses-in-crypto",
  "/position-sizing-calculator",
  "/telegram-crypto-signals",
  "/yaga-calls-review",
  "/about-yaga-calls",
  "/crypto-trading-group",
  "/crypto-trading-telegram-group",
  "/leverage-trading-calculator",
  "/liquidation-price-calculator",
  "/free-vs-paid-crypto-signals",
  "/crypto-signals-with-risk-management",
  "/affiliate",
  "/careers",
  "/terms",
  "/authors",
  "/sitemap",
  "/signal-studio",
];

/** Segment: static routes + commercial/guide landing pages (the "Pages" segment). */
export function buildPageEntries(): SitemapEntry[] {
  const buildFallback = new Date();

  const staticRoutes: SitemapEntry[] = STATIC_ROUTE_PATHS.map((route) => {
    const pageFile = route === "" ? "app/page.tsx" : `app${route}/page.tsx`;
    return {
      url: `${BASE_URL}${route}`,
      lastModified: getFileLastModified(pageFile, buildFallback),
      changeFrequency: staticRouteChangeFrequency(route),
    };
  });

  const staticRouteSet = new Set(STATIC_ROUTE_PATHS.map((r) => r.replace(/^\//, "")));
  const commercialDataFallback = getFileLastModified("content/data/commercial.ts", buildFallback);
  const commercialRoutes: SitemapEntry[] = commercialPages
    .filter((page) => !staticRouteSet.has(page.slug))
    .map((page) => {
      const imageUrl = page.heroImage
        ? page.heroImage.startsWith("http") ? page.heroImage : `${BASE_URL}${page.heroImage}`
        : undefined;
      return {
        url: `${BASE_URL}/${page.slug}`,
        lastModified: commercialDataFallback,
        changeFrequency: "monthly" as const,
        ...(imageUrl ? { images: [imageUrl] } : {}),
      };
    });

  return [...staticRoutes, ...commercialRoutes];
}

/** Segment: blog posts. */
export function buildBlogEntries(): SitemapEntry[] {
  return blogPostsMetadata.map((post) => {
    const imageUrl = post.featuredImage
      ? post.featuredImage.startsWith("http") ? post.featuredImage : `${BASE_URL}${post.featuredImage}`
      : undefined;
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified || post.datePublished),
      changeFrequency: "monthly" as const,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    };
  });
}

/** Segment: academy modules. */
export function buildAcademyEntries(): SitemapEntry[] {
  const buildFallback = new Date();
  try {
    const filePath = path.join(process.cwd(), "content/data/academy.json");
    const academyData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const academyLastModified = getFileLastModified("content/data/academy.json", buildFallback);
    return academyData.map((mod: { slug: string }) => ({
      url: `${BASE_URL}/academy/${mod.slug}`,
      lastModified: academyLastModified,
      changeFrequency: "monthly" as const,
    }));
  } catch (error) {
    console.error("Sitemap academy error:", error);
    return [];
  }
}

/** Segment: region pages. */
export function buildRegionEntries(): SitemapEntry[] {
  const buildFallback = new Date();
  const regionsDataFallback = getFileLastModified("content/data/regions.ts", buildFallback);
  const regionalRoutes: SitemapEntry[] = regionalPages.map((page) => {
    const folderFile = `app/regions/${page.slug}/page.tsx`;
    const lastModified = hasStaticPageFolder(`regions/${page.slug}`)
      ? getFileLastModified(folderFile, regionsDataFallback)
      : regionsDataFallback;
    return {
      url: `${BASE_URL}/regions/${page.slug}`,
      lastModified,
      changeFrequency: "monthly",
    };
  });

  const folderOnlyRegionSlugs = ["gcc", "russia"];
  const folderOnlyRegionRoutes: SitemapEntry[] = folderOnlyRegionSlugs.map((slug) => ({
    url: `${BASE_URL}/regions/${slug}`,
    lastModified: getFileLastModified(`app/regions/${slug}/page.tsx`, buildFallback),
    changeFrequency: "monthly",
  }));

  return [...regionalRoutes, ...folderOnlyRegionRoutes];
}

/** Segment: author profile pages. */
export function buildAuthorEntries(): SitemapEntry[] {
  const buildFallback = new Date();
  const authorsFileFallback = getFileLastModified("content/data/authors.ts", buildFallback);
  return authors.map((author) => ({
    url: `${BASE_URL}/authors/${author.slug}`,
    lastModified: getEntityLastModified(
      "content/data/authors.ts",
      `slug: "${author.slug}"`,
      /^\s*slug:\s*"/,
      authorsFileFallback
    ),
    changeFrequency: "yearly",
  }));
}

// Escapes the 5 XML-significant characters.
export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function renderUrlsetXml(entries: SitemapEntry[]): string {
  const urlBlocks = entries
    .map((entry) => {
      const imageBlocks = (entry.images ?? [])
        .map((img) => `<image:image><image:loc>${escapeXml(img)}</image:loc></image:image>`)
        .join("");
      return (
        `<url><loc>${escapeXml(entry.url)}</loc>${imageBlocks}` +
        `<lastmod>${entry.lastModified.toISOString()}</lastmod>` +
        `<changefreq>${entry.changeFrequency}</changefreq></url>`
      );
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">` +
    urlBlocks +
    `</urlset>`
  );
}

export function renderSitemapIndexXml(sitemaps: { loc: string; lastmod: Date }[]): string {
  const blocks = sitemaps
    .map((s) => `<sitemap><loc>${escapeXml(s.loc)}</loc><lastmod>${s.lastmod.toISOString()}</lastmod></sitemap>`)
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    blocks +
    `</sitemapindex>`
  );
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

export function mostRecent(entries: SitemapEntry[]): Date {
  return entries.reduce((latest, e) => (e.lastModified > latest ? e.lastModified : latest), new Date(0));
}
