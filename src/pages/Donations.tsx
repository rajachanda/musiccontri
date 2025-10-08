import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, DollarSign, Music, Users, Gift, Award, CreditCard, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState("1000");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const donationImpacts = [
    {
      amount: "₹500",
      impact: "Provides one child with music books and basic materials for a month",
      icon: Music,
      color: "primary"
    },
    {
      amount: "₹1,000",
      impact: "Sponsors a child's complete music education for two months",
      icon: Heart,
      color: "secondary"
    },
    {
      amount: "₹2,500",
      impact: "Funds a musical instrument for a deserving student",
      icon: Gift,
      color: "primary"
    },
    {
      amount: "₹5,000",
      impact: "Supports a student's annual learning journey with materials and resources",
      icon: Award,
      color: "secondary"
    },
    {
      amount: "₹10,000",
      impact: "Sponsors complete music education for one child for an entire year",
      icon: Users,
      color: "primary"
    },
    {
      amount: "₹25,000",
      impact: "Establishes a mini music library with books and audio resources",
      icon: Music,
      color: "secondary"
    }
  ];

  const predefinedAmounts = ["500", "1000", "2500", "5000", "10000", "25000"];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Your donation helps us provide free music education to children from all backgrounds, nurturing talent and building character through music.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Your Impact in Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every rupee you donate directly supports our mission of providing free music education. 
                See how your contribution creates lasting change in young lives.
              </p>
            </div>

            {/* Impact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {donationImpacts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                    <div className={`w-16 h-16 bg-${item.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 text-${item.color}`} />
                    </div>
                    <div className={`text-2xl font-bold text-${item.color} mb-3 text-center`}>{item.amount}</div>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.impact}</p>
                  </Card>
                );
              })}
            </div>

            {/* Donation Form */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-2xl border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Make a Donation</h3>
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-secondary">Choose Donation Amount</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`py-3 ${
                          selectedAmount === amount 
                            ? "bg-primary text-primary-foreground" 
                            : "border-primary text-primary hover:bg-primary/10"
                        }`}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-4 text-lg">
                    Donate ₹{selectedAmount || "0"}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Your donation is eligible for tax benefits under Section 80G
                  </p>
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

export default Donations;
