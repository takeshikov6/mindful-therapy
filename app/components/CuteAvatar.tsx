"use client";

interface CuteAvatarProps {
  expression?: "happy" | "thinking" | "listening";
  size?: number;
}

export default function CuteAvatar({
  expression = "happy",
  size = 36,
}: CuteAvatarProps) {
  const eyes =
    expression === "thinking"
      ? { left: "A", right: "A", mouth: "_" }
      : expression === "listening"
        ? { left: "^", right: "^", mouth: "u" }
        : { left: "^", right: "^", mouth: "w" };

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Body */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        className="animate-float-gentle"
      >
        {/* Screen housing */}
        <rect
          x="8"
          y="8"
          width="64"
          height="58"
          rx="12"
          fill="#f5f0e8"
          stroke="#e0d8c8"
          strokeWidth="2"
        />
        {/* Screen */}
        <rect x="14" y="14" width="52" height="40" rx="6" fill="#c8d8b0" />
        {/* Screen shine */}
        <rect
          x="16"
          y="16"
          width="20"
          height="4"
          rx="2"
          fill="#d4e4c0"
          opacity="0.6"
        />
        {/* Face */}
        <text
          x="40"
          y="42"
          textAnchor="middle"
          fontSize="14"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#5a6848"
        >
          {eyes.left} {eyes.mouth} {eyes.right}
        </text>
        {/* Feet */}
        <rect x="20" y="66" width="12" height="6" rx="3" fill="#e0d8c8" />
        <rect x="48" y="66" width="12" height="6" rx="3" fill="#e0d8c8" />
        {/* Antenna */}
        <line
          x1="40"
          y1="8"
          x2="40"
          y2="2"
          stroke="#d4a24e"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="40" cy="1" r="2.5" fill="#d4a24e" />
      </svg>
    </div>
  );
}
