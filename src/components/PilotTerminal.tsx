"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const responses: Record<string, string> = {
  "check drone": "DRONE CHECK: motors online, receiver linked, video signal stable.",
  "scan battery": "BATTERY SCAN: voltage nominal. Do not fly below safe level.",
  "flight tips": "TIP: smooth sticks win. Fly slow first, speed comes later.",
  "random trick": "TRICK: try a slow split-s over open space.",
  "system status": "SYSTEM STATUS: FPV GUIDE OS running. Signal encrypted.",
};

export default function PilotTerminal({ open, onClose }: Props) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "PILOT TERMINAL ONLINE",
    "Type: check drone / scan battery / flight tips / random trick / system status",
  ]);

  if (!open) return null;

  function runCommand() {
    const key = command.trim().toLowerCase();
    if (!key) return;

    setHistory((prev) => [
      ...prev,
      `> ${command}`,
      responses[key] || "UNKNOWN COMMAND. Try: system status",
    ]);

    setCommand("");
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 p-5 text-[#00FF9D] backdrop-blur-xl">
      <button
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full border border-[#00FF9D]/40 p-3 text-[#00FF9D]"
      >
        <X size={20} />
      </button>

      <div className="mx-auto mt-16 max-w-4xl rounded-[28px] border border-[#00FF9D]/30 bg-[#00140c]/40 p-6 shadow-[0_0_80px_rgba(0,255,157,0.18)]">
        <p className="mb-6 text-sm uppercase tracking-[0.5em]">
          PILOT TERMINAL
        </p>

        <div className="min-h-[320px] space-y-3 font-mono text-sm">
          {history.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="mt-6 flex gap-3 border-t border-[#00FF9D]/20 pt-4">
          <span className="font-mono">&gt;</span>
          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") runCommand();
            }}
            autoFocus
            className="w-full bg-transparent font-mono outline-none placeholder:text-[#00FF9D]/40"
            placeholder="type command..."
          />
        </div>
      </div>
    </div>
  );
}