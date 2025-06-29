import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

const TimelineClient = dynamic(
  () => import("@/components/TimeliineClient-kr"),
  {
    ssr: false,
  }
);

export default function TimelinePage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-[#E7EFFE]">
      <div className="flex justify-end max-w-4xl mx-auto">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-800">
          <Link href="/timeline-en">English</Link>
        </Button>
      </div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <FaClock className="text-3xl" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">KISO 연혁</h1>
        <p className="text-lg text-gray-600">시작부터 현재까지</p>
      </div>
      <TimelineClient />
    </main>
  );
}
