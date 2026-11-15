import type { Metadata } from "next";
import Link from "next/link";

import { consoleHref } from "@/components/layout/navigation";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { MessageCard } from "./MessageCard";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PineryZ at info@pineryz.com about blockchain infrastructure, partnerships, and VaultOS.",
};

const areas = [
  {
    title: "Business and partnership inquiries",
    text: "A subject an email can cover for a potential customer or business partner.",
  },
  {
    title: "Blockchain and Web3 development",
    text: "A subject an email can cover for work on blockchain infrastructure and Web3 applications.",
  },
  {
    title: "Technology collaborations",
    text: "A subject an email can cover for a practical technology collaboration.",
  },
  {
    title: "Developer opportunities",
    text: "A subject an email can cover. Open roles are listed on the careers page.",
  },
] as const;

export default function ContactPage() {
  return (
    <MarketingShell>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Contact</p>
            <h1>Let&apos;s Build Something Meaningful Together.</h1>
            <p className={styles.lede}>
              PineryZ is a technology company working on blockchain infrastructure and practical
              Web3 applications. VaultOS is its flagship on-chain vault infrastructure project.
              Potential customers, business partners, developers, and collaborators can reach the
              company by email.
            </p>
          </div>
        </header>
        <div className={styles.body}>
          <MessageCard />

          <section className={styles.panel} aria-labelledby="careers-heading">
            <h2 id="careers-heading">Looking for a role?</h2>
            <p>Open positions and applications are on the careers page.</p>
            <div className={styles.actions}>
              <Link href="/careers" className={styles.secondary}>
                Go to Careers
              </Link>
            </div>
          </section>

          <section className={styles.panel} aria-labelledby="areas-heading">
            <h2 id="areas-heading">Collaboration areas</h2>
            <p>An email can cover any of these subjects.</p>
            <ul className={styles.items}>
              {areas.map((area) => (
                <li key={area.title}>
                  <h3 className={styles.itemTitle}>{area.title}</h3>
                  <p className={styles.itemText}>{area.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.panel} aria-labelledby="continue-heading">
            <h2 id="continue-heading">Continue</h2>
            <p>See the product introduction, or open the demonstration console.</p>
            <div className={styles.actions}>
              <Link href="/vaultos" className={styles.primary}>
                Explore VaultOS
              </Link>
              <a href={consoleHref} className={styles.secondary}>
                Open the demonstration
              </a>
            </div>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
