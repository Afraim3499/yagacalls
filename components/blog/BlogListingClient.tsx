"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GlowCard from "@/components/shared/GlowCard";
import { Clock, BookOpen, ChevronRight, Award, Compass, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image?: string;
  summary: string;
}

interface BlogListingClientProps {
  posts: BlogPost[];
}

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Education", "Strategy", "Beginner", "Analysis"];

  // Filter posts based on category selection
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  // The first post is always showcased as the Featured Article
  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter(post => post.slug !== featuredPost.slug);

  // Curated "Start Here" resources (Beginner education anchors)
  const startHerePosts = posts.filter(post => post.category === "Beginner" || post.slug === "why-stop-loss-matters");

  return (
    <div className="space-y-16">
      {/* 1. Featured Article Section */}
      {selectedCategory === "All" && featuredPost && (
        <div className="relative group rounded-3xl overflow-hidden border border-line bg-surface-deep/40 backdrop-blur-md p-6 lg:p-8 hover:border-primary/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {featuredPost.image && (
              <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-line">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 left-4 bg-primary text-background text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-lg">
                  Featured Article
                </div>
              </div>
            )}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold text-text-muted uppercase tracking-widest">
                  <span className="text-primary">{featuredPost.category}</span>
                  <span className="w-1 h-1 bg-line rounded-full" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-high group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  {featuredPost.summary}
                </p>
              </div>
              <div className="pt-6 border-t border-line">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="grad-button text-background text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl inline-flex items-center gap-2"
                >
                  Read Full Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Interactive Category Filter Bar */}
      <div className="border-y border-line py-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-text-muted mr-2">
            Filter by:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all border",
                selectedCategory === category
                  ? "bg-primary border-primary text-background font-black"
                  : "bg-surface-deep/30 border-line text-text-muted hover:text-text-high hover:border-text-muted"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Grid of Remaining/Filtered Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <GlowCard className="group cursor-pointer hover:border-primary/50 transition-all flex flex-col h-full bg-surface-deep/20">
              {post.image && (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-line mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-primary text-[9px] font-black uppercase px-2.5 py-1 rounded-lg tracking-wider border border-line">
                    {post.category}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3">
                <Clock className="w-3 h-3" /> {post.date}
                <span className="w-1 h-1 bg-line rounded-full" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-text-high group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-6 flex-grow">
                {post.summary}
              </p>
              <div className="text-[10px] font-black text-primary uppercase tracking-widest mt-auto border-t border-line pt-4 group-hover:gap-3 transition-all flex items-center gap-1.5">
                Read Full Article <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </GlowCard>
          </Link>
        ))}
      </div>

      {/* 4. Curated "Start Here" Module */}
      {selectedCategory === "All" && (
        <div className="border border-line bg-gradient-to-br from-surface-deep/30 to-background/50 rounded-3xl p-8 space-y-8 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-line pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-wider">
                <Award className="w-4 h-4" /> Recommended Syllabus
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                New to Trading? Start Here
              </h2>
            </div>
            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              If you are evaluating how to trade with professional guidance, we suggest starting with these essential risk and positioning blueprints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {startHerePosts.slice(0, 3).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block h-full">
                <div className="h-full border border-line bg-surface-deep/30 p-6 rounded-2xl hover:border-primary/40 transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-[9px] font-black uppercase text-primary tracking-widest">
                      {post.category}
                    </div>
                    <h4 className="text-base font-black text-text-high leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-text-muted line-clamp-2">
                      {post.summary}
                    </p>
                  </div>
                  <div className="text-[9px] font-black text-text-muted uppercase tracking-widest mt-6 group-hover:text-primary transition-colors flex items-center gap-1">
                    Begin Reading →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
