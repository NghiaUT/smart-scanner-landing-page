import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Capture or Multi-Select",
    description:
      "Snap a single board in Camera Capture or multi-select existing lecture photos from Gallery with tap-to-deselect.",
    image: "/assets/screens/s02-gallery.png",
    alt: "S02 Gallery ordered multi-select screen with 3 selected lecture photos",
  },
  {
    step: "02",
    title: "Review & Parallel OCR",
    description:
      "Crop or rotate single photos while OCR begins reading text immediately in the background right after capture or import.",
    image: "/assets/screens/s04-review.png",
    alt: "S04 Review screen with Crop, Rotate, and Change photo controls",
  },
  {
    step: "03",
    title: "Name, Tag & Save",
    description:
      "Use a suggested title or shared batch name, pick or create a Subject, and save right away without waiting for OCR.",
    image: "/assets/screens/s05-save-document.png",
    alt: "S05 Save Document screen showing parallel Reading text from photo status",
  },
  {
    step: "04",
    title: "Filter, Search & Copy",
    description:
      "Browse the date-grouped Photo Grid, filter by Subject or Date Range, and copy recognized lecture text in one tap.",
    image: "/assets/screens/s01-home-library.png",
    alt: "S01 Home Library date-grouped photo grid with inline Search and Date filter",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-gradient-to-b from-white via-[#f5f8ff] via-15% to-white px-4 py-14 md:px-10 lg:px-[120px] lg:py-[96px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-[#1d4ed8] uppercase">
            <span className="h-[2px] w-4 bg-[#1d4ed8]" />
            <span>How It Works</span>
          </div>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            From classroom board to exam-ready notes in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-3 rounded-2xl border border-[#dce6f7] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] sm:gap-4 sm:p-5"
            >
              <span className="text-[12px] font-bold tracking-[0.08em] text-[#1d4ed8] uppercase">
                Step {item.step}
              </span>
              <div
                className="flex h-[210px] items-start justify-center overflow-hidden rounded-xl border border-[#dbeafe] px-4 pt-3 sm:h-[236px]"
                style={{
                  backgroundImage:
                    "linear-gradient(155deg, rgb(239, 246, 255) 0%, rgb(224, 234, 255) 100%)",
                }}
              >
                <div className="w-[152px] rounded-t-[16px] bg-[#0e1014] p-1.5 pb-0 shadow-md sm:w-[168px]">
                  <div className="overflow-hidden rounded-t-[11px] bg-white">
                    <img
                      alt={item.alt}
                      src={item.image}
                      width={430}
                      height={820}
                      loading="lazy"
                      className="block h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[16px] font-bold leading-[22px] text-[#0f172a] sm:text-[18px] sm:leading-[26px]">
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
