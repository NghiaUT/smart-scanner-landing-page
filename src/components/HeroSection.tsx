import React from "react";
import { FIGMA_PROTOTYPE_URL } from "@/lib/links";

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f8ff] via-white via-65% to-white px-4 py-8 md:px-10 lg:px-[120px] lg:py-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 lg:flex-row lg:gap-12">
        {/* Hero Copy */}
        <div className="flex w-full flex-col items-start gap-5 lg:w-[520px] lg:shrink-0 lg:gap-6">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-[#1d4ed8] uppercase">
            <span className="h-[2px] w-4 bg-[#1d4ed8]" />
            <span>Mobile OCR Scanner</span>
          </div>

          <h1 className="text-[36px] font-bold leading-[42px] text-[#0f172a] lg:text-[52px] lg:leading-[60px]">
            Lecture photos.
            <br />
            Within reach.
          </h1>

          <p className="text-[16px] font-normal leading-[24px] text-[#475569] lg:text-[18px] lg:leading-[28px]">
            Capture classroom boards or batch-import gallery photos, organize
            notes by subject while OCR runs in the background, and find any page
            instantly by title, recognized text, or date.
          </p>

          {/* Core Flow Strip */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2">
              <img
                alt=""
                src="/assets/450d9.svg"
                className="size-5 shrink-0"
                width={20}
                height={20}
              />
              <span className="text-[14px] font-semibold leading-[20px] text-[#14171c]">
                Capture &amp; Batch Import
              </span>
            </div>
            <img
              alt=""
              src="/assets/18d6b.svg"
              className="size-4 shrink-0"
              width={16}
              height={16}
            />
            <div className="flex items-center gap-2">
              <img
                alt=""
                src="/assets/43a96.svg"
                className="size-5 shrink-0"
                width={20}
                height={20}
              />
              <span className="text-[14px] font-semibold leading-[20px] text-[#14171c]">
                Parallel OCR
              </span>
            </div>
            <img
              alt=""
              src="/assets/18d6b.svg"
              className="size-4 shrink-0"
              width={16}
              height={16}
            />
            <div className="flex items-center gap-2">
              <img
                alt=""
                src="/assets/08ffd.svg"
                className="size-5 shrink-0"
                width={20}
                height={20}
              />
              <span className="text-[14px] font-semibold leading-[20px] text-[#14171c]">
                Search &amp; Filter
              </span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-[236px] items-center justify-center rounded-lg bg-[#1d4ed8] px-4 text-[14px] font-bold leading-[20px] text-white transition-colors hover:bg-[#1e40af]"
            >
              Try Interactive Prototype
            </a>
            <a
              href="#screens"
              className="inline-flex h-12 w-full sm:w-[200px] items-center justify-center rounded-lg border border-[#cbd5e1] bg-white px-4 text-[14px] font-bold leading-[20px] text-[#14171c] transition-colors hover:bg-[#f8fafc]"
            >
              Explore App Screens
            </a>
          </div>
        </div>

        {/* Hero Visual Stage */}
        <div
          className="relative flex w-full flex-1 items-center justify-center gap-3.5 overflow-hidden rounded-3xl border border-[#bfdbfe] px-4 py-6 shadow-[0px_12px_32px_0px_rgba(29,78,216,0.08)] sm:gap-6 lg:px-8 lg:py-8"
          style={{
            backgroundImage:
              "linear-gradient(138.52deg, rgb(238, 244, 255) 0%, rgb(226, 236, 255) 55%, rgb(219, 234, 254) 100%)",
          }}
        >
          <div className="pointer-events-none absolute -left-[71px] -top-[61px] size-[320px]">
            <img alt="" className="block size-full" src="/assets/8c852.svg" />
          </div>
          <div className="pointer-events-none absolute bottom-[-80px] right-[-40px] size-[280px]">
            <img alt="" className="block size-full" src="/assets/f48ca.svg" />
          </div>

          {/* Phone 1: S01 Home Library (Updated Date-Grouped Photo Grid + Inline Date Filter + FAB) */}
          <div className="relative z-10 flex w-[47%] max-w-[160px] shrink-0 flex-col items-center gap-2 sm:w-[216px] sm:max-w-none lg:w-[248px]">
            <div className="w-full rounded-[20px] bg-[#0e1014] p-1.5 shadow-[0px_18px_38px_rgba(15,23,42,0.22)] sm:rounded-[26px] sm:p-2">
              <div className="overflow-hidden rounded-[15px] bg-white sm:rounded-[20px]">
                <img
                  alt="S01 Home Library screen showing date-grouped photo grid, unified search and date filter bar, OCR status badges, and floating + Document button"
                  src="/assets/screens/s01-home-library.png"
                  width={430}
                  height={820}
                  fetchPriority="high"
                  className="block aspect-[430/820] h-auto w-full object-cover"
                />
              </div>
            </div>
            <span className="rounded-full border border-[#bfdbfe] bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#1e3a8a] backdrop-blur-xs sm:px-2.5 sm:text-[11px]">
              S01 · Photo Grid Library
            </span>
          </div>

          {/* Phone 2: S09 Document Preview (Zoom, Edit details & Recognized OCR Text) */}
          <div className="relative z-10 flex w-[47%] max-w-[160px] shrink-0 flex-col items-center gap-2 sm:w-[216px] sm:max-w-none lg:w-[248px]">
            <div className="w-full rounded-[20px] bg-[#0e1014] p-1.5 shadow-[0px_18px_38px_rgba(15,23,42,0.22)] sm:rounded-[26px] sm:p-2">
              <div className="overflow-hidden rounded-[15px] bg-white sm:rounded-[20px]">
                <img
                  alt="S09 Document Preview screen showing lecture whiteboard photo, Zoom and Edit details actions, and recognized OCR text with Copy Text"
                  src="/assets/screens/s09-document-preview.png"
                  width={430}
                  height={820}
                  className="block aspect-[430/820] h-auto w-full object-cover"
                />
              </div>
            </div>
            <span className="rounded-full border border-[#bfdbfe] bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#1e3a8a] backdrop-blur-xs sm:px-2.5 sm:text-[11px]">
              S09 · OCR Document Preview
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
