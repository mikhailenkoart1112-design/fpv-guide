"use client";

import { useState } from "react";
import PageTopBar from "@/components/PageTopBar";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    system: "FPV REPAIR SYSTEM",
    title: "Repair Center",
    subtitle: "Choose a problem and get quick FPV troubleshooting steps.",
    symptoms: "Possible causes",
  },
  ua: {
    system: "FPV СИСТЕМА РЕМОНТУ",
    title: "Центр ремонту",
    subtitle: "Обери проблему та отримай швидкі кроки для діагностики FPV.",
    symptoms: "Можливі причини",
  },
};

const problems = {
  en: [
    {
      title: "Won't Arm",
      items: [
        "Check arm switch in your radio.",
        "Open Betaflight and check Arming Flags.",
        "Check receiver connection.",
        "Make sure throttle is fully down.",
        "Check if USB cable is connected.",
      ],
    },
    {
      title: "Lost Video",
      items: [
        "Check VTX power.",
        "Check antenna connection.",
        "Make sure goggles are on the same channel.",
        "Check camera cable.",
        "Try lower VTX power first.",
      ],
    },
    {
      title: "Drone Flips",
      items: [
        "Check motor direction.",
        "Check prop direction.",
        "Check FC orientation in Betaflight.",
        "Check ESC protocol.",
        "Remove props before testing.",
      ],
    },
    {
      title: "Failsafe",
      items: [
        "Check ELRS link quality.",
        "Check receiver antenna.",
        "Lower packet rate for more range.",
        "Check radio model settings.",
        "Test failsafe before flight.",
      ],
    },
  ],
  ua: [
    {
      title: "Не арміться",
      items: [
  "Перевір перемикач Arm на апаратурі.",
  "Відкрий Betaflight та перевір Arming Flags.",
  "Перевір підключення приймача.",
  "Переконайся, що газ повністю опущений.",
  "Перевір чи не підключений USB кабель.",
],
    },
    {
      title: "Пропало відео",
      items: [
  "Перевір живлення VTX.",
  "Перевір підключення антени.",
  "Переконайся, що окуляри на тому самому каналі.",
  "Перевір кабель камери.",
  "Спробуй іншу потужність VTX.",
],
    },
    {
      title: "Дрон перевертається",
      items: [
  "Перевір напрямок моторів.",
  "Перевір правильність встановлення пропелерів.",
  "Перевір орієнтацію FC у Betaflight.",
  "Перевір протокол ESC.",
  "Зніми пропелери перед тестуванням.",
],
    },
    {
      title: "Failsafe",
     items: [
  "Перевір якість ELRS сигналу.",
  "Перевір антену приймача.",
  "Зменш Packet Rate для більшої дальності.",
  "Перевір налаштування моделі в апаратурі.",
  "Обов'язково протестуй Failsafe перед польотом.",
],
    },
  ],
};

export default function RepairPage() {
  const { language } = useLanguage();
  const t = text[language];
  const list = problems[language];
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

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="grid gap-3">
            {list.map((problem) => (
              <button
                key={problem.title}
                onClick={() => setActive(problem)}
                className="rounded-[24px] border border-[#00FF9D]/25 bg-[#00FF9D]/5 p-5 text-left font-bold text-[#00FF9D] transition hover:bg-[#00FF9D]/10"
              >
                {problem.title}
              </button>
            ))}
          </div>

          <div className="rounded-[30px] border border-[#00FF9D]/30 bg-black/50 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-[#00FF9D]">
              {t.symptoms}
            </p>

            <h2 className="mt-4 text-3xl font-black">{active.title}</h2>

            <div className="mt-6 space-y-4">
              {active.items.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/70"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}