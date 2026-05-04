import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createBlogPostingSchema, createBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import KeyTakeaways from "@/components/seo/KeyTakeaways";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image?: string;
  summary: string;
  content: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "content/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: BlogPost[] = JSON.parse(jsonData);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: BlogPost[] = JSON.parse(jsonData);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `https://www.yagacalls.com/blog/${slug}`;
  const blogSchema = createBlogPostingSchema({
    title: post.title,
    description: post.summary,
    url: pageUrl,
    datePublished: post.date,
    image: post.image ? `https://www.yagacalls.com${post.image}` : undefined
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Blog', item: '/blog' },
    { name: post.title, item: `/blog/${slug}` }
  ]);

  return (
    <article>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Section className="bg-surface/30 pt-24 pb-12">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${slug}` }
          ]} />
          <div className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded inline-block mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-bold text-text-muted uppercase tracking-widest">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-line rounded-full" />
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
        </Container>
      </Section>

      {post.image && (
        <Section className="py-0">
          <Container className="max-w-5xl">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-line shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container className="max-w-3xl">
          <div className="bg-surface p-6 rounded-2xl border border-line mb-12">
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Executive Summary</h3>
            <p className="text-text-muted leading-relaxed italic">{post.summary}</p>
          </div>

          <KeyTakeaways items={[
            'Detailed market narrative analysis',
            'Risk-managed trading setup context',
            'Strategic entry and exit considerations',
            'Historical comparison and track record'
          ]} />
          
          <div 
            className="prose prose-invert prose-amber max-w-none 
              prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-text-muted prose-p:leading-relaxed
              prose-strong:text-text-high
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-12 border-t border-line text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to See Our Method in Action?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={post.ctaHref || "https://t.me/yagacalls"} target={post.ctaHref?.startsWith('http') ? "_blank" : "_self"} className="grad-button text-background px-8 py-3 rounded-xl font-bold">
                {post.ctaLabel || "Join Public Group"}
              </Link>
              <Link href="/pricing" className="bg-surface border border-line text-primary px-8 py-3 rounded-xl font-bold hover:bg-line transition-colors">
                View Premium Plans
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
