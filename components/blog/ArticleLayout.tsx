import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import JsonLd from "@/components/seo/JsonLd";
import { createBlogPostingSchema, createBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "./Breadcrumbs";
import TableOfContents from "./TableOfContents";
import FAQSection from "./FAQSection";
import CTABox from "./CTABox";
import RelatedPosts from "./RelatedPosts";
import RiskDisclaimer from "./RiskDisclaimer";

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
  children
}: ArticleLayoutProps) {
  const pageUrl = `https://www.yagacalls.com/blog/${slug}`;
  
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
    dateModified: dateModified || datePublished
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Blog", item: "/blog" },
    { name: title, item: `/blog/${slug}` }
  ]);

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

            <Breadcrumbs items={[{ label: title, href: `/blog/${slug}` }]} />

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-md tracking-wider">
                {category}
              </span>
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
          </Container>
        </Section>

        {/* Featured Image Section */}
        <Section className="py-0">
          <Container className="max-w-4xl">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-line shadow-2xl bg-surface-deep/20">
              <Image
                src={featuredImage}
                alt={featuredImageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </Container>
        </Section>

        {/* Main Content Area */}
        <Section className="py-16">
          <Container className="max-w-3xl">
            {/* Executive Summary card */}
            <div className="bg-surface-deep/40 p-6 rounded-2xl border border-line mb-12 shadow-sm">
              <h3 className="font-black mb-3 uppercase tracking-widest text-xs text-primary">
                Executive Overview
              </h3>
              <p className="text-xs text-text-muted leading-relaxed italic">
                {excerpt}
              </p>
            </div>

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
