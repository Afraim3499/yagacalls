import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl p-6 group transition-all duration-300",
      "bg-[rgba(14,15,18,0.70)] backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] [transform:translateZ(0)]",
      "border border-[rgba(243,208,129,0.10)]",
      "hover:border-[rgba(243,208,129,0.25)] hover:shadow-[0_0_30px_rgba(226,200,150,0.08)]",
      className
    )}>
      {/* Top-edge specular highlight (light catching from above) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(243,208,129,0.15)] to-transparent" />
      {/* Hover warm glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(226,200,150,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
