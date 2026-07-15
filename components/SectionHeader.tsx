import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
  titleClassName,
}: SectionHeaderProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0284c7]/15 bg-[#f0f9ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0369a1]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag className={cn("font-display text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.08] tracking-tight text-[#0f172a] text-balance sm:text-4xl md:text-[44px]", titleClassName)}>
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#475569] text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}