"use client";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function MessageBubble({
  role,
  content,
  isStreaming,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} animate-slide-up`}
    >
      <div
        className={`flex gap-3 max-w-[80%] ${isUser ? "flex-row-reverse" : "flex-row"}`}
      >
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-500/40 flex items-center justify-center mt-1 ring-1 ring-slate-400/20">
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
        )}
        <div
          className={`px-4 py-3 whitespace-pre-wrap text-[15px] leading-relaxed ${
            isUser
              ? "bg-sky-500/20 text-cream-50 rounded-2xl rounded-br-sm ring-1 ring-sky-400/15"
              : "bg-slate-600/50 text-slate-100 rounded-2xl rounded-bl-sm ring-1 ring-slate-500/20"
          }`}
        >
          {content}
          {isStreaming && (
            <span className="inline-block w-1.5 h-4 bg-slate-300 ml-0.5 animate-pulse rounded-sm align-text-bottom" />
          )}
        </div>
      </div>
    </div>
  );
}
