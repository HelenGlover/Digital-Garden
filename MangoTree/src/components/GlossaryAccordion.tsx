import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { BlockRenderer } from "./ReactBlockRenderer";
import type { ReactElement, FC } from "react";
import type { Accordion as AccordionType } from "@lib/types/payload-types";

export type GlossaryDefinition = {
  term: string;
  definition: string;
};

export interface GlossaryAccordionProps {
  definitions: AccordionType["items"];
}

export default function GlossaryAccordion({
  definitions,
}: GlossaryAccordionProps): ReactElement<FC> {
  return (
    <Accordion>
      {definitions != null ? definitions.map(
        (definition, index: number): ReactElement<FC> => (
          <AccordionItem
            key={`index-${index + 1}`}
            value={`item-${index + 1}`}
            className="opacity-0 animate-fade-in-accordion"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <AccordionTrigger>{definition.title}</AccordionTrigger>
            <AccordionContent>
              {definition.content != null ? (
                <BlockRenderer data={definition.content} />
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ),
      ) : null}
    </Accordion>
  );
}
