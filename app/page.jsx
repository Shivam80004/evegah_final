import HeroSection from "@/components/Home/HeroSection";
import PastRecap from "@/components/Home/PastRecap";
import HowItWork from "@/components/Home/HowItWork";
import Achivement from "@/components/Home/Achivement";
import ProductCard from "@/components/Home/ProductCard";
import Information from "@/components/Home/Information";

export default function Home() {
  return (
    <div>

      {/* Hero Section - 1 */}
      <HeroSection />

      {/* Hero Section - 2 */}
      <PastRecap />
      
      {/* How It Work Section - 3 */}
      <HowItWork />

      {/* Achivement Section - 4 */}
      <Achivement />

      {/* product Display Section - 5 */}
      <ProductCard />

      {/* Information Section - 6 */}
      <Information />

    </div>
  );
}