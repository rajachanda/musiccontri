import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, User, BookOpen, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SponsorChild = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sponsorshipTiers = [
    {
      title: "Basic Sponsorship",
      amount: "₹2,000/month",
      description: "Cover basic music education expenses",
      benefits: ["Monthly progress reports", "Photo updates", "Certificate of sponsorship"],
      icon: BookOpen
    },
    {
      title: "Complete Sponsorship", 
      amount: "₹5,000/month",
      description: "Full education support including instruments",
      benefits: ["All basic benefits", "Instrument provision", "Direct communication", "Annual performance video"],
      icon: Music,
      featured: true
    },
    {
      title: "Premium Sponsorship",
      amount: "₹10,000/month", 
      description: "Comprehensive support with advanced training",
      benefits: ["All previous benefits", "Advanced classes", "Performance opportunities", "Mentorship programs"],
      icon: Heart
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
              Sponsor a Child
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Transform a child's life through music education. Sponsor a deserving child and watch them flourish through the power of music.
            </p>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
                  Choose Your Sponsorship
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
                  Every child deserves the gift of music. Choose a sponsorship level that works for you and make a lasting impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {sponsorshipTiers.map((tier, index) => {
                  const Icon = tier.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-6 lg:p-8 text-center hover:shadow-lg transition-all ${
                        tier.featured ? 'border-2 border-primary shadow-lg scale-105' : 'border border-border'
                      }`}
                    >
                      {tier.featured && (
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                          Most Popular
                        </div>
                      )}
                      
                      <div className={`w-16 h-16 ${tier.featured ? 'bg-primary' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <Icon className={`w-8 h-8 ${tier.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                      <div className="text-2xl font-bold text-primary mb-4">{tier.amount}</div>
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{tier.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {tier.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-left">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className={`w-full ${
                          tier.featured 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                            : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                        }`}
                      >
                        Sponsor Now
                      </Button>
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

export default SponsorChild;
