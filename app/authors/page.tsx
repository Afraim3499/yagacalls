import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { authors, getPostsByAuthorSlug } from "@/content/data/authors";
import { getWorksByAuthorSlug } from "@/content/data/authorWorks";
import { createBreadcrumbSchema, createItemListSchema, createWebPageSchema } from "@/lib/schema";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Analysts & Writers",
  description: "Meet the research analysts, on-chain investigators, and market writers behind Yaga Calls' market narrative research, regional coverage, and educational guides.",
  alternates: {
    canonical: "https://www.yagacalls.com/authors",
  },
  openGraph: {
    title: "Yaga Calls Analysts & Writers",
    description: "Meet the research analysts, on-chain investigators, and market writers behind Yaga Calls' market narrative research and educational guides.",
    url: "https://www.yagacalls.com/authors",
    type: "website",
    images: [{ url: "https://www.yagacalls.com/api/og?title=Our%20Analysts%20%26%20Writers&subtitle=The%20Research%20Team%20Behind%20Yaga%20Calls", width: 1200, height: 630, alt: "Yaga Calls Analysts & Writers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaga Calls Analysts & Writers",
    description: "Meet the research analysts, on-chain investigators, and market writers behind Yaga Calls' market narrative research and educational guides.",
    images: ["https://www.yagacalls.com/api/og?title=Our%20Analysts%20%26%20Writers&subtitle=The%20Research%20Team%20Behind%20Yaga%20Calls"],
  },
};

export default function AuthorsIndexPage() {
  const pageUrl = "https://www.yagacalls.com/authors";

  const webPageSchema = createWebPageSchema({
    title: "Our Analysts & Writers",
    description: "Meet the research analysts, on-chain investigators, and market writers behind Yaga Calls.",
    url: pageUrl,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Blog", item: "/blog" },
    { name: "Authors", item: "/authors" },
  ]);

  const itemListSchema = createItemListSchema(
    authors.map((a) => ({ name: a.name, url: `/authors/${a.slug}` }))
  );

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      <div className="min-h-screen bg-black text-white">
        <Section className="bg-surface/30 pt-28 pb-16">
          <Container className="max-w-4xl">
            <Breadcrumbs items={[{ label: "Authors", href: "/authors" }]} />
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-text-high mt-6">
              Our Analysts &amp; Writers
            </h1>
            <p className="text-sm text-text-muted mt-4 max-w-2xl leading-relaxed">
              Yaga Calls&apos; research is written by a global team of on-chain investigators, regulatory researchers,
              derivatives analysts, and market writers — each covering the regions and specialties they know best.
            </p>
          </Container>
        </Section>

        <Section className="py-16">
          <Container className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authors.map((author) => {
                const postCount = getPostsByAuthorSlug(author.slug).length + getWorksByAuthorSlug(author.slug).length;
                return (
                  <Link key={author.slug} href={`/authors/${author.slug}`} className="block group">
                    <GlowCard className="h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-primary to-primary/40 flex items-center justify-center text-2xl shrink-0">
                          {author.countryFlag}
                        </div>
                        <div className="min-w-0">
                          <h2 className="text-base font-bold text-text-high group-hover:text-primary transition-colors">
                            {author.name}
                          </h2>
                          <p className="text-primary text-xs font-bold mt-0.5">{author.jobTitle}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3 h-3 text-primary" /> {author.country}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="w-3 h-3 text-primary" /> {author.experienceYears} Yrs
                            </span>
                          </div>
                          <p className="text-xs text-text-muted mt-3 leading-relaxed line-clamp-2">
                            {author.specialty}
                          </p>
                          <div className="flex items-center gap-1.5 mt-4 text-[10px] font-black uppercase tracking-widest text-primary">
                            {postCount} Article{postCount === 1 ? "" : "s"} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
