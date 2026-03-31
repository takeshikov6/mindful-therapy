"use client";

import { useState, useEffect } from "react";

const PHASES = [
  { label: "inhale", duration: 4000 },
  { label: "hold", duration: 2000 },
  { label: "exhale", duration: 4000 },
  { label: "hold", duration: 2000 },
];

export default function BreathingExercise() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhaseIndex((prev) => (prev + 1) % PHASES.length);
    }, PHASES[phaseIndex].duration);
    return () => clearTimeout(timer);
  }, [phaseIndex]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center w-14 h-14">
        <div
          className="absolute inset-0 rounded-full animate-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(155,190,220,0.5), rgba(100,150,190,0.15))",
          }}
        />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300/70" />
      </div>
      <p className="text-[11px] tracking-[0.25em] uppercase text-slate-400 transition-opacity duration-700">
        {PHASES[phaseIndex].label}
      </p>
    </div>
  );
}
