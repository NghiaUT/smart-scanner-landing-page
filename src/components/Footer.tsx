import React from "react";
import { BrandLogoMark } from "./Navbar";

export function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center md:px-10 lg:px-[120px]">
        <BrandLogoMark />
        <p className="text-[14px] font-normal leading-[22px] text-[#5c636e]">
          © 2026 Smart Scanner · BaKoTuDu
        </p>
      </div>
    </footer>
  );
}
