import { NextResponse } from "next/server";

import { parseEnquiry } from "@/lib/parse-enquiry";
import { sendEnquiryEmail } from "@/lib/send-enquiry-email";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const payload = parseEnquiry(raw);
  if (!payload) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  try {
    const result = await sendEnquiryEmail(payload);
    return NextResponse.json({ ok: true, id: result.id });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not send email.";
    console.error("[enquire]", message);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
