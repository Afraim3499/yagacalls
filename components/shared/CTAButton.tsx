"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { trackTelegramClick } from "@/lib/trackTelegramClick";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
  trackingLabel?: string;
  fullWidth?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  target,
  rel,
  trackingLabel,
  fullWidth,
}: CTAButtonProps) {
  const pathname = usePathname();
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-[linear-gradient(135deg,#E2C896_0%,#CBB079_50%,#A38B5D_100%)] text-[#09090B] shadow-[0_0_15px_rgba(226,200,150,0.20)] hover:shadow-[0_0_25px_rgba(226,200,150,0.40)]",
    secondary: "bg-[rgba(14,15,18,0.70)] backdrop-blur-md border border-[rgba(243,208,129,0.12)] text-[#E2C896] hover:border-[rgba(243,208,129,0.30)] hover:bg-[rgba(18,17,15,0.85)]",
    outline: "border border-[#A38B5D] text-[#E2C896] hover:bg-[rgba(226,200,150,0.08)]",
  };

  const handleClick = () => {
    // Determine if this is a conversion event (Telegram links)
    if (href.includes('t.me')) {
      trackTelegramClick(trackingLabel || children?.toString() || href, pathname);
    }
  };

  return (
    <Link
      href={href}
      className={cn(
        baseStyles, 
        variants[variant], 
        fullWidth && "w-full",
        className
      )}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
