import { Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("lPmDz0peiFD5rZv0L");

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFallbackOpen, setIsFallbackOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_s5w9n1n",
        "template_1dhiaga",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "bas@prodiving.asia",
        }
      );
      
      setSuccessMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
      setIsLoading(false);
    } catch (error) {
      console.error("EmailJS failed:", error);
      setIsLoading(false);
      // Show fallback dialog with manual options
      setIsFallbackOpen(true);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // optional: could show a toast; keep simple for now
    } catch (err) {
      // ignore
    }
  };

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
            Ready to book your adventure? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1"> right click on email below and select open in mail.google or your client Email</h3>
                <a href="mailto:bas@prodiving.asia"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
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
                <p className="text-muted-foreground">
                  Koh Tao, Thailand
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Open Daily: 7:00 AM - 9:00 PM
                </p>
              </div>
            </div>

            {/* Social Media */}
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

            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h4 className="font-heading font-bold text-foreground mb-3">Quick Facts</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  PADI 5-Star Dive Center
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  A/C available: +300 THB/night
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  Professional certified instructors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  Small group sizes
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {successMessage && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
                {successMessage}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your plans..."
                required
                disabled={isLoading}
                rows={4}
                className="w-full resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 font-heading font-semibold"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <Dialog open={isFallbackOpen} onOpenChange={setIsFallbackOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send Your Message</DialogTitle>
                <DialogDescription>
                  Please use one of these options to send your message to bas@prodiving.asia
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-medium">Recipient</p>
                  <div className="flex items-center gap-2">
                    <a href="mailto:bas@prodiving.asia" className="text-primary">bas@prodiving.asia</a>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard("bas@prodiving.asia")}>
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">Message</p>
                  <textarea
                    readOnly
                    value={`Subject: Contact Form: ${formData.name}\n\n${formData.message}`}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    rows={6}
                    aria-label="Your message to copy"
                  />
                  <div className="mt-2">
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(`Subject: Contact Form: ${formData.name}\n\n${formData.message}`)}>
                      Copy Message
                    </Button>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-4 flex flex-col gap-2">
                <p className="text-sm text-muted-foreground mb-2">Please copy this message and send it to: <strong>bas@prodiving.asia</strong></p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard("bas@prodiving.asia")} className="w-full">
                    📋 Copy Email Address
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(`Subject: Contact Form: ${formData.name}\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)} className="w-full">
                    📋 Copy Full Message
                  </Button>
                </div>
                <Button variant="ghost" onClick={() => setIsFallbackOpen(false)} className="w-full">Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
