import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Calendar } from "lucide-react";
import dubaiHero from "@/assets/dubai-hero.jpg";

const stats = [
  { icon: Users, value: "158+", label: "Members" },
  { icon: Briefcase, value: "39+", label: "Projects" },
  { icon: Calendar, value: "Monthly", label: "Distributions" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <img
          src={dubaiHero}
          alt="Dubai skyline representing UAE investment opportunities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">
              Dubai-Based Private Investment Community
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Where Community Meets{" "}
            <span className="text-gradient-brand">
              Opportunity
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Participate. Diversify. Multiply.
          </p>

          {/* Text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Private network building income via UAE asset-backed opportunities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#form-member">
              <Button variant="hero" size="xl" className="group">
                Schedule Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#community">
              <Button variant="hero-outline" size="xl">
                Explore Community
              </Button>
            </a>
          </div>

          {/* Trust Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border hover:border-accent/30 transition-all shadow-card"
              >
                <stat.icon className="w-6 h-6 text-accent mb-3" />
                <span className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
