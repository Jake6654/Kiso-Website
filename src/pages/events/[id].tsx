// pages/events/[id].tsx
import { GetServerSideProps } from "next";
import { supabase } from "@/lib/supabaseClient";
import { EventItem } from "../../../types/event";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

type Props = {
  event: EventItem | null;
  error?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = Number(params?.id);
  if (!id) return { props: { event: null, error: "Invalid ID" } };

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return { props: { event: null, error: error.message } };
  return { props: { event: data } };
};

export default function EventPage({ event, error }: Props) {
  const router = useRouter();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
      <Link
  href="#"
  onClick={() => router.back()}
  className="inline-flex items-center
             text-gray-700 hover:text-gray-900
             border border-gray-300 hover:border-gray-400
             rounded-md px-3 py-1 mb-6 transition"
>
  <svg
    className="w-4 h-4 mr-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Back
</Link>
        <Card className="overflow-hidden">
          {/* 이미지 */}
          {event.photo_url && (
  /^https?:\/\//.test(event.photo_url) || event.photo_url.startsWith("/")
  ? (
    <div className="relative w-full h-64">
      <Image
        src={event.photo_url}
        alt={event.title}
        fill
        className="object-cover"
      />
    </div>
  ) : (
    <img
      src={event.photo_url}
      alt={event.title}
      className="w-full h-64 object-cover rounded-md"
    />
  )
)}

          <CardHeader className="p-6">
            <CardTitle className="text-2xl font-bold">
              {event.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 px-6">
            {/* 날짜 */}
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-700">Date & Time</h3>
              <p className="text-gray-800">
                {new Date(event.start).toLocaleString([], {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {event.end && (
                  <> – {new Date(event.end).toLocaleString([], { hour: "2-digit", minute: "2-digit" })}</>
                )}
              </p>
            </div>

            {/* 설명 */}
            {event.description && (
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-700">Description</h3>
                <p className="text-gray-800 whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>
            )}

            {/* 기타 정보 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event.location && (
                <div>
                  <h3 className="font-semibold text-gray-700">Location</h3>
                  <p className="text-gray-800">{event.location}</p>
                </div>
              )}
              {event.type && (
                <div>
                  <h3 className="font-semibold text-gray-700">Type</h3>
                  <p className="text-gray-800">{event.type}</p>
                </div>
              )}
              {event.contact && (
                <div className="sm:col-span-2">
                  <h3 className="font-semibold text-gray-700">Contact</h3>
                  <p className="text-gray-800">{event.contact}</p>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-3 px-6 py-4">
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
