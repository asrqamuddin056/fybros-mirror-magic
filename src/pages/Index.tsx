import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { TrendingSection } from "@/components/TrendingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <ProductSection 
        title="TRAIL LIGHT"
        subtitle="Bringing Brightness To Your Life"
        description="Add a Touch of Style to your spaces."
      />
      
      <ProductSection 
        title="Wires and Cables"
        subtitle="The ultimate solution for electrical safety"
        description="Fireproof your electrical systems with PVC cables"
        reverse={true}
      />
      
      <ProductSection 
        title="SWITCHGEARS"
        subtitle="Switch to safety with reliable switchgears"
        description="Unlocking a safer tomorrow"
      />
      
      <TrendingSection />
      
      <Footer />
    </div>
  );
};

export default Index;
