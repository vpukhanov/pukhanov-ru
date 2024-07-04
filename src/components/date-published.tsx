export default function DatePublished({ dateTime }: { dateTime: string }) {
  return (
    <time dateTime={dateTime} className="font-sans text-sm">
      Published on {dateTime}
    </time>
  );
}
