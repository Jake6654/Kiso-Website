// pages/calendar.tsx
import { useState } from "react";
import dynamic from "next/dynamic";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarApi } from "@fullcalendar/core";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
});

export default function CalendarPage() {
  // CalendarApi 인스턴스 + 현재 view 제목 보관
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // 모달 열림 상태
  const [isOpen, setIsOpen] = useState(false);

  // 폼 필드 상태
  const [form, setForm] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    type: "kiso",
    location: "",
    photo: null as File | null,
    link: "",
    contact: "",
  });

  // 폼 변경 핸들러
  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // 모달 제출
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!calendarApi) return;

    // Easter Egg: 12월 23일 이벤트 시 알림
    const selected = new Date(form.start);
    if (selected.getMonth() === 11 && selected.getDate() === 23) {
      alert("🎉 웹 개발자 장재혁님의 생일입니다! 축하해주세요! 🎂");
    }

    const id = String(Date.now());
    calendarApi.addEvent({
      id,
      title: form.title,
      start: form.start,
      end: form.end,
      extendedProps: {
        description: form.description,
        type: form.type,
        location: form.location,
        link: form.link,
        contact: form.contact,
      },
    });

    // 리셋 & 모달 닫기
    setForm({
      title: "",
      start: "",
      end: "",
      description: "",
      type: "kiso",
      location: "",
      photo: null,
      link: "",
      contact: "",
    });
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col h-screen">
      {/* ─── 헤더: Custom Buttons & Title ─── */}
      <header className="grid grid-cols-3 items-center bg-white px-6 py-4 shadow">
        {/* 왼쪽: 로고 + 제목 */}
        <div className="flex items-center space-x-4">
          <span className="text-4xl">📅</span>
          <span className="text-4xl font-bold">KISO Calendar</span>
        </div>

        {/* 가운데: 현재 월·연도 */}
        <div className="text-center text-4xl font-medium">
          {currentTitle || "-"}
        </div>

        <div className="flex justify-end items-center space-x-2">
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
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            today
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-1 bg-[#1dba2f] text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            + Add
          </button>
        </div>
      </header>

      {/* ─── 캘린더 영역 ─── */}
      <main className="flex-1">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          showNonCurrentDates={false}
          fixedWeekCount={false}
          height="100%"
          events={[]}
          datesSet={(info) => {
            setCalendarApi(info.view.calendar);
            setCurrentTitle(info.view.title);
          }}
        />
      </main>

      {/* ─── 모달 ─── */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={onSubmit}
            className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg space-y-4"
          >
            <h2 className="text-2xl font-semibold">New Event Add</h2>

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

            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={onChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

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
                name="link"
                value={form.link}
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
