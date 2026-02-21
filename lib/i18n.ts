export type Locale = "sw" | "en";

export const t = <T>(locale: Locale, sw: T, en: T) => (locale === "sw" ? sw : en);
