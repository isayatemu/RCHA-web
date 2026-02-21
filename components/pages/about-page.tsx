"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { youtubeVideos } from "@/data/youtube";
import { YouTubeGrid } from "@/components/sections/youtube-grid";

export const AboutPageClient = () => {
  const { locale } = useLocale();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-900/15 bg-white p-8">
        <h1 className="text-4xl font-semibold">{locale === "sw" ? "Historia Yetu" : "Our Story"}</h1>
        <p className="mt-4 leading-relaxed text-emerald-900/85">
          {locale === "sw"
            ? "Rose Changa Herbalist Africa imejengwa juu ya uzoefu wa zaidi ya miaka 10 katika afya asilia. Kutoka ofisi yetu ya Njiro Commercial Center, Office Number 9, Arusha, tumekuwa tukihudumia wateja wa ndani na diaspora kwa heshima, faragha, na maadili ya kitaalamu."
            : "Rose Changa Herbalist Africa is built on 10+ years of traditional wellness experience. From our office at Njiro Commercial Center, Office Number 9, Arusha, we support local and diaspora clients with privacy, ethics, and practical follow-up."}
        </p>
        <p className="mt-3 leading-relaxed text-emerald-900/85">
          {locale === "sw"
            ? "Dira yetu ni kufikia kila mkoa wa Tanzania na kusaidia diaspora kwa ushauri wa mtandaoni na ufuatiliaji wa karibu."
            : "Our vision is to reach every region in Tanzania while extending structured support to diaspora clients."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Herbal Wisdom Timeline</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            ["2014", locale === "sw" ? "Mwanzo wa huduma Arusha" : "Practice launched in Arusha"],
            ["2018", locale === "sw" ? "Huduma kwa diaspora ilianza" : "Diaspora client support started"],
            ["2026", locale === "sw" ? "Mpango wa upanuzi Tanzania nzima" : "Expansion roadmap across Tanzania"],
          ].map(([year, text]) => (
            <div key={String(year)} className="rounded-2xl border border-emerald-900/15 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-maroon-900">{year}</p>
              <p className="mt-2 text-sm text-emerald-900/85">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Media</h2>
        <div className="mt-4">
          <YouTubeGrid urls={youtubeVideos} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Certificates</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="rounded-2xl border border-dashed border-emerald-900/30 bg-white p-6 text-center">
              <p className="text-sm font-medium">Cheti {item}</p>
              <p className="mt-2 text-xs text-emerald-900/70">coming soon</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
