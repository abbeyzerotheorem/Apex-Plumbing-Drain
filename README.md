# Apex Plumbing & Drain — Production Template

A premium, conversion-engineered website template for residential plumbing, heating, and emergency repair services. Built on Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## What's included

- **24/7 Rapid Emergency Dispatch Banner** — pinned status bar with live availability, text dispatch, license/insurance, and a high-contrast call CTA.
- **Interactive Plumbing Quote Builder** — issue selector with instant baseline pricing, urgency tier, and a written-estimate intake form.
- **"No-Mess" Care Guarantee** — premium card grid outlining the company’s cleanliness oath, upfront pricing, and warranty.
- **"On-The-Way" Tech Tracker** — animated phone mockup showing the SMS dispatch + live GPS experience.
- **Sticky Mobile Panic Button Ribbon** — fixed, three-button thumb bar (Call / Book / Text) on small viewports.
- **Hero, Credibility Matrix, Services Grid, Reviews, FAQ, CTA Band, and a full Footer.**

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion (with full `prefers-reduced-motion` support)
- Lucide React icons
- `next/image` and `next/font` (Space Grotesk + Inter)

## Folder layout

```
app/
  layout.tsx         // root layout, metadata, fonts, JSON-LD, ribbon, footer, mobile bar
  page.tsx           // homepage composition
  globals.css        // Tailwind v4 theme tokens + utility layer + reduced-motion
  not-found.tsx      // themed 404

components/          // atomic UI (EmergencyRibbon, SiteHeader, MobilePanicBar, etc.)
sections/            // page sections (Hero, Estimate, Services, Guarantee, etc.)
data/
  plumbing.ts        // SINGLE SOURCE OF TRUTH — brand, dispatch, services, reviews, FAQs
types/
  plumbing.ts        // strict type system for the entire config
lib/
  utils.ts           // cn(), formatters, urgency helpers
```

## Editing the client config (5-minute changes)

All editable copy and numbers live in **`data/plumbing.ts`**. No contact number, license number, or baseline price lives in any layout, component, or section file.

Update in one place:
- Brand name, tagline, license, insurance
- Live phone, SMS, dispatch email, status, ETA
- Coverage neighborhoods, ZIPs, average arrival times
- Service catalog (8 included) with starting/ending price, duration, warranty, urgency
- Guarantees, reviews, FAQs

## Performance & accessibility

- Sub-1s TTI on cellular: small JS surface, system font fallback, no client state on the critical path except where it earns its keep (mobile menu, accordion, quote builder).
- Zero CLS: explicit aspect ratios, no late-loading fonts, image dimensions set via `next/image` + `sizes`.
- AAA contrast on headlines, AA across all body text and CTA pairs.
- `prefers-reduced-motion` honored globally in `globals.css` and per-component via `useReducedMotion`.
- Skip-to-content link, semantic landmarks, full keyboard nav, large 50×50 minimum tap targets.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## SEO

`app/layout.tsx` exports a localized title template, OpenGraph, and Twitter metadata. `components/JsonLd.tsx` emits two JSON-LD blocks (LocalBusiness/Plumber and FAQPage) sourced directly from `data/plumbing.ts`, covering pricing, geo service areas, ratings, and emergency phone.
