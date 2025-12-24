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

    // Simulate form submission
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
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Begin Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Qualification, Not Registration.{" "}
              <span className="text-gradient-brand">Alignment, Not Selling.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We take membership seriously. This brief form helps us understand your
              investment profile and determine if CWI is the right fit for your
              financial goals. All information is treated with strict confidentiality.
            </p>

            {/* What to Expect */}
            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold text-foreground">
                What happens next:
              </h4>
              <div className="space-y-3">
                {[
                  "Review of your inquiry by our investor relations team",
                  "Confidential strategy call to discuss your goals",
                  "Introduction to opportunities matching your profile",
                  "Guided onboarding with full documentation support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-2xl border border-border p-8 md:p-10">
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
                  Tell us about your investment goals (optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary min-h-[100px]"
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
                By submitting, you agree to our Privacy Policy. Your information is
                secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
