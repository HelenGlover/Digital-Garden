import { useCallback } from "react";
import { Download, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@components/ui/sidebar";
import { Button } from "@components/ui/button";
import { useSidebar } from "@hooks/use-sidebar";
import { cn } from "@utils/classMerge";
import logo from "@assets/logo.png";
import type { ReactElement, FC } from "react";

export default function MobileNavigation(): ReactElement<FC> {
  const { toggleSidebar } = useSidebar();
  const handleClick = useCallback((): void => toggleSidebar(), []);
  const currentPath: string = window.location.pathname;

  return (
    <Sidebar
      side="left"
      collapsible="offcanvas"
      className="border-white/20 text-base"
    >
      <SidebarHeader className="flex-row justify-between px-6 pt-4">
        <a
          href="/"
          className="inline-flex items-center gap-3 group transition-opacity hover:opacity-90"
        >
          <img
            src={logo.src}
            alt="CIB Mango Tree"
            className="h-10 w-10 object-contain transition-transform duration-300 ease-default group-hover:-rotate-5 group-hover:scale-110"
          />
        </a>
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          className="inline-flex justify-center cursor-pointer rounded-none transition-all duration-300 ease-default items-center text-white hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95"
          onClick={handleClick}
        >
          <ChevronRight />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <nav
          id="mobile-nav"
          className="flex flex-col"
          role="navigation"
          aria-label="Mobile"
        >
          <ul className="flex flex-col py-4 px-6">
            <li>
              <a
                href="/about"
                className={cn(
                  "inline-flex w-full py-3 pl-0 text-white font-medium no-underline transition-all duration-250 ease-linear origin-left hover:pl-2 hover:bg-linear-90 hover:from-white/10 hover:to-transparent",
                  {
                    "border-l-[0.1875rem] border-[#ffe099] pl-2 bg-linear-90 from-white/10 to-transparent":
                      currentPath.startsWith("/about"),
                  },
                )}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/get-involved"
                className={cn(
                  "inline-flex w-full py-3 pl-0 text-white font-medium no-underline transition-all duration-250 ease-linear origin-left hover:pl-2 hover:bg-linear-90 hover:from-white/10 hover:to-transparent",
                  {
                    "border-l-[0.1875rem] border-[#ffe099] pl-2 bg-linear-90 from-white/10 to-transparent":
                      currentPath.startsWith("/docs"),
                  },
                )}
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                href="/resources"
                className={cn(
                  "inline-flex w-full py-3 pl-0 text-white font-medium no-underline transition-all duration-250 ease-linear origin-left hover:pl-2 hover:bg-linear-90 hover:from-white/10 hover:to-transparent",
                  {
                    "border-l-[0.1875rem] border-[#ffe099] pl-2 bg-linear-90 from-white/10 to-transparent":
                      currentPath.startsWith("/resources"),
                  },
                )}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="https://civictechdc.github.io/cib-mango-tree/"
                target="_blank"
                className={cn(
                  "inline-flex w-full py-3 pl-0 text-[#ffcc33] font-semibold no-underline transition-all duration-250 ease-linear origin-left hover:pl-2 hover:bg-linear-90 hover:from-white/10 hover:to-transparent",
                  {
                    "border-l-[0.1875rem] border-[#ffe099] pl-2 bg-linear-90 from-white/10 to-transparent":
                      currentPath.startsWith("/get-involved"),
                  },
                )}
              >
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </SidebarContent>
      <SidebarFooter className="flex-row justify-end px-6">
        <a
          href="/download"
          className="inline-flex items-center justify-center gap-2 w-4/5 sm:w-3/5 relative overflow-hidden transition-all transform-gpu ease-default duration-300 group font-semibold glass-shine-30 bg-mango-green-dark text-white shadow-[0_0.25rem_0.75rem_rgba(90,138,74,0.3)] px-4 py-2 hover:-translate-y-0.5 hover:shadow-[0_0.5rem_1.5rem_rgba(90,138,74,0.5)] hover:bg-[#4a7a3a] active:-translate-y-px active:shadow-[0_0.125rem_0.5rem_rgba(90,138,74,0.3)]"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          Download Now
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
