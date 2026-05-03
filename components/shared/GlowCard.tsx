import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className={cn(
      "grad-card border border-line rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(227,158,46,0.1)]",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
