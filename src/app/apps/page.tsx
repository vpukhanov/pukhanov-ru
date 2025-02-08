import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import blockaliciousIcon from "./blockalicious-icon.png";
import blockaliciousScreenshot from "./blockalicious-screenshot.png";
import diversequalityScreenshot from "./diversequality-screenshot.png";
import vipinatorIcon from "./vipinator-icon.png";
import vipinatorScreenshot from "./vipinator-screenshot.png";
import webMultiverseScreenshot from "./web-multiverse-screenshot.png";

export const metadata: Metadata = {
  title: "Apps | Vyacheslav Pukhanov",
  description:
    "A collection of utilities and tools I've built to solve some of my own problems that I'm now sharing with the community.",
};

interface App {
  name: string;
  description: string;
  sourceCodeLink: string;
  icon?: StaticImageData;
  screenshot?: StaticImageData;
  installCommand?: string;
  applicationLink?: {
    url: string;
    text: string;
  };
  blogPost?: string;
}

const apps: App[] = [
  {
    name: "Vipinator",
    description:
      "A macOS menu bar app that lets you manage VPN connections from the menu bar. Perfect for quickly toggling VPN on and off.",
    sourceCodeLink: "https://github.com/vpukhanov/vipinator",
    screenshot: vipinatorScreenshot,
    icon: vipinatorIcon,
    installCommand: "brew install vpukhanov/tools/vipinator",
    blogPost: "/posts/vipinator-release",
  },
  {
    name: "Web Multiverse",
    description:
      "A fantasy web browser that generates AI-created webpages for an imaginary universe that you can customize.",
    sourceCodeLink: "https://github.com/vpukhanov/web-multiverse",
    screenshot: webMultiverseScreenshot,
    applicationLink: {
      url: "https://multiverse.pukhanov.ru",
      text: "Visit the website",
    },
  },
  {
    name: "glee",
    description:
      "A command-line tool that makes managing Git's .git/info/exclude file really easy. Keep your repos tidy by maintaining a list of local-only ignores.",
    sourceCodeLink: "https://github.com/vpukhanov/glee",
    installCommand: "brew install vpukhanov/tools/glee",
    blogPost: "/posts/from-frustration-to-glee",
  },
  {
    name: "Diversequality",
    description:
      "A fun weekend project, a web application that analyzes news articles and events through the lens of diversity, equity, and inclusion using LLMs.",
    sourceCodeLink: "https://github.com/vpukhanov/diversequality",
    screenshot: diversequalityScreenshot,
    applicationLink: {
      url: "https://dvrst.io",
      text: "Visit the website",
    },
  },
  {
    name: "Blockalicious",
    description:
      "A productivity content blocker for Safari on macOS that lets you block arbitrary domains and deactivate the block in one click.",
    sourceCodeLink: "https://github.com/vpukhanov/blockalicious",
    screenshot: blockaliciousScreenshot,
    icon: blockaliciousIcon,
    applicationLink: {
      url: "https://apps.apple.com/ru/app/blockalicious/id1608665824",
      text: "Download from Mac App Store",
    },
  },
];

export default function AppsPage() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-extrabold">Apps</h1>
      <p className="mb-8">
        Here are some open-source apps I&apos;ve created in my spare time. Each
        one started as a solution to a personal need, and I&apos;m happy to
        share them with others who might find them useful.
      </p>
      {apps.map((app) => (
        <article key={app.name} className="mb-8 space-y-4">
          <div>
            <Link
              href={app.sourceCodeLink}
              target="_blank"
              className="group inline-flex w-full items-center justify-between"
            >
              <h2 className="text-2xl font-bold underline">{app.name}</h2>
              {app.icon && (
                <Image
                  src={app.icon}
                  alt=""
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              )}
            </Link>
          </div>
          <p>{app.description}</p>
          {app.screenshot && (
            <div className="overflow-hidden rounded-lg">
              <Image
                src={app.screenshot}
                alt={`Screenshot of ${app.name}`}
                className="w-full"
              />
            </div>
          )}
          {app.installCommand && (
            <pre className="font-mono overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-900">
              <code>{app.installCommand}</code>
            </pre>
          )}
          {app.applicationLink && (
            <Link
              href={app.applicationLink.url}
              target="_blank"
              className="inline-block rounded-full bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {app.applicationLink.text}
            </Link>
          )}
          {app.blogPost && (
            <Link href={app.blogPost} className="block text-sm hover:underline">
              Read the post →
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
