import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, DollarSign, Users, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const Charity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const charityProjects = [
    {
      title: "Music for Healing",
      description: "Our students visit hospitals and old age homes to spread joy through music",
      impact: "500+ patients reached",
      icon: Heart,
      color: "primary"
    },
    {
      title: "Education for All",
      description: "Supporting underprivileged children with free music education and instruments",
      impact: "200+ children supported",
      icon: Music,
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Charity & Service</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Music has the power to heal and inspire. Through our charity work, we spread joy to those who need it most.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {charityProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className={`w-16 h-16 bg-${project.color}/10 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${project.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className={`text-lg font-bold text-${project.color}`}>{project.impact}</div>
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

export default Charity;
        