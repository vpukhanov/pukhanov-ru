import { MetadataRoute } from "next";

import { posts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const list = await posts();

  return [
    {
      url: "https://pukhanov.ru",
      priority: 1,
    },
    {
      url: "https://pukhanov.ru/posts",
      priority: 0.8,
    },
    {
      url: "https://pukhanov.ru/feed",
      priority: 0.7,
    },
    ...list.map((post) => ({
      url: `https://pukhanov.ru/posts/${post.slug}`,
    })),
  ];
}
