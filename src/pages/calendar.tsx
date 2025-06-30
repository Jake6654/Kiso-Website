// pages/calendar.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarApi, EventApi } from "@fullcalendar/core";
import { supabase } from "../lib/supabaseClient";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
});

export default function CalendarPage() {
  // FullCalendar API & current view title
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // Add/Edit modal state & form
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editEventId, setEditEventId] = useState<string | null>(null);
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

  // Detail modal state
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);

  // fetch events source
  const eventSource = useMemo(
    () => ({
      url: "/api/events",
      method: "GET",
      failure: () => alert("이벤트를 불러오는 데 실패했습니다"),
    }),
    []
  );

  // form change handler
  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // open add modal
  function openAddModal() {
    setEditEventId(null);
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
    setIsAddOpen(true);
  }

  // open edit modal from detail
  function openEditModal() {
    if (!selectedEvent) return;

    const e = selectedEvent;
    setForm({
      title: e.title,
      start: e.start ? (e.start as Date).toISOString().slice(0, 16) : "",
      end: e.end ? (e.end as Date).toISOString().slice(0, 16) : "",
      description: e.extendedProps.description ?? "",
      type: e.extendedProps.type ?? "kiso",
      location: e.extendedProps.location ?? "",
      photo_url: e.extendedProps.photo_url ?? "",
      contact: e.extendedProps.contact ?? "",
    });
    setEditEventId(e.id);
    setSelectedEvent(null);
    setIsAddOpen(true);
  }

  // save (add or edit)
  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setIsAddOpen(false);
    if (!calendarApi) return;

    const isEdit = Boolean(editEventId);
    const url = isEdit ? `/api/events/${editEventId}` : `/api/events`;
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      alert(`이벤트 ${isEdit ? "수정" : "저장"}에 실패했습니다.`);
      return;
    }
    const data = await res.json();

    if (isEdit) {
      const ev = calendarApi.getEventById(editEventId!);
      if (ev) {
        ev.setProp("title", data.title);
        ev.setStart(data.start);
        ev.setEnd(data.end);
        ev.setExtendedProp("description", data.description);
        ev.setExtendedProp("type", data.type);
        ev.setExtendedProp("location", data.location);
        ev.setExtendedProp("photo_url", data.photo_url);
        ev.setExtendedProp("contact", data.contact);
      }
    } else {
      calendarApi.addEvent({
        id: String(data.id),
        title: data.title,
        start: data.start,
        end: data.end,
        extendedProps: {
          description: data.description,
          type: data.type,
          location: data.location,
          photo_url: data.photo_url,
          contact: data.contact,
        },
      });
    }

    // reset form & close modal
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
    setEditEventId(null);
  }

  // delete from detail
  async function handleDelete() {
    if (!selectedEvent) return;
    const id = selectedEvent.id;
    const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("삭제에 실패했습니다.");
      return;
    }
    calendarApi?.getEventById(id)?.remove();
    setSelectedEvent(null);
  }

  // realtime subscribe
  useEffect(() => {
    if (!calendarApi) return;
    const channel = supabase
      .channel("events-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "events" },
        ({ new: e }) => {
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
    return () => void supabase.removeChannel(channel);
  }, [calendarApi]);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
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
            onClick={openAddModal}
            className="px-4 py-1 bg-[#1dba2f] text-white rounded hover:bg-green-600"
          >
            + Add
          </button>
        </div>
      </header>

      {/* Calendar */}
      <main className="flex-1">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          showNonCurrentDates={false}
          fixedWeekCount={false}
          height="100%"
          events={eventSource}
          eventClick={(info) => setSelectedEvent(info.event)}
          datesSet={(info) => {
            setCalendarApi(info.view.calendar);
            setCurrentTitle(info.view.title);
          }}
        />
      </main>

      {/* Add/Edit Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form onSubmit={handleSave} className="w-full max-w-lg">
            <Card>
              <CardHeader>
                <CardTitle>
                  {editEventId ? "Edit Event" : "New Event Add"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Title</label>
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
                    <label className="block font-medium mb-1">Start Date</label>
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
                    <label className="block font-medium mb-1">End Date</label>
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
                  <label className="block font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Event Type</label>
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
                  <label className="block font-medium mb-1">Location</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={onChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Photo</label>
                  <input
                    name="photo_url"
                    value={form.photo_url}
                    onChange={onChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Contact Info</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddOpen(false);
                    setEditEventId(null);
                  }}
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
              </CardFooter>
            </Card>
          </form>
        </div>
      )}

      {/* Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">
                {selectedEvent.title}
              </h3>
              <p className="text-gray-600">
                {new Date(selectedEvent.start!).toLocaleString()}
              </p>
              <p>{selectedEvent.extendedProps.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <button
                onClick={openEditModal}
                className="px-4 py-2 bg-[#cad32b] text-white rounded hover:bg-[#919554]"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-[rgb(221,84,57)] text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
