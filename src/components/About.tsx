import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Passionate Educators",
      description: "Our certified instructors are professional musicians with years of teaching experience and a genuine love for nurturing young talent.",
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "We believe every student is unique. Our small class sizes and individualized approach ensure each child receives the attention they deserve.",
    },
    {
      icon: Trophy,
      title: "Outstanding Results",
      description: "Our students consistently achieve top marks in ABRSM exams, win competitions, and gain acceptance to prestigious music programs.",
    },
    {
      icon: Sparkles,
      title: "Creative Environment",
      description: "We foster creativity through innovative teaching methods, ensemble opportunities, and regular performance showcases.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where Musical <span className="text-primary">Dreams Take Flight</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2010, Little Musicians Academy has been at the forefront of music education, 
            combining traditional excellence with innovative teaching approaches to create an inspiring 
            learning environment for young musicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story & Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Little Musicians Academy was founded with a simple yet profound belief: every child has the capacity 
                for musical expression. What began as a small studio has grown into a thriving community of over 850 
                students, 25 dedicated instructors, and countless success stories.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive curriculum spans from early childhood music exploration to advanced performance 
                preparation, ensuring students develop both technical proficiency and artistic expression. We're proud 
                to have helped hundreds of students discover their musical potential and build confidence that extends 
                far beyond the practice room.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">ABRSM Certified</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">RCM Preparation</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Performance Opportunities</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">850+</p>
                <p className="text-sm text-muted-foreground">Current Students</p>
              </div>
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">25+</p>
                <p className="text-sm text-muted-foreground">Expert Faculty</p>
              </div>
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">15</p>
                <p className="text-sm text-muted-foreground">Instruments Offered</p>
              </div>
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Parent Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
