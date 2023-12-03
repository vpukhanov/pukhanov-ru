import { PostMetadata, posts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог",
};

export default async function Posts() {
  const list = await posts();
  return (
    <div>
      {list.map((p) => (
        <Post key={p.slug} {...p} />
      ))}
    </div>
  );
}

function Post({
  slug,
  metadata: { title, description, datePublished },
}: {
  slug: string;
  metadata: PostMetadata;
}) {
  return (
    <Link href={`/posts/${slug}`} className="mb-8 block space-y-1">
      <div className="text-lg font-semibold underline">{title}</div>
      <div>{description}</div>
      <time dateTime={datePublished} className="block text-sm font-light">
        {datePublished}
      </time>
    </Link>
  );
}