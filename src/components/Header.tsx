"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Assistant", href: "/assistant" },
  { label: "Builder", href: "/builder" },
  { label: "Repair", href: "/repair" },
  { label: "Wiki", href: "/wiki" },
  { label: "Simulator", href: "/simulators" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#00FF9D]/20 bg-black/40 px-5 py-3 backdrop-blur-xl">
        <Link href="/" className="font-black tracking-[0.3em] text-[#00FF9D]">
          FPV GUIDE
        </Link>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#00FF9D]">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-[#00FF9D]/30 p-3 text-[#00FF9D] md:hidden"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[90] bg-black/90 p-5 backdrop-blur-xl md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 rounded-full border border-[#00FF9D]/30 p-3 text-[#00FF9D]"
          >
            <X size={22} />
          </button>

          <div className="mt-24 flex flex-col gap-6 text-3xl font-black text-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-[#00FF9D]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}