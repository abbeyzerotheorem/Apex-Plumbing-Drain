import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { plumbingConfig } from "@/data/plumbing";
import { EmergencyRibbon } from "@/components/EmergencyRibbon";
import { MobilePanicBar } from "@/components/MobilePanicBar";
import { SiteFooter } from "@/sections/SiteFooter";
import { JsonLd } from "@/components/JsonLd";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apexplumbing.example"),
  title: {
    default: `${plumbingConfig.brand.displayName} — 24/7 Emergency Plumber in ${plumbingConfig.brand.headquarters.city}, ${plumbingConfig.brand.headquarters.state}`,
    template: `%s · ${plumbingConfig.brand.displayName}`,
  },
  description:
    `${plumbingConfig.brand.displayName}: licensed master plumbers serving ${plumbingConfig.emergency.dispatchAreaLabel}. ` +
    `${plumbingConfig.emergency.averageResponseMinutes}-min average emergency response. Background-checked techs, upfront flat pricing, and a written No-Mess guarantee. ` +
    `Call ${plumbingConfig.emergency.livePhoneDisplay} 24/7.`,
  applicationName: plumbingConfig.brand.displayName,
  authors: [{ name: plumbingConfig.brand.legalName }],
  generator: "Next.js",
  keywords: [
    "emergency plumber",
    `plumber ${plumbingConfig.brand.headquarters.city}`,
    "drain cleaning",
    "water heater repair",
    "sewer line cleaning",
    "leak detection",
    "repipe",
    "24/7 plumbing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: plumbingConfig.brand.displayName,
    title: `${plumbingConfig.brand.displayName} — Emergency Plumber in ${plumbingConfig.brand.headquarters.city}`,
    description:
      `Licensed, insured, background-checked plumbers. ${plumbingConfig.emergency.averageResponseMinutes}-min average response across ${plumbingConfig.emergency.dispatchAreaLabel}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: plumbingConfig.brand.displayName,
    description:
      `24/7 emergency plumbing with a ${plumbingConfig.emergency.averageResponseMinutes}-minute average response. Call ${plumbingConfig.emergency.livePhoneDisplay}.`,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#f8fafc] text-[#0f172a] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-[#0284c7] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <EmergencyRibbon />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobilePanicBar />
        <JsonLd />
      </body>
    </html>
  );
}
