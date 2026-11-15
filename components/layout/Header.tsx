"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  consoleHref,
  isNavGroup,
  primaryNav,
  type NavLink,
} from "./navigation";
import styles from "./Header.module.css";

const desktopQuery = "(min-width: 1024px)";
const companyCloseDelayMs = 200;

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const companyMenuId = useId();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);
  const open = openPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const companyButtonRef = useRef<HTMLButtonElement>(null);
  const companyCloseTimerRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (companyCloseTimerRef.current !== null) {
        window.clearTimeout(companyCloseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setCompanyOpen(false);
      return;
    }

    const nav = navRef.current;
    const button = menuButtonRef.current;
    const items = nav
      ? Array.from(nav.querySelectorAll<HTMLElement>("a, button"))
      : [];
    items[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        setCompanyOpen(false);
        button?.focus();
        return;
      }

      if (event.key !== "Tab" || items.length === 0) {
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function clearCompanyCloseTimer() {
    if (companyCloseTimerRef.current !== null) {
      window.clearTimeout(companyCloseTimerRef.current);
      companyCloseTimerRef.current = null;
    }
  }

  function openCompanyMenu() {
    clearCompanyCloseTimer();
    setCompanyOpen(true);
  }

  function scheduleCloseCompanyMenu() {
    clearCompanyCloseTimer();
    companyCloseTimerRef.current = window.setTimeout(() => {
      setCompanyOpen(false);
      companyCloseTimerRef.current = null;
    }, companyCloseDelayMs);
  }

  function closeMenu() {
    const isDesktop = window.matchMedia(desktopQuery).matches;
    clearCompanyCloseTimer();
    setOpenPath(null);
    setCompanyOpen(false);
    if (!isDesktop) {
      menuButtonRef.current?.focus();
    }
  }

  function renderLink(item: NavLink, className: string) {
    const current = !item.external && pathname === item.href;

    if (item.external) {
      return (
        <a
          href={item.href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className={className}
        aria-current={current ? "page" : undefined}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <header className={styles.header}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <div className={styles.bar}>
        <Link href="/" className={styles.wordmark}>
          <Image
            src="/pineryz-logo.png"
            alt=""
            width={36}
            height={36}
            className={styles.logo}
          />
          <span className={styles.wordmarkText}>PineryZ</span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() =>
            setOpenPath((current) => (current === pathname ? null : pathname))
          }
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          ref={navRef}
          id={menuId}
          className={open ? styles.navOpen : styles.nav}
          aria-label="Main"
        >
          <ul className={styles.list}>
            {primaryNav.map((item) => {
              if (!isNavGroup(item)) {
                return (
                  <li key={item.href}>{renderLink(item, styles.link)}</li>
                );
              }

              const childActive = item.children.some(
                (child) => !child.external && pathname === child.href,
              );

              return (
                <li
                  key={item.label}
                  className={styles.itemWithMenu}
                  onMouseEnter={openCompanyMenu}
                  onMouseLeave={scheduleCloseCompanyMenu}
                >
                  <button
                    ref={companyButtonRef}
                    type="button"
                    className={styles.linkButton}
                    aria-expanded={companyOpen}
                    aria-controls={companyMenuId}
                    aria-current={childActive ? "true" : undefined}
                    onClick={() => {
                      if (window.matchMedia(desktopQuery).matches) {
                        return;
                      }
                      setCompanyOpen((current) => !current);
                    }}
                    onFocus={openCompanyMenu}
                    onBlur={(event) => {
                      const next = event.relatedTarget;
                      if (
                        next instanceof Node &&
                        event.currentTarget.parentElement?.contains(next)
                      ) {
                        return;
                      }
                      scheduleCloseCompanyMenu();
                    }}
                  >
                    {item.label}
                  </button>
                  <ul
                    id={companyMenuId}
                    className={
                      companyOpen ? styles.submenuOpen : styles.submenu
                    }
                    onFocus={openCompanyMenu}
                    onBlur={(event) => {
                      const next = event.relatedTarget;
                      if (
                        next instanceof Node &&
                        event.currentTarget.parentElement?.contains(next)
                      ) {
                        return;
                      }
                      scheduleCloseCompanyMenu();
                    }}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        {renderLink(child, styles.submenuLink)}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className={styles.actions}>
            <a href={consoleHref} className={styles.contact} onClick={closeMenu}>
              View demonstration
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
