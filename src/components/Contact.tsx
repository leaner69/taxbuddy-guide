import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Need Help?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions about your tax return? Our team is here to help!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-secondary-foreground">
                    Email Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Response within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-secondary-foreground">
                    Live Chat
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Available Mon-Fri, 9-17
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-secondary-foreground">
                    Secure & Trusted
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    SSL encrypted communication
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};