import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Music, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const DevotionalSongs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const devotionalCategories = [
    {
      title: "Ganesha Bhajans",
      count: 12,
      description: "Songs devoted to Lord Ganesha, the remover of obstacles",
      icon: Heart,
      color: "primary"
    },
    {
      title: "Krishna Bhajans", 
      count: 18,
      description: "Melodious compositions celebrating Lord Krishna",
      icon: Music,
      color: "secondary"
    },
    {
      title: "Shiva Stotras",
      count: 8,
      description: "Powerful hymns dedicated to Lord Shiva",
      icon: Star,
      color: "primary"
    },
    {
      title: "Devi Songs",
      count: 15,
      description: "Divine compositions honoring the Divine Mother",
      icon: Heart,
      color: "secondary"
    }
  ];

  const featuredSongs = [
    {
      title: "Ganesha Pancharatnam",
      deity: "Lord Ganesha",
      raga: "Nata",
      level: "Intermediate",
      description: "A beautiful five-verse composition praising Lord Ganesha"
    },
    {
      title: "Govinda Namalu",
      deity: "Lord Krishna", 
      raga: "Kambhoji",
      level: "Beginner",
      description: "Simple yet melodious names of Lord Krishna"
    },
    {
      title: "Shiva Panchakshari",
      deity: "Lord Shiva",
      raga: "Shankarabharanam", 
      level: "Advanced",
      description: "Sacred five-syllable mantra set to classical music"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Devotional Songs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Sacred compositions that connect the heart to the divine through the power of music and devotion.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {devotionalCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all bg-card">
                    <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{category.count} Songs</p>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Featured Songs */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Featured Devotional Songs</h3>
              <div className="grid gap-6">
                {featuredSongs.map((song, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{song.title}</h4>
                        <p className="text-muted-foreground">Deity: {song.deity} • Raga: {song.raga}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                          song.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          song.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {song.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{song.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DevotionalSongs;
