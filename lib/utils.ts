import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `tel:+1${digits}`;
}

export function formatPriceRange(start: number, end: number): string {
  return `$${start.toLocaleString()} – $${end.toLocaleString()}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  if (remaining === 0) return `${hours} hr`;
  return `${hours} hr ${remaining} min`;
}

export function urgencyLabel(level: "routine" | "priority" | "emergency"): string {
  switch (level) {
    case "emergency":
      return "Emergency";
    case "priority":
      return "Same-day";
    case "routine":
      return "Scheduled";
  }
}

export function urgencyTone(level: "routine" | "priority" | "emergency"): string {
  switch (level) {
    case "emergency":
      return "bg-[#fff1ea] text-[#9a3412] ring-[#fed7aa]";
    case "priority":
      return "bg-[#ecfeff] text-[#155e75] ring-[#a5f3fc]";
    case "routine":
      return "bg-[#f0f9ff] text-[#0c4a6e] ring-[#bae6fd]";
  }
}
