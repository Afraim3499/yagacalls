import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createCourseSchema, createBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AuthorByline from "@/components/blog/AuthorByline";
import { getAuthorBySlug } from "@/content/data/authors";

interface AcademyModule {
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
  authorSlug?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "content/data/academy.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const modules: AcademyModule[] = JSON.parse(jsonData);
  return modules.map((mod) => ({
    slug: mod.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/data/academy.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const modules: AcademyModule[] = JSON.parse(jsonData);
  const mod = modules.find((m) => m.slug === slug);

  if (!mod) return {};

  const ogImageUrl = `https://www.yagacalls.com/api/og?title=${encodeURIComponent(mod.title)}&subtitle=${encodeURIComponent(mod.description)}`;
  const authorForMeta = getAuthorBySlug(mod.authorSlug);

  return {
    title: `${mod.title} | Yaga Calls Academy`,
    description: mod.description,
    alternates: {
      canonical: `https://www.yagacalls.com/academy/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
    siteName: "Yaga Calls",
      title: mod.title,
      description: mod.description,
      url: `https://www.yagacalls.com/academy/${slug}`,
      type: 'article',
      authors: authorForMeta ? [`https://www.yagacalls.com/authors/${authorForMeta.slug}`] : undefined,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: mod.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: mod.title,
      description: mod.description,
      images: [ogImageUrl],
    },
  };
}

export default async function AcademyModulePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/data/academy.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const modules: AcademyModule[] = JSON.parse(jsonData);
  const modIndex = modules.findIndex((m) => m.slug === slug);
  const mod = modules[modIndex];

  if (!mod) {
    notFound();
  }

  const prevMod = modIndex > 0 ? modules[modIndex - 1] : null;
  const nextMod = modIndex < modules.length - 1 ? modules[modIndex + 1] : null;

  const pageUrl = `https://www.yagacalls.com/academy/${slug}`;
  const author = getAuthorBySlug(mod.authorSlug);
  const authorProfileUrl = author ? `https://www.yagacalls.com/authors/${author.slug}` : undefined;
  const courseSchema = createCourseSchema({
    name: mod.title,
    description: mod.description,
    url: pageUrl,
    authorName: author?.name,
    authorType: author ? "Person" : undefined,
    authorJobTitle: author?.jobTitle,
    authorUrl: authorProfileUrl,
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Academy', item: '/academy' },
    { name: mod.title, item: `/academy/${slug}` }
  ]);

  return (
    <article>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Section className="bg-surface/30 pt-24 pb-12">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[
            { label: 'Academy', href: '/academy' },
            { label: mod.title, href: `/academy/${slug}` }
          ]} />
          <div className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded inline-block mb-4">
            Module {modIndex + 1} of {modules.length} · {mod.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {mod.title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            {mod.description}
          </p>
          <AuthorByline authorSlug={mod.authorSlug} className="mt-5" />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div 
            className="prose prose-invert prose-amber max-w-none 
              prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-text-high
              prose-p:text-text-muted prose-p:leading-relaxed
              prose-strong:text-text-high
              prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4
              prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
              prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: mod.content }}
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevMod ? (
              <Link
                href={`/academy/${prevMod.slug}`}
                className="group flex items-center gap-3 p-4 rounded-2xl border border-line hover:border-primary/50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">Previous · Module {modIndex}</div>
                  <div className="font-bold group-hover:text-primary transition-colors">{prevMod.title}</div>
                </div>
              </Link>
            ) : <div />}
            {nextMod && (
              <Link
                href={`/academy/${nextMod.slug}`}
                className="group flex items-center justify-end gap-3 p-4 rounded-2xl border border-line hover:border-primary/50 transition-colors text-right"
              >
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">Next · Module {modIndex + 2}</div>
                  <div className="font-bold group-hover:text-primary transition-colors">{nextMod.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary shrink-0" />
              </Link>
            )}
          </div>

          <div className="mt-8 p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-4">Master the Narrative Killer Method</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Get real-time application of these tools in our premium signal group.
            </p>
            <Link href={mod.ctaHref || "/pricing"} className="grad-button text-background px-10 py-4 rounded-xl font-bold inline-block">
              {mod.ctaLabel || "Get Premium Signals"}
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  );
}
