import type { MDXComponents } from "mdx/types";

import MarkdownLink from "@/components/markdown-link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MarkdownLink,
  };
}
