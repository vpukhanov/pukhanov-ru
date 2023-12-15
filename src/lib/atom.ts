import { Feed } from "feed";

import { feed } from "./feed";
import { posts } from "./posts";

export async function postsAtom() {
  const f = new Feed({
    title: "Блог | Вячеслав Пуханов",
    id: "https://pukhanov.ru/posts/feed.xml",
    favicon: "https://pukhanov.ru/favicon.ico",
    copyright: "© Вячеслав Пуханов, с 2013 года",
    feedLinks: {
      atom: "https://pukhanov.ru/posts/feed.xml",
    },
    author: {
      name: "Вячеслав Пуханов",
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

export async function feedAtom() {
  const f = new Feed({
    title: "Лента | Вячеслав Пуханов",
    id: "https://pukhanov.ru/feed/feed.xml",
    favicon: "https://pukhanov.ru/favicon.ico",
    copyright: "© Вячеслав Пуханов, с 2013 года",
    feedLinks: {
      atom: "https://pukhanov.ru/feed/feed.xml",
    },
    author: {
      name: "Вячеслав Пуханов",
      email: "vyacheslav@pukhanov.ru",
      link: "https://pukhanov.ru",
    },
  });

  const list = await feed();

  list.forEach((post) => {
    f.addItem({
      title: post.metadata.title,
      link: `https://pukhanov.ru/feed/${post.slug}`,
      date: new Date(post.metadata.datePublished),
    });
  });

  f.addCategory("technology");

  return f.atom1();
}
