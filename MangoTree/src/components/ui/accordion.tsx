import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@utils/classMerge";
import { ChevronDownIcon } from "lucide-react";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col space-y-3", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-border transition-all transform-gpu duration-300 ease-linear hover:border-[#8bbf72] data-open:border-[#5a8a4a] data-open:shadow-[0_0.25rem_0.75rem_rgba(90,138,74,0.1)]",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "transition-colors transform-gpu duration-200 ease-linear hover:bg-[#f8f6f2] group/accordion-trigger relative flex flex-1 items-center justify-between p-4 cursor-pointer md:p-5 text-left font-bold outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none text-mango-green-dark size-5 shrink-0 transition-transform transform-gpu duration-300 ease-default group-aria-expanded/accordion-trigger:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="transform-gpu data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "[&_a]:hover:text-foreground h-(--accordion-panel-height) pt-0 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 p-4 md:p-5",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
