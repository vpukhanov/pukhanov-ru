export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose font-serif text-lg text-gray-950 dark:prose-invert prose-headings:font-sans prose-h1:text-4xl dark:text-gray-50">
      {children}
    </article>
  );
}
