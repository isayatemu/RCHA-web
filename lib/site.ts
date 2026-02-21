import path from "path";

export const mediaRoot = path.join(process.cwd(), "imgs&vids");

export const mediaUrl = (fileName: string) => `/api/media/${encodeURIComponent(fileName)}`;

export const whatsappPrefill = (message: string) => {
  const clean = "255700000000";
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
};

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
