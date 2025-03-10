import nextMDX from "@next/mdx";
import { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = nextMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "metadata" }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  outputFileTracingIncludes: {
    "/posts/feed.xml": ["./app/(prose)/posts/**/*"],
  },
};

export default withMDX(nextConfig);
