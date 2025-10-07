import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Users, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const Mission = () => {
  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering every child to discover their musical potential and build confidence through the transformative power of music education.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                LMA is a temple of music, where guru, students, parents, and grandparents unite in pursuit of musical knowledge and moral values.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Here, wisdom and expertise foster holistic growth, transcending musical skills. LMA recognizes music's transformative power in shaping 
                character and imparting life lessons. It's a gathering place bound by a love for music and a dedication to personal development.
              </p>
            </div>

            {/* Mission Pillars */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Musical Excellence</h3>
                <p className="text-muted-foreground">Providing world-class music education that nurtures technical skill and artistic expression.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Character Building</h3>
                <p className="text-muted-foreground">Fostering moral values, discipline, and personal growth through musical practice.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Unity</h3>
                <p className="text-muted-foreground">Creating a supportive community where families come together through music.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
                <p className="text-muted-foreground">Developing not just musicians, but confident, well-rounded individuals.</p>
              </Card>
            </div>

            {/* Detailed Mission */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Commitment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">For Our Students</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Provide accessible, high-quality music education regardless of economic background
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Nurture individual talents while building ensemble skills
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Create performance opportunities to build confidence
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Instill discipline, dedication, and artistic appreciation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-secondary">For Our Community</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Preserve and promote classical Indian music traditions
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Bridge cultural gaps through universal language of music
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Support charitable causes through musical performances
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Create lasting bonds between families and generations
                    </li>
                  </ul>
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

export default Mission;
