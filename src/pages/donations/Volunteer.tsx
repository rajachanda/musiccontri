import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Music, Camera, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteerOpportunities = [
    {
      title: "Music Assistant",
      description: "Help with music classes and student activities",
      commitment: "2-3 hours/week",
      icon: Music
    },
    {
      title: "Event Support",
      description: "Assist in organizing concerts and cultural events",
      commitment: "Flexible timing",
      icon: Users
    },
    {
      title: "Photography/Videography",
      description: "Document our events and student progress",
      commitment: "Event-based",
      icon: Camera
    },
    {
      title: "Administrative Support",
      description: "Help with administrative tasks and coordination",
      commitment: "1-2 hours/week",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Volunteer With Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Share your skills and passion to make a difference in children's lives through music education.
            </p>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
                  How You Can Help
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
                  We welcome volunteers from all backgrounds. Whether you have musical skills or simply want to support our mission, there's a place for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                {volunteerOpportunities.map((opportunity, index) => {
                  const Icon = opportunity.icon;
                  return (
                    <Card key={index} className="p-6 lg:p-8 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{opportunity.title}</h3>
                          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{opportunity.description}</p>
                          <div className="text-sm text-primary font-semibold">{opportunity.commitment}</div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Volunteer Application Form */}
              <Card className="p-6 sm:p-8 lg:p-12 shadow-lg border border-border">
                <div className="text-center mb-8">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                    Join Our Volunteer Team
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                    Fill out the form below and we'll get in touch with you about volunteer opportunities that match your interests and availability.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Area of Interest</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                      <option>Select area of interest</option>
                      <option>Music Assistant</option>
                      <option>Event Support</option>
                      <option>Photography/Videography</option>
                      <option>Administrative Support</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Experience & Skills</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Tell us about your relevant experience and skills"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Availability</label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="When are you available to volunteer?"
                    />
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg">
                    Submit Volunteer Application
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
