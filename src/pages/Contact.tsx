import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, ArrowRight, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    content: "SIT Towers, Dubai Silicon Oasis",
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
    content: "+971 4 552 8423",
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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section with Image */}
          <section className="relative min-h-[50vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=700&fit=crop"
                alt="Professional meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Get In Touch
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Start the Conversation
                </h1>
                <p className="text-lg text-white/90">
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
                {/* Contact Info with Images */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Map Image */}
                  <div className="relative rounded-2xl overflow-hidden h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=300&fit=crop"
                      alt="Dubai location"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">Dubai, UAE</p>
                      </div>
                    </div>
                  </div>

                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-foreground mt-1">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-card">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          Send Us a Message
                        </h2>
                        <p className="text-muted-foreground text-sm">We typically respond within 24 hours</p>
                      </div>
                    </div>

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
                            className="bg-background border-border focus:border-accent"
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
                            className="bg-background border-border focus:border-accent"
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
                          className="bg-background border-border focus:border-accent"
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
                          className="bg-background border-border focus:border-accent"
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
                          className="bg-background border-border focus:border-accent min-h-[150px]"
                          placeholder="Tell us more about your inquiry..."
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

          {/* Video Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                    Book a Call
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Prefer a Personal Conversation?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Schedule a confidential strategy call with our investor relations team to discuss your goals and explore how CWI can help.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "30-minute confidential call",
                      "Personalized investment guidance",
                      "No obligation consultation",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-hover aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Lhsfe6RxjcE"
                    title="Schedule a Call"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
