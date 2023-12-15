import { Metadata } from 'next';
import { FeedMetadata, feed } from '@/lib/feed';

export const metadata: Metadata = {
  title: "Лента",
};

export default async function Feed() {
	const items = await feed();
	return <div>
		{items.map(i => <FeedItem key={i.slug} {...i} />)}	
	</div>
}

async function FeedItem({slug, metadata}: { slug: string; metadata: FeedMetadata }) {
	const Content = (await import(`@/app/(prose)/feed/${slug}/page.mdx`)).default
	return <article className="prose prose-h1:text-lg prose-h1:font-semibold mb-10">
		<time className="block text-sm font-light mb-1" dateTime={metadata.datePublished}>{metadata.datePublished}</time>
		<Content />
	</article>
}
