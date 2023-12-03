import { feed } from "@/lib/feed";

export async function GET() {
  return new Response(await feed(), {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
    },
  });
}
