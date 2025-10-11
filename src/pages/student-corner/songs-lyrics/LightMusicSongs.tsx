import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Sparkles, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const LightMusicSongs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lightMusicCategories = [
    {
      title: "Film Songs",
      count: 20,
      description: "Popular movie songs adapted for classical learning",
      icon: Music,
      color: "primary"
    },
    {
      title: "Folk Fusion",
      count: 15,
      description: "Traditional folk songs with modern arrangements", 
      icon: Sparkles,
      color: "secondary"
    },
    {
      title: "Children's Favorites",
      count: 25,
      description: "Fun and engaging songs loved by young students",
      icon: Heart,
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Light Music Songs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Contemporary and accessible songs that make learning music fun and engaging for all ages.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {lightMusicCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-all bg-card">
                    <div className={`w-20 h-20 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`w-10 h-10 text-${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <p className="text-3xl font-bold text-primary mb-4">{category.count} Songs</p>
                    <p className="text-muted-foreground">{category.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LightMusicSongs;
