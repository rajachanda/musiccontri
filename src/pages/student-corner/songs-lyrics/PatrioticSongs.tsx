import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Flag, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const PatrioticSongs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const patrioticSongs = [
    {
      title: "Vande Mataram",
      composer: "Bankim Chandra Chatterjee",
      significance: "National Song of India",
      level: "Intermediate",
      description: "A powerful composition that instills love for the motherland"
    },
    {
      title: "Jana Gana Mana",
      composer: "Rabindranath Tagore", 
      significance: "National Anthem of India",
      level: "Advanced",
      description: "The national anthem teaching unity in diversity"
    },
    {
      title: "Sare Jahan Se Accha",
      composer: "Muhammad Iqbal",
      significance: "Patriotic Song",
      level: "Beginner", 
      description: "Popular patriotic song expressing love for India"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Flag className="w-16 h-16 text-orange-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Patriotic Songs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Songs that inspire love for our nation and teach students the values of unity, diversity, and pride.
            </p>
          </div>
        </section>

        {/* Songs Collection */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Songs of Our Nation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These patriotic compositions help students develop a deep connection with their country 
                  while learning musical skills and cultural values.
                </p>
              </div>

              <div className="grid gap-8 mb-16">
                {patrioticSongs.map((song, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{song.title}</h3>
                        <p className="text-muted-foreground mb-2">Composer: {song.composer}</p>
                        <p className="text-primary font-semibold mb-4">{song.significance}</p>
                        <p className="text-muted-foreground leading-relaxed">{song.description}</p>
                      </div>
                      <div className="ml-6">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          song.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          song.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {song.level}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Values Section */}
              <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Values We Teach</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Love for Motherland</h4>
                    <p className="text-muted-foreground text-sm">
                      Developing deep respect and love for our country through music
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Unity in Diversity</h4>
                    <p className="text-muted-foreground text-sm">
                      Understanding India's rich cultural diversity and unity
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Flag className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">National Pride</h4>
                    <p className="text-muted-foreground text-sm">
                      Building confidence and pride in our national identity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PatrioticSongs;
