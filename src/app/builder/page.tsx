"use client";

import { useMemo, useState } from "react";
import PageTopBar from "@/components/PageTopBar";
import { useLanguage } from "@/components/LanguageProvider";
import PageIntro from "@/components/PageIntro";

const text = {
  en: {
    system: "FPV SETUP CONFIGURATOR",
    title: "Drone Builder",
    subtitle: "Choose your flying style and get a full recommended FPV kit.",
    budget: "Budget",
    video: "Video System",
    style: "Flying Style",
    size: "Drone Size",
    result: "Recommended Full Kit",
    tip: "Beginner tip",
  },
  ua: {
    system: "FPV КОНСТРУКТОР СЕТАПУ",
    title: "Конструктор дрона",
    subtitle: "Обери стиль польоту та отримай повний рекомендований FPV комплект.",
    budget: "Бюджет",
    video: "Відеосистема",
    style: "Стиль польоту",
    size: "Розмір дрона",
    result: "Рекомендований повний комплект",
    tip: "Порада початківцю",
  },
};

const labels = {
  en: {
    drone: "Drone",
    radio: "Radio",
    goggles: "Goggles",
    batteries: "Batteries",
    charger: "Charger",
    frame: "Frame",
    motors: "Motors",
    stack: "Stack",
    videoSystem: "Video",
    props: "Props",
    tools: "Tools",
  },
  ua: {
    drone: "Дрон",
    radio: "Пульт",
    goggles: "Окуляри",
    batteries: "Акумулятори",
    charger: "Зарядка",
    frame: "Рама",
    motors: "Мотори",
    stack: "Стек",
    videoSystem: "Відео",
    props: "Пропелери",
    tools: "Інструменти",
  },
};

const options = {
  budget: ["$500", "$1000", "$1500+"],
  video: ["Analog", "Digital"],
  style: ["Freestyle", "Cinematic", "Racing"],
  size: ["TinyWhoop", "5 Inch"],
};

export default function BuilderPage() {
  const { language } = useLanguage();
  const t = text[language];
  const l = labels[language];

  const [budget, setBudget] = useState("$500");
  const [video, setVideo] = useState("Digital");
  const [style, setStyle] = useState("Freestyle");
  const [size, setSize] = useState("5 Inch");

  const setup = useMemo(() => {
  const isUa = language === "ua";

  if (budget === "$500") {
    return {
      drone: size === "TinyWhoop" ? "Mobula6 / Meteor65 Analog" : "Б/у analog 5 inch або бюджетний kit",
      radio: "RadioMaster Pocket ELRS",
      goggles: "EV800D / бюджетні analog goggles",
      batteries: size === "TinyWhoop" ? "4x 1S LiPo" : "2–3x 4S LiPo",
      charger: size === "TinyWhoop" ? "1S USB charger" : "Бюджетна balance charger",
      frame: size === "TinyWhoop" ? "TinyWhoop frame" : "Budget 5 inch frame",
      motors: size === "TinyWhoop" ? "0802 motors" : "Budget 2207 motors",
      stack: size === "TinyWhoop" ? "AIO FC" : "Budget F405 stack",
      videoSystem: "Analog VTX",
      props: size === "TinyWhoop" ? "Whoop props" : "5 inch props",
      tools: "Screwdriver, spare props, battery checker",
      tip: isUa
        ? "За $200 краще почати з analog або TinyWhoop. Digital у цей бюджет майже не влазить."
        : "For $200, start with analog or TinyWhoop. Digital usually does not fit this budget.",
    };
  }

  if (budget === "$500") {
    return {
      drone: size === "TinyWhoop" ? "Mobula8 / Meteor75 Pro" : "5 inch analog freestyle drone",
      radio: "RadioMaster Pocket ELRS",
      goggles: video === "Digital" ? "Used Walksnail / HDZero goggles" : "Skyzone Cobra X / EV800D",
      batteries: size === "TinyWhoop" ? "6x 1S/2S LiPo" : "4x 4S/6S LiPo",
      charger: "Smart balance charger",
      frame: size === "TinyWhoop" ? "Whoop frame" : "5 inch freestyle frame",
      motors: size === "TinyWhoop" ? "1002 motors" : "2207 motors",
      stack: "SpeedyBee F405 / AIO FC",
      videoSystem: video === "Digital" ? "Budget digital VTX" : "Analog 5.8GHz VTX",
      props: size === "TinyWhoop" ? "Whoop props" : "5 inch freestyle props",
      tools: "Soldering iron, hex drivers, smoke stopper",
      tip: isUa
        ? "$500 — хороший стартовий бюджет для analog freestyle або сильного TinyWhoop сетапу."
        : "$500 is a good starting budget for analog freestyle or a strong TinyWhoop setup.",
    };
  }

  if (budget === "$1000") {
    return {
      drone: style === "Cinematic" ? "Cinematic 3.5–5 inch build" : "Quality 5 inch freestyle drone",
      radio: "RadioMaster Boxer / Pocket ELRS",
      goggles: video === "Digital" ? "Walksnail / HDZero goggles" : "Skyzone Cobra X",
      batteries: "6x quality LiPo batteries",
      charger: "Good smart balance charger",
      frame: style === "Cinematic" ? "Cinematic frame" : "Strong 5 inch freestyle frame",
      motors: style === "Racing" ? "High KV racing motors" : "Quality 2207 / 2306 motors",
      stack: "F722 / quality F405 stack",
      videoSystem: video === "Digital" ? "Walksnail / DJI / HDZero" : "Analog VTX",
      props: style === "Racing" ? "Racing props" : "Freestyle props",
      tools: "Soldering station, smoke stopper, battery checker, spare props",
      tip: isUa
        ? "$1000 — оптимальний бюджет для нормального digital або дуже хорошого analog сетапу."
        : "$1000 is a sweet spot for a good digital setup or a very strong analog setup.",
    };
  }

  return {
    drone: style === "Cinematic" ? "Premium cinematic FPV build" : "Premium 5 inch freestyle FPV drone",
    radio: "RadioMaster Boxer / TX16S ELRS",
    goggles: video === "Digital" ? "DJI Goggles / Walksnail Avatar / HDZero" : "Premium Skyzone analog goggles",
    batteries: "8–10x premium LiPo batteries",
    charger: "Dual-channel smart balance charger",
    frame: style === "Cinematic" ? "Premium cinematic frame" : "Premium carbon freestyle frame",
    motors: style === "Racing" ? "Premium racing motors" : "Premium 2207 / 2306 motors",
    stack: "Premium F722 / H7 flight stack",
    videoSystem: video === "Digital" ? "High-end digital video system" : "High-end analog VTX",
    props: "Multiple sets of props",
    tools: "Full repair kit, soldering station, smoke stopper, spare antennas",
    tip: isUa
      ? "$1500+ — це вже преміальний сетап з хорошими окулярами, пультом, акумами та запасними деталями."
      : "$1500+ is a premium setup with strong goggles, radio, batteries and spare parts.",
  };
}, [budget, language, size, style, video]);

  const groups = [
    { label: t.budget, value: budget, set: setBudget, items: options.budget },
    { label: t.video, value: video, set: setVideo, items: options.video },
    { label: t.style, value: style, set: setStyle, items: options.style },
    { label: t.size, value: size, set: setSize, items: options.size },
  ];

  const setupRows = [
    [l.drone, setup.drone],
    [l.radio, setup.radio],
    [l.goggles, setup.goggles],
    [l.batteries, setup.batteries],
    [l.charger, setup.charger],
    [l.frame, setup.frame],
    [l.motors, setup.motors],
    [l.stack, setup.stack],
    [l.videoSystem, setup.videoSystem],
    [l.props, setup.props],
    [l.tools, setup.tools],
  ];

  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 text-white">
        <PageIntro type="builder" />
      <div className="mx-auto max-w-6xl">
        <PageTopBar />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
          {t.system}
        </p>

        <h1 className="text-5xl font-black md:text-7xl">{t.title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">{t.subtitle}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {groups.map((group) => (
              <div
                key={group.label}
                className="rounded-[28px] border border-[#00FF9D]/20 bg-[#00FF9D]/5 p-5"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#00FF9D]">
                  {group.label}
                </p>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => group.set(item)}
                      className={`rounded-full border px-5 py-3 font-bold transition ${
                        group.value === item
                          ? "border-[#00FF9D] bg-[#00FF9D] text-black"
                          : "border-white/10 bg-black/40 text-white/60 hover:border-[#00FF9D]/40 hover:text-[#00FF9D]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-[#00FF9D]/30 bg-black/50 p-6 shadow-[0_0_80px_rgba(0,255,157,0.12)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-[#00FF9D]">
              {t.result}
            </p>

            <div className="mt-6 space-y-4">
              {setupRows.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#00FF9D]/70">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#00FF9D]/25 bg-[#00FF9D]/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#00FF9D]">
                {t.tip}
              </p>
              <p className="mt-3 text-white/70">{setup.tip}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}