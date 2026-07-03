import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, MapPin, Thermometer } from "lucide-react";

const NusaPenidaPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Premium Dive Site
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                Nusa Penida
              </h1>
              <p className="text-xl text-ocean-700 mb-8">
                Experience the thrill of diving with majestic manta rays and explore one of Indonesia's most spectacular underwater destinations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">15 minutes by boat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Depth: 15-40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Temperature: 24-28°C</span>
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
                        <span>Manta rays (especially during dry season)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Vibrant coral gardens and reef walls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Tropical fish species in abundance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sea turtles and reef sharks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dramatic underwater canyons and channels</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Best Dive Spots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Manta Point:</strong> Premier manta ray encounter site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Crystal Bay:</strong> Deep diving & pelagic life</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Ped Ped:</strong> Shallow reef diving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Gunboat Wreck:</strong> Historic wreck exploration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Sardine Reef:</strong> Abundant marine life</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Dive Information</CardTitle>
                  <CardDescription>
                    Essential details for planning your Nusa Penida diving adventure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Experience Level:</h4>
                      <p className="text-ocean-700">Intermediate to Advanced (varying by site)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Best Time to Visit:</h4>
                      <p className="text-ocean-700">July to October for manta rays and calm conditions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Visibility:</h4>
                      <p className="text-ocean-700">15-30 meters depending on season</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-900 mb-2">Current:</h4>
                      <p className="text-ocean-700">Can be strong at times - requires good buoyancy control</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Why Dive Nusa Penida?</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="space-y-2">
                    <li>• <strong>Manta Ray Capital:</strong> Highest concentration of manta rays in Indonesia</li>
                    <li>• <strong>Unique Encounters:</strong> Consistent pelagic and large fish sightings</li>
                    <li>• <strong>Pristine Reefs:</strong> Some of Bali's healthiest coral ecosystems</li>
                    <li>• <strong>Adventure Diving:</strong> Challenging conditions create unforgettable experiences</li>
                    <li>• <strong>World-Class Destination:</strong> Featured in top diving publications worldwide</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Dive Nusa Penida with Us
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

export default NusaPenidaPage;
