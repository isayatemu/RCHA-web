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
  const safeName = path.basename(decoded);

  const filePath = path.join(process.cwd(), "imgs&vids", safeName);

  try {
    const buffer = await fs.readFile(filePath);
    const ext = path.extname(safeName).toLowerCase();
    const type = mimeByExt[ext] ?? "application/octet-stream";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }
}
