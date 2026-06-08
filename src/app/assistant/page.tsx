"use client";

import { useState } from "react";
import PageTopBar from "@/components/PageTopBar";
import { useLanguage } from "@/components/LanguageProvider";
import { fpvKnowledge } from "@/data/fpvKnowledge";
import PageIntro from "@/components/PageIntro";

const text = {
  en: {
    system: "AI FPV SYSTEM",
    title: "FPV Assistant",
    subtitle:
      "Ask questions about drones, goggles, ELRS, Betaflight, repairs and beginner FPV setups.",
    online: "FPV ASSISTANT ONLINE",
    example: "Example: Which drone should I buy?",
    placeholder: "Ask FPV question...",
    send: "Send",
    fallback:
      "I can help with drone choice, ELRS, Betaflight, goggles, batteries, motors, video problems, failsafe and simulators. Try asking about ELRS, battery, VTX or Betaflight.",
  },
  ua: {
    system: "AI FPV СИСТЕМА",
    title: "FPV помічник",
    subtitle:
      "Став питання про дрони, окуляри, ELRS, Betaflight, ремонт і сетапи для початківців.",
    online: "FPV ПОМІЧНИК ОНЛАЙН",
    example: "Приклад: який дрон краще купити?",
    placeholder: "Напиши FPV питання...",
    send: "Надіслати",
    fallback:
      "Я можу допомогти з вибором дрона, ELRS, Betaflight, окулярами, акумуляторами, моторами, відео, failsafe та симуляторами. Спробуй запитати про ELRS, акумулятор, VTX або Betaflight.",
  },
};

export default function AssistantPage() {
  const { language } = useLanguage();
  const t = text[language];

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function findAnswer(input: string) {
    const q = input.toLowerCase();

    const found = fpvKnowledge.find((item) =>
      item.keywords.some((keyword) => q.includes(keyword.toLowerCase()))
    );

    return found ? found.answer[language] : t.fallback;
  }

  function sendMessage() {
    if (!question.trim()) return;

    const answer = findAnswer(question);

    setMessages((prev) => [...prev, `> ${question}`, answer]);
    setQuestion("");
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 text-white">
        <PageIntro type="assistant" />
      <div className="mx-auto max-w-5xl">
        <PageTopBar />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#00FF9D]">
          {t.system}
        </p>

        <h1 className="text-5xl font-black md:text-7xl">{t.title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">{t.subtitle}</p>

        <div className="mt-10 rounded-[30px] border border-[#00FF9D]/30 bg-[#00FF9D]/5 p-5 backdrop-blur-xl">
          <div className="min-h-[260px] space-y-3 rounded-[24px] bg-black/40 p-5 font-mono text-sm text-[#00FF9D]">
            {[t.online, t.example, ...messages].map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder={t.placeholder}
              className="w-full rounded-full border border-white/10 bg-black/50 px-5 py-4 outline-none placeholder:text-white/30"
            />

            <button
              onClick={sendMessage}
              className="rounded-full bg-[#00FF9D] px-7 font-bold text-black"
            >
              {t.send}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}