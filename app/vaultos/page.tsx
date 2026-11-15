import type { Metadata } from "next";
import Link from "next/link";

import { consoleHref } from "@/components/layout/navigation";
import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "VaultOS",
  description:
    "VaultOS is a demonstration of an on-chain vault foundation. It shows a vault under a business’s own name and symbol, after the console checks the creation transaction. It is not a live service.",
};

const startingPoint = [
  {
    title: "A standardized on-chain vault foundation",
    text: "One reusable vault pattern, so a business does not have to assemble that infrastructure alone.",
  },
  {
    title: "Branded vaults with configurable names and symbols",
    text: "The business chooses the name and the symbol. Its customers see the business. PineryZ stays underneath.",
  },
  {
    title: "An extensible architecture for future product capabilities",
    text: "Start with the vault foundation, and leave room for the yield platform that comes later.",
  },
] as const;

const steps = [
  {
    index: "01",
    title: "Create the vault",
    text: "A vault is created on-chain under the business’s own name and symbol.",
  },
  {
    index: "02",
    title: "Verify the creation",
    text: "The console checks the on-chain creation transaction before anything is registered.",
  },
  {
    index: "03",
    title: "Register the vault",
    text: "After that check, the registry records the vault so it can be reviewed in the console.",
  },
] as const;

const audiences = [
  "Real-world asset platforms",
  "Digital asset managers",
  "Decentralized finance companies",
  "Fintech companies",
  "Web3 businesses",
] as const;

export default function VaultOSPage() {
  return (
    <MarketingShell>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <h1>VaultOS</h1>
            <p className={styles.lede}>
              VaultOS is a demonstration of an on-chain vault foundation. It shows a vault
              under a business’s own name and symbol. The console verifies the creation
              transaction before registering the vault. This is not a live service.
            </p>
            <div className={styles.actions}>
              <a href={consoleHref} className={styles.primary}>
                Open the demonstration console
              </a>
              <Link href="/" className={styles.secondary}>
                PineryZ homepage
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.body}>
          <section className={styles.panel} aria-labelledby="what-heading">
            <h2 id="what-heading">What VaultOS is</h2>
            <p>
              VaultOS is PineryZ’s planned flagship, shown today as a demonstration: a
              standardized on-chain vault foundation. The direction is to start with that
              foundation, then expand into a yield platform. A vault first. A yield platform
              later.
            </p>
            <p>
              The business chooses the name and the symbol. Its customers see the business.
              PineryZ stays underneath.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="starting-heading">
            <h2 id="starting-heading">Starting point</h2>
            <ul className={styles.items}>
              {startingPoint.map((item) => (
                <li key={item.title}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.panel} aria-labelledby="how-heading">
            <h2 id="how-heading">How it works</h2>
            <ol className={styles.steps}>
              {steps.map((step) => (
                <li key={step.index} className={styles.step}>
                  <span className={styles.marker}>{step.index}</span>
                  <div>
                    <h3 className={styles.itemTitle}>{step.title}</h3>
                    <p className={styles.itemText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.panel} aria-labelledby="console-heading">
            <h2 id="console-heading">The console</h2>
            <p>
              The console is designed to verify on-chain vault creation transactions before
              registering vaults. It reads a creation transaction, checks it, and only then
              records the vault.
            </p>
            <p>
              The console does not create the vault itself, does not hold a key, and does not
              submit the creation transaction.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="demo-heading">
            <h2 id="demo-heading">What this demonstration does</h2>
            <p>
              In this demonstration, an operator creates the vault outside the console, then
              pastes the creation transaction hash into the console. The console verifies that
              transaction and registers the vault when the check passes. It does not connect a
              wallet or submit the creation transaction.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="audiences-heading">
            <h2 id="audiences-heading">Who this is for</h2>
            <p>
              Businesses that want to build and offer their own on-chain vault products, supported
              by reusable blockchain infrastructure.
            </p>
            <ul>
              {audiences.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </section>

          <section className={styles.panel} aria-labelledby="next-heading">
            <h2 id="next-heading">What’s next</h2>
            <p>
              VaultOS starts with the vault foundation and leaves room for the yield platform that
              comes later. Open the demonstration console, or return to the PineryZ homepage.
            </p>
            <div className={styles.actions}>
              <a href={consoleHref} className={styles.primary}>
                Open the demonstration console
              </a>
              <Link href="/" className={styles.secondary}>
                PineryZ homepage
              </Link>
            </div>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
