"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { whatsappPrefill } from "@/lib/site";

const fieldClass = "mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm outline-none focus:border-maroon-900";

export const BookingForm = () => {
  const { locale } = useLocale();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [link, setLink] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setDone(false);

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/forms/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({ error: "Submission failed" }));
      setError(data.error || "Submission failed");
      return;
    }

    const message = `Booking Request\nName: ${payload.fullName}\nLocation: ${payload.location}\nInterest: ${payload.interest}\nConcern: ${payload.concerns}`;
    setLink(whatsappPrefill(message));
    setDone(true);
    event.currentTarget.reset();
  };

  return (
    <div className="rounded-3xl border border-emerald-900/15 bg-white p-6 shadow-sm">
      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">Full Name<input name="fullName" required className={fieldClass} /></label>
        <label className="text-sm">Phone<input name="phone" required className={fieldClass} /></label>
        <label className="text-sm">Email<input name="email" type="email" className={fieldClass} /></label>
        <label className="text-sm">Location<input name="location" required placeholder="Country / City" className={fieldClass} /></label>
        <label className="text-sm">Interest
          <select name="interest" className={fieldClass} required>
            <option value="immune">{locale === "sw" ? "Usaidizi wa Kinga ya Mwili" : "Immune support"}</option>
            <option value="digestive">{locale === "sw" ? "Utulivu wa Mmeng'enyo" : "Digestive comfort"}</option>
            <option value="kidney">{locale === "sw" ? "Usaidizi wa Figo" : "Kidney support"}</option>
            <option value="hepatitis-support">
              {locale === "sw" ? "Usaidizi wa Homa ya Ini" : "Hepatitis Support"}
            </option>
            <option value="sugar-pressure">
              {locale === "sw" ? "Ustawi wa Sukari/Presha" : "Sugar/Pressure wellness"}
            </option>
            <option value="womens-health">
              {locale === "sw" ? "Usaidizi wa Mzunguko wa Hedhi" : "Womens cycle support"}
            </option>
            <option value="mens-health">
              {locale === "sw" ? "Usaidizi wa Afya ya Wanaume" : "Mens wellness support"}
            </option>
          </select>
        </label>
        <label className="text-sm">Duration<input name="duration" placeholder="e.g. 3 months" className={fieldClass} /></label>
        <label className="text-sm md:col-span-2">Symptoms / Concerns<textarea name="concerns" required rows={4} className={fieldClass} /></label>
        <label className="text-sm">Preferred Contact Method
          <select name="contactMethod" className={fieldClass}>
            <option>WhatsApp</option>
            <option>Phone</option>
            <option>Email</option>
          </select>
        </label>
        <label className="mt-7 flex items-start gap-2 text-xs text-emerald-900/80">
          <input type="checkbox" name="consent" required className="mt-1" />
          {locale === "sw" ? "Ninakubali masharti ya faragha na disclaimer ya huduma za ustawi." : "I consent to privacy terms and wellness disclaimer."}
        </label>
        <div className="md:col-span-2">
          <button type="submit" className="rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold text-white hover:bg-maroon-800">{locale === "sw" ? "Tuma Booking" : "Submit Booking"}</button>
        </div>
      </form>

      {error && <p className="mt-4 text-sm text-rose-700">{error}</p>}
      {done && (
        <div className="mt-5 rounded-2xl border border-emerald-700/20 bg-emerald-50 p-4 text-sm text-emerald-900">
          <p>{locale === "sw" ? "Asante, ombi limepokelewa." : "Thank you, your request has been received."}</p>
          <a href={link} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-maroon-900 underline">
            {locale === "sw" ? "Fungua WhatsApp na ujumbe tayari" : "Open WhatsApp with prefilled message"}
          </a>
        </div>
      )}
    </div>
  );
};
