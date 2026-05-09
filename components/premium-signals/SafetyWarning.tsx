import Container from "../shared/Container";
import Section from "../shared/Section";
import { ShieldAlert, ShieldCheck } from "lucide-react";

export default function SafetyWarning() {
  const checks = [
    "Is the Telegram link from the official website?",
    "Is the admin account official (@yagacalls47)?",
    "Are they promising guaranteed profit? (Red flag)",
    "Are they rushing you to pay? (Red flag)",
    "Are there duplicate groups using similar names?",
    "Are payment instructions clear?",
    "Does the provider explain risk?"
  ];

  return (
    <Section className="bg-danger/5 border-y border-danger/10">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-danger">
            <ShieldAlert className="w-8 h-8" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Avoid Fake Telegram Signal Accounts</h2>
          </div>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              Telegram is fast, but it also has impersonators. Serious traders should be careful before joining any premium crypto signal group.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {checks.map((check, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-surface border border-line rounded-xl text-sm font-bold">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-surface border border-line rounded-2xl space-y-4">
              <p className="text-sm font-bold text-danger uppercase tracking-widest">Safety Warning</p>
              <p className="text-sm leading-relaxed">
                Only use official Yaga Calls links found on this website. Never trust random Telegram DMs or accounts promising guaranteed returns. Yaga Calls is an <a href="/verified-crypto-signal-provider" className="text-primary hover:underline">verified crypto signal provider</a> focused on transparency and research.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
