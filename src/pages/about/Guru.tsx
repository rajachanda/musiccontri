import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Music, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const Guru = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Guru</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              The guiding light of Little Musicians Academy, whose dedication and wisdom have shaped thousands of young minds.
            </p>
          </div>
        </section>

        {/* Guru Profile */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Respected Guru Ji
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    With over three decades of experience in music education and performance, our revered Guru has been 
                    the cornerstone of LMA's success. Their philosophy of combining traditional values with modern teaching 
                    methods has created a unique learning environment where students don't just learn music, but develop as individuals.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    A firm believer that music is not just an art form but a way of life, our Guru has dedicated their 
                    life to nurturing young talent and preserving the rich heritage of Indian classical music while 
                    making it accessible to children from all backgrounds.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">30+</div>
                      <p className="text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary">5000+</div>
                      <p className="text-muted-foreground">Students Taught</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
                    <div className="w-48 h-48 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Music className="w-24 h-24 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Guru Maharaj</h3>
                    <p className="text-muted-foreground">Founder & Chief Instructor</p>
                  </div>
                </div>
              </div>

              {/* Philosophy & Approach */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compassionate Teaching</h3>
                  <p className="text-muted-foreground">Every student is treated with patience, understanding, and individual attention.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Traditional Values</h3>
                  <p className="text-muted-foreground">Preserving the rich heritage of Indian classical music and cultural values.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Builder</h3>
                  <p className="text-muted-foreground">Creating strong bonds between students, families, and the wider community.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Excellence Driven</h3>
                  <p className="text-muted-foreground">Striving for the highest standards in both musical and personal development.</p>
                </Card>
              </div>

              {/* Achievements & Recognition */}
              <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Achievements & Recognition</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Musical Accomplishments</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Trained under renowned classical music masters
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Performed in prestigious venues across the country
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Recipient of multiple awards for musical excellence
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        Published researcher in music education methodologies
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-secondary">Teaching Excellence</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Founded LMA with vision of accessible music education
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Developed innovative curriculum combining tradition and modernity
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Mentored hundreds of successful musicians and teachers
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">♪</span>
                        Recognized for contributions to community development
                      </li>
                    </ul>
                  </div>
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

export default Guru;
