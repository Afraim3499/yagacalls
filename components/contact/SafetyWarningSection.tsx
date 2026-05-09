import Container from "../shared/Container";
import Section from "../shared/Section";
import Image from "next/image";
import { ShieldAlert, Check } from "lucide-react";

export default function SafetyWarningSection() {
  const safetyChecklist = [
    "Did you click Telegram from the official Yaga Calls website?",
    "Are you speaking to the official contact (@yagacalls47)?",
    "Did they confirm your selected plan clearly?",
    "Did they confirm the current onboarding price?",
    "Are payment instructions clear?",
    "Are they avoiding guaranteed-profit claims?",
    "Are they pressuring you to pay instantly?",
    "Are there duplicate or suspicious group names?"
  ];

  return (
    <Section className="bg-red-500/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-red-500/20 shadow-2xl order-2 lg:order-1">
            <Image 
              src="/telegram-safety.webp" 
              alt="Official Telegram safety checklist for Yaga Calls premium onboarding" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent" />
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest">
                <ShieldAlert className="w-3 h-3" />
                Security Warning
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-red-500">Use Only Official Yaga Calls Links</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Telegram is fast, but it also attracts impersonators. Before sending payment or joining any group, verify that the link came from the official Yaga Calls website.
              </p>
            </div>

            <div className="bg-surface p-8 rounded-3xl border border-red-500/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-black uppercase tracking-tight">Safety Checklist</h3>
              <ul className="space-y-4">
                {safetyChecklist.map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm text-text-muted">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm font-bold text-red-500 uppercase tracking-widest leading-relaxed">
              <p>• Do not send payment to random Telegram accounts.</p>
              <p>• Do not trust unofficial admins.</p>
              <p>• Do not believe anyone promising guaranteed profit.</p>
              <p>• Do not join fake duplicate groups.</p>
            </div>
            
            <p className="text-[10px] text-text-muted/60 italic uppercase tracking-widest">
              Yaga Calls will never be a no-loss or guaranteed-profit service. Any account claiming guaranteed returns should be treated as suspicious.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
