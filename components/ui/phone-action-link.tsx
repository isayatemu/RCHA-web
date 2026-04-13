"use client";

import { useMemo, useSyncExternalStore } from "react";
import { business } from "@/data/business";

const mobileRegex = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i;

type PhoneActionLinkProps = {
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  phone?: string;
  whatsappHref?: string;
};

export const PhoneActionLink = ({ className, ariaLabel, children, phone, whatsappHref }: PhoneActionLinkProps) => {
  const resolvedPhone = phone ?? business.phone;
  const resolvedWhatsappHref = whatsappHref ?? business.socials.whatsapp;
  const telHref = useMemo(() => `tel:${resolvedPhone.replace(/\s+/g, "")}`, [resolvedPhone]);
  const isMobile = useSyncExternalStore<boolean>(
    () => () => undefined,
    () => {
      if (typeof navigator === "undefined") return true;
      return mobileRegex.test(navigator.userAgent || "");
    },
    () => true,
  );

  const href = isMobile ? telHref : resolvedWhatsappHref;
  const target = isMobile ? undefined : "_blank";
  const rel = isMobile ? undefined : "noreferrer";

  return (
    <a href={href} target={target} rel={rel} className={className} aria-label={ariaLabel}>
      {children ?? resolvedPhone}
    </a>
  );
};
