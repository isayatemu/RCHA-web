"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";

const fieldClass = "mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm outline-none focus:border-maroon-900";

export const AffiliateForm = () => {
  const { locale } = useLocale();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(false);
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/forms/affiliate", {
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
        <label className="text-sm">Phone<input name="phone" required className={fieldClass} /></label>
        <label className="text-sm">Email<input name="email" type="email" required className={fieldClass} /></label>
        <label className="text-sm">Location<input name="location" required className={fieldClass} /></label>
        <label className="text-sm md:col-span-2">Experience<textarea name="experience" rows={3} required className={fieldClass} /></label>
        <label className="text-sm md:col-span-2">Why interested?<textarea name="reason" rows={4} required className={fieldClass} /></label>
        <button type="submit" className="w-max rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white hover:bg-maroon-800">
          {locale === "sw" ? "Tuma Maombi" : "Submit Application"}
        </button>
      </div>
      {error && <p className="mt-3 text-sm text-rose-700">{error}</p>}
      {done && <p className="mt-3 text-sm text-emerald-900">{locale === "sw" ? "Maombi yamepokelewa." : "Application received."}</p>}
    </form>
  );
};
