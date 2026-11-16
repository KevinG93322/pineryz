import type { Metadata } from "next";

import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./page.module.css";

const contactEmail = "info@pineryz.com";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the PineryZ site handles names, email addresses, and resumes from messages, job applications, and call bookings.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>PineryZ</p>
            <h1>Privacy</h1>
            <p className={styles.lede}>
              This page describes what the PineryZ website does with the details a visitor
              submits. It covers this site only.
            </p>
          </div>
        </header>
        <div className={styles.body}>
          <section className={styles.panel} aria-labelledby="messages-heading">
            <h2 id="messages-heading">Messages</h2>
            <p>
              The contact form asks for a first name, last name, work email, company name, and
              job title. A note about what the visitor is building is optional. Submit sends that
              message to{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. The site does not keep its
              own copy. The message is delivered to that inbox so PineryZ can reply.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="applications-heading">
            <h2 id="applications-heading">Job applications</h2>
            <p>
              An application asks for a first name, last name, and email. A preferred name,
              country, phone, city, LinkedIn profile, website, and resume are optional. The role
              name is included. Submit sends the application, and the resume when one is
              attached, to{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. PineryZ uses it to consider
              the application. The site does not keep its own copy of the file.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="calls-heading">
            <h2 id="calls-heading">Scheduled calls</h2>
            <p>
              Schedule a call opens a Calendly calendar for a 30-minute meeting. The name, email
              address, and chosen time are entered on Calendly’s page, not in a PineryZ form.
              Calendly handles that booking. Their notice is at{" "}
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
                calendly.com/privacy
              </a>
              .
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="use-heading">
            <h2 id="use-heading">How the details are used</h2>
            <p>
              PineryZ uses a message to reply, an application to review a candidate, and a
              booking to hold the call. These details are not sold. Questions about a message or
              an application can be sent to{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
