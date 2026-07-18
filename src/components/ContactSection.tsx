import { Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const wordpressContactFormUrl = import.meta.env.VITE_WORDPRESS_CONTACT_FORM_URL || "";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-ocean-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contact
            <span className="text-gradient-ocean"> Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to book your adventure? Use the WordPress contact form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:bas@prodiving.asia" className="text-primary hover:text-primary/80 transition-colors">
                  bas@prodiving.asia
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Bali, Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Open Daily: 7:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h4 className="font-heading font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/prodivingasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://instagram.com/prodivingasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://wa.me/+31638697279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background/80 p-4 shadow-card">
            <h3 className="font-heading font-bold text-foreground mb-3">WordPress Contact Form</h3>
            {wordpressContactFormUrl ? (
              <div className="overflow-hidden rounded-xl border bg-white">
                <iframe
                  src={wordpressContactFormUrl}
                  title="WordPress contact form"
                  className="min-h-[560px] w-full border-0"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-muted-foreground/30 bg-muted/30 p-6 text-center text-sm text-muted-foreground">
                Add your WordPress contact page URL in the environment as VITE_WORDPRESS_CONTACT_FORM_URL.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
