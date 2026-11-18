import React from "react";

const SHOWCASE_SCREENS = [
  {
    code: "S01",
    title: "Home Library",
    subtitle: "Recent notes & quick search",
    image: "/assets/716de.png",
  },
  {
    code: "S03",
    title: "Camera Capture",
    subtitle: "Guided classroom framing",
    image: "/assets/f4d6a.png",
  },
  {
    code: "S06",
    title: "Subject Folders",
    subtitle: "Course-based organization",
    image: "/assets/71697.png",
  },
  {
    code: "S09",
    title: "Document Preview",
    subtitle: "Zoom & inline OCR text",
    image: "/assets/338cc.png",
  },
];

export function UiShowcaseSection() {
  return (
    <section
      id="screens"
      className="w-full bg-white px-4 py-10 md:px-10 lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3 py-1.5 text-[12px] font-semibold leading-[16px] text-[#1e40af]">
            UI SHOWCASE
          </span>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            Clean mobile screens built for fast study review
          </h2>
          <p className="text-[15px] font-normal leading-[22px] text-[#475569] lg:text-[16px] lg:leading-[24px]">
            Every screen is designed around one-handed capture, clear hierarchy,
            and instant text lookup.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWCASE_SCREENS.map((scr) => (
            <div
              key={scr.code}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-[#fafbfd] p-5"
            >
              <div className="w-full max-w-[210px] rounded-[18px] bg-[#0e1014] p-2 shadow-md">
                <div className="flex h-[320px] w-full flex-col overflow-hidden rounded-[12px] bg-white">
                  <div className="flex h-4 items-center justify-between bg-[#0e1014] px-2.5 text-[6px] font-semibold text-white">
                    <span>09:41</span>
                    <span className="text-[#cbd5e1]">5G</span>
                  </div>
                  <div className="border-b border-[#e2e8f0] px-2.5 py-1.5">
                    <p className="text-[9px] font-bold text-[#14171c]">
                      {scr.code} · {scr.title}
                    </p>
                  </div>
                  <div className="flex-1 p-2">
                    <img
                      alt={scr.title}
                      src={scr.image}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[16px] font-bold leading-[24px] text-[#0f172a]">
                  {scr.title}
                </h3>
                <p className="text-[13px] font-normal leading-[20px] text-[#5c636e]">
                  {scr.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
