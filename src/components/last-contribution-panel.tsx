import ContributionIcon, { Contribution } from "./contribution-icon";

export default async function LastContributionPanel() {
  let lastContribution: Contribution;
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
      className="w-full flex-1 rounded-lg border border-gray-200 bg-gray-100 p-4 transition-colors hover:border-gray-300 hover:bg-gray-200"
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

async function getLastContribution(): Promise<Contribution> {
  const query = new URLSearchParams({
    q: "is:public author:vpukhanov -user:vpukhanov",
    sort: "created",
    per_page: "1",
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

  return result.items[0];
}
