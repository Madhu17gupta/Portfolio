"use client";

import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(next: Lenis | null) {
  instance = next;
}

/**
 * The page-wide Lenis instance, when smooth scrolling is running.
 * ScrollTrigger's snap pauses it while it animates the scroll position,
 * otherwise the two would fight over the same scrollTop.
 */
export function getLenis() {
  return instance;
}
