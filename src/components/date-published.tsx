export default function DatePublished({ dateTime }: { dateTime: string }) {
  return (
    <small className="group-[.is-list]:hidden">
      <time dateTime={dateTime}>Published on {dateTime}</time>
    </small>
  );
}
