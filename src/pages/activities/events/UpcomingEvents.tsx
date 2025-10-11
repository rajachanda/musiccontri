import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const UpcomingEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      title: "Annual Music Concert 2024",
      date: "December 15, 2024",
      time: "6:00 PM - 9:00 PM",
      venue: "Community Cultural Center",
      description: "Our grandest musical event featuring performances by students across all age groups and skill levels",
      registrationRequired: true,
      featured: true,
      capacity: "500 seats"
    },
    {
      title: "Christmas Carol Program",
      date: "December 22, 2024",
      time: "4:00 PM - 6:00 PM", 
      venue: "LMA Campus",
      description: "Students will perform traditional Christmas carols with Indian classical music arrangements",
      registrationRequired: false,
      featured: false,
      capacity: "Open to all"
    },
    {
      title: "New Year Musical Celebration",
      date: "December 31, 2024",
      time: "7:00 PM - 10:00 PM",
      venue: "Outdoor Amphitheater",
      description: "Welcome 2025 with melodious performances and community celebration",
      registrationRequired: true,
      featured: true,
      capacity: "300 seats"
    },
    {
      title: "Republic Day Cultural Program",
      date: "January 26, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "School Auditorium",
      description: "Patriotic songs and cultural performances celebrating our nation",
      registrationRequired: false,
      featured: false,
      capacity: "400 seats"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-2 sm:py-4">
          <Link 
            to="/activities/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Events</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Upcoming Events
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Mark your calendars! Join us for these exciting upcoming events and be part of our musical community.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Don't Miss These Events
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay updated with our latest events and register early to secure your spot. All events are designed to celebrate music and bring our community together.
                </p>
              </div>

              <div className="space-y-8">
                {upcomingEvents.map((event, index) => (
                  <Card 
                    key={index} 
                    className={`p-8 transition-all bg-card hover:shadow-lg ${
                      event.featured ? 'border-2 border-primary shadow-lg' : 'border border-border'
                    }`}
                  >
                    {event.featured && (
                      <div className="flex items-center gap-2 mb-4">
                        <Bell className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-primary font-semibold text-sm">Featured Event</span>
                      </div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{event.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.date}</p>
                                <p className="text-sm text-muted-foreground">Event Date</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-secondary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.time}</p>
                                <p className="text-sm text-muted-foreground">Duration</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.venue}</p>
                                <p className="text-sm text-muted-foreground">Venue</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-secondary" />
                              <div>
                                <p className="font-semibold text-foreground">{event.capacity}</p>
                                <p className="text-sm text-muted-foreground">Capacity</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          {event.registrationRequired ? (
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                              Register Now
                            </Button>
                          ) : (
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                              Free Entry - No Registration
                            </Button>
                          )}
                          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className={`w-full lg:w-64 h-48 rounded-lg flex items-center justify-center ${
                          event.featured 
                            ? 'bg-gradient-to-br from-primary/20 to-secondary/20' 
                            : 'bg-gradient-to-br from-muted/50 to-muted'
                        }`}>
                          <Calendar className={`w-16 h-16 ${event.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Event Newsletter Signup */}
              <div className="mt-16 bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to our event newsletter to receive early notifications about upcoming events, 
                  exclusive invitations, and special announcements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6">
                    Subscribe
                  </Button>
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

export default UpcomingEvents;
