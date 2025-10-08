import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const BuddingArtists = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const youngArtists = [
    {
      name: "Little Aarav",
      age: 5,
      achievement: "Memorized 10 Sanskrit shlokas through music",
      story: "Started at age 3, now confidently sings devotional songs",
      image: "🎵"
    },
    {
      name: "Diya Sharma",
      age: 8,
      achievement: "Won inter-school cultural competition",
      story: "Overcame shyness through music and now leads performances",
      image: "🌟"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Budding Artists</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Nurturing young talent and celebrating children discovering the magic of music.
            </p>
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {youngArtists.map((artist, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all bg-card">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{artist.image}</div>
                    <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                    <p className="text-primary font-semibold">Age {artist.age}</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-secondary mb-2">Achievement</h4>
                    <p className="text-sm text-muted-foreground">{artist.achievement}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{artist.story}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuddingArtists;
      