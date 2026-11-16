import Image from "next/image";
import Link from "next/link";
import { consoleHref, docsHref } from "./navigation";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/vaultos", label: "VaultOS" },
      { href: consoleHref, label: "Demonstration" },
    ],
  },
  {
    title: "Company",
    split: true,
    links: [
      { href: "/about", label: "About" },
      { href: docsHref, label: "Docs", external: true },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
] as const;

const socials = [
  {
    href: "https://x.com/pineryz",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/pineryz",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Link href="/" className={styles.brand}>
              <Image
                src="/pineryz-logo.png"
                alt=""
                width={40}
                height={40}
                className={styles.logo}
              />
              <span className={styles.name}>PineryZ</span>
            </Link>
            <p className={styles.headline}>
              A demonstration of on-chain vault infrastructure.
            </p>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <p className={styles.columnTitle}>{column.title}</p>
                <ul
                  className={
                    "split" in column && column.split
                      ? `${styles.columnList} ${styles.columnListSplit}`
                      : styles.columnList
                  }
                >
                  {column.links.map((item) => (
                    <li key={item.href}>
                      {item.href.startsWith("/") ? (
                        <Link href={item.href} className={styles.columnLink}>
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={styles.columnLink}
                          {...("external" in item && item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 PineryZ. All Rights Reserved.</p>
          <ul className={styles.socials}>
            {socials.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
