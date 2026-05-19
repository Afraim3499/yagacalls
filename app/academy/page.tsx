import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import { GraduationCap } from "lucide-react";

export const metadata = {
  title: "Yaga Calls Academy | Learn Crypto Signals and Risk Management",
  description: "Learn how crypto signals work, how to read entries and targets, and how to manage risk before following any setup.",
  alternates: {
    canonical: "https://www.yagacalls.com/academy",
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

import fs from "fs";
import path from "path";
import Link from "next/link";

interface AcademyModule {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export default function AcademyPage() {
  const filePath = path.join(process.cwd(), "content/data/academy.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const modules: AcademyModule[] = JSON.parse(jsonData);

  return (
    <>
      <Section className="bg-surface/30">
        <Container className="text-center max-w-3xl">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
          <h1 className="text-4xl md:text-6xl font-black mb-6">Yaga Calls Academy</h1>
          <p className="text-lg text-text-muted">
            A practical knowledge base for tools, tactics, and the money management frameworks that actually compound wealth.
          </p>
        </Container>
      </Section>
 
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <Link href={`/academy/${mod.slug}`} key={mod.slug} className="block">
                <GlowCard className="group cursor-pointer hover:border-primary/50 transition-all h-full flex flex-col">
                  <div className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded inline-block mb-4 w-fit">
                    {mod.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{mod.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">{mod.description}</p>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mt-auto">
                    Learn Module →
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
          <div className="mt-16 p-8 bg-surface-deep border border-line rounded-3xl text-center">
            <h3 className="text-xl font-bold mb-4">Want 1-on-1 Mentorship?</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Our Premium members get direct access to our analysts for setup reviews and deeper strategy discussions.
            </p>
            <Link 
              href="/pricing"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest text-sm transition-all"
            >
              Get Premium Signals
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
