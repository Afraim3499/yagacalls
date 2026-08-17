import Link from "next/link";
import { PenLine } from "lucide-react";
import { getAuthorBySlug } from "@/content/data/authors";

interface AuthorBylineProps {
  authorSlug?: string;
  className?: string;
}

/**
 * Visible "Written by X, Title 🇫🇷" byline linking to the author's profile
 * page. Shared by every content type that carries an author but doesn't
 * render through ArticleLayout.tsx (which has its own inline copy of this
 * same markup) — standalone guide pages, academy modules, commercial
 * landing pages.
 */
export default function AuthorByline({ authorSlug, className }: AuthorBylineProps) {
  const author = getAuthorBySlug(authorSlug);
  if (!author) return null;

  return (
    <div className={`flex items-center gap-2 text-xs ${className || ""}`}>
      <PenLine className="w-3.5 h-3.5 text-primary shrink-0" />
      <span className="text-text-muted">
        Written by{" "}
        <Link
          href={`/authors/${author.slug}`}
          className="font-bold text-text-high hover:text-primary transition-colors underline decoration-line underline-offset-4"
        >
          {author.name}
        </Link>
        <span className="text-text-muted">, {author.jobTitle} {author.countryFlag}</span>
      </span>
    </div>
  );
}
