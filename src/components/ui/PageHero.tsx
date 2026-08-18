import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  titleId: string;
  titleBefore: string;
  titleAccent: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  eyebrow?: string;
  backLink?: {
    href: string;
    label: string;
  };
  className?: string;
  stackedTitle?: boolean;
};

export function PageHero({
  titleBefore,
  titleAccent,
  description,
  image,
  titleId,
  eyebrow,
  backLink,
  className,
  stackedTitle = false,
}: PageHeroProps) {
  return (
    <Section
      ariaLabelledBy={titleId}
      flush
      className={cn("overflow-x-clip", className)}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          stackedTitle
            ? "min-h-[28rem] lg:h-[52.4375rem]"
            : "min-h-[22rem] sm:min-h-[26rem] md:min-h-[30rem] lg:min-h-[34rem]",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover object-center"
        />
        <div
          className={cn(
            "absolute inset-0",
            stackedTitle
              ? "bg-gradient-to-t from-[#101014] via-transparent to-transparent"
              : "bg-[linear-gradient(180deg,rgba(8,12,20,0.4)_0%,rgba(8,12,20,0.72)_100%)]",
          )}
          aria-hidden="true"
        />

        <Container
          className={cn(
            "relative z-10 flex flex-col justify-end pt-28",
            stackedTitle
              ? "min-h-[28rem] pb-14 lg:min-h-[52.4375rem] lg:pb-16"
              : "min-h-[22rem] pb-10 sm:min-h-[26rem] sm:pb-12 md:min-h-[30rem] md:pb-14 lg:min-h-[34rem] lg:pb-16",
          )}
        >
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-12">
            <div className="hero-line" style={{ animationDelay: "120ms" }}>
              {backLink ? (
                <Link
                  href={backLink.href}
                  className="mb-4 inline-flex items-center gap-2.5 font-sans text-base font-medium text-white transition-opacity hover:opacity-80 sm:mb-5"
                >
                  <span className="relative size-5 overflow-hidden" aria-hidden="true">
                    <Image
                      src="/images/shared/icons/back-arrow.svg"
                      alt=""
                      width={20}
                      height={15}
                      unoptimized
                      className="size-full -rotate-90 object-contain"
                    />
                  </span>
                  {backLink.label}
                </Link>
              ) : null}
              {eyebrow ? (
                <SectionEyebrow tone="brand" className="mb-3">
                  {eyebrow}
                </SectionEyebrow>
              ) : null}
              <h1
                id={titleId}
                className={cn(
                  "font-serif font-bold tracking-normal text-white",
                  stackedTitle
                    ? "flex flex-col text-[clamp(2rem,3.0423vw,2.875rem)] leading-none"
                    : "text-[2.4rem] leading-[1.1] font-semibold tracking-tight sm:text-5xl md:text-[3.25rem]",
                )}
              >
                <span>{titleBefore}</span>
                <span className="text-brand">
                  {stackedTitle ? null : " "}
                  {titleAccent}
                </span>
              </h1>
            </div>
            <p
              className={cn(
                "hero-line max-w-xl font-sans text-white/80 lg:justify-self-end",
                stackedTitle
                  ? "text-[clamp(1rem,1.5873vw,1.5rem)] leading-normal lg:text-left"
                  : "text-[0.95rem] leading-relaxed text-white/90 sm:text-base sm:leading-7 lg:text-right",
              )}
              style={{ animationDelay: "320ms" }}
            >
              {description}
            </p>
          </div>
        </Container>
      </div>
    </Section>
  );
}
