import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Download, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComposedBySriRamacharyK = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const songs = [
    {
      songName: "Nannu Chusi",
      lyricist: "Gedugu Rajeswararao",
      music: "K.Ramachary",
      category: "Devotional"
    },
    {
      songName: "Vena Vedukatho",
      lyricist: "Gedugu Rajeswararao", 
      music: "K.Ramachary",
      category: "Classical"
    },
    {
      songName: "Ne Mhovepai",
      lyricist: "Gedugu Rajeswararao",
      music: "K.Ramachary",
      category: "Spiritual"
    },
    {
      songName: "Alukamani",
      lyricist: "Gedugu Rajeswararao",
      music: "K.Ramachary",
      category: "Traditional"
    },
    {
      songName: "Ne Chetanu",
      lyricist: "Gedugu Rajeswararao",
      music: "K.Ramachary", 
      category: "Devotional"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Composed by Sri Ramachary K</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Beautiful compositions by our beloved music director, featuring traditional and devotional songs.
            </p>
          </div>
        </section>

        {/* Songs Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Music className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Song Collection</h2>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-foreground border-b">Song Name</th>
                        <th className="text-left p-4 font-semibold text-foreground border-b">Lyricist</th>
                        <th className="text-left p-4 font-semibold text-foreground border-b">Music</th>
                        <th className="text-center p-4 font-semibold text-foreground border-b">Lyrics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {songs.map((song, index) => (
                        <tr key={index} className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-foreground border-b">{song.songName}</td>
                          <td className="p-4 text-muted-foreground border-b">{song.lyricist}</td>
                          <td className="p-4 text-muted-foreground border-b">{song.music}</td>
                          <td className="p-4 text-center border-b">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              View PDF
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">About the Composer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sri Ramachary K is our esteemed music director who has composed numerous beautiful songs 
                    that blend traditional Indian classical music with contemporary appeal. His compositions 
                    are specially designed to help students learn while connecting with their cultural roots.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Learning Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Develops understanding of raga structures
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Improves pronunciation and diction
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Builds cultural knowledge and appreciation
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">♪</span>
                      Enhances emotional expression through music
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComposedBySriRamacharyK;
