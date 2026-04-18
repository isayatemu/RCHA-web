import path from "path";
import { business } from "@/data/business";

export const mediaRoot = path.join(process.cwd(), "imgs&vids");
const tshFormatter = new Intl.NumberFormat("en-TZ");

export const mediaUrl = (assetPath: string) => {
  const [rawPath, rawQuery] = assetPath.split("?");

  const clean = rawPath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return rawQuery ? `/api/media/${clean}?${rawQuery}` : `/api/media/${clean}`;
};

export const whatsappPrefill = (message: string) => {
  const clean = business.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
};

export const formatTsh = (amount: number) => `Tsh ${tshFormatter.format(amount)}`;

export const getYouTubeId = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }
    return parsed.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
};
