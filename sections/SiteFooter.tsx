"use client";

import {
  Droplets,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";

export function SiteFooter() {
  const { brand, emergency, coverage, trust } = plumbingConfig;
  return (
    <footer className="relative border-t border-[#e2e8f0] bg-[#0f172a] pb-32 text-white md:pb-12">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white">
                <Droplets className="h-5 w-5 text-[#7dd3fc]" aria-hidden />
              </span>
              <div>
                <p className="font-display text-lg font-bold">{brand.displayName}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Master License {brand.stateLicenseKey}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              {brand.tagline} Family-owned and operated out of {brand.headquarters.city}, {brand.headquarters.state} since {brand.foundedYear}.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <Contact
                icon={<Phone className="h-4 w-4" />}
                label="Emergency dispatch"
                value={emergency.livePhoneDisplay}
                href={emergency.livePhoneHref}
                highlight
              />
              <Contact
                icon={<MessageSquare className="h-4 w-4" />}
                label="Text dispatch"
                value={emergency.smsNumberDisplay}
                href={emergency.smsNumberHref}
              />
              <Contact
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={emergency.dispatchEmail}
                href={`mailto:${emergency.dispatchEmail}`}
              />
              <Contact
                icon={<MapPin className="h-4 w-4" />}
                label="Headquarters"
                value={`${brand.headquarters.street}, ${brand.headquarters.city}, ${brand.headquarters.state} ${brand.headquarters.zip}`}
                href="#"
              />
              <Contact
                icon={<Clock className="h-4 w-4" />}
                label="Hours"
                value={brand.hoursLine}
                href="#"
              />
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Service coverage
            </h3>
            <p className="mt-1.5 text-sm text-slate-300">
              {coverage.length} neighborhoods across {emergency.dispatchAreaLabel}, {brand.headquarters.state}.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {coverage.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-all duration-200 ease-in-out hover:bg-white/[0.06]"
                >
                  <span className="font-medium text-slate-200">{c.name}</span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {c.averageArrivalMinutes} min
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Licensing & insurance
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {brand.stateLicenseLabel}
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-white">
                  {brand.stateLicenseKey}
                </p>
              </li>
              <li className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  General liability
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {brand.insuredValue} · {brand.insuredCarrier}
                </p>
              </li>
              <li className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Workers' comp
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Active in {brand.headquarters.state} · certificates on request
                </p>
              </li>
            </ul>
            <div className="mt-5 flex items-start gap-2.5 rounded-md border border-emerald-400/20 bg-emerald-400/5 p-3.5 text-xs text-emerald-200">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>
                BBB {trust.bbbGrade} accredited · {trust.googleRating}★ on Google · {trust.certifiedTechs} background-checked techs
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</p>
          <p className="max-w-md leading-relaxed">
            Prices listed on this site are baseline ranges for the listed scope. Final pricing depends on site conditions, code requirements, and parts selected on-site. Quotes are honored for 30 days.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Contact({
  icon,
  label,
  value,
  href,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  highlight?: boolean;
}) {
  const Inner = (
    <>
      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-md ${highlight ? "bg-[#ea580c]/20 text-[#fb923c]" : "bg-white/10 text-[#7dd3fc]"}`}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </span>
        <span className={`block truncate text-sm font-semibold ${highlight ? "text-white" : "text-slate-100"}`}>
          {value}
        </span>
      </span>
    </>
  );
  if (href === "#") {
    return <li className="flex items-start gap-3 py-1">{Inner}</li>;
  }
  return (
    <li>
      <a
        href={href}
        className="flex items-start gap-3 rounded-md py-1 transition-all duration-200 ease-in-out hover:bg-white/[0.04]"
      >
        {Inner}
      </a>
    </li>
  );
}
