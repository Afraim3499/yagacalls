import { NewsItem } from "@/types/content";
import GlowCard from "@/components/shared/GlowCard";
import { ExternalLink, Clock } from "lucide-react";

interface NewsFeedProps {
  data: NewsItem[];
}

export default function NewsFeed({ data }: NewsFeedProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-20 bg-surface-deep border border-line rounded-3xl">
        <h3 className="text-xl font-bold mb-2">No News Available</h3>
        <p className="text-text-muted">Check back soon for the latest cryptocurrency news updates.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <a key={item.id} href={item.link} target="_blank" rel="noopener" className="group">
          <GlowCard className="h-full border-line group-hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="px-2 py-1 bg-surface border border-line rounded text-[10px] font-bold text-text-muted uppercase">
                {item.source}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-text-muted font-bold uppercase">
                <Clock className="w-3 h-3" /> {item.date}
              </div>
            </div>
            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors mb-6">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
              Read Article <ExternalLink className="w-3 h-3" />
            </div>
          </GlowCard>
        </a>
      ))}
    </div>
  );
}
