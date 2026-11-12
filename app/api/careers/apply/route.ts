import { NextResponse } from "next/server";

const DESTINATION = "info@pineryz.com";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx", ".txt", ".rtf"];

function text(data: FormData, name: string, max: number) {
  const value = data.get(name);
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function resumeFile(value: FormDataEntryValue | null) {
  if (!value || typeof value === "string" || value.size === 0) {
    return null;
  }
  return value;
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "The application could not be read." },
      { status: 400 },
    );
  }

  if (text(data, "companyWebsite", 200)) {
    return NextResponse.json({ ok: true });
  }

  const role = text(data, "role", 200);
  const firstName = text(data, "firstName", 100);
  const lastName = text(data, "lastName", 100);
  const preferredName = text(data, "preferredName", 100);
  const email = text(data, "email", 200);
  const country = text(data, "country", 100);
  const phone = text(data, "phone", 50);
  const city = text(data, "city", 100);
  const linkedin = text(data, "linkedin", 300);
  const website = text(data, "website", 300);
  const file = resumeFile(data.get("resume"));

  if (!role || !firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "Fill in first name, last name, and email." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  if (linkedin && !isHttpUrl(linkedin)) {
    return NextResponse.json(
      { error: "The LinkedIn profile needs to start with http:// or https://." },
      { status: 400 },
    );
  }

  if (website && !isHttpUrl(website)) {
    return NextResponse.json(
      { error: "The website needs to start with http:// or https://." },
      { status: 400 },
    );
  }

  if (file) {
    const name = ("name" in file && typeof file.name === "string" ? file.name : "").toLowerCase();
    const allowed = ALLOWED_EXTENSIONS.some((extension) => name.endsWith(extension));
    if (!allowed || file.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        {
          error:
            "The resume needs to be a PDF, DOC, DOCX, TXT, or RTF file of 5 MB or less.",
        },
        { status: 400 },
      );
    }
  }

  const outbound = new FormData();
  outbound.append("_subject", `Application — ${role}`);
  outbound.append("_template", "table");
  outbound.append("_captcha", "false");
  outbound.append("_replyto", email);
  outbound.append("Role", role);
  outbound.append("First name", firstName);
  outbound.append("Last name", lastName);
  if (preferredName) outbound.append("Preferred first name", preferredName);
  outbound.append("Email", email);
  if (country) outbound.append("Country", country);
  if (phone) outbound.append("Phone", phone);
  if (city) outbound.append("City", city);
  if (linkedin) outbound.append("LinkedIn", linkedin);
  if (website) outbound.append("Website", website);
  outbound.append("name", `${firstName} ${lastName}`);
  if (file) {
    const filename = "name" in file && typeof file.name === "string" ? file.name : "resume";
    outbound.append("attachment", file, filename);
  }

  let response: Response;
  try {
    response = await fetch(`https://formsubmit.co/ajax/${DESTINATION}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: outbound,
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { error: "The application could not be sent. Email info@pineryz.com directly." },
      { status: 502 },
    );
  }

  const raw = await response.text();
  let payload: { success?: boolean | string; message?: string } | null = null;
  try {
    payload = JSON.parse(raw) as { success?: boolean | string; message?: string };
  } catch {
    payload = null;
  }

  const message = payload && typeof payload.message === "string" ? payload.message : "";
  const success = payload?.success === true || payload?.success === "true";

  if (!response.ok || !success) {
    if (/activation/i.test(message)) {
      return NextResponse.json(
        {
          error:
            "Application delivery is not active yet. Open the confirmation email sent to info@pineryz.com, confirm it, then submit again.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "The application could not be sent. Email info@pineryz.com directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
