import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
            About Fybros
          </h1>
          
          <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl">
              Where Innovation Meets Everyday Comfort
            </p>
            
            <p>
              In today's fast-paced world, your home and workplace deserve more than just ordinary electricals — they deserve the future. Fybros blends smart innovation with everyday practicality to deliver electrical solutions that are not only high-performing but also aesthetically refined and energy efficient.
            </p>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h2>
              <p>
                To revolutionize the electrical industry by providing smart, safe, and sustainable solutions that enhance the quality of life for our customers.
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h2>
              <p>
                To be the leading electrical solutions provider, known for innovation, quality, and customer satisfaction across the globe.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;