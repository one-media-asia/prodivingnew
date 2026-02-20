import { Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const instructors = [
 
   {
    name: "Bas",
    title: "Course Director",
    specialties: ["No 1 Course Director in Asia", "Advanced Womanizer", "Rescue"],
    experience: "15+ Years",
  },
   {
    name: "M. Soworka",
    title: "Course Director",
    specialties: ["Drinking", "Drinking", "Drinking"],
    experience: "15+ Years",
  },
  {
    name: "Mr. Peter",
    title: "PADI Instructor",
    specialties: ["Technical Diving", "Deep Dives", "Night Dives"],
    experience: "14+ Years",
  },
 
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Expert Team
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Our
            <span className="text-gradient-ocean"> Instructors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            All courses and dive experiences are led by our certified professional instructors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card
              key={instructor.name}
              className="border-0 shadow-card hover:shadow-ocean transition-all duration-300 text-center overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-2 gradient-ocean" />
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full gradient-ocean mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">
                    {instructor.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  {instructor.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {instructor.title}
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-tropical" />
                  <span className="text-sm font-semibold text-foreground">
                    {instructor.experience}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {instructor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
