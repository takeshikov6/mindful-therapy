"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const TRACKS = [
  {
    title: "Weightless",
    artist: "Marconi Union",
    src: "https://cdn.pixabay.com/audio/2022/02/22/audio_d1718ab41b.mp3",
  },
  {
    title: "Deep Calm",
    artist: "Ambient Waves",
    src: "https://cdn.pixabay.com/audio/2022/10/25/audio_380db41f91.mp3",
  },
  {
    title: "Serenity Flow",
    artist: "Nature Sounds",
    src: "https://cdn.pixabay.com/audio/2023/04/07/audio_357b39112f.mp3",
  },
  {
    title: "Peaceful Mind",
    artist: "Zen Garden",
    src: "https://cdn.pixabay.com/audio/2024/11/04/audio_b04640db0e.mp3",
  },
  {
    title: "Evening Stillness",
    artist: "Calm Collective",
    src: "https://cdn.pixabay.com/audio/2023/10/07/audio_7a3424f498.mp3",
  },
];

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

export default function BreathePage() {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [breathPhase, setBreathPhase] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breathTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopSession = useCallback(() => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (breathTimeoutRef.current) clearTimeout(breathTimeoutRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const startSession = () => {
    if (!selectedTime) return;
    setTimeLeft(selectedTime);
    setIsRunning(true);
    setBreathPhase(0);
    setCurrentTrack(0);
  };

  // Countdown timer
  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession();
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

  // Audio playback
  useEffect(() => {
    if (!isRunning) return;
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
  }, [isRunning, currentTrack]);

  // Breathing circle scale
  const phase = BREATH_PHASES[breathPhase];
  const isExpand = phase.label === "Breathe in";
  const isShrink = phase.label === "Breathe out";

  return (
    <div className="flex flex-col h-screen bg-slate-700">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-slate-500/20 bg-slate-800/40 backdrop-blur-sm px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-[13px] tracking-[0.25em] uppercase font-medium text-slate-200 hover:text-white transition-colors"
          >
            MindfulChat
          </Link>
          <span className="text-[11px] tracking-[0.15em] uppercase text-slate-300">
            breathe
          </span>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {!isRunning ? (
          /* Timer Selection */
          <div className="flex flex-col items-center gap-8 animate-fade-in">
            <h2 className="font-display text-2xl text-slate-100 italic">
              Set your timer
            </h2>
            <p className="text-sm text-slate-400 max-w-xs text-center">
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
                      ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20"
                      : "bg-slate-600/50 text-slate-300 hover:bg-slate-600 hover:text-slate-100"
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
                  ? "bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/25"
                  : "bg-slate-600/30 text-slate-500 cursor-not-allowed"
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
                    "radial-gradient(circle, rgba(155,190,220,0.4), rgba(100,150,190,0.08))",
                  transitionDuration: `${phase.duration}ms`,
                  transform: isExpand
                    ? "scale(1)"
                    : isShrink
                      ? "scale(0.6)"
                      : undefined,
                }}
              />
              <div className="w-3 h-3 rounded-full bg-slate-300/70" />
            </div>

            {/* Phase label */}
            <p className="text-lg tracking-[0.2em] uppercase text-slate-300 font-light transition-opacity duration-700">
              {phase.label}
            </p>

            {/* Timer */}
            <p className="text-4xl font-light text-slate-100 tabular-nums">
              {formatTime(timeLeft)}
            </p>

            {/* Now playing */}
            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500">
                Now playing
              </p>
              <p className="text-sm text-slate-300">
                {TRACKS[currentTrack].title}
              </p>
              <p className="text-xs text-slate-400">
                {TRACKS[currentTrack].artist}
              </p>
            </div>

            {/* Stop button */}
            <button
              onClick={stopSession}
              className="mt-4 px-8 py-2.5 rounded-full text-sm tracking-wider uppercase bg-slate-600/50 text-slate-300 hover:bg-slate-600 hover:text-slate-100 transition-all"
            >
              End session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
