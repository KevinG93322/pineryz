"use client";

import { useState, type FormEvent } from "react";

import styles from "./job.module.css";

const DESTINATION = "info@pineryz.com";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export function ApplicationForm({ roleTitle }: { roleTitle: string }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSent(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");
    if (resume instanceof File && resume.size > MAX_RESUME_BYTES) {
      setError("The resume needs to be 5 MB or less.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: data,
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(
          payload?.error ||
            `The application could not be sent. Email ${DESTINATION} directly.`,
        );
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
    <form className={styles.form} id="apply" onSubmit={onSubmit}>
      <h2>Apply for this job</h2>
      <p className={styles.formNote}>
        Submit sends this application to {DESTINATION}. A resume is included when you add one.
      </p>
      <input type="hidden" name="role" value={roleTitle} />
      <label className={styles.honey}>
        Company website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        First name
        <input name="firstName" autoComplete="given-name" required />
      </label>
      <label>
        Last name
        <input name="lastName" autoComplete="family-name" required />
      </label>
      <label>
        Preferred first name
        <input name="preferredName" autoComplete="nickname" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <div className={styles.split}>
        <label>
          Country
          <input name="country" autoComplete="country-name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        City
        <input name="city" autoComplete="address-level2" />
      </label>
      <label>
        Resume
        <input name="resume" type="file" accept=".pdf,.doc,.docx,.txt,.rtf" />
      </label>
      <label>
        LinkedIn profile
        <input name="linkedin" type="url" placeholder="https://" />
      </label>
      <label>
        Website
        <input name="website" type="url" placeholder="https://" />
      </label>
      {error ? (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className={styles.formNote} role="status">
          Your application was sent to {DESTINATION}.
        </p>
      ) : null}
      <div className={styles.submitRow}>
        <button type="submit" disabled={sending}>
          {sending ? "Sending…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}
