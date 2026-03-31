"use client";

interface WelcomeScreenProps {
  visible: boolean;
  onPromptClick?: (text: string) => void;
}

const PROMPTS = [
  {
    num: "01",
    label: "REFLECT",
    title: "Something's been weighing on me",
    sub: "a safe space to unpack",
  },
  {
    num: "02",
    label: "GROW",
    title: "I want to understand myself better",
    sub: "gentle self-discovery",
  },
  {
    num: "03",
    label: "BREATHE",
    title: "I just need someone to listen",
    sub: "no judgement, just presence",
  },
];

export default function WelcomeScreen({
  visible,
  onPromptClick,
}: WelcomeScreenProps) {
  if (!visible) return null;

  return (
    <div className="flex flex-col items-center justify-between flex-1 min-h-0 relative overflow-hidden">
      {/* Background gradient — deep black to dark red */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-[#1a0505]" />

      {/* Ambient red glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 100%, rgba(120,20,10,0.4), rgba(80,10,5,0.15) 50%, transparent 80%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${180 + Math.random() * 75}, ${60 + Math.random() * 40}, ${20 + Math.random() * 30}, ${0.3 + Math.random() * 0.4})`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6 px-6">
        {/* Event Horizon / Black Hole */}
        <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80">
          {/* Outer accretion glow */}
          <div className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, rgba(180,60,20,0.0), rgba(200,80,20,0.15), rgba(220,120,40,0.25), rgba(200,80,20,0.15), rgba(180,60,20,0.0), rgba(160,40,15,0.1), rgba(200,80,20,0.2), rgba(180,60,20,0.0))",
              filter: "blur(8px)",
            }}
          />

          {/* Accretion ring */}
          <div className="absolute inset-[15%] rounded-full animate-spin-ring"
            style={{
              background: "conic-gradient(from 180deg, rgba(200,90,30,0.0), rgba(220,130,50,0.3), rgba(240,160,60,0.5), rgba(255,180,80,0.3), rgba(200,90,30,0.0), rgba(180,60,20,0.2), rgba(220,130,50,0.4), rgba(200,90,30,0.0))",
              filter: "blur(3px)",
            }}
          />

          {/* Inner glow ring */}
          <div className="absolute inset-[25%] rounded-full"
            style={{
              boxShadow: "0 0 40px 8px rgba(200,100,30,0.2), inset 0 0 30px 5px rgba(200,100,30,0.15)",
              border: "1px solid rgba(220,130,50,0.15)",
            }}
          />

          {/* The void — black hole center */}
          <div className="absolute inset-[28%] rounded-full animate-pull"
            style={{
              background: "radial-gradient(circle, #000000 50%, rgba(0,0,0,0.98) 70%, rgba(10,2,0,0.9) 85%, transparent 100%)",
              boxShadow: "0 0 60px 20px rgba(0,0,0,0.8), inset 0 0 40px 10px #000",
            }}
          />

          {/* Gravitational lensing — thin bright arc on top */}
          <div className="absolute inset-[22%] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-[10%] right-[10%] h-[2px] rounded-full animate-pulse-glow"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,200,120,0.6), rgba(255,220,150,0.8), rgba(255,200,120,0.6), transparent)",
                filter: "blur(1px)",
                boxShadow: "0 0 12px 3px rgba(255,180,80,0.3)",
              }}
            />
          </div>

          {/* Light bending streaks */}
          <div className="absolute inset-[20%] rounded-full overflow-hidden opacity-40">
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div
                key={deg}
                className="absolute top-1/2 left-1/2 w-[120%] h-[1px] origin-left animate-warp"
                style={{
                  transform: `rotate(${deg}deg)`,
                  background: `linear-gradient(90deg, transparent 0%, rgba(200,120,50,${0.1 + Math.random() * 0.15}) 40%, transparent 60%)`,
                  animationDelay: `${deg * 0.02}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[15px] md:text-[17px] tracking-[0.4em] uppercase font-light text-slate-200/90 text-center mt-2">
          MindfulChat
        </h2>

        {/* Subtitle */}
        <p className="text-[11px] tracking-[0.2em] text-slate-400/70 text-center max-w-sm italic">
          the quieter you become, the more you can hear
        </p>

        {/* Horizon line */}
        <div className="w-64 md:w-80 h-[1px] mt-2"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(200,100,40,0.4), rgba(255,160,60,0.6), rgba(200,100,40,0.4), transparent)",
            boxShadow: "0 0 15px 2px rgba(200,100,40,0.15)",
          }}
        />
      </div>

      {/* Conversation starters */}
      <div className="relative z-10 w-full border-t border-white/5 px-6 py-5 backdrop-blur-sm bg-black/20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMPTS.map((p) => (
            <button
              key={p.num}
              onClick={() => onPromptClick?.(p.title)}
              className="text-left group px-4 py-3 rounded-xl transition-all hover:bg-white/5 active:scale-[0.98]"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-amber-400/60 font-medium">
                {p.num} / {p.label}
              </span>
              <p className="text-sm text-slate-200/80 font-medium mt-1 group-hover:text-white transition-colors">
                {p.title}
              </p>
              <p className="text-xs text-slate-500 italic mt-0.5">{p.sub}</p>
            </button>
          ))}
        </div>
        <p className="text-slate-500/50 text-[11px] max-w-sm text-center mx-auto mt-4">
          An AI companion here to listen and offer perspective.
          Not a replacement for professional therapy.
        </p>
      </div>
    </div>
  );
}
