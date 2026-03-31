"use client";

import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import ChatInterface from "./components/ChatInterface";

export default function Home() {
  const [started, setStarted] = useState<boolean | null>(null);

  useEffect(() => {
    const wasStarted = sessionStorage.getItem("mindfulchat-started");
    setStarted(wasStarted === "true");
  }, []);

  const handleBegin = () => {
    sessionStorage.setItem("mindfulchat-started", "true");
    setStarted(true);
  };

  // Don't render until we've checked sessionStorage (avoids flash)
  if (started === null) return null;

  return (
    <>
      {!started && <LandingPage onBegin={handleBegin} />}
      {started && (
        <div className="animate-fade-in">
          <ChatInterface />
        </div>
      )}
    </>
  );
}
