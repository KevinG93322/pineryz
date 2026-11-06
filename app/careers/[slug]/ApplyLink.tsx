"use client";

import type { MouseEvent } from "react";

import styles from "./job.module.css";

const topOffset = 32;

function easeInOut(progress: number) {
  return progress < 0.5
    ? 2 * progress * progress
    : 1 - ((-2 * progress + 2) ** 2) / 2;
}

export function ApplyLink() {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("apply");
    if (!target) {
      return;
    }

    event.preventDefault();

    const destination = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - topOffset,
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      window.scrollTo(0, destination);
      history.pushState(null, "", "#apply");
      return;
    }

    const start = window.scrollY;
    const distance = destination - start;
    const duration = Math.min(1100, Math.max(700, Math.abs(distance) * 0.7));
    const startTime = performance.now();

    function step(now: number) {
      const progress = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, start + distance * easeInOut(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
        return;
      }
      history.pushState(null, "", "#apply");
    }

    requestAnimationFrame(step);
  }

  return (
    <a className={styles.apply} href="#apply" onClick={onClick}>
      Apply
    </a>
  );
}
