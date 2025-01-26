import Link from "next/link";

export default function Navigation({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex gap-1 ${className}`}>
      <Link href="/cv" className="underline">
        CV
      </Link>
      <span className="text-gray-300 dark:text-gray-600">•</span>
      <Link href="/posts" className="underline">
        Posts
      </Link>
      <span className="text-gray-300 dark:text-gray-600">•</span>
      <Link href="/apps" className="underline">
        Apps
      </Link>
      <span className="text-gray-300 dark:text-gray-600">•</span>
      <Link href="/contributions" className="underline">
        Contributions
      </Link>
    </nav>
  );
}
