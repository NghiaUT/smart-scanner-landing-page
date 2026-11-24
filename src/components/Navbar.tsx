import React from "react";
import { FIGMA_PROTOTYPE_URL } from "@/lib/links";

export function BrandLogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
      <div className="relative shrink-0 size-7 sm:size-8">
        <img
          alt="Smart Study Scanner logo"
          className="block size-full"
          src="/assets/28af5.svg"
          width={32}
          height={32}
        />
      </div>
      <span
        className={`font-bold text-[#1d4ed8] whitespace-nowrap ${
          compact
            ? "text-[16px] leading-[22px] sm:text-[17px] sm:leading-[24px]"
            : "text-[16px] leading-[22px] sm:text-[20px] sm:leading-[28px]"
        }`}
      >
        Smart Study Scanner
      </span>
    </a>
  );
}

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Screens", href: "#screens" },
  { label: "Design", href: "#design" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-10 lg:px-[120px] lg:py-4">
        <BrandLogoMark />

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-8 text-[14px] font-medium leading-[22px] text-[#475569]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-[#1d4ed8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={FIGMA_PROTOTYPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 lg:h-11 items-center justify-center rounded-lg bg-[#1d4ed8] px-3 text-[13px] sm:px-4 sm:text-[14px] font-bold leading-[20px] text-white whitespace-nowrap transition-colors hover:bg-[#1e40af]"
        >
          Try Prototype
        </a>
      </div>
    </header>
  );
}
