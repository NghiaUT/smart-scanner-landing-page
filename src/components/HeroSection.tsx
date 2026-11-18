import React from "react";

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/design/aD9g8VpG8jGVa3bfIyTlsV/bakotudu-smart-study-scanner?node-id=219-6926&p=f&t=ztCPtjqB5t6X7NQl-0";

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
            Capture or import lecture slides and whiteboard photos, organize them
            by subject, and find them again with searchable text.
          </p>

          {/* Core Flow Strip */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2">
              <img alt="" src="/assets/450d9.svg" className="size-5 shrink-0" width={20} height={20} />
              <span className="text-[14px] font-semibold leading-[20px] text-[#14171c]">
                Capture
              </span>
            </div>
            <img alt="" src="/assets/18d6b.svg" className="size-4 shrink-0" width={16} height={16} />
            <div className="flex items-center gap-2">
              <img alt="" src="/assets/43a96.svg" className="size-5 shrink-0" width={20} height={20} />
              <span className="text-[14px] font-semibold leading-[20px] text-[#14171c]">
                Organize
              </span>
            </div>
            <img alt="" src="/assets/18d6b.svg" className="size-4 shrink-0" width={16} height={16} />
            <div className="flex items-center gap-2">
              <img alt="" src="/assets/08ffd.svg" className="size-5 shrink-0" width={20} height={20} />
              <span className="text-[14px] font-semibold leading-[20px] text-[#14171c]">
                Search
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
          className="relative flex w-full flex-1 items-center justify-center gap-4 overflow-hidden rounded-3xl border border-[#bfdbfe] px-4 py-6 shadow-[0px_12px_32px_0px_rgba(29,78,216,0.08)] lg:gap-6 lg:px-9 lg:py-8"
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

          {/* Phone 1: S01 Home Library */}
          <div className="relative z-10 w-[162px] sm:w-[220px] lg:w-[266px] shrink-0 rounded-[18px] bg-[#0e1014] p-2 shadow-lg">
            <div className="flex h-[282px] sm:h-[395px] lg:h-[476px] w-full flex-col overflow-hidden rounded-[14px] bg-white">
              {/* Status bar */}
              <div className="flex h-[18px] items-center justify-between bg-[#0e1014] px-3 text-[7px] font-semibold text-white">
                <span>09:41</span>
                <div className="h-[11px] w-[52px] rounded-full border border-white/60 bg-[#0e1014]" />
                <span className="text-[#cbd5e1]">5G</span>
              </div>
              {/* TopBar */}
              <div className="flex items-center justify-between px-2.5 py-1.5">
                <div>
                  <p className="text-[12px] lg:text-[14px] font-bold text-[#14171c]">Library</p>
                  <p className="text-[7px] text-[#5c636e]">3 saved notes</p>
                </div>
              </div>
              {/* Search Entry */}
              <div className="px-2.5 pb-1.5">
                <div className="flex items-center gap-1.5 rounded-md border border-[#cbd5e1] bg-[#f8fafc] px-2 py-1">
                  <img alt="" src="/assets/4dbe9.svg" className="size-3" />
                  <span className="text-[8px] text-[#737b87]">Search notes, OCR text...</span>
                </div>
              </div>
              {/* Recent */}
              <div className="px-2.5 py-1">
                <p className="text-[8px] font-semibold text-[#5c636e]">Recent</p>
              </div>
              {/* 2-col Document Grid */}
              <div className="grid flex-1 grid-cols-2 gap-2 overflow-hidden px-2.5">
                <div className="flex flex-col overflow-hidden rounded-md border border-[#e2e8f0] bg-white">
                  <img
                    alt="TTL NAND Gate Notes"
                    src="/assets/716de.png"
                    className="h-[58px] lg:h-[82px] w-full object-cover"
                  />
                  <div className="p-1.5">
                    <p className="truncate text-[7px] lg:text-[8px] font-bold text-[#14171c]">
                      TTL NAND Gate Notes
                    </p>
                    <p className="truncate text-[6px] text-[#5c636e]">EE101 · 11 Nov</p>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md border border-[#e2e8f0] bg-white">
                  <img
                    alt="Alice, Bob & Mallory"
                    src="/assets/f4d6a.png"
                    className="h-[58px] lg:h-[82px] w-full object-cover"
                  />
                  <div className="p-1.5">
                    <p className="truncate text-[7px] lg:text-[8px] font-bold text-[#14171c]">
                      Alice, Bob &amp; Mallory
                    </p>
                    <p className="truncate text-[6px] text-[#5c636e]">CS302 · 10 Nov</p>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md border border-[#e2e8f0] bg-white">
                  <img
                    alt="Plasmid Vector Notes"
                    src="/assets/71697.png"
                    className="h-[58px] lg:h-[82px] w-full object-cover"
                  />
                  <div className="p-1.5">
                    <p className="truncate text-[7px] lg:text-[8px] font-bold text-[#14171c]">
                      Plasmid Vector Notes
                    </p>
                    <p className="truncate text-[6px] text-[#5c636e]">BIO204 · 08 Nov</p>
                  </div>
                </div>
              </div>
              {/* Bottom Nav */}
              <div className="flex items-center justify-around border-t border-[#e2e8f0] bg-white py-2 text-[7px] font-medium text-[#5c636e]">
                <span className="font-bold text-[#1d4ed8]">Library</span>
                <span>Subjects</span>
                <span>Search</span>
              </div>
            </div>
          </div>

          {/* Phone 2: S09 Document Preview */}
          <div className="relative z-10 w-[162px] sm:w-[220px] lg:w-[266px] shrink-0 rounded-[18px] bg-[#0e1014] p-2 shadow-lg">
            <div className="flex h-[282px] sm:h-[395px] lg:h-[476px] w-full flex-col overflow-hidden rounded-[14px] bg-white">
              {/* Status bar */}
              <div className="flex h-[18px] items-center justify-between bg-[#0e1014] px-3 text-[7px] font-semibold text-white">
                <span>09:41</span>
                <div className="h-[11px] w-[52px] rounded-full border border-white/60 bg-[#0e1014]" />
                <span className="text-[#cbd5e1]">5G</span>
              </div>
              {/* TopBar */}
              <div className="flex items-center gap-1.5 border-b border-[#e2e8f0] px-2.5 py-2">
                <img alt="" src="/assets/b470f.svg" className="size-3" />
                <p className="truncate text-[9px] lg:text-[11px] font-bold text-[#14171c]">
                  TTL NAND Gate Notes
                </p>
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col gap-2 p-2.5">
                <img
                  alt="Whiteboard preview"
                  src="/assets/716de.png"
                  className="h-[110px] lg:h-[185px] w-full rounded-md object-cover"
                />
                <div className="grid grid-cols-2 gap-1.5">
                  <span className="flex h-6 items-center justify-center rounded border border-[#cbd5e1] bg-white text-[8px] font-semibold text-[#14171c]">
                    Zoom
                  </span>
                  <span className="flex h-6 items-center justify-center rounded border border-[#cbd5e1] bg-white text-[8px] font-semibold text-[#14171c]">
                    Edit details
                  </span>
                </div>
                <p className="text-[7px] text-[#737b87]">Saved 11 Nov 2026 · 1 photo</p>
                <div className="flex-1 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-2">
                  <p className="text-[7px] font-bold text-[#14171c]">Recognized Text (OCR)</p>
                  <p className="mt-1 text-[7px] leading-[10px] text-[#475569]">
                    TTL NAND Gate · Vcc = +5V · Multi-emitter input transistor Q1...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
