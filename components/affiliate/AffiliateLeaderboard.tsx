"use client";

import { useState, useEffect } from "react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ghwvwtwktnveqdqivxmy.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4";

interface LeaderboardItem {
  associate_id: string;
  associate_name: string;
  anonymized_name: string;
  free_joins: number;
  vip_conversions: number;
  total_vip_revenue: number;
  internal_total_earned: number;
  public_displayed_earnings: number;
}

export default function AffiliateLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/affiliate_leaderboard_view?select=*&limit=5`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`
          }
        }
      );
      if (res.ok) {
        const data = await res.json();
        setLeaderboard(data as LeaderboardItem[]);
      }
    } catch (err) {
      console.error("Error fetching affiliate leaderboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const rankBadges = [
    { rank: 1, badge: "👑 #1 TOP EARNER", gradient: "from-amber-500/20 via-yellow-500/10 to-amber-500/5", border: "border-amber-500/40", text: "text-amber-400", icon: "👑" },
    { rank: 2, badge: "🥈 #2 PRO PARTNER", gradient: "from-slate-400/20 via-slate-400/10 to-slate-400/5", border: "border-slate-400/40", text: "text-slate-300", icon: "🥈" },
    { rank: 3, badge: "🥉 #3 HIGH RUNNER", gradient: "from-amber-700/20 via-amber-700/10 to-amber-700/5", border: "border-amber-700/40", text: "text-amber-600", icon: "🥉" },
    { rank: 4, badge: "#4 PARTNER", gradient: "from-surface-deep to-surface-deep", border: "border-line", text: "text-text-muted", icon: "⚡" },
    { rank: 5, badge: "#5 PARTNER", gradient: "from-surface-deep to-surface-deep", border: "border-line", text: "text-text-muted", icon: "⚡" }
  ];

  return (
    <div className="bg-surface-deep border border-line rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live Verified Performance Analytics
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-high mt-3 flex items-center gap-3">
            🏆 Top 5 Affiliate Earnings Leaderboard
          </h2>
          <p className="text-xs text-text-muted mt-1">
            Real-time verified partner earnings calculated on the <strong>15%+ commission model</strong>.
          </p>
        </div>
        <div className="shrink-0 font-mono text-right bg-background/60 p-3.5 rounded-2xl border border-line">
          <span className="text-[10px] uppercase tracking-widest text-text-muted block">Partner Rate</span>
          <span className="text-2xl font-black text-primary font-mono">15% – 25%</span>
        </div>
      </div>

      {loading ? (
        <div className="py-12 text-center text-text-muted font-mono text-xs animate-pulse">
          Loading live affiliate leaderboard standings...
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="py-12 text-center text-text-muted font-mono text-xs">
          No partner records currently available.
        </div>
      ) : (
        <div className="space-y-3">
          {leaderboard.map((item, idx) => {
            const badgeStyle = rankBadges[idx] || rankBadges[3];
            const earnings = Number(item.public_displayed_earnings || 0).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return (
              <div
                key={item.associate_id || idx}
                className={`bg-gradient-to-r ${badgeStyle.gradient} border ${badgeStyle.border} p-4 md:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:scale-[1.01]`}
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className={`w-10 h-10 rounded-xl bg-background/80 border ${badgeStyle.border} flex items-center justify-center font-black text-lg ${badgeStyle.text} shrink-0 font-mono`}>
                    {badgeStyle.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-background/60 border ${badgeStyle.border} ${badgeStyle.text}`}>
                        {badgeStyle.badge}
                      </span>
                    </div>
                    <div className="text-base font-black text-text-high font-mono mt-1">
                      {item.anonymized_name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end w-full sm:w-auto border-t sm:border-t-0 border-line/40 pt-3 sm:pt-0">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-text-muted block tracking-widest font-mono">
                      Total Earned
                    </span>
                    <span className="text-xl md:text-2xl font-black text-primary font-mono">
                      ${earnings}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      <div className="p-4 bg-background/60 border border-line rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="text-xs text-text-muted">
          Want to see your ID on the leaderboard? Start referring members via your Telegram partner link to earn <strong>15% to 25% recurring commissions</strong>.
        </p>
        <a
          href="https://t.me/yaga_partner_program_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="grad-button text-background px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shrink-0 hover:scale-105 transition-transform"
        >
          🤖 Start Telegram Partner Bot
        </a>
      </div>
    </div>
  );
}
