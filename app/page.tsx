import Hero from "@/components/Hero";
import Universe from "@/components/Universe";
import LoveLetter from "@/components/LoveLetter";
import Proposal from "@/components/Proposal";
import Gift from "@/components/Gift";
import Finale from "@/components/Finale";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020205]">
      <Hero />

      <Universe />

      <LoveLetter />

      <Proposal />

      <Gift />

      <Finale />
    </main>
  );
}