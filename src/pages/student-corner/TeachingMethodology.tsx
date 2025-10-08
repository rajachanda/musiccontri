import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Users, Target, Clock, Award, Music, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeachingMethodology = () => {
  const [activeMethod, setActiveMethod] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const methodologies = [
    {
      title: "Guru-Shishya Parampara",
      description: "Traditional master-disciple relationship fostering deep learning and character development",
      icon: Heart,
      color: "primary",
      details: [
        "One-on-one mentorship approach",
        "Personalized learning paths",
        "Character development through music",
        "Cultural values transmission"
      ]
    },
    {
      title: "Progressive Learning",
      description: "Structured curriculum that builds skills systematically from basics to advanced levels",
      icon: Target,
      color: "secondary",
      details: [
        "Step-by-step skill development",
        "Regular assessments and feedback",
        "Milestone-based progression",
        "Individual pace accommodation"
      ]
    },
    {
      title: "Interactive Participation",
      description: "Engaging methods that encourage active participation and collaborative learning",
      icon: Users,
      color: "primary",
      details: [
        "Group learning sessions",
        "Peer-to-peer teaching",
        "Interactive workshops",
        "Community performances"
      ]
    },
    {
      title: "Holistic Development",
      description: "Complete personality development through music, emphasizing moral and cultural values",
      icon: Star,
      color: "secondary",
      details: [
        "Character building focus",
        "Cultural heritage preservation",
        "Discipline and dedication",
        "Community service values"
      ]
    }
  ];

  const learningLevels = [
    {
      level: "Foundation (Beginner)",
      duration: "6-12 months",
      focus: "Basic concepts, breathing, simple songs",
      skills: ["Swara knowledge", "Basic rhythm", "Simple compositions", "Proper posture"]
    },
    {
      level: "Intermediate",
      duration: "1-2 years",
      focus: "Raga introduction, complex compositions",
      skills: ["Raga patterns", "Advanced compositions", "Tala mastery", "Performance confidence"]
    },
    {
      level: "Advanced",
      duration: "2+ years",
      focus: "Classical mastery, improvisation",
      skills: ["Raga elaboration", "Improvisation", "Teaching skills", "Leadership qualities"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Teaching Methodology</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Our time-tested approach combines traditional Guru-Shishya Parampara with modern pedagogical methods to create exceptional learning experiences.
            </p>
          </div>
        </section>

        {/* Teaching Approaches */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Our Teaching Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At LMA, we believe that effective music education goes beyond technical training. Our methodology 
                integrates traditional wisdom with innovative approaches to nurture complete individuals.
              </p>
            </div>

            {/* Interactive Methodology Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {methodologies.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={index} 
                    className={`p-6 text-center hover:shadow-lg transition-all bg-card border-2 cursor-pointer ${
                      activeMethod === index ? 'border-primary shadow-xl scale-105' : 'border-transparent hover:border-primary/20'
                    }`}
                    onClick={() => setActiveMethod(index)}
                  >
                    <div className={`w-16 h-16 bg-${method.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 text-${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Active Method Details */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border mb-16">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
                {methodologies[activeMethod].title} - Deep Dive
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">Key Features</h4>
                  <ul className="space-y-3">
                    {methodologies[activeMethod].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">♪</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-secondary">Learning Outcomes</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Through this methodology, students develop not only musical proficiency but also critical 
                    life skills including discipline, patience, cultural appreciation, and leadership qualities. 
                    Our approach ensures that each student becomes a well-rounded individual who can contribute 
                    positively to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Progression */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Learning Progression Path</h3>
              <div className="space-y-8">
                {learningLevels.map((level, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="text-lg font-bold text-primary mb-2">{level.level}</h4>
                              <p className="text-sm text-muted-foreground mb-2">Duration: {level.duration}</p>
                              <p className="text-sm text-muted-foreground">{level.focus}</p>
                            </div>
                            <div className="md:col-span-2">
                              <h5 className="text-md font-semibold text-secondary mb-2">Skills Developed:</h5>
                              <div className="grid grid-cols-2 gap-2">
                                {level.skills.map((skill, idx) => (
                                  <span key={idx} className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < learningLevels.length - 1 && (
                      <div className="w-0.5 h-8 bg-primary/30 ml-6 mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3">
                  Start Your Musical Journey
                </Button>
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
