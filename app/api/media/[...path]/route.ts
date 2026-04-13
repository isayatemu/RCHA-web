import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const mimeByExt: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
};

export async function GET(_req: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await context.params;
  const decoded = segments.map((segment) => decodeURIComponent(segment)).join("/");
  const normalized = path.posix.normalize(decoded.replace(/\\/g, "/")).replace(/^\/+/, "");

  if (!normalized || normalized === "." || normalized === ".." || normalized.startsWith("../") || normalized.includes("/../")) {
    return NextResponse.json({ error: "Invalid media path" }, { status: 400 });
  }

  const mediaRoot = path.resolve(process.cwd(), "imgs&vids");
  const filePath = path.resolve(mediaRoot, normalized);

  // Prevent path traversal outside imgs&vids root.
  if (filePath !== mediaRoot && !filePath.startsWith(`${mediaRoot}${path.sep}`)) {
    return NextResponse.json({ error: "Invalid media path" }, { status: 400 });
  }

  try {
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    const buffer = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const type = mimeByExt[ext] ?? "application/octet-stream";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": type,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }
}
