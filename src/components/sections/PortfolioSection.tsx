import { ArrowUpRight, Building2, Plane, Truck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    sector: "Real Estate",
    icon: Building2,
    title: "Premium Residential Portfolio",
    location: "Dubai Marina & Business Bay",
    deployed: "AED 45M",
    returns: "2.4% Monthly",
    status: "Fully Operational",
    description:
      "Diversified holdings across premium residential units generating consistent rental income with capital appreciation potential.",
  },
  {
    id: 2,
    sector: "Aviation",
    icon: Plane,
    title: "Regional Aircraft Leasing",
    location: "GCC Region",
    deployed: "AED 28M",
    returns: "3.2% Monthly",
    status: "Active Distribution",
    description:
      "Structured aircraft leasing arrangements with established regional carriers, backed by physical assets and long-term contracts.",
  },
  {
    id: 3,
    sector: "Logistics",
    icon: Truck,
    title: "E-Commerce Fulfillment Centers",
    location: "JAFZA & DWC",
    deployed: "AED 32M",
    returns: "2.8% Monthly",
    status: "Expanding",
    description:
      "Strategic warehouse and fulfillment infrastructure supporting UAE's growing e-commerce sector with triple-net lease structures.",
  },
  {
    id: 4,
    sector: "Technology",
    icon: Cpu,
    title: "AI & Robotics Ventures",
    location: "Dubai Silicon Oasis",
    deployed: "AED 15M",
    returns: "5.5% Monthly",
    status: "Growth Phase",
    description:
      "Equity participation in vetted technology companies focused on industrial automation and artificial intelligence applications.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Portfolio Snapshot
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Assets. Real Returns.{" "}
            <span className="text-gradient-brand">Documented Performance.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every portfolio position represents tangible assets, verified due diligence,
            and structured income mechanisms. No speculation. No promises. Just process and outcomes.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      {item.sector}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-card border border-border">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Location</span>
                  <span className="text-sm text-foreground font-medium">{item.location}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Capital Deployed</span>
                  <span className="text-sm text-foreground font-medium">{item.deployed}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Target Return</span>
                  <span className="text-sm text-accent font-semibold">{item.returns}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="brand-outline" size="lg" className="group">
              View Full Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
