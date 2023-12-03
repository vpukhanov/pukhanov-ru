import { Feed } from "feed";
import { posts } from "./posts";

export async function feed() {
  const f = new Feed({
    title: "Вячеслав Пуханов",
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
