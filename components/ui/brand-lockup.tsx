"use client";

import { LogoMark } from "@/components/ui/logo-mark";

type BrandLockupProps = {
  className?: string;
  markClassName?: string;
};

export const BrandLockup = ({ className = "", markClassName = "h-11 w-11" }: BrandLockupProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      <div className="leading-none">
        <p className="text-[1.32rem] font-black uppercase tracking-[0.085em] text-maroon-900">Rose</p>
        <p
          className="-mt-1 text-[1.58rem] italic text-emerald-900"
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', cursive" }}
        >
          Changa
        </p>
        <p className="-mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-emerald-900">Herbalist Africa</p>
      </div>
    </div>
  );
};
