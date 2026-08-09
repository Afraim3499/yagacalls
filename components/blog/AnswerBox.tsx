"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerBoxProps {
  answer: string;
  title?: string;
  entityName?: string;
  className?: string;
}

export default function AnswerBox({
  answer,
  title = "AI Overview & Key Takeaway",
  entityName,
  className
}: AnswerBoxProps) {
  if (!answer) return null;

  return (
    <div
      className={cn(
        "border border-primary/30 bg-gradient-to-br from-surface-deep via-primary/5 to-surface-deep p-5 md:p-6 rounded-2xl shadow-sm mb-8 relative overflow-hidden",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs uppercase tracking-widest">
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span>{title}</span>
        {entityName && (
          <span className="text-[10px] bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded-full font-mono font-normal">
            Entity: {entityName}
          </span>
        )}
      </div>
      <p className="text-xs md:text-sm text-text-high leading-relaxed font-medium">
        {answer}
      </p>
    </div>
  );
}
