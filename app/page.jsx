import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import DealsAndOffer from "./components/DealsAndOffer";
import HomeAndOutdoor from "./components/HomeAndOutdoor";
import ConsumerAndElectronics from "./components/ConsumerAndElectronics";
import CtaSection from "./components/CtaSection";
import RecommendedItems from "./components/RecommendedItems";
import OurExtraServices from "./components/OurExtraServices";
import SupplierByReigons from "./components/SupplierByReigons";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DealsAndOffer />
      <HomeAndOutdoor />
      <ConsumerAndElectronics />
      <CtaSection />
      <RecommendedItems />
      <OurExtraServices />
      <SupplierByReigons />
    </div>
  );
}
