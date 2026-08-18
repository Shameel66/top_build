"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFloating = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isFloating ? "px-3 pt-3 sm:px-5 sm:pt-4 md:px-6 lg:px-10" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isFloating
            ? [
                open ? "rounded-3xl" : "rounded-full",
                "max-w-[var(--container)]",
                "border-0",
                "bg-gradient-to-b from-white/20 via-white/12 to-white/8",
                "px-4 sm:px-6 lg:px-7",
                "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
                "backdrop-blur-2xl backdrop-saturate-150",
                "ring-0",
              ].join(" ")
            : "max-w-none bg-transparent px-[clamp(1.25rem,4.1667vw,3.9375rem)]",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-3 transition-all duration-500 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center",
            isFloating ? "h-14 md:h-[3.75rem]" : "h-[6.625rem]",
          )}
        >
          <Logo
            theme={isFloating ? "dark" : "light"}
            className={cn(
              "transition-all duration-500",
              isFloating &&
                "!text-[1.25rem] sm:!text-[1.4rem] lg:!text-[1.65rem]",
            )}
          />

          <nav
            className="hidden items-center justify-center gap-[3.125rem] lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-center font-sans leading-none font-medium tracking-normal transition-all duration-300 hover:text-brand",
                  isFloating
                    ? "text-[0.95rem] text-ink xl:text-[1.05rem]"
                    : "text-[clamp(1rem,1.455vw,1.375rem)] text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button
              href="/contact"
              size="md"
              className={cn(
                "transition-all duration-500",
                isFloating && "!h-9 !min-w-0 !px-4 !text-xs",
              )}
              arrowClassName={cn(
                "transition-all duration-500",
                isFloating && "!size-9",
              )}
            >
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden",
              isFloating ? "text-ink" : "text-white",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "overflow-hidden transition-all duration-500 ease-out lg:hidden",
            open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
            isFloating && open && "mb-2",
          )}
        >
          <div className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2.5 text-center font-sans text-[0.95rem] leading-none font-medium transition-colors hover:text-brand",
                  isFloating
                    ? "text-ink hover:bg-black/5"
                    : "text-white hover:bg-white/10",
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex justify-center pt-2 pb-1">
              <Button
                href="/contact"
                size="md"
                className="!h-9 !min-w-0 !px-4 !text-xs"
                arrowClassName="!size-9"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
