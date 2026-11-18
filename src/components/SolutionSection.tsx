import React from "react";

const FEATURE_BLOCKS = [
  {
    eyebrow: "01 · CAPTURE",
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
    eyebrow: "02 · ORGANIZE",
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
    eyebrow: "03 · SEARCH",
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
  return (
    <section
      id="features"
      className="w-full bg-white px-4 py-10 md:px-10 lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:gap-12">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3 py-1.5 text-[12px] font-semibold leading-[16px] text-[#1e40af]">
            OUR SOLUTION
          </span>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#14171c] lg:text-[36px] lg:leading-[44px]">
            Three focused steps from classroom photo to searchable note
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {FEATURE_BLOCKS.map((block) => (
            <div
              key={block.eyebrow}
              className={`flex flex-col items-center gap-8 rounded-[20px] border border-[#e2e8f0] bg-[#fafbfd] p-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.04)] lg:gap-12 lg:p-8 ${
                block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Copy */}
              <div className="flex w-full flex-1 flex-col items-start gap-4">
                <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3 py-1.5 text-[12px] font-semibold leading-[16px] text-[#1e40af]">
                  {block.eyebrow}
                </span>
                <h3 className="text-[22px] font-bold leading-[30px] text-[#0f172a] lg:text-[24px] lg:leading-[32px]">
                  {block.title}
                </h3>
                <p className="text-[15px] font-normal leading-[22px] text-[#475569] lg:text-[16px] lg:leading-[24px]">
                  {block.description}
                </p>
                <ul className="flex flex-col gap-1 text-[14px] font-medium leading-[24px] text-[#475569]">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Screens */}
              <div
                className="relative flex w-full flex-1 items-center justify-center gap-4 overflow-hidden rounded-2xl border border-[#bfdbfe] p-4 lg:gap-5 lg:p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(140.6deg, rgb(239, 246, 255) 0%, rgb(224, 234, 255) 100%)",
                }}
              >
                {block.screens.map((scr) => (
                  <div
                    key={scr.label}
                    className="w-[148px] sm:w-[190px] lg:w-[210px] shrink-0 rounded-[18px] bg-[#0e1014] p-2 shadow-md"
                  >
                    <div className="flex h-[250px] sm:h-[320px] lg:h-[360px] w-full flex-col overflow-hidden rounded-[12px] bg-white">
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
          ))}
        </div>
      </div>
    </section>
  );
}
