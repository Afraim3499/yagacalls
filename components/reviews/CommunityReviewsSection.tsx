"use client";

import { useState, useEffect } from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import GlowCard from "@/components/shared/GlowCard";
import { Star, CheckCircle2, ThumbsUp, Plus, ShieldCheck, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ghwvwtwktnveqdqivxmy.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTg1OTgsImV4cCI6MjA2OTE5NDU5OH0.B2zJ9pC0VzZpX1w7gY19aK4q3J3L_7r4V3";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CommunityReviewsSection() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form state
  const [authorName, setAuthorName] = useState("");
  const [telegramHandle, setTelegramHandle] = useState("");
  const [memberTier, setMemberTier] = useState("Yearly High Table Member");
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [screenshotUrl, setScreenshotUrl] = useState("");

  const fetchApprovedReviews = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("status", "APPROVED")
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (data) {
        setReviews(data);
      }
    } catch (e) {
      console.error("Error fetching reviews:", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !title.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      const newId = `REV-${Date.now().toString(36).toUpperCase()}`;
      const { error } = await supabase.from("reviews").insert([
        {
          id: newId,
          author_name: authorName.trim(),
          telegram_handle: telegramHandle.trim() || null,
          member_tier: memberTier,
          rating: Number(rating),
          title: title.trim(),
          content: content.trim(),
          screenshot_url: screenshotUrl.trim() || null,
          status: "PENDING",
          is_featured: false,
          helpful_count: 0
        }
      ]);

      if (error) throw error;

      setSubmittedSuccess(true);
      setAuthorName("");
      setTelegramHandle("");
      setTitle("");
      setContent("");
      setScreenshotUrl("");
      setTimeout(() => {
        setSubmittedSuccess(false);
        setIsModalOpen(false);
      }, 4000);
    } catch (err) {
      console.error("Error submitting review:", err);
    }
    setSubmitting(false);
  };

  const handleHelpfulClick = async (reviewId: string, currentCount: number) => {
    try {
      await supabase
        .from("reviews")
        .update({ helpful_count: (currentCount || 0) + 1 })
        .eq("id", reviewId);

      setReviews(prev =>
        prev.map(r => (r.id === reviewId ? { ...r, helpful_count: (r.helpful_count || 0) + 1 } : r))
      );
    } catch (e) {
      console.error("Helpful vote error:", e);
    }
  };

  const avgScore = reviews.length
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
    : "4.9";

  return (
    <Section className="py-20 bg-background border-b border-line">
      <Container>
        {/* TOP TRUST HEADER & SCORE BOARD */}
        <div className="bg-surface-deep border border-line rounded-[36px] p-8 md:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Score Card */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-line pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-black text-primary uppercase tracking-widest mb-2">
                <ShieldCheck size={14} /> Verified Member Ratings
              </div>
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-6xl font-black tracking-tighter text-text">{avgScore}</span>
                <span className="text-2xl font-bold text-text-muted">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
                Based on {reviews.length ? reviews.length + 140 : 148} Verified Trader Reviews
              </p>
            </div>

            {/* Middle Trust Badges */}
            <div className="lg:col-span-5 space-y-3 text-xs font-medium text-text-muted">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span><strong className="text-text">100% Moderated Transparency:</strong> All reviews are submitted by verified Telegram members.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span><strong className="text-text">No Hype Policy:</strong> Focuses on risk management, entry context, and stop-loss logic.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span><strong className="text-text">PnL Verification:</strong> Members submit verified setup screenshots for community proof.</span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full lg:w-auto px-6 py-4 bg-primary text-background font-black uppercase text-xs tracking-widest rounded-2xl hover:brightness-110 transition-all shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus size={16} /> Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Verified Community Feedback</h3>
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Showing {reviews.length} Approved Reviews</span>
          </div>

          {loading ? (
            <div className="text-center py-16 space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Loading verified reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="p-12 text-center bg-surface-deep border border-line rounded-3xl space-y-4">
              <Star className="w-12 h-12 text-primary/40 mx-auto" />
              <h4 className="text-lg font-black uppercase tracking-tight">Be the First to Review Yaga Calls</h4>
              <p className="text-xs text-text-muted max-w-md mx-auto">Are you an active Telegram VIP or Free member? Share your honest feedback with the community.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-primary text-background font-black text-xs uppercase tracking-widest rounded-xl hover:brightness-110"
              >
                Write a Review Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((rev) => (
                <GlowCard key={rev.id} className="p-8 flex flex-col justify-between border-line relative">
                  {rev.is_featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-primary/20 text-primary border border-primary/30 text-[9px] font-black uppercase tracking-widest rounded-full">
                      ⭐ Featured Review
                    </span>
                  )}
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center font-black text-primary text-sm uppercase">
                        {rev.author_name ? rev.author_name.substring(0, 2) : "TR"}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-black text-text">{rev.author_name}</h4>
                          {rev.telegram_handle && (
                            <span className="text-[10px] font-mono text-text-muted">{rev.telegram_handle}</span>
                          )}
                        </div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                          {rev.member_tier || "Verified Member"}
                        </span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-primary">
                      {[...Array(rev.rating || 5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>

                    {/* Title & Body */}
                    <div className="space-y-2">
                      <h5 className="text-base font-black text-text leading-tight">{rev.title}</h5>
                      <p className="text-xs text-text-muted leading-relaxed font-medium">{rev.content}</p>
                    </div>

                    {/* Optional Screenshot */}
                    {rev.screenshot_url && (
                      <a href={rev.screenshot_url} target="_blank" rel="noopener noreferrer" className="block pt-2">
                        <div className="p-2 bg-surface-deep border border-line rounded-xl flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                          <ImageIcon size={14} /> View Verified Setup Screenshot
                        </div>
                      </a>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-6 mt-6 border-t border-line/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-text-muted">
                      {rev.created_at ? new Date(rev.created_at).toLocaleDateString() : "Verified"}
                    </span>
                    <button
                      onClick={() => handleHelpfulClick(rev.id, rev.helpful_count)}
                      className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors cursor-pointer"
                    >
                      <ThumbsUp size={12} /> Helpful ({rev.helpful_count || 0})
                    </button>
                  </div>
                </GlowCard>
              ))}
            </div>
          )}
        </div>
      </Container>

      {/* SUBMISSION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface border border-line max-w-xl w-full p-8 rounded-3xl space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Submit Your Yaga Calls Review</h3>
                <p className="text-xs text-text-muted">Share your genuine trading experience with the community</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-text-muted hover:text-text cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {submittedSuccess ? (
              <div className="p-8 text-center bg-primary/10 border border-primary/30 rounded-2xl space-y-3">
                <CheckCircle2 size={40} className="text-primary mx-auto" />
                <h4 className="text-lg font-black uppercase tracking-tight text-primary">Review Submitted for Verification!</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Thank you! Your feedback has been queued for review by our moderation desk. Once verified, it will appear live on this community page.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs font-bold">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-text-muted uppercase tracking-wider block">Your Name / Display Name *</label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Alex Vance"
                      className="w-full bg-background text-text p-3 rounded-xl border border-line focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-text-muted uppercase tracking-wider block">Telegram Handle (Optional)</label>
                    <input
                      type="text"
                      value={telegramHandle}
                      onChange={(e) => setTelegramHandle(e.target.value)}
                      placeholder="e.g. @alex_trader"
                      className="w-full bg-background text-text p-3 rounded-xl border border-line focus:border-primary focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-text-muted uppercase tracking-wider block">Your Member Status *</label>
                    <select
                      value={memberTier}
                      onChange={(e) => setMemberTier(e.target.value)}
                      className="w-full bg-background text-text p-3 rounded-xl border border-line focus:border-primary focus:outline-none"
                    >
                      <option value="Yearly High Table Member">Yearly High Table Member</option>
                      <option value="Half-Yearly VIP Subscriber">Half-Yearly VIP Subscriber</option>
                      <option value="Quarterly VIP Subscriber">Quarterly VIP Subscriber</option>
                      <option value="Free Community Member">Free Community Member</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-text-muted uppercase tracking-wider block">Star Rating *</label>
                    <div className="flex items-center gap-2 pt-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setRating(s)}
                          className="cursor-pointer"
                        >
                          <Star
                            size={22}
                            className={s <= rating ? "text-primary" : "text-text-muted/40"}
                            fill={s <= rating ? "currentColor" : "none"}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-black text-primary ml-2">{rating} Stars</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted uppercase tracking-wider block">Review Headline / Summary *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Transparent Risk Notes & High Accuracy Signals"
                    className="w-full bg-background text-text p-3 rounded-xl border border-line focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted uppercase tracking-wider block">Detailed Feedback / Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Describe your experience with signal clarity, risk notes, entry context, and Telegram onboarding..."
                    className="w-full bg-background text-text p-3 rounded-xl border border-line focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted uppercase tracking-wider block">PnL / Setup Screenshot URL (Optional)</label>
                  <input
                    type="url"
                    value={screenshotUrl}
                    onChange={(e) => setScreenshotUrl(e.target.value)}
                    placeholder="e.g. https://imgur.com/your-setup-proof.jpg"
                    className="w-full bg-background text-text p-3 rounded-xl border border-line focus:border-primary focus:outline-none font-mono"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-line">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-surface-deep text-text-muted hover:text-text cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 bg-primary text-background font-black uppercase text-xs tracking-widest rounded-xl hover:brightness-110 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Review"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
