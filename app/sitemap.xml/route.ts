import {
  buildPageEntries,
  buildBlogEntries,
  buildAcademyEntries,
  buildRegionEntries,
  buildAuthorEntries,
  renderSitemapIndexXml,
  xmlResponse,
  mostRecent,
  BASE_URL,
} from "../../lib/sitemapBuilder";

// Sitemap index — references the 5 segment sitemaps below rather than
// listing every URL directly. At ~90 total URLs this isn't for crawl-budget
// reasons (that only matters at a much bigger scale); it's so Google
// Search Console's Sitemaps report shows indexing status per content type
// (pages / blog / academy / regions / authors) instead of one lump number.
export const revalidate = 3600;

export async function GET() {
  const sitemaps = [
    { loc: `${BASE_URL}/sitemap-pages.xml`, lastmod: mostRecent(buildPageEntries()) },
    { loc: `${BASE_URL}/sitemap-blog.xml`, lastmod: mostRecent(buildBlogEntries()) },
    { loc: `${BASE_URL}/sitemap-academy.xml`, lastmod: mostRecent(buildAcademyEntries()) },
    { loc: `${BASE_URL}/sitemap-regions.xml`, lastmod: mostRecent(buildRegionEntries()) },
    { loc: `${BASE_URL}/sitemap-authors.xml`, lastmod: mostRecent(buildAuthorEntries()) },
  ];

  return xmlResponse(renderSitemapIndexXml(sitemaps));
}
