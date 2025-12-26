import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Globe,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: "158+", label: "Shareholders" },
  { value: "7", label: "Countries" },
  { value: "39+", label: "Portfolios" },
  { value: "AED 30M+", label: "Capital Deployed" },
];

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description:
      "We believe investment should be understandable. Every opportunity comes with clear structure and transparent reporting.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Community Over Competition",
    description:
      "Our members succeed together. Shared due diligence and collective intelligence create better outcomes.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
  {
    icon: Heart,
    title: "Integrity Over Growth",
    description:
      "We prioritize long-term trust over short-term gains. Every recommendation reflects genuine assessment.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop"
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Coral Wealth Investment - Dubai Investment Community</title>
        <meta
          name="description"
          content="Learn about Coral Wealth Investment's mission, vision, and values. Discover how we've built Dubai's trusted private investment community since 2016."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section with Image */}
          <section className="relative min-h-[70vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=900&fit=crop"
                alt="Dubai skyline at sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
            </div>
            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                    About Coral Wealth Investment
                  </span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Partners in Building Generational Wealth
                  </h1>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Since 2016, we have served as curators of opportunity, partners to
                    founders, and architects of long-term wealth ecosystems across the UAE.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                      alt="Team collaboration"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                      <p className="text-3xl font-bold text-primary">8+</p>
                      <p className="text-muted-foreground text-sm">Years of Trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section with Images */}
          <section className="py-16 bg-card">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-6 rounded-2xl bg-background border border-border hover:shadow-card transition-shadow">
                    <span className="font-display text-4xl md:text-5xl font-bold text-gradient-brand">
                      {stat.value}
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision with Images */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-hover transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop"
                      alt="Dubai buildings"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To democratize access to institutional-quality investment opportunities
                      by creating a community where clarity, transparency, and consistent
                      income replace speculation and uncertainty.
                    </p>
                  </div>
                </div>

                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-hover transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=300&fit=crop"
                      alt="Modern office building"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      Our Vision
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To become the most trusted private investment community in the GCC,
                      known for integrity, intelligence, and meaningful wealth creation
                      across generations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Motto with Background */}
              <div className="mt-12 relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=300&fit=crop"
                  alt="Professional setting"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/85" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <div>
                    <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                      Our Motto
                    </span>
                    <p className="font-display text-2xl md:text-3xl text-white mt-3">
                      "Wealth is not what you own. It is what you participate in—and pass on."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values with Images */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Our Values
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Principles That Guide Every Decision
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-hover transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                    Our Story
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Watch How We Build Wealth Together
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Discover the journey of Coral Wealth Investment and how we've helped hundreds of investors achieve financial clarity and consistent income.
                  </p>
                  <Link to="/contact">
                    <Button variant="brand" size="lg" className="group">
                      Join Our Community
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-hover aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Lhsfe6RxjcE"
                    title="About CWI"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=500&fit=crop"
                alt="Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
            </div>
            <div className="container-custom relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Join a community of investors who value clarity, consistency, and long-term thinking.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Schedule a Strategy Call
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
