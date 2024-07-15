import { async as glob } from "fast-glob";

export type PostMetadata = {
  title: string;
  description: string;
  datePublished: string;
  emoji?: string;
};

export async function posts() {
  const paths = await glob(
    "src/app/\\(with-header\\)/\\(prose\\)/posts/(*)/page.mdx",
  );

  // src/app/(with-header)/(prose)/posts/<name>/page.mdx -> <name>
  const slugs = paths.map((path) => path.split("/").at(-2)!);
  const imports = await Promise.all(
    slugs.map(
      (slug) => import(`@/app/(with-header)/(prose)/posts/${slug}/page.mdx`),
    ),
  );

  const posts = slugs.map((slug, index) => ({
    slug,
    metadata: imports[index].metadata as PostMetadata,
  }));

  // Sort by datePublished, newest to oldest
  posts.sort(
    (a, b) => -a.metadata.datePublished.localeCompare(b.metadata.datePublished),
  );

  return posts;
}
