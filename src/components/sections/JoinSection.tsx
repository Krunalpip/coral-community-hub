import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JoinSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentRange: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Inquiry Received",
      description:
        "Our team will review your information and contact you within 24-48 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentRange: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Content */}
          <div>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-hover mb-8">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop"
                alt="Professional consultation meeting"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8">
                <div className="text-white max-w-sm">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Start Your Wealth Journey
                  </h3>
                  <p className="text-white/80 text-sm">
                    Join 850+ members building sustainable income through structured investments
                  </p>
                </div>
              </div>
            </div>

            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Begin Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Qualification, Not Registration.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This brief form helps us understand your investment profile and determine if CWI is the right fit for your financial goals.
            </p>

            {/* What to Expect */}
            <div className="space-y-3">
              {[
                "Review by our investor relations team",
                "Confidential strategy call",
                "Introduction to matching opportunities",
                "Guided onboarding support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-2xl border border-border p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Submit Your Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="investmentRange"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Investment Range *
                </label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  required
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select range</option>
                  <option value="100k-500k">AED 100,000 - 500,000</option>
                  <option value="500k-1m">AED 500,000 - 1,000,000</option>
                  <option value="1m-5m">AED 1,000,000 - 5,000,000</option>
                  <option value="5m+">AED 5,000,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Investment Goals (optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary min-h-[80px]"
                  placeholder="What are you looking to achieve?"
                />
              </div>

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
