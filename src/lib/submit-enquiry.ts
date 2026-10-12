import type { EnquiryPayload } from "@/types/enquiry";

type SubmitResult = { ok: true } | { ok: false; message: string };

/** Browser → /api/enquire. Returns a simple ok/error for form UI. */
export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/enquire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data: unknown = await response.json().catch(() => null);
      const message =
        data &&
        typeof data === "object" &&
        "error" in data &&
        typeof data.error === "string"
          ? data.error
          : "Request failed.";
      return { ok: false, message };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: "Network error." };
  }
}
