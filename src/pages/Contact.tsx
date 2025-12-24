import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    content: "Dubai, United Arab Emirates",
    detail: "By appointment only",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@coraluae.com",
    detail: "Response within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+971 XX XXX XXXX",
    detail: "Sun-Thu, 9AM-6PM GST",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Sunday - Thursday",
    detail: "9:00 AM - 6:00 PM GST",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will respond within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Coral Wealth Investment - Dubai</title>
        <meta
          name="description"
          content="Get in touch with Coral Wealth Investment. Schedule a confidential strategy call or send us an inquiry about our private investment community."
        />
        <meta name="keywords" content="contact CWI, Dubai investment contact, schedule investment call, UAE wealth consultation" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  Get In Touch
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Start the <span className="text-gradient-gold">Conversation</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Whether you have questions about our community, want to explore
                  opportunities, or simply need guidance—we are here to help.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        <p className="text-foreground mt-1">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-background border-border focus:border-primary"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-background border-border focus:border-primary"
                            placeholder="+971 XX XXX XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-primary"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-primary min-h-[150px]"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
