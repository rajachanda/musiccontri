import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Play, Star, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PastEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pastEvents = [
    {
      title: "Annamaya Sankeerthan Vayjayanthi",
      date: "March 2024",
      description: "A grand celebration of Annamacharya's divine compositions with students performing traditional keerthanalu",
      highlights: ["150+ students participated", "Traditional costumes", "Live streaming available"],
      image: "🎭"
    },
    {
      title: "Annual Music Concert 2023",
      date: "December 2023", 
      description: "Our biggest musical event featuring performances across all age groups and skill levels",
      highlights: ["200+ performers", "5-hour program", "Community appreciation"],
      image: "🎵"
    },
    {
      title: "Diwali Cultural Festival",
      date: "October 2023",
      description: "Traditional celebration combining music, dance, and cultural programs by our students",
      highlights: ["Family participation", "Traditional foods", "Cultural showcase"],
      image: "🪔"
    },
    {
      title: "Guru Purnima Celebration",
      date: "July 2023",
      description: "Special tribute to our teachers and the guru-shishya tradition with musical offerings",
      highlights: ["Guru vandana", "Student tributes", "Traditional ceremony"],
      image: "🙏"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--background))` }}>
      <Navigation />
      <main className="pt-16 sm:pt-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-2 sm:py-4">
          <Link 
            to="/activities/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Events</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Past Events
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              In addition to providing training to children, LMA goes beyond by creating opportunities for them to showcase their skills through performances, preparing them for real-life challenges ahead.
            </p>
          </div>
        </section>

        {/* Past Events Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
                  Memorable Moments
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
                  LMA hosts its own programs and actively participates in others, where students demonstrate their singing talents to enthusiasts of light music. Here are a few notable programs where LMA students have captivated audiences:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all bg-card overflow-hidden">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">{event.image}</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-foreground px-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-3 sm:mb-4">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{event.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 px-2">
                      <h4 className="font-semibold text-secondary text-sm sm:text-base">Event Highlights:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-2">
                      <button className="flex-1 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                        <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">Watch Highlights</span>
                        <span className="xs:hidden">Watch</span>
                      </button>
                      <button className="flex-1 bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground text-secondary px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                        <span className="hidden xs:inline">View Photos</span>
                        <span className="xs:hidden">Photos</span>
                      </button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="mt-12 sm:mt-16 bg-card rounded-xl p-4 sm:p-8 lg:p-12 shadow-lg border border-border">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground text-center">
                  Our Event Impact
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
                  <div className="p-2 sm:p-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Events Organized</p>
                  </div>
                  <div className="p-2 sm:p-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">5000+</div>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Audience Reached</p>
                  </div>
                  <div className="p-2 sm:p-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">800+</div>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Student Performances</p>
                  </div>
                  <div className="p-2 sm:p-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">25+</div>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Years of Events</p>
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

export default PastEvents;
