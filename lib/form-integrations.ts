import fs from "fs/promises";
import path from "path";

export type SupportedForm = "booking" | "ask" | "affiliate";

type SubmissionRecord = {
  formType: SupportedForm;
  payload: Record<string, unknown>;
  submittedAt: string;
};

const hasSupabaseConfig = () => Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
const hasResendConfig = () => Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM && process.env.RESEND_TO);

const persistLocal = async (record: SubmissionRecord) => {
  const targetDir = path.join(process.cwd(), "submissions");
  await fs.mkdir(targetDir, { recursive: true });

  const file = path.join(targetDir, `${record.formType}.json`);
  let current: unknown[] = [];

  try {
    const read = await fs.readFile(file, "utf8");
    current = JSON.parse(read);
    if (!Array.isArray(current)) current = [];
  } catch {
    current = [];
  }

  current.push(record);
  await fs.writeFile(file, JSON.stringify(current, null, 2), "utf8");
};

const persistSupabase = async (record: SubmissionRecord) => {
  const url = `${process.env.SUPABASE_URL}/rest/v1/form_submissions`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      form_type: record.formType,
      payload: record.payload,
      submitted_at: record.submittedAt,
    }),
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status}`);
  }
};

const sendResendNotification = async (record: SubmissionRecord) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM,
      to: [process.env.RESEND_TO],
      subject: `New ${record.formType} submission - Rose Changa`,
      html: `<h2>New ${record.formType} submission</h2><pre>${JSON.stringify(record.payload, null, 2)}</pre><p>Submitted at: ${record.submittedAt}</p>`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend email failed: ${response.status}`);
  }
};

export const saveSubmission = async (formType: SupportedForm, payload: Record<string, unknown>) => {
  const record: SubmissionRecord = {
    formType,
    payload,
    submittedAt: new Date().toISOString(),
  };

  const mode = process.env.FORM_STORAGE_MODE ?? "provider";
  const stored = mode === "provider" && hasSupabaseConfig() ? "supabase" : "local";

  if (stored === "supabase") {
    await persistSupabase(record);
  } else {
    await persistLocal(record);
  }

  let emailed = false;
  let emailError: string | null = null;

  if (hasResendConfig()) {
    try {
      await sendResendNotification(record);
      emailed = true;
    } catch (error) {
      emailError = error instanceof Error ? error.message : "Resend email failed";
      console.error("Resend notification failed", error);
    }
  }

  return {
    stored,
    emailed,
    emailError,
  };
};
