import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Briefcase,
  Globe,
  Target,
  Heart,
} from "lucide-react";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "850+", label: "Community Members" },
  { value: "AED 500M+", label: "Assets Under Guidance" },
  { value: "24", label: "Active Projects" },
];

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description:
      "We believe investment should be understandable. Every opportunity we present comes with clear structure, documented risks, and transparent reporting.",
  },
  {
    icon: Users,
    title: "Community Over Competition",
    description:
      "Our members succeed together. Shared due diligence, collective intelligence, and aligned interests create better outcomes than isolated decision-making.",
  },
  {
    icon: Heart,
    title: "Integrity Over Growth",
    description:
      "We prioritize long-term trust over short-term gains. Every recommendation reflects our genuine assessment, not sales incentives.",
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
        <meta name="keywords" content="about CWI, Dubai investment company, UAE wealth management, private investment community" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  About Coral Wealth Investment
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                  Partners in Building{" "}
                  <span className="text-gradient-gold">Generational Wealth</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Since 2016, we have served as curators of opportunity, partners to
                  founders, and architects of long-term wealth ecosystems across the UAE.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-background">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="font-display text-4xl md:text-5xl font-semibold text-gradient-gold">
                      {stat.value}
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="p-8 rounded-2xl bg-background border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to institutional-quality investment opportunities
                    by creating a community where clarity, transparency, and consistent
                    income replace speculation and uncertainty.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-background border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted private investment community in the GCC,
                    known for integrity, intelligence, and meaningful wealth creation
                    across generations.
                  </p>
                </div>
              </div>

              {/* Motto */}
              <div className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-card border border-primary/20 text-center">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  Our Motto
                </span>
                <p className="font-display text-2xl md:text-3xl text-foreground mt-4">
                  "Wealth is not what you own. It is what you participate in—and pass on."
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
                  Our Values
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Principles That Guide Every Decision
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-card">
            <div className="container-custom text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ready to Explore?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join a community of investors who value clarity, consistency, and long-term
                thinking.
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
