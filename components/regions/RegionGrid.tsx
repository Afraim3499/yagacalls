import Container from "../shared/Container";
import Section from "../shared/Section";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export default function RegionGrid() {
  const regions = [
    { name: "GCC Crypto Signals", kw: "crypto signals GCC", desc: "For traders across the Gulf region looking for premium Telegram crypto signals and narrative research.", link: "/regions/gcc" },
    { name: "UAE Crypto Signals", kw: "crypto signals UAE", desc: "For UAE-based traders who want structured crypto market analysis and Telegram-first delivery.", link: "/regions/uae" },
    { name: "Dubai Crypto Signals", kw: "crypto signals Dubai", desc: "For Dubai traders looking for premium research, professional Telegram delivery, and risk context.", link: "/regions/dubai" },
    { name: "Saudi Arabia Crypto Signals", kw: "crypto signals Saudi Arabia", desc: "For Saudi traders who want structured Telegram crypto signal notes and narrative-driven research.", link: "/regions/saudi-arabia" },
    { name: "Qatar Crypto Signals", kw: "crypto signals Qatar", desc: "For Qatar-based traders seeking premium crypto market intelligence and disciplined setup planning.", link: "/regions/qatar" },
    { name: "UK Crypto Signals", kw: "crypto signals UK", desc: "For UK traders who want transparent, research-led crypto signal notes with risk context.", link: "/regions/uk" },
    { name: "Europe Crypto Signals", kw: "crypto signals Europe", desc: "For European traders looking for professional crypto market analysis and premium signal structure.", link: "/regions/europe" },
    { name: "Germany Crypto Signals", kw: "crypto signals Germany", desc: "For Germany-based traders who value disciplined research and technical structure.", link: "/regions/germany" },
    { name: "Switzerland Crypto Signals", kw: "crypto signals Switzerland", desc: "For Swiss traders and investors who expect privacy, quality, and risk discipline.", link: "/regions/switzerland" },
    { name: "USA Crypto Signals", kw: "crypto signals USA", desc: "For US-based traders seeking education-first market analysis and risk-aware setup context.", link: "/regions/usa" },
    { name: "Australia Crypto Signals", kw: "crypto signals Australia", desc: "For Australian traders who want professional crypto signal notes and transparent risk framing.", link: "/regions/australia" },
    { name: "Singapore Crypto Signals", kw: "crypto signals Singapore", desc: "For Singapore-based traders who expect professional market intelligence and disciplined risk context.", link: "/regions/singapore" },
    { name: "Russia & CIS Crypto Signals", kw: "crypto signals Russia", desc: "For Russia and CIS-based traders who prefer Telegram-native crypto communities and structured notes.", link: "/regions/russia" },
  ];

  return (
    <Section id="region-grid" className="bg-background">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Choose Your Region</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Select the region closest to your location or trading session. Each regional page explains Yaga Calls’ positioning for that market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <Link 
                key={i} 
                href={region.link}
                className="p-8 rounded-[32px] bg-surface-deep border border-line hover:border-primary/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tighter">{region.name}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{region.kw}</p>
                    <p className="text-xs text-text-muted leading-relaxed">{region.desc}</p>
                  </div>
                </div>
                <div className="pt-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text group-hover:text-primary transition-colors">Explore Region →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
