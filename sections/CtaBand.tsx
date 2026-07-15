"use client";

import { Phone, CalendarCheck, MessageSquare, ShieldCheck } from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";

export function CtaBand() {
  const { emergency } = plumbingConfig;
  return (
    <section
      aria-labelledby="cta-band-heading"
      className="relative overflow-hidden bg-[#0284c7] py-14 text-white sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, #7dd3fc 0, transparent 40%), radial-gradient(circle at 100% 100%, #ea580c 0, transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bae6fd]">
              Stress is overrated. Let us handle it.
            </p>
            <h2
              id="cta-band-heading"
              className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Stop staring at the water. Pick up the phone.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              A real, human dispatcher answers 24/7. We’ll talk you through shutting off the water, quote you a flat rate, and have a background-checked tech at your door — usually before the next episode of whatever you were watching.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={emergency.livePhoneHref}
                className="pulse-emergency tap-target inline-flex items-center justify-center gap-2 rounded-md bg-[#ea580c] px-6 py-3.5 text-base font-bold text-white shadow-[var(--shadow-emergency)] transition-all duration-200 ease-in-out hover:bg-[#c2410c] active:translate-y-[1px]"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {emergency.livePhoneDisplay}
              </a>
              <a
                href="#estimate"
                className="tap-target inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all duration-200 ease-in-out hover:bg-white/15 active:translate-y-[1px]"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden />
                Schedule a visit
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#bae6fd]">
                Three ways to reach us
              </p>
              <ul className="mt-3 grid gap-2.5">
                <Row icon={<Phone className="h-4 w-4" />} title="Emergency line" sub={emergency.livePhoneDisplay} href={emergency.livePhoneHref} />
                <Row icon={<MessageSquare className="h-4 w-4" />} title="Text dispatch" sub={emergency.smsNumberDisplay} href={emergency.smsNumberHref} />
                <Row icon={<CalendarCheck className="h-4 w-4" />} title="Online booking" sub="Quote in 5 minutes" href="#estimate" />
              </ul>
              <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-3 text-xs text-white/80">
                <ShieldCheck className="h-4 w-4 text-[#7dd3fc]" aria-hidden />
                Background-checked, drug-screened techs · 12-month minimum warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  title,
  sub,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="tap-target flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 transition-all duration-200 ease-in-out hover:border-white/30 hover:bg-white/[0.12]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-md bg-white/15 text-white">
          {icon}
        </span>
        <span>
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-white/70">
            {title}
          </span>
          <span className="block text-sm font-semibold">{sub}</span>
        </span>
      </a>
    </li>
  );
}
