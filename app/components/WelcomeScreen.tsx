"use client";

import CuteAvatar from "./CuteAvatar";
import { PinkStar, Ladybug, TeaCup, Plant } from "./CuteDecorations";

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
    <div className="flex flex-col items-center justify-between flex-1 animate-fade-in min-h-0 bg-[#f7f3ed]">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
        {/* Cute character with decorations */}
        <div className="relative">
          <PinkStar className="absolute -top-4 -right-6" />
          <PinkStar className="absolute -top-2 -left-8 [animation-delay:0.7s]" />
          <Ladybug className="absolute -left-10 bottom-4" />
          <TeaCup className="absolute -right-10 bottom-2" />
          <Plant className="absolute right-[-3rem] top-0" />
          <CuteAvatar expression="happy" size={100} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-[12px] tracking-[0.15em] uppercase text-stone-400 italic font-display">
              checking in with
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl tracking-[0.15em] uppercase font-medium text-stone-700">
            MindfulChat
          </h2>
        </div>

        {/* Quote */}
        <p className="font-display italic text-lg text-stone-400 text-center max-w-sm">
          trust the process of showing up for yourself
        </p>
      </div>

      {/* Conversation starters */}
      <div className="w-full border-t border-stone-200/60 px-6 py-5 bg-white/40">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMPTS.map((p) => (
            <button
              key={p.num}
              onClick={() => onPromptClick?.(p.title)}
              className="text-left group px-4 py-3 rounded-xl transition-all hover:bg-amber-50/60 active:scale-[0.98]"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-amber-500/70 font-medium">
                {p.num} / {p.label}
              </span>
              <p className="text-sm text-stone-600 font-medium mt-1 group-hover:text-stone-800 transition-colors">
                {p.title}
              </p>
              <p className="text-xs text-stone-400 italic mt-0.5">{p.sub}</p>
            </button>
          ))}
        </div>
        <p className="text-stone-400/60 text-[11px] max-w-sm text-center mx-auto mt-4">
          An AI companion here to listen and offer perspective.
          Not a replacement for professional therapy.
        </p>
      </div>
    </div>
  );
}
