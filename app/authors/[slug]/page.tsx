import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { authors, getAuthorBySlug, getPostsByAuthorSlug } from "@/content/data/authors";
import { createProfilePageSchema, createBreadcrumbSchema } from "@/lib/schema";
import { Calendar, Clock, Quote, ArrowRight, Briefcase, MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  const description = `${author.name}, ${author.jobTitle} at Yaga Calls (${author.country}). ${author.specialty}`;
  const ogImageUrl = `https://www.yagacalls.com/api/og?title=${encodeURIComponent(author.name)}&subtitle=${encodeURIComponent(author.jobTitle)}`;

  return {
    title: `${author.name} | ${author.jobTitle}`,
    description,
    alternates: {
      canonical: `https://www.yagacalls.com/authors/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
      title: `${author.name} — ${author.jobTitle}`,
      description,
      url: `https://www.yagacalls.com/authors/${slug}`,
      type: 'profile',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: author.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} — ${author.jobTitle}`,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function AuthorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = getPostsByAuthorSlug(slug);
  const pageUrl = `https://www.yagacalls.com/authors/${slug}`;

  const profileSchema = createProfilePageSchema({
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    url: pageUrl,
    nationality: author.country,
    knowsAbout: author.specialty.split(/,\s*/).map((s) => s.replace(/\.$/, "")),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Blog", item: "/blog" },
    { name: "Authors", item: "/authors" },
    { name: author.name, item: `/authors/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={profileSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen bg-black text-white">
        <Section className="bg-surface/30 pt-28 pb-16">
          <Container className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Authors", href: "/authors" }, { label: author.name, href: `/authors/${slug}` }]} />

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-primary/40 flex items-center justify-center text-4xl shrink-0">
                {author.countryFlag}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-text-high">
                  {author.name}
                </h1>
                <p className="text-primary font-bold text-sm mt-1">{author.jobTitle}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-[10px] font-black uppercase tracking-widest text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {author.country}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-primary" /> {author.experienceYears} Years Experience
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Active Since {author.activeSince}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="py-16">
          <Container className="max-w-3xl space-y-8">
            <GlowCard>
              <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Specialty</h2>
              <p className="text-sm text-text-muted leading-relaxed">{author.specialty}</p>
            </GlowCard>

            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Biography</h2>
              <p className="text-sm text-text-muted leading-relaxed">{author.bio}</p>
            </div>

            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Mission &amp; Impact</h2>
              <p className="text-sm text-text-muted leading-relaxed">{author.mission}</p>
            </div>

            <blockquote className="border-l-4 border-primary bg-surface-deep/30 p-6 rounded-r-2xl not-italic">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-primary shrink-0" />
                <p className="text-base text-text-high font-medium leading-relaxed">{author.philosophy}</p>
              </div>
            </blockquote>

            {posts.length > 0 && (
              <div className="pt-8 border-t border-line">
                <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-5">
                  Articles by {author.name} ({posts.length})
                </h2>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block p-5 rounded-2xl border border-line bg-surface-deep/30 hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-black uppercase bg-primary/15 text-primary border border-primary/20 px-2.5 py-0.5 rounded-md tracking-wider">
                            {post.category}
                          </span>
                          <h3 className="text-base font-bold text-text-high mt-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3 h-3" /> {post.datePublished}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3" /> {post.readingTime}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>
      </div>
    </>
  );
}
