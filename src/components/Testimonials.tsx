import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Aarav, 8",
      content: "LMA has been a blessing for our family. The teachers are so patient and caring, and they never charge us anything. My son has learned so much about music and discipline. This academy truly serves the community with love.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Alumni Student",
      content: "I started at LMA when I was 6 years old. The free lessons changed my life completely. Now I'm studying music at university, and I volunteer back at LMA to give other children the same opportunity I had.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez", 
      role: "Parent of Sofia, 10",
      content: "What LMA does for our community is incredible. They don't just teach music - they build character, confidence, and bring families together. The charity work and community events make us all feel like one big family.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Community Volunteer",
      content: "I've been supporting LMA for 5 years now. Watching these children grow musically and personally is amazing. The academy's mission to provide free music education regardless of background is truly inspiring.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Community <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the families, students, and volunteers who make up our LMA community. 
            Their stories inspire us to continue our mission of free music education for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-6 rounded-2xl">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-2">Free Education</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">850+</p>
              <p className="text-sm text-muted-foreground mt-2">Students Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">14+</p>
              <p className="text-sm text-muted-foreground mt-2">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

