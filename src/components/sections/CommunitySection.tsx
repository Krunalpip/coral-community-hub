import { Shield, Users, TrendingUp, BarChart3, Building, Cpu } from "lucide-react";

const sectors = [
  { name: "Real Estate", icon: Building },
  { name: "Logistics", icon: TrendingUp },
  { name: "Aviation", icon: BarChart3 },
  { name: "Technology", icon: Cpu },
];

const CommunitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Why Community Matters
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              From Accumulation to{" "}
              <span className="text-gradient-gold">Structured Participation</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Traditional wealth-building focuses on accumulation—saving more, spending less,
                hoping markets cooperate. But true financial independence comes from
                <strong className="text-foreground"> systematic participation</strong> in
                income-generating assets.
              </p>
              <p>
                Coral Wealth Investment operates as a private investment community, not a fund.
                Members gain access to curated, asset-backed opportunities that have been
                vetted for consistency, not speculation.
              </p>
              <p>
                Every opportunity undergoes rigorous due diligence. Every member understands
                their risk profile. Every distribution is documented and transparent.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">Full Transparency</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">Risk Profiling</span>
              </div>
            </div>

            {/* Income Range */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-card border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-muted-foreground">Monthly Income Range</span>
                  <p className="font-display text-2xl font-semibold text-foreground mt-1">
                    1.8% – 6%
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">Based on</span>
                  <p className="text-foreground font-medium mt-1">Asset Class & Risk Profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sectors Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3" />
            <div className="relative bg-card rounded-2xl border border-border p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Active Investment Sectors
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {sectors.map((sector) => (
                  <div
                    key={sector.name}
                    className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all cursor-default"
                  >
                    <sector.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-medium text-foreground">{sector.name}</h4>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Additional sectors include{" "}
                  <span className="text-foreground">Education, Robotics, Healthcare</span> and
                  other emerging opportunities within the UAE ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
