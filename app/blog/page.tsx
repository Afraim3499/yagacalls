import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import { BookOpen, Clock } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createItemListSchema, createBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AnswerBox from "@/components/seo/AnswerBox";

export const metadata = {
  title: "Yaga Calls Blog | Crypto Signals, Market Analysis and Trading Guides",
  description: "Read crypto trading guides, market analysis, and educational articles about Telegram crypto signals and risk management.",
};

import fs from "fs";
import path from "path";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export default function BlogPage() {
  const filePath = path.join(process.cwd(), "content/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: BlogPost[] = JSON.parse(jsonData);

  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Blog | Crypto Signals, Market Analysis and Trading Guides",
    description: "Read crypto trading guides, market analysis, and educational articles about Telegram crypto signals.",
    url: "https://yagacalls.com/blog"
  });

  const itemListSchema = createItemListSchema(
    posts.map(p => ({ name: p.title, url: `/blog/${p.slug}` }))
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Blog', item: '/blog' }
  ]);

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Section className="bg-surface/30">
        <Container className="text-center max-w-3xl">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
          <h1 className="text-4xl md:text-6xl font-black mb-6">Trading Blog</h1>
          <p className="text-lg text-text-muted">
            Deep-dives into market cycles, risk management frameworks, and real-world trading case studies.
          </p>

          <div className="mt-10 text-left">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
            <AnswerBox answer="The Yaga Calls blog provides in-depth crypto market analysis, trading guides, and narrative research to help members understand the logic behind high-probability signal generation." />
          </div>
        </Container>
      </Section>
 
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
                <GlowCard className="group cursor-pointer hover:border-primary/50 transition-all flex flex-col h-full">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">
                    <Clock className="w-3 h-3" /> {post.date}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-8 flex-grow">
                    {post.summary}
                  </p>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mt-auto border-t border-line pt-6 group-hover:gap-3 transition-all flex items-center gap-2">
                    Read Full Article →
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
