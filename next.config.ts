import nextMDX from "@next/mdx";
import { NextConfig } from "next";

const withMDX = nextMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: "metadata" }],
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
