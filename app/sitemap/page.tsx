import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createItemListSchema,
} from "@/lib/schema";
import { regionalPages } from "@/content/data/regions";
import { commercialPages } from "@/content/data/commercial";
import { blogPostsMetadata } from "@/content/blog/posts";
import { authors } from "@/content/data/authors";

const ogImageUrl = "https://www.yagacalls.com/api/og?title=HTML%20Sitemap&subtitle=Full%20Map%20of%20Every%20Page%20on%20Yaga%20Calls";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Full, human-readable map of every page on Yaga Calls — guides, academy modules, blog posts, regional coverage, and tools, organized by section.",
  alternates: {
    canonical: "https://www.yagacalls.com/sitemap",
  },
  openGraph: {
    title: "Sitemap — Yaga Calls",
    description: "Full, human-readable map of every page on Yaga Calls — guides, academy modules, blog posts, regional coverage, and tools, organized by section.",
    url: "https://www.yagacalls.com/sitemap",
    siteName: "Yaga Calls",
    type: "website",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Sitemap — Yaga Calls" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap — Yaga Calls",
    description: "Full, human-readable map of every page on Yaga Calls — guides, academy modules, blog posts, regional coverage, and tools, organized by section.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type LinkItem = { href: string; label: string };
type LinkGroup = { heading: string; items: LinkItem[] };

const CORE_PAGES: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Our Method" },
  { href: "/proof", label: "Selected Examples" },
  { href: "/crypto-signal-results", label: "Live Signal Results" },
  { href: "/yaga-calls-review", label: "Yaga Calls Review" },
  { href: "/pricing", label: "Pricing Plans" },
  { href: "/about-yaga-calls", label: "About Yaga Calls" },
  { href: "/news", label: "News" },
  { href: "/analysis", label: "Analysis" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers & Partner Jobs" },
  { href: "/affiliate", label: "Partner Program" },
];

const TOOLS: LinkItem[] = [
  { href: "/position-sizing-calculator", label: "Position Sizing Calculator" },
  { href: "/leverage-trading-calculator", label: "Leverage Trading Calculator" },
  { href: "/liquidation-price-calculator", label: "Liquidation Price Calculator" },
];

const LEGAL: LinkItem[] = [
  { href: "/risk-disclosure", label: "Risk Disclosure" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

function loadAcademyModules(): LinkItem[] {
  try {
    const filePath = path.join(process.cwd(), "content/data/academy.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return data.map((mod: { slug: string; title: string }) => ({
      href: `/academy/${mod.slug}`,
      label: mod.title,
    }));
  } catch {
    return [];
  }
}

function buildGuidesGroup(): LinkGroup {
  const staticRouteSet = new Set(CORE_PAGES.map((p) => p.href.replace(/^\//, "")));
  const items = commercialPages
    .filter((p) => !staticRouteSet.has(p.slug))
    .map((p) => ({ href: `/${p.slug}`, label: p.title }));
  return { heading: "Signal & Provider Guides", items };
}

function buildBlogGroups(): LinkGroup[] {
  const pillars = blogPostsMetadata.filter((p) => p.isPillarPage);
  const groups: LinkGroup[] = pillars.map((pillar) => {
    const spokes = blogPostsMetadata.filter((p) => p.clusterId === pillar.clusterId && !p.isPillarPage);
    return {
      heading: pillar.title,
      items: [
        { href: `/blog/${pillar.slug}`, label: `${pillar.title} (overview)` },
        ...spokes.map((s) => ({ href: `/blog/${s.slug}`, label: s.title })),
      ],
    };
  });
  const clusteredSlugs = new Set(groups.flatMap((g) => g.items.map((i) => i.href.replace("/blog/", ""))));
  const standalone = blogPostsMetadata.filter((p) => !clusteredSlugs.has(p.slug));
  if (standalone.length > 0) {
    groups.push({
      heading: "More From the Blog",
      items: standalone.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
    });
  }
  return groups;
}

function GroupBlock({ heading, items }: LinkGroup) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-black uppercase tracking-widest text-primary">{heading}</h3>
      <ul className="space-y-1.5 text-sm text-text-muted">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const url = "https://www.yagacalls.com/sitemap";
  const academyModules = loadAcademyModules();
  const guidesGroup = buildGuidesGroup();
  const blogGroups = buildBlogGroups();
  const regionItems: LinkItem[] = [
    { href: "/regions", label: "All Regions (overview)" },
    ...regionalPages.map((r) => ({ href: `/regions/${r.slug}`, label: r.regionName })),
    { href: "/regions/gcc", label: "GCC" },
    { href: "/regions/russia", label: "Russia & CIS" },
  ];
  const authorItems: LinkItem[] = [
    { href: "/authors", label: "All Analysts & Writers (overview)" },
    ...authors.map((a) => ({ href: `/authors/${a.slug}`, label: a.name })),
  ];

  const allItemsForSchema = [
    ...CORE_PAGES,
    ...guidesGroup.items,
    ...academyModules,
    ...blogGroups.flatMap((g) => g.items),
    ...regionItems,
    ...authorItems,
    ...TOOLS,
    ...LEGAL,
  ];

  const webPageSchema = createWebPageSchema({
    title: "Sitemap | Yaga Calls",
    description: "Full, human-readable map of every page on Yaga Calls.",
    url,
  });
  const breadcrumbSchema = createBreadcrumbSchema([{ name: "Sitemap", item: "/sitemap" }]);
  const itemListSchema = createItemListSchema(
    allItemsForSchema.map((item) => ({ name: item.label, url: item.href }))
  );

  return (
    <main>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      <Section className="pt-28 pb-10">
        <Container>
          <h1 className="text-2xl sm:text-[30px] lg:text-[34px] font-black uppercase tracking-tighter mb-4">Sitemap</h1>
          <p className="text-text-muted max-w-2xl leading-relaxed">
            Every page on Yaga Calls, organized by section. Looking for the machine-readable
            version instead?{" "}
            <a href="/sitemap.xml" className="text-primary hover:underline">
              See sitemap.xml
            </a>
            .
          </p>
        </Container>
      </Section>

      <Section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            <GroupBlock heading="Core Pages" items={CORE_PAGES} />
            <GroupBlock heading={guidesGroup.heading} items={guidesGroup.items} />
            <GroupBlock heading="Trading Academy" items={academyModules} />
            {blogGroups.map((group) => (
              <GroupBlock key={group.heading} heading={group.heading} items={group.items} />
            ))}
            <GroupBlock heading="Regional Coverage" items={regionItems} />
            <GroupBlock heading="Analysts & Writers" items={authorItems} />
            <GroupBlock heading="Calculators" items={TOOLS} />
            <GroupBlock heading="Legal & Policies" items={LEGAL} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
