import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { blogPostsMetadata } from "@/content/blog/posts";

interface RelatedPostsProps {
  relatedSlugs?: string[];
  currentSlug: string;
}

export default function RelatedPosts({ relatedSlugs = [], currentSlug }: RelatedPostsProps) {
  // If no specific related slugs are provided, pick two random ones that aren't the current post
  const displayPosts = relatedSlugs.length > 0
    ? blogPostsMetadata.filter(post => relatedSlugs.includes(post.slug))
    : blogPostsMetadata.filter(post => post.slug !== currentSlug).slice(0, 2);

  if (displayPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-line">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-text-high">
          Recommended Reading
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="group block border border-line bg-surface-deep/10 rounded-2xl p-5 hover:border-primary/40 transition-colors h-full flex flex-col justify-between"
          >
            <div className="space-y-4">
              {post.featuredImage && (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-line">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-primary text-[9px] font-black uppercase px-2 py-0.5 rounded border border-line tracking-widest">
                    {post.category}
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest">
                  <Clock className="w-3 h-3" /> {post.datePublished}
                  <span className="w-1 h-1 bg-line rounded-full" />
                  <span>{post.readingTime}</span>
                </div>
                <h4 className="text-lg font-black leading-snug uppercase tracking-tight text-text-high group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
            <div className="text-[10px] font-black text-primary uppercase tracking-widest mt-6 pt-4 border-t border-line flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Guide <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
