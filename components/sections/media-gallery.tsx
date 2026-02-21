"use client";

import Image from "next/image";
import { mediaUrl } from "@/lib/site";

type Props = {
  files: string[];
  title: string;
  isVideo?: (name: string) => boolean;
};

const defaultVideo = (name: string) => /\.(mp4|webm|mov)$/i.test(name);

export const MediaGallery = ({ files, title, isVideo = defaultVideo }: Props) => {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-emerald-950">{title}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((file) => (
          <div key={file} className="overflow-hidden rounded-2xl border border-emerald-900/15 bg-white">
            {isVideo(file) ? (
              <video controls className="h-60 w-full object-cover">
                <source src={mediaUrl(file)} />
              </video>
            ) : (
              <div className="relative h-60">
                <Image src={mediaUrl(file)} alt={file} fill className="object-cover" unoptimized />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
