"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";

const fieldClass = "mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm outline-none focus:border-maroon-900";

export const AskForm = () => {
  const { locale } = useLocale();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(false);
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/forms/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({ error: "Submission failed" }));
      setError(data.error || "Submission failed");
      return;
    }

    setDone(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-emerald-900/15 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">Name<input name="name" required className={fieldClass} /></label>
        <label className="text-sm">Phone or Email<input name="contact" required className={fieldClass} /></label>
        <label className="text-sm md:col-span-2">Question<textarea name="question" rows={5} required className={fieldClass} /></label>
        <label className="flex items-start gap-2 text-xs text-emerald-900/80 md:col-span-2">
          <input type="checkbox" required name="consent" className="mt-1" />
          {locale === "sw" ? "Ninakubali sera ya faragha na matumizi ya taarifa kwa ushauri." : "I agree to the privacy terms for consultation support."}
        </label>
        <button type="submit" className="w-max rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white hover:bg-maroon-800">
          {locale === "sw" ? "Tuma Swali" : "Send Question"}
        </button>
      </div>
      {error && <p className="mt-3 text-sm text-rose-700">{error}</p>}
      {done && <p className="mt-3 text-sm text-emerald-900">{locale === "sw" ? "Swali limepokelewa." : "Your question has been received."}</p>}
    </form>
  );
};
