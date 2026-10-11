import { useRef, useEffect, useCallback, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { resolveClasses } from "@utils/classMerge";
import type { ReactElement, FC } from "react";

export interface CodeBlockProps {
  code: string;
  className?: string;
}

export default function CodeBlock({
  code: codeSnippet,
  className,
}: CodeBlockProps): ReactElement<FC> {
  const containerClasses = useMemo<string>(
    (): string => resolveClasses("relative group overflow-x-auto", className),
    [className],
  );
  const copyRef = useRef<SVGSVGElement>(null);
  const checkRef = useRef<SVGSVGElement>(null);
  const timerRef = useRef<number>(null);
  const handleClick = useCallback((): void => {
    if (copyRef.current == null || checkRef.current == null) return;

    (async (): Promise<void> => {
      try {
        await navigator.clipboard.writeText(codeSnippet);

        const hideClass: string = "hidden";

        copyRef.current?.classList.add(hideClass);
        checkRef.current?.classList.remove(hideClass);

        timerRef.current = setTimeout((): void => {
          checkRef.current?.classList.add(hideClass);
          copyRef.current?.classList.remove(hideClass);
        }, 2000);
      } catch (err: any) {
        console.error("Failed to copy:", err);
      }
    })();
  }, [codeSnippet]);

  useEffect((): (() => void) => {
    return (): void => {
      if (timerRef.current != null) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className={containerClasses}>
      <code
        className="block bg-primary text-mango-yellow p-4 font-mono text-sm pr-12 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: codeSnippet }}
      />
      <button
        type="button"
        className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded transition-all transform-gpu duration-200 ease-default opacity-100 xl:opacity-0 xl:group-hover:opacity-100 active:scale-95"
        aria-label="Copy to clipboard"
        onClick={handleClick}
      >
        <Copy ref={copyRef} className="w-4 h-4" />
        <Check ref={checkRef} className="w-4 h-4 hidden" />
      </button>
    </div>
  );
}
