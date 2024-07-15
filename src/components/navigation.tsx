import Link from "next/link";

export default function Navigation({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex gap-1 ${className}`}>
      <Link href="/cv" className="underline">
        CV
      </Link>
      <span>•</span>
      <Link href="/posts" className="underline">
        Posts
      </Link>
      <span>•</span>
      <Link href="/contributions" className="underline">
        Contributions
      </Link>
    </nav>
  );
}
