"use client";

import { useLanguage } from "@/components/LanguageProvider";
import BinaryBackground from "@/components/BinaryBackground";
import BinaryDrone from "@/components/BinaryDrone";
import { useState } from "react";
import PilotTerminal from "@/components/PilotTerminal";
import FooterRating from "@/components/FooterRating";

import Link from "next/link";

const text = {
  en: {
    system: "Digital FPV System",
    title: "FPV GUIDE",
    subtitle: "Your journey into FPV starts here.",
    start: "Start Learning",
    assistant: "FPV Assistant",
    repair: "Repair Center",
    lang: "UA",
  },
  ua: {
    system: "Цифрова FPV система",
    title: "FPV GUIDE",
    subtitle: "Твій шлях у світ FPV починається тут.",
    start: "Почати навчання",
    assistant: "FPV помічник",
    repair: "Центр ремонту",
    lang: "EN",
  },
};

export default function Home() {
  const { language} = useLanguage();
  const t = text[language];
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <BinaryBackground />
      <BinaryDrone />
      
      <PilotTerminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
        
      


      <section className="relative z-20 flex min-h-screen items-center justify-center px-6 pt-72">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
  <button
    onClick={() => setTerminalOpen(true)}
    className="secret-letter hover:text-white"
  >
    {language === "en" ? "D" : "Ц"}
  </button>

  {language === "en"
    ? "IGITAL FPV SYSTEM"
    : "ИФРОВА FPV СИСТЕМА"}
</p>

          <h1 className="glitch-title text-6xl font-black tracking-tight md:text-8xl">
  {t.title}
</h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-[#A0A0A0]">
            {t.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
  <Link
    href="/wiki"
    className="rounded-full border border-[#00FF9D]/50 bg-[#00FF9D]/10 px-8 py-4 font-bold text-[#00FF9D] shadow-[0_0_35px_rgba(0,255,157,0.18)] backdrop-blur-xl transition hover:bg-[#00FF9D]/20 hover:shadow-[0_0_55px_rgba(0,255,157,0.35)]"
  >
    {t.start}
  </Link>

  <Link
    href="/assistant"
    className="rounded-full border border-[#00FF9D]/50 bg-[#00FF9D]/10 px-8 py-4 font-bold text-[#00FF9D] shadow-[0_0_35px_rgba(0,255,157,0.18)] backdrop-blur-xl transition hover:bg-[#00FF9D]/20 hover:shadow-[0_0_55px_rgba(0,255,157,0.35)]"
  >
    {t.assistant}
  </Link>

  <Link
    href="/repair"
    className="rounded-full border border-white/25 bg-white/5 px-8 py-4 font-bold text-white shadow-[0_0_35px_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:bg-white/10"
  >
    {t.repair}
  </Link>
</div>

        </div>
      </section>
      <FooterRating />
    </main>
  );
}