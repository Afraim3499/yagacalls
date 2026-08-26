import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, PenLine } from "lucide-react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import JsonLd from "@/components/seo/JsonLd";
import { createBlogPostingSchema, createBreadcrumbSchema } from "@/lib/schema";
import { blogPostsMetadata, EntityItem } from "@/content/blog/posts";
import { getAuthorBySlug } from "@/content/data/authors";
import Breadcrumbs from "./Breadcrumbs";
import TableOfContents from "./TableOfContents";
import FAQSection from "./FAQSection";
import CTABox from "./CTABox";
import RelatedPosts from "./RelatedPosts";
import RiskDisclaimer from "./RiskDisclaimer";
import AnswerBox from "./AnswerBox";

interface TOCItem {
  id: string;
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  relatedSlugs?: string[];
  faqs?: FAQItem[];
  tocItems?: TOCItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaText?: string;
  ctaHref?: string;

  // Semantic SEO & Topic Cluster Props (P0, P1, P2)
  primaryEntity?: EntityItem;
  secondaryEntities?: EntityItem[];
  authorSlug?: string;
  summaryAnswer?: string;
  topicHierarchy?: string[];
  parentPillarSlug?: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  slug,
  title,
  metaTitle,
  metaDescription,
  excerpt,
  category,
  datePublished,
  dateModified,
  readingTime,
  featuredImage,
  featuredImageAlt,
  relatedSlugs = [],
  faqs = [],
  tocItems = [],
  ctaTitle,
  ctaDescription,
  ctaText,
  ctaHref,
  primaryEntity,
  secondaryEntities,
  authorSlug,
  summaryAnswer,
  topicHierarchy = [],
  parentPillarSlug,
  children
}: ArticleLayoutProps) {
  const pageUrl = `https://www.yagacalls.com/blog/${slug}`;
  const author = getAuthorBySlug(authorSlug);
  const authorProfileUrl = author ? `https://www.yagacalls.com/authors/${author.slug}` : undefined;

  // Create absolute image URL for schemas
  const absoluteImageUrl = featuredImage.startsWith("http")
    ? featuredImage
    : `https://www.yagacalls.com${featuredImage}`;

  const blogSchema = createBlogPostingSchema({
    title,
    description: metaDescription,
    url: pageUrl,
    image: absoluteImageUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    authorName: author?.name ?? "Yaga Calls",
    authorType: author ? "Person" : "Organization",
    authorJobTitle: author?.jobTitle,
    authorUrl: authorProfileUrl,
    authorSameAs: authorProfileUrl,
    primaryEntity,
    secondaryEntities
  });

  // Construct Breadcrumb items: Home > Blog > [Parent Pillar >] Article Title.
  // The middle "category" tier (Strategy/Analysis/Beginner/Education) was
  // dropped for posts with no real parent pillar — there's no actual
  // category archive page behind those names, so it used to render as a
  // clickable breadcrumb step pointing at the exact same /blog URL as the
  // "Blog" step right before it (both in the JSON-LD and in the visible
  // on-page trail), which misled real readers, not just search engines.
  // Posts that *do* have a real parentPillarSlug still get that genuine
  // extra tier, since it points at a real, distinct page.
  const parentPillarPost = parentPillarSlug ? blogPostsMetadata.find(p => p.slug === parentPillarSlug) : undefined;

  const breadcrumbItems = [
    { name: "Blog", item: "/blog" },
    ...(parentPillarPost
      ? [{ name: parentPillarPost.title, item: `/blog/${parentPillarPost.slug}` }]
      : []
    ),
    { name: title, item: `/blog/${slug}` }
  ];

  const breadcrumbVisualItems = [
    ...(parentPillarPost
      ? [{ label: parentPillarPost.title, href: `/blog/${parentPillarPost.slug}` }]
      : []
    ),
    { label: title, href: `/blog/${slug}` }
  ];

  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="min-h-screen bg-black text-white">
        {/* Header Hero Section */}
        <Section className="bg-surface/30 pt-28 pb-10">
          <Container className="max-w-3xl">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back to Blog Feed
            </Link>

            <Breadcrumbs items={breadcrumbVisualItems} />

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-md tracking-wider">
                {category}
              </span>
              {parentPillarPost && (
                <span className="text-[10px] font-black uppercase bg-surface border border-line text-text-muted px-2.5 py-1 rounded-md tracking-wider">
                  Cluster Spoke
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-text-high mb-6">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[10px] font-black text-text-muted uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" /> Published: {datePublished}
              </span>
              {dateModified && dateModified !== datePublished && (
                <span className="flex items-center gap-1.5 text-primary">
                  <Calendar className="w-3.5 h-3.5" /> Updated: {dateModified}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" /> {readingTime}
              </span>
            </div>

            {author && authorProfileUrl && (
              <div className="mt-4 flex items-center gap-2 text-xs">
                <PenLine className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-text-muted">
                  Written by{" "}
                  <Link
                    href={`/authors/${author.slug}`}
                    className="font-bold text-text-high hover:text-primary transition-colors underline decoration-line underline-offset-4"
                  >
                    {author.name}
                  </Link>
                  <span className="text-text-muted">, {author.jobTitle} {author.countryFlag}</span>
                </span>
              </div>
            )}
          </Container>
        </Section>

        {/* Featured Image Section */}
        <Section className="py-0">
          <Container className="max-w-4xl">
            <div className="relative w-full rounded-3xl overflow-hidden border border-line shadow-2xl bg-surface-deep/40">
              <Image
                src={featuredImage}
                alt={featuredImageAlt}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 896px"
                className="w-full h-auto object-contain block rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </Container>
        </Section>

        {/* Main Content Area */}
        <Section className="py-16">
          <Container className="max-w-3xl">
            {/* Executive Summary card */}
            <div className="bg-surface-deep/40 p-6 rounded-2xl border border-line mb-8 shadow-sm">
              <h3 className="font-black mb-3 uppercase tracking-widest text-xs text-primary">
                Executive Overview
              </h3>
              <p className="text-xs text-text-muted leading-relaxed italic">
                {excerpt}
              </p>
            </div>

            {/* AEO / GEO Direct Answer Box */}
            {summaryAnswer && (
              <AnswerBox
                answer={summaryAnswer}
                entityName={primaryEntity?.name}
              />
            )}

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* Structured Article body */}
            <div 
              className="prose prose-invert prose-amber max-w-none 
                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-text-high
                prose-p:text-text-muted prose-p:leading-relaxed prose-p:text-sm prose-p:mb-6
                prose-strong:text-text-high prose-strong:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:uppercase prose-h2:tracking-tight prose-h2:text-primary prose-h2:border-b prose-h2:border-line prose-h2:pb-2
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-text-high
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-xs prose-ul:text-text-muted
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2 prose-ol:text-xs prose-ol:text-text-muted
                prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-surface-deep/30 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 prose-blockquote:not-italic"
            >
              {children}
            </div>

            {/* Call-to-action Block */}
            <CTABox
              title={ctaTitle}
              description={ctaDescription}
              ctaText={ctaText}
              ctaHref={ctaHref}
            />

            {/* Dynamic FAQs accordion */}
            <FAQSection faqs={faqs} />

            {/* Related recommendations */}
            <RelatedPosts relatedSlugs={relatedSlugs} currentSlug={slug} />

            {/* Standard risk and regulatory disclaimer */}
            <RiskDisclaimer />
          </Container>
        </Section>
      </article>
    </>
  );
}
