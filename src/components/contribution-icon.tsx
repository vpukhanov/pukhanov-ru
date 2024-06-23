import type { components as OctokitComponents } from "@octokit/openapi-types";

import IssueIcon from "./icons/issue";
import PullRequestIcon from "./icons/pull-request";

export default function ContributionIcon({
  contribution,
  className = "",
}: {
  contribution: OctokitComponents["schemas"]["issue-search-result-item"];
  className?: string;
}) {
  // Color open items green, merged PRs and issues marked as complete indigo,
  // and all other closed items red
  let color = "text-green-500";
  if (contribution.state === "closed") {
    const mergedPR = contribution.pull_request?.merged_at;
    const completedIssue = contribution.state_reason === "completed";
    color = mergedPR || completedIssue ? "text-indigo-500" : "text-red-500";
  }

  return (
    <div className={`${color} ${className}`}>
      {contribution.pull_request ? <PullRequestIcon /> : <IssueIcon />}
    </div>
  );
}
