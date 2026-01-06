import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import DealsAndOffer from "./components/DealsAndOffer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <DealsAndOffer /> */}
    </div>
  );
}
