"use client";

import {
  ShieldCheck,
  Star,
  BadgeCheck,
  Award,
  Building2,
  Clock,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { StaggerIn, StaggerItem } from "@/components/MotionSection";

export function CredibilityMatrix() {
  const { brand, trust, emergency } = plumbingConfig;

  return (
    <section
      aria-labelledby="credibility-heading"
      className="relative border-y border-[#e2e8f0] bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0369a1]">
              Credentials, verified
            </p>
            <h2
              id="credibility-heading"
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl"
            >
              Proof you can pull up before we arrive.
            </h2>
          </div>
          <a
            href={emergency.livePhoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0369a1] hover:text-[#075985]"
          >
            <Phone className="h-4 w-4" />
            Talk to a real dispatcher · {emergency.livePhoneDisplay}
          </a>
        </div>

        {/* Stats Grid Matrix */}
        <StaggerIn className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Stat
            icon={<ShieldCheck className="h-5 w-5" />}
            label="Master Plumber License"
            value={brand.stateLicenseKey}
            sub={brand.stateLicenseLabel}
          />
          <Stat
            icon={<BadgeCheck className="h-5 w-5" />}
            label="General Liability"
            value={brand.insuredValue}
            sub={`via ${brand.insuredCarrier}`}
          />
          <Stat
            icon={<Star className="h-5 w-5" />}
            label="Google Reviews"
            value={`${trust.googleRating} ★`}
            sub={`${trust.googleReviewCount.toLocaleString()} verified ratings`}
          />
          <Stat
            icon={<Building2 className="h-5 w-5" />}
            label="BBB Accredited"
            value={trust.bbbGrade}
            sub={`Accredited since ${brand.foundedYear + 2}`}
          />
          <Stat
            icon={<Clock className="h-5 w-5" />}
            label="Average Response"
            value={`${emergency.averageResponseMinutes} min`}
            sub={`${emergency.dispatchAreaLabel}`}
          />
          <Stat
            icon={<Award className="h-5 w-5" />}
            label="Years in Business"
            value={`${trust.yearsInBusiness}+`}
            sub={`${trust.jobsCompleted} jobs completed`}
          />
        </StaggerIn>

        {/* Bottom Awards List */}
        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#475569]">
          {trust.awards.map((a) => (
            <li key={a.title} className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
              <span className="font-medium text-[#0f172a]">{a.title}</span>
              <span className="text-[#94a3b8]">·</span>
              <span>
                {a.issuer} · {a.year}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

// Sub-component: Individual Stat Card
function Stat({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <StaggerItem className="group relative overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 transition hover:border-[#0284c7]/30 hover:bg-white hover:shadow-[var(--shadow-clinical)]">
      <div className="flex items-center gap-2 text-[#0369a1]">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#475569]">
          {label}
        </span>
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-[#0f172a]">
        {value}
      </p>
      <p className="mt-1 text-xs text-[#64748b]">{sub}</p>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#0284c7]/5 transition group-hover:scale-150"
      />
    </StaggerItem>
  );
}