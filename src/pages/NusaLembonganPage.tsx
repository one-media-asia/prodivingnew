import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, MapPin, Thermometer } from "lucide-react";

const NusaLembonganPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Premium Dive Destination
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                Nusa Lembongan
              </h1>
              <p className="text-xl text-ocean-700 mb-8">
                Nusa Lembongan is just 30 minutes by boat from mainland Bali, and is where you can dive with the mantas and mola-mola that made Bali famous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">20 minutes by boat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Depth: 12-40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Temperature: 25-29°C</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Book Your Dive Today
              </Button>
            </div>
          </div>
        </section>

        {/* Dive Site Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Dive Site Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What You'll See
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Reef sharks in their natural habitat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Colorful coral reefs and seagrass beds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sea turtles and rays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Massive schools of tropical fish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Reef octopuses and cuttlefish</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Famous Dive Spots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Mangrove Point:</strong> Unique seagrass ecosystem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Shark Point:</strong> Guaranteed shark encounters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Blue Lagoon:</strong> Beginner-friendly reef</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Lembongan Wall:</strong> Dramatic wall dive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Secret Beach Reef:</strong> Hidden gem</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8 bg-slate-50 border-slate-200">
                <CardHeader>
                  <CardTitle>Bali Dive Careers Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-800">
                    Join our Bali team led by Kazi, PADI Course Director. We offer professional dive programs on Nusa Lembongan including Divemaster Internships, Instructor Courses, MSDT specialties, and Staff Instructor training.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Dive Information</CardTitle>
                  <CardDescription>
                    Essential details for planning your Nusa Lembongan diving adventure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Experience Level:</h4>
                      <p className="text-ocean-700">Beginner to Advanced (varied options available)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Best Time to Visit:</h4>
                      <p className="text-ocean-700">Year-round diving, best April to October</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Visibility:</h4>
                      <p className="text-ocean-700">12-25 meters, generally good throughout the year</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Current:</h4>
                      <p className="text-ocean-700">Mild to moderate - suitable for most levels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Why Dive Nusa Lembongan?</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="space-y-2">
                    <li>• <strong>Accessible Paradise:</strong> Close to Bali with easier conditions than Penida</li>
                    <li>• <strong>Diverse Ecosystems:</strong> Reefs, seagrass beds, and walls in one location</li>
                    <li>• <strong>Beginner-Friendly:</strong> Perfect for certification courses and novices</li>
                    <li>• <strong>Sharks & Rays:</strong> Regular encounters with reef sharks and stingrays</li>
                    <li>• <strong>Beautiful Island:</strong> Charming island with restaurants and accommodations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Fun Fact</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-800">
                  <p>Nusa Lembongan is home to traditional seaweed farming and yellow-lipped sea kraits. The island offers a perfect blend of diving adventures and cultural experiences!</p>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Explore Nusa Lembongan
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

export default NusaLembonganPage;
