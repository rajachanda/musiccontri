import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, Users, Award, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CorporatePartnerships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTypes = [
    {
      title: "CSR Partnership",
      description: "Align with your corporate social responsibility goals",
      benefits: ["Tax benefits", "CSR compliance", "Employee engagement programs"],
      icon: Building
    },
    {
      title: "Event Sponsorship",
      description: "Sponsor our concerts and cultural events",
      benefits: ["Brand visibility", "Community engagement", "Networking opportunities"],
      icon: Award
    },
    {
      title: "Employee Volunteering",
      description: "Engage your team in meaningful volunteer activities",
      benefits: ["Team building", "Skill development", "Social impact"],
      icon: Users
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
              Corporate Partnerships
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Partner with us to create meaningful social impact while achieving your CSR objectives and engaging your employees.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {partnershipTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <Card key={index} className="p-6 lg:p-8 hover:shadow-lg transition-all">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-center">{type.title}</h3>
                      <p className="text-muted-foreground mb-6 text-center text-sm leading-relaxed">{type.description}</p>
                      <div className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Contact Form */}
              <Card className="p-6 sm:p-8 lg:p-12 shadow-lg border border-border">
                <div className="text-center mb-8">
                  <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                    Let's Partner Together
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                    Contact us to discuss how we can create a customized partnership that aligns with your company's values and objectives.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Person</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Enter your name"
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
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Partnership Interest</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Tell us about your partnership goals and interests"
                    />
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg">
                    Submit Partnership Inquiry
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

export default CorporatePartnerships;
