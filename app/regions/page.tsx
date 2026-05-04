import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { regionalPages } from '@/content/data/regions';
import LandingHero from '@/components/landing/LandingHero';
import JsonLd from '@/components/seo/JsonLd';
import { createWebPageSchema, createItemListSchema, createBreadcrumbSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AnswerBox from '@/components/seo/AnswerBox';

export const metadata: Metadata = {
  title: "Global Crypto Signal Regions | Yaga Calls",
  description: "Explore Yaga Calls' regional market analysis and Telegram crypto signal communities for high-purchase-power markets across the globe.",
  alternates: {
    canonical: 'https://yagacalls.com/regions'
  }
};

export default function RegionsHubPage() {
  const categories = [
    { name: "Middle East / GCC", slugs: ["middle-east", "uae", "dubai", "saudi-arabia", "qatar"] },
    { name: "Europe & UK", slugs: ["europe", "uk", "london", "germany", "switzerland"] },
    { name: "Russia & CIS", slugs: ["russia"] },
    { name: "North America", slugs: ["usa", "canada"] },
    { name: "Oceania", slugs: ["australia"] },
    { name: "High-Income Asia", slugs: ["singapore"] }
  ];

  const comparisonFeatures = [
    { name: "Telegram Access", global: "Included", regional: "Tailored Content" },
    { name: "Market Context", global: "Broad Global", regional: "Regional Nuance" },
    { name: "Timezone Timing", global: "24/7 Alerts", regional: "Session Optimized" },
    { name: "Manual Onboarding", global: "Standard", regional: "Priority Human Support" },
    { name: "Asset Selection", global: "Major Liquidity", regional: "Global + Liquid Regional" }
  ];

  const webPageSchema = createWebPageSchema({
    title: "Global Crypto Signal Regions | Yaga Calls",
    description: "Explore Yaga Calls' regional market analysis and Telegram crypto signal communities for high-purchase-power markets across the globe.",
    url: "https://yagacalls.com/regions"
  });

  const itemListSchema = createItemListSchema(
    regionalPages.map(p => ({ name: p.regionName, url: `/regions/${p.slug}` }))
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Regions', item: '/regions' }
  ]);

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={webPageSchema} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />
      <LandingHero 
        title="Global Crypto Trading Regions"
        subtitle="Professional market analysis and Telegram communities for traders in high-purchase-power regions."
        ctaPrimary={{ label: "Join Free Telegram", href: "https://t.me/yagacalls", variant: "primary" }}
        ctaSecondary={{ label: "View Pricing", href: "/pricing", variant: "outline" }}
      />

      <section className="container mx-auto px-4 pt-10">
        <Breadcrumbs items={[{ label: 'Regions', href: '/regions' }]} />
        <AnswerBox answer="Yaga Calls provides localized crypto market analysis and premium Telegram signal groups tailored for traders in high-purchase-power regions, ensuring high-quality research and session-aware timing." />
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter border-b border-amber-500/20 pb-4 inline-block">
                  {cat.name}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.slugs.map((slug) => {
                    const page = regionalPages.find(p => p.slug === slug);
                    if (!page) return null;
                    return (
                      <Link 
                        key={slug} 
                        href={`/regions/${slug}`}
                        className="group p-8 bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all hover:bg-white/[0.07]"
                      >
                        <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                          {page.regionName}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {page.introSummary}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500/50 group-hover:text-amber-500">
                          Explore Region
                          <span className="w-4 h-[1px] bg-amber-500/30 group-hover:w-8 transition-all" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter text-center">Regional vs. Global Advantages</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/10 text-left">
                <thead>
                  <tr className="bg-amber-500/10 border-b border-white/10">
                    <th className="p-4 font-bold uppercase tracking-widest text-sm">Feature</th>
                    <th className="p-4 font-bold uppercase tracking-widest text-sm">Global Experience</th>
                    <th className="p-4 font-bold uppercase tracking-widest text-sm text-amber-500">Regional Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((f, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-300 font-medium">{f.name}</td>
                      <td className="p-4 text-gray-500">{f.global}</td>
                      <td className="p-4 text-amber-500/90 font-bold">{f.regional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-center text-gray-500 text-sm italic">
              *Regional content is optimized for high-purchase-power traders seeking localized context and session-aware research.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Not in these regions?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Yaga Calls is a global community. While we highlight these regions, our Telegram signals serve professional traders across all major crypto markets worldwide.
          </p>
          <Link 
            href="https://t.me/yagacalls"
            className="px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-colors"
          >
            Join Global Telegram
          </Link>
        </div>
      </section>
    </main>
  );
}
