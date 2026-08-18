"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type BeforeAfterSliderProps = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
};

export function BeforeAfterSlider({
  before,
  after,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(event.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[1312/668] w-full touch-none overflow-hidden select-none",
        className,
      )}
      onPointerDown={(event) => {
        dragging.current = true;
        (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
        updateFromClientX(event.clientX);
      }}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(max-width: 1280px) 100vw, 82rem"
        className="object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 82rem"
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") setPosition((p) => Math.max(8, p - 2));
            if (event.key === "ArrowRight") setPosition((p) => Math.min(92, p + 2));
          }}
        >
          <span className="relative size-[1.9375rem] overflow-hidden">
            <Image
              src="/images/projects/detail/slider-handle.svg"
              alt=""
              fill
              unoptimized
              className="object-contain"
            />
          </span>
        </button>
      </div>

      <span className="pointer-events-none absolute top-4 left-4 z-10 bg-white/95 px-3 py-1 font-sans text-xs font-semibold tracking-wide text-ink uppercase">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 z-10 bg-brand px-3 py-1 font-sans text-xs font-semibold tracking-wide text-white uppercase">
        After
      </span>
    </div>
  );
}
