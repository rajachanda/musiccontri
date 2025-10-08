import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Lightbulb, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const InspirationalProgrammes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programmes = [
    {
      title: "Music for Healing",
      description: "Students visit hospitals and old age homes to spread joy through music",
      impact: "500+ lives touched",
      icon: Heart,
      color: "primary"
    },
    {
      title: "Community Outreach",
      description: "Free concerts in underserved communities",
      impact: "10,000+ audience reached",
      icon: Users,
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Inspirational Programmes</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Beyond music education, we inspire hearts and transform lives through meaningful programs.
            </p>
          </div>
        </section>

        {/* Main Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {programmes.map((programme, index) => {
                const Icon = programme.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className={`w-16 h-16 bg-${programme.color}/10 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${programme.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{programme.title}</h3>
                    <p className="text-muted-foreground mb-4">{programme.description}</p>
                    <div className={`text-lg font-bold text-${programme.color}`}>{programme.impact}</div>
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

export default InspirationalProgrammes;
        