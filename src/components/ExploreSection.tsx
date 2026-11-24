import React from "react";
import { BEHANCE_CASE_STUDY_URL, FIGMA_PROTOTYPE_URL } from "@/lib/links";

export function ExploreSection() {
  return (
    <section
      id="explore"
      className="relative w-full overflow-hidden px-4 py-12 md:px-10 lg:px-[120px] lg:py-[80px]"
      style={{
        backgroundImage:
          "linear-gradient(160.215deg, rgb(30, 58, 138) 0%, rgb(29, 78, 216) 50%, rgb(37, 99, 235) 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-[120px] -top-[140px] size-[440px] opacity-80">
        <img
          alt=""
          className="block size-full"
          src="/assets/6e155.svg"
          loading="lazy"
        />
      </div>
      <div className="pointer-events-none absolute -bottom-[140px] right-[-100px] size-[380px] opacity-80">
        <img
          alt=""
          className="block size-full"
          src="/assets/6feb6.svg"
          loading="lazy"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[28px] font-bold leading-[36px] text-white lg:text-[36px] lg:leading-[44px]">
            Explore Smart Study Scanner
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#eff6ff]">
            Try the synced mobile prototype in Figma or explore the full UI/UX
            case study and source code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-[#dbeafe]/50 bg-white p-4 shadow-[0px_12px_32px_0px_rgba(11,19,43,0.18)] sm:gap-4 sm:p-6">
            <div className="relative shrink-0 size-6">
              <img
                alt=""
                className="block size-full"
                src="/assets/3bd3d.svg"
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <h3 className="text-[18px] font-bold leading-[24px] text-[#14171c] sm:text-[20px] sm:leading-[28px]">
              Interactive Prototype
            </h3>
            <p className="flex-1 text-[13px] font-normal leading-[20px] text-[#5c636e] sm:text-[14px] sm:leading-[22px]">
              Open the updated official mobile flows, batch import, and design
              system directly in Figma.
            </p>
            <a
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#1d4ed8] px-4 text-[14px] font-bold leading-[20px] text-white transition-colors hover:bg-[#1e40af] sm:h-11"
            >
              Open Figma Prototype
            </a>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#dbeafe]/50 bg-white p-4 shadow-[0px_12px_32px_0px_rgba(11,19,43,0.18)] sm:gap-4 sm:p-6">
            <div className="relative shrink-0 size-6">
              <img
                alt=""
                className="block size-full"
                src="/assets/5be3f.svg"
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <h3 className="text-[18px] font-bold leading-[24px] text-[#14171c] sm:text-[20px] sm:leading-[28px]">
              UI/UX Case Study
            </h3>
            <p className="flex-1 text-[13px] font-normal leading-[20px] text-[#5c636e] sm:text-[14px] sm:leading-[22px]">
              In-depth design rationale, research evidence, and visual craft.
            </p>
            <a
              href={BEHANCE_CASE_STUDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#1d4ed8] border border-[#cbd5e1] px-4 text-[14px] font-bold leading-[20px] text-white transition-colors hover:bg-[#1e40af] sm:h-11"
            >
              Open Behance Case Study
            </a>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#dbeafe]/50 bg-white p-4 shadow-[0px_12px_32px_0px_rgba(11,19,43,0.18)] sm:gap-4 sm:p-6">
            <div className="relative shrink-0 size-6">
              <img
                alt=""
                className="block size-full"
                src="/assets/069ac.svg"
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <h3 className="text-[18px] font-bold leading-[24px] text-[#14171c] sm:text-[20px] sm:leading-[28px]">
              Source Code
            </h3>
            <p className="flex-1 text-[13px] font-normal leading-[20px] text-[#5c636e] sm:text-[14px] sm:leading-[22px]">
              Backend API, documentation, and landing page implementation.
            </p>
            <span className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-[#cbd5e1] bg-white px-4 text-[14px] font-bold leading-[20px] text-[#14171c] sm:h-11">
              Pending Link
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
