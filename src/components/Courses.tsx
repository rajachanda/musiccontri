import { Music2, Guitar, Piano, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      icon: Piano,
      title: "Piano Excellence",
      age: "Ages 4+",
      description: "Comprehensive piano instruction from beginner to advanced levels. Master classical technique, contemporary styles, and develop strong musical foundation through our structured curriculum.",
      features: ["Classical & Contemporary", "ABRSM/RCM Preparation", "Recital Opportunities", "Theory Integration"],
      color: "primary",
      duration: "30-60 min lessons",
      price: "From $45/lesson",
    },
    {
      icon: Guitar,
      title: "Guitar Mastery",
      age: "Ages 6+",
      description: "Learn acoustic and electric guitar with focus on technique, music theory, and performance skills. From strumming your first chord to advanced soloing techniques.",
      features: ["Acoustic & Electric", "Multiple Genres", "Chord Progressions", "Performance Skills"],
      color: "secondary",
      duration: "30-60 min lessons",
      price: "From $40/lesson",
    },
    {
      icon: Music2,
      title: "Strings Program",
      age: "Ages 5+",
      description: "Violin, viola, and cello instruction using proven methodologies including Suzuki and traditional approaches. Develop beautiful tone and advanced technique.",
      features: ["Suzuki Method", "Traditional Approach", "Ensemble Playing", "Competition Prep"],
      color: "primary",
      duration: "30-60 min lessons",
      price: "From $50/lesson",
    },
    {
      icon: Mic,
      title: "Voice & Performance",
      age: "Ages 7+",
      description: "Vocal training focused on technique, breathing, performance confidence, and repertoire development across classical, musical theater, and contemporary styles.",
      features: ["Proper Technique", "Stage Presence", "Repertoire Building", "Audition Prep"],
      color: "secondary",
      duration: "30-45 min lessons",
      price: "From $42/lesson",
    },
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
                className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card animate-slide-up border-2 border-transparent hover:border-primary/30"
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
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{course.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2 mt-1">♪</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-4">
                  <p className="text-lg font-bold text-primary">{course.price}</p>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all transform hover:scale-105"
                >
                  Schedule Trial
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Additional Specialties</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              "Drums & Percussion", 
              "Woodwinds (Flute, Clarinet)", 
              "Brass (Trumpet, Trombone)", 
              "Music Theory & Composition",
              "Early Childhood Music",
              "Adult Lessons",
              "Ensemble Classes",
              "Summer Intensives"
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
            Can't find the perfect fit? Our experienced team will work with you to create a customized learning path 
            that matches your child's interests, goals, and learning style. Every musical journey is unique!
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
