"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";
import { cn } from "@/lib/cn";

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className={cn("flex w-full flex-col gap-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <li key={item.question}>
            <div
              className={cn(
                "rounded-[var(--radius-md)] border border-border bg-surface-soft transition-colors duration-200",
                isOpen &&
                  "border-[color-mix(in_srgb,var(--color-brand)_35%,var(--color-border))]",
              )}
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-4"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span
                  className={cn(
                    "font-sans text-[0.92rem] font-semibold leading-snug sm:text-[0.98rem]",
                    isOpen ? "text-brand" : "text-ink",
                  )}
                >
                  {item.question}
                </span>
                {!isOpen ? (
                  <Plus
                    className="size-4 shrink-0 text-muted"
                    aria-hidden="true"
                  />
                ) : null}
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 font-sans text-[0.9rem] leading-relaxed text-muted sm:px-5 sm:pb-5 sm:text-[0.95rem] sm:leading-[1.75]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
