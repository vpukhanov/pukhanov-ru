export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="prose text-black">{children}</article>;
}
