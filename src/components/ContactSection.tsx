import { Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback("");
    setError("");

    try {
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);
      formBody.append("_subject", "New booking request from website");
      formBody.append("_replyto", formData.email);
      formBody.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/bookings@divinginasia.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formBody.toString(),
      });

      const result = await response.json();
      const success = result?.success === true || result?.success === "true";

      if (!response.ok || !success) {
        const message = result?.message || result?.error || "Unable to send your message.";
        throw new Error(message);
      }

      setFeedback("Thanks! Your booking request was sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : "Something went wrong while sending your message.";
      setError(`${message} Please try again or email bookings@divinginasia.com directly.`);
    } finally {
      setIsLoading(false);
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
            Fill out the form below and we’ll send your details straight to bookings@divinginasia.com.
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
                <a href="mailto:bookings@divinginasia.com" className="text-primary hover:text-primary/80 transition-colors">
                  bookings@divinginasia.com
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

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background/80 p-6 shadow-card space-y-6">
            {feedback && (
              <div className="rounded-xl bg-emerald-100 border border-emerald-200 p-4 text-emerald-900">
                {feedback}
              </div>
            )}
            {error && (
              <div className="rounded-xl bg-rose-100 border border-rose-200 p-4 text-rose-900">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
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
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
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
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us your booking details..."
                required
                disabled={isLoading}
                rows={6}
                className="w-full"
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending…" : "Send Booking Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
