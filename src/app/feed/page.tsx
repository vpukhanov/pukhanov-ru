import { Metadata } from "next";

import FeedNotice from "@/components/feed-notice";
import { FeedMetadata, feed } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Лента",
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
      <time
        className="mb-1 block text-sm font-light"
        dateTime={metadata.datePublished}
      >
        {metadata.datePublished}
      </time>
      <Content />
    </article>
  );
}
