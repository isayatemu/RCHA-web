"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  labelBefore?: string;
  labelAfter?: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  labelBefore = "Kabla",
  labelAfter = "Baada",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeClipRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasInteracted) return;

    const timers = [
      window.setTimeout(() => setPosition(44), 120),
      window.setTimeout(() => setPosition(56), 420),
      window.setTimeout(() => setPosition(50), 820),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [hasInteracted]);

  const setFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clamp(next, 0, 100));
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    setHasInteracted(true);
    setFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setFromClientX(event.clientX);
  };

  const stopDragging = (event?: React.PointerEvent<HTMLDivElement>) => {
    if (event) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // Pointer capture can already be released by the browser.
      }
    }
    setIsDragging(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setHasInteracted(true);

    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setPosition((current) => clamp(current - 5, 0, 100));
    }

    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setPosition((current) => clamp(current + 5, 0, 100));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  const motionClass = isDragging ? "" : "transition-[width,left,transform] duration-300 ease-out";

  useEffect(() => {
    const value = `${position}%`;
    if (beforeClipRef.current) beforeClipRef.current.style.width = value;
    if (dividerRef.current) dividerRef.current.style.left = value;
    if (handleRef.current) handleRef.current.style.left = value;
  }, [position]);

  return (
    <div
      ref={containerRef}
      className="relative touch-none overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-[0_24px_60px_rgba(11,47,34,0.12)]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3]">
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div ref={beforeClipRef} className={`absolute inset-y-0 left-0 overflow-hidden ${motionClass}`}>
          <div className="relative h-full w-full min-w-full">
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-950 shadow-sm sm:text-sm">
            {labelBefore}
          </span>
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-950 shadow-sm sm:text-sm">
            {labelAfter}
          </span>
        </div>

        <div
          ref={dividerRef}
          className={`pointer-events-none absolute inset-y-0 -ml-px w-0.5 bg-white/95 shadow-[0_0_0_1px_rgba(17,72,53,0.06)] ${motionClass}`}
          aria-hidden="true"
        />

        <input
          ref={handleRef}
          type="range"
          min={0}
          max={100}
          value={Math.round(position)}
          onChange={(event) => {
            setHasInteracted(true);
            setPosition(Number(event.target.value));
          }}
          className={`absolute top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize appearance-none rounded-full border border-emerald-900/10 bg-white text-emerald-950 shadow-[0_16px_30px_rgba(11,47,34,0.18)] outline-none hover:scale-105 focus-visible:scale-105 focus-visible:ring-4 focus-visible:ring-emerald-200 ${motionClass}`}
          onKeyDown={handleKeyDown}
          aria-label="Before and after comparison slider"
        />

        <div
          className={`pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/70 bg-white/88 px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-emerald-950 shadow-sm backdrop-blur transition duration-300 sm:text-xs ${hasInteracted ? "translate-y-2 opacity-0" : "animate-pulse opacity-100"}`}
          aria-hidden="true"
        >
          Vuta kushoto au kulia / Drag left or right
        </div>
      </div>
    </div>
  );
};
