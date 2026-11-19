// Hand-drawn SVG doodles. All decorative, so hidden from screen readers.

type Props = { className?: string };

export function Squiggle({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 300 24" preserveAspectRatio="none">
      <path d="M4 16 C 50 4, 90 22, 140 12 S 230 4, 296 14" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function CurvyArrow({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 80 C 30 70, 60 60, 92 22" />
      <path d="M74 24 L 94 18 L 96 40" />
    </svg>
  );
}

export function Sparkle({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round">
      <path d="M30 4 L 34 24 L 56 28 L 36 34 L 32 56 L 26 36 L 4 32 L 25 26 Z" />
    </svg>
  );
}

export function ArrowRight({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12.5 C 9 11.5, 14 12.8, 20 12" />
      <path d="M14 6 L 20 12 L 14.5 18" />
    </svg>
  );
}

const iconProps = {
  "aria-hidden": true,
  width: 56,
  height: 56,
  viewBox: "0 0 56 56",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ServiceIcon({ name }: { name: "web" | "mobile" | "design" }) {
  if (name === "web") {
    return (
      <svg {...iconProps}>
        <path d="M5 10 C 18 9, 38 11, 51 9 L 50 44 C 36 46, 20 44, 6 45 Z" />
        <path d="M6 19 C 20 18, 36 20, 50 18" />
        <circle cx="12" cy="14" r="1.5" />
        <circle cx="18" cy="14" r="1.5" />
        <path d="M20 28 L 14 33 L 20 38" />
        <path d="M36 28 L 42 33 L 36 38" />
      </svg>
    );
  }
  if (name === "mobile") {
    return (
      <svg {...iconProps}>
        <path d="M16 4 C 26 3, 34 5, 41 4 C 42 20, 41 36, 42 52 C 32 53, 24 51, 15 52 C 14 36, 16 20, 16 4 Z" />
        <path d="M24 9 L 33 9" />
        <circle cx="28.5" cy="45" r="2" />
      </svg>
    );
  }
  return (
    <svg {...iconProps}>
      <path d="M38 6 L 50 18 L 22 46 L 8 49 L 11 35 Z" />
      <path d="M32 12 L 44 24" />
      <path d="M11 35 L 22 46" />
    </svg>
  );
}
