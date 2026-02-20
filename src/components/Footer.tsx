import { Mail, MapPin, Heart, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#instructors", label: "Our Team" },
    { href: "#contact", label: "Contact" },
  ];

  const activities = [
    "Snorkeling",
    "Diving Courses",
    "PADI Certification",
    "Fun Dives",
    "Discover Scuba",
  ];

  return (
    <footer className="gradient-ocean pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://divinginasia.com/images/logo.avif" 
                alt="Pro Diving Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Your gateway to underwater adventures and tropical relaxation in beautiful Koh Tao, Thailand.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <MapPin className="w-4 h-4" />
              Koh Tao, Thailand
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-heading font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-primary-foreground font-heading font-bold text-lg mb-4">
              Activities
            </h4>
            <ul className="space-y-2">
              {activities.map((activity) => (
                <li key={activity}>
                  <span className="text-primary-foreground/80 text-sm">
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-heading font-bold text-lg mb-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:bas@prodiving.asia"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                bas@prodiving.asia
              </a>
              <a
                href="https://wa.me/+31638697279"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Chat
              </a>
              <div className="p-4 bg-primary-foreground/10 rounded-lg">
                <p className="text-primary-foreground text-sm font-medium mb-1">
                  Professional Diving
                </p>
                <p className="text-primary-foreground/80 text-xs">
                  ✓ PADI Certified Instructors
                </p>
                <p className="text-primary-foreground/80 text-xs">
                  ✓ Quality Equipment
                </p>
                <p className="text-primary-foreground/80 text-xs">
                  ✓ Small Group Sizes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © Copyright One Media Asia | Pro Diving Asia
            </p>
            <p className="text-primary-foreground/70 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-coral fill-coral" /> in Thailand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
