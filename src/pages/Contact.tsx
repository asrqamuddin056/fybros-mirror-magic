import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">123 Fan Street, Industrial Area, Mumbai, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@kanstarbluechef.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;