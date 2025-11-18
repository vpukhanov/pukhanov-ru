import { MetadataRoute } from "next";

import { posts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postItems = await posts();

  return [
    {
      url: "https://pukhanov.ru/",
    },
    {
      url: "https://pukhanov.ru/cv",
      priority: 1,
    },
    {
      url: "https://pukhanov.ru/posts",
      priority: 0.9,
    },
    ...postItems.map((post) => ({
      url: `https://pukhanov.ru/posts/${post.slug}`,
    })),
  ];
}
