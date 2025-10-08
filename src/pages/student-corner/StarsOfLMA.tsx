import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const StarsOfLMA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stars = [
    {
      name: "Ananya Sharma",
      achievement: "National Young Artist Award Winner",
      year: "LMA Alumni 2018",
      description: "Started at LMA at age 6, now a professional classical vocalist",
      icon: Trophy,
      color: "primary"
    },
    {
      name: "Rohan Patel",
      achievement: "Music Teacher & Community Leader",
      year: "LMA Alumni 2015",
      description: "Now teaches music to underprivileged children",
      icon: Star,
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Stars of LMA</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Celebrating our talented students who continue to shine bright in their musical journeys.
            </p>
          </div>
        </section>

        {/* Stars Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {stars.map((star, index) => {
                const Icon = star.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className={`w-16 h-16 bg-${star.color}/10 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${star.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{star.name}</h3>
                    <p className="text-lg font-semibold text-primary mb-1">{star.achievement}</p>
                    <p className="text-sm text-muted-foreground mb-4">{star.year}</p>
                    <p className="text-muted-foreground">{star.description}</p>
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

export default StarsOfLMA;
 