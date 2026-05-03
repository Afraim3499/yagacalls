import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    danger: "bg-danger/10 text-danger border-danger/20",
    outline: "bg-transparent text-text-muted border-line",
  };

  return (
    <span className={cn(
      "text-[10px] font-black uppercase px-2 py-0.5 rounded border leading-none inline-flex items-center justify-center",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
