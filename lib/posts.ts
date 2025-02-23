import { async as glob } from "fast-glob";
import path from "path";

export type PostMetadata = {
  title: string;
  description: string;
  datePublished: string;
  emoji?: string;
};

export async function posts() {
  const paths = await glob("app/\\(prose\\)/posts/(*)/page.mdx");

  const posts = await Promise.all(
    paths.map(async (filePath) => {
      const slug = path.basename(path.dirname(filePath));
      const data = await import(`@/app/(prose)/posts/${slug}/page.mdx`);

      return {
        slug,
        metadata: data.metadata as PostMetadata,
      };
    }),
  );

  posts.sort(
    (a, b) => -a.metadata.datePublished.localeCompare(b.metadata.datePublished),
  );

  return posts;
}
