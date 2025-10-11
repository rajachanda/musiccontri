import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Calendar, Users, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GlobalWorkshops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workshops = [
    {
      title: "International Music Exchange",
      date: "Monthly",
      description: "Connect with music students and teachers from around the world",
      participants: "50+ countries",
      format: "Online"
    },
    {
      title: "World Music Fusion Workshop",
      date: "Quarterly",
      description: "Explore how Indian classical music blends with global musical traditions",
      participants: "Global artists",
      format: "Hybrid"
    },
    {
      title: "Cultural Heritage Sessions",
      date: "Bi-annually",
      description: "Deep dive into different cultural musical traditions with international experts",
      participants: "Cultural ambassadors",
      format: "Online"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Workshops</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Connecting cultures through music - International workshops that broaden horizons and build global friendships.
            </p>
          </div>
        </section>

        {/* Workshops */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  International Music Programs
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our global workshops connect LMA students with musicians and educators worldwide, 
                  fostering cultural exchange and musical growth through international collaboration.
                </p>
              </div>

              <div className="space-y-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Globe className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{workshop.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{workshop.description}</p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-secondary" />
                            <div>
                              <p className="font-semibold text-foreground">{workshop.date}</p>
                              <p className="text-sm text-muted-foreground">Frequency</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-semibold text-foreground">{workshop.participants}</p>
                              <p className="text-sm text-muted-foreground">Participants</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-secondary" />
                            <div>
                              <p className="font-semibold text-foreground">{workshop.format}</p>
                              <p className="text-sm text-muted-foreground">Format</p>
                            </div>
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

export default GlobalWorkshops;
