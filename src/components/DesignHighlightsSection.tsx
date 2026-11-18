import React from "react";

const HIGHLIGHTS = [
  {
    title: "Token-Driven Design System",
    description:
      "Consistent color, spacing, radius, and typography tokens shared across every mobile screen.",
    tag: "DESIGN TOKENS",
  },
  {
    title: "Accessible Contrast & Type",
    description:
      "High-contrast slate text on clean white surfaces with clear visual hierarchy for quick scanning.",
    tag: "WCAG AA",
  },
  {
    title: "On-Device OCR Workflow",
    description:
      "Recognized text sits directly below each lecture photo so you can search, read, and copy without switching apps.",
    tag: "OCR READY",
  },
  {
    title: "Responsive Mobile & Web",
    description:
      "Crafted for 390px mobile screens and 1440px desktop viewports with unified component patterns.",
    tag: "RESPONSIVE",
  },
];

export function DesignHighlightsSection() {
  return (
    <section
      id="design"
      className="w-full bg-gradient-to-b from-white via-[#f5f8ff] via-20% to-[#eff6ff] px-4 py-14 md:px-10 lg:px-[120px] lg:py-[96px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-[#1d4ed8] uppercase">
            <span className="h-[2px] w-4 bg-[#1d4ed8]" />
            <span>Design Highlights</span>
          </div>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            Built with clarity, speed, and study ergonomics in mind
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:gap-5 md:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2.5 rounded-2xl border border-[#dce6f7] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#bfdbfe] hover:shadow-[0px_18px_36px_0px_rgba(29,78,216,0.12)] sm:gap-3 sm:p-6"
            >
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#1d4ed8] uppercase">
                {item.tag}
              </span>
              <h3 className="text-[17px] font-bold leading-[24px] text-[#0f172a] sm:text-[20px] sm:leading-[28px]">
                {item.title}
              </h3>
              <p className="text-[13px] font-normal leading-[20px] text-[#475569] sm:text-[14px] sm:leading-[22px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
