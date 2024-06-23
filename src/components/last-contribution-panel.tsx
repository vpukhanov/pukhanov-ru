import type { components as OctokitComponents } from "@octokit/openapi-types";
import { Octokit } from "@octokit/rest";
import { cache } from "react";

import ContributionIcon from "./contribution-icon";

export default async function LastContributionPanel() {
  let lastContribution: OctokitComponents["schemas"]["issue-search-result-item"];
  try {
    lastContribution = await getLastContribution();
  } catch (e) {
    // Log the error and just hide the panel
    console.error(e);
    return null;
  }

  const repo = lastContribution.repository_url.split("/").slice(-2).join("/");

  return (
    <a
      href={lastContribution.html_url}
      target="_blank"
      className="w-full flex-1 rounded-lg border border-gray-200 bg-gray-100 p-4"
    >
      <div className="col-span-2 mb-2 text-xl font-extrabold">
        Last Contribution{" "}
        <ContributionIcon
          contribution={lastContribution}
          className="row-span-2 -mb-0.5 inline-block h-5 w-5"
        />
      </div>
      <div className="font-bold">{lastContribution.title}</div>
      <div>{repo}</div>
    </a>
  );
}

const getLastContribution = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT,
    userAgent: "pukhanov.ru personal website",
  });

  const contributions = await octokit.search.issuesAndPullRequests({
    q: [
      "author:vpukhanov", // issues and PRs created by me...
      "is:public", // against public repos...
      "-user:vpukhanov", // but not in my own repos
    ].join("+"),
    sort: "created",
    per_page: 1,
  });

  return contributions.data.items[0];
});
