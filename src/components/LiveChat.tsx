import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Open email with the message (encode subject and body)
      const subject = encodeURIComponent("Live Chat Message");
      const body = encodeURIComponent(message);
      window.location.href = `mailto:bas@prodiving.asia?subject=${subject}&body=${body}`;
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full gradient-ocean shadow-ocean flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-slow"
        aria-label="Open live chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-ocean overflow-hidden animate-slide-in-right">
          {/* Header */}
          <div className="gradient-ocean p-4">
            <h3 className="text-primary-foreground font-heading font-bold text-lg">
              Live Chat
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              We typically reply within minutes
            </p>
          </div>

          {/* Chat Body */}
          <div className="p-4 min-h-[200px] bg-secondary/30">
            <div className="bg-card rounded-lg p-3 shadow-sm mb-4">
              <p className="text-sm text-foreground">
                👋 Hello! Welcome to ProDiving Asia. How can we help you today?
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Ask about rooms, tours, or diving!
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button
              size="icon"
              className="bg-primary hover:bg-primary/90"
              onClick={handleSend}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
