// Hand-drawn SVG doodles. All decorative, so hidden from screen readers.

type Props = { className?: string };

export function Squiggle({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 300 24" preserveAspectRatio="none">
      <path d="M4 16 C 50 4, 90 22, 140 12 S 230 4, 296 14" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
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

// Threads uses the official logo (public/icons/threads.png); LinkedIn is a simplified outline.
export function SocialIcon({ kind }: { kind: "threads" | "linkedin" }) {
  if (kind === "threads") {
    // eslint-disable-next-line @next/next/no-img-element
    // Smaller than its 22px slot so it reads the same size as the LinkedIn box; margin keeps the slot 22px.
    return <img src="/icons/threads.png" alt="" width={18} height={18} style={{ margin: 2 }} />;
  }
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3.5h16c.3 0 .5.2.5.5v16c0 .3-.2.5-.5.5H4a.5.5 0 0 1-.5-.5V4c0-.3.2-.5.5-.5Z" />
      <path d="M8 10.5v6" />
      <circle cx="8" cy="7.5" r="0.6" fill="currentColor" />
      <path d="M12 16.5v-6M12 13c0-1.6 1-2.6 2.3-2.6s2 .9 2 2.4v3.7" />
    </svg>
  );
}
