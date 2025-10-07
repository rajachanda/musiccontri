import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const TeachingMethodology = () => {
  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Teaching Methodology</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Our unique approach combines traditional guru-shishya parampara with modern educational techniques.
            </p>
          </div>
        </section>

        {/* Teaching Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Our Teaching Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At LMA, we believe that music education should nurture not just musical skills, but also character, 
                discipline, and cultural values. Our methodology is rooted in tradition yet adapted for modern learners.
              </p>
            </div>

            {/* Core Principles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Individual Attention</h3>
                <p className="text-muted-foreground">Each student receives personalized guidance based on their unique learning pace and style.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Structured Curriculum</h3>
                <p className="text-muted-foreground">Progressive learning modules that build from basic concepts to advanced techniques.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Group Learning</h3>
                <p className="text-muted-foreground">Ensemble classes that teach collaboration, listening skills, and musical interaction.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Goal-Oriented</h3>
                <p className="text-muted-foreground">Clear milestones and achievements that motivate students to progress steadily.</p>
              </Card>
            </div>

            {/* Detailed Methodology */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Our Teaching Approach</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">Traditional Elements</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Guru-Shishya Parampara (Teacher-Student Tradition)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Emphasis on Raga and Tala fundamentals
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Oral tradition and learning by listening
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Respect and reverence for the art form
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Cultural and spiritual aspects of music
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-secondary">Modern Adaptations</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Age-appropriate teaching methods
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Visual aids and notation systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Interactive group activities
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Regular assessments and feedback
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">♪</span>
                      Performance opportunities and competitions
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Learning Stages</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Foundation (Beginner)</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Basic breathing techniques</li>
                      <li>• Simple ragas and songs</li>
                      <li>• Rhythm and tala basics</li>
                      <li>• Voice culture exercises</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">Development (Intermediate)</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Advanced ragas</li>
                      <li>• Composition learning</li>
                      <li>• Improvisation skills</li>
                      <li>• Theory and notation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Mastery (Advanced)</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Concert preparation</li>
                      <li>• Creative expression</li>
                      <li>• Teaching methodology</li>
                      <li>• Performance confidence</li>
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

export default TeachingMethodology;
