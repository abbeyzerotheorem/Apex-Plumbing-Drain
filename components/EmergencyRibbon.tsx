"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, ShieldCheck, Clock4 } from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { cn } from "@/lib/utils";

// ==========================================
// Primary Emergency Ribbon Component
// ==========================================

export function EmergencyRibbon() {
  const { emergency, brand } = plumbingConfig;
  const status = emergency.status;

  return (
    <div className="sticky top-0 z-50 w-full border-b border-[#0f172a]/10 bg-[#0f172a] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[12px] sm:px-6 sm:text-[13px]">
        
        {/* Left Status Area */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <StatusDot status={status} />
          <span className="hidden truncate text-white/85 sm:inline">
            {emergency.statusNote}
          </span>
          <span className="flex items-center gap-1 truncate text-white/85 sm:hidden">
            <Clock4 className="h-3.5 w-3.5" aria-hidden />
            {emergency.averageResponseMinutes} min ETA
          </span>
        </div>

        {/* Right Actionable Contact / License Info */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={emergency.smsNumberHref}
            className="hidden items-center gap-1.5 rounded-md px-2 py-1 text-white/85 transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <MessageSquare className="h-3.5 w-3.5" aria-hidden />
            <span>Text {emergency.smsNumberDisplay}</span>
          </a>
          
          <span className="hidden h-3.5 w-px bg-white/15 sm:inline-block" aria-hidden />
          
          <span className="hidden items-center gap-1.5 text-white/70 md:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
            License {brand.stateLicenseKey} · {brand.insuredValue} insured
          </span>
          
          <a
            href={emergency.livePhoneHref}
            className="ml-1 inline-flex items-center gap-1.5 rounded-md bg-[#ea580c] px-2.5 py-1 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-[#c2410c] sm:ml-2 sm:px-3"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{emergency.livePhoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// Sub-component: StatusDot (Pulsing Indicator)
// ==========================================

function StatusDot({ status }: { status: "operational" | "high-volume" | "critical" }) {
  const tone =
    status === "operational"
      ? "bg-emerald-400"
      : status === "high-volume"
        ? "bg-amber-300"
        : "bg-red-400";

  return (
    <span className="relative inline-flex h-2.5 w-2.5 shrink-0" aria-hidden>
      <span
        className={cn(
          "absolute inset-0 animate-ping rounded-full opacity-70",
          tone
        )}
      />
      <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", tone)} />
    </span>
  );
}