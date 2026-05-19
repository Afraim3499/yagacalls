import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

interface CTABoxProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABox({
  title = "Ready to Trade with Professional Guidance?",
  description = "Get narrative-driven setups, strict risk invalidation levels, and precise entry targets sent directly to your private Telegram thread.",
  ctaText = "Join Public Telegram Free",
  ctaHref = "https://t.me/+JFf8kBf01mg3OTg1"
}: CTABoxProps) {
  const isExternal = ctaHref.startsWith("http");

  return (
    <div className="relative overflow-hidden border border-line bg-gradient-to-br from-surface-deep/40 to-primary/5 rounded-3xl p-8 my-12 shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-text-high leading-tight">
            {title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end items-stretch">
          {isExternal ? (
            <Link
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="grad-button text-background text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare className="w-4 h-4" /> {ctaText}
            </Link>
          ) : (
            <Link
              href={ctaHref}
              className="grad-button text-background text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-center"
            >
              {ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link
            href="/pricing"
            className="bg-surface hover:bg-line border border-line text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl inline-flex items-center justify-center text-center transition-colors text-text-high"
          >
            View Premium Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
