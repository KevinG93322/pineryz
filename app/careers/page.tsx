import type { Metadata } from "next";
import Link from "next/link";

import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./page.module.css";
import { roles } from "./roles";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at PineryZ for engineers and designers building on-chain asset management infrastructure.",
};

export default function CareersPage() {
  return (
    <MarketingShell>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Join Our Mission</p>
            <h1>
              Help Us Build the
              <br />
              Infrastructure of Tomorrow
            </h1>
            <p className={styles.lede}>
              We are architecting the future of the infrastructure for On-Chain Asset
              management. Join a team of visionary engineers and designers.
            </p>
          </div>
        </header>
        <section className={styles.roles} aria-labelledby="roles-heading">
          <div className={styles.rolesHeader}>
            <h2 id="roles-heading">Our roles — let’s find one that fits</h2>
            <p>
              We&apos;re always on the hunt for rare gems at every level and with every
              background
            </p>
            <h3>Current Openings</h3>
          </div>
          <ul className={styles.roleList}>
            {roles.map((role) => (
              <li key={role.slug}>
                <Link className={styles.roleLink} href={`/careers/${role.slug}`}>
                  <span>
                    <span className={styles.roleTitle}>{role.title}</span>
                    <span className={styles.roleSummary}>{role.summary}</span>
                  </span>
                  <span className={styles.chevron} aria-hidden="true">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </MarketingShell>
  );
}
