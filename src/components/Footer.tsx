import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Discover the Future of Smart Living with Fybros
          </h2>
          <h3 className="text-lg text-muted-foreground mb-8">
            Where Innovation Meets Everyday Comfort
          </h3>
        </div>

        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-6">
          <p>
            In today's fast-paced world, your home and workplace deserve more than just ordinary electricals — they deserve the future. Fybros blends smart innovation with everyday practicality to deliver electrical solutions that are not only high-performing but also aesthetically refined and energy efficient.
          </p>

          <div className="mt-12">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Redefining Control with Elegant Modular Switches Design
            </h4>
            <p>
              Switches may be small, but at Fybros, we know they hold great power — literally and visually. Our modular switches design reflects a new era of smart safety and sleek sophistication. Each piece is engineered for flawless functionality and long-term reliability.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Brighten Life with Smart Lighting – Fybros LED Tube Lights
            </h4>
            <p>
              Let your space shine the right way. Fybros' LED tube lights are crafted to transform your everyday lighting into a vibrant experience. Whether you're cooking in the kitchen, relaxing in the living room, or focusing in your home office — our batten lights deliver consistent brightness while saving energy.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Unmatched Quality in Every Connection – Cables and Wires You Can Trust
            </h4>
            <p>
              Behind every great structure lies a network of dependable wiring. That's why Fybros offers a complete range of cables and wires for residential, industrial, and communication needs.
            </p>
          </div>
        </div>

        {/* Contact Information and Social Links */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">123 Electronics Street, Industrial Area, Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@fybros.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/products" className="block text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="/media" className="block text-muted-foreground hover:text-primary transition-colors">Media</a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Fybros. All rights reserved. Experience the difference — where smart design powers smarter living.
          </p>
        </div>
      </div>
    </footer>
  );
};