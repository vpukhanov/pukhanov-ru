import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

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
      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
}
