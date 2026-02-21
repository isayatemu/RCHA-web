export const LogoMark = ({ className = "h-12 w-12" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Rose Changa Herbalist Africa mark">
      <defs>
        <linearGradient id="crest" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f5f43" />
          <stop offset="100%" stopColor="#5c1d2f" />
        </linearGradient>
      </defs>
      <path d="M60 6 104 28v34c0 28-19 46-44 52C35 108 16 90 16 62V28L60 6Z" fill="url(#crest)" />
      <path d="M60 24c10 10 15 24 15 40-11-6-18-16-22-29-4 13-11 23-22 29 0-16 5-30 15-40 4-4 9-7 14-10Z" fill="#f7f3e9" opacity="0.95" />
      <circle cx="60" cy="84" r="8" fill="#f7f3e9" />
    </svg>
  );
};
