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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cultural-warm"
    >
      {/* Cultural pattern overlay */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      <div className="absolute inset-0 lotus-pattern"></div>

      <div className="container mx-auto container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-slide-up relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/20">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Star className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary">
                Completely Free Music Education Since 1999 • Non-Profit Organization
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-bold leading-tight text-shadow-lg">
                Where Music
                <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Comes to Life
                </span>
              </h1>

              <p className="text-muted-foreground content-max-width leading-relaxed text-shadow-sm">
                Little Musicians Academy is a sacred temple of music where
                students, families, and community unite. We provide completely
                free music education to children from all backgrounds, fostering
                both musical excellence and moral values through the transformative
                power of Indian classical music.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-lg px-10 py-4 rounded-full font-semibold"
              >
                Join Our Family
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("courses")}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all transform hover:scale-105"
              >
                Learn More - It's FREE!
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t-2 border-primary/20">
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">850+</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Students Served
                </p>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Free Education
                </p>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Years of Service
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl card-elevated">
              <img
                src={heroImage}
                alt="Children learning music at Little Musicians Academy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20"></div>
            </div>

            {/* Enhanced floating elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl animate-cultural-breath"></div>

            {/* Cultural decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 text-primary/40 animate-pulse">
              ♪
            </div>
            <div className="absolute bottom-4 left-4 w-6 h-6 text-secondary/40 animate-pulse" style={{ animationDelay: "1s" }}>
              ♫
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
