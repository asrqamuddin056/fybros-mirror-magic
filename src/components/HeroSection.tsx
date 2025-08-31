import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-background flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 tracking-[0.2em] animate-fade-in">
          <img 
            src="/lovable-uploads/d7081175-b511-492e-b638-ffed2107f3d4.png" 
            alt="Kanstar Bluechef" 
            className="h-32 md:h-48 lg:h-64 mx-auto hover:scale-105 transition-all duration-700 ease-out drop-shadow-2xl filter brightness-110"
          />
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 tracking-[0.3em] uppercase">
          BLUECHEF
        </h2>
        <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
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