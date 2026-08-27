import { buildAcademyEntries, renderUrlsetXml, xmlResponse } from "../../lib/sitemapBuilder";

export const revalidate = 3600;

export async function GET() {
  return xmlResponse(renderUrlsetXml(buildAcademyEntries()));
}
