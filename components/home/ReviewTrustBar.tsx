"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, MessageSquare, Activity } from "lucide-react";
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
    <div className="w-full bg-[#0C0B09] border-y border-[rgba(243,208,129,0.08)] py-4 shadow-xl backdrop-blur-md relative z-20 overflow-hidden">
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
                        ? "text-[#F3D081] fill-[#F3D081] drop-shadow-[0_0_8px_rgba(243,208,129,0.4)]" 
                        : "text-[#3F3F46] fill-[#27272A]"
                    }`} 
                  />
                );
              })}
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-[#FFFFFF] font-mono">
              {displayRating} / 5.0 RATING
            </span>

            {/* Verified Reviews pill: translucent dark fill + champagne border + gold text + PULSING TELEMETRY DOT */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[rgba(226,200,150,0.08)] border border-[#A38B5D]/40 text-[10px] font-black uppercase tracking-widest text-[#E2C896] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>{reviewCount > 0 ? `${reviewCount} VERIFIED ${reviewCount === 1 ? 'REVIEW' : 'REVIEWS'}` : 'VERIFIED MEMBERS'}</span>
            </div>
          </div>

          {/* Center: Live Real Data Tagline */}
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm font-bold text-[#A1A1AA]">
              Rated <span className="text-[#E2C896] font-black">{displayRating} Stars</span> by verified community members for structured signal logic & risk management.
            </p>
          </div>

          {/* Right: Interactive CTA Link to Review Hub */}
          <div className="flex items-center gap-3">
            <Link
              href="/yaga-calls-review"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(226,200,150,0.06)] hover:bg-[rgba(226,200,150,0.14)] border border-[rgba(243,208,129,0.18)] hover:border-[rgba(243,208,129,0.40)] text-[#E2C896] rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-200 group shadow-lg shadow-[rgba(226,200,150,0.05)]"
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
