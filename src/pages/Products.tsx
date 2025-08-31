import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Our Products
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Pedestal Fans</h3>
              <p className="text-muted-foreground">Bringing comfort to your life with innovative cooling solutions.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Wall Fans</h3>
              <p className="text-muted-foreground">Enhance your comfort with premium wall mounted fans for ultimate air circulation.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Table Fans</h3>
              <p className="text-muted-foreground">Personal cooling with reliable and durable table fan solutions.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;