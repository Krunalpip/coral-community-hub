import {
  Lightbulb,
  ShieldCheck,
  Key,
  Network,
  CheckCircle2,
  Scale,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Intelligence Sharing",
    description: "14+ years of UAE market experience translated into actionable insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Risk Mitigation",
    description: "Multi-layered due diligence, legal review, and insurance coverage.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
  },
  {
    number: "03",
    icon: Key,
    title: "Exclusive Access",
    description: "Private opportunities not available to general public investors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  },
  {
    number: "04",
    icon: Network,
    title: "Network Leverage",
    description: "Established connections with developers, operators, and institutions.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Validation Process",
    description: "90% of opportunities are filtered out—only the best proceed.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
  },
  {
    number: "06",
    icon: Scale,
    title: "Compliance Framework",
    description: "All activities operate within UAE regulatory requirements.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
];

const WhyItWorksSection = () => {
  return (
    <section id="why-it-works" className="section-padding bg-background relative overflow-hidden">
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
            Built on Intelligence, Structure,{" "}
            <span className="text-gradient-brand">Leverage</span>
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
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="text-3xl font-bold text-accent/80">{pillar.number}</span>
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
