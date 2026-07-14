"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  CalendarCheck,
  ShieldCheck,
  Star,
  Wrench,
  Droplet,
  Clock4,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { plumbingConfig } from "@/data/plumbing";
import { SiteHeader } from "@/components/SiteHeader";

// ==========================================
// Primary Hero Section Component
// ==========================================

export function HeroSection() {
  const { brand, emergency, trust } = plumbingConfig;
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#f0f9ff] to-white"
    >
      {/* Decorative Grid & Blur Backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-clinical opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0284c7]/10 blur-3xl"
      />

      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:pb-24 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ==========================================
              Column 1: Text Copy & Call-to-Actions
              ========================================== */}
          <div className="lg:col-span-7">
            {/* Live Dispatch Badge */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0284c7]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#0369a1] shadow-sm"
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ea580c]"
                aria-hidden
              />
              Live dispatch — {emergency.crewsAvailable} of {emergency.crewsOnShift} crews available now in {emergency.dispatchAreaLabel}
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              id="hero-heading"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-tight text-[#0f172a] text-balance sm:text-5xl lg:text-[64px]"
            >
              Leaking pipe?
              <br />
              Clogged drain?
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0369a1]">Consider it fixed.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm bg-[#7dd3fc]/45"
                />
              </span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-lg text-[#475569] text-pretty sm:text-xl"
            >
              {brand.tagline} Our {emergency.averageResponseMinutes}-minute average response time
              means a real human dispatcher, a background-checked tech, and a clean work area —
              usually before you finish mopping up.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={emergency.livePhoneHref}
                className="pulse-emergency tap-target group inline-flex items-center justify-center gap-2.5 rounded-md bg-[#ea580c] px-6 py-3.5 text-base font-bold text-white shadow-[var(--shadow-emergency)] transition hover:bg-[#c2410c] active:translate-y-[1px]"
              >
                <Phone className="h-5 w-5 transition group-hover:scale-110" aria-hidden />
                Call {emergency.livePhoneDisplay}
              </a>
              <a
                href="#estimate"
                className="tap-target group inline-flex items-center justify-center gap-2.5 rounded-md border border-[#0f172a]/12 bg-white px-6 py-3.5 text-base font-semibold text-[#0f172a] transition hover:border-[#0f172a]/30 hover:bg-[#f8fafc] active:translate-y-[1px]"
              >
                <CalendarCheck className="h-5 w-5 text-[#0369a1]" aria-hidden />
                Schedule Maintenance
              </a>
            </motion.div>

            {/* Value Props Pill List */}
            <motion.ul
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 grid grid-cols-1 gap-2.5 text-sm text-[#334155] sm:grid-cols-3"
            >
              <Pill icon={<CheckCircle2 className="h-4 w-4 text-emerald-600" />} text="Flat upfront pricing" />
              <Pill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="Background-checked techs" />
              <Pill icon={<Clock4 className="h-4 w-4 text-emerald-600" />} text="Written 12-mo warranty" />
            </motion.ul>
          </div>

          {/* ==========================================
              Column 2: Visual Media Column (Image & Cards)
              ========================================== */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={reduced ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              {/* Primary Image Wrapper */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#0f172a] shadow-[0_30px_60px_-30px_rgba(2,132,199,0.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=70"
                  alt="Apex Plumbing technician tightening a fixture in a bright residential kitchen"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/55 via-transparent to-transparent" />
                
                {/* Image Top Badges */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-xs text-white/90">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 font-semibold text-emerald-200 ring-1 ring-emerald-300/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    On the way · ETA 12 min
                  </span>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 font-medium backdrop-blur">
                    Tech #42 · Marcus
                  </span>
                </div>

                {/* Tech Profile Floating Panel */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 p-4 text-left shadow-lg backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0f172a] text-sm font-bold text-white">
                      MJ
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#0f172a]">Marcus J. · Lead Technician</p>
                      <p className="text-xs text-[#64748b]">10 yrs · Drug-screened · Background-checked</p>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-[#f0f9ff] px-2 py-1 text-[11px] font-semibold text-[#0369a1]">
                      <Star className="h-3 w-3 fill-current" /> 4.9
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#e2e8f0]">
                    <motion.div
                      initial={reduced ? { width: "78%" } : { width: 0 }}
                      animate={reduced ? undefined : { width: "78%" }}
                      transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]"
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-[#64748b]">
                    Approaching your address · background-check verified by Checkr
                  </p>
                </div>
              </div>

              {/* Floating Emergency Badge (Left) */}
              <motion.div
                initial={reduced ? false : { opacity: 0, x: -16 }}
                animate={reduced ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -left-4 top-1/3 hidden rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-[var(--shadow-card)] sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#fff1ea] text-[#ea580c]">
                    <Droplet className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#64748b]">
                      Emergency ETA
                    </p>
                    <p className="font-display text-lg font-bold text-[#0f172a]">
                      {emergency.averageResponseMinutes} min
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Performance Badge (Right) */}
              <motion.div
                initial={reduced ? false : { opacity: 0, x: 16 }}
                animate={reduced ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-3 bottom-24 hidden rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-[var(--shadow-card)] sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f0f9ff] text-[#0369a1]">
                    <Wrench className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#64748b]">
                      {trust.jobsCompleted} jobs
                    </p>
                    <p className="font-display text-lg font-bold text-[#0f172a]">
                      since {plumbingConfig.brand.foundedYear}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// Sub-component: Pill Feature Badge
// ==========================================

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-md border border-[#e2e8f0] bg-white/70 px-3 py-2">
      {icon}
      <span className="font-medium">{text}</span>
    </li>
  );
}