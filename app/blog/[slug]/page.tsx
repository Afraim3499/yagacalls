import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPostsMetadata } from "@/content/blog/posts";
import ArticleLayout from "@/components/blog/ArticleLayout";

// Import all 6 long-form TSX article bodies
import BestCryptoSignalsGroup from "@/content/blog/articles/BestCryptoSignalsGroup";
import TelegramCryptoSignalsTrustworthy from "@/content/blog/articles/TelegramCryptoSignalsTrustworthy";
import CryptoSignalsForBeginners from "@/content/blog/articles/CryptoSignalsForBeginners";
import WhyStopLossMatters from "@/content/blog/articles/WhyStopLossMatters";
import NarrativeTradingCrypto from "@/content/blog/articles/NarrativeTradingCrypto";
import SuiRallyCaseStudy from "@/content/blog/articles/SuiRallyCaseStudy";

// Map slugs directly to their respective TSX content components
const articleBodies: Record<string, React.ComponentType> = {
  "best-crypto-signals-group": BestCryptoSignalsGroup,
  "telegram-crypto-signals-trustworthy": TelegramCryptoSignalsTrustworthy,
  "crypto-signals-for-beginners": CryptoSignalsForBeginners,
  "why-stop-loss-matters": WhyStopLossMatters,
  "narrative-trading-crypto": NarrativeTradingCrypto,
  "how-we-called-sui-rally": SuiRallyCaseStudy,
};

export async function generateStaticParams() {
  return blogPostsMetadata.map((post) => ({
    slug: post.slug,
  }));
}

function resolveImageUrl(image?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith('http')) return image;
  return `https://www.yagacalls.com${image}`;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsMetadata.find((p) => p.slug === slug);

  if (!post) return {};

  const imageUrl = resolveImageUrl(post.featuredImage);

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://www.yagacalls.com/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://www.yagacalls.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.featuredImageAlt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = blogPostsMetadata.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Look up corresponding TSX article body component
  const ArticleBodyComponent = articleBodies[slug];

  if (!ArticleBodyComponent) {
    notFound();
  }

  return (
    <ArticleLayout
      slug={post.slug}
      title={post.title}
      metaTitle={post.metaTitle}
      metaDescription={post.metaDescription}
      excerpt={post.excerpt}
      category={post.category}
      datePublished={post.datePublished}
      dateModified={post.dateModified}
      readingTime={post.readingTime}
      featuredImage={post.featuredImage}
      featuredImageAlt={post.featuredImageAlt}
      relatedSlugs={post.relatedPosts}
      faqs={post.faqs}
      tocItems={post.tocItems}
      ctaText={post.ctaLabel}
      ctaHref={post.ctaHref}
    >
      <ArticleBodyComponent />
    </ArticleLayout>
  );
}
