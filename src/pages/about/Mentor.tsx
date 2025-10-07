import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Mentor = () => {
  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mentor</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              The inspiring force behind LMA's vision, whose guidance and support have made free music education a reality for hundreds of children.
            </p>
          </div>
        </section>

        {/* Mentor Profile */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Sri Komanduri Ramachary
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our beloved mentor and guiding light, Sri Komanduri Ramachary, established Little Musicians Academy 
                    in 1999 with the noble vision of providing free music education to all children. His unwavering 
                    commitment to community service and cultural preservation has been the foundation of LMA's success.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    With the blessings and support from Late Dr. S.P. Balasubrahmanyam garu, he created a sacred space 
                    where music transcends economic barriers. His philosophy that "music is a divine gift that should 
                    reach every child" continues to inspire our community today.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Under his mentorship, LMA has grown from a small initiative to a thriving academy that has touched 
                    the lives of over 850 children, providing them not just musical education but also moral values 
                    and life skills.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">24+</div>
                      <p className="text-muted-foreground">Years of Service</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary">850+</div>
                      <p className="text-muted-foreground">Lives Impacted</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
                    <div className="w-48 h-48 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Heart className="w-24 h-24 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sri Komanduri Ramachary</h3>
                    <p className="text-muted-foreground">Founder & Mentor</p>
                  </div>
                </div>
              </div>

              {/* Vision & Legacy */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compassionate Vision</h3>
                  <p className="text-muted-foreground">Believing that music education should be free and accessible to every child, regardless of background.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Educational Pioneer</h3>
                  <p className="text-muted-foreground">Innovative approach combining traditional values with modern teaching methodologies.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Leader</h3>
                  <p className="text-muted-foreground">Building bridges between families and generations through the universal language of music.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Legacy Builder</h3>
                  <p className="text-muted-foreground">Creating lasting impact that will benefit generations of young musicians.</p>
                </Card>
              </div>

              {/* Philosophy & Impact */}
              <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Philosophy & Impact</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Core Beliefs</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Music is a divine gift that should reach every child
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Economic status should never be a barrier to learning
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Character building through musical discipline
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Preserving cultural heritage for future generations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-secondary">Lasting Legacy</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Established the largest free music academy in Hyderabad
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Inspired volunteer teachers to join the mission
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Created a model for community-driven education
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Built lasting bonds within the community
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                  <blockquote className="text-lg text-muted-foreground italic text-center">
                    "Every child who learns music at LMA carries forward not just musical knowledge, 
                    but the values of compassion, dedication, and community service. This is how we 
                    build a better society - one student at a time."
                  </blockquote>
                  <p className="text-center mt-4 font-semibold text-primary">- Sri Komanduri Ramachary</p>
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

export default Mentor;
