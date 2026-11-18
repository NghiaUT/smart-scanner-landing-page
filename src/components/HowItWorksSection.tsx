import React from "react";

const STEPS = [
  {
    step: "STEP 01",
    title: "Snap or Import",
    description:
      "Open Camera Capture in class or pick existing lecture photos from your phone gallery.",
    image: "/assets/716de.png",
  },
  {
    step: "STEP 02",
    title: "Crop & Clean",
    description:
      "Trim classroom clutter and rotate angled board shots so notes stay crisp and readable.",
    image: "/assets/f4d6a.png",
  },
  {
    step: "STEP 03",
    title: "Tag Subject",
    description:
      "Assign a course folder and lecture title so every photo is filed in the right place.",
    image: "/assets/71697.png",
  },
  {
    step: "STEP 04",
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
      className="w-full bg-[#f5f8ff] px-4 py-10 md:px-10 lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3 py-1.5 text-[12px] font-semibold leading-[16px] text-[#1e40af]">
            HOW IT WORKS
          </span>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            From classroom board to exam-ready notes in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-4 rounded-2xl border border-[#dce6f7] bg-white p-5 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-[#eff6ff] px-2.5 py-1 text-[11px] font-bold leading-[16px] text-[#1d4ed8]">
                {item.step}
              </span>
              <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-[180px] w-full object-cover"
                />
              </div>
              <h3 className="text-[18px] font-bold leading-[26px] text-[#0f172a]">
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
