import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        <li>
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-gray-700">/</span>
            {idx === items.length - 1 ? (
              <span className="text-amber-500 truncate max-w-[200px]" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-amber-500 transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
