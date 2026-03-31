"use client";

import { useState } from "react";
import CuteAvatar from "./CuteAvatar";
import { PinkStar, Plant, Ladybug } from "./CuteDecorations";

interface LandingPageProps {
  onBegin: () => void;
}

export default function LandingPage({ onBegin }: LandingPageProps) {
  const [portalActive, setPortalActive] = useState(false);

  const handleClick = () => {
    setPortalActive(true);
    setTimeout(() => {
      onBegin();
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f7f3ed] transition-opacity duration-500 ${portalActive ? "pointer-events-none" : ""}`}
    >
      {/* Soft background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating soft blobs */}
        <div
          className="absolute w-72 h-72 rounded-full animate-float-gentle opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(212,162,78,0.15), transparent 70%)",
            top: "10%",
            left: "15%",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full animate-float-gentle opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(180,140,200,0.12), transparent 70%)",
            bottom: "10%",
            right: "10%",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full animate-float-gentle opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(122,184,88,0.12), transparent 70%)",
            top: "50%",
            right: "25%",
            animationDelay: "3s",
          }}
        />

        {/* Scattered decorations */}
        <div className="absolute top-[15%] left-[20%]">
          <PinkStar className="" />
        </div>
        <div className="absolute top-[25%] right-[18%]">
          <PinkStar className="[animation-delay:1s]" />
        </div>
        <div className="absolute bottom-[20%] left-[12%]">
          <Plant className="" />
        </div>
        <div className="absolute bottom-[30%] right-[15%]">
          <Ladybug className="" />
        </div>
        <div className="absolute top-[60%] left-[30%]">
          <PinkStar className="[animation-delay:0.5s]" />
        </div>
      </div>

      {/* Portal overlay */}
      {portalActive && (
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          {/* Expanding ring */}
          <div className="absolute animate-portal-ring rounded-full border-2 border-amber-300/40" />
          {/* White flash */}
          <div className="absolute inset-0 animate-portal-flash bg-white" />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-10 transition-all duration-700 ${portalActive ? "scale-50 opacity-0" : "scale-100 opacity-100"}`}
      >
        {/* Small avatar peeking */}
        <div className="relative">
          <PinkStar className="absolute -top-3 -right-4" />
          <CuteAvatar expression="happy" size={70} />
        </div>

        {/* App name — subtle */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[11px] tracking-[0.4em] uppercase text-stone-400 font-medium">
            MindfulChat
          </h1>
          <p className="font-display italic text-sm text-stone-400/70">
            a space to breathe
          </p>
        </div>

        {/* BEGIN button — glass pill style, cute version */}
        <button
          onClick={handleClick}
          className="group relative px-12 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        >
          {/* Glass background */}
          <div className="absolute inset-0 rounded-full bg-white/60 backdrop-blur-sm border border-stone-200/80 shadow-lg shadow-amber-100/30 group-hover:bg-white/80 group-hover:border-amber-300/50 group-hover:shadow-amber-200/40 transition-all duration-300" />
          {/* Inner glow on hover */}
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Text */}
          <span className="relative text-[12px] tracking-[0.35em] uppercase font-medium text-stone-500 group-hover:text-stone-700 transition-colors duration-300">
            Begin
          </span>
          {/* Tiny dot indicator */}
          <span className="relative ml-2 inline-block w-1.5 h-1.5 rounded-full bg-amber-400/70 group-hover:bg-amber-400 animate-pulse transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
}
