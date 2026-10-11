import { RichText } from "@payloadcms/richtext-lexical/react";
import { cn } from "@utils/classMerge";
import type { ReactElement, FC, ReactNode, ElementType } from "react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";

export interface BlockClasses {
  paragraph?: string;
  quote?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
  ul?: string;
  ol?: string;
  listitem?: string;
  link?: string;
  image?: string;
  horizontalrule?: string;
}

export interface BlockRendererProps {
  data: SerializedEditorState;
  classes?: BlockClasses;
}

const defaultClasses = {
  paragraph: "text-muted leading-relaxed mb-4 last:mb-0",
  quote:
    "border-l-4 border-mango-green-light bg-background-alt/40 pl-4 py-2 my-6 text-muted italic",
  h1: "font-bold text-3xl md:text-4xl mt-8 mb-4 first:mt-0",
  h2: "font-bold text-2xl md:text-3xl mt-8 mb-4 first:mt-0",
  h3: "font-bold text-xl md:text-2xl mt-6 mb-3 first:mt-0",
  h4: "font-semibold text-lg mt-6 mb-2 first:mt-0",
  h5: "font-semibold text-base mt-4 mb-2 first:mt-0",
  h6: "font-semibold text-sm uppercase tracking-wider text-muted mt-4 mb-2 first:mt-0",
  ul: "pl-6 mb-4 space-y-1 text-foreground marker:text-mango-green-dark list-disc",
  ol: "pl-6 mb-4 space-y-1 text-foreground marker:text-mango-green-dark list-decimal",
  listitem: "leading-relaxed",
  link: "text-mango-green-dark underline underline-offset-3 transition-colors transform-gpu duration-200 ease-linear hover:text-mango-green-darkest",
  image: "my-6 max-w-full h-auto",
  horizontalrule: "my-8 border-0 border-t border-border",
} as const;

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const buildConverters =
  (classes?: BlockClasses): JSXConvertersFunction =>
  ({ defaultConverters }) => ({
    ...defaultConverters,
    paragraph: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });

      if (children.length === 0) return <></>;

      return (
        <p className={cn(defaultClasses.paragraph, classes?.paragraph)}>
          {children}
        </p>
      );
    },
    heading: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });
      const tag: HeadingTag =
        defaultClasses[node.tag as HeadingTag] != null
          ? (node.tag as HeadingTag)
          : "h1";
      const Tag: ElementType = tag;

      return (
        <Tag className={cn(defaultClasses[tag], classes?.[tag])}>
          {children}
        </Tag>
      );
    },
    list: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });
      const Tag: "ol" | "ul" = node.tag === "ol" ? "ol" : "ul";

      return (
        <Tag className={cn(defaultClasses[Tag], classes?.[Tag])}>
          {children}
        </Tag>
      );
    },
    listitem: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });

      return (
        <li className={cn(defaultClasses.listitem, classes?.listitem)}>
          {children}
        </li>
      );
    },
    quote: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });

      return (
        <blockquote className={cn(defaultClasses.quote, classes?.quote)}>
          {children}
        </blockquote>
      );
    },
    link: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });
      const newTab: boolean = node.fields.newTab === true;

      return (
        <a
          href={node.fields.url ?? "#"}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={cn(defaultClasses.link, classes?.link)}
        >
          {children}
        </a>
      );
    },
    autolink: ({ node, nodesToJSX }) => {
      const children: Array<ReactNode> = nodesToJSX({ nodes: node.children });
      const newTab: boolean = node.fields.newTab === true;

      return (
        <a
          href={node.fields.url ?? "#"}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={cn(defaultClasses.link, classes?.link)}
        >
          {children}
        </a>
      );
    },
    upload: ({ node }) => {
      const uploadNode: any = node;

      if (typeof uploadNode.value !== "object" || uploadNode.value == null)
        return null;

      const uploadDoc: any = uploadNode.value;
      const alt: string = uploadNode.fields?.alt ?? uploadDoc?.alt ?? "";
      const url: string = uploadDoc.url ?? "";

      if (
        typeof uploadDoc.mimeType !== "string" ||
        !uploadDoc.mimeType.startsWith("image")
      )
        return (
          <a
            href={url}
            rel="noopener noreferrer"
            className={cn(defaultClasses.link, classes?.link)}
          >
            {uploadDoc.filename}
          </a>
        );

      return (
        <img
          src={url}
          alt={alt}
          width={uploadDoc.width ?? undefined}
          height={uploadDoc.height ?? undefined}
          loading="lazy"
          className={cn(defaultClasses.image, classes?.image)}
        />
      );
    },
    horizontalrule: () => (
      <hr
        className={cn(defaultClasses.horizontalrule, classes?.horizontalrule)}
      />
    ),
  });

export function BlockRenderer({
  data,
  classes,
}: BlockRendererProps): ReactElement<FC> {
  return (
    <RichText
      data={data}
      disableContainer
      converters={buildConverters(classes)}
    />
  );
}
