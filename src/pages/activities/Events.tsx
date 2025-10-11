import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("events");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventCategories = [
    { id: "events", label: "Events", path: "/activities/events" },
    { id: "past-events", label: "Past Events", path: "/activities/events/past-events" },
    { id: "celebrations", label: "Celebrations", path: "/activities/events/celebrations" },
    { id: "upcoming-events", label: "Upcoming Events", path: "/activities/events/upcoming-events" },
    { id: "health-helpline", label: "Health Helpline", path: "/activities/events/health-helpline" },
    { id: "global-workshops", label: "Global Workshops", path: "/activities/events/global-workshops" },
    { id: "charity", label: "Charity", path: "/activities/charity" },
    { id: "lma-media", label: "LMA in Media", path: "/activities/events/lma-media" },
    { id: "associated-events", label: "Associated Events", path: "/activities/events/associated-events" }
  ];

  const upcomingEvents = [
    {
      title: "Annual Music Concert 2024",
      date: "December 15, 2024",
      time: "6:00 PM",
      location: "Community Hall",
      description: "Our biggest event of the year featuring performances by all our students",
      participants: "200+ students"
    },
    {
      title: "Diwali Celebration",
      date: "November 12, 2024", 
      time: "5:00 PM",
      location: "LMA Campus",
      description: "Traditional celebration with music, dance, and cultural programs",
      participants: "All families welcome"
    },
    {
      title: "Music Workshop Series",
      date: "Every Saturday",
      time: "10:00 AM - 12:00 PM",
      location: "Online & On-campus",
      description: "Weekly workshops covering different aspects of Indian classical music",
      participants: "Open to all levels"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Join us for concerts, workshops, cultural celebrations, and community gatherings that bring our musical family together.
            </p>
          </div>
        </section>

        {/* Events Content with Sidebar */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Sidebar Navigation */}
              <div className="w-80 flex-shrink-0">
                <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden sticky top-24">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-border">
                    <h3 className="text-lg font-bold text-foreground">Event Categories</h3>
                  </div>
                  <nav className="p-0">
                    {eventCategories.map((category) => (
                      <Link
                        key={category.id}
                        to={category.path}
                        className={`block w-full text-left px-6 py-4 transition-colors border-b border-border/50 last:border-b-0 hover:bg-muted ${
                          activeCategory === category.id 
                            ? "bg-primary/10 text-primary font-semibold border-r-4 border-r-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                    Upcoming Events
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Stay updated with our latest events, workshops, and celebrations. Join our musical community 
                    and be part of these enriching experiences.
                  </p>
                </div>

                {/* Events Grid */}
                <div className="grid gap-8">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 text-foreground">{event.title}</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.date}</p>
                                <p className="text-sm text-muted-foreground">Date</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-secondary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.time}</p>
                                <p className="text-sm text-muted-foreground">Time</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.location}</p>
                                <p className="text-sm text-muted-foreground">Venue</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-secondary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.participants}</p>
                                <p className="text-sm text-muted-foreground">Participation</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="w-full md:w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                            <Calendar className="w-16 h-16 text-primary" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Don't Miss Our Events!</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Subscribe to our newsletter or follow us on social media to stay updated about upcoming events, 
                    workshops, and special performances.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                      Subscribe to Newsletter
                    </button>
                    <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                      Contact Us for Events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
