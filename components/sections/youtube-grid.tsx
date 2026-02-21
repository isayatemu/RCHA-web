"use client";

import Image from "next/image";
import { useState } from "react";
import { getYouTubeId } from "@/lib/site";

type Props = { urls: string[] };

export const YouTubeGrid = ({ urls }: Props) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {urls.map((url) => {
          const id = getYouTubeId(url);
          const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
          return (
            <button key={url} onClick={() => setActive(id)} className="group overflow-hidden rounded-2xl border border-emerald-900/20 text-left" type="button">
              <div className="relative h-52 w-full">
                <Image src={thumb} alt="YouTube thumbnail" fill className="object-cover transition group-hover:scale-105" unoptimized />
              </div>
              <div className="flex items-center justify-between bg-white p-3 text-sm text-emerald-900">
                <span>Watch Story</span>
                <span className="rounded-full bg-maroon-900 px-3 py-1 text-white">Play</span>
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <div className="rounded-2xl border border-emerald-900/15 bg-black p-2">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full rounded-xl"
              src={`https://www.youtube.com/embed/${active}`}
              title="YouTube player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
