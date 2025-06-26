import MemberBenefits from "@/components/MemberBenefits";
import Form from "@/components/Form";
import Hero from "@/components/Hero-en";
import Map from "@/components/Map";
import MonthlyEvents from "@/components/MontlyEvents";
import { mockAnnouncement } from "../../mocks/mockAnnouncement";
import ExecutiveBoard from "@/components/ExecutiveBoard";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="bg-white">
      <Banner newsArray={mockAnnouncement} />
      <Hero />
      <div className="my-12">
        <MonthlyEvents />
      </div>
      <ExecutiveBoard />
      <MemberBenefits />
      <Map />
      <Form />
    </main>
  );
}
