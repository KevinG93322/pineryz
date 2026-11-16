import type { Metadata } from "next";
import Link from "next/link";

import { consoleHref } from "@/components/layout/navigation";
import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "PineryZ builds on-chain vault infrastructure for businesses that want to launch and manage their own vault products.",
};

const focus = [
  {
    title: "Blockchain infrastructure",
    text: "Foundations that let a business develop and operate on-chain financial products without assembling the whole stack itself.",
  },
  {
    title: "Real-world asset tokenization",
    text: "An area of exploration and a future direction. The current demonstration does not operate a marketplace for real-world assets.",
  },
  {
    title: "Smart contracts and decentralized applications",
    text: "Programmable on-chain systems, used in the VaultOS demonstration and considered for later product work.",
  },
  {
    title: "Web3 product development",
    text: "Product work that connects established financial workflows with on-chain technology. The public example is the VaultOS demonstration.",
  },
] as const;

const approach = [
  {
    index: "01",
    title: "Research and understand",
    text: "Start from the practical problems a business faces when it wants on-chain financial products.",
  },
  {
    index: "02",
    title: "Design practical solutions",
    text: "Shape infrastructure that can be configured, rather than a one-off protocol.",
  },
  {
    index: "03",
    title: "Build a demonstration",
    text: "Turn the design into a demonstration that can be exercised. The current example is the VaultOS console.",
  },
  {
    index: "04",
    title: "Validate and improve",
    text: "Test what was built, record what it does not yet do, and continue the product from there.",
  },
] as const;

const commitment = [
  {
    title: "Engineering quality",
    text: "Hold the work to careful implementation and review. This is a standard for the work, not a completed credential.",
  },
  {
    title: "Transparency",
    text: "Say what exists, what is still a direction, and what the demonstration does not do.",
  },
  {
    title: "Practical innovation",
    text: "Prefer technology a business could operate over novelty on its own.",
  },
  {
    title: "Long-term product development",
    text: "Treat VaultOS as a product to expand over time.",
  },
] as const;

const audiences = [
  "Real-world asset platforms",
  "Digital asset managers",
  "Decentralized finance companies",
  "Fintech companies",
  "Web3 businesses",
] as const;

export default function AboutPage() {
  return (
    <MarketingShell>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <h1>The infrastructure for on-chain asset management.</h1>
            <p className={styles.lede}>
              PineryZ builds on-chain vault infrastructure for businesses that want to launch and
              manage their own vault products. The business chooses the name and the symbol.
              PineryZ stays underneath.
            </p>
          </div>
        </header>
        <div className={styles.body}>
          <section className={styles.panel} aria-labelledby="vision-heading">
            <h2 id="vision-heading">Our vision</h2>
            <p>
              Start with the underlying vault infrastructure a business can build upon, then
              expand into a yield platform. A vault first. A yield platform later.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="focus-heading">
            <h2 id="focus-heading">What we focus on</h2>
            <ul className={styles.items}>
              {focus.map((item) => (
                <li key={item.title}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.panel} aria-labelledby="approach-heading">
            <h2 id="approach-heading">Our approach</h2>
            <ol className={styles.steps}>
              {approach.map((step) => (
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

          <section className={styles.panel} aria-labelledby="vaultos-heading">
            <h2 id="vaultos-heading">PineryZ and VaultOS</h2>
            <p>
              PineryZ is the company. VaultOS is the planned flagship, shown today as a
              demonstration: a standardized on-chain vault foundation, with branded vaults and
              configurable names and symbols.
            </p>
            <p>
              The console is designed to verify on-chain vault creation transactions before
              registering vaults.
            </p>
          </section>

          <section className={styles.panel} aria-labelledby="commitment-heading">
            <h2 id="commitment-heading">Our commitment</h2>
            <p>These are standards for the work. They are not credentials already earned.</p>
            <ul className={styles.items}>
              {commitment.map((item) => (
                <li key={item.title}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </li>
              ))}
            </ul>
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

          <section className={styles.panel} aria-labelledby="continue-heading">
            <h2 id="continue-heading">Continue</h2>
            <p>See the product introduction, or open the demonstration console.</p>
            <div className={styles.actions}>
              <Link href="/vaultos" className={styles.primary}>
                Explore VaultOS
              </Link>
              <a href={consoleHref} className={styles.secondary}>
                Launch VaultOS
              </a>
            </div>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
