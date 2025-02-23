import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";

export default function Figure({
  src,
  alt,
  children,
}: {
  src: ImageProps["src"];
  alt: string;
  children?: ReactNode;
}) {
  return (
    <figure>
      <Image src={src} alt={alt} />
      {children && (
        <figcaption className="font-sans text-sm">{children}</figcaption>
      )}
    </figure>
  );
}
