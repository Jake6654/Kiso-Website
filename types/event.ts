// src/components/MonthlyEvents/types.ts
export interface EventItem {
  id: string        // FullCalendar 에서는 string ID 를 기대하니
  title: string
  start: string     // ISO timestamp (e.g. "2025-06-29T14:00:00.000Z")
  end?: string      // nullable 가능
  description?: string
  type?: string
  location?: string
  photo_url?: string
  contact?: string
}
