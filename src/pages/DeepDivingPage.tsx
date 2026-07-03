import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users } from "lucide-react";

const DeepDivingPage = () => {
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
                PADI Deep Diving Specialty
              </h1>
              <p className="text-xl text-ocean-700 mb-8">
                Safely explore deeper dive sites and discover underwater wonders beyond 40 meters
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">฿8,500 per person</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Go Deeper
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
                        <span>Nitrogen narcosis effects and management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Deep diving hazards and risk management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dive planning at depth with modified tables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced buoyancy and descent control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Emergency procedures at depth</span>
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
                        <span>2 days of comprehensive instruction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>4 deep dives to 40 meters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Classroom and confined water training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>PADI Deep Diving Specialty card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All equipment provided</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                  <CardDescription>
                    To enroll in the PADI Deep Diving Specialty course, you must meet the following requirements:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Be at least 12 years old</li>
                    <li>• Hold a valid PADI Advanced Open Water Diver certification or equivalent</li>
                    <li>• Have logged at least 30 dives</li>
                    <li>• Be comfortable diving to 40 meters</li>
                    <li>• Complete a medical questionnaire</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Deep Diving in Bali</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="space-y-2">
                    <li>• <strong>Thermocline dives:</strong> Experience the dramatic temperature transitions</li>
                    <li>• <strong>Deep reefs:</strong> Discover pristine coral gardens untouched by recreational divers</li>
                    <li>• <strong>Pelagic encounters:</strong> Spot sharks, rays, and other large marine life</li>
                    <li>• <strong>Advanced marine life:</strong> Unique species found only at greater depths</li>
                    <li>• <strong>Exploration:</strong> Visit iconic deep dive sites like Crystal Bay and Blue Lagoon</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Explore the Depths
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

export default DeepDivingPage;
