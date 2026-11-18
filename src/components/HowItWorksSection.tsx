import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Snap or Import",
    description:
      "Open Camera Capture in class or pick existing lecture photos from your phone gallery.",
    image: "/assets/716de.png",
  },
  {
    step: "02",
    title: "Crop & Clean",
    description:
      "Trim classroom clutter and rotate angled board shots so notes stay crisp and readable.",
    image: "/assets/f4d6a.png",
  },
  {
    step: "03",
    title: "Tag Subject",
    description:
      "Assign a course folder and lecture title so every photo is filed in the right place.",
    image: "/assets/71697.png",
  },
  {
    step: "04",
    title: "Search & Review",
    description:
      "Find any slide by keyword with OCR text indexing and review it before exams.",
    image: "/assets/338cc.png",
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
              <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-[136px] w-full object-cover sm:h-[180px]"
                />
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
