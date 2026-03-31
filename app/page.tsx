"use client";

import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ChatInterface from "./components/ChatInterface";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && <LandingPage onBegin={() => setStarted(true)} />}
      {started && (
        <div className="animate-fade-in">
          <ChatInterface />
        </div>
      )}
    </>
  );
}
