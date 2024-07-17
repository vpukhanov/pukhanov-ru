import { Metadata } from "next";

import ContributionIcon, { Contribution } from "@/components/contribution-icon";

export const metadata: Metadata = {
  title: "Open-source Contributions | Vyacheslav Pukhanov",
  description:
    "A daily updated list of my open-source contributions, starting all the way back from high school up to now, pulled directly from GitHub.",
};

export default async function Contributions() {
  const contributions = await getContributions();
  return (
    <div>
      <h1 className="mb-8 text-4xl font-extrabold">Contributions</h1>
      {contributions.map((c) => (
        <ContributionRow key={c.id} contribution={c} />
      ))}
    </div>
  );
}

function ContributionRow({ contribution }: { contribution: Contribution }) {
  const repo = contribution.repository_url.split("/").slice(-2).join("/");
  return (
    <a href={contribution.html_url} target="_blank" className="mb-4 flex gap-4">
      <ContributionIcon
        contribution={contribution}
        className="mt-1 h-4 w-4 shrink-0"
      />
      <div className="flex-1">
        <div className="font-semibold underline">{contribution.title}</div>
        <div className="text-sm">{repo}</div>
      </div>
      <div className="mt-0.5 shrink-0 tabular-nums tracking-tight">
        {contribution.created_at.split("T")[0]}
      </div>
    </a>
  );
}

async function getContributions(): Promise<Contribution[]> {
  // TODO: will have to use pagination when there are over a 100 contributions
  const query = new URLSearchParams({
    q: "is:public author:vpukhanov -user:vpukhanov",
    sort: "created",
    per_page: "100",
  });

  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.GITHUB_PAT}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "pukhanov.ru",
  };

  const response = await fetch(
    `https://api.github.com/search/issues?${query}`,
    // Revalidate cache at most once an hour
    { headers, next: { revalidate: 3600 } },
  );
  const result = await response.json();

  return result.items;
}
