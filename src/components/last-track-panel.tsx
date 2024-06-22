import Image from "next/image";

export default async function LastTrackPanel() {
  // Hide the panel if configuration variables are unset
  if (!process.env.LASTFM_API_KEY || !process.env.LASTFM_USERNAME) {
    return null;
  }

  let lastTrack: LastTrack;
  try {
    lastTrack = await getLastTrack();
  } catch (e) {
    // Log the error and just hide the panel
    console.error(e);
    return null;
  }

  return (
    <a
      href={lastTrack.url}
      target="_blank"
      className="grid flex-1 grid-cols-[auto_minmax(0,_1fr)] grid-rows-[auto_auto_auto] rounded-lg border border-blue-700 bg-blue-600 p-4 text-white transition-colors hover:border-blue-500 hover:bg-blue-400"
    >
      <div className="col-span-2 mb-2 text-xl font-extrabold">
        Last Track {lastTrack.nowPlaying ? "▶️" : "⏸️"}
      </div>
      {lastTrack.image && (
        <Image
          src={lastTrack.image}
          alt={lastTrack.album}
          className="row-span-2 rounded-lg bg-slate-100"
          width={64}
          height={64}
          unoptimized
        />
      )}
      <div className="ml-4 font-bold">{lastTrack.name}</div>
      <div className="ml-4">{lastTrack.artist}</div>
    </a>
  );
}

type LastTrack = {
  name: string;
  artist: string;
  album: string;
  image: string;
  url: string;
  nowPlaying: boolean;
};

// https://www.last.fm/api/show/user.getRecentTracks
async function getLastTrack(): Promise<LastTrack> {
  const url = [
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks",
    `user=${process.env.LASTFM_USERNAME}`,
    `api_key=${process.env.LASTFM_API_KEY}`,
    "limit=1",
    "format=json",
  ].join("&");

  // Cache lifetime of 60 seconds
  const result = await fetch(url, { next: { revalidate: 60 } });
  const json = await result.json();
  const lastTrack = json.recenttracks.track[0];

  return {
    name: lastTrack.name,
    artist: lastTrack.artist?.["#text"],
    album: lastTrack.album?.["#text"],
    image: lastTrack.image?.[1]?.["#text"],
    url: lastTrack.url,
    nowPlaying: lastTrack["@attr"]?.nowplaying === "true",
  };
}
