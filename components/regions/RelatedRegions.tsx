import Link from "next/link";
import { regionalPages } from "@/content/data/regions";

interface RelatedRegionsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export default function RelatedRegions({ currentSlug, relatedSlugs }: RelatedRegionsProps) {
  const related = regionalPages.filter(p => relatedSlugs.includes(p.slug) && p.slug !== currentSlug);

  if (related.length === 0) return null;

  return (
    <div className="py-12 border-t border-line mt-20">
      <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Related Regions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {related.map((region) => (
          <Link
            key={region.slug}
            href={`/regions/${region.slug}`}
            className="p-4 bg-surface-deep border border-line rounded-xl text-xs font-bold uppercase tracking-tight hover:border-primary/50 transition-all text-text-muted hover:text-text"
          >
            {region.regionName} Signals →
          </Link>
        ))}
      </div>
    </div>
  );
}
