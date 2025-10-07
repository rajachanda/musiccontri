import { Clock, Calendar, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Early Childhood Music",
      age: "Ages 18 months - 5 years",
      description: "Our Kindermusik-inspired program introduces the youngest learners to rhythm, melody, and movement through interactive play.",
      features: [
        "Parent-child bonding time",
        "Sensory exploration",
        "Basic rhythm and pitch",
        "Social development"
      ],
      schedule: "Weekly 45-min sessions",
      price: "$120/month"
    },
    {
      icon: Target,
      title: "Pre-Professional Track",
      age: "Ages 12+",
      description: "Intensive training for serious young musicians preparing for conservatory auditions and music careers.",
      features: [
        "Advanced technique",
        "Music theory mastery", 
        "Performance coaching",
        "College prep support"
      ],
      schedule: "Multiple weekly sessions",
      price: "Custom pricing"
    },
    {
      icon: Calendar,
      title: "Summer Music Camps",
      age: "Ages 6-16",
      description: "Week-long intensive camps combining individual lessons, ensemble work, and creative projects.",
      features: [
        "Daily individual lessons",
        "Ensemble participation",
        "Music technology",
        "Final showcase"
      ],
      schedule: "Full or half-day options",
      price: "$275/week"
    },
    {
      icon: Clock,
      title: "Adult Programs",
      age: "Ages 18+",
      description: "Never too late to start! Flexible programs designed for adult learners with busy schedules.",
      features: [
        "Flexible scheduling",
        "Adult-focused curriculum",
        "Stress-relief focus",
        "Social opportunities"
      ],
      schedule: "Flexible timing",
      price: "From $50/lesson"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="programs" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Specialized <span className="text-primary">Learning Tracks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond individual lessons, we offer specialized programs designed for different ages, 
            skill levels, and learning objectives. Find the perfect path for your musical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-center">{program.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3 text-center">{program.age}</p>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{program.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-center">{program.schedule}</p>
                    <p className="text-lg font-bold text-primary text-center">{program.price}</p>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Performance Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Student Recitals</h4>
              <p className="text-muted-foreground text-sm">Quarterly showcases for all students to perform in a supportive environment.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Masterclasses</h4>
              <p className="text-muted-foreground text-sm">Special workshops with guest artists and professional musicians.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Competitions</h4>
              <p className="text-muted-foreground text-sm">Support and preparation for local, regional, and national music competitions.</p>
            </div>
          </div>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
