"use client";

import React, { useEffect, useRef, useState } from "react";

const SHOWCASE_SCREENS = [
  {
    code: "S01",
    title: "Home Library",
    subtitle: "Date photo grid, Date filter & + Document FAB",
    image: "/assets/screens/s01-home-library.png",
  },
  {
    code: "S03",
    title: "Camera Capture",
    subtitle: "Single-shot framing & lighting guide",
    image: "/assets/screens/s03-camera-capture.png",
  },
  {
    code: "S02B",
    title: "Batch Import",
    subtitle: "Shared subject & (1), (2), (3) titles",
    image: "/assets/screens/s02b-batch-import.png",
  },
  {
    code: "S05",
    title: "Save Document",
    subtitle: "Suggested title & parallel OCR status",
    image: "/assets/screens/s05-save-document.png",
  },
  {
    code: "S06",
    title: "Subjects",
    subtitle: "A–Z / Date sort, ⋮ menu & + Subject FAB",
    image: "/assets/screens/s06-subjects.png",
  },
  {
    code: "S07",
    title: "Subject Documents",
    subtitle: "Scoped search & compact document list",
    image: "/assets/screens/s07-subject-documents.png",
  },
  {
    code: "S08",
    title: "Global Search",
    subtitle: "Title + OCR search & Subject/Date filters",
    image: "/assets/screens/s08-global-search.png",
  },
  {
    code: "S09",
    title: "Document Preview",
    subtitle: "Zoom, Edit details & Copy OCR text",
    image: "/assets/screens/s09-document-preview.png",
  },
];

function ShowcaseCard({
  screen,
  deprioritize = false,
}: {
  screen: (typeof SHOWCASE_SCREENS)[number];
  deprioritize?: boolean;
}) {
  return (
    <div className="flex w-[204px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#fafbfd] p-3.5 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.04)] sm:w-[264px] sm:gap-4 sm:p-5">
      <div className="w-full max-w-[168px] rounded-[18px] bg-[#0e1014] p-1.5 shadow-[0px_12px_28px_rgba(15,23,42,0.16)] sm:max-w-[208px] sm:rounded-[22px] sm:p-2">
        <div className="overflow-hidden rounded-[13px] bg-white sm:rounded-[16px]">
          <img
            alt={`${screen.code} ${screen.title} — ${screen.subtitle}`}
            src={screen.image}
            width={430}
            height={820}
            loading="lazy"
            {...(deprioritize ? { fetchPriority: "low" as const } : {})}
            className="block aspect-[430/820] h-auto w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="rounded-full bg-[#eff6ff] px-2.5 py-0.5 text-[11px] font-bold tracking-[0.06em] text-[#1d4ed8]">
          {screen.code}
        </span>
        <h3 className="text-[16px] font-bold leading-[24px] text-[#0f172a]">
          {screen.title}
        </h3>
        <p className="text-[13px] font-normal leading-[19px] text-[#5c636e]">
          {screen.subtitle}
        </p>
      </div>
    </div>
  );
}

export function UiShowcaseSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    let lastTime = performance.now();
    const speedPxPerSec = 44;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isPaused && trackRef.current && firstGroupRef.current) {
        const loopWidth = firstGroupRef.current.offsetWidth;
        if (loopWidth > 0) {
          offsetRef.current =
            (offsetRef.current + speedPxPerSec * dt) % loopWidth;
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <section id="screens" className="w-full bg-white py-14 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-[#1d4ed8] uppercase">
            <span className="h-[2px] w-4 bg-[#1d4ed8]" />
            <span>UI Showcase</span>
          </div>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            Redesigned mobile screens built for fast study review
          </h2>
          <p className="text-[15px] font-normal leading-[22px] text-[#475569] lg:text-[16px] lg:leading-[24px]">
            Date-grouped photo grids, batch gallery import, non-blocking OCR,
            and unified multi-filter search across every screen.
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        className="relative mt-10 w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />

        <div
          ref={trackRef}
          style={{ display: "flex", flexWrap: "nowrap", width: "max-content" }}
          className="will-change-transform"
        >
          <div
            ref={firstGroupRef}
            style={{ display: "flex", flexWrap: "nowrap" }}
            className="shrink-0 gap-6 pr-6"
          >
            {SHOWCASE_SCREENS.map((scr) => (
              <ShowcaseCard key={`track-a-${scr.code}`} screen={scr} />
            ))}
          </div>
          <div
            aria-hidden="true"
            style={{ display: "flex", flexWrap: "nowrap" }}
            className="shrink-0 gap-6 pr-6"
          >
            {SHOWCASE_SCREENS.map((scr) => (
              <ShowcaseCard
                key={`track-b-${scr.code}`}
                screen={scr}
                deprioritize
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
