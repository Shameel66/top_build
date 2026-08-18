"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonialsContent } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export function TestimonialsSection() {
  const { eyebrow, title, items } = testimonialsContent;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const perPage = 2;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  function goPrev() {
    setDirection(-1);
    setPage((current) => (current - 1 + totalPages) % totalPages);
  }

  function goNext() {
    setDirection(1);
    setPage((current) => (current + 1) % totalPages);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setPage((current) => (current + 1) % totalPages);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [totalPages]);

  return (
    <Section
      id="testimonials"
      ariaLabelledBy="testimonials-heading"
      className="bg-surface"
    >
      <Container>
        <Reveal variant="up">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            titleId="testimonials-heading"
            align="center"
          />
        </Reveal>

        <ul
          key={page}
          className={cn(
            "mt-12 grid items-stretch gap-6 sm:mt-14 md:grid-cols-2 lg:gap-7",
            direction === 1
              ? "animate-[carouselInRight_520ms_cubic-bezier(0.22,1,0.36,1)_both]"
              : "animate-[carouselInLeft_520ms_cubic-bezier(0.22,1,0.36,1)_both]",
          )}
        >
          {visible.map((item) => (
            <li
              key={`${item.name}-${page}`}
              className="h-full min-h-[20rem] sm:min-h-[22rem]"
            >
              <TestimonialCard {...item} className="luxury-card" />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonials"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-[#eceff3] text-muted transition-all duration-300 hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonials"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-[#eceff3] text-muted transition-all duration-300 hover:bg-brand hover:text-white"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </Section>
  );
}
