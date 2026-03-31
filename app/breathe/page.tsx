"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import CuteAvatar from "../components/CuteAvatar";
import { PinkStar, Plant } from "../components/CuteDecorations";

const TRACKS = [
  {
    title: "Serene View",
    artist: "Mixkit",
    src: "https://assets.mixkit.co/music/443/443.mp3",
  },
  {
    title: "Meditation",
    artist: "Mixkit",
    src: "https://assets.mixkit.co/music/441/441.mp3",
  },
  {
    title: "Spirit in the Woods",
    artist: "Mixkit",
    src: "https://assets.mixkit.co/music/139/139.mp3",
  },
  {
    title: "Relaxation",
    artist: "Mixkit",
    src: "https://assets.mixkit.co/music/749/749.mp3",
  },
  {
    title: "Forest Walk",
    artist: "Mixkit",
    src: "https://assets.mixkit.co/music/607/607.mp3",
  },
];

const CHIME_START = "https://assets.mixkit.co/active_storage/sfx/2568/2568.wav";
const CHIME_END = "https://assets.mixkit.co/active_storage/sfx/2579/2579.wav";

const PRESET_TIMES = [
  { label: "2 min", seconds: 2 * 60 },
  { label: "5 min", seconds: 5 * 60 },
  { label: "10 min", seconds: 10 * 60 },
  { label: "15 min", seconds: 15 * 60 },
  { label: "20 min", seconds: 20 * 60 },
];

const BREATH_PHASES = [
  { label: "Breathe in", duration: 4000 },
  { label: "Hold", duration: 4000 },
  { label: "Breathe out", duration: 4000 },
  { label: "Hold", duration: 4000 },
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function playChime(src: string): Promise<void> {
  return new Promise((resolve) => {
    const audio = new Audio(src);
    audio.volume = 0.5;
    audio.onended = () => resolve();
    audio.play().catch(() => resolve());
    // Fallback in case onended doesn't fire
    setTimeout(resolve, 1500);
  });
}

export default function BreathePage() {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [musicReady, setMusicReady] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [breathPhase, setBreathPhase] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breathTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopSession = useCallback((playEndChime = true) => {
    setIsRunning(false);
    setMusicReady(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (breathTimeoutRef.current) clearTimeout(breathTimeoutRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (playEndChime) {
      playChime(CHIME_END);
    }
  }, []);

  const startSession = async () => {
    if (!selectedTime) return;
    setTimeLeft(selectedTime);
    setIsRunning(true);
    setBreathPhase(0);
    setCurrentTrack(0);
    // Play chime first, then start music
    await playChime(CHIME_START);
    setMusicReady(true);
  };

  // Countdown timer
  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, stopSession]);

  // Breathing cycle
  useEffect(() => {
    if (!isRunning) return;
    breathTimeoutRef.current = setTimeout(() => {
      setBreathPhase((prev) => (prev + 1) % BREATH_PHASES.length);
    }, BREATH_PHASES[breathPhase].duration);
    return () => {
      if (breathTimeoutRef.current) clearTimeout(breathTimeoutRef.current);
    };
  }, [isRunning, breathPhase]);

  // Audio playback — starts only after chime finishes
  useEffect(() => {
    if (!musicReady) return;
    const audio = new Audio(TRACKS[currentTrack].src);
    audioRef.current = audio;
    audio.volume = 0.4;
    audio.play().catch(() => {});
    audio.onended = () => {
      setCurrentTrack((prev) => (prev + 1) % TRACKS.length);
    };
    return () => {
      audio.pause();
      audio.onended = null;
    };
  }, [musicReady, currentTrack]);

  // Breathing circle scale
  const phase = BREATH_PHASES[breathPhase];
  const isExpand = phase.label === "Breathe in";
  const isShrink = phase.label === "Breathe out";

  return (
    <div className="flex flex-col h-screen bg-[#f7f3ed]">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-stone-200/60 bg-cream-50/80 backdrop-blur-sm px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-[13px] tracking-[0.25em] uppercase font-medium text-stone-600 hover:text-stone-800 transition-colors"
          >
            MindfulChat
          </Link>
          <span className="text-[11px] tracking-[0.15em] uppercase text-stone-400">
            breathe
          </span>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {!isRunning ? (
          /* Timer Selection */
          <div className="flex flex-col items-center gap-8 animate-fade-in">
            {/* Cute avatar */}
            <div className="relative">
              <PinkStar className="absolute -top-3 -right-5" />
              <Plant className="absolute -left-8 bottom-0" />
              <CuteAvatar expression="listening" size={64} />
            </div>

            <h2 className="font-display text-2xl text-stone-700 italic">
              Set your timer
            </h2>
            <p className="text-sm text-stone-400 max-w-xs text-center">
              Choose a duration, then settle in. Calm music will play while you
              breathe.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {PRESET_TIMES.map((t) => (
                <button
                  key={t.seconds}
                  onClick={() => setSelectedTime(t.seconds)}
                  className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all ${
                    selectedTime === t.seconds
                      ? "bg-amber-400 text-white shadow-lg shadow-amber-300/30"
                      : "bg-white/60 text-stone-500 border border-stone-200/80 hover:bg-white/80 hover:text-stone-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <button
              onClick={startSession}
              disabled={!selectedTime}
              className={`mt-4 px-10 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${
                selectedTime
                  ? "bg-amber-400 text-white hover:bg-amber-500 shadow-lg shadow-amber-300/25"
                  : "bg-stone-200/50 text-stone-400 cursor-not-allowed"
              }`}
            >
              Start
            </button>
          </div>
        ) : (
          /* Active Session */
          <div className="flex flex-col items-center gap-10 animate-fade-in">
            {/* Breathing circle */}
            <div className="relative flex items-center justify-center w-48 h-48">
              <div
                className="absolute inset-0 rounded-full transition-transform ease-in-out"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,162,78,0.25), rgba(212,162,78,0.05))",
                  transitionDuration: `${phase.duration}ms`,
                  transform: isExpand
                    ? "scale(1)"
                    : isShrink
                      ? "scale(0.6)"
                      : undefined,
                }}
              />
              <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            </div>

            {/* Phase label */}
            <p className="text-lg tracking-[0.2em] uppercase text-stone-500 font-light transition-opacity duration-700">
              {phase.label}
            </p>

            {/* Timer */}
            <p className="text-4xl font-light text-stone-700 tabular-nums">
              {formatTime(timeLeft)}
            </p>

            {/* Now playing */}
            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400">
                Now playing
              </p>
              <p className="text-sm text-stone-600">
                {TRACKS[currentTrack].title}
              </p>
              <p className="text-xs text-stone-400">
                {TRACKS[currentTrack].artist}
              </p>
            </div>

            {/* Stop button */}
            <button
              onClick={() => stopSession(false)}
              className="mt-4 px-8 py-2.5 rounded-full text-sm tracking-wider uppercase bg-white/60 text-stone-500 border border-stone-200/80 hover:bg-white/80 hover:text-stone-700 transition-all"
            >
              End session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
