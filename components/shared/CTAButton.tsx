"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
  trackingLabel?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  target,
  rel,
  trackingLabel,
}: CTAButtonProps) {
  const pathname = usePathname();
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "grad-button text-background shadow-[0_0_15px_rgba(227,158,46,0.3)] hover:shadow-[0_0_25px_rgba(227,158,46,0.5)]",
    secondary: "bg-surface border border-line text-primary hover:bg-line",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  const handleClick = async () => {
    // Determine if this is a conversion event (Telegram links)
    if (href.includes('t.me')) {
      try {
        await fetch('/api/track/telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'telegram_click',
            label: trackingLabel || children?.toString() || href,
            path: pathname
          })
        });
      } catch (e) {
        // Fail silently - don't block the user
        console.warn('Tracking failed', e);
      }
    }
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
