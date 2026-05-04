import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createCourseSchema, createBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

interface AcademyModule {
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
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

export default async function AcademyModulePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/data/academy.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const modules: AcademyModule[] = JSON.parse(jsonData);
  const mod = modules.find((m) => m.slug === slug);

  if (!mod) {
    notFound();
  }

  const pageUrl = `https://www.yagacalls.com/academy/${slug}`;
  const courseSchema = createCourseSchema({
    name: mod.title,
    description: mod.description,
    url: pageUrl
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
            {mod.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {mod.title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            {mod.description}
          </p>
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

          <div className="mt-20 p-8 bg-primary/5 border border-primary/20 rounded-3xl text-center">
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
