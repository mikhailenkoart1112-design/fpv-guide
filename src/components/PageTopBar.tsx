"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function PageTopBar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="mb-10 flex items-center justify-between">
      <Link
        href="/"
        className="rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/10 px-5 py-3 text-[#00FF9D] backdrop-blur-xl transition hover:bg-[#00FF9D]/20"
      >
        ← FPV GUIDE
      </Link>

      <button
        onClick={toggleLanguage}
        className="rounded-full border border-[#00FF9D]/30 bg-black/50 px-5 py-3 font-bold text-[#00FF9D] backdrop-blur-xl transition hover:bg-[#00FF9D]/10"
      >
        {language === "en" ? "UA" : "EN"}
      </button>
    </div>
  );
}