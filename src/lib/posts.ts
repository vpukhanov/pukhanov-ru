import { async as glob } from "fast-glob";

export async function posts() {
  const paths = await glob("src/app/posts/(*)/page.mdx");

  // src/app/posts/<name>/page.mdx -> <name>
  const slugs = paths.map((path) => path.split("/").at(-2)!);
  const imports = await Promise.all(
    slugs.map((slug) => import(`@/app/posts/${slug}/page.mdx`)),
  );

  const posts = slugs.map((slug, index) => ({
    slug,
    metadata: imports[index].metadata,
  }));

  // Sort by datePublished, newest to oldest
  posts.sort(
    (a, b) => -a.metadata.datePublished.localeCompare(b.metadata.datePublished),
  );

  return posts;
}
