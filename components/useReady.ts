"use client";

import { useSyncExternalStore } from "react";

declare global {
  interface Window {
    __bvReady?: boolean;
  }
}

let timedOut = false;

function subscribe(onChange: () => void) {
  const onTimeout = () => {
    timedOut = true;
    onChange();
  };
  window.addEventListener("bv:ready", onChange, { once: true });
  const t = window.setTimeout(onTimeout, 6000);
  return () => {
    window.removeEventListener("bv:ready", onChange);
    window.clearTimeout(t);
  };
}

// True once the loading screen starts lifting ("bv:ready"). Falls back after
// a few seconds so nothing waits forever if the loader never runs.
export function useReady() {
  return useSyncExternalStore(
    subscribe,
    () => !!window.__bvReady || timedOut,
    () => false,
  );
}
