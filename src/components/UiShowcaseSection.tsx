"use client";

import React, { useEffect, useRef, useState } from "react";

const SHOWCASE_SCREENS = [
  {
    code: "S01",
    title: "Home Library",
    subtitle: "Recent notes & quick search",
    image: "/assets/716de.png",
  },
  {
    code: "S03",
    title: "Camera Capture",
    subtitle: "Guided classroom framing",
    image: "/assets/f4d6a.png",
  },
  {
    code: "S06",
    title: "Subject Folders",
    subtitle: "Course-based organization",
    image: "/assets/71697.png",
  },
  {
    code: "S09",
    title: "Document Preview",
    subtitle: "Zoom & inline OCR text",
    image: "/assets/338cc.png",
  },
];

const CAROUSEL_SET = [...SHOWCASE_SCREENS, ...SHOWCASE_SCREENS];

function ShowcaseCard({
  screen,
}: {
  screen: (typeof SHOWCASE_SCREENS)[number];
}) {
  return (
    <div className="flex w-[196px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#fafbfd] p-3.5 shadow-[0px_6px_20px_0px_rgba(15,23,42,0.04)] sm:w-[270px] sm:gap-4 sm:p-5">
      <div className="w-full max-w-[164px] rounded-[16px] bg-[#0e1014] p-1.5 shadow-md sm:max-w-[210px] sm:rounded-[18px] sm:p-2">
        <div className="flex h-[240px] w-full flex-col overflow-hidden rounded-[11px] bg-white sm:h-[320px] sm:rounded-[12px]">
          <div className="flex h-4 items-center justify-between bg-[#0e1014] px-2.5 text-[6px] font-semibold text-white">
            <span>09:41</span>
            <span className="text-[#cbd5e1]">5G</span>
          </div>
          <div className="border-b border-[#e2e8f0] px-2.5 py-1.5">
            <p className="text-[9px] font-bold text-[#14171c]">
              {screen.code} · {screen.title}
            </p>
          </div>
          <div className="flex-1 p-2">
            <img
              alt={screen.title}
              src={screen.image}
              className="block h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-[16px] font-bold leading-[24px] text-[#0f172a]">
          {screen.title}
        </h3>
        <p className="text-[13px] font-normal leading-[20px] text-[#5c636e]">
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
    let rafId = 0;
    let lastTime = performance.now();
    const speedPxPerSec = 48;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isPaused && trackRef.current && firstGroupRef.current) {
        const loopWidth = firstGroupRef.current.offsetWidth;
        if (loopWidth > 0) {
          offsetRef.current = (offsetRef.current + speedPxPerSec * dt) % loopWidth;
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
            Clean mobile screens built for fast study review
          </h2>
          <p className="text-[15px] font-normal leading-[22px] text-[#475569] lg:text-[16px] lg:leading-[24px]">
            Every screen is designed around one-handed capture, clear hierarchy,
            and instant text lookup.
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
            {CAROUSEL_SET.map((scr, idx) => (
              <ShowcaseCard key={`track-a-${scr.code}-${idx}`} screen={scr} />
            ))}
          </div>
          <div
            aria-hidden="true"
            style={{ display: "flex", flexWrap: "nowrap" }}
            className="shrink-0 gap-6 pr-6"
          >
            {CAROUSEL_SET.map((scr, idx) => (
              <ShowcaseCard key={`track-b-${scr.code}-${idx}`} screen={scr} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
