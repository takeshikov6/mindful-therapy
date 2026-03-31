"use client";

export function PinkStar({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={`animate-twinkle ${className}`}
    >
      <path
        d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z"
        fill="#f5b0c8"
        opacity="0.8"
      />
    </svg>
  );
}

export function Ladybug({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 40 40"
      className={`animate-float-gentle ${className}`}
    >
      {/* Body */}
      <ellipse cx="20" cy="22" rx="12" ry="13" fill="#d94040" />
      {/* Center line */}
      <line
        x1="20"
        y1="10"
        x2="20"
        y2="35"
        stroke="#2a2a2a"
        strokeWidth="1.5"
      />
      {/* Head */}
      <circle cx="20" cy="11" r="6" fill="#2a2a2a" />
      {/* Spots */}
      <circle cx="15" cy="19" r="2.5" fill="#2a2a2a" />
      <circle cx="25" cy="19" r="2.5" fill="#2a2a2a" />
      <circle cx="14" cy="27" r="2" fill="#2a2a2a" />
      <circle cx="26" cy="27" r="2" fill="#2a2a2a" />
      {/* Eyes */}
      <circle cx="18" cy="10" r="1.2" fill="white" />
      <circle cx="22" cy="10" r="1.2" fill="white" />
    </svg>
  );
}

export function TeaCup({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 40 40"
      className={className}
    >
      {/* Steam */}
      <path
        d="M15 8 Q17 4 15 0"
        fill="none"
        stroke="#c8b898"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="animate-steam"
      />
      <path
        d="M20 9 Q22 5 20 1"
        fill="none"
        stroke="#c8b898"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="animate-steam"
        style={{ animationDelay: "0.5s" }}
      />
      {/* Cup */}
      <path
        d="M8 14 L10 32 Q10 36 14 36 L26 36 Q30 36 30 32 L32 14 Z"
        fill="#e8c87a"
      />
      {/* Handle */}
      <path
        d="M32 18 Q38 18 38 24 Q38 30 32 30"
        fill="none"
        stroke="#e8c87a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Liquid */}
      <ellipse cx="20" cy="15" rx="11" ry="3" fill="#a0785a" />
    </svg>
  );
}

export function Butterfly({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 30 30"
      className={`animate-float-gentle ${className}`}
    >
      {/* Left wing */}
      <ellipse cx="10" cy="12" rx="7" ry="9" fill="#e8a0d0" opacity="0.7" transform="rotate(-15 10 12)" />
      {/* Right wing */}
      <ellipse cx="20" cy="12" rx="7" ry="9" fill="#d898c8" opacity="0.7" transform="rotate(15 20 12)" />
      {/* Body */}
      <ellipse cx="15" cy="15" rx="1.5" ry="6" fill="#8a6878" />
      {/* Antennae */}
      <line x1="14" y1="9" x2="11" y2="4" stroke="#8a6878" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="16" y1="9" x2="19" y2="4" stroke="#8a6878" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="11" cy="3.5" r="1" fill="#8a6878" />
      <circle cx="19" cy="3.5" r="1" fill="#8a6878" />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      className={`animate-twinkle ${className}`}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#f0a0a0"
        opacity="0.5"
      />
    </svg>
  );
}

export function SmallCloud({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 40 22"
      className={`animate-float-gentle ${className}`}
    >
      <ellipse cx="14" cy="14" rx="10" ry="7" fill="#e8e0d4" opacity="0.4" />
      <ellipse cx="24" cy="12" rx="8" ry="6" fill="#e8e0d4" opacity="0.35" />
      <ellipse cx="20" cy="8" rx="7" ry="5" fill="#ede6da" opacity="0.3" />
    </svg>
  );
}

export function Plant({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 40 44"
      className={`animate-sway-gentle ${className}`}
    >
      {/* Pot */}
      <path d="M12 30 L14 42 L26 42 L28 30 Z" fill="#d4956a" />
      <rect x="10" y="28" width="20" height="4" rx="1" fill="#d4956a" />
      {/* Stem */}
      <line
        x1="20"
        y1="28"
        x2="20"
        y2="14"
        stroke="#6a9a4a"
        strokeWidth="2"
      />
      {/* Leaves */}
      <ellipse
        cx="14"
        cy="18"
        rx="6"
        ry="4"
        fill="#7ab858"
        transform="rotate(-20 14 18)"
      />
      <ellipse
        cx="26"
        cy="14"
        rx="6"
        ry="4"
        fill="#88c860"
        transform="rotate(15 26 14)"
      />
      <ellipse
        cx="18"
        cy="10"
        rx="5"
        ry="3.5"
        fill="#6aaa48"
        transform="rotate(-10 18 10)"
      />
    </svg>
  );
}
