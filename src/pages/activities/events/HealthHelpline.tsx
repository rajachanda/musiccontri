import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Phone, Users, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HealthHelpline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const healthServices = [
    {
      service: "Mental Health Support",
      description: "Counseling and support for students and families dealing with stress and anxiety",
      contact: "1800-XXX-XXXX",
      availability: "24/7"
    },
    {
      service: "Medical Emergency Line",
      description: "Immediate medical assistance and guidance during health emergencies",
      contact: "1800-XXX-YYYY",
      availability: "24/7"
    },
    {
      service: "Nutrition Guidance",
      description: "Professional advice on healthy eating habits for growing musicians",
      contact: "1800-XXX-ZZZZ",
      availability: "Mon-Fri 9AM-6PM"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Health Helpline</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive health support services for our LMA community members and their families.
            </p>
          </div>
        </section>

        {/* Health Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Our Health Support Services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LMA cares about the complete well-being of our students and their families. 
                  Our health helpline provides professional support and guidance when you need it most.
                </p>
              </div>

              <div className="space-y-8">
                {healthServices.map((service, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Heart className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{service.service}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-secondary" />
                            <div>
                              <p className="font-semibold text-foreground">{service.contact}</p>
                              <p className="text-sm text-muted-foreground">Helpline Number</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-semibold text-foreground">{service.availability}</p>
                              <p className="text-sm text-muted-foreground">Available</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-16 bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Emergency Contact</h3>
                <p className="text-muted-foreground mb-6">
                  For immediate medical emergencies, please call emergency services first, then contact our helpline for additional support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Emergency: 108
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    LMA Health Support: 1800-XXX-HELP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HealthHelpline;
