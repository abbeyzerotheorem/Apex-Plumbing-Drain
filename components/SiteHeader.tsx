"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { useEffect, useState } from "react";
import { plumbingConfig } from "@/data/plumbing";
import { cn } from "@/lib/utils";

// ==========================================
// Primary Header Component
// ==========================================

const HEADER_NAV = [
  { href: "#services", label: "Services" },
  { href: "#estimate", label: "Instant Quote" },
  { href: "#guarantee", label: "Our Standard" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const { brand, emergency } = plumbingConfig;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll state to apply glassmorphism background styles dynamically
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-[33px] z-40 w-full border-b transition-all duration-200 sm:top-[40px]",
        scrolled
          ? "border-[#e2e8f0] bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px]">
        
        {/* Brand Logo & License */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${brand.displayName} home`}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-[#0f172a] text-white shadow-[var(--shadow-clinical)]">
            <Droplets className="h-5 w-5 text-[#7dd3fc]" strokeWidth={2.4} aria-hidden />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#ea580c] ring-2 ring-white" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[clamp(0.875rem,2.5vw,1rem)] font-bold tracking-tight text-[#0f172a]">
              {brand.displayName}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#64748b] sm:text-[11px]">
              Master License {brand.stateLicenseKey}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {HEADER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#334155] transition-all duration-200 ease-in-out hover:bg-[#f0f9ff] hover:text-[#0369a1]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={emergency.livePhoneHref}
            className="hidden items-center gap-2 rounded-md border border-[#0284c7]/15 bg-[#f0f9ff] px-3 py-2 text-sm font-semibold text-[#0369a1] transition-all duration-200 ease-in-out hover:border-[#0284c7]/35 hover:bg-[#e0f2fe] lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {emergency.livePhoneDisplay}
          </a>

          <a
            href={emergency.livePhoneHref}
            aria-label={`Call emergency line ${emergency.livePhoneDisplay}`}
            className="tap-target grid place-items-center rounded-md bg-[#ea580c] text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#c2410c] md:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          
          <a
            href="#estimate"
            className="inline-flex items-center justify-center rounded-md bg-[#0f172a] px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#1e293b] active:translate-y-[1px]"
          >
            Book a Tech
          </a>
          
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="tap-target grid place-items-center rounded-md text-[#0f172a] transition-all duration-200 ease-in-out hover:bg-[#f0f9ff] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-[#e2e8f0] bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav
            aria-label="Mobile primary"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6"
          >
            {HEADER_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="tap-target rounded-md px-3 py-2.5 text-sm font-medium text-[#334155] transition-all duration-200 ease-in-out hover:bg-[#f0f9ff] hover:text-[#0369a1]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={emergency.livePhoneHref}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md border border-[#0284c7]/15 bg-[#f0f9ff] px-3 py-3 text-sm font-semibold text-[#0369a1] transition-all duration-200 ease-in-out hover:bg-[#e0f2fe]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {emergency.livePhoneDisplay}
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}