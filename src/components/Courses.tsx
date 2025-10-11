import { Music2, Guitar, Piano, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      icon: Piano,
      title: "Indian Classical Vocal",
      age: "Ages 4+", 
      description: "Comprehensive training in Indian classical vocal music including ragas, talas, and devotional songs. Build strong foundation through our structured curriculum.",
      features: ["Raga & Tala Training", "Devotional Songs", "Cultural Education", "Character Building"],
      color: "primary",
      duration: "Flexible timing",
      price: "Completely FREE"
    },
    {
      icon: Guitar,
      title: "Instrumental Training",
      age: "Ages 6+",
      description: "Learn harmonium, tabla, and other traditional instruments with focus on technique and cultural understanding.",
      features: ["Harmonium & Tabla", "Traditional Technique", "Ensemble Playing", "Performance Skills"],
      color: "secondary", 
      duration: "Flexible timing",
      price: "Completely FREE"
    },
    {
      icon: Music2,
      title: "Music Theory",
      age: "Ages 5+",
      description: "Understanding of Indian classical music theory, notation, and the science behind ragas and talas.",
      features: ["Raga Theory", "Tala Systems", "Notation", "Musical Analysis"],
      color: "primary",
      duration: "Group sessions", 
      price: "Completely FREE"
    },
    {
      icon: Mic,
      title: "Performance Training",
      age: "Ages 7+",
      description: "Build confidence through regular performances, concerts, and community events. Develop stage presence and overcome performance anxiety.",
      features: ["Stage Presence", "Community Events", "Confidence Building", "Cultural Programs"],
      color: "secondary",
      duration: "Event-based",
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
    <section id="courses" className="py-20" style={{ background: `hsl(var(--section-bg-warm))` }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Signature Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of music programs designed to nurture talent at every level. 
            From first lessons to advanced performance preparation, we provide the foundation for lifelong musical joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card animate-slide-up border-2 border-transparent hover:border-primary/30 h-full flex flex-col"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 bg-${course.color}/10 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className={`w-8 h-8 text-${course.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-center">{course.title}</h3>
                <div className="text-center mb-4">
                  <p className="text-sm text-primary font-semibold">{course.age}</p>
                  <p className="text-xs text-muted-foreground">{course.duration}</p>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{course.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2 mt-1">♪</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-center mb-4">
                    <p className="text-lg font-bold text-primary">{course.price}</p>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all transform hover:scale-105"
                  >
                    Schedule Trial
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Additional Specialties</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              "Early Childhood Music (Ages 3-6)", 
              "Family Music Sessions", 
              "Community Concerts", 
              "Cultural Festivals",
              "Character Development",
              "Volunteer Opportunities", 
              "Music Therapy Sessions",
              "Intergenerational Programs"
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground px-4 py-3 rounded-xl font-medium hover:shadow-md transition-all cursor-pointer transform hover:scale-105"
              >
                {program}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            All our programs are completely free! We believe music education should be accessible to every child 
            regardless of their family's financial situation. Join our community today!
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg transform hover:scale-105 transition-all"
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
