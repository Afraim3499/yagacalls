"use client";

import { MarketAnalysisItem } from "@/types/content";
import GlowCard from "@/components/shared/GlowCard";
import Badge from "@/components/shared/Badge";
import { TrendingUp, MessageSquare, ExternalLink } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

interface AnalysisFeedProps {
  data: MarketAnalysisItem[];
}

export default function AnalysisFeed({ data }: AnalysisFeedProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <GlowCard key={item.id} className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center font-black text-primary">
                {item.coin}
              </div>
              <div>
                <div className="text-xs font-bold text-text-muted uppercase tracking-widest">{item.date}</div>
                <div className="font-bold text-primary">{item.marketContext || "Active Signal"}</div>
              </div>
            </div>
            <div className={item.signalStatus === 'active' ? "animate-pulse" : ""}>
              <Badge variant={item.signalStatus === 'active' ? 'danger' : 'success'}>
                {item.signalStatus === 'active' ? "● Live" : "✓ Closed"}
              </Badge>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
            {item.hook}
          </h3>

          <div className="bg-surface p-4 rounded-xl border border-line mb-6 space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-text-muted">Entry Zone</span>
              <span className="font-bold">{item.entryZone}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-muted">Target Levels</span>
              <span className="font-bold text-success">{item.targets}</span>
            </div>
            {item.roiResult && (
              <div className="flex justify-between text-xs pt-2 border-t border-line">
                <span className="text-text-muted">Final Result</span>
                <span className="font-black text-success text-sm">{item.roiResult} Profit</span>
              </div>
            )}
          </div>

          <div 
            className="text-sm text-text-muted mb-6 flex-grow line-clamp-3 prose prose-invert"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />

          <div className="pt-6 border-t border-line mt-auto flex items-center justify-between">
            {item.linkType === 'telegram' ? (
              <CTAButton href={item.linkUrl} target="_blank" className="text-xs py-2 px-4 gap-2">
                <MessageSquare className="w-3 h-3" /> {item.linkText}
              </CTAButton>
            ) : (
              <CTAButton href={item.linkUrl} target="_blank" variant="secondary" className="text-xs py-2 px-4 gap-2">
                <ExternalLink className="w-3 h-3" /> View Proof
              </CTAButton>
            )}
            <div className="text-[10px] font-bold text-text-muted uppercase">Strength: {item.signalStrength}%</div>
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
