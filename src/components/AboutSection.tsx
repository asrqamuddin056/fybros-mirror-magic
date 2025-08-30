import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-wider">
            THE 5 BRO'S
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Meet the mind shaping industry
          </p>
          <Button 
            variant="outline"
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Know More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl h-80 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-lg">THE 5 BRO'S Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};