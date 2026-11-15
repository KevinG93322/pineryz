"use client";

import { useRef, useState, type FormEvent, type SyntheticEvent } from "react";

import styles from "./job.module.css";

const DESTINATION = "info@pineryz.com";
const DELIVERY_FRAME = "careers-apply-delivery";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx", ".txt", ".rtf"];

function field(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function inputNamed(form: HTMLFormElement, name: string) {
  const element = form.elements.namedItem(name);
  return element instanceof HTMLInputElement ? element : null;
}

export function ApplicationForm({ roleTitle }: { roleTitle: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const fileDelivery = useRef(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentResume, setSentResume] = useState(false);
  const [error, setError] = useState("");

  function enableFields(form: HTMLFormElement) {
    for (const element of form.elements) {
      if (element instanceof HTMLInputElement) element.disabled = false;
    }
  }

  function finishFileDelivery() {
    const form = formRef.current;
    fileDelivery.current = false;
    if (!form) {
      setSending(false);
      return;
    }
    enableFields(form);
    form.reset();
    setSending(false);
    setSentResume(true);
    setSent(true);
  }

  function onFrameLoad(event: SyntheticEvent<HTMLIFrameElement>) {
    if (!fileDelivery.current) return;
    try {
      const href = event.currentTarget.contentWindow?.location.href ?? "";
      if (!href || href === "about:blank") return;
    } catch {
      // FormSubmit answered from its own site, so the upload left the browser.
    }
    finishFileDelivery();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSent(false);
    setSentResume(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = field(data, "First name");
    const lastName = field(data, "Last name");
    const email = field(data, "Email");
    const preferredName = field(data, "Preferred first name");
    const country = field(data, "Country");
    const phone = field(data, "Phone");
    const city = field(data, "City");
    const linkedin = field(data, "LinkedIn");
    const website = field(data, "Website");
    const resume = data.get("attachment");
    const file = resume instanceof File && resume.size > 0 ? resume : null;

    if (!firstName || !lastName || !email) {
      setError("Fill in first name, last name, and email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    if (linkedin && !isHttpUrl(linkedin)) {
      setError("The LinkedIn profile needs to start with http:// or https://.");
      return;
    }

    if (website && !isHttpUrl(website)) {
      setError("The website needs to start with http:// or https://.");
      return;
    }

    if (file) {
      const name = file.name.toLowerCase();
      const allowed = ALLOWED_EXTENSIONS.some((extension) => name.endsWith(extension));
      if (!allowed || file.size > MAX_RESUME_BYTES) {
        setError(
          "The resume needs to be a PDF, DOC, DOCX, TXT, or RTF file of 5 MB or less.",
        );
        return;
      }
    }

    if (field(data, "companyWebsite")) {
      form.reset();
      setSent(true);
      return;
    }

    const replyTo = inputNamed(form, "_replyto");
    if (replyTo) replyTo.value = email;
    const sender = inputNamed(form, "name");
    if (sender) sender.value = `${firstName} ${lastName}`;

    if (file) {
      const honeypot = inputNamed(form, "companyWebsite");
      if (honeypot) honeypot.disabled = true;
      for (const element of form.elements) {
        if (
          element instanceof HTMLInputElement &&
          element.type !== "hidden" &&
          element.type !== "file" &&
          !element.value.trim()
        ) {
          element.disabled = true;
        }
      }
      fileDelivery.current = true;
      setSending(true);
      form.submit();
      return;
    }

    const outbound = new FormData();
    outbound.append("_subject", `Application — ${roleTitle}`);
    outbound.append("_template", "table");
    outbound.append("_captcha", "false");
    outbound.append("_replyto", email);
    outbound.append("name", `${firstName} ${lastName}`);
    outbound.append("Role", roleTitle);
    outbound.append("First name", firstName);
    outbound.append("Last name", lastName);
    if (preferredName) outbound.append("Preferred first name", preferredName);
    outbound.append("Email", email);
    if (country) outbound.append("Country", country);
    if (phone) outbound.append("Phone", phone);
    if (city) outbound.append("City", city);
    if (linkedin) outbound.append("LinkedIn", linkedin);
    if (website) outbound.append("Website", website);

    setSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: outbound,
      });
      const payload = (await response.json().catch(() => null)) as {
        success?: boolean | string;
        message?: string;
      } | null;
      const message = payload && typeof payload.message === "string" ? payload.message : "";
      const success = payload?.success === true || payload?.success === "true";

      if (!response.ok || !success) {
        if (/activation/i.test(message)) {
          setError(
            `Application delivery is not active yet. Open the confirmation email sent to ${DESTINATION}, confirm it, then submit again.`,
          );
          return;
        }
        setError(message || `The application could not be sent. Email ${DESTINATION} directly.`);
        return;
      }

      form.reset();
      setSent(true);
    } catch {
      setError(`The application could not be sent. Email ${DESTINATION} directly.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form
        ref={formRef}
        className={styles.form}
        id="apply"
        action={`https://formsubmit.co/${DESTINATION}`}
        method="POST"
        encType="multipart/form-data"
        target={DELIVERY_FRAME}
        onSubmit={onSubmit}
      >
        <h2>Apply for this job</h2>
        <p className={styles.formNote}>
          Submit sends this application to {DESTINATION}. A resume is included when you add one.
        </p>
        <input type="hidden" name="_subject" value={`Application — ${roleTitle}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_replyto" defaultValue="" />
        <input type="hidden" name="name" defaultValue="" />
        <input type="hidden" name="Role" value={roleTitle} />
        <label className={styles.honey}>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          First name
          <input name="First name" autoComplete="given-name" required />
        </label>
        <label>
          Last name
          <input name="Last name" autoComplete="family-name" required />
        </label>
        <label>
          Preferred first name
          <input name="Preferred first name" autoComplete="nickname" />
        </label>
        <label>
          Email
          <input name="Email" type="email" autoComplete="email" required />
        </label>
        <div className={styles.split}>
          <label>
            Country
            <input name="Country" autoComplete="country-name" />
          </label>
          <label>
            Phone
            <input name="Phone" type="tel" autoComplete="tel" />
          </label>
        </div>
        <label>
          City
          <input name="City" autoComplete="address-level2" />
        </label>
        <label>
          Resume
          <input name="attachment" type="file" accept=".pdf,.doc,.docx,.txt,.rtf" />
        </label>
        <label>
          LinkedIn profile
          <input name="LinkedIn" type="url" placeholder="https://" />
        </label>
        <label>
          Website
          <input name="Website" type="url" placeholder="https://" />
        </label>
        {error ? (
          <p className={styles.formError} role="alert">
            {error}
          </p>
        ) : null}
        {sent ? (
          <p className={styles.formNote} role="status">
            {sentResume
              ? `Your application and resume were sent to ${DESTINATION}.`
              : `Your application was sent to ${DESTINATION}.`}
          </p>
        ) : null}
        <div className={styles.submitRow}>
          <button type="submit" disabled={sending}>
            {sending ? "Sending…" : "Submit application"}
          </button>
        </div>
      </form>
      <iframe
        className={styles.deliveryFrame}
        name={DELIVERY_FRAME}
        title="Application delivery"
        onLoad={onFrameLoad}
      />
    </>
  );
}
