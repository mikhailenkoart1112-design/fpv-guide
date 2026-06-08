"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    title: "Did you like this website?",
    yes: "YES",
    no: "NO",
    thanks: "Thanks pilot 🚁💚",
    msg1: "Come on 😏",
    msg2: "NO button switched frequencies.",
  },

  ua: {
    title: "Чи сподобався тобі цей сайт?",
    yes: "ТАК",
    no: "НІ",
    thanks: "Дякую, пілоте 🚁💚",
    msg1: "Ну давай 😏",
    msg2: "Кнопка НІ змінила частоту.",
  },
};

export default function FooterRating() {
  const { language } = useLanguage();
  const t = text[language];

  const [attempts, setAttempts] = useState(0);
  const [yes, setYes] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const hidden = attempts >= 20;

  function moveNoButton() {
    setAttempts((value) => value + 1);
    setPosition({
      x: Math.floor(Math.random() * 300 - 150),
      y: Math.floor(Math.random() * 120 - 60),
    });
  }

  return (
    <section className="relative z-20 mx-auto mt-32 max-w-5xl px-6 pb-20 text-center">
      <h2 className="mb-8 text-3xl font-black text-white md:text-5xl">
        {t.title}
      </h2>

      {yes ? (
        <p className="text-xl font-bold text-[#00FF9D]">{t.thanks}</p>
      ) : (
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setYes(true)}
            className="rounded-full bg-[#00FF9D] px-10 py-4 font-bold text-black"
          >
            {t.yes}
          </button>

          {!hidden && (
            <motion.button
              animate={position}
              transition={{ duration: 0.25 }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="rounded-full border border-white/25 bg-white/5 px-10 py-4 font-bold text-white backdrop-blur-xl"
            >
              {t.no}
            </motion.button>
          )}
        </div>
      )}

      {attempts >= 10 && attempts < 20 && (
        <p className="mt-6 text-[#00FF9D]">{t.msg1}</p>
      )}

      {attempts >= 20 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-[#00FF9D]"
        >
          {t.msg2}
        </motion.p>
      )}
    </section>
  );
}