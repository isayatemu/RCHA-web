export const LogoMark = ({ className = "h-12 w-12" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Rose Changa Herbalist Africa mark">
      <defs>
        <radialGradient id="rcGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#8cbf54" />
          <stop offset="100%" stopColor="#4f8f36" />
        </radialGradient>
        <linearGradient id="rcLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f5f43" />
          <stop offset="100%" stopColor="#5c1d2f" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="54" fill="url(#rcGlow)" opacity="0.16" />
      <circle cx="60" cy="60" r="49" fill="#f7f3e9" stroke="#5c1d2f" strokeOpacity="0.48" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="#0f5f43" strokeOpacity="0.35" strokeWidth="1.3" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="#5c1d2f" strokeOpacity="0.25" strokeWidth="1.1" />

      <text x="60" y="74" textAnchor="middle" fontFamily="Georgia, serif" fontSize="60" fill="#5c1d2f" fontWeight="700">
        R
      </text>

      <path d="M38 58c13 0 24 9 28 24-10-10-18-13-28-24Z" fill="url(#rcLeaf)" opacity="0.9" />
      <path d="M35 58c10 4 19 13 25 25M42 60c6 4 12 10 18 18" stroke="#f7f3e9" strokeOpacity="0.8" strokeLinecap="round" />
      <path d="M86 66c-12 3-22 12-26 25 9-8 16-12 26-25Z" fill="url(#rcLeaf)" opacity="0.9" />
      <path d="M83 69c-9 5-16 13-21 21" stroke="#f7f3e9" strokeOpacity="0.8" strokeLinecap="round" />
    </svg>
  );
};
