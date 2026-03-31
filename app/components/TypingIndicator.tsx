"use client";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start animate-slide-up">
      <div className="flex gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-500/40 flex items-center justify-center ring-1 ring-slate-400/20">
          <svg width="14" height="14" viewBox="0 0 90 90">
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <ellipse
                key={angle}
                cx="45"
                cy="45"
                rx="7"
                ry="16"
                fill="rgba(255,255,255,0.7)"
                transform={`rotate(${angle} 45 45)`}
              />
            ))}
            <circle cx="45" cy="45" r="5" fill="#d4a24e" />
          </svg>
        </div>
        <div className="bg-slate-600/50 rounded-2xl rounded-bl-sm px-5 py-3.5 flex items-center gap-1.5 ring-1 ring-slate-500/20">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce-dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
