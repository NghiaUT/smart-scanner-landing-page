"use client";

import React, { useEffect, useRef } from "react";

const PROBLEM_CARDS = [
  {
    title: "Mixed With Personal Photos",
    description:
      "Class notes sit next to everyday photos, turning revision into endless scrolling.",
    svg: "/assets/b9715.svg",
    imgClass: "h-[146px] w-[200px]",
  },
  {
    title: "Forgotten Subject & Date",
    description:
      "Weeks later, it is hard to recall which course or lecture a photo came from.",
    svg: "/assets/4268c.svg",
    imgClass: "h-[133px] w-[200px]",
  },
  {
    title: "Unsearchable Image Text",
    description:
      "You remember a concept on a slide, but cannot search inside plain image files.",
    svg: "/assets/1e92e.svg",
    imgClass: "h-[157px] w-[146px]",
  },
  {
    title: "Glare & Cluttered Shots",
    description:
      "Angled classroom photos and glare make quick exam review slow on mobile.",
    svg: "/assets/b9c36.svg",
    imgClass: "h-[151px] w-[185px]",
  },
];

export function ProblemSection() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const supportsViewTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)");
    const noReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

    if (supportsViewTimeline || !noReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const r = entry.intersectionRatio;
          const eased = r * r * (3 - 2 * r);
          const scale = 1.26 - eased * 0.26;
          const opacity = 0.25 + eased * 0.75;
          const blur = (1 - eased) * 6;
          const isExitingTop = entry.boundingClientRect.top < 0;
          const dir = isExitingTop ? 1 : -1;
          const tx = dir * (1 - eased) * 24;
          const ty = -dir * (1 - eased) * 28;
          el.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
          el.style.opacity = opacity.toFixed(3);
          el.style.filter = `blur(${blur.toFixed(2)}px)`;
        }
      },
      {
        threshold: Array.from({ length: 41 }, (_, i) => i / 40),
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problem"
      className="w-full overflow-x-clip bg-gradient-to-b from-white via-[#f5f8ff] via-15% to-white px-4 py-14 md:px-10 lg:px-[120px] lg:py-[96px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-[#1d4ed8] uppercase">
            <span className="h-[2px] w-4 bg-[#1d4ed8]" />
            <span>The Problem</span>
          </div>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            Why lecture photos get lost in your gallery
          </h2>
          <p className="text-[15px] font-normal leading-[22px] text-[#475569] lg:text-[16px] lg:leading-[24px]">
            Students photograph boards and slides every week, but default photo
            galleries are not built for studying.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {PROBLEM_CARDS.map((card, idx) => (
            <article
              key={card.title}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="problem-scroll-card flex flex-col gap-3 rounded-2xl border border-[#dce6f7] bg-white px-4 py-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] sm:gap-4 sm:px-5 sm:py-6"
            >
              <div
                className="flex h-[116px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[150px] lg:h-[176px]"
                style={{
                  backgroundImage:
                    "linear-gradient(144.08deg, rgb(240, 245, 255) 0%, rgb(227, 237, 255) 100%)",
                }}
              >
                <img
                  alt={card.title}
                  src={card.svg}
                  loading="lazy"
                  className={`scale-[0.78] object-contain sm:scale-100 ${card.imgClass}`}
                />
              </div>
              <h3 className="text-[16px] font-bold leading-[22px] text-[#0f172a] sm:text-[18px] sm:leading-[26px]">
                {card.title}
              </h3>
              <p className="text-[13px] font-normal leading-[20px] text-[#475569] sm:text-[14px] sm:leading-[22px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
