"use client";

import { useId, useState, type FormEvent } from "react";

import styles from "./page.module.css";

const CONTACT_EMAIL = "info@pineryz.com";
const CALENDLY_URL = "https://calendly.com/pineryz-info/30min";
const CALENDLY_EMBED = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=0f5f73`;

type Tab = "call" | "message";

export function MessageCard() {
  const formId = useId();
  const [tab, setTab] = useState<Tab>("message");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSent(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = text(data, "firstName");
    const lastName = text(data, "lastName");
    const email = text(data, "email");
    const company = text(data, "company");
    const jobTitle = text(data, "jobTitle");
    const building = text(data, "building");

    if (!firstName || !lastName || !email || !company || !jobTitle) {
      setError("Fill in first name, last name, work email, company name, and job title.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid work email.");
      return;
    }

    if (text(data, "companyWebsite")) {
      form.reset();
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Message for PineryZ — ${company}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
          name: `${firstName} ${lastName}`,
          "First name": firstName,
          "Last name": lastName,
          "Work email": email,
          "Company name": company,
          "Job title": jobTitle,
          ...(building ? { "What they are building": building } : {}),
        }),
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
            `Message delivery is not active yet. Open the confirmation email sent to ${CONTACT_EMAIL}, confirm it, then submit again.`,
          );
          return;
        }
        setError(message || `The message could not be sent. Email ${CONTACT_EMAIL} directly.`);
        return;
      }

      form.reset();
      setSent(true);
    } catch {
      setError(`The message could not be sent. Email ${CONTACT_EMAIL} directly.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className={`${styles.panel} ${styles.messagePanel} ${tab === "call" ? styles.callPanel : ""}`}
      id="message"
      aria-labelledby="touch-heading"
    >
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
          Choose a time for a 30-minute call. Booking is handled by{" "}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Calendly
          </a>
          .
        </p>
        {tab === "call" ? (
          <iframe className={styles.calendly} title="Schedule a 30-minute call" src={CALENDLY_EMBED} />
        ) : null}
      </div>

      <div
        role="tabpanel"
        id={`${formId}-message-panel`}
        aria-labelledby={`${formId}-message-tab`}
        hidden={tab !== "message"}
      >
        <h2 id={tab === "message" ? "touch-heading" : undefined}>Let&apos;s talk</h2>
        <p>
          Leave your details and a few words on what you have in mind. This sends a message to{" "}
          {CONTACT_EMAIL}.
        </p>
        <form className={styles.form} onSubmit={sendMessage} noValidate>
          <label className={styles.honey} aria-hidden="true">
            Company website
            <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
          </label>
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
          {error ? (
            <p className={styles.formError} role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className={styles.formNote} role="status">
              Your message was sent to {CONTACT_EMAIL}.
            </p>
          ) : null}
          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? "Sending…" : "Send message"}
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


