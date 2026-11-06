import type { Metadata } from "next";
import Link from "next/link";

import { roles } from "@/app/careers/roles";
import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "PineryZ documents, including the VaultOS whitepaper and open role descriptions.",
};

export default function ResourcesPage() {
  return (
    <MarketingShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Resources</p>
          <h1>Documents</h1>
          <p className={styles.lede}>
            Product material for VaultOS, and role descriptions for people
            interested in joining PineryZ.
          </p>
        </div>
      </section>

      <div className={styles.body}>
        <section id="whitepaper" className={styles.panel}>
          <h2>VaultOS whitepaper</h2>
          <p>
            The VaultOS whitepaper covers the product direction for on-chain
            vault infrastructure under a business&apos;s own name and symbol.
          </p>
          <p className={styles.actions}>
            <a
              className={styles.primary}
              href="/docs/vaultos-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download whitepaper
            </a>
            <Link className={styles.secondary} href="/vaultos">
              Explore VaultOS
            </Link>
          </p>
        </section>

        <section id="job-descriptions" className={styles.panel}>
          <h2>Job descriptions</h2>
          <p>
            Open roles at PineryZ. Each page includes the role description and
            an application path to{" "}
            <a href="mailto:info@pineryz.com">info@pineryz.com</a>.
          </p>
          <ul className={styles.list}>
            {roles.map((role) => (
              <li key={role.slug}>
                <Link href={`/careers/${role.slug}`} className={styles.docLink}>
                  <span className={styles.docTitle}>{role.title}</span>
                  <span className={styles.docSummary}>{role.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.actions}>
            <Link className={styles.secondary} href="/careers">
              View all careers
            </Link>
          </p>
        </section>
      </div>
    </MarketingShell>
  );
}
