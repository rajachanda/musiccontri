import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma, 9",
      content: "Little Musicians Academy has been wonderful for our daughter. The teachers are patient, encouraging, and truly care about each student's progress. Emma looks forward to her piano lessons every week!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Parent of Lucas, 12",
      content: "My son started with no musical experience and now he's playing guitar in the school band! The instructors here know how to make learning fun while building real skills. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Parent of Sofia, 7",
      content: "The staff at Little Musicians Academy goes above and beyond. They've helped Sofia develop not just musical skills, but also confidence and discipline. We couldn't be happier with our choice!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Parent of Oliver, 10",
      content: "Best music academy in the area! The curriculum is well-structured, the facilities are excellent, and the recitals give kids a chance to shine. Oliver has grown so much as a musician here.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Parents <span className="text-primary">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families in our community have to say about their experience.
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
              <p className="text-4xl font-bold text-primary">4.9</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">150+</p>
              <p className="text-sm text-muted-foreground mt-2">Parent Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-2">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
