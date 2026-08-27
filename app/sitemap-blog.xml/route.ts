import { buildBlogEntries, renderUrlsetXml, xmlResponse } from "../../lib/sitemapBuilder";

export const revalidate = 3600;

export async function GET() {
  return xmlResponse(renderUrlsetXml(buildBlogEntries()));
}
