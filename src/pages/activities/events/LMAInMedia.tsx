import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, Newspaper, Radio, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LMAInMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mediaFeatures = [
    {
      outlet: "Times of India",
      type: "Newspaper",
      headline: "Free Music Academy Transforms Young Lives",
      date: "March 2024",
      icon: Newspaper
    },
    {
      outlet: "All India Radio",
      type: "Radio",
      headline: "LMA Students Perform Classical Compositions",
      date: "February 2024",
      icon: Radio
    },
    {
      outlet: "ETV Telugu",
      type: "Television",
      headline: "Little Musicians Academy: A Musical Revolution",
      date: "January 2024",
      icon: Tv
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">LMA in Media</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Our story of free music education has touched hearts across media platforms, spreading awareness about our mission.
            </p>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Media Recognition
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LMA's impact on the community has been recognized by various media outlets, 
                  helping us reach more families and inspire similar initiatives.
                </p>
              </div>

              <div className="space-y-8">
                {mediaFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground">{feature.outlet}</h3>
                            <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                              {feature.type}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-primary mb-2">{feature.headline}</h4>
                          <p className="text-muted-foreground">{feature.date}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LMAInMedia;
