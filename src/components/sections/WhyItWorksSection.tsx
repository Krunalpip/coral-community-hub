import {
  Search,
  ShieldCheck,
  Users,
  FileCheck,
  Network,
  Scale,
} from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Intelligence Sharing",
    description:
      "Access proprietary market insights, deal flow analysis, and sector reports developed through years of regional experience.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Filtration",
    description:
      "Every opportunity passes through multi-layered risk assessment including legal, financial, and operational due diligence.",
  },
  {
    icon: FileCheck,
    title: "Due Diligence Framework",
    description:
      "Standardized evaluation protocols ensure consistent quality across all asset classes and investment structures.",
  },
  {
    icon: Network,
    title: "Network Leverage",
    description:
      "Benefit from established relationships with developers, operators, and institutions across the GCC region.",
  },
  {
    icon: Scale,
    title: "Compliance Structure",
    description:
      "All activities operate within UAE regulatory frameworks with proper documentation and investor protections.",
  },
  {
    icon: Users,
    title: "Decision Frameworks",
    description:
      "Structured processes help you evaluate opportunities based on your risk tolerance, timeline, and financial goals.",
  },
];

const WhyItWorksSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Why It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience Translated Into{" "}
            <span className="text-gradient-brand">Systematic Process</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            What separates hope from confidence is structure. Our frameworks transform
            decades of investment experience into repeatable, verifiable systems.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-card border border-accent/20 shadow-card text-center">
          <p className="font-display text-xl md:text-2xl text-foreground mb-4">
            "The goal is not to eliminate risk—it is to understand it, price it, and manage it."
          </p>
          <span className="text-muted-foreground text-sm">
            — Core Investment Philosophy, CWI
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
