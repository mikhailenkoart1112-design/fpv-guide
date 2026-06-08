"use client";

import { useState } from "react";
import PageTopBar from "@/components/PageTopBar";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    system: "FPV SIMULATOR HUB",
    title: "FPV Simulators",
    subtitle: "Click a simulator to see description, minimum requirements and best use.",
    requirements: "Minimum requirements",
    bestFor: "Best for",
  },
  ua: {
    system: "FPV СИМУЛЯТОРИ",
    title: "FPV Симулятори",
    subtitle: "Натисни на симулятор, щоб побачити опис, мінімальні вимоги та для чого він підходить.",
    requirements: "Мінімальні вимоги",
    bestFor: "Для чого підходить",
  },
};

const simulators = {
  en: [
    {
      name: "FPV SkyDive",
      description: "Free and lightweight FPV simulator. Great for complete beginners and weak laptops.",
      requirements: "CPU: Intel i3 / Ryzen 3, RAM: 4 GB, GPU: integrated or low-end dedicated GPU.",
      bestFor: "First flights, basic stick control, cheap training.",
    },
    {
      name: "Liftoff",
      description: "Popular FPV simulator with freestyle maps, realistic feel and many drone presets.",
      requirements: "CPU: Intel i5 / Ryzen 5, RAM: 8 GB, GPU: GTX 960 / similar or better.",
      bestFor: "Freestyle, outdoor practice, learning real FPV control.",
    },
    {
      name: "VelociDrone",
      description: "Very good simulator for racing, gates, tracks and precise stick control.",
      requirements: "CPU: Intel i5 / Ryzen 5, RAM: 8 GB, GPU: GTX 1050 / similar or better.",
      bestFor: "Racing, precision, fast reactions.",
    },
  ],
  ua: [
    {
      name: "FPV SkyDive",
      description: "Безкоштовний і легкий FPV симулятор. Добре підходить для новачків і слабких ноутбуків.",
      requirements: "CPU: Intel i3 / Ryzen 3, RAM: 4 GB, GPU: вбудована або слабка дискретна відеокарта.",
      bestFor: "Перші польоти, базове керування стіками, дешеве тренування.",
    },
    {
      name: "Liftoff",
      description: "Популярний FPV симулятор з freestyle картами, реалістичним відчуттям і багатьма дронами.",
      requirements: "CPU: Intel i5 / Ryzen 5, RAM: 8 GB, GPU: GTX 960 / схожа або краща.",
      bestFor: "Freestyle, тренування на вулиці, навчання реальному FPV керуванню.",
    },
    {
      name: "VelociDrone",
      description: "Дуже хороший симулятор для racing, воріт, трас і точного керування стіками.",
      requirements: "CPU: Intel i5 / Ryzen 5, RAM: 8 GB, GPU: GTX 1050 / схожа або краща.",
      bestFor: "Гонки, точність, швидка реакція.",
    },
  ],
};

export default function SimulatorsPage() {
  const { language } = useLanguage();
  const t = text[language];
  const list = simulators[language];
  const [active, setActive] = useState(list[0]);

  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <PageTopBar />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
          {t.system}
        </p>

        <h1 className="text-5xl font-black md:text-7xl">{t.title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">{t.subtitle}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-4">
            {list.map((sim) => (
              <button
                key={sim.name}
                onClick={() => setActive(sim)}
                className={`rounded-[28px] border p-6 text-left transition ${
                  active.name === sim.name
                    ? "border-[#00FF9D] bg-[#00FF9D]/15 text-white"
                    : "border-[#00FF9D]/20 bg-[#00FF9D]/5 text-white/70 hover:bg-[#00FF9D]/10"
                }`}
              >
                <h2 className="text-2xl font-black text-[#00FF9D]">
                  {sim.name}
                </h2>
                <p className="mt-3 text-sm text-white/50">{sim.description}</p>
              </button>
            ))}
          </div>

          <div className="rounded-[32px] border border-[#00FF9D]/30 bg-black/50 p-6 shadow-[0_0_80px_rgba(0,255,157,0.12)] backdrop-blur-xl">
            <h2 className="text-4xl font-black text-[#00FF9D]">
              {active.name}
            </h2>

            <p className="mt-5 text-lg text-white/70">{active.description}</p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00FF9D]">
                  {t.requirements}
                </p>
                <p className="mt-3 text-white/70">{active.requirements}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00FF9D]">
                  {t.bestFor}
                </p>
                <p className="mt-3 text-white/70">{active.bestFor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}