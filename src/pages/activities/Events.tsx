import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, Music, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      title: "Annual Music Festival",
      date: "December 15, 2024",
      time: "6:00 PM - 9:00 PM",
      venue: "LMA Main Auditorium",
      description: "A grand celebration featuring performances by all our students",
      icon: Music,
      color: "primary",
      image: "🎭"
    },
    {
      title: "Community Charity Concert",
      date: "January 20, 2025",
      time: "7:00 PM - 10:00 PM",
      venue: "Public Gardens",
      description: "Fundraising concert to support underprivileged children",
      icon: Star,
      color: "secondary",
      image: "❤️"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events & Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating music, culture, and community through our vibrant calendar of events.
            </p>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className="flex items-start mb-6">
                      <div className="text-6xl mr-6">{event.image}</div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">{event.title}</h3>
                        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-secondary" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                            {event.venue}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
