"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const responses: Record<string, string> = {
  help: "COMMANDS: check drone / scan battery / flight tips / random trick / system status / emergency / bind elrs / video fix / clear",

  "check drone":
    "DRONE CHECK: props removed, FC online, receiver linked, motors ready. Check props, battery, antennas and failsafe before flight.",

  "scan battery":
    "BATTERY SCAN: check cell voltage, balance connector and damage. Do not fly puffed or damaged LiPo batteries.",

  "flight tips":
    "TIP: fly low and slow first. Smooth sticks are more important than speed. Practice turns, throttle control and emergency disarm.",

  "random trick":
    "TRICK: try a slow split-s. Gain altitude, half roll inverted, then pull through smoothly.",

  "system status":
    "SYSTEM STATUS: FPV GUIDE OS ONLINE. ELRS LINK SIMULATED. VTX CHANNEL STABLE. PILOT MODE ACTIVE.",

  emergency:
    "EMERGENCY CHECKLIST: DISARM → locate drone → disconnect battery → check LiPo damage → inspect props and motors → do not re-arm until safe.",

  "bind elrs":
    "ELRS BIND: use the same bind phrase on radio and receiver. Check ELRS version, reboot both devices, then test receiver movement in Betaflight.",

  "video fix":
    "VIDEO FIX: check antenna, VTX power, goggles channel, camera cable and VTX table. Never power VTX long without antenna.",

  clear: "CLEAR",
};

export default function PilotTerminal({ open, onClose }: Props) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "PILOT TERMINAL ONLINE",
    "Type help to show commands.",
  ]);

  if (!open) return null;

  function runCommand() {
    const key = command.trim().toLowerCase();
    if (!key) return;

    const response = responses[key] || "UNKNOWN COMMAND. Type help.";

    if (response === "CLEAR") {
      setHistory(["PILOT TERMINAL ONLINE", "Type help to show commands."]);
      setCommand("");
      return;
    }

    setHistory((prev) => [...prev, `> ${command}`, response]);
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