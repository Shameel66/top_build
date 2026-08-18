import Image from "next/image";
import type { CheckItem } from "@/types/content";
import { cn } from "@/lib/cn";

type CheckListProps = {
  items: CheckItem[];
  className?: string;
};

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-[1.5rem]", className)}>
      {items.map((item) => (
        <li key={item.text} className="flex items-center gap-3.5">
          <span className="relative size-6 shrink-0" aria-hidden="true">
            <Image
              src="/images/shared/icons/check-brand.svg"
              alt=""
              width={24}
              height={24}
              unoptimized
              className="size-full"
            />
          </span>
          <span className="font-sans text-[1.375rem] leading-[1.8125rem] text-muted">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
