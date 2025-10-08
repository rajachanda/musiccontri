import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Crown, Award, Star, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const ALMA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Crown className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ALMA</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Advanced Little Musicians Academy</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              The pinnacle of musical education at LMA - an elite program for exceptional students.
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Elite Musical Training Program
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ALMA represents the advanced tier of our academy, designed for students who have demonstrated
                exceptional talent, dedication, and character.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/*
                { title: "National Winners", count: "15+", icon: Award },
                { title: "Professional Musicians", count: "8+", icon: Star },
                { title: "Teachers Trained", count: "12+", icon: Music },
                { title: "Scholarships", count: "20+", icon: Crown }
              */}
              { [
                { title: "National Winners", count: "15+", icon: Award },
                { title: "Professional Musicians", count: "8+", icon: Star },
                { title: "Teachers Trained", count: "12+", icon: Music },
                { title: "Scholarships", count: "20+", icon: Crown }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all bg-card">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.count}</div>
                    <div className="text-muted-foreground font-medium">{stat.title}</div>
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

export default ALMA;
  