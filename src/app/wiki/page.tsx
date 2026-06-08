"use client";

import PageTopBar from "@/components/PageTopBar";
import { useLanguage } from "@/components/LanguageProvider";
import PageIntro from "@/components/PageIntro";

const text = {
  en: {
    system: "FPV KNOWLEDGE BASE",
    title: "FPV Wiki",
    subtitle: "Quick explanations of the most important FPV terms.",
  },
  ua: {
    system: "FPV БАЗА ЗНАНЬ",
    title: "FPV Wiki",
    subtitle: "Короткі пояснення найважливіших FPV термінів.",
  },
};

const articles = {
  en: [
    {
      title: "What is ELRS?",
      text: "ELRS is a radio control link system. It gives strong range, low latency and is one of the best choices for modern FPV.",
    },
    {
      title: "What is VTX?",
      text: "VTX means Video Transmitter. It sends video from your drone camera to your FPV goggles.",
    },
    {
      title: "What is ESC?",
      text: "ESC controls the motors. It receives commands from the flight controller and changes motor speed.",
    },
    {
      title: "What is Flight Controller?",
      text: "Flight Controller is the brain of the drone. It reads sensors and controls how the drone flies.",
    },
    {
      title: "What is Betaflight?",
      text: "Betaflight is firmware for FPV drones. It lets you configure receiver, modes, OSD, motors and flight behavior.",
    },
    {
      title: "What is Failsafe?",
      text: "Failsafe is a safety mode when the drone loses radio signal. It should stop the motors or perform a safe action.",
    },
  ],
  ua: [
    {
      title: "Що таке ELRS?",
      text: "ELRS — це система радіозвʼязку для керування дроном. Вона дає хорошу дальність, малу затримку та дуже популярна у FPV.",
    },
    {
      title: "Що таке VTX?",
      text: "VTX — це відеопередавач. Він передає картинку з камери дрона в FPV окуляри.",
    },
    {
      title: "Що таке ESC?",
      text: "ESC керує моторами. Він отримує команди від польотного контролера і змінює швидкість моторів.",
    },
    {
      title: "Що таке польотний контролер?",
      text: "Польотний контролер — це мозок дрона. Він читає сенсори та керує польотом.",
    },
    {
      title: "Що таке Betaflight?",
      text: "Betaflight — це прошивка для FPV дронів. Через неї налаштовують приймач, режими, OSD, мотори та поведінку дрона.",
    },
    {
      title: "Що таке Failsafe?",
      text: "Failsafe — це режим безпеки при втраті сигналу. Він повинен зупинити мотори або виконати безпечну дію.",
    },
  ],
};

export default function WikiPage() {
  const { language } = useLanguage();
  const t = text[language];
  const list = articles[language];

  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <PageTopBar />
        <PageIntro type="wiki" />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
          {t.system}
        </p>

        <h1 className="text-5xl font-black md:text-7xl">{t.title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">{t.subtitle}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {list.map((article) => (
            <article
              key={article.title}
              className="rounded-[28px] border border-[#00FF9D]/25 bg-[#00FF9D]/5 p-6 backdrop-blur-xl transition hover:bg-[#00FF9D]/10"
            >
              <h2 className="text-2xl font-black text-[#00FF9D]">
                {article.title}
              </h2>

              <p className="mt-4 text-white/65">{article.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}