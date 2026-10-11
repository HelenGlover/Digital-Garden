import type { HTMLConvertersFunction } from "@payloadcms/richtext-lexical/html";

const defaultConverter: HTMLConvertersFunction = ({defaultConverters}) => ({
  ...defaultConverters,
});
