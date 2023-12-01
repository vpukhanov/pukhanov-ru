import { posts } from "@/lib/posts";

export default async function Home() {
  const allPosts = await posts();

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.slug}>
          slug: {post.slug}, metadata: {JSON.stringify(post.metadata)}
        </li>
      ))}
    </ul>
  );
}
