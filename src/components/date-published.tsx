export default function DatePublished({ dateTime }: { dateTime: string }) {
  return (
    <time dateTime={dateTime} className="text-sm">
      Published on {dateTime}
    </time>
  );
}
