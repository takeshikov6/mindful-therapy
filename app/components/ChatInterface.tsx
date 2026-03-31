"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { ChatMessage, StreamChunk } from "@/lib/types";
import WelcomeScreen from "./WelcomeScreen";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  const handleSend = useCallback(
    async (content: string) => {
      if (isLoading) return;

      setShowWelcome(false);

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content,
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setIsLoading(true);
      setStreamingContent("");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let fullContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const jsonStr = line.slice(6);

            try {
              const chunk: StreamChunk = JSON.parse(jsonStr);

              if (chunk.type === "text" && chunk.content) {
                fullContent += chunk.content;
                setStreamingContent(fullContent);
              } else if (chunk.type === "error") {
                throw new Error(chunk.error || "Stream error");
              }
            } catch (e) {
              if (e instanceof SyntaxError) continue;
              throw e;
            }
          }
        }

        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: fullContent,
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setStreamingContent("");
      } catch {
        const errorMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I'm sorry, I'm having a bit of trouble connecting right now. Could you try again in a moment?",
        };
        setMessages((prev) => [...prev, errorMessage]);
        setStreamingContent("");
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  return (
    <div className="flex flex-col h-screen bg-slate-700">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-slate-500/20 bg-slate-800/40 backdrop-blur-sm px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <h1 className="text-[13px] tracking-[0.25em] uppercase font-medium text-slate-200">
            MindfulChat
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <span className="text-[11px] tracking-[0.15em] uppercase text-slate-400 cursor-default">
              sanctuary
            </span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-slate-400 cursor-default">
              breathe
            </span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-slate-300 cursor-default">
              talk
            </span>
          </nav>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {showWelcome ? (
          <WelcomeScreen visible={showWelcome} onPromptClick={handleSend} />
        ) : (
          <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                role={msg.role}
                content={msg.content}
              />
            ))}
            {streamingContent && (
              <MessageBubble
                role="assistant"
                content={streamingContent}
                isStreaming
              />
            )}
            {isLoading && !streamingContent && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}
