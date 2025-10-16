import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Speakers from "@/components/sections/Speakers";
import Timeline from "@/components/sections/Timeline";
import Tracks from "@/components/sections/Tracks";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Speakers />
      <Timeline />
      <Tracks />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
