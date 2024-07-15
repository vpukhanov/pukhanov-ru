import { postsAtom } from "@/lib/atom";

export async function GET() {
  return new Response(await postsAtom(), {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
    },
  });
}
