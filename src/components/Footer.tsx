import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/10 text-background py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-2xl">♪</span>
              </div>
              <span className="font-heading font-bold text-xl text-shadow">
                Little Musicians Academy
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Nurturing young musical talent since 1999. Building confidence, creativity, 
              and a lifelong love of music through completely free education for all children.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-6 text-shadow-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", action: () => scrollToSection("home") },
                { label: "About Us", action: () => scrollToSection("about") },
                { label: "Our Courses", action: () => scrollToSection("courses") },
                { label: "Testimonials", action: () => scrollToSection("testimonials") },
                { label: "Contact", action: () => scrollToSection("contact") }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={item.action}
                    className="text-background/80 hover:text-primary transition-all duration-200 hover:translate-x-1 font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-6 text-shadow-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-background/80 leading-relaxed">
                  123 Music Street, Harmony District, City 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <a
                  href="tel:5551234567"
                  className="text-background/80 hover:text-primary transition-colors font-medium"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a
                  href="mailto:info@littlemusiciansacademy.com"
                  className="text-background/80 hover:text-primary transition-colors font-medium"
                >
                  info@littlemusiciansacademy.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 text-shadow-sm">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-200 group transform hover:scale-110 hover:-translate-y-1"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-all duration-200 group transform hover:scale-110 hover:-translate-y-1"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </a>
            </div>
            
            <div className="space-y-3">
              <p className="font-semibold text-primary">Office Hours</p>
              <div className="space-y-2 text-sm">
                <p className="text-background/80">Monday - Friday: 9AM - 8PM</p>
                <p className="text-background/80">Saturday: 9AM - 5PM</p>
                <p className="text-background/80">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 leading-relaxed">
            © {new Date().getFullYear()} Little Musicians Academy. All rights reserved. 
            <span className="block mt-2 text-primary/80 font-medium">
              Building dreams through music, one student at a time.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
        
