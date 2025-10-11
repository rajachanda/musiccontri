import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, CreditCard, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MonthlyDonations = () => {
  const [selectedAmount, setSelectedAmount] = useState("1000");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const monthlyAmounts = ["500", "1000", "2500", "5000"];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Monthly Donations
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Make a recurring monthly donation and create sustained impact in children's musical education.
            </p>
          </div>
        </section>

        {/* Monthly Donation Form */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 sm:p-8 lg:p-12 shadow-lg border border-border">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground text-center">
                  Set Up Monthly Donation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-secondary">Choose Monthly Amount</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {monthlyAmounts.map((amount) => (
                        <Button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          className={`py-3 text-sm sm:text-base ${
                            selectedAmount === amount 
                              ? "bg-primary text-primary-foreground" 
                              : "border-primary text-primary hover:bg-primary/10"
                          }`}
                        >
                          ₹{amount}/month
                        </Button>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Automatic monthly deduction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Secure payment processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Cancel anytime</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                    <h4 className="font-semibold text-secondary mb-4">Your Monthly Impact:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly donation:</span>
                        <span className="font-semibold">₹{selectedAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual impact:</span>
                        <span className="font-semibold">₹{parseInt(selectedAmount) * 12}</span>
                      </div>
                      <div className="border-t pt-3 mt-4">
                        <p className="text-muted-foreground">
                          Your monthly contribution will help provide consistent support for music education programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg">
                    Start Monthly Donation ₹{selectedAmount}
                  </Button>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                    Tax benefits under Section 80G applicable
                  </p>
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

export default MonthlyDonations;
