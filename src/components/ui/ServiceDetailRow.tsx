import Image from "next/image";
import type { ServiceDetailCategory } from "@/types/serviceDetail";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type ServiceDetailRowProps = ServiceDetailCategory & {
  reverse?: boolean;
  className?: string;
};

export function ServiceDetailRow({
  number,
  title,
  description,
  bullets,
  image,
  reverse = false,
  className,
}: ServiceDetailRowProps) {
  return (
    <article className={cn("grid lg:min-h-[26.25rem] lg:grid-cols-2", className)}>
      <Reveal
        variant={reverse ? "right" : "left"}
        className={cn(
          "relative aspect-[756/420] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[26.25rem]",
          reverse && "lg:order-2",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
        />
      </Reveal>

      <Reveal
        variant={reverse ? "left" : "right"}
        delay={80}
        className={cn(
          "flex items-center px-0 py-8 sm:py-10 lg:px-[clamp(1.5rem,6.5vw,6.0625rem)] lg:py-12",
          reverse && "lg:order-1 lg:justify-end",
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-[31.9375rem] flex-col gap-5 sm:gap-[1.375rem]",
            reverse && "lg:items-end lg:text-right",
          )}
        >
          <p className="font-serif text-[clamp(2.25rem,3.3vw,3.125rem)] leading-none font-semibold text-brand">
            #{number}
          </p>

          <div className="flex flex-col gap-4 sm:gap-[1.0625rem]">
            <h3 className="font-serif text-[1.875rem] leading-tight font-semibold tracking-[0.04em] text-navy">
              {title}
            </h3>
            <p className="font-sans text-[1.0625rem] leading-relaxed text-muted">
              {description}
            </p>
          </div>

          <ul
            className={cn(
              "mt-1 flex flex-col gap-1",
              reverse && "lg:items-end",
            )}
          >
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className={cn(
                  "flex items-start gap-3.5",
                  reverse && "lg:flex-row-reverse",
                )}
              >
                <span
                  className="mt-3 size-2.5 shrink-0 rounded-full bg-muted"
                  aria-hidden="true"
                />
                <span className="font-sans text-[1.0625rem] leading-[1.875rem] text-muted">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </article>
  );
}
