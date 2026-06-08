"use client";

import Link from "next/link";

export default function PageTopBar() {
  return (
    <div className="mb-10 flex items-center">
      <Link
        href="/"
        className="rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/10 px-5 py-3 text-[#00FF9D] backdrop-blur-xl transition hover:bg-[#00FF9D]/20"
      >
        ← FPV GUIDE
      </Link>
    </div>
  );
}