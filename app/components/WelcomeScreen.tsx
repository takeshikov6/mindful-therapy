"use client";

import BreathingExercise from "./BreathingExercise";

interface WelcomeScreenProps {
  visible: boolean;
  onPromptClick?: (text: string) => void;
}

const PROMPTS = [
  {
    num: "01",
    label: "REFLECT",
    title: "Something's been weighing on me",
    sub: "a safe space to unpack",
  },
  {
    num: "02",
    label: "GROW",
    title: "I want to understand myself better",
    sub: "gentle self-discovery",
  },
  {
    num: "03",
    label: "BREATHE",
    title: "I just need someone to listen",
    sub: "no judgement, just presence",
  },
];

export default function WelcomeScreen({
  visible,
  onPromptClick,
}: WelcomeScreenProps) {
  if (!visible) return null;

  return (
    <div className="flex flex-col items-center justify-between flex-1 animate-fade-in min-h-0">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-10 px-6">
        {/* Quote */}
        <h2 className="font-display italic text-2xl md:text-3xl text-slate-200 text-center leading-relaxed tracking-wide max-w-lg">
          trust the process of showing up for yourself
        </h2>

        {/* Flower illustration */}
        <div className="relative flex flex-col items-center">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            className="animate-float"
          >
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse
                key={angle}
                cx="45"
                cy="45"
                rx="10"
                ry="24"
                fill="rgba(255,255,255,0.85)"
                transform={`rotate(${angle} 45 45)`}
              />
            ))}
            {/* Center */}
            <circle cx="45" cy="45" r="7" fill="#d4a24e" />
          </svg>
          {/* Stem */}
          <div className="w-px h-16 bg-slate-400/40" />
        </div>

        {/* Breathing */}
        <BreathingExercise />
      </div>

      {/* Conversation starters */}
      <div className="w-full border-t border-slate-500/30 px-6 py-5">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMPTS.map((p) => (
            <button
              key={p.num}
              onClick={() => onPromptClick?.(p.title)}
              className="text-left group px-4 py-3 rounded-xl transition-all hover:bg-slate-600/40 active:scale-[0.98]"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-slate-300 font-medium">
                {p.num} / {p.label}
              </span>
              <p className="text-sm text-cream-100 font-medium mt-1 group-hover:text-white transition-colors">
                {p.title}
              </p>
              <p className="text-xs text-slate-400 italic mt-0.5">{p.sub}</p>
            </button>
          ))}
        </div>
        <p className="text-slate-400/60 text-[11px] max-w-sm text-center mx-auto mt-4">
          An AI companion here to listen and offer perspective.
          Not a replacement for professional therapy.
        </p>
      </div>
    </div>
  );
}
