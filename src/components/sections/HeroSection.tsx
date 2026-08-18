import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { heroContent } from "@/data/home";

function StatPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center justify-center bg-white/20 px-[1.875rem] py-1.5 backdrop-blur-[2px] transition-colors duration-300 hover:bg-white/28">
      <div className="flex items-center gap-2.5">
        <span className="font-sans text-[clamp(1rem,1.455vw,1.375rem)] leading-[2.625rem] font-normal whitespace-nowrap text-white/80">
          {label}
        </span>
        <span className="relative size-6 shrink-0" aria-hidden="true">
          <Image
            src="/images/shared/icons/check.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
            className="size-full"
          />
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <Section
      id="home"
      ariaLabelledBy="hero-heading"
      flush
      className="overflow-x-clip"
    >
      <div className="relative min-h-[36rem] w-full overflow-hidden lg:h-[61.375rem]">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover object-center"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full min-h-[36rem] w-full items-end lg:min-h-0">
          <div className="flex w-full flex-col gap-8 pt-28 pb-16 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-20">
            <div className="max-w-[47.25rem] shrink-0 pl-[var(--page-gutter)] pr-[var(--page-gutter)] md:pr-0">
              <h1
                id="hero-heading"
                className="font-serif text-[clamp(2rem,3.7037vw,3.5rem)] leading-none font-bold text-white"
              >
                <span className="hero-line block" style={{ animationDelay: "120ms" }}>
                  {heroContent.titleBefore}{" "}
                  <span className="text-brand">{heroContent.titleAccent}</span>
                </span>
                <span className="hero-line block" style={{ animationDelay: "280ms" }}>
                  <span className="text-brand">
                    {heroContent.titleAccentLine2}
                  </span>{" "}
                  {heroContent.titleAfter}
                </span>
              </h1>

              <p
                className="hero-line mt-[1.625rem] max-w-[40.3125rem] font-sans text-[clamp(1rem,1.5873vw,1.5rem)] leading-normal text-white/80"
                style={{ animationDelay: "460ms" }}
              >
                {heroContent.subtitle}
              </p>

              <div className="hero-line mt-[1.875rem]" style={{ animationDelay: "620ms" }}>
                <Button href={heroContent.cta.href} size="lg">
                  {heroContent.cta.label}
                </Button>
              </div>
            </div>

            <ul
              className="flex flex-col items-start gap-[0.9375rem] pl-[var(--page-gutter)] md:items-end md:pl-0 md:pb-1"
              aria-label="Company highlights"
            >
              {heroContent.stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className="hero-stat w-fit"
                  style={{ animationDelay: `${750 + index * 140}ms` }}
                >
                  <StatPill label={stat.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
