import { Button } from "@/components/ui/button";
import { Music, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-end)) 100%)`,
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Free Music Education Since 2010 • Non-Profit Organization
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Where Music
              <span className="block text-primary">Comes to Life</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Little Musicians Academy is a temple of music where students,
              families, and community unite. We provide completely free music
              education to children from all backgrounds, fostering both musical
              excellence and moral values through the transformative power of
              music.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Join LMA Family
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("courses")}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4 transition-all transform hover:scale-105"
              >
                Support Our Mission
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">850+</p>
                <p className="text-sm text-muted-foreground">Students Served</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Free Education</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">14+</p>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Children learning music at Little Musicians Academy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50 animate-float"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
