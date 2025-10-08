import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Music, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const JoinLMA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join LMA</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Become part of our musical family! Start your journey in Indian classical music with completely free education.
            </p>
          </div>
        </section>

        {/* Join Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Start Your Musical Journey Today
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Little Musicians Academy welcomes students of all ages and backgrounds. Our doors are open to everyone 
                who wishes to learn music, regardless of their family's financial situation.
              </p>
            </div>

            {/* Benefits of Joining */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Free Education</h3>
                <p className="text-muted-foreground">No tuition fees, no hidden costs. Music education should be accessible to all.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Teachers</h3>
                <p className="text-muted-foreground">Learn from experienced gurus who are passionate about sharing their knowledge.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Character Building</h3>
                <p className="text-muted-foreground">Develop discipline, respect, and moral values through musical practice.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Opportunities</h3>
                <p className="text-muted-foreground">Showcase your talents in recitals, competitions, and community events.</p>
              </Card>
            </div>

            {/* How to Join */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">How to Join LMA</h3>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-primary">Simple Steps to Get Started</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Contact Us</h5>
                        <p className="text-muted-foreground text-sm">Reach out to us through phone, email, or visit our academy.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-secondary-foreground font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Assessment</h5>
                        <p className="text-muted-foreground text-sm">We'll assess your current level and musical interests to place you in the right program.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Start Learning</h5>
                        <p className="text-muted-foreground text-sm">Begin your musical journey with our structured curriculum and caring teachers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-secondary">What We Offer</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Indian Classical Vocal Music</li>
                    <li>• Instrumental Training (Harmonium, Tabla)</li>
                    <li>• Music Theory and Notation</li>
                    <li>• Performance Training</li>
                    <li>• Cultural Education</li>
                    <li>• Character Development</li>
                    <li>• Regular Assessments and Feedback</li>
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Contact Us to Join
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

export default JoinLMA;
