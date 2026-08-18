import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

type InnerPageBannerProps = {
  badge: string;
  title: string;
  titleId: string;
  className?: string;
};

export function InnerPageBanner({
  badge,
  title,
  titleId,
  className,
}: InnerPageBannerProps) {
  return (
    <Section
      flush
      ariaLabelledBy={titleId}
      className={cn("overflow-x-clip", className)}
    >
      <div className="relative flex min-h-[16rem] items-end bg-[#12151a] pt-28 pb-12 sm:min-h-[18rem] sm:pb-14 md:min-h-[20rem] lg:h-[20rem] lg:pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(247,152,41,0.18),transparent_55%),linear-gradient(180deg,rgba(18,21,26,0.4)_0%,rgba(18,21,26,0.92)_100%)]"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <div className="hero-line" style={{ animationDelay: "120ms" }}>
            <span className="inline-flex items-center bg-brand px-2.5 py-1.5 font-sans text-[0.875rem] leading-none font-medium tracking-[0.04em] text-white uppercase">
              {badge}
            </span>
            <h1
              id={titleId}
              className="mt-4 max-w-3xl font-serif text-[clamp(2rem,3.5vw,2.875rem)] leading-none font-bold text-white"
            >
              {title}
            </h1>
          </div>
        </Container>
      </div>
    </Section>
  );
}
