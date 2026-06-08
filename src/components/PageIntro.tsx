"use client";

import { motion } from "framer-motion";

type Props = {
  type: "assistant" | "builder" | "repair" | "wiki" | "simulators";
};

const data = {
  assistant: {
    title: "AI LINK ONLINE",
    text: "Initializing FPV Assistant...",
    icon: "AI",
  },
  builder: {
    title: "BUILD SYSTEM READY",
    text: "Scanning setup configuration...",
    icon: "⚙",
  },
  repair: {
    title: "DIAGNOSTIC MODE",
    text: "Checking drone systems...",
    icon: "✚",
  },
  wiki: {
    title: "KNOWLEDGE BASE",
    text: "Loading FPV database...",
    icon: "01",
  },
  simulators: {
    title: "SIMULATION HUB",
    text: "Preparing virtual flight...",
    icon: "▣",
  },
};

export default function PageIntro({ type }: Props) {
  const item = data[type];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.25, duration: 0.55 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050505]"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, filter: "blur(12px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.55 }}
        className="text-center text-[#00FF9D]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#00FF9D]/40 bg-[#00FF9D]/10 text-3xl font-black shadow-[0_0_60px_rgba(0,255,157,0.35)]"
        >
          {item.icon}
        </motion.div>

        <p className="text-sm font-bold uppercase tracking-[0.5em]">
          {item.title}
        </p>

        <p className="mt-4 text-white/50">{item.text}</p>
      </motion.div>
    </motion.div>
  );
}