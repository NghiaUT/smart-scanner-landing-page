import React from "react";

const PROBLEM_CARDS = [
  {
    title: "Mixed With Personal Photos",
    description:
      "Class notes sit next to everyday photos, turning revision into endless scrolling.",
    svg: "/assets/b9715.svg",
    imgClass: "h-[146px] w-[200px]",
  },
  {
    title: "Forgotten Subject & Date",
    description:
      "Weeks later, it is hard to recall which course or lecture a photo came from.",
    svg: "/assets/4268c.svg",
    imgClass: "h-[133px] w-[200px]",
  },
  {
    title: "Unsearchable Image Text",
    description:
      "You remember a concept on a slide, but cannot search inside plain image files.",
    svg: "/assets/1e92e.svg",
    imgClass: "h-[157px] w-[146px]",
  },
  {
    title: "Glare & Cluttered Shots",
    description:
      "Angled classroom photos and glare make quick exam review slow on mobile.",
    svg: "/assets/b9c36.svg",
    imgClass: "h-[151px] w-[185px]",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="w-full bg-[#f5f8ff] px-4 py-10 md:px-10 lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
          <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3 py-1.5 text-[12px] font-semibold leading-[16px] text-[#1e40af]">
            THE PROBLEM
          </span>
          <h2 className="text-[28px] font-bold leading-[36px] text-[#0f172a] lg:text-[36px] lg:leading-[44px]">
            Why lecture photos get lost in your gallery
          </h2>
          <p className="text-[15px] font-normal leading-[22px] text-[#475569] lg:text-[16px] lg:leading-[24px]">
            Students photograph boards and slides every week, but default photo
            galleries are not built for studying.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROBLEM_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#dce6f7] bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]"
            >
              <div
                className="flex h-[150px] lg:h-[176px] w-full items-center justify-center overflow-hidden rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(144.08deg, rgb(240, 245, 255) 0%, rgb(227, 237, 255) 100%)",
                }}
              >
                <img
                  alt={card.title}
                  src={card.svg}
                  className={`object-contain ${card.imgClass}`}
                />
              </div>
              <h3 className="text-[18px] font-bold leading-[26px] text-[#0f172a]">
                {card.title}
              </h3>
              <p className="text-[14px] font-normal leading-[22px] text-[#475569]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
