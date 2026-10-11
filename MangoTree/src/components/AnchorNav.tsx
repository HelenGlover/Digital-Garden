import { useEffect, useRef, useState } from "react";
import { cn } from "@utils/classMerge";
import type { ReactElement, FC } from "react";

export type NavItemType = {
  id: string;
  label: string;
  icon: string;
};

export interface AnchorNavMenuProps {
  items: Array<NavItemType>;
  title: string;
}

export default function AnchorNavMenu({
  items,
  title,
}: AnchorNavMenuProps): ReactElement<FC> {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect((): (() => void) => {
    observerRef.current = new IntersectionObserver(
      (entries: Array<IntersectionObserverEntry>): void => {
        const intersecting = entries.find(
          (entry: IntersectionObserverEntry): boolean => entry.isIntersecting,
        );

        if (!intersecting) return;

        const id: string | null = intersecting.target.getAttribute("id");

        if (id != null) setActiveId(id);
      },
      { threshold: 0.2, rootMargin: "-100px 0px -50% 0px" },
    );

    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    }

    return (): void => observerRef.current?.disconnect();
  }, [items]);

  return (
    <aside className="hidden flex-col w-64 shrink-0 xl:flex">
      <nav className="sticky top-24 py-20">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map(({ id, label }: NavItemType): ReactElement<FC> => {
            const isActive = activeId === id;
            const linkClasses: string = cn(
              "relative flex items-center gap-2 text-sm py-2 px-3 -mx-3 transition-all transform-gpu before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.75 before:bg-[#5a8a4a] before:transition-[height] before:duration-200 before:ease-linear",
              {
                "text-mango-green-dark font-semibold before:h-full": isActive,
                "text-muted hover:text-mango-green-dark before:h-0 hover:before:h-full":
                  !isActive,
              },
            );

            return (
              <li key={id}>
                <a href={`#${id}`} className={linkClasses}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
