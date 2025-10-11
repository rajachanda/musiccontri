import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Users, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Celebrations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const celebrations = [
    {
      title: "Diwali Festival",
      season: "October/November",
      description: "Grand celebration with diyas, rangoli, and musical performances by our students",
      activities: ["Traditional music performances", "Rangoli competition", "Sweet distribution", "Family gathering"],
      icon: Sparkles,
      color: "primary"
    },
    {
      title: "Guru Purnima",
      season: "July",
      description: "Honoring our teachers and the sacred guru-shishya tradition with special ceremonies",
      activities: ["Guru vandana", "Student tributes", "Classical music concert", "Traditional offerings"],
      icon: Heart,
      color: "secondary"
    },
    {
      title: "Navratri Celebrations",
      season: "September/October", 
      description: "Nine days of devotional music celebrating the Divine Mother",
      activities: ["Daily bhajans", "Garba performances", "Traditional decorations", "Community prayers"],
      icon: Users,
      color: "primary"
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
              Celebrations
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Our cultural celebrations bring families together, preserving traditions and creating joyful memories through music and community spirit.
            </p>
          </div>
        </section>

        {/* Celebrations */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
                  Our Cultural Calendar
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
                  Throughout the year, we celebrate various festivals and cultural occasions that strengthen our community bonds and preserve our rich heritage.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {celebrations.map((celebration, index) => {
                  const Icon = celebration.icon;
                  return (
                    <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all bg-card">
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-${celebration.color}/10 rounded-full flex items-center justify-center`}>
                            <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${celebration.color}`} />
                          </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 md:mb-0">
                              {celebration.title}
                            </h3>
                            <span className={`text-${celebration.color} font-semibold px-3 py-1 bg-${celebration.color}/10 rounded-full text-sm inline-block`}>
                              {celebration.season}
                            </span>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            {celebration.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-secondary mb-2 sm:mb-3 text-sm sm:text-base">
                              Celebration Activities:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                              {celebration.activities.map((activity, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <span className="text-primary text-sm">♪</span>
                                  <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                    {activity}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Community Impact */}
              <div className="mt-12 sm:mt-16 bg-card rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg border border-border text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                  Celebrating Together
                </h3>
                <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                  Our celebrations are not just events, but opportunities to strengthen family bonds, pass on cultural values, 
                  and create lasting memories that connect generations through the power of music and tradition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-primary/5 rounded-lg p-4 sm:p-6">
                    <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">
                      Family Participation
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      All celebrations welcome entire families to participate and enjoy together
                    </p>
                  </div>
                  <div className="bg-secondary/5 rounded-lg p-4 sm:p-6">
                    <h4 className="font-bold text-secondary mb-2 text-sm sm:text-base">
                      Cultural Learning
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Each celebration teaches cultural significance and traditional values
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 sm:p-6">
                    <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">
                      Community Building
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Celebrations strengthen bonds within our musical community
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

export default Celebrations;
