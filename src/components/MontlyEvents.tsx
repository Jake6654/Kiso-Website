// src/components/MonthlyEvents.tsx
import { useEffect, useMemo, useState } from "react";
import type { EventItem } from "../../types/event";
import { isSameMonth } from "date-fns";
import EventCard from "./EventCard";

export default function MonthlyEvents() {
  const [events, setEvents] = useState<EventItem[]>([]); // 초기값을 빈 배열로 설정
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

// API로부터 전체 이벤트를 불러오는 함수 
async function loadEvents(){
  try{
    setLoading(true); // 로딩상태를 true 로 변경
    const res = await fetch("api/events"); // API route api/events 에 HTTP GET 요청을 보냄
    if(!res.ok){ // 상태 코드가 200대가 아니면 
      throw new Error(`HTTP ${res.status}`); 
    }
    // 정상 흐름이라면 res body 를 json 으로 파싱한후 (EventItem 배열) data 담기
    const data = (await res.json()) as EventItem []; // 타입 단언 문법으로 (as EventItem[]) 라는 것을 알려줌
    setEvents(data); // 리액트 state 에 저장
  } catch(err : any){
    console.error(err);
    setError(err.message || "Unkown error");
  }finally{
    setLoading(false);
  }
}

// 마운트 시 한번만 로드
useEffect(() => {
  loadEvents();
}, []) 


// Event filtering
const thisMonthEvents = useMemo(() => {
  const now = new Date(); // 기준일
  return events.filter((e) => isSameMonth(new Date(e.start), now));
}, [events]);

if (loading) {
  return <p className="text-gray-500">이벤트를 불러오는 중...</p>;
}
if (error) {
  return <p className="text-red-500">오류: {error}</p>;
}
if (thisMonthEvents.length === 0) {
  return <p className="text-gray-500">이번 달 예정된 이벤트가 없습니다.</p>;
}

return (
  <section className="bg-white p-6 space-y-4">
    <h2 className="text-2xl font-semibold">This Month&apos;s Events</h2>
    <ul className="space-y-3">
      {thisMonthEvents.map((event) => (
        <li
          key={event.id}
          className="hover:scale-101 transition-transform duration-300 border-l-4 border-blue-500"
        >
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  </section>
);
}
