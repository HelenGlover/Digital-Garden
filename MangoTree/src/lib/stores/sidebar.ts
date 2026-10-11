import { atom, computed } from "nanostores";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

// Core atoms
export const $sidebarOpen = atom(false);
export const $sidebarOpenMobile = atom(false);
export const $isMobile = atom(false);

// Derived
export const $sidebarState = computed(
  $sidebarOpen,
  (open: boolean): "expanded" | "collapsed" =>
    open ? "expanded" : "collapsed",
);

// Actions
export function setSidebarOpen(value: boolean): void {
  $sidebarOpen.set(value);
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
}

export function setSidebarOpenMobile(value: boolean): void {
  $sidebarOpenMobile.set(value);
}

export function toggleSidebar() {
  if ($isMobile.get()) {
    $sidebarOpenMobile.set(!$sidebarOpenMobile.get());
  } else {
    setSidebarOpen(!$sidebarOpen.get());
  }
}

// Initialize mobile detection (call once from a client-side component)
export function initMobileDetection(): () => void {
  const MOBILE_BREAKPOINT = 768;

  const update = (): void => {
    $isMobile.set(window.innerWidth < MOBILE_BREAKPOINT);
  };

  update();
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mql.addEventListener("change", update);

  return (): void => mql.removeEventListener("change", update);
}
