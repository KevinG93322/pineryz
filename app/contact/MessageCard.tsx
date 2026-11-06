"use client";

import { useId, useState, type FormEvent } from "react";

import styles from "./page.module.css";

const CONTACT_EMAIL = "info@pineryz.com";
const MAX_CV_BYTES = 5 * 1024 * 1024;

type Tab = "call" | "message";

export function MessageCard() {
  const formId = useId();
  const [tab, setTab] = useState<Tab>("message");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = text(data, "firstName");
    const lastName = text(data, "lastName");
    const email = text(data, "email");
    const company = text(data, "company");
    const jobTitle = text(data, "jobTitle");
    const building = text(data, "building");
    const calendar = text(data, "calendar");
    const cv = data.get("cv");
    const file = cv instanceof File && cv.size > 0 ? cv : null;

    if (!firstName || !lastName || !email || !company || !jobTitle) {
      setError("Fill in first name, last name, work email, company name, and job title.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid work email.");
      return;
    }

    if (calendar && !isHttpUrl(calendar)) {
      setError("The calendar link needs to start with http:// or https://.");
      return;
    }

    if (file && !isAllowedCv(file)) {
      setError("The CV needs to be a PDF, DOC, or DOCX file of 5 MB or less.");
      return;
    }

    const lines = [
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Work email: ${email}`,
      `Company name: ${company}`,
      `Job title: ${jobTitle}`,
      building ? `What they are building: ${building}` : "",
      calendar ? `Calendar link: ${calendar}` : "",
      file ? `CV to attach: ${file.name}` : "",
    ].filter(Boolean);

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Message for PineryZ",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setNotice(
      file
        ? `Your email application should open a message to ${CONTACT_EMAIL}. Attach ${file.name} before sending. This page does not upload the file.`
        : `Your email application should open a message to ${CONTACT_EMAIL}.`,
    );
    window.location.href = href;
  }

  return (
    <section className={`${styles.panel} ${styles.messagePanel}`} id="message" aria-labelledby="touch-heading">
      <div className={styles.tabs} role="tablist" aria-label="Contact options">
        <button
          type="button"
          role="tab"
          id={`${formId}-call-tab`}
          className={styles.tab}
          aria-selected={tab === "call"}
          aria-controls={`${formId}-call-panel`}
          onClick={() => setTab("call")}
        >
          Schedule a call
        </button>
        <button
          type="button"
          role="tab"
          id={`${formId}-message-tab`}
          className={styles.tab}
          aria-selected={tab === "message"}
          aria-controls={`${formId}-message-panel`}
          onClick={() => setTab("message")}
        >
          Send a message
        </button>
      </div>

      <div
        role="tabpanel"
        id={`${formId}-call-panel`}
        aria-labelledby={`${formId}-call-tab`}
        hidden={tab !== "call"}
      >
        <h2 id={tab === "call" ? "touch-heading" : undefined}>Schedule a call</h2>
        <p>
          This page does not include a booking calendar. Add your calendar link in a message, or
          email {CONTACT_EMAIL}.
        </p>
        <button type="button" className={styles.submit} onClick={() => setTab("message")}>
          Send a message
        </button>
      </div>

      <div
        role="tabpanel"
        id={`${formId}-message-panel`}
        aria-labelledby={`${formId}-message-tab`}
        hidden={tab !== "message"}
      >
        <h2 id={tab === "message" ? "touch-heading" : undefined}>Let&apos;s talk</h2>
        <p>
          Leave your details and a few words on what you have in mind. Sending opens an email to{" "}
          {CONTACT_EMAIL}.
        </p>
        <form className={styles.form} onSubmit={openEmail} noValidate>
          <div className={styles.pair}>
            <input name="firstName" autoComplete="given-name" placeholder="First name*" aria-label="First name" required />
            <input name="lastName" autoComplete="family-name" placeholder="Last name*" aria-label="Last name" required />
          </div>
          <input name="email" type="email" autoComplete="email" placeholder="Work email*" aria-label="Work email" required />
          <div className={styles.pair}>
            <input name="company" autoComplete="organization" placeholder="Company name*" aria-label="Company name" required />
            <input name="jobTitle" autoComplete="organization-title" placeholder="Job title*" aria-label="Job title" required />
          </div>
          <textarea
            name="building"
            rows={4}
            placeholder="Tell us what you're building (optional)"
            aria-label="Tell us what you're building"
          />
          <input
            name="calendar"
            type="url"
            inputMode="url"
            placeholder="Calendar booking URL (optional)"
            aria-label="Calendar booking URL"
          />
          <label className={styles.file}>
            <span>CV (optional)</span>
            <input name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" aria-label="CV" />
          </label>
          {error ? (
            <p className={styles.formError} role="alert">
              {error}
            </p>
          ) : null}
          {notice ? (
            <p className={styles.formNote} role="status">
              {notice}
            </p>
          ) : null}
          <button type="submit" className={styles.submit}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function text(data: FormData, name: string) {
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

function isAllowedCv(file: File) {
  const name = file.name.toLowerCase();
  const allowed = name.endsWith(".pdf") || name.endsWith(".doc") || name.endsWith(".docx");
  return allowed && file.size <= MAX_CV_BYTES;
}
