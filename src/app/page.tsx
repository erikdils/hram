import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Donation from "@/components/Donation";
import ConstructionProgress from "@/components/ConstructionProgress";
import OnlineServices from "@/components/OnlineServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ConstructionProgress />
        {/* <Schedule /> */}
        <OnlineServices />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
