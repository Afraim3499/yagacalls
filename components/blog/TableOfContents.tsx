"use client";

import React from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Adjust for sticky navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-surface-deep/30 border border-line rounded-2xl p-6 mb-12 shadow-sm">
      <div className="flex items-center gap-2 mb-4 border-b border-line pb-3">
        <List className="w-4 h-4 text-primary" />
        <h4 className="text-sm font-black uppercase tracking-widest text-text-high">
          Table of Contents
        </h4>
      </div>
      <nav>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-xs">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="text-text-muted hover:text-primary transition-colors flex items-start gap-2 py-0.5 leading-relaxed group"
              >
                <span className="text-primary/60 font-black tracking-tighter group-hover:text-primary shrink-0">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="group-hover:underline">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
