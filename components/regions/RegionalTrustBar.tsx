import React from 'react';
import { ShieldCheck, MessageCircle, Lock, Zap } from 'lucide-react';

interface TrustItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface RegionalTrustBarProps {
  regionName: string;
}

const RegionalTrustBar = ({ regionName }: RegionalTrustBarProps) => {
  const trustItems: TrustItem[] = [
    {
      icon: MessageCircle,
      title: "Manual Onboarding",
      description: "Human-led verification for all members."
    },
    {
      icon: ShieldCheck,
      title: "Narrative Proof",
      description: "Every signal backed by deep-dive research."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Secure, encrypted Telegram-native delivery."
    },
    {
      icon: Zap,
      title: "Real-time Edge",
      description: `Optimized for ${regionName} trading sessions.`
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-y border-line/10">
      {trustItems.map((item, index) => (
        <div key={index} className="flex items-start gap-4 p-6 bg-surface-deep/50 rounded-2xl border border-line/5 hover:border-primary/20 transition-all group">
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black uppercase tracking-widest text-text">{item.title}</h4>
            <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegionalTrustBar;
