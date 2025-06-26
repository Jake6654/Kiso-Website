// src/components/MonthlyEvents.tsx
import { useMemo } from "react";
import type { EventItem } from "../../types/event";
import { mockEvents } from "../../mocks/mockEvents";
import { format, isSameMonth } from "date-fns";
import EventCard from "./EventCard";

const MonthlyEvents: React.FC = () => {
  // useMemo memoizes a function, re-executing it only when the dependencies change. Otherwise it returns the cached result
  const thisMonthEvents = useMemo<EventItem[]>(
    () => mockEvents.filter((e) => isSameMonth(new Date(e.date), new Date())),
    []
  );

  if (thisMonthEvents.length === 0) {
    return <p className="text-gray-500">이번 달 예정된 이벤트가 없습니다.</p>;
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-semibold">This Month&apos;s Events</h2>
      <ul className="space-y-3">
        {thisMonthEvents.map((event) => (
          <li
            key={event.id}
            className="hover:scale-101 transition-transform duration-300"
          >
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MonthlyEvents;
