import Link from "next/link";
import type { HTMLAttributeAnchorTarget, ReactNode } from "react";

export default function MarkdownLink({
  href,
  target,
  children,
}: {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
}) {
  // Use next Link with _self target for internal anchors and
  // html links with _blank target for external ones
  return href?.startsWith("/") ? (
    <Link href={href} target={target ?? "_self"}>
      {children}
    </Link>
  ) : (
    <a href={href} target={target ?? "_blank"}>
      {children}
    </a>
  );
}
