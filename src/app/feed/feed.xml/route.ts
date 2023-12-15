import { feedAtom } from "@/lib/atom";

export async function GET() {
  return new Response(await feedAtom(), {
	headers: {
	  "Content-Type": "text/xml; charset=utf-8",
	},
  });
}
