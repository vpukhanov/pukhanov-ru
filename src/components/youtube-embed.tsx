type Props = {
  videoId: string;
};

export default function YoutubeEmbed({ videoId }: Props) {
  return (
    <iframe
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    />
  );
}
