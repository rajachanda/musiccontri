import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Eye, Globe, Star, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Vision = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              To be a beacon of musical excellence that transforms lives and builds a harmonious society through the power of music.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Building Tomorrow's Musical Leaders
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We envision a world where every child has access to quality music education, where artistic expression flourishes, 
                and where the values learned through music create better human beings and stronger communities.
              </p>
            </div>

            {/* Vision Elements */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clear Vision</h3>
                <p className="text-gray-600">A future where music education is accessible to all, regardless of background or circumstances.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                <p className="text-gray-600">Spreading the joy of music and Indian classical traditions to communities worldwide.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">Setting the highest standards in music education and character development.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">Pioneering new methods while honoring traditional teaching approaches.</p>
              </Card>
            </div>

            {/* Future Goals */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Our 2030 Vision</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
                  <p className="text-gray-600">Students Impacted</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
                  <p className="text-gray-600">Learning Centers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-600">Free Education</p>
                </div>
              </div>
              
              <div className="mt-12 space-y-6">
                <h4 className="text-xl font-semibold text-gray-800">Long-term Aspirations</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-purple-600 mb-2">Educational Excellence</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Establish LMA as a premier music education institution</li>
                      <li>• Develop innovative curriculum combining tradition and technology</li>
                      <li>• Create scholarship programs for underprivileged students</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Cultural Preservation</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Document and preserve traditional music forms</li>
                      <li>• Train next generation of music teachers</li>
                      <li>• Bridge generational gaps through music</li>
                    </ul>
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

export default Vision;
