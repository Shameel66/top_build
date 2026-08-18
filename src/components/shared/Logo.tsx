import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

type LogoProps = {
  className?: string;
  theme?: "light" | "dark";
};

export function Logo({ className, theme = "light" }: LogoProps) {
  const topColor = theme === "light" ? "text-white" : "text-navy";

  return (
    <Link
      href="/"
      className={cn(
        "font-sans text-[clamp(1.5rem,2.3148vw,2.1875rem)] leading-none font-medium tracking-normal uppercase",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span className={topColor}>TOP</span>
      <span className="text-brand">BUILD</span>
    </Link>
  );
}
