import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about tax returns? Our team is here to help you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                className="min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-12 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">support@taxbuddy.de</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;