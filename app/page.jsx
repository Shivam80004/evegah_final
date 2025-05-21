import HeroSection from "@/components/Home/HeroSection";
import PastRecap from "@/components/Home/PastRecap";
import HowItWork from "@/components/Home/HowItWork";
import Achivement from "@/components/Home/Achivement";
import ProductCard from "@/components/Home/ProductCard";
import Information from "@/components/Home/Information";
import HowItWorkSample from "@/components/Home/HowItWorkSample";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div>

      {/* Hero Section - 1 */}
      <HeroSection />

      {/* Hero Section - 2 */}
      <PastRecap />
      
      {/* How It Work Section - 3 */}
      <HowItWork />

      {/* Sample how it work */}
      {/* <HowItWorkSample /> */}

      {/* Achivement Section - 4 */}
      <Achivement />

      {/* product Display Section - 5 */}
      <ProductCard />

      {/* Information Section - 6 */}
      {/* <Information /> */}

      {/* Testimonial Section - 7 */}
      <Testimonial />

    </div>
  );
}