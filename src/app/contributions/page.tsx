import type { components as OctokitComponents } from "@octokit/openapi-types";
import { Octokit } from "@octokit/rest";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";

import ContributionIcon from "@/components/contribution-icon";
import Notice from "@/components/notice";

export const metadata: Metadata = {
  title: "Open-source Contributions by Vyacheslav Pukhanov",
  description:
    "These are my public contributions to open-source projects, pulled in real time from GitHub.",
};

export default async function Contributions() {
  const contributions = await getContributions();
  return (
    <div>
      <Notice id="contributions">
        This is a daily updated list of my GitHub contributions, starting all
        the way back from high school up to now
      </Notice>
      {contributions.map((c) => (
        <Contribution key={c.id} contribution={c} />
      ))}
    </div>
  );
}

function Contribution({
  contribution,
}: {
  contribution: OctokitComponents["schemas"]["issue-search-result-item"];
}) {
  const repo = contribution.repository_url.split("/").slice(-2).join("/");
  return (
    <a href={contribution.html_url} target="_blank" className="mb-2 flex gap-4">
      <ContributionIcon
        contribution={contribution}
        className="mt-0.5 h-5 w-5 shrink-0"
      />
      <div>
        <div className="font-semibold underline">{contribution.title}</div>
        <div className="text-light text-sm">{repo}</div>
      </div>
      <div className="flex-1" />
      <div className="text-light mt-1 shrink-0 text-sm">
        {contribution.created_at.split("T")[0]}
      </div>
    </a>
  );
}

// We have to use unstable_cache since we aren't calling fetch directly
// https://nextjs.org/docs/app/api-reference/functions/unstable_cache
const getContributions = unstable_cache(
  async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_PAT,
      userAgent: "pukhanov.ru personal website",
    });

    const response = await octokit.paginate(
      octokit.rest.search.issuesAndPullRequests,
      {
        q: [
          "author:vpukhanov", // issues and PRs created by me...
          "is:public", // against public repos...
          "-user:vpukhanov", // but not in my own repos
        ].join("+"),
        sort: "created",
      },
    );

    return response;
  },
  ["getContributions"],
  // Revalidate the cache once in 12 hours
  { revalidate: 60 * 60 * 12 },
);
