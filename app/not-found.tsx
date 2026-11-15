import type { Metadata } from "next";
import Link from "next/link";

import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This address is not part of the PineryZ site.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <MarketingShell>
      <section className={styles.page}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>404</p>
          <h1>Page not found</h1>
          <p className={styles.lede}>This address is not part of the PineryZ site.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/">
              Home
            </Link>
            <Link className={styles.secondary} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
