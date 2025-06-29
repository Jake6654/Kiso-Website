import dynamic from "next/dynamic";

const TimelineClient = dynamic(() => import("@/components/TimelineClient"), {
  ssr: false,
});

export default function TimelinePage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-[#E7EFFE]">
      <TimelineClient />
    </main>
  );
}
