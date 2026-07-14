"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Clock,
  Truck,
  Phone,
} from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/MotionSection";

export function TechTrackerSection() {
  const { emergency, trust } = plumbingConfig;
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="tracker-heading"
      className="relative overflow-hidden border-y border-[#e2e8f0] bg-gradient-to-b from-white to-[#f0f9ff] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              as="h2"
              eyebrow="On-the-Way Tech Tracker"
              title="Know who's at your door before they knock."
              description="The moment we dispatch, you get a text with your tech's photo, a 5-star rating, and a live GPS pin of the truck. You watch them pull up. No mystery van, no surprise technician."
            />
            <ul className="mt-6 grid gap-3 text-sm text-[#334155]">
              <Feature
                icon={<MessageSquare className="h-4 w-4" />}
                title="SMS the moment we dispatch"
                text="Photo, badge ID, ETA, and a tappable link to track the truck."
              />
              <Feature
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Background-check verified in the text"
                text="Every tech is Checkr-cleared, drug-screened, and IAPMO-certified."
              />
              <Feature
                icon={<Star className="h-4 w-4" />}
                title={`${trust.googleRating}-star average from ${trust.googleReviewCount.toLocaleString()} jobs`}
                text="Your tech's last 90 days of customer ratings ride along in the text."
              />
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <FadeIn className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[28px] border-[10px] border-[#0f172a] bg-[#0f172a] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.4)]">
                <div className="absolute left-1/2 top-0 z-10 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-[#0f172a]" />
                <div className="relative aspect-[9/19] w-full overflow-hidden bg-[#f0f9ff]">
                  <PhoneMapVisual reduced={reduced === true} />
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-6 left-6 right-6 h-12 rounded-full bg-[#0284c7]/25 blur-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-[#e2e8f0] bg-white p-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#f0f9ff] text-[#0369a1]">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-[#0f172a]">{title}</p>
        <p className="mt-0.5 text-[13px] text-[#475569]">{text}</p>
      </div>
    </li>
  );
}

function PhoneMapVisual({ reduced }: { reduced: boolean }) {
  const { emergency } = plumbingConfig;
  return (
    <div className="relative h-full w-full">
      {/* Map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#f0f9ff]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,132,199,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(2,132,199,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 400 800"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M -10 520 C 80 460, 140 560, 220 480 S 360 380, 430 420"
          fill="none"
          stroke="#0284c7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
        <path
          d="M 30 200 C 90 240, 130 160, 200 200 S 360 260, 420 220"
          fill="none"
          stroke="#0f172a"
          strokeOpacity="0.18"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 60 700 C 130 660, 200 720, 270 690 S 380 650, 420 680"
          fill="none"
          stroke="#0f172a"
          strokeOpacity="0.12"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>

      {/* Truck marker (animated along route) */}
      {!reduced && (
        <motion.div
          aria-hidden
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute"
          style={{
            top: "45%",
            left: "20%",
            offsetPath:
              "path('M -10 520 C 80 460, 140 560, 220 480 S 360 380, 430 420')",
            offsetRotate: "auto",
          }}
        >
          <div className="grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg ring-2 ring-[#0284c7]">
            <Truck className="h-4 w-4 text-[#0284c7]" />
          </div>
        </motion.div>
      )}

      {/* Home destination pin */}
      <div className="absolute" style={{ top: "52%", right: "14%" }}>
        <div className="relative">
          <span className="absolute -left-1/2 -top-1/2 h-12 w-12 -translate-x-1/4 -translate-y-1/4 rounded-full bg-[#ea580c]/30 animate-ping" />
          <div className="relative grid h-10 w-10 place-items-center rounded-full bg-[#ea580c] text-white shadow-lg ring-4 ring-white">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Tech card overlay */}
      <div className="absolute inset-x-3 top-3 rounded-2xl bg-white/95 p-3 shadow-lg ring-1 ring-black/5 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-[#0f172a] text-[10px] font-bold text-white">
            SMS
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#64748b]">
            Apex Plumbing · just now
          </p>
        </div>
        <p className="mt-1.5 text-[12px] font-semibold leading-tight text-[#0f172a]">
          Marcus is on the way · ETA 8 min
        </p>
        <div className="mt-2.5 flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0369a1] text-[11px] font-bold text-white">
            MJ
          </div>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold text-[#0f172a]">
              Marcus J. · #42
            </p>
            <p className="truncate text-[10px] text-[#64748b]">
              Background: ✓ Checkr
            </p>
          </div>
          <span className="ml-auto inline-flex items-center gap-0.5 rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-200">
            <Star className="h-2.5 w-2.5 fill-current" /> 4.96
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-[#0369a1]">
          <CheckCircle2 className="h-3 w-3" />
          Photo & ID sent
        </div>
      </div>

      {/* Bottom card: live ETA */}
      <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[#0f172a] p-3 text-white shadow-lg">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-white/70">
          <Clock className="h-3 w-3 text-[#7dd3fc]" />
          Live ETA
        </div>
        <div className="mt-1 flex items-baseline justify-between">
          <p className="font-display text-2xl font-bold text-[#7dd3fc]">
            {Math.max(5, Math.round(emergency.averageResponseMinutes * 0.35))} min
          </p>
          <p className="text-[10px] text-white/60">2.1 mi away</p>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={reduced ? { width: "72%" } : { width: "12%" }}
            animate={reduced ? undefined : { width: "72%" }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#22d3ee]"
          />
        </div>
        <a
          href={emergency.livePhoneHref}
          className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#ea580c] px-3 py-2 text-[11px] font-bold text-white"
        >
          <Phone className="h-3.5 w-3.5" />
          Call dispatch if you need us sooner
        </a>
      </div>
    </div>
  );
}