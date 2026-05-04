import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import CTAButton from "@/components/shared/CTAButton";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema, createBreadcrumbSchema, createImageObjectSchema } from "@/lib/schema";
import AnswerBox from "@/components/seo/AnswerBox";
import KeyTakeaways from "@/components/seo/KeyTakeaways";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata = {
  title: "Yaga Calls Proof | Selected Crypto Signal Examples",
  description: "View selected historical examples of Yaga Calls crypto signal setups with context, dates, and risk disclaimers.",
};

const proofImages = [
  { src: "/proof/10.08.25 (result).png", label: "Result", date: "10-08-2025" },
  { src: "/proof/10.08.25 (result 2).png", label: "Result", date: "10-08-2025" },
  { src: "/proof/bina result.png", label: "Binance", date: "Recent" },
  { src: "/proof/cake.png", label: "CAKE", date: "Recent" },
  { src: "/proof/cz's wife.png", label: "CZ's Wife", date: "Recent" },
  { src: "/proof/10.08.25.png", label: "Setup", date: "10-08-2025" },
];

export default function ProofPage() {
  const webPageSchema = createWebPageSchema({
    title: "Yaga Calls Proof | Selected Crypto Signal Examples",
    description: "View selected historical examples of Yaga Calls crypto signal setups with context, dates, and risk disclaimers.",
    url: "https://www.yagacalls.com/proof"
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Proof', item: '/proof' }
  ]);

  const imageSchemas = proofImages.map(img => createImageObjectSchema({
    url: `https://www.yagacalls.com${img.src}`,
    caption: `${img.label} Setup - ${img.date}`
  }));

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={imageSchemas} />
      <Section className="bg-surface/30 pt-16 md:pt-24">
        <Container className="text-center max-w-4xl">
          <Breadcrumbs items={[{ label: 'Proof', href: '/proof' }]} />
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Selected Crypto Signal Examples & Track Record</h1>
          <p className="text-lg text-text-muted leading-relaxed">
            These are selected historical snapshots shared for transparency and education. They do not guarantee future results. Full context and ongoing updates are pinned in our public community group. Crypto trading involves risk of loss.
          </p>

          <AnswerBox answer="Yaga Calls provides selected historical evidence of our market analysis and signals, demonstrating our 'Narrative Killer' method in action. We share these for transparency, emphasizing that past performance is never a guarantee of future results." />
          
          <KeyTakeaways items={[
            'Historical setups with entry and target context',
            'Transparency across various crypto narratives',
            'Evidence-based signal generation education',
            'Live results frequently updated in our Telegram'
          ]} />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <CTAButton href="https://t.me/yagacalls" target="_blank" trackingLabel="proof_join_free">
              See Live Proof in Group
            </CTAButton>
            <CTAButton href="/method" variant="secondary" trackingLabel="proof_to_method">
              Understand Our Method
            </CTAButton>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Selected Setup Snapshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {proofImages.map((img, i) => (
              <GlowCard key={i} className="p-2 overflow-hidden flex flex-col group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-line">
                  <Image
                    src={img.src}
                    alt={`${img.label} ${img.date}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-line">
                    Selected Historical Example
                  </div>
                </div>
                <div className="px-4 pb-4 flex justify-between items-center mt-auto">
                  <div className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded">
                    Educational Snapshot
                  </div>
                  <div className="text-[10px] font-bold text-text-muted uppercase">
                    {img.date}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
          <div className="mt-12 p-6 bg-surface border border-line rounded-2xl text-center max-w-2xl mx-auto">
            <p className="text-xs text-text-muted italic leading-relaxed">
              *Past performance is not indicative of future results. These snapshots represent high-conviction setups shared with our premium members. Trading involves risk of loss.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary/5">
        <Container className="text-center">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Trade with Data, Not Hype</h2>
          <p className="text-text-muted mb-10 max-w-xl mx-auto leading-relaxed">
            Stop guessing and start following a systematic, research-backed framework for crypto signal generation.
          </p>
          <CTAButton href="/pricing" className="px-12 py-5 text-lg" trackingLabel="proof_to_pricing">
            View Premium Plans
          </CTAButton>
        </Container>
      </Section>
    </>
  );
}
