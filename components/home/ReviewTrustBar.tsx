"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import Container from "../shared/Container";

export default function ReviewTrustBar() {
  const [avgRating, setAvgRating] = useState<number>(5.0);
  const [reviewCount, setReviewCount] = useState<number>(0);

  useEffect(() => {
    async function calculateLiveRating() {
      try {
        const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4";
        const res = await fetch("https://ghwvwtwktnveqdqivxmy.supabase.co/rest/v1/reviews?select=rating&status=eq.APPROVED", {
          headers: { "apikey": apiKey }
        });
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const totalScore = data.reduce((acc: number, r: any) => acc + (Number(r.rating) || 5), 0);
          const calculatedAvg = Number((totalScore / data.length).toFixed(1));
          setAvgRating(calculatedAvg);
          setReviewCount(data.length);
        } else {
          setAvgRating(5.0);
          setReviewCount(0);
        }
      } catch (e) {
        console.error("Error fetching live rating stats:", e);
      }
    }

    calculateLiveRating();
  }, []);

  const fullStars = Math.floor(avgRating);
  const displayRating = avgRating.toFixed(1);

  return (
    <div className="w-full bg-gradient-to-r from-emerald-950/40 via-surface-deep to-slate-950 border-y border-primary/20 py-4 shadow-xl backdrop-blur-md relative z-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Dynamic Star Ratings & Live Score */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < fullStars;
                return (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      isFilled 
                        ? "text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                        : "text-slate-700 fill-slate-800"
                    }`} 
                  />
                );
              })}
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-text">
              {displayRating} / 5.0 Rating
            </span>

            <div className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
              <ShieldCheck className="w-3 h-3 text-primary" />
              <span>{reviewCount > 0 ? `${reviewCount} Verified ${reviewCount === 1 ? 'Review' : 'Reviews'}` : 'Verified Members'}</span>
            </div>
          </div>

          {/* Center: Live Real Data Tagline */}
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm font-bold text-text-muted">
              Rated <span className="text-primary font-black">{displayRating} Stars</span> by verified community members for structured signal logic & risk management.
            </p>
          </div>

          {/* Right: Interactive CTA Link to Review Hub */}
          <div className="flex items-center gap-3">
            <Link
              href="/yaga-calls-review"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-200 group shadow-lg shadow-primary/10"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>See Member Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
