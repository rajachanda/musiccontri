import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Crown, Music, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const AnnamacharyaKeerthanalu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keerthanaCategories = [
    {
      title: "Sankirtana Keerthanalu",
      count: 30,
      description: "Congregational singing compositions",
      raga: "Various Ragas"
    },
    {
      title: "Pada Keerthanalu", 
      count: 25,
      description: "Devotional songs in simple format",
      raga: "Accessible Ragas"
    },
    {
      title: "Adhyatmika Keerthanalu",
      count: 20,
      description: "Spiritual and philosophical compositions",
      raga: "Classical Ragas"
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
              <Crown className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Annamacharya Keerthanalu</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Sacred compositions by the great saint-composer Annamacharya, teaching devotion through divine music.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                The Divine Compositions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Annamacharya, known as the "Pada Kavita Pitamaha," composed thousands of keerthanalu 
                devoted to Lord Venkateswara. These timeless compositions form an essential part of our curriculum.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {keerthanaCategories.map((category, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-all bg-card">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{category.count}+</p>
                  <p className="text-muted-foreground mb-2">{category.description}</p>
                  <p className="text-sm text-secondary font-medium">{category.raga}</p>
                </Card>
              ))}
            </div>

            {/* About Annamacharya */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">About Sri Annamacharya</h3>
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
                <div>
                  <p className="leading-relaxed mb-4">
                    Sri Annamacharya (1408-1503) was a great devotee of Lord Venkateswara and is considered 
                    the earliest known musician-composer in South Indian classical music. His compositions, 
                    known as "Sankirtanas," are treasures of devotional music.
                  </p>
                  <p className="leading-relaxed">
                    He composed over 32,000 keerthanalu, of which only about 12,000 are available today. 
                    His songs are not just musical compositions but also profound spiritual teachings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-4">Learning Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Develops devotional sentiment (bhakti bhava)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Improves Telugu pronunciation and diction  
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Teaches traditional raga structures
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Builds cultural and spiritual knowledge
                    </li>
                  </ul>
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

export default AnnamacharyaKeerthanalu;
