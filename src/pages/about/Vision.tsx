import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Eye, Globe, Star, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Vision = () => {
  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              To be a beacon of musical excellence that transforms lives and builds a harmonious society through the power of music.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Building Tomorrow's Musical Leaders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We envision a world where every child has access to quality music education, where artistic expression flourishes, 
                and where the values learned through music create better human beings and stronger communities.
              </p>
            </div>

            {/* Vision Elements */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clear Vision</h3>
                <p className="text-muted-foreground">A future where music education is accessible to all, regardless of background or circumstances.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                <p className="text-muted-foreground">Spreading the joy of music and Indian classical traditions to communities worldwide.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">Setting the highest standards in music education and character development.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">Pioneering new methods while honoring traditional teaching approaches.</p>
              </Card>
            </div>

            {/* Future Goals */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Our 2030 Vision</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <p className="text-muted-foreground">Students Impacted</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50</div>
                  <p className="text-muted-foreground">Learning Centers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Free Education</p>
                </div>
              </div>
              
              <div className="mt-12 space-y-6">
                <h4 className="text-xl font-semibold text-foreground">Long-term Aspirations</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Educational Excellence</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Establish LMA as a premier music education institution</li>
                      <li>• Develop innovative curriculum combining tradition and technology</li>
                      <li>• Create scholarship programs for underprivileged students</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">Cultural Preservation</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Document and preserve traditional music forms</li>
                      <li>• Train next generation of music teachers</li>
                      <li>• Bridge generational gaps through music</li>
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

export default Vision;
