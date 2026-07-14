import Link from "next/link";
import { Phone, Home } from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";

export default function NotFound() {
  const { emergency, brand } = plumbingConfig;
  return (
    <main className="grid min-h-[80dvh] place-items-center bg-[#f8fafc] px-4 py-16 sm:px-6">
      <div className="max-w-md text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0369a1]">
          404 · Pipe not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
          That drain is clogged.
        </h1>
        <p className="mt-4 text-base text-[#475569]">
          We couldn’t find the page you’re looking for. The good news: this is exactly the kind of problem {brand.displayName} fixes all day.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row">
          <Link
            href="/"
            className="tap-target inline-flex items-center justify-center gap-2 rounded-md bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <a
            href={emergency.livePhoneHref}
            className="tap-target inline-flex items-center justify-center gap-2 rounded-md bg-[#ea580c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c2410c]"
          >
            <Phone className="h-4 w-4" />
            Call {emergency.livePhoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
