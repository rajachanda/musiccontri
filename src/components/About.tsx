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
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Little Musicians Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            LMA is a temple of music where guru, students, parents, and grandparents unite in pursuit of musical 
            knowledge and moral values. Founded in 2010 as a non-profit organization, we believe that music education 
            should be free and accessible to all children, regardless of their family's economic situation.
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
              <h3 className="text-3xl font-bold mb-6">Our Sacred Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                LMA stands as a beacon of hope in our community, providing completely free music education to over 850 
                children. We believe that every child, regardless of their family's financial situation, deserves the 
                opportunity to learn music and develop their character through this divine art form.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our academy transcends musical instruction - it's a sacred space where wisdom and expertise foster 
                holistic growth. We recognize music's transformative power in shaping character and imparting life lessons. 
                Here, families from all walks of life come together, bound by love for music and dedication to personal development.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">100% Free Education</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Non-Profit Organization</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Community Service</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">850+</p>
                <p className="text-sm text-muted-foreground">Students Served</p>
              </div>
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">25+</p>
                <p className="text-sm text-muted-foreground">Volunteer Teachers</p>
              </div>
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">$0</p>
                <p className="text-sm text-muted-foreground">Tuition Cost</p>
              </div>
              <div className="bg-card p-6 rounded-2xl text-center shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">14+</p>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

