export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose text-gray-950 dark:prose-invert dark:text-gray-50">
      {children}
    </article>
  );
}
