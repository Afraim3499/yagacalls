import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regionalPages } from '@/content/data/regions';
import LandingHero from '@/components/landing/LandingHero';
import LandingContent from '@/components/landing/LandingContent';
import ManualOnboarding from '@/components/landing/ManualOnboarding';
import RegionalFAQ from '@/components/landing/RegionalFAQ';
import RiskDisclaimer from '@/components/landing/RiskDisclaimer';
import Link from 'next/link';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AnswerBox from '@/components/seo/AnswerBox';
import KeyTakeaways from '@/components/seo/KeyTakeaways';
import JsonLd from '@/components/seo/JsonLd';
import { createWebPageSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = regionalPages.find(p => p.slug === slug);
  
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.yagacalls.com/regions/${slug}`
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.yagacalls.com/regions/${slug}`,
      type: 'website'
    }
  };
}

export async function generateStaticParams() {
  const staticFolders = [
    'australia', 'dubai', 'europe', 'germany', 'qatar', 
    'saudi-arabia', 'singapore', 'switzerland', 'uae', 'uk', 'usa'
  ];
  return regionalPages
    .filter((page) => !staticFolders.includes(page.slug))
    .map((page) => ({
      slug: page.slug,
    }));
}

export default async function RegionalLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = regionalPages.find(p => p.slug === slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `https://www.yagacalls.com/regions/${slug}`;
  const webPageSchema = createWebPageSchema({
    title: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Regions', item: '/regions' },
    { name: page.regionName, item: `/regions/${slug}` }
  ]);
  const faqSchema = createFAQSchema(page.faqs);

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={webPageSchema} />
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
          { label: 'Regions', href: '/regions' },
          { label: page.regionName, href: `/regions/${slug}` }
        ]} />
      </div>

      <section className="container mx-auto px-4">
        <AnswerBox answer={page.answerFirstBlock} />
        <KeyTakeaways items={[
          `Narrative-driven setups for ${page.regionName} traders`,
          'Strict risk management with clear invalidation',
          'Manual Telegram onboarding for premium quality',
          'Educational market analysis and global session context'
        ]} />
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-amber-500">Market Context</h3>
              <p className="text-gray-400 leading-relaxed">{page.marketContext}</p>
            </div>
            <div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-amber-500">Trading Timing</h3>
              <p className="text-gray-400 leading-relaxed">{page.tradingTimezoneContext}</p>
            </div>
          </div>
        </div>
      </section>

      <LandingContent sections={page.contentSections} />

      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Why {page.regionName} Traders Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {page.userPainPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-black border border-white/5">
                  <div className="text-amber-500 font-bold">✓</div>
                  <p className="text-gray-300 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ManualOnboarding content={page.manualOnboardingCopy} />

      <RegionalFAQ faqs={page.faqs} regionName={page.regionName} />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-black mb-6 uppercase tracking-[0.2em] text-gray-500 text-center">Related Regions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {page.relatedRegions.map((relSlug) => {
                const relPage = regionalPages.find(p => p.slug === relSlug);
                if (!relPage) return null;
                return (
                  <Link 
                    key={relSlug}
                    href={`/regions/${relSlug}`}
                    className="px-6 py-3 bg-white/5 border border-white/5 hover:border-amber-500/30 text-sm font-bold transition-all"
                  >
                    {relPage.regionName}
                  </Link>
                );
              })}
              <Link 
                href="/regions"
                className="px-6 py-3 bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition-all"
              >
                All Regions
              </Link>
            </div>
          </div>
        </div>
      </section>

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
