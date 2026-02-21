type IconProps = { className?: string };

export const TikTokIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M16.7 2c.3 1.8 1.4 3.2 3.1 4 .6.3 1.3.5 2.2.5v3.4c-1.2 0-2.3-.2-3.4-.7-.7-.3-1.3-.7-1.9-1.1v6.8c0 3.9-3.1 7.1-7 7.1S2.7 18.8 2.7 15s3.1-7.1 7-7.1c.4 0 .8 0 1.2.1v3.5a3.7 3.7 0 0 0-1.2-.2 3.7 3.7 0 0 0 0 7.4 3.7 3.7 0 0 0 3.7-3.8V2h3.3z" />
  </svg>
);

export const InstagramIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M14 8V6.5c0-.9.7-1.5 1.6-1.5H18V2h-2.7C12.4 2 11 3.9 11 6.3V8H8v3h3v11h3V11h3l.5-3H14z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.7 15l-1.2 4.3 4.4-1.1A10 10 0 1 0 12 2Zm5.8 14.1c-.2.6-1 1.1-1.6 1.2-.4.1-.9.2-2.8-.6-2.4-1-3.9-3.5-4-3.6-.1-.2-1-1.3-1-2.5s.6-1.9.8-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2.2.8 2.3.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.4-.5.5-.2.2-.4.4-.2.7.2.3.8 1.3 1.8 2 .3.3 1 .8 1.2.9.3.2.5.2.7 0 .2-.2.8-.9 1-.9.2 0 .4 0 .6.1l1.8.8c.3.1.5.2.6.4.1.1.1.8-.1 1.4Z" />
  </svg>
);
