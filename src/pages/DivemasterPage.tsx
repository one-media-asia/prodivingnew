import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users } from "lucide-react";

const DivemasterPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Professional Course
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                PADI Divemaster
              </h1>
              <p className="text-xl text-ocean-700 mb-8">
                Become a diving professional and start your career in the diving industry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 2-6 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">฿32,000 per person</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Book This Course
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
                        <span>Leadership training and team management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Teaching assistance and student supervision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dive guide skills and site management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional certification preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Emergency response and safety procedures</span>
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
                        <span>Comprehensive leadership training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Teaching assistance experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dive guide certification skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional PADI certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Unlimited diving during the course</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                  <CardDescription>
                    To enroll in the PADI Divemaster course, you must meet the following requirements:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Be at least 18 years old</li>
                    <li>• Hold a PADI Rescue Diver certification or equivalent</li>
                    <li>• Have logged at least 60 dives</li>
                    <li>• Complete a medical questionnaire</li>
                    <li>• Demonstrate good physical fitness for diving</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Contact Us to Enroll
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

export default DivemasterPage;