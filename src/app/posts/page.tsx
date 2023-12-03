import { posts } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог",
};

export default async function Posts() {
  const list = await posts();
  return null;
}
