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
      "Access proprietary market insights and deal flow analysis from years of regional experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    icon: ShieldCheck,
    title: "Risk Filtration",
    description:
      "Multi-layered risk assessment including legal, financial, and operational due diligence.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
  },
  {
    icon: FileCheck,
    title: "Due Diligence Framework",
    description:
      "Standardized evaluation protocols ensure consistent quality across all asset classes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  },
  {
    icon: Network,
    title: "Network Leverage",
    description:
      "Established relationships with developers, operators, and institutions across the GCC.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
  },
  {
    icon: Scale,
    title: "Compliance Structure",
    description:
      "All activities operate within UAE regulatory frameworks with proper documentation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Decision Frameworks",
    description:
      "Structured processes help evaluate opportunities based on your risk tolerance and goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
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

        {/* Pillars Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/90 flex items-center justify-center shadow-lg">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement with Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-card">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=300&fit=crop"
              alt="Dubai skyline representing growth"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <p className="font-display text-xl md:text-2xl text-white mb-2">
                  "The goal is not to eliminate risk—it is to understand it, price it, and manage it."
                </p>
                <span className="text-white/80 text-sm">
                  — Core Investment Philosophy, CWI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
