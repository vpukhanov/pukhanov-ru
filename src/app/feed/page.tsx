import { Metadata } from "next";
import Link from "next/link";

import FeedNotice from "@/components/feed-notice";
import { FeedMetadata, feed } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Лента",
  description: "В ленте я публикую ссылки на интересный контент других людей.",
};

export default async function Feed() {
  const items = await feed();
  return (
    <div>
      <FeedNotice />
      {items.map((i) => (
        <FeedItem key={i.slug} {...i} />
      ))}
    </div>
  );
}

async function FeedItem({
  slug,
  metadata,
}: {
  slug: string;
  metadata: FeedMetadata;
}) {
  const Content = (await import(`@/app/(prose)/feed/${slug}/page.mdx`)).default;
  return (
    <article className="prose mb-10 prose-h1:text-lg prose-h1:font-semibold">
      <Link
        href={`/feed/${slug}`}
        className="inline-block mb-1 text-sm font-light hover:underline"
      >
        <time dateTime={metadata.datePublished}>{metadata.datePublished}</time>
      </Link>
      <Content />
    </article>
  );
}
