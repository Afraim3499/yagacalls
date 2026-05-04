/**
 * Yaga Calls Schema Recommendation Map (2026)
 * Maps Structured Data types to specific routes for better search visibility.
 */

export interface SchemaEntry {
  route: string;
  schemaTypes: string[];
  requiredFields: string[];
  benefits: string;
}

export const schemaMap: SchemaEntry[] = [
  {
    route: "/",
    schemaTypes: ["Organization", "WebSite", "FAQPage"],
    requiredFields: ["name", "url", "logo", "description", "mainEntity"],
    benefits: "Establishes brand authority and adds FAQ snippets to search results."
  },
  {
    route: "/pricing",
    schemaTypes: ["Product", "Offer", "FAQPage"],
    requiredFields: ["name", "description", "offers", "price", "priceCurrency"],
    benefits: "Enables rich snippets for pricing and helps answer transactional questions."
  },
  {
    route: "/method",
    schemaTypes: ["Article", "HowTo", "FAQPage"],
    requiredFields: ["headline", "author", "step", "totalTime"],
    benefits: "Positions the method as an authoritative guide and captures 'How-To' search traffic."
  },
  {
    route: "/proof",
    schemaTypes: ["Article", "ImageObject", "FAQPage"],
    requiredFields: ["headline", "image", "datePublished"],
    benefits: "Improves visibility of track record images and historical data."
  },
  {
    route: "/academy",
    schemaTypes: ["Course", "ItemList", "FAQPage"],
    requiredFields: ["courseName", "provider", "itemListElement"],
    benefits: "Eligible for Course rich snippets and lists of educational modules."
  },
  {
    route: "/blog",
    schemaTypes: ["Blog", "BlogPosting", "BreadcrumbList"],
    requiredFields: ["headline", "datePublished", "author", "itemListElement"],
    benefits: "Crucial for appearing in Google News and standard article search results."
  },
  {
    route: "/contact",
    schemaTypes: ["ContactPage", "Organization", "ContactPoint"],
    requiredFields: ["contactType", "url"],
    benefits: "Helps search engines identify official contact methods and location-neutral support."
  },
  {
    route: "/risk-disclosure",
    schemaTypes: ["WebPage", "FAQPage"],
    requiredFields: ["name", "description", "mainEntity"],
    benefits: "Ensures legal and risk-related questions are answered correctly by engines."
  }
];
