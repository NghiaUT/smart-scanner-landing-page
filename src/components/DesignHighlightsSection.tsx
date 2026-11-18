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
      className="w-full bg-[#f5f8ff] px-4 py-10 md:px-10 lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3 py-1.5 text-[12px] font-semibold leading-[16px] text-[#1e40af]">
            DESIGN HIGHLIGHTS
          </span>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            Built with clarity, speed, and study ergonomics in mind
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-[#dce6f7] bg-white p-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-[#eff6ff] px-2.5 py-1 text-[11px] font-bold leading-[16px] text-[#1d4ed8]">
                {item.tag}
              </span>
              <h3 className="text-[20px] font-bold leading-[28px] text-[#0f172a]">
                {item.title}
              </h3>
              <p className="text-[14px] font-normal leading-[22px] text-[#475569]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
