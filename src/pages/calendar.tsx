// pages/calendar.tsx
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabaseClient";
import dynamic from "next/dynamic";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarApi, EventApi } from "@fullcalendar/core";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
});

export default function CalendarPage() {
  // FullCalendar API 인스턴스 & 현재 뷰 제목
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // “Add” 모달 열림
  const [isAddOpen, setIsAddOpen] = useState(false);

  // “Detail” 모달을 위한 선택된 이벤트 정보
  const [selectedEvent, setSelectedEvent] = useState<null | EventApi>(null);

  // Form state (Add/Update 공용)
  const [form, setForm] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    type: "kiso",
    location: "",
    photo_url: "",
    contact: "",
  });

  // 이벤트 소스 객체 (메모이제이션)
  const eventSource = useMemo(
    () => ({
      url: "/api/events",
      method: "GET",
      failure: () => alert("이벤트를 불러오는 데 실패했습니다."),
    }),
    []
  );

  // 폼 변경 핸들러
  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // Add 모달 제출 (새 이벤트)
  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!calendarApi) return;

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setIsAddOpen(false);
      setForm({
        title: "",
        start: "",
        end: "",
        description: "",
        type: "kiso",
        location: "",
        photo_url: "",
        contact: "",
      });
    } else {
      alert("저장에 실패했습니다.");
    }
  }

  // Detail 모달에서 삭제
  async function handleDelete() {
    if (!selectedEvent) return;
    const res = await fetch(`/api/events/${selectedEvent.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      selectedEvent.remove();
      setSelectedEvent(null);
    } else {
      alert("삭제에 실패했습니다.");
    }
  }

  // Detail 모달에서 “Edit” 누르면 Add 모달로 전환 + 폼에 데이터 채우기
  function handleEdit() {
    if (!selectedEvent) return;
    const { title, start, end, extendedProps } = selectedEvent;
    setForm({
      title,
      start: (start as Date).toISOString().slice(0, 16),
      end: end ? (end as Date).toISOString().slice(0, 16) : "",
      description: extendedProps.description || "",
      type: extendedProps.type || "kiso",
      location: extendedProps.location || "",
      photo_url: extendedProps.photo_url || "",
      contact: extendedProps.contact || "",
    });
    setSelectedEvent(null);
    setIsAddOpen(true);
  }

  // Realtime 구독 (새 이벤트 자동 추가)
  useEffect(() => {
    if (!calendarApi) return;
    const channel = supabase
      .channel("events-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "events" },
        (payload) => {
          const e = payload.new;
          calendarApi.addEvent({
            id: String(e.id),
            title: e.title,
            start: e.start,
            end: e.end,
            extendedProps: {
              description: e.description,
              type: e.type,
              location: e.location,
              photo_url: e.photo_url,
              contact: e.contact,
            },
          });
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [calendarApi]);

  return (
    <div className="flex flex-col h-screen">
      {/* 헤더 */}
      <header className="grid grid-cols-3 items-center bg-white px-6 py-4 shadow">
        <div className="flex items-center space-x-4">
          <span className="text-4xl">📅</span>
          <span className="text-4xl font-bold">KISO Calendar</span>
        </div>
        <div className="text-center text-4xl font-medium">
          {currentTitle || "-"}
        </div>
        <div className="flex justify-end items-center space-x-2 pr-6">
          <button
            onClick={() => calendarApi?.prev()}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            &lt;
          </button>
          <button
            onClick={() => calendarApi?.next()}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            &gt;
          </button>
          <button
            onClick={() => calendarApi?.today()}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            today
          </button>
          <button
            onClick={() => setIsAddOpen(true)}
            className="px-4 py-1 bg-[#1dba2f] text-white rounded hover:bg-green-600"
          >
            + Add
          </button>
        </div>
      </header>

      {/* 캘린더 */}
      <main className="flex-1">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          events={eventSource}
          height="100%"
          showNonCurrentDates={false}
          fixedWeekCount={false}
          eventClick={(info) => setSelectedEvent(info.event)}
          datesSet={(info) => {
            setCalendarApi(info.view.calendar);
            setCurrentTitle(info.view.title);
          }}
        />
      </main>

      {/* Add Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleAdd}
            className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4"
          >
            {/* ...폼 필드 (title,start,end,description...) */}
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsAddOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
            <p>{new Date(selectedEvent.start!).toLocaleString()}</p>
            {selectedEvent.extendedProps.description && (
              <p>{selectedEvent.extendedProps.description}</p>
            )}
            {/* 편집/삭제 버튼 */}
            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
