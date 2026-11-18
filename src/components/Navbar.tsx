import React from "react";

export function BrandLogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3 shrink-0">
      <div className="relative shrink-0 size-8">
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
          compact ? "text-[17px] leading-[24px]" : "text-[20px] leading-[28px]"
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

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/design/aD9g8VpG8jGVa3bfIyTlsV/bakotudu-smart-study-scanner?node-id=219-6926&p=f&t=ztCPtjqB5t6X7NQl-0";

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
          className="inline-flex h-9 lg:h-11 items-center justify-center rounded-lg bg-[#1d4ed8] px-4 text-[14px] font-bold leading-[20px] text-white whitespace-nowrap transition-colors hover:bg-[#1e40af]"
        >
          Try Prototype
        </a>
      </div>
    </header>
  );
}
