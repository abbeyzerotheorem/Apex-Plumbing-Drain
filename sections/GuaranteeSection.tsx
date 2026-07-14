"use client";

import {
  ShieldCheck,
  Receipt,
  UserCheck,
  Sparkles,
  CheckCircle2,
  Footprints,
  Lock,
} from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerIn, StaggerItem, FadeIn } from "@/components/MotionSection";
import { cn } from "@/lib/utils";

const ICONS = [Footprints, Receipt, UserCheck, ShieldCheck] as const;

export function GuaranteeSection() {
  const { guarantees, trust } = plumbingConfig;
  return (
    <section
      id="guarantee"
      aria-labelledby="guarantee-heading"
      className="relative overflow-hidden bg-[#0f172a] py-16 text-white sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #7dd3fc 0, transparent 40%), radial-gradient(circle at 80% 80%, #ea580c 0, transparent 35%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-clinical opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeader
              as="h2"
              eyebrow="The Professional Standard"
              title="Boots on. Mats down. No mess left behind — or the service is free."
              description="Most homeowner horror stories start with ‘they tracked mud through the house’ and end with ‘the bill was twice the quote.’ We engineered our entire operation around eliminating both."
            />
          </div>
          <div className="lg:col-span-4">
            <FadeIn className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                Trust, audited
              </p>
              <p className="mt-2 font-display text-3xl font-bold leading-tight">
                {trust.certifiedTechs} of {trust.certifiedTechs}
              </p>
              <p className="mt-1 text-sm text-white/70">
                Field techs currently background-checked, drug-screened, and IAPMO-certified.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/80">
                <Lock className="h-3.5 w-3.5 text-[#7dd3fc]" />
                Records verified by Checkr · 5-yr driving record review
              </div>
            </FadeIn>
          </div>
        </div>

        <StaggerIn className="mt-10 grid gap-4 md:grid-cols-2">
          {guarantees.map((g, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem
                key={g.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition",
                  "hover:border-[#7dd3fc]/40 hover:bg-white/[0.06]",
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0284c7]/15 text-[#7dd3fc] ring-1 ring-[#7dd3fc]/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold leading-tight">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {g.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-display text-3xl font-bold leading-none text-[#7dd3fc]">
                      {g.metric}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-white/55">
                      {g.metricLabel}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                    <CheckCircle2 className="h-3 w-3" /> Guaranteed in writing
                  </span>
                </div>

                <Sparkles
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 text-white/[0.04] transition group-hover:text-white/[0.07]"
                  aria-hidden
                />
              </StaggerItem>
            );
          })}
        </StaggerIn>
      </div>
    </section>
  );
}
