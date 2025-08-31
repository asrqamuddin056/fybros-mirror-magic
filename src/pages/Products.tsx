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
              <h3 className="text-2xl font-bold text-foreground mb-4">Trail Lights</h3>
              <p className="text-muted-foreground">Bringing brightness to your life with innovative lighting solutions.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Wires & Cables</h3>
              <p className="text-muted-foreground">Fireproof electrical systems with premium PVC cables for ultimate safety.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Switchgears</h3>
              <p className="text-muted-foreground">Switch to safety with reliable and durable switchgear solutions.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;