"use client";

import React, { useEffect, useRef, useState } from "react";

const FEATURE_BLOCKS = [
  {
    eyebrow: "01 · Capture & Batch Import",
    title: "Snap single boards or batch-import from Gallery",
    description:
      "Keep Camera Capture focused on one crisp shot at a time in class, or select two or more gallery photos to batch-import with a shared Subject and auto-numbered titles.",
    bullets: [
      "• Single-shot Camera Capture with lighting cue & crop review",
      "• Ordered multi-photo Batch Gallery Import with preview & deselect",
      "• Shared title auto-numbered (1), (2), (3) into independent documents",
    ],
    reverse: false,
    screens: [
      {
        label: "S03 · Camera Capture",
        image: "/assets/screens/s03-camera-capture.png",
        caption: "Single-shot classroom framing",
      },
      {
        label: "S02B · Batch Import",
        image: "/assets/screens/s02b-batch-import.png",
        caption: "Shared subject & (1), (2), (3) titles",
      },
    ],
  },
  {
    eyebrow: "02 · Organize & Parallel OCR",
    title: "File by subject while OCR runs immediately in parallel",
    description:
      "Text recognition starts right after capture or import—never gating Save. Use suggested titles, sort subjects by name or creation date, and manage everything via ⋮ menus.",
    bullets: [
      "• Non-blocking OCR with Processing, Completed, Failed & Retry states",
      "• Subject sorting (A–Z, Newest/Oldest) & ⋮ Edit/Delete confirmation",
      "• Compact document items, Clear/Suggested titles & floating + buttons",
    ],
    reverse: true,
    screens: [
      {
        label: "S05 · Save Document",
        image: "/assets/screens/s05-save-document.png",
        caption: "Save anytime while OCR reads text",
      },
      {
        label: "S06 · Subjects",
        image: "/assets/screens/s06-subjects.png",
        caption: "Name/Date sort, ⋮ menu & + Subject FAB",
      },
    ],
  },
  {
    eyebrow: "03 · Search & Precision Filters",
    title: "Search titles and OCR text with Subject & Date filters",
    description:
      "Search directly across Document Titles and recognized photo text, narrow results with searchable multi-subject filter chips or From/To date ranges, and review compact matches.",
    bullets: [
      "• Simultaneous Document Title & OCR text search with highlights",
      "• Multi-Subject filter chips & From/To Date Range selector",
      "• Scoped Search in Subject & compact Document List Items",
    ],
    reverse: false,
    screens: [
      {
        label: "S08 · Global Search",
        image: "/assets/screens/s08-global-search.png",
        caption: "Unified search & Subject/Date filters",
      },
      {
        label: "S07 · Subject Documents",
        image: "/assets/screens/s07-subject-documents.png",
        caption: "Scoped search & compact document list",
      },
    ],
  },
];

export function SolutionSection() {
  const [visibleIndices, setVisibleIndices] = useState<Record<number, boolean>>(
    {}
  );
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
            Three focused workflows from classroom photo to searchable note
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
                  className="relative flex w-full flex-1 items-start justify-center gap-3 overflow-hidden rounded-2xl border border-[#bfdbfe] p-3.5 sm:gap-5 sm:p-5 lg:gap-6 lg:p-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(140.6deg, rgb(239, 246, 255) 0%, rgb(224, 234, 255) 100%)",
                  }}
                >
                  {block.screens.map((scr) => (
                    <div
                      key={scr.label}
                      className="flex w-[47%] max-w-[152px] shrink-0 flex-col items-center gap-2 sm:w-[194px] sm:max-w-none lg:w-[212px]"
                    >
                      <div className="w-full rounded-[18px] bg-[#0e1014] p-1.5 shadow-[0px_14px_30px_rgba(15,23,42,0.18)] sm:rounded-[22px] sm:p-2">
                        <div className="overflow-hidden rounded-[13px] bg-white sm:rounded-[16px]">
                          <img
                            alt={`${scr.label} — ${scr.caption}`}
                            src={scr.image}
                            width={430}
                            height={820}
                            loading="lazy"
                            className="block aspect-[430/820] h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] font-bold leading-[16px] text-[#0f172a] sm:text-[12px]">
                          {scr.label}
                        </p>
                        <p className="text-[10px] leading-[14px] text-[#475569] sm:text-[11px]">
                          {scr.caption}
                        </p>
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
