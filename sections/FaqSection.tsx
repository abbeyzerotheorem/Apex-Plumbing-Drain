"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { plumbingConfig } from "@/data/plumbing";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { faqs } = plumbingConfig;
  const reduced = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="The questions our dispatchers answer every day."
              description="Don’t see yours? The phone is answered by a real human 24/7 — never a tree, never a chatbot."
            />
            <div className="mt-6 hidden rounded-2xl border border-[#e2e8f0] bg-[#f0f9ff] p-5 lg:block">
              <HelpCircle className="h-6 w-6 text-[#0369a1]" aria-hidden />
              <p className="mt-3 font-display text-lg font-bold text-[#0f172a]">
                Still wondering something specific?
              </p>
              <p className="mt-1.5 text-sm text-[#475569]">
                Our dispatchers carry job-spec sheets for every service — they can usually answer the technical question right on the phone.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-[#e2e8f0] overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              {faqs.map((f) => {
                const open = openId === f.id;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : f.id)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${f.id}`}
                      className="tap-target flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-all duration-200 ease-in-out hover:bg-[#f8fafc] sm:px-6"
                    >
                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0369a1]">
                          {f.category}
                        </span>
                        <span className="mt-0.5 block font-display text-base font-semibold text-[#0f172a] sm:text-lg">
                          {f.question}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-200 ease-in-out",
                          open
                            ? "border-[#0284c7] bg-[#0284c7] text-white"
                            : "border-[#e2e8f0] bg-white text-[#0369a1]",
                        )}
                        aria-hidden
                      >
                        {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`faq-panel-${f.id}`}
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 text-[15px] leading-relaxed text-[#475569] sm:px-6">
                            {f.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
