"use client";

import React, { useEffect, useRef, useState } from "react";

const FEATURE_BLOCKS = [
  {
    eyebrow: "01 · Capture",
    title: "Capture in class or import from your gallery",
    description:
      "Snap whiteboards and slides directly with guided lighting cues, or bring in existing photos from your gallery without changing how you take notes.",
    bullets: [
      "• In-app camera with framing guide",
      "• Single or multi-photo gallery import",
      "• Crop and rotate during review",
    ],
    reverse: false,
    screens: [
      {
        label: "S03 · Camera Capture",
        image: "/assets/716de.png",
        caption: "Keep the page inside the guide",
      },
      {
        label: "S04 · Crop & Adjust",
        image: "/assets/f4d6a.png",
        caption: "Adjust edges and orientation",
      },
    ],
  },
  {
    eyebrow: "02 · Organize",
    title: "Group every note by subject and lecture",
    description:
      "Tag captured photos with a course name and custom note title right after saving so your study library stays structured all semester.",
    bullets: [
      "• Subject folders with note counts",
      "• Editable titles and lecture dates",
      "• Fast filter by course or recent saves",
    ],
    reverse: true,
    screens: [
      {
        label: "S06 · Subject Folders",
        image: "/assets/71697.png",
        caption: "EE101 · CS302 · BIO204",
      },
      {
        label: "S05 · Save Details",
        image: "/assets/a3e11.png",
        caption: "Assign subject and lecture title",
      },
    ],
  },
  {
    eyebrow: "03 · Search",
    title: "Find any slide by recognized text",
    description:
      "On-device OCR indexes keywords inside your whiteboard and slide photos so you can jump straight to the right page before exams.",
    bullets: [
      "• Instant keyword search across notes",
      "• Highlighted OCR text preview",
      "• Copy recognized text with one tap",
    ],
    reverse: false,
    screens: [
      {
        label: "S07 · Search Results",
        image: "/assets/338cc.png",
        caption: "Search inside lecture photos",
      },
      {
        label: "S09 · OCR Preview",
        image: "/assets/3555b.png",
        caption: "Read and copy extracted text",
      },
    ],
  },
];

export function SolutionSection() {
  const [visibleIndices, setVisibleIndices] = useState<Record<number, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) {
              setVisibleIndices((prev) => ({ ...prev, [idx]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="w-full overflow-x-clip bg-white px-4 py-14 md:px-10 lg:px-[120px] lg:py-[88px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:gap-12">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-[#1d4ed8] uppercase">
            <span className="h-[2px] w-4 bg-[#1d4ed8]" />
            <span>Our Solution</span>
          </div>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#14171c] lg:text-[36px] lg:leading-[44px]">
            Three focused steps from classroom photo to searchable note
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {FEATURE_BLOCKS.map((block, index) => {
            const isVisible = Boolean(visibleIndices[index]);
            const enterFromLeft = index % 2 === 0;
            const hiddenTransform = enterFromLeft
              ? "-translate-x-12 opacity-0"
              : "translate-x-12 opacity-0";

            return (
              <div
                key={block.eyebrow}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                className={`flex flex-col items-center gap-5 rounded-[20px] border border-[#e2e8f0] bg-[#fafbfd] p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.04)] transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 sm:gap-8 sm:p-6 lg:gap-12 lg:p-8 ${
                  block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } ${isVisible ? "translate-x-0 opacity-100" : hiddenTransform}`}
              >
                {/* Copy */}
                <div className="flex w-full flex-1 flex-col items-start gap-3 sm:gap-4">
                  <span className="text-[12px] font-bold tracking-[0.1em] text-[#1d4ed8] uppercase">
                    {block.eyebrow}
                  </span>
                  <h3 className="text-[19px] font-bold leading-[26px] text-[#0f172a] sm:text-[22px] sm:leading-[30px] lg:text-[24px] lg:leading-[32px]">
                    {block.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[21px] text-[#475569] sm:text-[15px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px]">
                    {block.description}
                  </p>
                  <ul className="flex flex-col gap-1 text-[13px] font-medium leading-[22px] text-[#475569] sm:text-[14px] sm:leading-[24px]">
                    {block.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Screens */}
                <div
                  className="relative flex w-full flex-1 items-center justify-center gap-3 overflow-hidden rounded-2xl border border-[#bfdbfe] p-3 sm:gap-4 sm:p-4 lg:gap-5 lg:p-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(140.6deg, rgb(239, 246, 255) 0%, rgb(224, 234, 255) 100%)",
                  }}
                >
                  {block.screens.map((scr) => (
                    <div
                      key={scr.label}
                      className="w-[132px] shrink-0 rounded-[16px] bg-[#0e1014] p-1.5 shadow-md sm:w-[190px] sm:rounded-[18px] sm:p-2 lg:w-[210px]"
                    >
                      <div className="flex h-[210px] w-full flex-col overflow-hidden rounded-[11px] bg-white sm:h-[320px] sm:rounded-[12px] lg:h-[360px]">
                        <div className="flex h-4 items-center justify-between bg-[#0e1014] px-2.5 text-[6px] font-semibold text-white">
                          <span>09:41</span>
                          <span className="text-[#cbd5e1]">OCR ON</span>
                        </div>
                        <div className="border-b border-[#e2e8f0] px-2.5 py-1.5">
                          <p className="truncate text-[9px] font-bold text-[#14171c]">
                            {scr.label}
                          </p>
                          <p className="truncate text-[6px] text-[#5c636e]">
                            {scr.caption}
                          </p>
                        </div>
                        <div className="flex-1 p-2">
                          <img
                            alt={scr.label}
                            src={scr.image}
                            className="h-full w-full rounded-md object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
