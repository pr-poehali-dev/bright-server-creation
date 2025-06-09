import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <HeroSection />
      <GamesSection />
      <PricingSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
