import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Users, Clock, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const Workshops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workshops = [
    {
      title: "Advanced Raga Workshop",
      level: "Intermediate to Advanced",
      duration: "3 Days",
      description: "Deep dive into complex ragas with guest artists",
      icon: Music,
      color: "primary"
    },
    {
      title: "Voice Training Intensive",
      level: "All Levels",
      duration: "5 Days",
      description: "Comprehensive vocal training focusing on technique and expression",
      icon: Users,
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Workshops & Masterclasses</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Intensive learning experiences designed to accelerate your musical growth.
            </p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => {
                const Icon = workshop.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className={`w-16 h-16 bg-${workshop.color}/10 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${workshop.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                    <div className="mb-4">
                      <p className="text-sm text-primary font-semibold">{workshop.level}</p>
                      <p className="text-sm text-muted-foreground">{workshop.duration}</p>
                    </div>
                    <p className="text-muted-foreground">{workshop.description}</p>
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

export default Workshops;