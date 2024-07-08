import { list } from "@vercel/blob";
import { Suspense } from "react";

type Props = {
  file: string;
};

export default function Video({ file }: Props) {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <SuspendedVideo file={file} />
    </Suspense>
  );
}

async function SuspendedVideo({ file }: Props) {
  const { blobs } = await list({
    prefix: file,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video controls aria-label="Video player" className="mx-auto">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
