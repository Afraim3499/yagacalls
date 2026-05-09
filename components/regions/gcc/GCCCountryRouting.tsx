import Container from "../../shared/Container";
import Section from "../../shared/Section";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function GCCCountryRouting() {
  const cards = [
    { 
      name: "UAE Crypto Signals", 
      desc: "For UAE-based traders who want premium Telegram crypto signal notes, risk-aware market analysis, and manual onboarding.", 
      link: "/regions/uae",
      kw: "crypto signals UAE"
    },
    { 
      name: "Dubai Crypto Signals", 
      desc: "For Dubai traders looking for professional crypto signal research, Telegram delivery, proof examples, and risk context.", 
      link: "/regions/dubai",
      kw: "crypto signals Dubai"
    },
    { 
      name: "Saudi Arabia Crypto Signals", 
      desc: "For Saudi traders in Riyadh, Jeddah, Dammam, and across KSA who want structured Telegram crypto signals.", 
      link: "/regions/saudi-arabia",
      kw: "crypto signals Saudi Arabia"
    },
    { 
      name: "Qatar Crypto Signals", 
      desc: "For Qatar-based traders who value professional market intelligence, privacy, and risk-aware Telegram delivery.", 
      link: "/regions/qatar",
      kw: "crypto signals Qatar"
    },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">GCC Country Coverage</h2>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              Yaga Calls provides localized trust framing and onboarding for major Gulf markets. Choose your country-specific page for dedicated insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cards.map((card, i) => (
              <Link 
                key={i} 
                href={card.link}
                className="p-8 rounded-[32px] bg-surface-deep border border-line hover:border-primary/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tighter">{card.name}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{card.kw}</p>
                    <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </div>
                <div className="pt-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text group-hover:text-primary transition-colors">Explore {card.name.split(' ')[0]} Signals →</span>
                </div>
              </Link>
            ))}
            
            <div className="sm:col-span-2 p-8 rounded-[32px] border border-dashed border-line flex flex-col md:flex-row items-center justify-between gap-8 bg-surface-deep/40">
               <div className="space-y-2">
                 <h3 className="text-xl font-black uppercase tracking-tighter">Kuwait, Bahrain & Oman</h3>
                 <p className="text-xs text-text-muted max-w-md">For traders in Kuwait, Bahrain, and Oman, use this GCC page as the central regional entry point until dedicated pages are created.</p>
               </div>
               <Link href="https://t.me/+JFf8kBf01mg3OTg1" target="_blank" className="px-8 py-4 bg-primary text-black text-xs font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                 Join Free Telegram
               </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
