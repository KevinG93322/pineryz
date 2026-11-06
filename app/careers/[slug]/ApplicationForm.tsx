"use client";

import type { FormEvent } from "react";

import styles from "./job.module.css";

const email = "info@pineryz.com";

function field(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function fileName(data: FormData, name: string) {
  const value = data.get(name);
  if (value instanceof File && value.name) {
    return value.name;
  }
  return "";
}

export function ApplicationForm({ roleTitle }: { roleTitle: string }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const resume = fileName(data, "resume");
    const lines = [
      `Role: ${roleTitle}`,
      `First name: ${field(data, "firstName")}`,
      `Last name: ${field(data, "lastName")}`,
      `Preferred first name: ${field(data, "preferredName")}`,
      `Email: ${field(data, "email")}`,
      `Country: ${field(data, "country")}`,
      `Phone: ${field(data, "phone")}`,
      `City: ${field(data, "city")}`,
      `LinkedIn: ${field(data, "linkedin")}`,
      `Website: ${field(data, "website")}`,
      "",
      resume
        ? `Resume selected: ${resume}. Please attach this file before sending.`
        : "Resume: please attach the file before sending.",
    ];
    const href = `mailto:${email}?subject=${encodeURIComponent(
      `Application — ${roleTitle}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  }

  return (
    <form className={styles.form} id="apply" onSubmit={onSubmit}>
      <h2>Apply for this job</h2>
      <p className={styles.formNote}>
        Submit opens an email to {email}. Attach the resume in that email.
      </p>
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
      <div className={styles.submitRow}>
        <button type="submit">Submit application</button>
      </div>
    </form>
  );
}
