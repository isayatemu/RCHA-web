"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type HeroImageShowcaseProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export const HeroImageShowcase = ({ slides, intervalMs = 4500 }: HeroImageShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = useMemo(
    () => () => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    },
    [totalSlides],
  );

  useEffect(() => {
    if (totalSlides < 2 || isHovered) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, isHovered, nextSlide, totalSlides]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (totalSlides > 1) nextSlide();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    if (totalSlides > 1) nextSlide();
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-[0_24px_60px_rgba(11,47,34,0.12)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={`${slide.src}-${index}`}
              href={slide.href}
              className={`absolute inset-0 block outline-none transition-all duration-700 ease-out ${isActive ? "z-10 opacity-100" : "z-0 opacity-0"}`}
              aria-label={`${slide.title} - ${slide.ctaLabel}`}
              tabIndex={isActive ? 0 : -1}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-100" : "scale-[1.04]"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/25 to-transparent" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-950 shadow-sm sm:text-xs">
                  {slide.eyebrow}
                </span>
                <span className="rounded-full bg-white/90 px-3 py-2 text-[11px] font-medium text-emerald-950 shadow-sm sm:text-xs">
                  {isHovered ? "Preview" : "Live"}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="max-w-md rounded-3xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">{slide.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{slide.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/90">{slide.description}</p>
                  <span className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-emerald-950 transition duration-200 group-hover:bg-emerald-50">
                    {slide.ctaLabel}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-end p-4 sm:p-5">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
            {slides.map((slide, index) => (
              <button
                key={`${slide.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"}`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
