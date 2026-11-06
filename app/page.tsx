import type { Metadata } from "next";
import Link from "next/link";

import { consoleHref } from "@/components/layout/navigation";
import { MarketingShell } from "@/components/layout/MarketingShell";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "PineryZ",
  description:
    "The infrastructure for on-chain asset management. Drive more deposits and deeper engagement with an Earn product that turns passive balances into earning opportunities.",
};

const services = [
  {
    title: "NAV computation and proof of funds",
    text: "Do not bother with the computation and operations overhead of NAV management, we take care of it for you.",
    href: "/contact",
    label: "Talk to us",
    arrow: "→",
  },
  {
    title: "Let us curate",
    text: "PineryZ's curators and asset management partners can operate the vault end to end: strategy, valuation, settlement and reporting.",
    href: "/contact",
    label: "Talk to us",
    arrow: "→",
  },
  {
    title: "Easy integration",
    text: "One GraphQL API serves every vault data. Put the whole experience on your own site, in your own design.",
    href: "/vaultos",
    label: "Read the docs",
    arrow: "↗",
  },
] as const;

const purpose = [
  {
    title: "The job",
    text: "A business that wants an on-chain pool can assemble a vault itself, or start with a platform built for funds that already have managers and a compliance team. VaultOS is the third path: one pattern that creates the vault.",
  },
  {
    title: "The name",
    text: "The business chooses the name and the symbol. Its customers see the business. PineryZ stays underneath.",
  },
  {
    title: "Who it is for",
    text: "The company that wants to offer the vault. This site is also for an investor who wants to see that idea and the demonstration behind it.",
  },
] as const;

const others = [
  "Investment strategies and yield products",
  "Asset managers and curators",
  "Established operating infrastructure",
] as const;

const ours = [
  "A standardized on-chain vault foundation",
  "Branded vaults with configurable names and symbols",
  "An extensible architecture for future product capabilities",
] as const;

const shown = [
  {
    title: "The purpose",
    text: "PineryZ builds on-chain vault infrastructure for businesses that want to launch and manage their own vault products.",
  },
  {
    title: "The difference",
    text: "Rather than starting with yield strategies, PineryZ starts with the underlying vault infrastructure that businesses can build upon.",
  },
  {
    title: "The demonstration",
    text: "VaultOS is designed to verify on-chain vault creation transactions before registering vaults in its console.",
  },
] as const;

export default function Home() {
  return (
    <MarketingShell>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            The infrastructure for
            <br />
            On-Chain Asset management
          </h1>
          <p className={styles.lede}>
            Drive more deposits and deeper engagement with an Earn product that
            turns passive balances into earning opportunities.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={consoleHref}>
              Launch VaultOS
            </a>
            <Link className={styles.secondary} href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.band} id="purpose" aria-labelledby="purpose-heading">
        <div className={styles.inner}>
          <h2 id="purpose-heading">What PineryZ is here to do</h2>
          <p>
            Give a business a vault it can offer under its own name, before it
            needs a full operating system for yield.
          </p>
          <ul className={styles.items}>
            {purpose.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.bandAlt} aria-labelledby="difference-heading">
        <div className={styles.inner}>
          <h2 id="difference-heading">A Vault first. A yield platform later.</h2>
          <div className={styles.compare}>
            <article>
              <h3>Traditional platform approach</h3>
              <ul>
                {others.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className={styles.ours}>
              <h3>PineryZ&apos;s starting point</h3>
              <ul>
                {ours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className={styles.customer}>
            <h3>Our intended customer</h3>
            <p>
              Businesses that want to build and offer their own on-chain vault
              products, supported by reusable blockchain infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bandAlt} aria-labelledby="services-heading">
        <div className={styles.inner}>
          <h2 id="services-heading">Our services</h2>
          <ul className={styles.serviceGrid}>
            {services.map((service) => (
              <li key={service.title} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link className={styles.serviceLink} href={service.href}>
                  {service.label}
                  <span aria-hidden="true"> {service.arrow}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.band} aria-labelledby="shown-heading">
        <div className={styles.inner}>
          <h2 id="shown-heading">Three things a visitor can take away</h2>
          <ul className={styles.items}>
            {shown.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.close} aria-labelledby="close-heading">
        <div className={styles.closeInner}>
          <h2 id="close-heading">See the demonstration, or write to us.</h2>
          <div className={styles.actions}>
            <a className={styles.primary} href={consoleHref}>
              Open the demonstration
            </a>
            <Link className={styles.secondary} href="/contact">
              Contact PineryZ
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
