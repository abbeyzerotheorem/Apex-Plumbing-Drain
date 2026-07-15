"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Wrench,
  Droplet,
  Flame,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Phone,
  CalendarCheck,
  ArrowRight,
  Clock3,
} from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { SectionHeader } from "@/components/SectionHeader";
import { cn, formatDuration, formatPriceRange, urgencyLabel, urgencyTone } from "@/lib/utils";
import type { ServiceItem } from "@/types/plumbing";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  droplet: Droplet,
  flame: Flame,
  "alert-triangle": AlertTriangle,
  "shield-check": ShieldCheck,
};

export function EstimateBuilder() {
  const { services, emergency } = plumbingConfig;
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "");

  const active = useMemo<ServiceItem | undefined>(
    () => services.find((s) => s.id === activeId),
    [services, activeId],
  );

  return (
    <section
      id="estimate"
      aria-labelledby="estimate-heading"
      className="relative bg-gradient-to-b from-[#f0f9ff] via-white to-white py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Interactive Estimate Builder"
          title="What’s going wrong? Get a real price range in 5 seconds."
          description="Pick the issue that brought you here. You’ll see the price range we quote 90% of the time, what we’ll actually do, and a direct line to booking — no call tree, no runaround."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div
            role="radiogroup"
            aria-label="Select your plumbing issue"
            className="lg:col-span-5"
          >
            <ul className="grid grid-cols-2 gap-2.5">
              {services.map((s) => {
                const Icon = ICONS[s.iconHint] ?? Wrench;
                const selected = s.id === activeId;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setActiveId(s.id)}
                      className={cn(
                        "tap-target group flex w-full items-start gap-3 rounded-xl border bg-white p-3 text-left transition-all duration-200 ease-in-out",
                        selected
                          ? "border-[#0284c7] ring-2 ring-[#0284c7]/25 shadow-[var(--shadow-clinical)]"
                          : "border-[#e2e8f0] hover:border-[#0284c7]/40 hover:bg-[#f0f9ff]",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-all duration-200 ease-in-out",
                          selected
                            ? "bg-[#0284c7] text-white"
                            : "bg-[#f0f9ff] text-[#0369a1] group-hover:bg-[#e0f2fe]",
                        )}
                        aria-hidden
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-snug text-[#0f172a]">
                          {s.name}
                        </span>
                        <span className="mt-0.5 block text-[11px] font-medium uppercase tracking-wide text-[#64748b]">
                          {s.category}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#0284c7]/5"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1",
                        urgencyTone(active.urgency),
                      )}
                    >
                      {urgencyLabel(active.urgency)}
                    </span>
                    <span className="text-xs text-[#64748b]">
                      {active.category}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-[#0f172a] sm:text-3xl">
                    {active.name}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                    {active.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <Metric label="Baseline price" value={formatPriceRange(active.startingPrice, active.endingPrice)} sub={active.priceUnit} />
                    <Metric label="Typical duration" value={formatDuration(active.averageDurationMinutes)} sub="from arrival" />
                    <Metric label="Warranty" value={`${active.warrantyMonths} mo`} sub="parts & labor" />
                    <Metric label="Diagnostic fee" value="$49" sub="waived on repair" />
                  </div>

                  <div className="mt-6 rounded-xl bg-[#f0f9ff] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0369a1]">
                      Common signs you have this issue
                    </p>
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {active.signs.map((sign) => (
                        <li key={sign} className="flex items-start gap-2 text-sm text-[#0f172a]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={emergency.livePhoneHref}
                      className="tap-target inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-[#1e293b] active:translate-y-[1px]"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      Book a Tech by Phone
                    </a>
                    <a
                      href="#estimate-form"
                      className="tap-target inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-[#0284c7]/30 bg-white px-5 py-3 text-sm font-semibold text-[#0369a1] transition-all duration-200 ease-in-out hover:border-[#0284c7] hover:bg-[#f0f9ff] active:translate-y-[1px]"
                    >
                      <CalendarCheck className="h-4 w-4" aria-hidden />
                      Get a Written Quote
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </div>

                  <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#64748b]">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden />
                    Estimates are good for 30 days and honored on-site. Final price confirmed before any work starts.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <EstimateForm />

        {/* Emergency Escape-Hatch Banner */}
        <div
          role="complementary"
          aria-label="Emergency call option"
          className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-[#ea580c]/20 bg-gradient-to-r from-[#fff1ea] to-[#fff7ed] px-6 py-5 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ea580c]/15 text-[#ea580c]">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0f172a]">
                In a hurry? Skip the estimate and speak to a plumber immediately.
              </p>
              <p className="text-xs text-[#64748b]">
                A real dispatcher answers 24/7 — no phone tree, no runaround.
              </p>
            </div>
          </div>
          <a
            href={emergency.livePhoneHref}
            className="tap-target inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#ea580c] px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-emergency)] transition-all duration-200 ease-in-out hover:bg-[#c2410c] active:translate-y-[1px]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-white p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-bold leading-tight text-[#0f172a]">
        {value}
      </p>
      <p className="mt-0.5 text-[11px] text-[#64748b]">{sub}</p>
    </div>
  );
}

function EstimateForm() {
  const { emergency } = plumbingConfig;
  const [submitted, setSubmitted] = useState(false);
  const [zipError, setZipError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const zip = (form.elements.namedItem("zip") as HTMLInputElement).value;
    
    // US ZIP validation: 5 digits
    if (!/^\d{5}$/.test(zip)) {
      setZipError("Please enter a valid 5-digit ZIP code");
      return;
    }
    setZipError("");
    setSubmitted(true);
  };

  return (
    <form
      id="estimate-form"
      onSubmit={handleSubmit}
      noValidate
      className="mt-10 grid items-end gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-7 lg:grid-cols-4"
      aria-label="Request a written plumbing estimate"
    >
      <div className="lg:col-span-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0369a1]">
          Written estimate in your inbox
        </p>
        <h3 className="mt-1.5 font-display text-xl font-bold text-[#0f172a] sm:text-2xl">
          Tell us a little. We'll text you a fixed quote.
        </h3>
      </div>
      <Field label="Your name" htmlFor="name">
        <input
          required
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Casey Morgan"
          className="tap-target w-full rounded-md border border-[#e2e8f0] bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
        />
      </Field>
      <Field label="Phone" htmlFor="phone">
        <input
          required
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(512) 555-0142"
          pattern="[\d\s\-\(\)\+]{7,}"
          title="Enter a valid phone number"
          className="tap-target w-full rounded-md border border-[#e2e8f0] bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
        />
      </Field>
      <Field label="ZIP code" htmlFor="zip">
        <div>
          <input
            required
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="78704"
            maxLength={5}
            pattern="\d{5}"
            title="Enter a 5-digit ZIP code"
            onChange={() => setZipError("")}
            className={cn(
              "tap-target w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#0f172a] outline-none transition focus:ring-2",
              zipError
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                : "border-[#e2e8f0] focus:border-[#0284c7] focus:ring-[#0284c7]/20",
            )}
          />
          {zipError && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {zipError}
            </p>
          )}
        </div>
      </Field>
      <button
        type="submit"
        className="tap-target inline-flex items-center justify-center gap-2 rounded-md bg-[#ea580c] px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-emergency)] transition-all duration-200 ease-in-out hover:bg-[#c2410c] active:translate-y-[1px]"
      >
        {submitted ? "Request received — calling you now" : "Request my estimate"}
      </button>
      {submitted && (
        <p className="text-xs text-emerald-700 lg:col-span-4" role="status">
          Got it. A real dispatcher will call from {emergency.livePhoneDisplay} within 5 minutes. If you'd rather not wait, tap the call button above.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#475569]">
        {label}
      </span>
      {children}
    </label>
  );
}
