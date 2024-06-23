import { Feed } from "feed";

import { posts } from "./posts";

export async function postsAtom() {
  const f = new Feed({
    title: "Posts by Vyacheslav Pukhanov",
    id: "https://pukhanov.ru/posts/feed.xml",
    favicon: "https://pukhanov.ru/favicon.ico",
    copyright: "© Vyacheslav Pukhanov, 2013–today",
    feedLinks: {
      atom: "https://pukhanov.ru/posts/feed.xml",
    },
    author: {
      name: "Vyacheslav Pukhanov",
      email: "vyacheslav@pukhanov.ru",
      link: "https://pukhanov.ru",
    },
  });

  const list = await posts();

  list.forEach((post) => {
    f.addItem({
      title: post.metadata.title,
      description: post.metadata.description,
      link: `https://pukhanov.ru/posts/${post.slug}`,
      date: new Date(post.metadata.datePublished),
    });
  });

  f.addCategory("technology");

  return f.atom1();
}
