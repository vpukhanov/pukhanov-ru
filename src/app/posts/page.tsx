import { Metadata } from "next";
import Link from "next/link";

import Notice from "@/components/notice";
import { PostMetadata, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts by Vyacheslav Pukhanov",
  description:
    "This is a personal blog where I share my thoughts on frontend development, technology, society, and other topics that interest me.",
};

export default async function Posts() {
  const list = await posts();
  return (
    <div>
      <Notice id="contributions">
        I am now experimenting with ultra-short, byte-sized format content{" "}
        <a href="https://t.me/byteblurbs" target="_blank" className="underline">
          on&nbsp;Byte&nbsp;Blurbs
        </a>{" "}
        on&nbsp;Telegram
      </Notice>
      {list.map((p) => (
        <Post key={p.slug} {...p} />
      ))}
    </div>
  );
}

function Post({
  slug,
  metadata: { title, emoji, description, datePublished },
}: {
  slug: string;
  metadata: PostMetadata;
}) {
  return (
    <Link href={`/posts/${slug}`} className="mb-8 block space-y-1">
      <div className="text-lg font-semibold">
        {emoji ? <span>{emoji} </span> : null}
        <span className="underline">{title}</span>
      </div>
      <div>{description}</div>
      <time dateTime={datePublished} className="block text-sm font-light">
        {datePublished}
      </time>
    </Link>
  );
}
