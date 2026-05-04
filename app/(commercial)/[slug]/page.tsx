import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commercialPages } from '@/content/data/commercial';
import LandingHero from '@/components/landing/LandingHero';
import LandingContent from '@/components/landing/LandingContent';
import ManualOnboarding from '@/components/landing/ManualOnboarding';
import RegionalFAQ from '@/components/landing/RegionalFAQ';
import RiskDisclaimer from '@/components/landing/RiskDisclaimer';
import Link from 'next/link';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AnswerBox from '@/components/seo/AnswerBox';
import KeyTakeaways from '@/components/seo/KeyTakeaways';
import ComparisonTable from '@/components/seo/ComparisonTable';
import JsonLd from '@/components/seo/JsonLd';
import { createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = commercialPages.find(p => p.slug === slug);
  
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.yagacalls.com/${slug}`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.yagacalls.com/${slug}`,
      type: 'article'
    }
  };
}

export async function generateStaticParams() {
  return commercialPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function CommercialLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = commercialPages.find(p => p.slug === slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `https://www.yagacalls.com/${slug}`;
  const articleSchema = createArticleSchema({
    title: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    datePublished: '2024-05-01' // Placeholder - ideally from data
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: page.title, item: `/${slug}` }
  ]);
  const faqSchema = createFAQSchema(page.faqs);

  const comparisonRows = [
    { feature: 'Setup Frequency', free: 'Selected Setups', premium: 'Full Narrative Library' },
    { feature: 'Market Context', free: 'Basic Analysis', premium: 'Deep Narrative Research' },
    { feature: 'Entry/Exit Timing', free: 'Delayed / Partial', premium: 'Real-time via Telegram' },
    { feature: 'Risk Management', free: 'Limited Context', premium: 'Full Stop-Loss & Invalidation' },
    { feature: 'Direct Support', free: 'None', premium: '1-on-1 Manual Onboarding' }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <LandingHero 
        title={page.displayTitle}
        subtitle={page.introSummary}
        ctaPrimary={page.ctaPrimary}
        ctaSecondary={page.ctaSecondary}
      />

      <div className="container mx-auto px-4 pt-10">
        <Breadcrumbs items={[
          { label: page.title, href: `/${slug}` }
        ]} />
      </div>

      <section className="container mx-auto px-4">
        <AnswerBox answer={page.answerFirstBlock} />
        
        {page.marketContext && (
          <div className="mb-12 p-8 bg-amber-500/5 border border-amber-500/10">
            <h2 className="text-lg font-black mb-4 uppercase tracking-tighter text-amber-500">Industry Insight & Context</h2>
            <p className="text-gray-300 leading-relaxed italic">{page.marketContext}</p>
          </div>
        )}

        {slug === 'free-vs-paid-crypto-signals' && (
          <ComparisonTable 
            title="Comparison: Free Telegram vs Premium Access"
            rows={comparisonRows}
          />
        )}

        <KeyTakeaways items={[
          'Narrative-driven market analysis',
          'Professional risk management framework',
          'Human-led manual Telegram onboarding',
          'Transparency with verified historical proof'
        ]} />
      </section>

      <LandingContent sections={page.contentSections} />

      <ManualOnboarding content="Join our premium Telegram community manually to ensure the best possible start for your trading journey." />

      <RegionalFAQ faqs={page.faqs} />

      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-black mb-6 uppercase tracking-[0.2em] text-gray-500 text-center">Internal Navigation</h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {page.internalLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors text-sm uppercase tracking-widest font-bold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Last Reviewed: {page.lastReviewed || 'May 2026'} • Content for educational purposes only
          </p>
        </div>
      </section>

      <RiskDisclaimer content={page.riskDisclaimer} />
    </main>
  );
}
