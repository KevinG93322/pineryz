import type { ReactNode } from "react";

import styles from "@/app/layout.module.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <Header />
      <main id="main" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
