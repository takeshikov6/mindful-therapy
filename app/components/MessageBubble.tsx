"use client";

import CuteAvatar from "./CuteAvatar";

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
          <div className="mt-1">
            <CuteAvatar expression={isStreaming ? "thinking" : "listening"} size={34} />
          </div>
        )}
        <div
          className={`px-4 py-3 whitespace-pre-wrap text-[15px] leading-relaxed ${
            isUser
              ? "bg-amber-50 text-stone-700 rounded-2xl rounded-br-sm ring-1 ring-amber-200/50 shadow-sm"
              : "bg-white/80 text-stone-700 rounded-2xl rounded-bl-sm ring-1 ring-stone-200/50 shadow-sm"
          }`}
        >
          {content}
          {isStreaming && (
            <span className="inline-block w-1.5 h-4 bg-amber-400/60 ml-0.5 animate-pulse rounded-sm align-text-bottom" />
          )}
        </div>
      </div>
    </div>
  );
}
