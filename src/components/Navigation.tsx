import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownMenus = {
    about: {
      title: "About",
      items: [
        { label: "Our Mission", path: "/about/mission" },
        { label: "Our Vision", path: "/about/vision" },
        { label: "Our Guru", path: "/about/guru" },
        { label: "Our Mentor", path: "/about/mentor" },
        { label: "Testimonials", action: () => scrollToSection("testimonials") }
      ]
    },
    programs: {
      title: "Programs",
      items: [
        { label: "Join LMA", action: () => scrollToSection("contact") },
        { label: "Teaching Methods", action: () => scrollToSection("about") },
        { label: "Songs", action: () => scrollToSection("courses") }
      ]
    },
    students: {
      title: "Students",
      items: [
        { label: "Alumni", action: () => scrollToSection("testimonials") },
        { label: "Current Students", action: () => scrollToSection("about") },
        { label: "Success Stories", action: () => scrollToSection("testimonials") }
      ]
    },
    activities: {
      title: "Activities",
      items: [
        { label: "Events", action: () => scrollToSection("programs") },
        { label: "Charity", action: () => scrollToSection("about") },
        { label: "Workshops", action: () => scrollToSection("programs") }
      ]
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Go to home page"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">♪</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Little Musicians Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6" ref={dropdownRef}>
            {/* <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button> */}
          

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                About
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg animate-fade-in">
                  {dropdownMenus.about.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path || "#"}
                      onClick={() => {
                        if (item.action) item.action();
                        setActiveDropdown(null);
                      }}
                      className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            

            {/* Students Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("students")}
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Student Corner
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "students" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "students" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg animate-fade-in">
                  {dropdownMenus.students.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Activities Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("activities")}
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Activities
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "activities" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "activities" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg animate-fade-in">
                  {dropdownMenus.activities.items.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Donations
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact Us
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Home
              </button>
              
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                About LMA
              </button>

              {/* Mobile About Menu */}
              <div className="border-l-2 border-primary/20 pl-4">
                <p className="text-primary font-semibold mb-2">About</p>
                {dropdownMenus.about.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path || "#"}
                    onClick={() => {
                      if (item.action) item.action();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Programs Menu */}
              <div className="border-l-2 border-primary/20 pl-4">
                <p className="text-primary font-semibold mb-2">Programs</p>
                {dropdownMenus.programs.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Students Menu */}
              <div className="border-l-2 border-primary/20 pl-4">
                <p className="text-primary font-semibold mb-2">Students</p>
                {dropdownMenus.students.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Activities Menu */}
              <div className="border-l-2 border-primary/20 pl-4">
                <p className="text-primary font-semibold mb-2">Activities</p>
                {dropdownMenus.activities.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Gallery
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Contact
              </button>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full font-semibold shadow-lg"
              >
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
