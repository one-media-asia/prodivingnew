import { Award, GraduationCap, Star, Compass, Users, Anchor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Divemaster",
    level: "Professional",
    duration: "2-4 weeks",
    description: "Begin your professional diving career. Lead certified divers and assist instructors.",
    icon: Star,
    features: ["Dive leadership skills", "Rescue techniques", "Dive site management", "Career foundation"],
  },
  {
    id: 2,
    title: "Assistant Instructor",
    level: "Professional",
    duration: "1-2 weeks",
    description: "Take the next step in your career. Conduct training under supervision.",
    icon: Users,
    features: ["Teaching fundamentals", "Pool training skills", "Classroom presentation", "Student evaluation"],
  },
  {
    id: 3,
    title: "Open Water Instructor",
    level: "Professional",
    duration: "2 weeks",
    description: "Become a fully certified PADI instructor. Teach and certify new divers.",
    icon: GraduationCap,
    features: ["Full certification authority", "Course director training", "Marketing skills", "Business development"],
  },
  {
    id: 4,
    title: "Technical Diving",
    level: "Specialty",
    duration: "Varies",
    description: "Explore beyond recreational limits with advanced technical training.",
    icon: Compass,
    features: ["Deep diving", "Decompression procedures", "Mixed gas diving", "Cave & wreck specialties"],
  },
  {
    id: 5,
    title: "Specialty Instructor",
    level: "Professional",
    duration: "1-2 days per specialty",
    description: "Expand your teaching credentials with specialty instructor ratings.",
    icon: Award,
    features: ["Deep diving", "Nitrox", "Wreck diving", "Night diving"],
  },
  {
    id: 6,
    title: "IDC Staff Instructor",
    level: "Professional",
    duration: "Varies",
    description: "Assist with IDC courses and help shape the next generation of instructors.",
    icon: Anchor,
    features: ["IDC assistance", "Mentoring candidates", "Course evaluation", "Leadership development"],
  },
];

const DivingCoursesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Professional Training
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            PADI
            <span className="text-gradient-ocean"> Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From Divemaster to Instructor and beyond. Start or advance your professional diving career with our comprehensive PADI training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card
                key={course.id}
                className="group hover:shadow-ocean transition-all duration-300 border-border/50 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Duration: {course.duration}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {course.description}
                  </p>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-tropical flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 font-heading font-semibold"
          >
            Inquire About Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DivingCoursesSection;
