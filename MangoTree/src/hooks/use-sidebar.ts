import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import {
  $sidebarOpen,
  $sidebarOpenMobile,
  $sidebarState,
  $isMobile,
  setSidebarOpen,
  setSidebarOpenMobile,
  toggleSidebar,
  initMobileDetection,
} from "@lib/stores/sidebar";

export function useSidebar() {
  const open = useStore($sidebarOpen);
  const openMobile = useStore($sidebarOpenMobile);
  const state = useStore($sidebarState);
  const isMobile = useStore($isMobile);

  useEffect(() => {
    return initMobileDetection();
  }, []);

  return {
    state,
    open,
    setOpen: setSidebarOpen,
    openMobile,
    setOpenMobile: setSidebarOpenMobile,
    isMobile,
    toggleSidebar,
  };
}
