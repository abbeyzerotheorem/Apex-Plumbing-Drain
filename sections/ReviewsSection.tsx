"use client";

import { Star, Quote } from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerIn, StaggerItem } from "@/components/MotionSection";

export function ReviewsSection() {
  const { reviews, trust } = plumbingConfig;
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative bg-[#f8fafc] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Real reviews · verified jobs"
            title={`${trust.googleRating} stars across ${trust.googleReviewCount.toLocaleString()} local jobs.`}
            description="These are actual Apex customers from the last 60 days. Every review is linked to a completed service ticket — no pro account, no filter, no theater."
          />
          <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-sm">
            <div className="grid place-items-center">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0f172a] text-white">
                <span className="font-display text-lg font-bold">G</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#0f172a]">
                {trust.googleRating} · {trust.googleReviewCount.toLocaleString()} reviews on Google
              </p>
            </div>
          </div>
        </div>

        <StaggerIn className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <StaggerItem
              key={r.id}
              className="relative flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:border-[#0284c7]/25 hover:shadow-[var(--shadow-clinical)]"
            >
              <Quote
                className="absolute right-4 top-4 h-7 w-7 text-[#0284c7]/15"
                aria-hidden
              />
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-[#0f172a]">
                “{r.body}”
              </p>
              <div className="mt-5 flex flex-1 items-end justify-between gap-3 border-t border-[#e2e8f0] pt-4">
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{r.author}</p>
                  <p className="text-xs text-[#64748b]">
                    {r.neighborhood} · {r.date}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f0f9ff] px-2.5 py-1 text-[11px] font-semibold text-[#0369a1] ring-1 ring-[#0284c7]/15">
                  {r.serviceTag}
                </span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                {r.highlight}
              </div>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
