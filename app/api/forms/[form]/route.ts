import { NextRequest, NextResponse } from "next/server";
import { saveSubmission, type SupportedForm } from "@/lib/form-integrations";

const forms: SupportedForm[] = ["booking", "ask", "affiliate"];

export async function POST(req: NextRequest, context: { params: Promise<{ form: string }> }) {
  const { form } = await context.params;

  if (!forms.includes(form as SupportedForm)) {
    return NextResponse.json({ error: "Unsupported form" }, { status: 400 });
  }

  try {
    const payload = (await req.json()) as Record<string, unknown>;
    const result = await saveSubmission(form as SupportedForm, payload);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Submission failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
