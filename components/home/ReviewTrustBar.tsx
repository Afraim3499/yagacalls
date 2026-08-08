"use client";

import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import Container from "../shared/Container";

export default function ReviewTrustBar() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-950/40 via-surface-deep to-slate-950 border-y border-primary/20 py-4 shadow-xl backdrop-blur-md relative z-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Star Ratings & Verified Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                />
              ))}
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-text">
              4.9 / 5.0 Rating
            </span>

            <div className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
              <ShieldCheck className="w-3 h-3 text-primary" />
              <span>Verified Members</span>
            </div>
          </div>

          {/* Center: High Trust Social Proof Tagline */}
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm font-bold text-text-muted">
              Rated <span className="text-primary font-black">5 Stars</span> by active Telegram subscribers for structured signal logic & risk control.
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
