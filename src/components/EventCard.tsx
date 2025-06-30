import Link from "next/link";
import { format } from "date-fns";
import type { EventItem } from "../../types/event";

interface Props {
  event: EventItem;
}

export default function EventCard({ event }: Props) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="block bg-white rounded-lg shadow hover:shadow-lg transition p-4 h-full"
    >
      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
      <p className="text-sm text-gray-500 mb-4">
        {format(new Date(event.start), "yyyy-MM-dd")}
      </p>
      {event.description && (
        <p className="text-gray-700 line-clamp-3">{event.description}</p>
      )}
    </Link>
  );
}
