import { Metadata } from "next";
import Link from "next/link";

import { PostMetadata, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Vyacheslav Pukhanov's Blog",
  description:
    "This is a personal blog where I share my thoughts on frontend development, technology, society, and other topics that interest me.",
};

export default async function Posts() {
  const list = await posts();
  return (
    <div className="group is-list">
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
