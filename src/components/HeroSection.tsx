import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-background flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="group">
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-extrabold mb-4 md:mb-8 tracking-[0.2em] animate-fade-in">
            <img 
              src="/lovable-uploads/d7081175-b511-492e-b638-ffed2107f3d4.png" 
              alt="Kanstar Bluechef" 
              className="h-20 md:h-48 lg:h-64 mx-auto group-hover:scale-105 transition-all duration-700 ease-out drop-shadow-2xl"
              style={{filter: "brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(7467%) hue-rotate(0deg) brightness(95%) contrast(105%)"}}
            />
          </h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 md:mb-8 tracking-[0.2em] md:tracking-[0.3em] uppercase group-hover:scale-105 transition-all duration-700 ease-out">
            BLUECHEF
          </h2>
        </div>
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300">
          Know More
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        
        {/* Product Image Placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-2xl h-64 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-lg">Electrical Switches Image</span>
          </div>
        </div>
      </div>
    </section>;
};