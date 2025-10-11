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
    students: {
      title: "Student Corner",
      items: [
        { label: "Join LMA", path: "/student-corner/join-lma" },
        { label: "Teaching Methodology", path: "/student-corner/teaching-methodology" },
        { 
          label: "Songs and Lyrics", 
          path: "/student-corner/songs-lyrics",
          submenu: [
            { label: "Composed by Sri Ramachary K", path: "/student-corner/songs-lyrics/composed-by-sri-ramachary-k" },
            { label: "Devotional Songs", path: "/student-corner/songs-lyrics/devotional-songs" },
            { label: "Light Music Songs", path: "/student-corner/songs-lyrics/light-music-songs" },
            { label: "Annamacharya Keerthanalu", path: "/student-corner/songs-lyrics/annamacharya-keerthanalu" },
            { label: "Patriotic Songs", path: "/student-corner/songs-lyrics/patriotic-songs" }
          ]
        },
        { label: "Stars of LMA", path: "/student-corner/stars-of-lma" },
        { label: "Budding Artists", path: "/student-corner/budding-artists" },
        { label: "ALMA", path: "/student-corner/alma" },
        { label: "Inspirational Programmes", path: "/student-corner/inspirational-programmes" }
      ]
    },
    activities: {
      title: "Activities",
      items: [
        { label: "Events", path: "/activities/events" },
        { label: "Charity", path: "/activities/charity" },
        { label: "Workshops", path: "/activities/workshops" }
      ]
    },
    donations: {
      title: "Donations",
      items: [
        { label: "Donate Now", path: "/donations" },
        { label: "Sponsor a Child", path: "/donations/sponsor-child" },
        { label: "Monthly Donations", path: "/donations/monthly" },
        { label: "Corporate Partnerships", path: "/donations/corporate" },
        { label: "Volunteer", path: "/donations/volunteer" }
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg animate-fade-in z-50">
                  <Link
                    to="/student-corner/join-lma"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors first:rounded-t-lg"
                  >
                    Join LMA
                  </Link>
                  <Link
                    to="/student-corner/teaching-methodology"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Teaching Methodology
                  </Link>
                  
                  {/* Songs and Lyrics with submenu */}
                  <div className="relative group">
                    <Link
                      to="/student-corner/songs-lyrics"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center justify-between w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      Songs and Lyrics
                      <ChevronDown className="w-3 h-3 ml-1" />
                    </Link>
                    <div className="absolute left-full top-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ml-1">
                      <Link
                        to="/student-corner/songs-lyrics/composed-by-sri-ramachary-k"
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors first:rounded-t-lg text-sm"
                      >
                        Composed by Sri Ramachary K
                      </Link>
                      <Link
                        to="/student-corner/songs-lyrics/devotional-songs"
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors text-sm"
                      >
                        Devotional Songs
                      </Link>
                      <Link
                        to="/student-corner/songs-lyrics/light-music-songs"
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors text-sm"
                      >
                        Light Music Songs
                      </Link>
                      <Link
                        to="/student-corner/songs-lyrics/annamacharya-keerthanalu"
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors text-sm"
                      >
                        Annamacharya Keerthanalu
                      </Link>
                      <Link
                        to="/student-corner/songs-lyrics/patriotic-songs"
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors last:rounded-b-lg text-sm"
                      >
                        Patriotic Songs
                      </Link>
                    </div>
                  </div>

                  <Link
                    to="/student-corner/stars-of-lma"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Stars of LMA
                  </Link>
                  <Link
                    to="/student-corner/budding-artists"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Budding Artists
                  </Link>
                  <Link
                    to="/student-corner/alma"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    ALMA
                  </Link>
                  <Link
                    to="/student-corner/inspirational-programmes"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors last:rounded-b-lg"
                  >
                    Inspirational Programmes
                  </Link>
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

            {/* Donations Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("donations")}
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Donations
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "donations" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "donations" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg animate-fade-in">
                  {dropdownMenus.donations.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path || "#"}
                      onClick={() => {
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

            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contact Us
            </button>

            <Button
              onClick={() => window.location.href = '/donations'}
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
                <p className="text-primary font-semibold mb-2">Student Corner</p>
                <Link
                  to="/student-corner/join-lma"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  Join LMA
                </Link>
                <Link
                  to="/student-corner/teaching-methodology"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  Teaching Methodology
                </Link>
                <Link
                  to="/student-corner/songs-lyrics"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  Songs and Lyrics
                </Link>
                <div className="ml-4 space-y-1">
                  <Link
                    to="/student-corner/songs-lyrics/composed-by-sri-ramachary-k"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-xs"
                  >
                    • Composed by Sri Ramachary K
                  </Link>
                  <Link
                    to="/student-corner/songs-lyrics/devotional-songs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-xs"
                  >
                    • Devotional Songs
                  </Link>
                  <Link
                    to="/student-corner/songs-lyrics/light-music-songs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-xs"
                  >
                    • Light Music Songs
                  </Link>
                  <Link
                    to="/student-corner/songs-lyrics/annamacharya-keerthanalu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-xs"
                  >
                    • Annamacharya Keerthanalu
                  </Link>
                  <Link
                    to="/student-corner/songs-lyrics/patriotic-songs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-xs"
                  >
                    • Patriotic Songs
                  </Link>
                </div>
                <Link
                  to="/student-corner/stars-of-lma"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  Stars of LMA
                </Link>
                <Link
                  to="/student-corner/budding-artists"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  Budding Artists
                </Link>
                <Link
                  to="/student-corner/alma"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  ALMA
                </Link>
                <Link
                  to="/student-corner/inspirational-programmes"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                >
                  Inspirational Programmes
                </Link>
              </div>

              {/* Mobile Activities Menu */}
              <div className="border-l-2 border-primary/20 pl-4">
                <p className="text-primary font-semibold mb-2">Activities</p>
                {dropdownMenus.activities.items.map((item, index) => (
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

              {/* Mobile Donations Menu */}
              <div className="border-l-2 border-primary/20 pl-4">
                <p className="text-primary font-semibold mb-2">Donations</p>
                {dropdownMenus.donations.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path || "#"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground hover:text-primary transition-colors text-left py-1 text-sm"
                  >
                    {item.label}
                  </Link>
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
                onClick={() => window.location.href = '/donations'}
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
