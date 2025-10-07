import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Search, Download, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SongsLyrics = () => {
  const songCategories = [
    {
      title: "Devotional Songs",
      count: 25,
      description: "Bhajans, Stotras, and spiritual compositions",
      color: "primary"
    },
    {
      title: "Classical Compositions",
      count: 18,
      description: "Kritis, Varnams, and traditional pieces",
      color: "secondary"
    },
    {
      title: "Folk Songs",
      count: 15,
      description: "Regional folk music and cultural songs",
      color: "primary"
    },
    {
      title: "Children's Songs",
      count: 30,
      description: "Fun and educational songs for young learners",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Songs & Lyrics</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Explore our collection of traditional songs, compositions, and lyrics used in our curriculum.
            </p>
          </div>
        </section>

        {/* Song Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Our Song Collection
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the beautiful repertoire of songs that our students learn at LMA. Each song is carefully 
                selected to enhance musical understanding and cultural appreciation.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {songCategories.map((category, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all bg-card border-2 border-transparent hover:border-primary/20">
                  <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Music className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{category.count} Songs</p>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </Card>
              ))}
            </div>

            {/* Featured Songs Section */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border mb-16">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Featured Songs</h3>
              <div className="grid gap-6">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Vande Mataram</h4>
                      <p className="text-muted-foreground">National Song - Raga Desh</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Play className="w-4 h-4 mr-1" />
                        Listen
                      </Button>
                      <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                        <Download className="w-4 h-4 mr-1" />
                        Lyrics
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A patriotic song that teaches students about national pride while learning Raga Desh.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Ganesha Pancharatnam</h4>
                      <p className="text-muted-foreground">Devotional - Raga Nata</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Play className="w-4 h-4 mr-1" />
                        Listen
                      </Button>
                      <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                        <Download className="w-4 h-4 mr-1" />
                        Lyrics
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A beautiful devotional composition that helps students learn complex ragas and devotional sentiment.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Sare Jahan Se Accha</h4>
                      <p className="text-muted-foreground">Patriotic Song - Simple Melody</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Play className="w-4 h-4 mr-1" />
                        Listen
                      </Button>
                      <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary hover:text-secondary-foreground">
                        <Download className="w-4 h-4 mr-1" />
                        Lyrics
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perfect for beginners, this song teaches basic melody and instills patriotic values.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Learning Resources</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Song Database</h4>
                  <p className="text-muted-foreground text-sm">
                    Searchable collection of all songs with difficulty levels and raga information.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Downloadable Lyrics</h4>
                  <p className="text-muted-foreground text-sm">
                    PDF versions of lyrics with notation for practice at home.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Audio Samples</h4>
                  <p className="text-muted-foreground text-sm">
                    Reference recordings to help students learn correct pronunciation and melody.
                  </p>
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

export default SongsLyrics;
