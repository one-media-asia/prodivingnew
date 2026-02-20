import { Card, CardContent } from "@/components/ui/card";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://discoverkohtao.lovable.app/assets/turtle-CvgnzQIu.png",
      alt: "Sea turtle swimming in Koh Tao",
      category: "Marine Life"
    },
    {
      src: "https://discoverkohtao.lovable.app/assets/boat-B9XHPUH8.png",
      alt: "Divers on boat preparing for dive",
      category: "Diving"
    },
    {
      src: "https://discoverkohtao.lovable.app/assets/reef-5SzZhtPP.png",
      alt: "Colorful coral reef with tropical fish",
      category: "Coral Reefs"
    },
    {
      src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Colorful coral reef in Koh Tao",
      category: "Coral Reefs"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School of tropical fish",
      category: "Marine Life"
    },
    {
      src: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Whale shark encounter",
      category: "Big Fish"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Diving boat in crystal clear water",
      category: "Boats"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Underwater photographer",
      category: "Diving"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean-900 mb-4">Underwater Gallery</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Experience the breathtaking beauty of Koh Tao's underwater world through our photo gallery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-medium text-ocean-600">{image.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;