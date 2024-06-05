import { MetadataRoute } from "next";

import { posts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postItems = await posts();

  return [
    {
      url: "https://pukhanov.ru",
      priority: 1,
    },
    {
      url: "https://pukhanov.ru/posts",
      priority: 0.8,
    },
    ...postItems.map((post) => ({
      url: `https://pukhanov.ru/posts/${post.slug}`,
    })),
  ];
}
