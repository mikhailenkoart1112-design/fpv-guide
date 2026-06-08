"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const links = {
  en: [
    { label: "Home", href: "/" },
    { label: "Assistant", href: "/assistant" },
    { label: "Builder", href: "/builder" },
    { label: "Repair", href: "/repair" },
    { label: "Wiki", href: "/wiki" },
    { label: "Simulator", href: "/simulators" },
  ],
  ua: [
    { label: "Головна", href: "/" },
    { label: "Помічник", href: "/assistant" },
    { label: "Конструктор", href: "/builder" },
    { label: "Ремонт", href: "/repair" },
    { label: "Wiki", href: "/wiki" },
    { label: "Симулятори", href: "/simulators" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const nav = links[language];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 py-4">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#00FF9D]/20 bg-black/40 px-5 py-3 backdrop-blur-xl"
      >
        <Link href="/" className="font-black tracking-[0.3em] text-[#00FF9D]">
          FPV GUIDE
        </Link>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#00FF9D]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="rounded-full border border-[#00FF9D]/30 px-4 py-2 text-sm font-bold text-[#00FF9D] transition hover:bg-[#00FF9D]/10"
          >
            {language === "en" ? "UA" : "EN"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-[#00FF9D]/30 p-3 text-[#00FF9D] md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[90] bg-black/95 p-5 backdrop-blur-xl md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full border border-[#00FF9D]/30 p-3 text-[#00FF9D]"
            >
              <X size={22} />
            </button>

            <div className="mt-24 flex flex-col gap-6 text-3xl font-black text-white">
              {nav.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="transition hover:text-[#00FF9D]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}