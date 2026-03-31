"use client";

import CuteAvatar from "./CuteAvatar";
import { PinkStar, Ladybug, TeaCup } from "./CuteDecorations";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start animate-slide-up">
      <div className="flex flex-col items-center gap-2 px-4 py-4">
        {/* Decorations around avatar */}
        <div className="relative">
          <PinkStar className="absolute -top-2 -right-3" />
          <Ladybug className="absolute -left-6 bottom-2" />
          <TeaCup className="absolute -right-7 bottom-0" />
          <CuteAvatar expression="thinking" size={56} />
        </div>

        {/* Thinking text */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-[10px] tracking-[0.15em] uppercase text-stone-400 italic font-display">
            currently
          </span>
          <span className="text-[13px] tracking-[0.3em] uppercase font-medium text-stone-600">
            Thinking
          </span>
        </div>

        {/* Bouncing dots */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-bounce-dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
