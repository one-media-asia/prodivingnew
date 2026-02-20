import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiveSitesSection = () => {
  const diveSites = [
    {
      name: "Sail Rock",
      difficulty: "Advanced",
      depth: "8-40m",
      highlights: ["Whale sharks", "Bull sharks", "Vertical swim-through"],
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chumphon Pinnacle",
      difficulty: "Intermediate",
      depth: "14-32m",
      highlights: ["Barracudas", "Trevally", "Coral gardens"],
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Southwest Pinnacle",
      difficulty: "Intermediate",
      depth: "14-33m",
      highlights: ["Whale sharks", "Giant groupers", "Coral formations"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Shark Island",
      difficulty: "Beginner",
      depth: "5-18m",
      highlights: ["Reef sharks", "Moray eels", "Easy diving"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "White Rock",
      difficulty: "Beginner",
      depth: "8-22m",
      highlights: ["Coral gardens", "Tropical fish", "Photography"],
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Green Rock",
      difficulty: "Beginner",
      depth: "6-18m",
      highlights: ["Sea turtles", "Angelfish", "Butterflyfish"],
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="dive-sites" className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean-900 mb-4">World-Class Dive Sites</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Explore our most spectacular underwater locations, each offering unique marine encounters and breathtaking coral formations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diveSites.map((site, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{site.name}</CardTitle>
                  <Badge variant={site.difficulty === 'Advanced' ? 'destructive' : site.difficulty === 'Intermediate' ? 'default' : 'secondary'}>
                    {site.difficulty}
                  </Badge>
                </div>
                <CardDescription>Depth: {site.depth}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {site.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-ocean-600 text-white py-2 px-4 rounded-md hover:bg-ocean-700 transition-colors">
                  Book This Dive
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiveSitesSection;