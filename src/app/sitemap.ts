import { MetadataRoute } from "next";

import { feed } from "@/lib/feed";
import { posts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postItems, feedItems] = await Promise.all([posts(), feed()]);

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
    ...postItems.map((post) => ({
      url: `https://pukhanov.ru/posts/${post.slug}`,
    })),
    ...feedItems.map((item) => ({
      url: `https://pukhanov.ru/feed/${item.slug}`,
    })),
  ];
}
