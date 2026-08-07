"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/shared/Container";
import GlowCard from "@/components/shared/GlowCard";
import { Star, CheckCircle2, ThumbsUp, Plus, ShieldCheck, X, Image as ImageIcon, Loader2, MessageSquare, Upload, Check } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ghwvwtwktnveqdqivxmy.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auto Image Compression Helper (Canvas WebP Resizer & Quality Compressor)
const compressImageFile = (file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.75): Promise<{ blob: Blob; fileName: string; originalSize: string; compressedSize: string }> => {
  return new Promise((resolve, reject) => {
    const originalSizeMb = (file.size / (1024 * 1024)).toFixed(2) + "MB";
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("Canvas error");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const compressedSizeKb = (blob.size / 1024).toFixed(0) + "KB";
              resolve({
                blob,
                fileName: `rev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.webp`,
                originalSize: originalSizeMb,
                compressedSize: compressedSizeKb
              });
            } else {
              reject("Blob compression failed");
            }
          },
          "image/webp",
          quality
        );
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};

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
  
  // Image Upload State
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadStats, setUploadStats] = useState<string | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsCompressing(true);
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));

    try {
      const compressed = await compressImageFile(file);
      setUploadStats(`Optimized: ${compressed.originalSize} → ${compressed.compressedSize} (Saved ~${Math.round(100 - (compressed.blob.size / file.size) * 100)}%)`);
    } catch (err) {
      console.error("Compression error:", err);
    }
    setIsCompressing(false);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !title.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      let finalImageUrl: string | null = null;

      // 1. Upload compressed image if file selected
      if (imageFile) {
        const compressed = await compressImageFile(imageFile);
        const filePath = `uploads/${compressed.fileName}`;

        const { data: uploadData, error: uploadErr } = await supabase.storage
          .from("review-screenshots")
          .upload(filePath, compressed.blob, {
            contentType: "image/webp",
            upsert: true
          });

        if (uploadErr) {
          console.error("Supabase Storage Upload Error:", uploadErr);
        } else {
          const { data: publicUrlData } = supabase.storage
            .from("review-screenshots")
            .getPublicUrl(filePath);
          finalImageUrl = publicUrlData.publicUrl;
        }
      }

      // 2. Insert Review into Database
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
          screenshot_url: finalImageUrl,
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
      setImageFile(null);
      setImagePreview(null);
      setUploadStats(null);
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

  // Dynamic Rating Math
  const totalCount = reviews.length;
  const avgScore = totalCount
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / totalCount).toFixed(1)
    : null;

  return (
    <div id="community-reviews" className="py-16">
      <Container>
        {/* DYNAMIC TRUST & RATING HEADER */}
        <div className="bg-surface-deep border border-line rounded-[36px] p-8 md:p-12 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Rating Block */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3 border-b lg:border-b-0 lg:border-r border-line pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-black text-primary uppercase tracking-widest">
                <ShieldCheck size={14} /> Community Trust Hub
              </div>
              
              {avgScore ? (
                <>
                  <div className="flex items-baseline justify-center lg:justify-start gap-3 pt-1">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter text-text">{avgScore}</span>
                    <span className="text-xl font-bold text-text-muted">/ 5.0</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                    Based on {totalCount} Verified Member {totalCount === 1 ? "Review" : "Reviews"}
                  </p>
                </>
              ) : (
                <div className="space-y-2 pt-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-text">Verified Member Feedback</h3>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    Are you an active Telegram VIP subscriber or Free Community member? Share your honest feedback with our trading community.
                  </p>
                </div>
              )}
            </div>

            {/* Middle Value Props */}
            <div className="lg:col-span-4 space-y-3 text-xs font-medium text-text-muted">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span><strong className="text-text">Verified Member Reviews:</strong> Submitted directly by active Telegram traders.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span><strong className="text-text">Risk & Setup Transparency:</strong> Evaluated on entry context, target planning, and stop-loss logic.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span><strong className="text-text">Setup Screenshots:</strong> Members attach verified PnL proof with auto-compression.</span>
              </div>
            </div>

            {/* Right CTA Button */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full lg:w-auto px-6 py-4 bg-primary text-background font-black uppercase text-xs tracking-widest rounded-2xl hover:brightness-110 transition-all shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus size={16} /> Submit Your Review
              </button>
            </div>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-line pb-4">
            <h3 className="text-xl font-black uppercase tracking-tighter text-text">Verified Community Feedback</h3>
            {totalCount > 0 && (
              <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
                {totalCount} Member {totalCount === 1 ? "Review" : "Reviews"}
              </span>
            )}
          </div>

          {loading ? (
            <div className="text-center py-16 space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Loading community reviews...</p>
            </div>
          ) : totalCount === 0 ? (
            <div className="p-12 text-center bg-surface-deep border border-line rounded-3xl space-y-4 max-w-2xl mx-auto shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-black uppercase tracking-tight text-text">Be the First to Review Yaga Calls</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Have you traded with Yaga Calls signals or narrative research? Share your experience regarding signal clarity, entry context, and risk management.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 bg-primary text-background font-black text-xs uppercase tracking-widest rounded-xl hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Plus size={16} /> Write a Review Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((rev) => (
                <GlowCard key={rev.id} className="p-8 flex flex-col justify-between border-line relative">
                  {rev.is_featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-primary/20 text-primary border border-primary/30 text-[9px] font-black uppercase tracking-widest rounded-full">
                      ⭐ Top Review
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
                      <div className="pt-2">
                        <a href={rev.screenshot_url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border border-line hover:border-primary/50 transition-colors">
                          <img 
                            src={rev.screenshot_url} 
                            alt="Verified Setup Screenshot" 
                            className="w-full max-h-48 object-cover hover:scale-105 transition-transform"
                          />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-6 mt-6 border-t border-line/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-text-muted">
                      {rev.created_at ? new Date(rev.created_at).toLocaleDateString() : "Verified Member"}
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
          <div className="bg-surface border border-line max-w-xl w-full p-8 rounded-3xl space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
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
                <h4 className="text-lg font-black uppercase tracking-tight text-primary">Thank You for Your Feedback!</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Your review has been submitted to our community moderation desk and will appear live on this portal shortly.
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

                {/* DIRECT FILE UPLOAD WITH CANVAS COMPRESSION */}
                <div className="space-y-2 pt-1">
                  <label className="text-text-muted uppercase tracking-wider block">Upload Setup / PnL Screenshot (Auto-Optimized WebP)</label>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {imagePreview ? (
                    <div className="p-4 bg-surface-deep border border-primary/30 rounded-2xl space-y-3 relative">
                      <div className="flex items-center gap-3">
                        <img src={imagePreview} alt="Preview" className="w-16 h-16 object-cover rounded-xl border border-line" />
                        <div className="space-y-1 text-xs">
                          <p className="font-bold text-text truncate max-w-[200px]">{imageFile?.name}</p>
                          {isCompressing ? (
                            <span className="text-primary flex items-center gap-1 font-mono text-[10px]">
                              <Loader2 className="w-3 h-3 animate-spin" /> Auto-Compressing Image...
                            </span>
                          ) : (
                            <span className="text-primary font-mono text-[10px] block">{uploadStats}</span>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                          setUploadStats(null);
                        }}
                        className="absolute top-3 right-3 text-text-muted hover:text-danger text-xs font-mono cursor-pointer"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-line hover:border-primary/50 p-6 rounded-2xl text-center space-y-2 cursor-pointer transition-colors bg-background/50"
                    >
                      <Upload className="w-8 h-8 text-primary mx-auto" />
                      <p className="text-xs font-bold text-text">Click or Drag Image Screenshot Here</p>
                      <p className="text-[10px] text-text-muted font-mono">PNG, JPG, WEBP • Auto-compressed to WebP for lightning fast load</p>
                    </div>
                  )}
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
                    disabled={submitting || isCompressing}
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
    </div>
  );
}
