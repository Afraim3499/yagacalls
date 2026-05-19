import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import { BookOpen, ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createItemListSchema, createBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AnswerBox from "@/components/seo/AnswerBox";
import BlogListingClient from "@/components/blog/BlogListingClient";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Yaga Calls Blog | Crypto Signals, Market Analysis and Trading Guides",
  description: "Read practical crypto trading guides, signal breakdowns, risk-management lessons, and market narrative analysis to help you understand the logic behind setups.",
  alternates: {
    canonical: "https://www.yagacalls.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image?: string;
  summary: string;
}

export default function BlogPage() {
  const filePath = path.join(process.cwd(), "content/data/blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: BlogPost[] = JSON.parse(jsonData);

  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Blog | Crypto Signals, Market Analysis and Trading Guides",
    description: "Read practical crypto trading guides, signal breakdowns, risk-management lessons, and market narrative analysis.",
    url: "https://www.yagacalls.com/blog"
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
      
      {/* 1. Header Section */}
      <Section className="bg-surface/30 pt-24 pb-12">
        <Container className="max-w-4xl text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            Trading Academy & Research Blog
          </h1>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Yaga Calls publishes practical crypto trading guides, signal breakdowns, risk-management lessons, and market narrative analysis to help traders understand the logic behind every setup.
          </p>

          <div className="mt-10 text-left">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
            <AnswerBox answer="The Yaga Calls blog provides in-depth crypto market analysis, narrative trading educational resources, stop-loss strategy guides, and detailed historical case studies designed to foster structured, risk-aware trading habits." />
          </div>
        </Container>
      </Section>

      {/* 2. Main Content Grid */}
      <Section className="py-12 border-t border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Interactive Blog Feed */}
            <div className="lg:col-span-8">
              <BlogListingClient posts={posts} />
            </div>

            {/* Right Column: Authoritative Sidebar Resources */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Box A: Official Resources */}
              <div className="border border-line bg-surface-deep/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Core Frameworks
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Understand the foundational mathematics and research cycles we execute daily to navigate global cryptocurrency liquidity.
                </p>
                <div className="space-y-3 pt-2">
                  <Link href="/pricing" className="group flex justify-between items-center text-xs font-bold text-text-high border-b border-line pb-3 hover:text-primary transition-colors">
                    <span>Premium Subscription Plans</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link href="/proof" className="group flex justify-between items-center text-xs font-bold text-text-high border-b border-line pb-3 hover:text-primary transition-colors">
                    <span>Verified Proof of Performance</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link href="/method" className="group flex justify-between items-center text-xs font-bold text-text-high border-b border-line pb-3 hover:text-primary transition-colors">
                    <span>Our Catalyst & Narrative Method</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link href="/risk-disclosure" className="group flex justify-between items-center text-xs font-bold text-text-high pb-1 hover:text-primary transition-colors">
                    <span>Legal Risk Disclosure</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Box B: Free Live Observation */}
              <div className="border border-line bg-gradient-to-br from-surface-deep/20 to-primary/5 rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Observe Live Setups
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Want to verify our communication style, narrative tracking, and setup parameters before upgrading? Join our unedited, public Telegram group to watch open ideas develop.
                </p>
                <Link 
                  href="https://t.me/+JFf8kBf01mg3OTg1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="grad-button text-background text-center block w-full text-xs font-bold uppercase tracking-widest py-3 rounded-xl shadow-lg"
                >
                  Join Public Telegram
                </Link>
              </div>

              {/* Box C: Educational Disclaimer */}
              <div className="border border-line bg-surface-deep/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-text-high flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-primary" /> Trading Notice
                </h4>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  Cryptocurrency asset markets are exceptionally volatile. Past performance case studies are not indicative of future results. All content is for educational use only and does not constitute investment advice.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
