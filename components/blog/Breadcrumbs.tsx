import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-text-muted mb-6 overflow-x-auto whitespace-nowrap py-1">
      <Link
        href="/"
        className="hover:text-primary transition-colors flex items-center gap-1 shrink-0"
      >
        <Home className="w-3 h-3" /> Home
      </Link>
      <ChevronRight className="w-3 h-3 text-line shrink-0" />
      <Link
        href="/blog"
        className="hover:text-primary transition-colors shrink-0"
      >
        Blog
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-line shrink-0" />
            {isLast ? (
              <span className="text-primary truncate max-w-[200px] md:max-w-xs shrink-0">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors shrink-0"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
