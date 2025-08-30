import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-wider">
          SERIES 11
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          Time to re-invent
        </h2>
        <Button 
          variant="outline" 
          className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
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
    </section>
  );
};