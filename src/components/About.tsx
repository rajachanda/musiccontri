import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Community Service",
      description: "We serve our community by providing completely free music education to children from all economic backgrounds, believing music should be accessible to everyone.",
    },
    {
      icon: Users,
      title: "Holistic Development", 
      description: "Beyond musical skills, we focus on character building, discipline, and moral values. Our students learn life lessons through the beautiful language of music.",
    },
    {
      icon: Trophy,
      title: "Excellence & Tradition",
      description: "We maintain high standards in classical Indian music education while embracing innovative teaching methods that make learning engaging and effective.",
    },
    {
      icon: Sparkles,
      title: "Cultural Heritage",
      description: "We preserve and promote our rich musical traditions while building bridges between generations and communities through the universal language of music.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card lotus-pattern">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20 animate-fade-in content-max-width">
          <h2 className="mb-6 text-shadow">
            About <span className="text-primary">Little Musicians Academy</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            LMA is a sacred temple of music where guru, students, parents, and grandparents unite in pursuit of musical 
            knowledge and moral values. Founded in 1999 as a non-profit organization, we believe that music education 
            should be free and accessible to all children, regardless of their family's economic situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-elevated card-cultural p-8 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-shadow-sm">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-10 md:p-16 cultural-pattern shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-6 text-shadow">Our Sacred Mission</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  LMA stands as a beacon of hope in our community, providing completely free music education to over 850 
                  children. We believe that every child, regardless of their family's financial situation, deserves the 
                  opportunity to learn music and develop their character through this divine art form.
                </p>
                <p>
                  Our academy transcends musical instruction - it's a sacred space where wisdom and expertise foster 
                  holistic growth. We recognize music's transformative power in shaping character and imparting life lessons. 
                  Here, families from all walks of life come together, bound by love for music and dedication to personal development.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30">
                  100% Free Education
                </span>
                <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold border border-secondary/30">
                  Non-Profit Organization
                </span>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent/30">
                  Community Service
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="card-elevated bg-white/80 backdrop-blur-sm p-8 text-center">
                <p className="text-4xl font-bold text-primary mb-3">850+</p>
                <p className="text-sm text-muted-foreground font-medium">Students Served</p>
              </div>
              <div className="card-elevated bg-white/80 backdrop-blur-sm p-8 text-center">
                <p className="text-4xl font-bold text-secondary mb-3">25+</p>
                <p className="text-sm text-muted-foreground font-medium">Volunteer Teachers</p>
              </div>
              <div className="card-elevated bg-white/80 backdrop-blur-sm p-8 text-center">
                <p className="text-4xl font-bold text-accent mb-3">$0</p>
                <p className="text-sm text-muted-foreground font-medium">Tuition Cost</p>
              </div>
              <div className="card-elevated bg-white/80 backdrop-blur-sm p-8 text-center">
                <p className="text-4xl font-bold text-primary mb-3">25+</p>
                <p className="text-sm text-muted-foreground font-medium">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

