"use client";

import {
  Wrench,
  Droplet,
  Flame,
  AlertTriangle,
  ShieldCheck,
  Clock,
  ChevronRight,
} from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerIn, StaggerItem } from "@/components/MotionSection";
import { cn, formatDuration, formatPriceRange, urgencyLabel, urgencyTone } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  droplet: Droplet,
  flame: Flame,
  "alert-triangle": AlertTriangle,
  "shield-check": ShieldCheck,
};

const URGENCY_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  emergency: AlertTriangle,
  priority: Clock,
  routine: Wrench,
};

export function ServicesGrid() {
  const { services } = plumbingConfig;
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="What we fix"
            title="Every residential plumbing service — under one roof."
            description="One call. One crew. One warranty that covers the work. From a kitchen sink that won’t drain to a whole-home PEX repipe, we staff for it."
          />
          <a
            href="#estimate"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0369a1] hover:text-[#075985]"
          >
            Skip ahead to instant quote <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <StaggerIn className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = ICONS[s.iconHint] ?? Wrench;
            const UrgIcon = URGENCY_ICON[s.urgency] ?? Clock;
            return (
              <StaggerItem
                key={s.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-5 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[#0284c7]/30 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f0f9ff] text-[#0369a1] ring-1 ring-[#0284c7]/15 transition-all duration-200 ease-in-out group-hover:bg-[#0284c7] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ring-1",
                      urgencyTone(s.urgency),
                    )}
                  >
                    <UrgIcon className="h-3 w-3" />
                    {urgencyLabel(s.urgency)}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-[#0f172a]">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {s.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-2 border-t border-[#e2e8f0] pt-4 text-xs">
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#64748b]">
                      Typical cost
                    </dt>
                    <dd className="mt-0.5 font-display text-sm font-bold text-[#0f172a]">
                      {formatPriceRange(s.startingPrice, s.endingPrice)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#64748b]">
                      Avg. time on site
                    </dt>
                    <dd className="mt-0.5 font-display text-sm font-bold text-[#0f172a]">
                      {formatDuration(s.averageDurationMinutes)}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="font-semibold uppercase tracking-wide text-[#64748b]">
                      Warranty
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-[#0f172a]">
                      {s.warrantyMonths}-month parts & labor · written
                    </dd>
                  </div>
                </dl>

                <a
                  href="#estimate"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0369a1] hover:text-[#075985]"
                >
                  Get a baseline quote <ChevronRight className="h-4 w-4" />
                </a>
              </StaggerItem>
            );
          })}
        </StaggerIn>
      </div>
    </section>
  );
}
