import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users } from "lucide-react";

const NightDivingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Specialty Course
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                PADI Night Diving Specialty
              </h1>
              <p className="text-xl text-ocean-700 mb-8">
                Discover a completely different underwater world after sunset with thrilling night diving
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 18-40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">฿8,500 per person</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Dive After Dark
              </Button>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Course Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Night diving equipment and lighting systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Safety procedures and buddy system at night</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Navigation and orientation in darkness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Natural nocturnal behavior of marine life</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Torch use and hand signals underwater</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Includes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>2 days of night diving instruction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>4 night dives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Confined water night diving session</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>PADI Night Diving Specialty card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Torches and lighting equipment provided</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                  <CardDescription>
                    To enroll in the PADI Night Diving Specialty course, you must meet the following requirements:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Be at least 12 years old</li>
                    <li>• Hold a valid PADI Open Water Diver certification or equivalent</li>
                    <li>• Have logged at least 15 dives</li>
                    <li>• Be comfortable diving in reduced visibility</li>
                    <li>• Complete a medical questionnaire</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Night Diving Magic</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="space-y-2">
                    <li>• <strong>Nocturnal creatures:</strong> See octopuses, lobsters, and creatures that hide during the day</li>
                    <li>• <strong>Bioluminescence:</strong> Witness the magic of glow-in-the-dark plankton</li>
                    <li>• <strong>Different ecosystems:</strong> Familiar sites transform completely at night</li>
                    <li>• <strong>Unique photography:</strong> Stunning night dive photos for your collection</li>
                    <li>• <strong>Thrilling experience:</strong> One of diving's most exhilarating adventures</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Experience Night Diving
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NightDivingPage;
