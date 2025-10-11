import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Calendar, Music, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AssociatedEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const associatedEvents = [
    {
      title: "Cultural Organization Collaborations",
      description: "Partnership events with local cultural organizations and temples",
      frequency: "Monthly",
      type: "Community Partnership"
    },
    {
      title: "School Visit Programs",
      description: "LMA students perform at schools to promote classical music",
      frequency: "Bi-weekly",
      type: "Educational Outreach"
    },
    {
      title: "Festival Participations",
      description: "Active participation in city-wide cultural festivals and competitions",
      frequency: "Seasonal",
      type: "Cultural Events"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/activities/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Associated Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Collaborative programs and partnerships that extend LMA's reach into the broader community.
            </p>
          </div>
        </section>

        {/* Associated Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Community Partnerships
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LMA actively collaborates with various organizations and institutions to spread the joy of music 
                  and create more opportunities for our students to perform and learn.
                </p>
              </div>

              <div className="space-y-8">
                {associatedEvents.map((event, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                          <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                            {event.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-semibold text-foreground">{event.frequency}</p>
                            <p className="text-sm text-muted-foreground">Frequency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AssociatedEvents;
