import { async as glob } from "fast-glob";

export type FeedMetadata = {
  title: string;
  datePublished: string;
};

export async function feed() {
  const paths = await glob("src/app/\\(prose\\)/feed/(*)/page.mdx");

  // src/app/(prose)/feed/<name>/page.mdx -> <name>
  const slugs = paths.map((path) => path.split("/").at(-2)!);
  const imports = await Promise.all(
	slugs.map(slug => import(`@/app/(prose)/feed/${slug}/page.mdx`)),
  );

  const feed = slugs.map((slug, index) => ({
	slug,
	metadata: imports[index].metadata as FeedMetadata,
  }));

  // Sort by datePublished, newest to oldest
  feed.sort(
	(a, b) => -a.metadata.datePublished.localeCompare(b.metadata.datePublished),
  );

  return feed;
}
