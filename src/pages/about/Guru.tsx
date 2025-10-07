import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Music, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Guru = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Guru</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              The guiding light of Little Musicians Academy, whose dedication and wisdom have shaped thousands of young minds.
            </p>
          </div>
        </section>

        {/* Guru Profile */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Respected Guru Ji
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    With over three decades of experience in music education and performance, our revered Guru has been 
                    the cornerstone of LMA's success. Their philosophy of combining traditional values with modern teaching 
                    methods has created a unique learning environment where students don't just learn music, but develop as individuals.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    A firm believer that music is not just an art form but a way of life, our Guru has dedicated their 
                    life to nurturing young talent and preserving the rich heritage of Indian classical music while 
                    making it accessible to children from all backgrounds.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">30+</div>
                      <p className="text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">5000+</div>
                      <p className="text-gray-600">Students Taught</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 text-center">
                    <div className="w-48 h-48 bg-orange-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Music className="w-24 h-24 text-orange-700" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">Guru Maharaj</h3>
                    <p className="text-orange-700">Founder & Chief Instructor</p>
                  </div>
                </div>
              </div>

              {/* Philosophy & Approach */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compassionate Teaching</h3>
                  <p className="text-gray-600">Every student is treated with patience, understanding, and individual attention.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Traditional Values</h3>
                  <p className="text-gray-600">Preserving the rich heritage of Indian classical music and cultural values.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Builder</h3>
                  <p className="text-gray-600">Creating strong bonds between students, families, and the wider community.</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Excellence Driven</h3>
                  <p className="text-gray-600">Striving for the highest standards in both musical and personal development.</p>
                </Card>
              </div>

              {/* Achievements & Recognition */}
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Achievements & Recognition</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-600">Musical Accomplishments</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">♪</span>
                        Trained under renowned classical music masters
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">♪</span>
                        Performed in prestigious venues across the country
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">♪</span>
                        Recipient of multiple awards for musical excellence
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">♪</span>
                        Published researcher in music education methodologies
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600">Teaching Excellence</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">♪</span>
                        Founded LMA with vision of accessible music education
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">♪</span>
                        Developed innovative curriculum combining tradition and modernity
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">♪</span>
                        Mentored hundreds of successful musicians and teachers
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">♪</span>
                        Recognized for contributions to community development
                      </li>
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

export default Guru;
