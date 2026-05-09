import Container from "../shared/Container";
import Section from "../shared/Section";
import CTAButton from "../shared/CTAButton";
import Image from "next/image";

const regions = [
  "Dubai / UAE",
  "GCC",
  "United Kingdom",
  "United States",
  "Australia",
  "Singapore",
  "Germany",
  "Switzerland",
  "Russia / CIS"
];

export default function RegionalBlock() {
  return (
    <Section className="bg-surface-deep">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Built for Serious Crypto Traders Worldwide</h2>
            <div className="space-y-6">
              <p className="text-lg text-text-muted leading-relaxed">
                Yaga Calls is designed for traders in high-purchase-power <a href="/regions" className="text-primary hover:underline">crypto signal regions</a> who want better crypto market structure, not low-quality signal noise.
              </p>
              <p className="text-sm font-bold text-primary uppercase tracking-widest">
                The service is relevant for traders in:
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {regions.map((region) => (
                  <div key={region} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-bold uppercase tracking-tight">{region}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <CTAButton href="/regions" variant="outline" trackingLabel="home_regional_cta">
                  Explore Global Crypto Signal Regions
                </CTAButton>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-line shadow-2xl bg-black">
             <Image 
               src="/regions-hero.webp" 
               alt="Yaga Calls Global Crypto Regions Dashboard" 
               fill
               sizes="(max-width: 1024px) 100vw, 600px"
               className="object-contain"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
