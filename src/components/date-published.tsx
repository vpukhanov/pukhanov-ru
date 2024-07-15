export default function DatePublished({ dateTime }: { dateTime: string }) {
  return <time dateTime={dateTime}>Published on {dateTime}</time>;
}
