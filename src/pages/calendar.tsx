// pages/calendar.tsx
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabaseClient";
import dynamic from "next/dynamic";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarApi } from "@fullcalendar/core";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
});

export default function CalendarPage() {
  // FullCalendar API 인스턴스 & 현재 뷰 제목
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // 모달 열림 상태
  const [isOpen, setIsOpen] = useState(false);

  // 입력 폼 상태
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

  // 이벤트 소스 객체를 한 번만 생성
  const eventSource = useMemo(
    () => ({
      url: "/api/events",
      method: "GET",
      failure: () => alert("이벤트를 불러오는 데 실패했습니다"),
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

  // 모달 제출 → Supabase에 저장
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!calendarApi) return;

    // 이스터에그: 12월 23일
    const selected = new Date(form.start);
    if (selected.getMonth() === 11 && selected.getDate() === 23) {
      alert("🎉 웹 개발자 장재혁님의 생일입니다! 축하해주세요! 🎂");
    }

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("이벤트 저장에 실패했습니다.");
      return;
    }

    // 모달 닫기 및 폼 리셋
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
    setIsOpen(false);
  }

  // 실시간 구독 → 새 이벤트 캘린더에 추가
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
      {/* ─── 헤더 ─── */}
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
            onClick={() => setIsOpen(true)}
            className="px-4 py-1 bg-[#1dba2f] text-white rounded hover:bg-green-600"
          >
            + Add
          </button>
        </div>
      </header>

      {/* ─── 캘린더 ─── */}
      <main className="flex-1">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          showNonCurrentDates={false}
          fixedWeekCount={false}
          height="100%"
          events={eventSource}
          datesSet={(info) => {
            setCalendarApi(info.view.calendar);
            setCurrentTitle(info.view.title);
          }}
        />
      </main>

      {/* ─── Add Event 모달 ─── */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={onSubmit}
            className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4"
          >
            <h2 className="text-2xl font-semibold">New Event Add</h2>

            {/* Title */}
            <div>
              <label className="block font-medium">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={onChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* Start / End */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Start Date</label>
                <input
                  type="datetime-local"
                  name="start"
                  value={form.start}
                  onChange={onChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block font-medium">End Date</label>
                <input
                  type="datetime-local"
                  name="end"
                  value={form.end}
                  onChange={onChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={onChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* 기타 필드 */}
            <div>
              <label className="block font-medium">Event Type</label>
              <select
                name="type"
                value={form.type}
                onChange={onChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="kiso">KISO Event</option>
                <option value="school">School Event</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Location</label>
              <input
                name="location"
                value={form.location}
                onChange={onChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Photo Link</label>
              <input
                name="photo_url"
                value={form.photo_url}
                onChange={onChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Contact Info</label>
              <input
                name="contact"
                value={form.contact}
                onChange={onChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* 액션 버튼 */}
            <div className="flex justify-end space-x-2 pt-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
