"use client";

import { useMemo, useState } from "react";
import type { FaqCategory } from "@/types/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";

type FaqCategoryListProps = {
  categories: FaqCategory[];
  className?: string;
};

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

type IndexedFaqItem = FaqCategory["items"][number] & {
  key: string;
  number: string;
};

type IndexedFaqCategory = Omit<FaqCategory, "items"> & {
  items: IndexedFaqItem[];
};

function buildIndexedCategories(categories: FaqCategory[]): IndexedFaqCategory[] {
  let offset = 0;

  return categories.map((category, categoryIndex) => ({
    ...category,
    items: category.items.map((item, itemIndex) => {
      const number = formatIndex(offset);
      offset += 1;

      return {
        ...item,
        key: `${categoryIndex}-${itemIndex}`,
        number,
      };
    }),
  }));
}

export function FaqCategoryList({ categories, className }: FaqCategoryListProps) {
  const [openKey, setOpenKey] = useState("0-0");
  const indexedCategories = useMemo(
    () => buildIndexedCategories(categories),
    [categories],
  );

  return (
    <div className={cn("space-y-14", className)}>
      {indexedCategories.map((category) => (
        <section key={category.title}>
          <SectionEyebrow className="!mb-6">{category.title}</SectionEyebrow>

          <ul className="border-t border-border">
            {category.items.map((item) => {
              const isOpen = openKey === item.key;
              const panelId = `faq-cat-panel-${item.key}`;
              const buttonId = `faq-cat-button-${item.key}`;

              return (
                <li key={item.question} className="border-b border-border">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-start justify-between gap-6 py-7 text-left sm:py-8"
                    onClick={() => setOpenKey(isOpen ? "" : item.key)}
                  >
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block font-sans text-[1.05rem] font-semibold sm:text-[1.125rem]",
                          isOpen ? "text-brand" : "text-ink",
                        )}
                      >
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "shrink-0 font-sans text-sm font-medium tracking-wide",
                        isOpen ? "text-brand" : "text-muted",
                      )}
                    >
                      {item.number}
                    </span>
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
                      <p className="max-w-4xl pb-8 font-sans text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
