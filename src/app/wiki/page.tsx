"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PageTopBar from "@/components/PageTopBar";
import PageIntro from "@/components/PageIntro";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    system: "FPV KNOWLEDGE BASE",
    title: "FPV Wiki",
    subtitle: "Quick explanations of the most important FPV terms.",
    close: "Close post",
    read: "Open post",
    post: "FPV WIKI POST",
  },
  ua: {
    system: "FPV БАЗА ЗНАНЬ",
    title: "FPV Wiki",
    subtitle: "Короткі пояснення найважливіших FPV термінів.",
    close: "Вийти з поста",
    read: "Відкрити пост",
    post: "FPV WIKI ПОСТ",
  },
};

const articles = {
  en: [
    {
      title: "What is ELRS?",
      short: "ELRS is a radio control link system with long range and low latency.",
      full: "ELRS, or ExpressLRS, is one of the most popular radio link systems in FPV. It connects your radio controller to the drone receiver. ELRS is known for long range, low latency, strong signal stability and affordable hardware. For beginners, it is usually one of the best choices because it works well on small drones, freestyle drones and long range builds.",
    },
    {
      title: "What is VTX?",
      short: "VTX sends video from your drone camera to your goggles.",
      full: "VTX means Video Transmitter. It takes the image from the FPV camera and sends it to your goggles. In analog FPV, VTX works on 5.8GHz channels. In digital FPV, the video system can be DJI, Walksnail or HDZero. Never power a VTX for a long time without an antenna because it can overheat or burn out.",
    },
    {
      title: "What is ESC?",
      short: "ESC controls the speed of each motor.",
      full: "ESC means Electronic Speed Controller. It controls how fast each motor spins. The flight controller sends commands to the ESC, and the ESC changes motor speed. Most 5 inch drones use a 4-in-1 ESC. If your drone flips on takeoff, one of the first things to check is motor direction and ESC configuration.",
    },
    {
      title: "What is Flight Controller?",
      short: "The flight controller is the brain of the drone.",
      full: "The Flight Controller, or FC, is the main brain of an FPV drone. It reads data from the gyro, receives radio input, runs Betaflight and controls the motors through the ESC. Popular beginner options include F405 and F722 boards. F405 is usually enough for most builds, while F722 gives more processing power.",
    },
    {
      title: "What is Betaflight?",
      short: "Betaflight is firmware for FPV flight controllers.",
      full: "Betaflight is the most popular firmware for FPV drones. It lets you configure receiver settings, modes, motor direction, OSD, failsafe, rates, filters and PID tuning. Beginners should first learn the Setup, Receiver, Modes, Motors and OSD tabs before changing advanced PID or filter settings.",
    },
    {
      title: "What is Failsafe?",
      short: "Failsafe is a safety reaction when radio signal is lost.",
      full: "Failsafe is what the drone does when it loses radio signal. A correct failsafe setup should stop the motors or perform a safe action. Before flying, always test failsafe without props. Many crashes happen because pilots forget to check failsafe before the first flight.",
    },
  ],
  ua: [
    {
      title: "Що таке ELRS?",
      short: "ELRS — це система радіозвʼязку з великою дальністю і малою затримкою.",
      full: "ELRS, або ExpressLRS — одна з найпопулярніших систем звʼязку у FPV. Вона зʼєднує твою апаратуру з приймачем на дроні. ELRS має хорошу дальність, малу затримку, стабільний сигнал і доступну ціну. Для початківця це один з найкращих варіантів, бо підходить і для маленьких дронів, і для freestyle, і для long range.",
    },
    {
      title: "Що таке VTX?",
      short: "VTX передає відео з камери дрона в FPV окуляри.",
      full: "VTX — це відеопередавач. Він бере картинку з FPV камери та передає її в окуляри. В analog FPV VTX працює на 5.8GHz каналах. У digital FPV це може бути DJI, Walksnail або HDZero. Ніколи не вмикай VTX надовго без антени, бо він може перегрітися або згоріти.",
    },
    {
      title: "Що таке ESC?",
      short: "ESC керує швидкістю кожного мотора.",
      full: "ESC — це електронний регулятор швидкості. Він керує тим, як швидко крутиться кожен мотор. Польотний контролер дає команди ESC, а ESC змінює швидкість моторів. На більшості 5-дюймових FPV дронів використовується 4-in-1 ESC. Якщо дрон перевертається при зльоті, спочатку перевір напрямок моторів і налаштування ESC.",
    },
    {
      title: "Що таке польотний контролер?",
      short: "Польотний контролер — це мозок дрона.",
      full: "Польотний контролер, або FC — це головний мозок FPV дрона. Він читає дані з гіроскопа, приймає сигнал з апаратури, працює з Betaflight і керує моторами через ESC. Популярні варіанти для початківця — F405 і F722. F405 зазвичай достатньо, а F722 має більше потужності.",
    },
    {
      title: "Що таке Betaflight?",
      short: "Betaflight — це прошивка для FPV польотних контролерів.",
      full: "Betaflight — найпопулярніша прошивка для FPV дронів. Через неї налаштовують приймач, режими, напрямок моторів, OSD, failsafe, rates, фільтри та PID. Початківцю краще спочатку розібрати Setup, Receiver, Modes, Motors і OSD, а вже потім змінювати PID та фільтри.",
    },
    {
      title: "Що таке Failsafe?",
      short: "Failsafe — це реакція дрона при втраті сигналу.",
      full: "Failsafe — це те, що дрон робить при втраті сигналу з апаратури. Правильно налаштований failsafe повинен зупинити мотори або виконати безпечну дію. Перед польотом завжди перевіряй failsafe без пропелерів. Багато крашів стається через те, що пілот не перевірив failsafe перед першим польотом.",
    },
  ],
};

export default function WikiPage() {
  const { language } = useLanguage();
  const t = text[language];
  const list = articles[language];
  const [active, setActive] = useState<(typeof list)[number] | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 text-white">
      <PageIntro type="wiki" />

      <div className="mx-auto max-w-6xl">
        <PageTopBar />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
          {t.system}
        </p>

        <h1 className="text-5xl font-black md:text-7xl">{t.title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">{t.subtitle}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {list.map((article) => (
            <button
              key={article.title}
              onClick={() => setActive(article)}
              className="rounded-[28px] border border-[#00FF9D]/25 bg-[#00FF9D]/5 p-6 text-left backdrop-blur-xl transition hover:bg-[#00FF9D]/10"
            >
              <h2 className="text-2xl font-black text-[#00FF9D]">
                {article.title}
              </h2>

              <p className="mt-4 text-white/65">{article.short}</p>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-[#00FF9D]/70">
                {t.read}
              </p>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[150] overflow-y-auto bg-black/95 px-6 py-8 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mx-auto max-w-4xl"
            >
              <button
                onClick={() => setActive(null)}
                className="mb-8 flex items-center gap-2 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/10 px-5 py-3 font-bold text-[#00FF9D]"
              >
                <X size={18} />
                {t.close}
              </button>

              <article className="rounded-[34px] border border-[#00FF9D]/30 bg-[#00FF9D]/5 p-7 shadow-[0_0_90px_rgba(0,255,157,0.16)]">
                <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
                  {t.post}
                </p>

                <h2 className="text-4xl font-black md:text-6xl">
                  {active.title}
                </h2>

                <p className="mt-8 text-lg leading-8 text-white/70">
                  {active.full}
                </p>
              </article>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}