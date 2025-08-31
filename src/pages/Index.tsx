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
        title="CEILING FANS"
        subtitle="Elevate Your Space with Premium Cooling"
        description="Transform your room with stylish and efficient ceiling fans."
      />
      
      <ProductSection 
        title="PEDESTAL FANS"
        subtitle="Bringing Comfort To Your Life"
        description="Add a Touch of Style to your spaces."
      />
      
      <ProductSection 
        title="WALL FANS"
        subtitle="The ultimate solution for air circulation"
        description="Enhance your comfort with premium wall mounted fans"
        reverse={true}
      />
      
      <ProductSection 
        title="TABLE FANS"
        subtitle="Personal cooling with reliable table fans"
        description="Unlocking a cooler tomorrow"
      />
      
      <TrendingSection />
      
      <Footer />
    </div>
  );
};

export default Index;
