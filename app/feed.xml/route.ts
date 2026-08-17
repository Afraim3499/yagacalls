import { blogPostsMetadata } from "@/content/blog/posts";
import { getAuthorBySlug } from "@/content/data/authors";

export async function GET() {
  const baseUrl = "https://www.yagacalls.com";

  const itemsXml = blogPostsMetadata
    .slice()
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .map((post) => {
      const postUrl = `${baseUrl}/blog/${post.slug}`;
      const imageUrl = post.featuredImage
        ? (post.featuredImage.startsWith("http") ? post.featuredImage : `${baseUrl}${post.featuredImage}`)
        : undefined;
      const author = getAuthorBySlug(post.authorSlug);

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt || post.metaDescription}]]></description>
      <category><![CDATA[${post.category}]]></category>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${author?.name || "Yaga Calls Research Desk"}]]></dc:creator>
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/png" />` : ""}
    </item>`;
    })
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Yaga Calls | Crypto Signals &amp; Market Research</title>
    <link>${baseUrl}</link>
    <description>Professional-grade crypto signals, narrative-driven market analysis, and regional search intent research.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
