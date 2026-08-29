import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onMouseMove?: React.MouseEventHandler<HTMLElement>;
}

export default function Section({ children, className, id, onMouseMove }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)} onMouseMove={onMouseMove}>
      {children}
    </section>
  );
}
