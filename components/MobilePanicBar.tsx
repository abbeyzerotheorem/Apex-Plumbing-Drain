"use client";

import { Phone, CalendarCheck, MessageSquare } from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";

export function MobilePanicBar() {
  const { emergency } = plumbingConfig;

  return (
    <div
      role="region"
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0f172a]/10 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_30px_-12px_rgba(15,23,42,0.25)] backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Now Button */}
        <a
          href={emergency.livePhoneHref}
          aria-label={`Call emergency line ${emergency.livePhoneDisplay}`}
          className="pulse-emergency tap-target col-span-1 inline-flex flex-col items-center justify-center gap-0.5 rounded-lg bg-[#ea580c] py-2.5 text-white transition active:translate-y-[1px]"
        >
          <Phone className="h-5 w-5" aria-hidden />
          <span className="text-[11px] font-semibold leading-tight tracking-wide">
            CALL NOW
          </span>
        </a>

        {/* Book Online Button */}
        <a
          href="#estimate"
          aria-label="Book a technician online"
          className="tap-target col-span-1 inline-flex flex-col items-center justify-center gap-0.5 rounded-lg bg-[#0284c7] py-2.5 text-white transition active:translate-y-[1px]"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden />
          <span className="text-[11px] font-semibold leading-tight tracking-wide">
            BOOK ONLINE
          </span>
        </a>

        {/* Text Dispatch Button */}
        <a
          href={emergency.smsNumberHref}
          aria-label={`Text dispatch at ${emergency.smsNumberDisplay}`}
          className="tap-target col-span-1 inline-flex flex-col items-center justify-center gap-0.5 rounded-lg bg-[#0f172a] py-2.5 text-white transition active:translate-y-[1px]"
        >
          <MessageSquare className="h-5 w-5" aria-hidden />
          <span className="text-[11px] font-semibold leading-tight tracking-wide">
            TEXT DISPATCH
          </span>
        </a>

      </div>
    </div>
  );
}