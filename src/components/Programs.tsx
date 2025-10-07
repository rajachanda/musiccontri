import { Clock, Calendar, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Early Childhood Music",
      age: "Ages 3-6 years",
      description: "Introduce your little ones to the magical world of music through play, rhythm, and movement. Parent participation encouraged for family bonding.",
      features: [
        "Parent-child sessions",
        "Rhythm & movement",
        "Basic musical concepts",
        "Cultural songs"
      ],
      schedule: "Weekly 45-min sessions",
      price: "Completely FREE"
    },
    {
      icon: Target,
      title: "Classical Indian Music",
      age: "Ages 6+ years",
      description: "Comprehensive training in Indian classical music including vocals, tabla, harmonium, and other traditional instruments with emphasis on cultural values.",
      features: [
        "Vocal training",
        "Instrument instruction", 
        "Music theory",
        "Cultural education"
      ],
      schedule: "Flexible timing",
      price: "Completely FREE"
    },
    {
      icon: Calendar,
      title: "Community Events",
      age: "All ages",
      description: "Regular performances, cultural celebrations, and charity events that bring our community together and showcase student talents.",
      features: [
        "Student performances",
        "Cultural festivals",
        "Charity concerts",
        "Community gatherings"
      ],
      schedule: "Monthly events",
      price: "Open to All"
    },
    {
      icon: Clock,
      title: "Family Programs", 
      age: "Multi-generational",
      description: "Special programs designed for entire families to learn and practice music together, strengthening bonds across generations.",
      features: [
        "Family sessions",
        "Intergenerational learning",
        "Cultural preservation",
        "Community building"
      ],
      schedule: "Weekend sessions",
      price: "Completely FREE"
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
            Our <span className="text-primary">Community Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All our programs are offered completely free of charge. We believe that music education should be 
            accessible to every child and family in our community, regardless of financial circumstances.
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
          <h3 className="text-3xl font-bold mb-4">Our Community Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Free Education</h4>
              <p className="text-muted-foreground text-sm">No tuition fees, no hidden costs. Music education should be accessible to all children.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Cultural Heritage</h4>
              <p className="text-muted-foreground text-sm">Preserving and sharing the rich traditions of Indian classical music with future generations.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Character Building</h4>
              <p className="text-muted-foreground text-sm">Developing discipline, respect, and moral values through the sacred practice of music.</p>
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
