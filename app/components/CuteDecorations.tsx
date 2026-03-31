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
