<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Yaga Calls — Sitemap</title>
        <meta charset="UTF-8"/>
        <meta name="robots" content="noindex"/>
        <style>
          body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; background: #0a0b0d; color: #e6e6e6; margin: 0; padding: 2rem; }
          h1 { font-size: 1.25rem; margin-bottom: 0.25rem; }
          p.meta { color: #9a9a9a; font-size: 0.85rem; margin-top: 0; margin-bottom: 1.5rem; }
          table { border-collapse: collapse; width: 100%; font-size: 0.85rem; }
          th { text-align: left; padding: 0.6rem 0.8rem; background: #16181d; border-bottom: 1px solid #2a2d34; position: sticky; top: 0; }
          td { padding: 0.5rem 0.8rem; border-bottom: 1px solid #1c1e24; vertical-align: top; }
          tr:hover td { background: #14161b; }
          a { color: #e39e2e; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .freq { text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; color: #9a9a9a; }
          .count { color: #9a9a9a; font-weight: normal; }
        </style>
      </head>
      <body>
        <h1>Yaga Calls Sitemap <span class="count">(<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs)</span></h1>
        <p class="meta">This is a human-readable view of sitemap.xml, generated via an XSL stylesheet for quick auditing — the actual file crawlers read is the raw XML underneath.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td class="freq"><xsl:value-of select="sitemap:changefreq"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
