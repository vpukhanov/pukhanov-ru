import type { components as OctokitComponents } from "@octokit/openapi-types";
import { Octokit } from "@octokit/rest";
import { Metadata } from "next";
import { cache } from "react";

import ContributionIcon from "@/components/contribution-icon";

export const metadata: Metadata = {
  title: "Vyacheslav Pukhanov's Open-source Contributions",
  description:
    "These are my public contributions to open-source projects, pulled in real time from GitHub.",
};

// Revalidate the cached version of the page at most once every day (in minutes)
export const revalidate = 60 * 60 * 24;

export default async function Contributions() {
  const contributions = await getContributions();
  return contributions.map((c) => <Contribution key={c.id} contribution={c} />);
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

const getContributions = cache(async () => {
  const octokit = new Octokit({
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
});
