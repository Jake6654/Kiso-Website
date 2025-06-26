// pages/events/[id].tsx
import { mockEvents } from "../../../mocks/mockEvents";
import { format } from "date-fns";
import type { EventItem } from "../../../types/event";

export async function getStaticPaths() {
  const paths = mockEvents.map((e) => ({
    params: { id: e.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const event = mockEvents.find((e) => e.id.toString() === params.id) ?? null;
  return { props: { event } };
}

export default function EventDetail({ event }: { event: EventItem | null }) {
  if (!event) return <p>이벤트를 찾을 수 없습니다.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-500">
        {format(new Date(event.date), "yyyy-MM-dd")}
      </p>
      {event.description && <p>{event.description}</p>}
    </div>
  );
}
